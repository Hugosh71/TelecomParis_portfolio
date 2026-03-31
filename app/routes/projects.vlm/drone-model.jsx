import droneGlb from '~/assets/Drone2.glb';
import { useEffect, useRef } from 'react';
import {
  AmbientLight,
  Clock,
  DirectionalLight,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from 'three';
import { cleanRenderer, cleanScene, modelLoader, removeLights } from '~/utils/three';

export const DroneModel = ({ className, style }) => {
  const canvasRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const { clientWidth, clientHeight } = container;

    const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(clientWidth, clientHeight);
    renderer.outputColorSpace = SRGBColorSpace;

    const camera = new PerspectiveCamera(45, clientWidth / clientHeight, 0.1, 100);
    camera.position.set(0, 0.5, 1.05);
    camera.lookAt(0, 0.1, 0);

    const scene = new Scene();
    const clock = new Clock();

    const ambientLight = new AmbientLight(0xffffff, 1.5);
    const dirLight = new DirectionalLight(0xffffff, 2);
    dirLight.position.set(5, 5, 5);
    const lights = [ambientLight, dirLight];
    lights.forEach(l => scene.add(l));

    let animFrame;
    let model;

    modelLoader.loadAsync(droneGlb).then(gltf => {
      model = gltf.scene;
      scene.add(model);

      const animate = () => {
        animFrame = requestAnimationFrame(animate);
        const delta = clock.getDelta();
        if (model) {
          model.rotation.y += delta * 0.5;
        }
        renderer.render(scene, camera);
      };
      animate();
    });

    const handleResize = () => {
      const { clientWidth: w, clientHeight: h } = container;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', handleResize);
      removeLights(lights);
      cleanScene(scene);
      cleanRenderer(renderer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: '100%', height: '400px', ...style }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};
