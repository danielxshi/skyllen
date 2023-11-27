export default function Banner({ children, ...props }) {
  return (
    <section className={`banner-container container ${props.style}`}>
      {children}
      <div className={`m-auto h-full flex h-fit flex-col md:w-4/5 ${props.style2}`}>
        <h1 className="text-center text-xl md:text-5xl">{props.title}</h1>
        <div className="flex justify-center flex-col m-auto w-fit text-center mt-8">
          <span>-</span>
          <p>{props.overline}</p>
        </div>
      </div>
    </section>
  );
}
