interface IAddress {
  id: string;
  street: string;
  number: string;
  complement?: string | null;
  district: string;
  CEP: string;
  state: string;
  user_id: string;
}

export type { IAddress };
