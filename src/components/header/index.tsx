import { StyleHeader } from "./style";


function Header(): JSX.Element {

    return <StyleHeader>
        <header>
            <div className="logo">
                <div>
                    Motors 
                </div>
                <div className="logoShop">
                    shop
                </div>
            </div>

            <div className="headersCategorysAndUsername">
                <div className="categorys">
                    <p>Carros</p>
                    <p>Motos</p>
                    <p>Leilão</p>
                </div>
                <div className="usersname">
                    <div className="usersnameInternal">
                        <img className="imgProfile" alt={"produto.name"} src={"https://s2.glbimg.com/s5qbLhszZPNbfGmtPpqVEs65E6g=/0x0:1980x1121/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/N/p/VM7L3XRr2LKluhDgfJqg/fiatpulse-frontal.jpeg"}></img>
                        <p>Jose Leao</p>
                    </div>
                </div>


                
            </div>
            {/* mobile */}
            <div className="mobileMenu">
                <span>☰</span>
            </div>

        </header>
        {/* <div>
            fdfsd
        </div> */}
    </StyleHeader>
    
}

export default Header;
