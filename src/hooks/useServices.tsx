import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IService } from "../interfaces/service.interface";

export const API_URL = `${import.meta.env.VITE_API_BASE_URL}/services`;

export type HttpMethod = "put" | "delete" | "post";

const getServices = async (): Promise<IService[]> => {
  const response = await axios.get(`${API_URL}`);

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

// const useServiceQuery = <T,>() => {
const useServiceQuery = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
};

// const useServiceMutation = <T,>() => {
const useServiceMutation = () => {
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
