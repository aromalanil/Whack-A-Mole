import React from "react";
import mole_img from "../img/mole.webp";
import hole from "../img/hole.webp";

const MoleHole = (props) => {
  let moleStyle = props.molePopped ? { display: "inline" } : { display: "none" };

  function handleClick() {
    if (props.molePopped) {
      props.setScore();
    }
  }

  return (
    <div className="grid-item" onClick={handleClick}>
      <img className="hole" src={hole} alt="" />
      <img className="mole" src={mole_img} alt="" style={moleStyle} />
    </div>
  );
};

export default MoleHole;
