import axios from "axios";
import { serverConfig } from "../config";

export const getAvailableRooms = async (roomCategoryId: number, checkInDate: string, checkOutDate: string) => {
  try {
    const response = await axios.get(`${serverConfig.HOTEL_SERVICE_URL}rooms/available`, {
      params: {
        roomCategoryId,
        checkInDate,
        checkOutDate
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching available rooms:", error);
    throw error;
  }
}

export const updateBookingIdToRooms = async (bookingId: number, roomIds: number[]) => {
  try {
    const response = await axios.post(`${serverConfig.HOTEL_SERVICE_URL}rooms/update-booking-id`, {
      bookingId,
      roomIds
    });
    return response.data;
  } catch (error) {
    console.error("Error updating booking ID to rooms:", error);
    throw error;
  }
}