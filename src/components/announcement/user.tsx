import { IAddress } from "../../interfaces/address";
import { IUser } from "../../interfaces/users/index";

export const user: IUser = {
  id: "1",
  name: "Samuel Leão",
  email: "samuel@kenzie.com",
  cpf: "44400022211",
  cellphone: "5511983233882",
  birthdate: "1990-10-10",
  bio: "O Primeiro vendedor de carros da plataforma",
  is_seller: true,
  is_client: false,
  img: "https://img.freepik.com/vetores-premium/retrato-generico-do-homem-avatar-padrao-do-genero-masculino_543062-419.jpg",
  address: "1",
};

export const user_adress: IAddress = {
  id: "1",
  street: "Rua Ametista",
  number: "133",
  complement: null,
  district: "Aclimação",
  CEP: "01518-000",
  state: "SP",
  user_id: "1",
};
