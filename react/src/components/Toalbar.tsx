export default function Toolbar({onPlayMovie, onUploadImage}:any) {
    return (
        <div className="">
            <button onClick={onPlayMovie}>Playing</button>
            <button onClick={onUploadImage}>Upload</button>
        </div>
    )
}