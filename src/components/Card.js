import React from "react";

const Card = (props) => {
  const { name, email, id } = props;
  return (
    <span className="teste">
      <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5 luz  ">
        <img
          alt="foto"
          src={`https://robohash.org/${id}?200x200`}
          width="200rem"
          height="200rem"
        />
        <div>
          <h2>{name}</h2>
          <p> {email}</p>
        </div>
      </div>
    </span>
  );
};
export default Card;
