// import Alert from "./components/Alert";
import { useState } from "react";
import Buttons from "./components/Buttons";
import ShowAlert from "./components/ShowAlert";

function App() {
  // const items = ["San Franciso", "New York", "London", "Tokyo", "Paris"];
  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      /> */}

      {/* <Alert>Hellow World Da</Alert> */}
      {showAlert && (
        <ShowAlert
          onClose={() => {
            setShowAlert(false);
          }}
        ></ShowAlert>
      )}

      <Buttons
        color="success"
        onClick={() => {
          setShowAlert(true);
        }}
      >
        <span>Click</span>
      </Buttons>
    </div>
  );
}

export default App;
