export function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <input type="checkbox" />
          {task.text}
          <button onClick={onChangeTask}>Edit</button>
          <button onClick={onDeleteTask}>Delete</button>
        </div>
      ))}
    </>
  );
}
