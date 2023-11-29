
type Props = {
  children?: React.ReactNode;
  style?: string;
  title?: string;
  style2?: string;
  overline?: string;
};

const Banner = ({ children, style, title, style2, overline }: Props) => {
  return (
    <section className={`banner-container container ${style}`}>
      {children}
      <div className={`m-auto h-full flex h-fit flex-col md:w-4/5 ${style2}`}>
        <h1 className="text-center text-xl md:text-5xl">{title}</h1>
        <div className="flex justify-center flex-col m-auto w-fit text-center mt-8">
          <span>-</span>
          <p>{overline}</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
