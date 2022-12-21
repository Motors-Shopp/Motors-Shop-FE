import { StyleNavBar } from "./style";

function NavBar(): JSX.Element {

    return <StyleNavBar>
        <div className="conteiner">
            <div className="title">
                <p className="Pdesktop">Velocidade e experiência em</p>
                <p className="Pdesktop">um lugar feito para você</p>

                <p className="Pmobile">Velocidade e</p>
                <p className="Pmobile">experiência em um</p>
                <p className="Pmobile">lugar feito para você</p>
            </div>
            <div className="description">
                    Um ambiente feito para você explorar o seu melhor
            </div>
            <div className="categories">
                <button>Carros</button>
                <button>Motos</button>
            </div>
        </div>
    </StyleNavBar>


}

export default NavBar;
