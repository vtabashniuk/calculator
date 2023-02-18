import "./App.css";

const numbers = new Array(10)
  .fill(0)
  .map((i, index) => index);

function App() {
  return (
    <>
      <h1>Calculator</h1>
      {numbers.map((i) => (
        <button type="submit" key={i}>
          {i}
        </button>
      ))}
    </>
  );
}

export default App;
