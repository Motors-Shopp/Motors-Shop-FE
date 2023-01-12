import NavBar from "../../components/navBar";
import VehicleCard from "../../components/vehicleCard";
import { PageHome } from "./style";

function Home() {
    return (
        <>
            <NavBar />
            <PageHome>
                    <h2>Carro</h2>
                    <section className="vehicles">
                        <VehicleCard />
                    </section>

                    <h2>Motos</h2>
                    <section className="vehicles">
                        <VehicleCard />
                    </section>
            </PageHome>
        </>
    );
}

export default Home;
