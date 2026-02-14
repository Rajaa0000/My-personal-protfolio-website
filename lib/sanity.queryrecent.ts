import {client} from "./sanity.client";

export default async function getRecentProjects() {
  const query = `*[_type == "project"] | order(date desc)[0...3]{
    title,
    main_image,
    desc,
    field,
    date,
    githublink,
    link
  }` ;

  return await client.fetch(query);   
}
