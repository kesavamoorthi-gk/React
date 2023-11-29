// import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  // const items = ["San Franciso", "New York", "London", "Tokyo", "Paris"];
  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      /> */}

      {/* <Alert>Hellow World Da</Alert> */}
      <Buttons color="success" onClick={() => console.log("Clicked")}>
        Hello World
      </Buttons>
    </div>
  );
}

export default App;
