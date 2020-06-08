import React, { useState, useEffect,useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "../customhooks/useDropdown";
import PetList from "./PetList";
import ThemeContext from '../context/ThemeContext';

const SearchParam = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const onChangeLocation = (e) => setLocation(e.target.value);
  const [animal, AnimalDropdown] = useDropdown("Animals", ANIMALS, "dog");
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", breeds, "");
  const [pets, setPets] = useState([]);
  const [theme,setTheme] = useContext(ThemeContext);

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
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onBlur={(e) => setTheme(e.target.value)}
            onChange={(e) => setTheme(e.target.value)}
          >
              <option value="oasvcmnm">Orange</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
          </select>
        </label>
        <button style={{backgroundColor:theme}}>Submit</button>
      </form>
      <PetList pets={pets} />
    </div>
  );
};

export default SearchParam;