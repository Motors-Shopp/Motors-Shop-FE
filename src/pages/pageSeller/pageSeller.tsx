import Footer from "../../components/footers/footer";
import Header from "../../components/header";
// import NavBar from "../../components/navBar";
import NavFindSeller from "../../components/NavBarFindOne/NavBarFindOne";
import VehicleCard from "../../components/vehicleCard";
import { PageSeller } from "./style";

function PageIsSeller() {
  return (
    <>
      <Header />
      <PageSeller>
        <NavFindSeller />
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
      </PageSeller>
      <Footer />
    </>
  );
}

export default PageIsSeller;
