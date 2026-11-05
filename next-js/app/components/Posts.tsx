'use client'
import { use } from "react"

export default function Posts ({posts}:any) {
    const allPosts:any = use(posts)
    return (
        <div className="">
            {allPosts.map((post:any)=> (
                <li className="text-blue-300 text-lg" key={post.id}>{post.title}</li>
            ))}
        </div>
    )
};