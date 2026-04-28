import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { dictionary } from "$lib/dictionary";
export const load: PageLoad = ({ params }) => {
  const project = dictionary["highlighted-projects"].find(
    (project) => project.id === parseInt(params.slug),
  );
  if (!project) {
    error(404, "Project not found");
  }
  return { project };
};