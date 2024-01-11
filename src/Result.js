import React, { useState } from "react";

const Result = (props) => {
  

  const [animals, setAnimals] = useState({
    Seattle: {
      Dog: {
        "": {
          "name": "",
          "breed": "",
          "gender": "",
        },
        "German Shepherd": {
          "name": [
            "Doink",
            "abc"
          ],
          "breed": "German Shepherd",
          "gender": ["male", "female"],
        },
        Bulldog: {
          "name": ["Pepper", "Peppier"],
          "breed": "Bulldog",
          "gender": ["Female", "Male"],
        },
      },
      Cat: {
        "": {
          "name": "",
          "breed": "",
          "gender": "",
        },
        "Siamese cat": {
          "name": "Sia",
          "breed": "Siamese Cat",
          "gender": "Female",
        },
        "British Shorthair": {
          "name": "Britty",
          "breed": "British Shorthair",
          "gender": "Male",
        },
      },
    },
  });

  const location = props.location;
  const animal = props.animal;
  const breed = props.breed;
  const sub = props.submitted
  // console.log(breed);
  const object = (animals['Seattle'][animal][breed])
  // const ob1G = (animals['Seattle'][animal][breed]["gender"])
  const obN = object["name"]
  // const obG = object["gender"]

  // const len = [];
  // var count = 0
  // obN.map(name => {
  //   len.push(count)
  //   count ++
  // })


  if(sub){
      return (
        <div> 
          {obN.map(name => {
            console.log(name);
            if(sub){
              return(
                <div className="options">
                <h1>{name}</h1>
                <h2>{breed}</h2>
                </div>
              )

            }})}

        {/* {len.map(id => {
          <h1>{obN[id]}</h1>
            
        })} */}
        </div>

      );
};
};


export default Result;
