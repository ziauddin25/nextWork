import { useState } from "react"

export default function MovieForm () {
    const [movieData, setMovieData] = useState({
        title: '',
        ott:''
    });

    function handleSubmit(e:any) {
        e.preventDefault();
        console.log(movieData);
        
    }

    function handleChange(e:any) {
        const key = e.target.name;
        const value = e.target.value;

        setMovieData({...movieData, [key]: value})
    };

    return (
        <form className="flex gap-3 items-center" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title"
                placeholder="Enter movie name....."
                value={movieData?.title}
                onChange={handleChange}
                className="border-none bg-[#263251] p-2 w-full rounded-lg text-white outline-none"
            />

            <select name="ott" id="" value={movieData?.ott} onChange={handleChange} className="p-2">
                <option value="">Select on OTT</option>
                <option value="Netflix">Netflix</option>
                <option value="Hoichoi">Hoichoi</option>
                <option value="SonyLiv">SonyLiv</option>
                <option value="Amazon Prime">Amazon Prime</option>
                <option value="HotStar">HotStar</option>
            </select>
            <button className="bg-[#253C6D] hover:bg-[#203561] py-2 px-6 rounded-lg text-white cursor-pointer" type="submit">Add</button>
        </form>
    )
}