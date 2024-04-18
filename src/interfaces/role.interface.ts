export interface IRolesList {
  businessInfo: boolean;
  staff: boolean;
  services: boolean;
  customers: boolean;
  payments: boolean;
  analytics: boolean;
}

export interface IRole {
  id: string;
  name: string;
  email: string;
  password: string;
  roles: IRolesList;
}

export const roleKeyValueMap = {
  businessInfo: "Business Info",
  staff: "Staff",
  services: "Services",
  customers: "Customers",
  payments: "Payments",
  analytics: "Analytics",
};
