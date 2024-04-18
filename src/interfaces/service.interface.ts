// import { IStaff } from "./staff.interface";

export interface IService {
  id: string;
  name: string;
  duration: string;
  price: number;
  currencyCode: string;
  // staffMembers: IStaff[];
  staffMembers: string[];
  isNoPreferenceEnabled: boolean;
}
