import Card from "../card";

export default function List(props) {
  return (
    <ul className="repo-cards">
      {props.data.map((card) => (
        <Card {...card} />
      ))}
    </ul>
  );
}
