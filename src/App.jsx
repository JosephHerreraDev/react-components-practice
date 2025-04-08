import ReactIcon from "./assets/reactIcon";
import TodoList from "./components/TodoList";
import Gallery from "./components/Gallery";
import List from "./components/List";
import { Toolbar } from "./components/Toolbar";
import RequestTracker from "./components/RequestTracker";
import MovingDot from "./components/MovingDot";
import Form from "./components/Form";
import ArtForm from "./components/ArtForm";
import BucketList from "./components/BucketList";
import { TravelPlan } from "./components/TravelPlan";
import TaskApp from "./components/TaskApp";
import Section from "./components/Section";
import Heading from "./components/Heading";

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
      <hr />
      <BucketList />
      <hr />
      <TravelPlan />
      <hr />
      <TaskApp />
      <hr />
      <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </>
  );
}

export default App;
