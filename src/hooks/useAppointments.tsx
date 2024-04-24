import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IAppointment } from "../interfaces/appointment.interface";

export const API_URL = `${import.meta.env.VITE_API_BASE_URL}/appointments`;

export type HttpMethod = "put" | "delete" | "post";

const getAppointments = async (): Promise<IAppointment[]> => {
  const response = await axios.get(`${API_URL}`);

  return response.data;
};

const addAppointment = async (
  appointment: IAppointment
): Promise<IAppointment> => {
  return axios.post(`${API_URL}`, appointment);
};

const updateAppointment = async (
  appointment: IAppointment
): Promise<IAppointment> => {
  return axios.put(`${API_URL}/${appointment.id}`, appointment);
};

const removeAppointment = async (
  appointment: IAppointment
): Promise<IAppointment> => {
  return axios.delete(`${API_URL}/${appointment.id}`);
};

// const useAppointmentQuery = <T,>() => {
const useAppointmentQuery = () => {
  return useQuery({
    queryKey: ["appointments"],
    queryFn: getAppointments,
  });
};

// const useAppointmentMutation = <T,>() => {
const useAppointmentMutation = () => {
  return useMutation({
    mutationFn: (data: { method: HttpMethod; appointment: IAppointment }) => {
      const { method, appointment } = data;
      switch (method) {
        case "post":
          return addAppointment(appointment);
        case "put":
          return updateAppointment(appointment);
        case "delete":
          return removeAppointment(appointment);
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
    },
  });
};

export { useAppointmentQuery, useAppointmentMutation };
