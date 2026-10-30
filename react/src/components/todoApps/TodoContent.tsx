type TodoTypes = {
    todoData: object,
};
export default function TodoContent ({todoData}: TodoTypes) {
    return (
        <div className="flex gap-3 bg-[#f3f4f6] p-4 rounded-md mt-6 min-h-[500px]">
            <div className="">
                <h2 className="">{todoData.title}</h2>
                <p className="">{todoData.subTitle}</p>
                <span className="">{todoData.progress}</span>
            </div>
        </div>
    )
};