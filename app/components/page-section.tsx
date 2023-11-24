export default function PageSection({ children, ...props }) {
  return (
    // <section className={`pt-16 pb-16 border-black ${props.style}`}>

    <section className={`${props.style}`}>{children}</section>
  );
}
