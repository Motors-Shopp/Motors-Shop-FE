import Footer from "../../components/footers/footer";
import Header from "../../components/header";
// import NavBar from "../../components/navBar";
// import NavFindSeller from "../../components/NavBarFindOne/NavBarFindOne";
import NavClientSeller from "../../components/navBarClientInSeller/navBarClientInSeller";
import VehicleCard from "../../components/vehicleCard";
import { PageFindSeller } from "./style";

function PageOneFindSeller() {
  return (
    <>
      <Header />
      <PageFindSeller>
        <NavClientSeller />
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
      </PageFindSeller>
      <Footer />
    </>
  );
}

export default PageOneFindSeller;
