import profileImgLarge from '~/assets/IMAGEPROCV.png';
import profileImgPlaceholder from '~/assets/IMAGEPROCV.png';
import profileImg from '~/assets/IMAGEPROCV.png';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hello !" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Hugo Fanchini, currently living in France as a graduate student specializing in Multimodal and Autonomous AI at{' '}
      <Link href="https://www.telecom-paris.fr">Telecom Paris</Link>.<br /><br />
      This is my portfolio, where I highlight six selected projects that reflect the work I’m most proud of. <br /><br />
      If you’d like to explore more, the <Link href="/playground">Playground</Link> section features additional experiments, side projects, and other ideas I’ve worked on.<br /><br />
      My main work focuses on building intelligent systems across generative AI, machine learning, 
      deep learning, reinforcement learning, NLP and Computer Vision, primarily developed in {' '}<Link href="https://www.python.org/">Python</Link> both through academic research and 
      personal exploration.<br />
       I also enjoy creating immersive websites, especially using {' '}
  <Link href="https://threejs.org/">Three.js</Link>.<br /><br /> If you’re interested in the tools and software I
      use check out my <Link href="/uses">uses page</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time, I love playing video games and, even more, creating them, either independently
      or during game james hosted on{' '}
  <Link href="https://itch.io">itch.io</Link>.<br /><br />
    I'm always open to discussing new ideas or collaborations. You can explore all my projects 
    on my{' '}
    <Link href="https://github.com/Hugosh71">GitHub</Link>. 
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="My beautiful face"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
