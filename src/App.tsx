import "./App.css";
import Button from "./componets/Button";
import Link from "./componets/Link";

function App() {
  return (
    <div>
     <Link onClick={() => console.log("clicked")}/>
    </div>
  );
}

export default App;
