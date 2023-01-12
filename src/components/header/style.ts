import styled from "styled-components";

export const StyleHeader = styled.div`
    header {
      height: 60px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .mobileMenu {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 22px;
      margin-top: 5px;
      font-size: 21px;
    }

    .logo {
      font-size: 0.9rem;
      display: flex;
      padding-left: 6%;
      align-items: center;
      color: var(--random6);
      font-weight: bold;
      background: linear-gradient(90deg, var(--grey0), var(--brand1));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }

    .logoShop {
      font-size: 1.2rem;
      color: var(--random5);
      font-weight: bold;
      padding: 8px 0 0 5px;
    }

    .headersCategorysAndUsername {
      display: none;
    }

  @media screen and (min-width: 700px) {

.mobileMenu{
    display:flex ;
    justify-content:center ;
    align-items:center ;
    margin-right:22px ;
    margin-top:5px ;
    font-size:21px ;
    /* font-weight: bold */
}

    .logo {
      padding-left: 40px;
    }

.headersCategorysAndUsername{
    display:none ;
}

    .categories {
      height: 100%;
      width: 200px;
      font-size: 1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: var(--grey5);
      border-right: solid;
      cursor: pointer;
    }

    p {
      color: var(--grey2);
    }

.mobileMenu{
    display:none ;
}

.textAjusting01Semlogin{
    color: #36007d;
}

.usersnameInternal2Semlogin{
    display: flex;
    align-items:center ;
    justify-content: space-between;
    width: 250px;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
}

.buttonSemlogin01{
    width: 90px;
    height: 30px;
    font-weight: bold;
    background-color: white;
    cursor: pointer;
}

.logo{
    font-size: 20px;
    display: flex;
    background-color: white;
    height: 50px;
    width: 110px;
    margin-left: 35px;
    align-items: center;
    color: #36007d;
    font-weight: bold
}

.logoShop{
    font-size: 14px;
    margin-left: 5px;
    margin-top: 5px;
    color: #6200e3;
    font-weight: bold
}

.headersCategorysAndUsername{
    width: 400px;
    display: flex;
    justify-content: space-between;
}

.categorys{
    height: 100%;
    width: 200px;
    font-size: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:#ced4da ;
    border-right:solid;
    cursor: pointer;
    
}

p{
    color:#868e88 ;
}

.usersname{
    width: 150px;
    display: flex;
    align-items:center ;
    justify-content: space-around;
    cursor: pointer;
}

.imgProfile{
    width: 25px;
    height: 25px;
    border-radius:100%;
    margin-right:7px ;
}

}
`
