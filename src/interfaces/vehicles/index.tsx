interface IVehicle {
  id: string;
  name: string;
  board: string;
  localization: string;
  model: string;
  year: string;
  km: number;
  price: number;
  description: string;
  typeOfVehicle?: string;
  img: string;
}

export type { IVehicle };
