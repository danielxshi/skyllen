import Button from "../components/button";

export default function ProjectDescription(props) {
  return (
    // <section className={`${props.style}`}>
    <div className={`col-start-2 col-span-3 ${props.style}`}>
      <div className="mb-16">
        <h3>{props.title}</h3>
        <span>-</span>
      </div>
      <div>
        <div className="mb-4">
          <p className="mb-4">{props.paragraphOne}</p>
          <p>{props.paragraphTwo}</p>
        </div>
        <Button
          onClick={() => {
            this.props.onClick();
          }}
          url={props.url}
        >
          {props.buttonText}
        </Button>
      </div>
    </div>
  );
}
