import ReactIcon from "./assets/reactIcon";
import TodoList from "./components/TodoList";
import Gallery from "./components/Gallery";
import List from "./components/List";
import Button from "./components/Button";
import { Toolbar } from "./components/Toolbar";

function App() {
  return (
    <>
      <ReactIcon />
      <Date />
      <Gallery />
      <TodoList />
      <List />
      <Toolbar
        onPlayMovie={() => alert("playing")}
        onUploadImage={() => alert("Uploading")}
      />
    </>
  );
}

export default App;
