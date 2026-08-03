export type Booking = {
  id: string;

  userEmail: string;

  roomId: string;

  roomName: string;

  checkIn: string;

  checkOut: string;

  guests: number;

  status:
    | "pending"
    | "confirmed"
    | "completed"
    | "cancelled";

  createdAt: string;
};