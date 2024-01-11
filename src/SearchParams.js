import React, { useState, useEffect, useCallback } from "react";
// import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Result from "./Result";
import Breeds from "./global"

const SearchParams = () => {
  // let b = ""
  const [b, setB] = useState("German Shepherd")

  const [location, setLocation] = useState("Seattle");

  // const [breeds, setBreeds] = useState({
  //   Dog: [
  //     "German Sheperd",
  //     "Bulldog",
  //     "Labrador Retriever",
  //     "Siberian Husky",
  //     "Beagle",
  //     "Alaskan Malamute",
  //     "Poodle",
  //     "Chihuahua",
  //     "Border Collie",
  //     "Dachshund",
  //     "Bichon Frisé",
  //     "Australian Shepherd",
  //     "Airedale Terrier",
  //     "Affenpinscher",
  //   ],
  //   Cat: [
  //     "Siamese cat",
  //     "British Shorthair",
  //     "Maine Coon",
  //     "Persian Cat",
  //     "Ragdoll",
  //     "Sphynx cat",
  //     "American Shorthair",
  //     "Abyssinian",
  //     "Exotic Shorthair",
  //     "Scottish fold",
  //     "Burmese Cat",
  //     "Birman",
  //     "Bombay Cat",
  //     "Siberian Cat",
  //     "Norwegian Forest Cat",
  //     "Russian Blue",
  //   ],
  //   Horse: [
  //     "Arabian Horse",
  //     "Marwari Horse",
  //     "Andalusian Horse",
  //     "Friesian Horse",
  //     "Akhal-Teke Horse",
  //     "Gypsy Vanner Horse",
  //     "Haflinger Horse",
  //     "Appaloosa Horse",
  //     "Paso Fino Horse",
  //     "Mustang Horse",
  //   ],
  //   Fish: [
  //     "The Betta",
  //     "Freshwater Angelfish",
  //     "Fancy Guppies",
  //     "Mollies",
  //     "Tiger Barbs",
  //     "Oscars",
  //     "Ocellaris Clownfish",
  //     "Convict Cichlids",
  //     "Mbuna Cichlids",
  //     "Fancy Goldfish",
  //   ],
  //   Bird: [
  //     "Canary",
  //     "Budgerigar",
  //     "Cockatiel",
  //     "Cockatoo",
  //     "Hyacinth Macaw",
  //     "Dove",
  //     "Parrotlet",
  //     "Green-Cheeked Conure",
  //     "Hahn’s Macaw",
  //     "Eclectus Parrot",
  //   ],
  //   Rabbit: [
  //     "Holland Lop",
  //     "Mini Lop",
  //     "Dutch",
  //     "Lionhead",
  //     "French Lop",
  //     "Californian",
  //     "Dwarf Papillon",
  //     "Netherland Dwarf",
  //     "Mini Rex",
  //     "Flemish Giant",
  //   ],
  // });
  const ANIMALS = ["Dog"];
  const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS);

  // const f1 = () => {
  //   switch (JSON.stringify(animal)) {
  //     case "Dog":
  //       return "German Sheperd";
  //     case "Cat":
  //       return "Siamese cat";
  //   }
  // };
const [breed, BreedDropdown, setBreed] = useDropdown(
    "Breed",
    "",
    Breeds[animal] || [],
  );
  const [stateAnimal, setStateAnimal] = useState("Dog")
  const [stateBreed, setStateBreed] = useState("German Shepherd")
  const [isSubmitted, setIsSubmitted] = useState(false) 

  const handleClick = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  // const [b, setB] = useState("")
  return (
    
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        {/* <AnimalDropdown />*/}
        {/* <BreedDropdown />  */}

<label htmlFor="use-dropwdown-animal">
      Animal
      <select
        required
        id="use-dropwdown-animal"
        value={stateAnimal}
        onChange={useCallback((e) => {
          setStateAnimal(e.target.value);
          setB(Breeds[e.target.value][0])

          
        })}
        // onBlur={(e) => {
        //   setStateAnimal(e.target.value)
        //   console.log(stateAnimal);
        //   console.log(Breeds[stateAnimal][0]);
        // }}
        disabled={!ANIMALS.length}
      >
        {ANIMALS.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
    <label htmlFor="use-dropwdown-breed">
      Breed
      <select
        required
        id="use-dropwdown-breed"
        value={stateBreed}
        onChange={(e) => {
          setStateBreed(e.target.value);
          setB(e.target.value)
        }}
        // onBlur={(e) => setStateBreed(e.target.value)}
        disabled={!Breeds[stateAnimal].length}
      >
        {Breeds[stateAnimal].map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
        <button onClick={handleClick}>Submit</button>
      </form>
      <Result location={location} animal={stateAnimal} breed = {b} submitted={isSubmitted} />
      
    </div>
  );
};

export default SearchParams;
