import { z } from "zod";

export const getAvailableRoomsSchema = z.object({
  roomCategoryId: z.string({message: "Room category ID must be a present"}),
  checkInDate: z.string({message: "Check-in date must be present"}),
  checkOutDate: z.string({message: "Check-out date must be present"}),
})

export const updateBookingIdToRoomsSchema = z.object({
  bookingId: z.number({message: "Booking ID must be present"}),
  roomIds: z.array(z.number(), {message: "Room IDs must be present"})
});