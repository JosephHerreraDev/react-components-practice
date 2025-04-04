import ReactIcon from "./assets/reactIcon";
import TodoList from "./components/TodoList";
import Gallery from "./components/Gallery";
import List from "./components/List";
import { Toolbar } from "./components/Toolbar";
import RequestTracker from "./components/RequestTracker";
import MovingDot from "./components/MovingDot";
import Form from "./components/Form";
import ArtForm from "./components/ArtForm";

function App() {
  return (
    <>
      <MovingDot />
      <hr />
      <ReactIcon />
      <hr />
      <Date />
      <hr />
      <Gallery />
      <hr />
      <TodoList />
      <hr />
      <List />
      <hr />
      <RequestTracker />
      <hr />
      <Toolbar
        onPlayMovie={() => alert("playing")}
        onUploadImage={() => alert("Uploading")}
      />
      <hr />
      <Form />
      <hr />
      <ArtForm />
    </>
  );
}

export default App;
