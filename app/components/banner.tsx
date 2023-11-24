export default function Banner({ children, ...props }) {
  return (
    <section className={`banner-container ${props.style}`}>
      {children}
      <div className={`m-auto h-full flex-col w-4/5 ${props.style2}`}>
        <h1 className="">{props.title}</h1>
        <div className="flex justify-center flex-col m-auto w-fit text-center mt-8">
          <span>-</span>
          <p>{props.overline}</p>
        </div>
      </div>
    </section>
  );
}
