export function Item({ name, isPacked }) {
  return <li>{isPacked ? <del>{name + " ✅"}</del> : name}</li>;
}
