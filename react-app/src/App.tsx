import ListGroup from "./components/ListGroup";
const items = ["New York", "San Francisco", "Tokoyo", "London", "Paris"];




function App() {
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
