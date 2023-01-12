import NavFindSeller from "../../components/NavBarFindOne/NavBarFindOne";
import VehicleCard from "../../components/vehicleCard";
import { PageSeller } from "./style";

function PageIsSeller() {
  return (
    <>
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
    </>
  );
}

export default PageIsSeller;
