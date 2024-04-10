export interface RoleModel {
  id: string;
  name: string;
  email: string;
  password: string;
  roles: {
    businessInfo: boolean;
    staff: boolean;
    services: boolean;
    customers: boolean;
    payments: boolean;
    analytics: boolean;
  };
}
