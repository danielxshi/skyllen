export default function PageSection({ children, ...props }) {
  return <section className={`${props.style}`}>{children}</section>;
}
