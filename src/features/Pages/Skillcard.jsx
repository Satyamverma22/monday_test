import "./skillcard.css";

const Skillcard = ({ skill }) => {
  return (
    <div className="skill-card">
      <h1 className="skill-name">{skill.name}</h1>
      <p className="skill-level">{skill.level}</p>
    </div>
  );
};

export default Skillcard;