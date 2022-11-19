export default function Card(props) {
  return (
    <li className="repo-card">
      <span className="title">{props.title}</span>
      <span className="description">placeholder description</span>
      <section className="footer">
        <div>Stars: 500</div>
        <div>Forks: 100</div>
      </section>
    </li>
  );
}
