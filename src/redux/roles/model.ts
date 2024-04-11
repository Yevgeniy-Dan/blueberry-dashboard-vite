export interface Roles {
  businessInfo: boolean;
  staff: boolean;
  services: boolean;
  customers: boolean;
  payments: boolean;
  analytics: boolean;
}

export const roleKeyValueMap = {
  businessInfo: "Business Info",
  staff: "Staff",
  services: "Services",
  customers: "Customers",
  payments: "Payments",
  analytics: "Analytics",
};

export interface RoleModel {
  id: string;
  name: string;
  email: string;
  password: string;
  roles: Roles;
}
