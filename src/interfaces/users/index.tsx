interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  birthdate: string;
  bio: string;
  is_seller: boolean;
  is_client: boolean;
  img: string;
  address: string;
}

interface IUserRequest {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  birthdate: string;
  bio: string;
  is_seller: boolean;
  is_client: boolean;
  address: string;
  password: string;
}

export type { IUser, IUserRequest };
