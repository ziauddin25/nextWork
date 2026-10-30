import { useState } from "react";
import Header from "./Header";
import MovieForm from "./MovieForm";

export default function MovieWatch() {
    const [addMovie, setAddMovie] = useState({
        
    })
    return (
        <div className="">
            <div className="bg-[#0D1C42] p-4 rounded-lg max-w-[500px] mt-5 ">
                <Header />
                <MovieForm />
            </div>
        </div>
    )
}