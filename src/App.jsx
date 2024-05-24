import "./App.css";
import  NavBar  from "./component/NavBar";
import { Outlet } from "react-router";
function App() {
  return (
    <div>
      <div className="z-50" >
        <NavBar/>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
