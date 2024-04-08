// import { StaffModel } from "../staff/models";

export interface ServiceModel {
  id: string;
  name: string;
  duration: string;
  price: string;
  currencyCode: string;
  // staffMembers: StaffModel[];
  staffMembers: string[];
  isNoPreferenceEnabled: boolean;
}
