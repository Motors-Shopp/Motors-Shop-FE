// import VehicleCard from "./components/vehicleCard/index"
// import Footer from "./components/footers/footer";
// import Header from "./components/header/index";
// import Announcement from "./pages/announcements/Announcement";
import { Switch, Route } from "react-router-dom";

import LoginFrom from "./components/loginFrom/index";
import CadastroFrom from "./components/cadastroForm/index";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <p>home</p>
      </Route>
      <Route exact path="/login">
        <LoginFrom></LoginFrom>
      </Route>
      <Route exact path="/cadastro">
        <CadastroFrom></CadastroFrom>
      </Route>
    </Switch>
  );
}

export default App;
