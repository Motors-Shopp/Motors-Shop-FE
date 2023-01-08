import styled  from "styled-components";

// import { GlobalStyle } from "../../styles/global";


export const StyleHeader = styled.div`

   header{
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey10); 
}

.mobileMenu{
    display:flex ;
    justify-content:center ;
    align-items:center ;
    margin-right:22px ;
    margin-top:5px ;
    font-size:21px ;
}

.logo{
    font-size: 24px;
    display: flex;
    background-color: white;
    height: 50px;
    width: 110px;
    margin-left: 15px;
    align-items: center;
    color: #36007d;
    font-weight: bold
}

.logoShop{
    font-size: 18px;
    margin-left: 5px;
    margin-top: 5px;
    color: #6200e3;
    font-weight: bold
}

.headersCategorysAndUsername{
    display:none ;
}

@media screen and (min-width:700px){

.mobileMenu{
    display:none ;
}

.logo{
    font-size: 20px;
    margin-left: 35px;
}

.logoShop{
    font-size: 14px;
}

.headersCategorysAndUsername{
    width: 350px;
    display: flex;
    justify-content: space-between;
}

.categorys{
    height: 100%;
    width: 200px;
    font-size: 15px;
    display: flex;
    justify-content: space-around;
    color:#ced4da ;
    border-right:solid;
    align-items: center;
}

p{
    color:#868e88 ;
}

.usersname{
    height: 100%;
    width: 140px;
    display: flex;
    align-items:center ;
    justify-content:center ;
    cursor: pointer;
}

.usersnameInternal{
    display: flex;
    align-items:center ;
    justify-content:center ;
}


.imgProfile{
    width: 25px;
    height: 25px;
    border-radius:100%;
    margin-right:7px ;
}

}

`