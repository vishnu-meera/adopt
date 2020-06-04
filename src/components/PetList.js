import React from "react";
import Pet from "./Pet";

const data = [
  { name: "Luna", type: "dog", breed: "Havanese" },
  { name: "Luna", type: "dog", breed: "Havanese" },
  { name: "Luna", type: "dog", breed: "Havanese" },
];

export default function PetList() {
  return (
    <div>
      {data.map(({ name, type, breed }) => (
        <Pet key={name} name={name} type={type} breed={breed} />
      ))}
    </div>
  );
}
