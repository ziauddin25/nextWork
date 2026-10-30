
function TaskCard({ task, onComplete, onEdit, onDelete }) {
  return (
    <div className="todo-card" data-id={task.id}>
      <div className="card-head">
        <h3 className="card-title">
          {task.titleData}
        </h3>

        {task.status !== "completed" && (
          <button
            className="complete-btn"
            onClick={() => onComplete(task.id)}
          >
            <i className="fa-solid fa-check" />
          </button>
        )}
      </div>

      <p className="card-subTitle">
        {task.subTitleData}
      </p>

      <div className="card-btns">
        <span className="card-progress">
          {task.progressData}
        </span>

        <div className="btns">
          {task.status !== "completed" && (
            <button
              className="edit-btn"
              onClick={() => onEdit(task)}
            >
              Edit
            </button>
          )}

          <button
            className="delete-btn"
            onClick={() => onDelete(task.id)}
          >
            <i className="fa-solid fa-trash" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
