'use client'
export default function Error ({
    error, reset
}:
{
    error: Error;
    reset:() => void;
}) {
    return (
        <div className="">
            <h3 className="text-red-500 text-xl">Something went wrong!</h3>
            <button className="" onClick={()=> reset()}>Try again</button>
        </div>
    )
};