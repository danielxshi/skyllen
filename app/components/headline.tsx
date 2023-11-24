export default function Headline(props) {
  return (
    <div className="grid-container mb-16">
      <div className="col-span-full wrapper pb-4">
        <p className="uppercase">{props.overline}</p>
        <span>-</span>
      </div>
      <h3 className="col-span-2">{props.title}</h3>
    </div>
  );
}
