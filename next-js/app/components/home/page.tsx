import Header from "../Header";
import Posts from "../Posts";
// this api call is client component, here occur: get a promise from server component to client component. first api call in server then using use in client.

async function getPosts() {
  const response = await fetch('https://api.vercel.app/blog');

  return response.json();
};

export default function HomePage () {
    const postPromise = getPosts();

    return (
        <>
        <Header />
        <Posts posts={postPromise}/>
        </>
    )
};