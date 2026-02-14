import {client} from './sanity.client'
export default async function (value:string){
    const query = `*[ _type == 'project' && slug.current==$slug][0]{
        title,
        main_image,
        desc,
        content,
        date,
        field,
        githublink,
        link
        }`;
    const data=await client.fetch(query,{ slug: value })
        return data;
}