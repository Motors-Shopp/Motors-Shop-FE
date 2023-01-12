import NavClientSeller from "../../components/navBarClientInSeller/navBarClientInSeller";
import VehicleCard from "../../components/vehicleCard";
import { PageFindSeller } from "./style";

function PageOneFindSeller() {
  return (
    <>
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
    </>
  );
}

export default PageOneFindSeller;
