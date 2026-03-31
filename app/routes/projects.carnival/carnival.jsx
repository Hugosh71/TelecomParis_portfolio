import sliceAppLarge from '~/assets/carnivalimage.png';
import sliceAppPlaceholder from '~/assets/carnivalimage.png';
import sliceApp from '~/assets/carnivalimage.png';
import sliceBackgroundBar from '~/assets/jam.png';
import sliceBackgroundLarge from '~/assets/carnivalimage.png';
import sliceBackgroundPlaceholder from '~/assets/carnivalimage.png';
import sliceBackground from '~/assets/carnivalimage.png';
import sliceIrl from '~/assets/conv.png';
import venise from '~/assets/venise.png';
import sliceSlides from '~/assets/pale.png';
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
import styles from './carnival.module.css';

const title = 'Carnival Unending';
const description =
  'A narrative-driven visual novel built in Ren’Py during a game jam, blending branching storytelling, atmosphere, and rapid collaborative production.';
const roles = ['Game Development', 'Visual Novel scripting', 'Narrative systems','Game Jam Production'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Carnival = () => {
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
          url="https://github.com/Hugosh71/Carnival_Unending"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Building a visual novel in a game jam</ProjectSectionHeading>
              <ProjectSectionText>
                Carnival Unending was created during Narrative Driven Jam #12 as a short visual novel set during the Venice Carnevale. 
                The project was developed under strong time constraints, which meant every design and implementation choice had to support fast iteration, narrative clarity, and a cohesive player experience.
              </ProjectSectionText>
             
            </div>
            <Image
              srcSet={`${venise} 600w, ${venise} 1200w`}
              width={600}
              height={600}
              placeholder={venise}
              alt="Venice Carnevale atmosphere."
              sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              style={{ borderRadius: '8px' }}
            />
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Translating narrative into interaction</ProjectSectionHeading>
              <ProjectSectionText>
                A visual novel lives or dies by the way its writing is delivered. Beyond simply displaying dialogue, the challenge was to structure scenes, choices, pacing, and transitions in a way that supported the tone of the story and maintained player engagement.
                <br></br><br></br>
                This required careful integration of branching sequences, presentation logic, and scene flow, so that the narrative could feel playful, strange, and emotionally coherent without overwhelming the player with unnecessary complexity.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlides} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlides}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Working within jam constraints</ProjectSectionHeading>
              <ProjectSectionText>
                Because the project was created in only a few days, development had to stay focused and pragmatic. The goal was not to over-engineer systems, but to build the right level of structure to support the story and ship a complete experience within the jam deadline.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceBackgroundBar} 900w, ${sliceBackgroundBar} 1800w`}
              width={900}
              height={500}
              placeholder={sliceBackgroundBar}
              alt="Game jam production."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
              style={{ borderRadius: '8px' }}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>A complete playable narrative prototype</ProjectSectionHeading>
              <ProjectSectionText>
                Carnival Unending resulted in a fully playable visual novel released during the jam, combining narrative writing, original art, music, and Ren’Py implementation into a finished interactive piece. 
                For me, it was an important first step into game development: a project where storytelling, programming, and collaboration all had to come together under real production constraints.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrl}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
