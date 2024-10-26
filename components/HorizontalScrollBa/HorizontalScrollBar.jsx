import React, { useState } from "react";
import BodyParts from "../bodyParts/BodyParts";
import "./HorizontalScrollBar.css";
const HorizontalScrollBar = ({ data, exercises, setSearch }) => {
  const [clickedItem, setclickedItem] = useState(null);
  return (
    <div className="test">
      {data?.map((item, index) => (
        <div key={item} className="body-part">
          <BodyParts
            isClicked={clickedItem === index}
            onClick={() => {
              setclickedItem(index);
              setSearch(item);
            }}
            item={item}
            exercises={exercises}
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollBar;
