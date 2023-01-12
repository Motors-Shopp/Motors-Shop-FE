import Footer from "../../components/footers/footer";
import Header from "../../components/header";
import NavBar from "../../components/navBar";
import VehicleCard from "../../components/vehicleCard";
import { PageHome } from "./style";

function Home() {
    return (
        <>
            <Header />
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
            <Footer />
        </>
    );
}

export default Home;
