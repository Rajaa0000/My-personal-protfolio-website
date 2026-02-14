import {client} from "./sanity.client";

export default async function getProjects() {
  const query = `*[_type == "project" && field == 'webdev']{
    title,
    main_image,
    desc,
    content,
    date,
    field
  }`;

  return await client.fetch(query);   // ✅ use client.fetch, not fetch
}
