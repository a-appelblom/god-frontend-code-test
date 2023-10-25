type Props = {
  children: React.ReactNode;
};

const cointainerStyle = {
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  display: "grid",
  msGridColumns: "1fr 1fr 1fr 1fr ",
};

export default function Carousel({ children }: Props) {
  return <div>{children}</div>;
}
