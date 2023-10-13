import SkillTab from "./SkillTab";

function SkillSet(props) {
  return (
    <ul className="skill-list">
      {props.skillSet?.map((skill) => {
        return (
          <SkillTab
            skillName={skill.skillName}
            backgroundColor={skill.backgroundColor}
          />
        );
      })}
    </ul>
  );
}

export default SkillSet;
