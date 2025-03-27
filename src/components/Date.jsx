const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function Date() {
  return <p>Today is {formatDate(today)}</p>;
}
