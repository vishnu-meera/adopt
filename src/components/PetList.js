import React from "react";
import Pet from "./Pet";

export default function PetList({ pets }) {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No pets found</h1>
      ) : (
        pets.map(({ name, type, breeds, id, contact, photos }) => (
          <Pet
            key={id}
            name={name}
            animal={type}
            breed={breeds.primary}
            media={photos}
            location={contact.address.city}
            id={id}
          />
        ))
      )}
    </div>
  );
}
