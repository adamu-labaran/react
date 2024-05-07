import React from "react";

// alternate component for destructuring
export default function ContactCard({ user }) {
  // using destructuring to reuse this component
  const { title, services, sport1, sport2, sport3, sport4 } = user;

  return (
    <section className="card">
      <h2>{title} </h2>
      <h4>{services} </h4>
      <ul>
        <li> {sport1} </li>
        <li> {sport2} </li>
        <li> {sport3} </li>
        <li> {sport4} </li>
      </ul>
    </section>
  );
}
