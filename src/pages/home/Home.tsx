import Showcase from "../showcase/Showcase"
import { BannerButton, HomeBanner } from "./style"

function Home() {
    return (
        <>
            <HomeBanner>
                <section>

                    <h2>Velocidade e experiência em um lugar feito para você</h2>

                    <p>Um ambiente feito para você explorar o seu melhor</p>

                    <div>
                        <BannerButton>Carros</BannerButton>
                        <BannerButton>Motos</BannerButton>
                    </div>
                </section>
            </HomeBanner>
            <Showcase />
        </>
    )
}
export default Home