import "./App.css";
const Box = ({ className = "", size, style, ...props }) => {
  const sizeClassName = size ? `box--${size}` : "";
  console.log({ ...props.children });
  return <div style={{ fontStyle: "italic", ...style }} className={`box ${sizeClassName}`.trim()} children={[...props.children]} />;
};

const App = () => {
  return (
    <>
      <Box size="small" style={{ backgroundColor: "lightblue" }} children={["Maaz", " ", "Ahmed"]} />
      <Box size="medium" style={{ backgroundColor: "pink" }} children={["Maaz", " ", "Ahmed"]} />
      <Box size="large" style={{ backgroundColor: "orange" }} children={["Maaz", " ", "Ahmed"]} />
    </>
  );
};

export default App;
