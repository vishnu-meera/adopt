import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "../customhooks/useDropdown";
import PetList from "./PetList";

const SearchParam = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const onChangeLocation = (e) => setLocation(e.target.value);
  const [animal, AnimalDropdown] = useDropdown("Animals", ANIMALS, "dog");
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", breeds, "");
  const [pets, setPets] = useState([]);

  const requestPets = async () => {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    console.log(animals);
    setPets(animals || []);
  };

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      setBreeds(breeds.map(({ name }) => name));
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="provide location"
            onChange={onChangeLocation}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <PetList pets={pets} />
    </div>
  );
};

export default SearchParam;
