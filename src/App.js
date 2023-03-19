import "./App.css";
const Box = ({ className = "", size, style, ...props }) => {
  const sizeClassName = size ? `box--${size}` : "";
  return (
    <div
      style={{ fontStyle: "italic", ...style }}
      className={`box ${sizeClassName}`.trim()}
      {...props}
    />
  );
};

const App = () => {
  return (
    <>
      <Box
        size="small"
        style={{ backgroundColor: "lightblue" }}
        children="Hello"
      />
      <Box size="medium" style={{ backgroundColor: "pink" }} children="Hello" />
      <Box
        size="large"
        style={{ backgroundColor: "orange" }}
        children="Hello"
      />
      <Box children="sizeless" />
    </>
  );
};

export default App;
