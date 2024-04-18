import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IAppointment } from "../interfaces/appointment.interface";

export const API_URL = "http://localhost:3000/api/appointments";

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useAppointmentQuery = <T,>() => {
  return useQuery({
    queryKey: ["appointments"],
    queryFn: getAppointments,
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useAppointmentMutation = <T,>() => {
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
