import { StyleNavBar } from "./style";
import { useState, } from "react";
import NavmodalCreateAnuncioBar from "../modalCreateAnuncio/index";

function NavBar(): JSX.Element {

  const [modal, setModal] = useState(false)

    return <StyleNavBar>
        {modal && <NavmodalCreateAnuncioBar setModal = {setModal}></NavmodalCreateAnuncioBar> }
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
                <button className="btnHome">Carros</button>
                <button className="btnHome">Motos</button>
                <button className="btnHome" onClick={()=>{setModal(true)}}>Criar Anuncio</button>
            </div>
        </div>
    </StyleNavBar>


}

export default NavBar;
