// import VehicleCard from "./components/vehicleCard/index"
// import Footer from "./components/footers/footer";
// import Header from "./components/header/index";
// import Announcement from "./pages/announcements/Announcement";
// <<<<<<< HEAD
// import VehicleCard from "./components/vehicleCard";

// function App() {
//   return (
//     <>
//       <VehicleCard />
//     </>
// =======

import Header from "./components/header/index";

import { Switch, Route } from "react-router-dom";

import LoginFrom from "./components/loginFrom/index";
import CadastroFrom from "./components/cadastroForm/index";

function App() {
  return (
    <Switch>
      <Route exact path="/home">
        <Header></Header>
      </Route>
      <Route exact path="/home/:id">
        <Header></Header>
      </Route>
      <Route exact path="/">
        <LoginFrom></LoginFrom>
      </Route>
      <Route exact path="/cadastro">
        <CadastroFrom></CadastroFrom>
      </Route>
    </Switch>
// >>>>>>> e04405b7c22262a4ac83b33a1031a9304d9e5e29
  )}

export default App;
