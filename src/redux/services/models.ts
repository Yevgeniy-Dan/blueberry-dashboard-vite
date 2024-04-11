// import { StaffModel } from "../staff/models";

export interface ServiceModel {
  id: string;
  name: string;
  duration: string;
  price: number;
  currencyCode: string;
  // staffMembers: StaffModel[];
  staffMembers: string[];
  isNoPreferenceEnabled: boolean;
}
