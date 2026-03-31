import cityModel from '~/assets/phonecity.glb';
import milkywayBg from '~/assets/milkyway.jpg';
import { Loader } from '~/components/loader';
import { Section } from '~/components/section';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useReducedMotion, useSpring } from 'framer-motion';
import { useInViewport, useWindowSize } from '~/hooks';
import {
  createContext,
  memo,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { OrbitControls } from 'three-stdlib';
import {
  ACESFilmicToneMapping,
  AmbientLight,
  Clock,
  DirectionalLight,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from 'three';
import { EquirectangularReflectionMapping } from 'three';
import { clamp } from '~/utils/clamp';
import { classes, media, msToNum } from '~/utils/style';
import { cleanRenderer, cleanScene, modelLoader, removeLights, textureLoader } from '~/utils/three';
import { throttle } from '~/utils/throttle';
import styles from './earth.module.css';

const nullTarget = { x: 0, y: 0, z: 2 };

const interpolatePosition = (value, nextValue, percent) =>
  value + percent * (nextValue - value);

const getPositionValues = section => {
  if (!section || !section.camera) return nullTarget;
  return {
    x: section.camera[0],
    y: section.camera[1],
    z: section.camera[2],
  };
};

const cameraSpringConfig = {
  stiffness: 80,
  damping: 40,
  mass: 2,
  restSpeed: 0.001,
  restDelta: 0.001,
};

const EarthContext = createContext({});

export const Earth = ({
  position = [0, 0, 0],
  scale = 1,
  className,
  children,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [grabbing, setGrabbing] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const sectionRefs = useRef([]);
  const container = useRef();
  const canvas = useRef();
  const scene = useRef();
  const renderer = useRef();
  const camera = useRef();
  const clock = useRef();
  const sceneModel = useRef();
  const inViewport = useInViewport(canvas);
  const animationFrame = useRef();
  const initCameraPosition = useRef(getPositionValues(sectionRefs.current[0]));
  const controls = useRef();
  const contentAdded = useRef();
  const mounted = useRef();
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const reduceMotion = useReducedMotion();
  const cameraXSpring = useSpring(0, cameraSpringConfig);
  const cameraYSpring = useSpring(0, cameraSpringConfig);
  const cameraZSpring = useSpring(0, cameraSpringConfig);

  const renderFrame = useCallback(() => {
    if (!inViewport) {
      cancelAnimationFrame(animationFrame.current);
      return;
    }

    animationFrame.current = requestAnimationFrame(renderFrame);
    const delta = clock.current.getDelta();

    // Auto-rotate the model
    if (sceneModel.current) {
      sceneModel.current.rotation.y += delta * 0.3;
    }

    controls.current.update();
    renderer.current.render(scene.current, camera.current);
  }, [inViewport]);

  useEffect(() => {
    mounted.current = true;
    const { innerWidth, innerHeight } = window;

    renderer.current = new WebGLRenderer({
      canvas: canvas.current,
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: true,
    });
    renderer.current.setPixelRatio(1);
    renderer.current.outputColorSpace = SRGBColorSpace;
    renderer.current.toneMapping = ACESFilmicToneMapping;

    camera.current = new PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100);
    camera.current.position.x = initCameraPosition.current.x;
    camera.current.position.y = initCameraPosition.current.y;
    camera.current.position.z = initCameraPosition.current.z;
    camera.current.lookAt(0, 0, 0);

    cameraXSpring.set(camera.current.position.x, false);
    cameraYSpring.set(camera.current.position.y, false);
    cameraZSpring.set(camera.current.position.z, false);

    scene.current = new Scene();
    clock.current = new Clock();

    const ambientLight = new AmbientLight(0xffffff, 1.2);
    const dirLight = new DirectionalLight(0xffffff, 2);
    dirLight.position.set(3, 2, 1);
    const lights = [ambientLight, dirLight];
    lights.forEach(light => scene.current.add(light));

    controls.current = new OrbitControls(camera.current, canvas.current);
    controls.current.enableZoom = false;
    controls.current.enablePan = false;
    controls.current.enableDamping = false;
    controls.current.rotateSpeed = 0.5;

    return () => {
      mounted.current = false;
      cancelAnimationFrame(animationFrame.current);
      removeLights(lights);
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleControlStart = () => {
      setGrabbing(true);
      cameraXSpring.stop();
      cameraYSpring.stop();
      cameraZSpring.stop();
    };

    const handleControlEnd = () => {
      cameraXSpring.set(camera.current.position.x, false);
      cameraYSpring.set(camera.current.position.y, false);
      cameraZSpring.set(camera.current.position.z, false);
      setGrabbing(false);
    };

    controls.current.addEventListener('start', handleControlStart);
    controls.current.addEventListener('end', handleControlEnd);

    return () => {
      controls.current.removeEventListener('start', handleControlStart);
      controls.current.removeEventListener('end', handleControlEnd);
    };
  }, [cameraXSpring, cameraYSpring, cameraZSpring]);

  useEffect(() => {
    if (loaded) {
      const unsubscribeX = cameraXSpring.on('change', v => { camera.current.position.x = v; });
      const unsubscribeY = cameraYSpring.on('change', v => { camera.current.position.y = v; });
      const unsubscribeZ = cameraZSpring.on('change', v => { camera.current.position.z = v; });
      return () => { unsubscribeX(); unsubscribeY(); unsubscribeZ(); };
    }
  }, [cameraXSpring, cameraYSpring, cameraZSpring, loaded]);

  useEffect(() => {
    if (windowWidth <= media.tablet) {
      controls.current.enabled = false;
    }
  }, [windowWidth]);

  useEffect(() => {
    if (loaded) return;

    const loadModel = async () => {
      const gltf = await modelLoader.loadAsync(cityModel);
      sceneModel.current = gltf.scene;

      sceneModel.current.position.set(position[0], position[1], position[2]);
      sceneModel.current.scale.set(scale, scale, scale);
    };

    const loadBackground = async () => {
      const backgroundTexture = await textureLoader.loadAsync(milkywayBg);
      backgroundTexture.mapping = EquirectangularReflectionMapping;
      backgroundTexture.colorSpace = SRGBColorSpace;
      scene.current.background = backgroundTexture;
      await renderer.current.initTexture(backgroundTexture);
    };

    const handleLoad = async () => {
      await Promise.all([loadBackground(), loadModel()]);

      if (mounted.current) {
        setLoaded(true);
      }
    };

    startTransition(() => {
      handleLoad();
      setTimeout(() => { setLoaderVisible(true); }, 1000);
    });
  }, [loaded, position, scale]);

  useEffect(() => {
    if (loaded && !contentAdded.current) {
      scene.current.add(sceneModel.current);
      contentAdded.current = true;
    }

    if (loaded && inViewport) {
      setVisible(true);
      renderFrame();
    }

    return () => {
      cancelAnimationFrame(animationFrame.current);
    };
  }, [renderFrame, inViewport, loaded]);

  useEffect(() => {
    renderer.current.setSize(windowWidth, windowHeight);
    camera.current.aspect = windowWidth / windowHeight;
    camera.current.updateProjectionMatrix();
  }, [windowWidth, windowHeight]);

  const handleScroll = useCallback(() => {
    if (!container.current) return;

    const { offsetTop } = container.current;
    const { innerHeight } = window;
    const currentScrollY = window.scrollY - offsetTop;

    const update = () => {
      const sectionCount = sectionRefs.current.length - 1;
      const absoluteSection = Math.floor(currentScrollY / innerHeight);
      const currentSectionIndex = clamp(absoluteSection, 0, sectionCount);
      const currentSection = sectionRefs.current[currentSectionIndex];
      const nextSection = sectionRefs.current[currentSectionIndex + 1];

      const currentTarget = getPositionValues(currentSection) || nullTarget;
      const nextTarget = getPositionValues(nextSection) || nullTarget;
      const sectionScrolled =
        (currentScrollY - innerHeight * currentSectionIndex) / innerHeight;
      const scrollPercent = clamp(sectionScrolled, 0, 1);

      const currentX = interpolatePosition(currentTarget.x, nextTarget.x, scrollPercent);
      const currentY = interpolatePosition(currentTarget.y, nextTarget.y, scrollPercent);
      const currentZ = interpolatePosition(currentTarget.z, nextTarget.z, scrollPercent);

      if (grabbing) return;

      if (reduceMotion) {
        camera.current.position.set(currentX, currentY, currentZ);
        return;
      }

      cameraXSpring.set(currentX);
      cameraYSpring.set(currentY);
      cameraZSpring.set(currentZ);
    };

    requestAnimationFrame(update);
  }, [cameraXSpring, cameraYSpring, cameraZSpring, grabbing, reduceMotion]);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);

    if (loaded && inViewport) {
      window.addEventListener('scroll', throttledScroll);
    }

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [handleScroll, inViewport, loaded]);

  const registerSection = useCallback(section => {
    sectionRefs.current = [...sectionRefs.current, section];
  }, []);

  const unregisterSection = useCallback(section => {
    sectionRefs.current = sectionRefs.current.filter(item => item !== section);
  }, []);

  return (
    <EarthContext.Provider value={{ registerSection, unregisterSection }}>
      <div className={classes(styles.earth, className)} ref={container}>
        <div className={styles.viewport}>
          <canvas
            className={styles.canvas}
            data-visible={loaded && visible}
            data-grabbing={grabbing}
            ref={canvas}
          />
          <div className={styles.vignette} />
        </div>
        <div className={styles.sections}>{children}</div>
        <Transition
          unmount
          in={!loaded && loaderVisible}
          timeout={msToNum(tokens.base.durationL)}
        >
          {visible => (
            <Section className={styles.loader} data-visible={visible}>
              <Loader />
            </Section>
          )}
        </Transition>
      </div>
    </EarthContext.Provider>
  );
};

export const EarthSection = memo(
  ({
    children,
    scrim,
    scrimReverse,
    className,
    camera = [0, 0, 0],
  }) => {
    const { registerSection, unregisterSection } = useContext(EarthContext);
    const sectionRef = useRef();

    useEffect(() => {
      const section = { camera, sectionRef };
      registerSection(section);
      return () => { unregisterSection(section); };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [registerSection, unregisterSection]);

    return (
      <div
        className={classes(styles.section, className)}
        data-scrim={scrim}
        data-scrim-reverse={scrimReverse}
        ref={sectionRef}
      >
        {children}
      </div>
    );
  }
);
