import {client} from "./sanity.client";

export default async function getProjects() {
  const query = `*[_type == "project"]{
    title,
    main_image,
    desc,
    content,
    date,
    field,
    slug,
    link,
    githublink
  }`;

  return await client.fetch(query);   // ✅ use client.fetch, not fetch
}
