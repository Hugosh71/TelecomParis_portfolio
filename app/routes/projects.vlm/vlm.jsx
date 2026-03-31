import sliceAnnotationPlaceholder from '~/assets/flairsim.png';
import sliceAnnotation from '~/assets/flairsim.png';
import sliceAppLarge from '~/assets/VLMimage.png';
import sliceAppPlaceholder from '~/assets/VLMimage.png';
import sliceApp from '~/assets/VLMimage.png';
import sliceBackgroundLarge from '~/assets/VLMimage.png';
import sliceBackgroundPlaceholder from '~/assets/VLMimage.png';
import sliceBackground from '~/assets/VLMimage.png';
import sliceIrlPlaceholder from '~/assets/roadmap.png';
import sliceIrl from '~/assets/roadmap.png';
import sliceSidebarAnnotationsLarge from '~/assets/zoneflair.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/zoneflair.png';
import sliceSidebarAnnotations from '~/assets/zoneflair.png';
import sliceSidebarLayersLarge from '~/assets/zoneflair.png';
import sliceSidebarLayersPlaceholder from '~/assets/zoneflair.png';
import sliceSidebarLayers from '~/assets/zoneflair.png';
import sliceSlidesLarge from '~/assets/dronevideo.mp4';
import sliceSlidesPlaceholder from '~/assets/VLMimage.png';
import sliceSlides from '~/assets/dronevideo.mp4';
import { DroneModel } from './drone-model';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
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
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './vlm.module.css';

const title = 'Autonomous Drone Exploration from Natural Language';
const description =
  'Telecom Paris final project (ongoing) exploring how vision-language models can interpret large aerial scenes from FLAIR-HUB and guide a drone in simulation toward mission-defined target areas.';
const roles = ['VLM Evaluation', 'Aerial Scene Analysis', 'Drone Simulation'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Vlm = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Hugosh71/Vision-Language-Action-Models-for-Drone-Autonomy-and-Perception"
          roles={roles}
        >
          <DroneModel style={{ width: '100%', height: '300px', marginTop: '16px' }} />
        </ProjectHeader>
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="VLM presentation for Fil Rouge project"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Evaluating VLMs on FLAIR-HUB aerial scenes</ProjectSectionHeading>
              <ProjectSectionText>
                FLAIR-HUB is a large-scale multimodal Earth observation dataset released by
  IGN, combining very high resolution aerial imagery with aligned satellite,
  topographic, and historical data across a wide range of French landscapes.
  In this project, I use assembled aerial tiles from FLAIR-HUB as realistic
  large-scale scenes for vision-language model evaluation.
              </ProjectSectionText>
              <ProjectSectionText>
                The first stage of the project focused on testing whether different VLMs can
  understand a complex aerial scene as a whole: describing its global layout,
  identifying major structures such as roads, rivers, built-up areas, or the
  stadium, and highlighting potentially relevant zones of interest. This part
  is exploratory and is still being extended with additional prompts and model
  comparisons.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="VLM test"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Detection by VLM"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>From scene understanding to action</ProjectSectionHeading>
              <ProjectSectionText>
                After the fixed-image evaluation, the next step was to move toward a
  decision loop. The project now explores how a VLM can use aerial
  observations not only to describe a scene, but also to guide actions
  inside a drone simulator.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="Flairsim integration"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <Image
                src={sliceAnnotation}
                width={600}
                height={600}
                placeholder={sliceAnnotationPlaceholder}
                alt="FlairSim drone simulator interface."
                style={{ width: '100%', height: '100%', objectFit: 'cover', marginTop: '60px' }}
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Testing VLM-guided navigation in FlairSim</ProjectSectionHeading>
              <ProjectSectionText>
                FlairSim is an in-house drone simulator we built to test perception and
  navigation over FLAIR-HUB aerial imagery. It allows an external agent to
  receive the current observation, reason over the scene, and return actions
  through a simple control loop. In the current setup, a VLM is connected
  through Ollama and tasked with moving from a distant starting point toward a
  mission-defined target zone. The model can climb to gain context, identify
  the target area, move toward it, and descend to simulate a final approach.
  This work is still ongoing, and the next step is to refine prompts, compare
  model behavior more systematically, and evaluate more realistic search tasks.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Current status and next steps</ProjectSectionHeading>
              <ProjectSectionText>
                This project is still ongoing. So far, the experiments show that VLMs can
  produce meaningful global descriptions of large aerial scenes and can already
  be integrated into a perception-decision-action loop in simulation. The next
  steps are to improve the navigation setup, test more mission prompts, and
  move from simple target zones toward more realistic object-search scenarios.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Project future meetings"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
