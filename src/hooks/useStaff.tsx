import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IStaff } from "../interfaces/staff.interface";

export const API_URL = `${import.meta.env.VITE_PUBLIC_API_URL}/staff`;

export type HttpMethod = "put" | "delete" | "post";

const getStaff = async (): Promise<IStaff[]> => {
  const response = await axios.get(`${API_URL}`);

  return response.data;
};

const addStaff = async (staff: IStaff): Promise<IStaff> => {
  return axios.post(`${API_URL}`, staff);
};

const updateStaff = async (staff: IStaff): Promise<IStaff> => {
  return axios.put(`${API_URL}/${staff.id}`, staff);
};

const removeStaff = async (staff: IStaff): Promise<IStaff> => {
  return axios.delete(`${API_URL}/${staff.id}`);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStaffQuery = <T,>() => {
  return useQuery({
    queryKey: ["staff"],
    queryFn: getStaff,
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStaffMutation = <T,>() => {
  return useMutation({
    mutationFn: (data: { method: HttpMethod; staff: IStaff }) => {
      const { method, staff } = data;
      switch (method) {
        case "post":
          return addStaff(staff);
        case "put":
          return updateStaff(staff);
        case "delete":
          return removeStaff(staff);
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
    },
  });
};

export { useStaffQuery, useStaffMutation };
