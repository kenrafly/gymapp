import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../../src/utils/fetchData";
import Detail from "../Detail/Detail";
import SimilarExercises from "../SimilarExercises/SimilarExercises";
const ExerciseDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [equipmentExercises, setequipmentExercises] = useState([]);
  const [targetMuscleExercises, settargetMuscleExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com/video/related";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );

      const equipmentExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setexerciseDetail(exerciseDetailData);
      setequipmentExercises(equipmentExerciseData);
      console.log(equipmentExerciseData);
    };
    fetchExerciseData();
  }, [id]);
  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
      <SimilarExercises equipmentExercise={equipmentExercises} />
    </div>
  );
};

export default ExerciseDetail;
