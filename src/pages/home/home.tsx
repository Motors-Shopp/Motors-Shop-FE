import Footer from "../../components/footers/footer";
import Header from "../../components/header";
import NavBar from "../../components/navBar";
import VehicleCard from "../../components/vehicleCard";
import { PageHome } from "./style";

function Home() {
  return (
    <>
      <Header />
      <PageHome>
        <NavBar />
        <h2>Carro</h2>
        <section>
          <VehicleCard />
          <VehicleCard />
        </section>

        <h2>Motos</h2>
        <section>
          <VehicleCard />
          <VehicleCard />
        </section>
      </PageHome>
      <Footer />
    </>
  );
}

export default Home;
