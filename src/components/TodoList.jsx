import { Item } from "./Item";
import Avatar from "./Avatar";

const baseUrl = "https://i.imgur.com/";
const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
  image: {
    imageId: "7vQD0fP",
    imageSize: "s",
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <Avatar
        size={100}
        person={{
          name: person.name,
          imageId: person.image.imageId,
        }}
      />
      <img
        src={`${baseUrl}${person.image.imageId}${person.image.imageSize}.jpg`}
        alt={person.name}
      />
      <ul>
        <Item name={"Improve the videophone"} isPacked={true} />
        <Item name={"Prepare aeronautics lectures"} isPacked={false} />
        <Item name={"Work on the alcohol-fuelled engine"} isPacked={true} />
      </ul>
    </div>
  );
}
