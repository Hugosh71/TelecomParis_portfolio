import sliceAppLarge from '~/assets/mangetamainimage.png';
import sliceAppPlaceholder from '~/assets/mangetamainimage.png';
import sliceApp from '~/assets/mangetamainimage.png';
import sliceBackgroundLarge from '~/assets/mangetamainimage.png';
import sliceBackgroundPlaceholder from '~/assets/mangetamainimage.png';
import sliceBackground from '~/assets/mangetamainimage.png';
import interfaceImg from '~/assets/interface.png';
import methodologieImg from '~/assets/methodologie.png';
import clusteringImg from '~/assets/clustering.png';
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
import styles from './mangetamain.module.css';

const title = 'Mangetamain - Recipe Clustering & Exploration';
const description =
  'A data-driven recipe exploration platform combining clustering, nutritional analysis, and interactive visualization through a reproducible Streamlit pipeline.';
const roles = [
  'Data Analysis',
  'Machine Learning',
  'Feature Engineering',
  'Streamlit App Development',
  'CI/CD & Reproducible Pipelines',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Mangetamain = () => {
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
          url="https://github.com/Hugosh71/Projet_Mangetamain"
          roles={roles}
        />

        {/* 1 — Grande image principale, pleine largeur */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="Mangetamain recipe exploration platform."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* 2 — A platform for recipe exploration : texte gauche, interface droite (image plus grande) */}
        <ProjectSection>
          <ProjectSectionContent>
            <div className={styles.columnsWideImage}>
              <div className={styles.imagesText}>
                <ProjectSectionHeading>A platform for recipe exploration</ProjectSectionHeading>
                <ProjectSectionText>
                  Mangetamain was designed as an interactive platform for exploring large-scale
                  recipe data through a user-friendly web interface. The goal was to go beyond
                  simple recipe browsing and provide a structured way to analyze nutritional
                  composition, sensory patterns, preparation habits, and user interactions.
                </ProjectSectionText>
                
              </div>
              <Image
                srcSet={`${interfaceImg} 800w, ${interfaceImg} 1600w`}
                width={800}
                height={600}
                placeholder={interfaceImg}
                alt="Mangetamain interface."
                sizes={`(max-width: ${media.mobile}px) 100vw, 60vw`}
                style={{ borderRadius: '8px', width: '100%' }}
              />
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 3 — From raw data : image gauche (plus grande), texte droite */}
        <ProjectSection light>
          <ProjectSectionContent>
            <div className={styles.columnsWideImageReverse}>
              <Image
                srcSet={`${methodologieImg} 800w, ${methodologieImg} 1600w`}
                width={800}
                height={600}
                placeholder={methodologieImg}
                alt="Feature engineering methodology."
                sizes={`(max-width: ${media.mobile}px) 100vw, 60vw`}
                style={{ borderRadius: '8px', width: '100%' }}
              />
              <div className={styles.imagesText}>
                <ProjectSectionHeading>From raw data to meaningful features</ProjectSectionHeading>
                <ProjectSectionText>
                  A central part of the project was building a feature engineering pipeline
                  capable of transforming raw recipe and rating data into meaningful analytical
                  signals. This included nutritional indicators, ingredient and step counts,
                  interaction-based metrics, temporal patterns, and confidence-aware aggregations.
                </ProjectSectionText>
                
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 4 — Clustering : texte centré + image pleine largeur */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Clustering recipes into interpretable groups</ProjectSectionHeading>
              <ProjectSectionText>
                One of the core objectives of Mangetamain was to identify coherent groups of
                recipes based on nutritional and behavioral characteristics. Instead of relying
                only on cuisine labels or manually defined categories, the project used
                clustering techniques to uncover patterns directly from the data.
              </ProjectSectionText>
              <ProjectSectionText>
                This approach made it possible to highlight distinct recipe profiles, such as
                lighter or more energy-dense dishes, recipes with shorter preparation times, or
                clusters shaped by stronger user engagement. The result is a more data-driven
                way of navigating culinary diversity.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${clusteringImg} 800w, ${clusteringImg} 1920w`}
              width={800}
              height={500}
              placeholder={clusteringImg}
              alt="Recipe clustering visualization."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
              style={{ borderRadius: '8px', marginTop: '40px' }}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* 5 — Interactive analysis : texte centré, sans image */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow center>
              <ProjectSectionHeading>Interactive analysis at scale</ProjectSectionHeading>
              <ProjectSectionText>
                The final application combines a reproducible preprocessing pipeline, clustering
                workflows, and an interactive Streamlit interface to make large recipe datasets
                accessible and interpretable.<br /><br />
                Users can explore distributions, compare clusters, inspect ingredients and
                nutritional patterns, and better understand how recipes are organized across
                multiple dimensions. Beyond the web app itself, the project also emphasized
                maintainability and reproducibility through modular architecture, testing,
                Docker support, automated documentation, and a clean development workflow.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
