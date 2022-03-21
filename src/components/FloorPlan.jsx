import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import BedRoom from "./BedRoom";
import Bath from "./Bath";
import "./components.css";

function FloorPlan() {
  return (
    <div>
      <Kitchen />
      <LivingRoom />
      <BedRoom bedNum="1" />
      <BedRoom bedNum="2" />
      <BedRoom bedNum="3" />
      <Bath size="Half" />
      <Bath size="Full" />
    </div>
  );
}

export default FloorPlan;
