import backgroundSprLarge from '~/assets/Pencityimage.jpg';
import backgroundSprPlaceholder from '~/assets/Pencityimage.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/black.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/black.jpg';
import imageSprBackgroundVolcanism from '~/assets/black.jpg';
import backgroundSpr from '~/assets/Pencityimage.jpg';
import imageSprComponentsDarkLarge from '~/assets/yolov8.png';
import imageSprComponentsDarkPlaceholder from '~/assets/yolov8.png';
import imageSprComponentsDark from '~/assets/yolov8.png';
import imageSprComponentsLightLarge from '~/assets/yolov8.png';
import imageSprComponentsLightPlaceholder from '~/assets/yolov8.png';
import imageSprComponentsLight from '~/assets/yolov8.png';
import imageSprDesignSystemDarkLarge from '~/assets/dataset.png';
import imageSprDesignSystemDarkPlaceholder from '~/assets/dataset.png';
import imageSprDesignSystemDark from '~/assets/dataset.png';
import imageSprDesignSystemLightLarge from '~/assets/dataset.png';
import imageSprDesignSystemLightPlaceholder from '~/assets/dataset.png';
import imageSprDesignSystemLight from '~/assets/dataset.png';
import imageSprLessonBuilderDarkLarge from '~/assets/Pencityimage.jpg';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/Pencityimage.jpg';
import imageSprLessonBuilderDark from '~/assets/Pencityimage.jpg';
import imageSprLessonBuilderLightLarge from '~/assets/Pencityimage.jpg';
import imageSprLessonBuilderLightPlaceholder from '~/assets/Pencityimage.jpg';
import imageSprLessonBuilderLight from '~/assets/Pencityimage.jpg';
import videoSprMotionLarge from '~/assets/training.png';
import videoSprMotionPlaceholder from '~/assets/training.png';
import videoSprMotion from '~/assets/training.png';
import unityImage from '~/assets/unity.png';
import demopen from '~/assets/demopen.mp4';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './pencity.module.css';

const Earth = lazy(() => import('./pencity-earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./pencity-earth').then(module => ({ default: module.EarthSection }))
);

const title = 'Real-Time Augmented Reality for hand-drawn sketches';
const description =
  'A master thesis project exploring real-time object detection and augmented reality. Pencity transforms hand-drawn sketches into interactive 3D city elements using YOLO and a custom model trained on the Google QuickDraw dataset.';
