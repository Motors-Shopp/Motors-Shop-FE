// import VehicleCard from "./components/vehicleCard/index"
import Footer from "./components/footers/footer";
import Header from "./components/header/index";
import NavBar from "./components/navBar/index";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <main>
        <Footer />
      </main>
    </div>
  );
}

export default App;
