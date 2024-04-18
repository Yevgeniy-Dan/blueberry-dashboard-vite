import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IRole } from "../interfaces/role.interface";

export const API_URL = `${import.meta.env.VITE_PUBLIC_API_URL}/roles`;

export type HttpMethod = "put" | "delete" | "post";

const getRoles = async (): Promise<IRole[]> => {
  const response = await axios.get(`${API_URL}`);

  return response.data;
};

const addRole = async (role: IRole): Promise<IRole> => {
  return axios.post(`${API_URL}`, role);
};

const updateRole = async (role: IRole): Promise<IRole> => {
  return axios.put(`${API_URL}/${role.id}`, role);
};

const removeRole = async (role: IRole): Promise<IRole> => {
  return axios.delete(`${API_URL}/${role.id}`);
};

// const useRoleQuery = <T,>() => {
const useRoleQuery = () => {
  return useQuery({
    queryKey: ["roles"],
    queryFn: getRoles,
  });
};

// const useRoleMutation = <T,>() => {
const useRoleMutation = () => {
  return useMutation({
    mutationFn: (data: { method: HttpMethod; role: IRole }) => {
      const { method, role } = data;
      switch (method) {
        case "post":
          return addRole(role);
        case "put":
          return updateRole(role);
        case "delete":
          return removeRole(role);
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
    },
  });
};

export { useRoleQuery, useRoleMutation };
