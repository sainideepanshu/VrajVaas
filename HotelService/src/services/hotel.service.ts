import { createHotelDTO , updateHotelDto } from "../dto/hotel.dto";
import { createHotel, getAllHotels, getHotelById, softDeleteHotelById , allSoftDeletedHotels,  hardDeleteHotelById, restoreSoftDeletedHotelById , updateHotelById } from "../repositories/hotel.repository";

export async function createHotelService(hotelData: createHotelDTO) {
    const hotel = await createHotel(hotelData);
    return hotel;
}

export async function getHotelByIdService(id: number) {
    const hotel = await getHotelById(id);
    return hotel;
}

export async function getAllHotelsService() {
    const hotels = await getAllHotels();
    return hotels;
}

export async function updateHotelService(id: number, hotelData: updateHotelDto) {
    const updatedHotel = await updateHotelById(id, hotelData);
    return updatedHotel;
}

export async function softDeleteHotelService(id: number) {
    const deletedHotel = await softDeleteHotelById(id);
    return deletedHotel;
}

export async function hardDeleteHotelService(id: number) {
    const deletedHotel = await hardDeleteHotelById(id);
    return deletedHotel;
}

export async function allSoftDeletedHotelService(){
    const deletedHotels = await allSoftDeletedHotels()
    return deletedHotels;
}

export async function restoreSoftDeletedHotelByIdService(id:number){
    const deletedHotels = await restoreSoftDeletedHotelById(id)
    return deletedHotels;
}