import React, { useState, useEffect } from "react";
import "./DiscoverCourses.css";
import { exerciseOptions, fetchData } from "../../src/utils/fetchData";
import HorizontalScrollBar from "../HorizontalScrollBa/HorizontalScrollBar";
import Exercises from "../exercises/Exercises";
const DiscoverCourses = () => {
  const [search, setSearch] = useState("");
  const [bodyParts, setbodyParts] = useState([]);
  const [exercises, setExercises] = useState([]);
  // const [allData, setallData] = useState([]);

  // async function allExercises() {
  //   const exercisesData = await fetchData(
  //     "https://exercisedb.p.rapidapi.com/exercises",
  //     exerciseOptions
  //   );
  //   setallData(exercisesData);
  // }

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      bodyPartsData.unshift("all");
      console.log(bodyPartsData);

      setbodyParts(bodyPartsData);
    };
    fetchBodyParts();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    } else {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      setExercises(exercisesData);
    }
  };
  return (
    <div className="discover">
      <h1>AWESOME EXERCISES YOU SHOULD KNOW</h1>
      <div className="search">
        <input
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          type="text"
          placeholder="Search"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="body-parts">
        <HorizontalScrollBar
          data={bodyParts}
          exercises={exercises}
          setSearch={setSearch}
        />

        {/* {bodyParts.map((part) => ( */}
        <Exercises bodyPart={bodyParts} exercises={exercises} />
        {/* ))} */}
      </div>
    </div>
  );
};

export default DiscoverCourses;
