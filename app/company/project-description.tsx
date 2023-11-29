import Button from "../components/button";

type Props = {
  style: string;
  title: string;
  paragraphOne: string;
  paragraphTwo: string;
};

const ProjectDescription = ({
  style,
  title,
  paragraphOne,
  paragraphTwo,
}: Props) => {
  return (
    <div
      className={`col-start:1 col-span-full md:col-start-2 md:col-span-3 ${style}`}
    >
      <div className="mb-16">
        <h3>{title}</h3>
        <span>-</span>
      </div>
      <div>
        <div className="mb-4">
          <p className="mb-4">{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
