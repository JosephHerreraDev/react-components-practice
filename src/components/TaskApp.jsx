import AddTask from "../components/AddTask.jsx";
import TaskList from "../components/TaskList.jsx";
import { TasksProvider } from "../utils/TaskContext.jsx";

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
