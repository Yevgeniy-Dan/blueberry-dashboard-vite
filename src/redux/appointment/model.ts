export interface AppointmentModel {
  id: string;
  date: string;
  time: string;
  customerName: string;
  staff: string;
  service: string;
  status: "Pending" | "Confirmed" | "Done" | "Canceled" | "No-Show";
}
