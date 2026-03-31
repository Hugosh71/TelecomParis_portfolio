import { baseMeta } from '~/utils/meta';
import { getPosts } from './posts.server';
import { json } from '@remix-run/node';

export async function loader() {
  const posts = await getPosts();
  return json({ posts });
}

export function meta() {
  return baseMeta({
    title: 'Playground',
    description:
      'A collection of projects and experiments.',
  });
}

export { Articles as default } from './articles';
