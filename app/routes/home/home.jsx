import pencityTexture from '~/assets/Pencityimage.jpg';
import vlmTexture from '~/assets/VLMimage.png';
import ferTexture from '~/assets/ferimage.png';
import mangetamainTexture from '~/assets/mangetamainimage.png';
import sceneTexture from '~/assets/sceneimage.png';
import carnivalTexture from '~/assets/carnivalimage.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Pencity"
        description="Turning hand-drawn sketches into real-time AR interactive experiences"
        buttonText="View project"
        buttonLink="/projects/pencity"
        model={{
          type: 'laptop',
          alt: 'Pencity project',
          textures: [
            {
              srcSet: `${pencityTexture} 1280w, ${pencityTexture} 2560w`,
              placeholder: pencityTexture,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Autonomous Drone Exploration from Natural Language"
        description="A multimodal drone system that interprets natural-language instructions and plans dynamic exploration paths."
        buttonText="View project"
        buttonLink="/projects/vlm"
        model={{
          type: 'laptop',
          alt: 'VLM drone project',
          textures: [
            {
              srcSet: `${vlmTexture} 1280w, ${vlmTexture} 2560w`,
              placeholder: vlmTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Facial Emotion Recognition with AI"
        description="Real-time facial emotion recognition using DeepFace, PyTorch, and custom CNN pipelines."
        buttonText="View project"
        buttonLink="/projects/fer"
        model={{
          type: 'laptop',
          alt: 'Facial emotion recognition project',
          textures: [
            {
              srcSet: `${ferTexture} 1280w, ${ferTexture} 2560w`,
              placeholder: ferTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Mangetamain - Recipe Clustering & Exploration"
        description="An interactive app for exploring recipe clusters through nutritional and sensory patterns."
        buttonText="View project"
        buttonLink="/projects/mangetamain"
        model={{
          type: 'laptop',
          alt: 'Mangetamain project',
          textures: [
            {
              srcSet: `${mangetamainTexture} 1280w, ${mangetamainTexture} 2560w`,
              placeholder: mangetamainTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Natural-Language Video Scene Search"
        description="A semantic search engine for retrieving relevant video scenes from natural-language queries."
        buttonText="View project"
        buttonLink="/projects/scene"
        model={{
          type: 'laptop',
          alt: 'Scene search project',
          textures: [
            {
              srcSet: `${sceneTexture} 1280w, ${sceneTexture} 2560w`,
              placeholder: sceneTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Carnival Unending"
        description="My first game jam project: a narrative-driven game set during the Venice Carnevale."
        buttonText="View game"
        buttonLink="/projects/carnival"
        model={{
          type: 'laptop',
          alt: 'Carnival Unending project',
          textures: [
            {
              srcSet: `${carnivalTexture} 1280w, ${carnivalTexture} 2560w`,
              placeholder: carnivalTexture,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
