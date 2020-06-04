import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "../customhooks/useDropdown";

const SearchParam = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const onChangeLocation = (e) => setLocation(e.target.value);
  const [animal, AnimalDropdown] = useDropdown("Animals", ANIMALS, "dog");
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", breeds, "");

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      setBreeds(breeds.map(({ name }) => name));
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form>
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
    </div>
  );
};

export default SearchParam;
