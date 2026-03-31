import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import { Text } from '~/components/text';
import {
  ProjectContainer,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <div className={styles.header}>
          <Heading level={2} as="h1">Uses</Heading>
          <Text size="xl" as="p">A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things.</Text>
        </div>
        <ProjectSection padding="none" className={styles.section}>
  <ProjectSectionContent>
    <ProjectTextRow width="m">
      <ProjectSectionHeading>Coding</ProjectSectionHeading>
      <ProjectSectionText as="div">
        <List>
          <ListItem>
            My main programming language is 
            <Link href="https://www.python.org/"> Python</Link>, which I use for AI, 
            machine learning, deep learning, and reinforcement learning projects. Most of my academic 
            and personal AI work relies heavily on it.
          </ListItem>

          <ListItem>
            I also work with <Link href="https://learn.microsoft.com/dotnet/csharp/">C#</Link> and <Link href="https://isocpp.org/">C++</Link>, especially for game development.
          </ListItem>
          <ListItem>
            I use <Link href="https://code.visualstudio.com/">Visual Studio Code</Link> as my main IDE. Its versatility, large ecosystem of extensions, and integrated 
            tooling make it ideal for both AI development and web projects.
          </ListItem>

          <ListItem>
              I rely on <Link href="https://git-scm.com/"> Git</Link> for version control.
          </ListItem>

          <ListItem>
            For containerization, <Link href="https://www.docker.com/"> Docker</Link> is my go-to, especially for deployment ready applications.
          </ListItem>

          <ListItem>
            My primary browser is Google Chrome, I've quite a lot of extensions installed on it.
          </ListItem>

          <ListItem>
            For web applications, I work with <Link href="https://react.dev/">React</Link>, 
            very useful when creating interactive interfaces.
          </ListItem>

          <ListItem>
            For 3D visualizations and immersive UI elements, I rely on 
            <Link href="https://threejs.org/"> Three.js</Link>. Most of 3D environments I build rely on it.
          </ListItem>
        </List>
      </ProjectSectionText>
    </ProjectTextRow>
  </ProjectSectionContent>
</ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
  <ProjectSectionContent>
    <ProjectTextRow width="m">
      <ProjectSectionHeading>3D & Game Development</ProjectSectionHeading>
      <ProjectSectionText as="div">
        <List>
          <ListItem>
            For 3D modelling and rendering, I primarily use 
            <Link href="https://blender.org/"> Blender</Link>. Whether for experiments, 
            game assets, or visual effects.
          </ListItem>

          <ListItem>
            For game development, I mainly work with 
            <Link href="https://unity.com/"> Unity</Link> but I've also used it for a few AI projects.
          </ListItem>

          <ListItem>
            For high-quality environments or larger-scale experiences, 
            I use <Link href="https://unrealengine.com/"> Unreal Engine 5</Link>. 
          </ListItem>
        </List>
      </ProjectSectionText>
    </ProjectTextRow>
  </ProjectSectionContent>
</ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
  <ProjectSectionContent>
    <ProjectTextRow stretch width="m">
      <ProjectSectionHeading>System</ProjectSectionHeading>
      <Table>
        <TableBody>
          <TableRow>
            <TableHeadCell>Laptop</TableHeadCell>
            <TableCell>ASUS V16</TableCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>Processor</TableHeadCell>
            <TableCell>Intel Core i7-240H (2.50 GHz)</TableCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>GPU</TableHeadCell>
            <TableCell>NVIDIA GPU (8 GB VRAM)</TableCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>Graphics</TableHeadCell>
            <TableCell>NVIDIA GeForce RTX 5070 Laptop GPU + Intel(R) Graphics</TableCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>RAM</TableHeadCell>
            <TableCell>32 GB DDR5</TableCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>Storage</TableHeadCell>
            <TableCell>1 TB SSD</TableCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>Operating System</TableHeadCell>
            <TableCell>Windows 11 (64-bit)</TableCell>
          </TableRow>
          <TableRow>
            <TableHeadCell>Display</TableHeadCell>
            <TableCell>16″ OLED 144Hz</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ProjectTextRow>
  </ProjectSectionContent>
</ProjectSection>

      </ProjectContainer>
      <Footer />
    </>
  );
};
