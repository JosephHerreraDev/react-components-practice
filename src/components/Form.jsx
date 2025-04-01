import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <label>
        First Name:
        <input
          name="firstName"
          type="text"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          name="lastName"
          type="text"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
