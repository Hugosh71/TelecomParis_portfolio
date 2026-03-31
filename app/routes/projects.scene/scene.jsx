import descriptionscene from '~/assets/desc.png';
import sliceAppLarge from '~/assets/sceneimage.png';
import sliceAppPlaceholder from '~/assets/sceneimage.png';
import sliceApp from '~/assets/sceneimage.png';
import sliceBackgroundLarge from '~/assets/sceneimage.png';
import sliceBackgroundPlaceholder from '~/assets/sceneimage.png';
import sliceBackground from '~/assets/sceneimage.png';
import sliceIrl from '~/assets/search.png';
import sliceSlides from '~/assets/skyfall.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './scene.module.css';

const title = 'Natural-Language Video Scene Search';
const description =
  'A semantic video retrieval system that indexes scene-level content from media archives and returns the most relevant moments from a natural-language query.';
const roles = ['Computer Vision', 'Semantic Search', 'Embedding Pipelines','Ranking & Retrieval','Media Data Engineering'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Scene = () => {
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
          url="https://github.com/Hugosh71/Multimodal-scene-retrieval"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="Vscode interface of the project"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Making video archives searchable</ProjectSectionHeading>
              <ProjectSectionText>
                This project was designed to help turn large video archives into searchable assets.
                Instead of manually browsing long recordings, the goal was to let users retrieve relevant video moments directly from a natural-language query.
              </ProjectSectionText>
              <ProjectSectionText>
                To achieve this, the system works at the scene level rather than at the video level, making retrieval more precise and better suited to real editorial or media workflows.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>From raw video to scene-level indexing</ProjectSectionHeading>
              <ProjectSectionText>
                The first step of the pipeline was splitting long videos into meaningful scenes using PySceneDetect. 
                This made it possible to move from coarse video metadata to smaller, more semantically coherent units of content.<br></br> <br/>

                Each scene was then processed independently, creating a structured foundation for search and retrieval. 
                This scene-based approach improves both relevance and usability, since users are typically looking for specific moments rather than full videos.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlides} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlides}
              alt="How scenes are described"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Describing scenes with multimodal representations</ProjectSectionHeading>
              <ProjectSectionText>
                Once scenes were extracted, the system generated visual descriptions using Florence-2, an open-source vision model capable of producing rich scene-level captions.
                These textual representations were then embedded and stored in ChromaDB to support semantic search.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${descriptionscene} 900w, ${descriptionscene} 1800w`}
              width={900}
              height={500}
              placeholder={descriptionscene}
              alt="Scene description with Florence-2."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
              style={{ borderRadius: '8px' }}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>A practical search engine for media archives</ProjectSectionHeading>
              <ProjectSectionText>
                The final system demonstrates how multimodal models, vector search, and ranking techniques can be combined into a practical retrieval engine for archived video content. <br></br> <br></br>
                By indexing scenes instead of full videos and combining semantic retrieval with re-ranking, the project provides a more efficient way to surface relevant moments from large media collections.
                <br></br> <br></br>
                Beyond the retrieval task itself, the project also served as an exploration of multimodal AI pipelines, covering scene detection, visual captioning, embeddings, vector databases, and ranking strategies in a single end-to-end system.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceIrl} 940w, ${sliceIrl} 1880w`}
              width={940}
              height={500}
              placeholder={sliceIrl}
              alt="Semantic search results for a natural-language query."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
