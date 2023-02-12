import { getPost, getPosts } from "../../../src/service";
import PostDetail from "../component/postDetail";


export default async function Page({params}:any) {
    
    const post = await getPost(params?.id)
    
    return <PostDetail post={post}/>        
  }

export async function generateStaticParams() {
    const posts = await getPosts();
    
    return posts.map( (post : any) => ({
      id: post.id,
    }));
}




