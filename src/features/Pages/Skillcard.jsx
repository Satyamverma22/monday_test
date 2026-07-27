import React from 'react'

const Skillcard = ({ skill }) => {
  return (
    <div>
      <h1>{skill.name}</h1>
      <p>{skill.level}</p>
    </div>
  );
};

export default Skillcard;
