import ReactIcon from "./assets/reactIcon";
import TodoList from "./components/TodoList";
import Gallery from "./components/Gallery";
import List from "./components/List";
import { Toolbar } from "./components/Toolbar";
import RequestTracker from "./components/RequestTracker";

function App() {
  return (
    <>
      <ReactIcon />
      <Date />
      <Gallery />
      <TodoList />
      <List />
      <RequestTracker />
      <Toolbar
        onPlayMovie={() => alert("playing")}
        onUploadImage={() => alert("Uploading")}
      />
    </>
  );
}

export default App;
