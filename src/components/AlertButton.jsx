export function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}
