import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IService } from "../interfaces/service.interface";

export const API_URL = `${import.meta.env.VITE_PUBLIC_API_URL}/services`;
console.log(import.meta.env.VITE_PUBLIC_API_URL);

export type HttpMethod = "put" | "delete" | "post";

const getServices = async (): Promise<IService[]> => {
  const response = await axios.get(`${API_URL}`);

  console.log(response.data);

  return response.data;
};

const addService = async (service: IService): Promise<IService> => {
  return axios.post(`${API_URL}`, service);
};

const updateService = async (service: IService): Promise<IService> => {
  return axios.put(`${API_URL}/${service.id}`, service);
};

const removeService = async (service: IService): Promise<IService> => {
  return axios.delete(`${API_URL}/${service.id}`);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useServiceQuery = <T,>() => {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useServiceMutation = <T,>() => {
  return useMutation({
    mutationFn: (data: { method: HttpMethod; service: IService }) => {
      const { method, service } = data;
      switch (method) {
        case "post":
          return addService(service);
        case "put":
          return updateService(service);
        case "delete":
          return removeService(service);
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
    },
  });
};

export { useServiceQuery, useServiceMutation };
