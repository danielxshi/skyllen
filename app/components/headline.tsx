import localFont from "next/font/local";

const quicksandBold = localFont({
  src: [
    {
      path: "../fonts/quicksand/Quicksand-VariableFont_wght.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function Headline(props) {
  return (
    // return <section className={`${props.style}`}>{children}</section>;

    <div className={`grid-container mb-16 ${props.style}`}>
      <div className="col-span-full wrapper pb-4">
        <p className="uppercase">{props.overline}</p>
      </div>
      <h3 className="med:col-span-2 col-span-full">{props.title}</h3>
    </div>
  );
}
