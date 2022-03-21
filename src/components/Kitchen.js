import Oven from "./Oven.js";
import Sink from "./Sink.js";
import "./components.css";

function Kitchen() {
  return (
    <div>
      <h1>Kitchen</h1>
      <Oven />
      <Sink />
    </div>
  );
}

export default Kitchen;
