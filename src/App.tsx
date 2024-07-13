import { BellRing } from "lucide-react";
import Alert from "./components/Alert/Alert";


function App() {
  return (
    <div style={{margin:"2rem" }}>
      <Alert type={"alert-danger"}  icon={<BellRing/>} title="Alert" />
     
    </div>
  );
}

export default App;