const roles = [
  'Computer Vision Engineering',
  'Deep Learning (YOLO)',
  'Dataset Generation & Labeling',
  'Real-Time Detection Pipeline',
  'Unity & AR Foundation Integration',
  '3D Interaction & AR Prototyping',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Pencity = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Hugosh71/pencity/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprLessonBuilderDark} 1280w, ${imageSprLessonBuilderDarkLarge} 2560w`
                  : `${imageSprLessonBuilderLight} 1280w, ${imageSprLessonBuilderLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Challenges of the project"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The challenge</ProjectSectionHeading>
            <ProjectSectionText>
              Detecting hand-drawn sketches in real time for an augmented reality environment is far from trivial. Drawings vary in style, thickness, perspective, lighting conditions, and overall quality.
              Pencity aims to turn these imperfect, spontaneous sketches into an interactive 3D city seen through a smartphone. Achieving this requires a detection model that is fast, lightweight, and reliable enough to run directly on mobile devices, without sacrificing accuracy.
              The core challenge is therefore to design a system that can interpret simple strokes on paper and translate them into structured, meaningful objects in real time.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprComponentsDark} 1024w, ${imageSprComponentsDarkLarge} 2048w`
                  : `${imageSprComponentsLight} 1024w, ${imageSprComponentsLightLarge} 2048w`
              }
              width={1024}
              hright={800}
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`How to chose the right detection model`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(theme)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Choosing the right detection model</ProjectSectionHeading>
              <ProjectSectionText>
                Since Pencity is designed to run on a smartphone in real time, the core technical
                challenge was to find a model that could balance speed and accuracy.
                We chose the YOLO family because of its strong performance in real-time object
                detection, and focused our experiments on lightweight versions that could be
                integrated into a mobile augmented reality pipeline.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprDesignSystemDark} 1280w, ${imageSprDesignSystemDarkLarge} 2560w`
                  : `${imageSprDesignSystemLight} 1280w, ${imageSprDesignSystemLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="Dataset pipeline"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Building the dataset pipeline</ProjectSectionHeading>
              <ProjectSectionText>
                The QuickDraw dataset gave us a massive collection of sketches, but it was not
                  directly usable for object detection. To make it compatible with YOLO, we built a
                  custom pipeline that generates training canvases filled with multiple drawings,
                  applies random placement and transformations, and automatically produces the
                  corresponding bounding-box annotations.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Training for real-time detection</ProjectSectionHeading>
                  <ProjectSectionText>
                    Training the model meant going beyond standard YOLO usage. Because our data
                    consists of rough black-and-white sketches rather than natural images, we had to
                    start from scratch with randomly initialized weights instead of relying on
                    pretrained models. We then trained and evaluated lightweight YOLO variants to
                    identify the one that offered the best compromise between inference speed and
                    detection quality, with the goal of making real-time performance possible on
                    mobile hardware.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={`${videoSprMotion} 1280w, ${videoSprMotionLarge} 2560w`}
                width={1280}
                height={800}
                placeholder={videoSprMotionPlaceholder}
                alt="AR experiency in Unity using both Vuforia and unity pre built AR"
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Creating the AR experience in Unity</ProjectSectionHeading>
              <ProjectSectionText>
                Once the AI pipeline was in place, the next step was to bring the drawings to life
                inside Unity. Using AR Foundation, we built a mobile augmented reality
                application capable of anchoring 3D objects directly onto a sheet of paper. The
                goal was not only to display virtual content, but to make the experience feel
                spatially coherent and responsive, as if the sketch itself had become a living,
                interactive miniature city.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              src={demopen}
              width={1280}
              height={800}
              alt="Demo of the Pencity AR application."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Solving alignement and surface detection
                </ProjectSectionHeading>
                <ProjectSectionText>
                   One of the biggest technical challenges was ensuring that 3D models would appear
                    in the right place and remain attached to the paper as the user moved it. Rather
                    than relying entirely on Unity's default plane detection, we experimented with a
                    custom surface-layer approach to better adapt the AR scene to the sheet itself.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={unityImage}
                width={520}
                height={660}
                style={{ objectFit: 'cover', objectPosition: 'right center' }}
                alt="Unity AR scene."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                src={unityImage}
                width={520}
                height={660}
                style={{ objectFit: 'cover', objectPosition: 'right center' }}
                alt="Unity AR scene."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <Suspense>
            <Earth
              className={styles.earth}
              position={useMemo(() => [0, 0, 0], [])}
              scale={0.075}
            >
              <EarthSection scrim camera={[0, 3, 8]}>
                <ProjectSection>
                  <ProjectSectionContent>
                    <ProjectTextRow center>
                      <ProjectSectionHeading>
                        From sketches to living city
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        The central idea behind Pencity is simple: transform static sketches into a dynamic
                        urban environment. A hand-drawn house becomes a 3D building, a tree becomes part
                        of the landscape, and multiple recognized elements combine into a coherent city
                        scene. This shift from paper to augmented reality is what gives the project its
                        "immersive" character.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection camera={[0, 4, 10]} />
              <EarthSection camera={[4, 2, 8]}>
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Integrating Yolo with Unity
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        One of the most important milestones of the project was integrating our trained
                        YOLO model directly into Unity. By exporting the model to ONNX and using
                        Unity's Barracuda inference engine, we made it possible to process the camera
                        feed in real time and detect sketches directly inside the AR application. This
                        integration is what truly connected the AI system with the visual 3D world.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection camera={[-4, 4, 8]}>
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="start" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Real-time detection in the app
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        With the model running inside Unity, the application can detect drawings on the
                        paper and instantiate the corresponding 3D models in the correct location. This
                        turns the camera feed into a real-time bridge between sketch recognition and
                        augmented reality, allowing the scene to evolve dynamically as new drawings are
                        added or viewed from different angles.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection camera={[0, 5, 10]} />
              <EarthSection camera={[0, 3, 8]}>
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Future interactions
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        Beyond detection and placement, the next step for Pencity is interaction. We want
                        the generated city to become more than a static overlay by adding movement,
                        animations, and user-controlled behaviors.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection scrimReverse camera={[0, 3, 12]} />
            </Earth>
          </Suspense>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Results and next steps</ProjectSectionHeading>
              <ProjectSectionText>
                  Pencity successfully combines computer vision, deep learning, and augmented
                  reality into a single interactive prototype. The project demonstrates that simple
                  hand-drawn sketches can be detected in real time and transformed into 3D
                  elements anchored on paper through a mobile AR application.
                 Fortunately, for this project we were given a 18.5/20 !
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
