function SkillTab(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.backgroundColor }}>
      {props.skillName}
    </li>
  );
}

export default SkillTab;
