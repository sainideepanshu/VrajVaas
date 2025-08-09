import { GetAvailableRoomsDTO, UpdateBookingIdToRoomsDTO } from "../dto/room.dto";
import { RoomRepository } from "../repositories/room.repository";

const roomRepository = new RoomRepository();

export async function getAvailableRoomsService(
  getAvailableRoomsDTO: GetAvailableRoomsDTO
) {
  const rooms = await roomRepository.findByRoomCategoryIdAndDateRange(
    getAvailableRoomsDTO.roomCategoryId,
    new Date(getAvailableRoomsDTO.checkInDate),
    new Date(getAvailableRoomsDTO.checkOutDate)
  );
  return rooms;
}

export async function updateBookingIdToRoomsService(updateBookingIdToRoomsDTO : UpdateBookingIdToRoomsDTO){
  return await roomRepository.updateBookingIdToRooms(updateBookingIdToRoomsDTO.bookingId, updateBookingIdToRoomsDTO.roomIds);
}