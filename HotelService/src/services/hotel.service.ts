import { createHotelDTO , updateHotelDto } from "../dto/hotel.dto";
//import { createHotel, getAllHotels, getHotelById, softDeleteHotelById , allSoftDeletedHotels,  hardDeleteHotelById, restoreSoftDeletedHotelById , updateHotelById, HotelRepository } from "../repositories/hotel.repository";
import { softDeleteHotelById , allSoftDeletedHotels,  hardDeleteHotelById, restoreSoftDeletedHotelById , updateHotelById, HotelRepository } from "../repositories/hotel.repository";


const hotelRepository = new HotelRepository();

export async function createHotelService(hotelData: createHotelDTO) {
    const hotel = await hotelRepository.create(hotelData);
    return hotel;
}

export async function getHotelByIdService(id: number) {
    const hotel = await hotelRepository.findById(id);
    return hotel;
}

export async function getAllHotelsService() {
    const hotels = await hotelRepository.findAll();
    return hotels;
}

export async function deleteHotelService(id: number) {
    const response = await hotelRepository.softDelete(id);
    return response;
}



// export async function createHotelService(hotelData: createHotelDTO) {
//     const hotel = await createHotel(hotelData);
//     return hotel;
// }


// export async function getHotelByIdService(id: number) {
//     const hotel = await getHotelById(id);
//     return hotel;
// }


// export async function getAllHotelsService() {
//     const hotels = await getAllHotels();
//     return hotels;
// }

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