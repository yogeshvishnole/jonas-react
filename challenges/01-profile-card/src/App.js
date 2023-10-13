import Card from "./Card";

const cardsData = [
  {
    avatarName: "Yogesh Vishnole",
    avatarDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    avatarImg: "img/yogeshvishnole.jpeg",
    skillSet: [
      { skillName: "HTML+CSS ✌", backgroundColor: "red" },
      { skillName: "JavaScript  ✌", backgroundColor: "blue" },
      { skillName: "Web Design  ✌", backgroundColor: "yellow" },
      { skillName: "Git and GitHub  ✌", backgroundColor: "khaki" },
      { skillName: "React  ✌", backgroundColor: "orange" },
      { skillName: "Svelte  ✌", backgroundColor: "pink" },
    ],
  },
];

function App() {
  return (
    <div className="">
      {
        // hello
      }
      {cardsData.map((cardData) => (
        <Card {...cardData} />
      ))}
    </div>
  );
}

export default App;
