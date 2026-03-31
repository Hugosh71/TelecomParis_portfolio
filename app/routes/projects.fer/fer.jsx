import sliceAppLarge from '~/assets/ferimage.png';
import sliceAppPlaceholder from '~/assets/ferimage.png';
import sliceApp from '~/assets/ferimage.png';
import sliceBackgroundLarge from '~/assets/ferimage.png';
import sliceBackgroundPlaceholder from '~/assets/ferimage.png';
import sliceBackground from '~/assets/ferimage.png';
import emotionsImg from '~/assets/emotions.jpg';
import fer2013Img from '~/assets/fer2013.png';
import resnetImg from '~/assets/resnet.png';
import dataaugImg from '~/assets/dataaug.png';
import hyperparamImg from '~/assets/hyperparam.png';
import accuracyImg from '~/assets/accuracy.png';
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
import styles from './fer.module.css';

const title = 'Facial Emotion Recognition with AI';
const description =
  'A deep learning project exploring facial emotion recognition through CNN architecture comparison, data augmentation, and real-time webcam inference.';
const roles = [
  'Computer Vision',
  'CNN Architecture Study',
  'PyTorch',
  'Data Augmentation',
  'Model Evaluation',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Fer = () => {
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
          url="https://github.com/Hugosh71/Rec.-facial-IA"
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
              alt="Facial emotion recognition demo."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* 2 — Framing the problem : texte gauche, emotions droite */}
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Framing the problem</ProjectSectionHeading>
              <ProjectSectionText>
                This project explored facial emotion recognition as a computer vision task,
                with the objective of classifying the seven basic emotions: neutral, happiness,
                sadness, fear, anger, disgust, and surprise.<br /><br />
                Beyond simple image classification, the challenge was to build a system capable
                of extracting meaningful emotional cues from low-resolution facial data, despite
                class imbalance, visual ambiguity, and overlapping expressions.
              </ProjectSectionText>
            </div>
            <Image
              srcSet={`${emotionsImg} 600w, ${emotionsImg} 1200w`}
              width={600}
              height={600}
              placeholder={emotionsImg}
              alt="Emotion classes distribution."
              sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              style={{ borderRadius: '8px' }}
            />
          </ProjectSectionColumns>
        </ProjectSection>

        {/* 3 — Data Foundation : texte centré + image pleine largeur en dessous */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Data Foundation</ProjectSectionHeading>
              <ProjectSectionText>
                The project was built on FER2013, a public dataset containing roughly 35,900
                grayscale facial images at 48×48 resolution, labeled across seven emotion
                categories.<br /><br />
                Preparing this data correctly was essential: the images were normalized,
                organized into PyTorch-compatible pipelines, and carefully structured for both
                training and evaluation.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${fer2013Img} 800w, ${fer2013Img} 1920w`}
              width={800}
              height={500}
              placeholder={fer2013Img}
              alt="FER2013 dataset overview."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
              style={{ borderRadius: '8px', marginTop: '40px' }}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* 4 — Architecture study : image gauche, texte droite */}
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <Image
              srcSet={`${resnetImg} 600w, ${resnetImg} 1200w`}
              width={600}
              height={500}
              placeholder={resnetImg}
              alt="ResNet architecture diagram."
              sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              style={{ borderRadius: '8px' }}
            />
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Architecture study</ProjectSectionHeading>
              <ProjectSectionText>
                A key part of the project was comparing several convolutional architectures,
                including custom CNNs, VGG-style models, and ResNet-based approaches.<br /><br />
                This comparison helped evaluate the trade-offs between model complexity,
                convergence stability, and generalization on compact grayscale facial inputs.
                ResNet ultimately emerged as the most reliable solution, offering the best
                balance between performance and robustness across the different emotion classes.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        {/* 5 — Training Strategy : texte centré + image pleine largeur */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Training Strategy</ProjectSectionHeading>
              <ProjectSectionText>
                The training pipeline was developed in PyTorch using Adam, batched loading,
                and repeated evaluation across epochs.<br /><br />
                To improve generalization, we applied data augmentation techniques adapted to
                facial imagery, mainly rotations and flips, in order to enrich the dataset
                without changing the semantic meaning of the expressions.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${dataaugImg} 800w, ${dataaugImg} 1920w`}
              width={800}
              height={500}
              placeholder={dataaugImg}
              alt="Data augmentation examples on facial images."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
              style={{ borderRadius: '8px', marginTop: '40px' }}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* 6 — Hyperparameter : texte droite, image gauche */}
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <Image
              srcSet={`${hyperparamImg} 600w, ${hyperparamImg} 1200w`}
              width={600}
              height={400}
              placeholder={hyperparamImg}
              alt="Optuna hyperparameter optimization results."
              sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              style={{ borderRadius: '8px' }}
            />
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Hyperparameter optimization</ProjectSectionHeading>
              <ProjectSectionText>
                To move beyond manual trial and error, we used Optuna to explore stronger model
                configurations more efficiently.<br /><br />
                The optimization process covered learning rate, batch size, dropout, hidden
                dimensions, number of epochs, and architecture choice.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        {/* 7 — Reading model behavior : texte centré + image centrée en dessous */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Reading model behavior</ProjectSectionHeading>
              <ProjectSectionText>
                Rather than focusing only on final accuracy, we also analyzed how the models
                behaved during training and evaluation. Confusion matrices, validation curves,
                and failed runs revealed recurring weaknesses, especially between visually
                similar emotions such as sadness and neutral, or fear and anger.<br /><br />
                The strongest ResNet-based configuration reached about 60% accuracy, while also
                making clear how much facial emotion recognition depends on both architecture
                design and the inherent ambiguity of the data itself.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${accuracyImg} 800w, ${accuracyImg} 1600w`}
              width={800}
              height={500}
              placeholder={accuracyImg}
              alt="Model accuracy and confusion matrix."
              sizes={`(max-width: ${media.mobile}px) 100vw, 70vw`}
              style={{ borderRadius: '8px', marginTop: '40px' }}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* 8 — Project Outcome : centré, pas d'image */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center>
              <ProjectSectionHeading>Project Outcome</ProjectSectionHeading>
              <ProjectSectionText>
                This project resulted in a full facial emotion recognition pipeline combining
                computer vision research, deep learning model design, hyperparameter
                optimization, and real-time inference.<br /><br />
                More importantly, it gave us practical experience with PyTorch training
                workflows, architecture benchmarking, data augmentation, confusion-matrix
                analysis, and the challenges of translating model performance into usable
                interactive systems.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
