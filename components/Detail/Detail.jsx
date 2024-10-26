import React from "react";

import BodyPartImage from "../../src/icons/body-part.png";
import TargetImage from "../../src/icons/target.png";
import EquipmentImage from "../../src/icons/equipment.png";
import "./Detail.css";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    { image: BodyPartImage, text: bodyPart },
    { image: TargetImage, text: target },
    { image: EquipmentImage, text: equipment },
  ];
  return (
    <div className="detail">
      <div className="left">
        <img src={gifUrl} alt="" />
      </div>
      <div className="right">
        <h1>{name}</h1>
        <p>
          Exercise keep you strong. {`${name} `} is one of the best exercise you
          can use to target your {`${target} `} muscles, and it will Improve
          your energy. it ended in 1:56
        </p>
        {extraDetail.map((detail) => (
          <div key={detail.text} className="exercise-detail">
            <img src={detail.image} alt="" />
            <p>{detail.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
