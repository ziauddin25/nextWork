export default async function Header () {
    // this is server component er data fetching. here direct fetching data like js fetching.
    const response = await fetch('https://api.vercel.app/blog');

    const posts = await response.json();
    return (
        <div className="">
            <h3 className="">latest blogs posts:</h3>
            {posts.map((item:any)=> (
                <div className="" key={item.id}>
                    <h4 className="">{item.title}</h4>
                </div>
            ))}
        </div>
    )
};
