type ItemQuantity = {
    onIncrease: (value: string) => void;
    onDecrease: (value: string) => void;
}
export default function QuantityControls ({onIncrease, onDecrease} :ItemQuantity) {
    return (
        <div className="flex gap-2 items-center">
            <button className="py-2.5 px-4 cursor-pointer bg-[#D98327]" onClick={onIncrease}>Add +</button>
            <button className="py-2.5 px-4 cursor-pointer bg-[#790D16]" onClick={onDecrease}>Dec -</button>
        </div>
    )
}