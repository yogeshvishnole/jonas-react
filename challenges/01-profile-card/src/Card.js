import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillSet from "./SkillSet";

function Card(props) {
  return (
    <div className="card">
      <Avatar avatarImg={props.avatarImg} />
      <div className="data">
        <Intro name={props.avatarName} description={props.avatarDescription} />
        <SkillSet skillSet={props.skillSet} />
      </div>
    </div>
  );
}

export default Card;
