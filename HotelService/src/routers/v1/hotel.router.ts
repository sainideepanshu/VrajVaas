import express from 'express';
import { createHotelHandler, getAllHotelsHandler, getHotelByIdHandler , softDeleteHotelHandler , allSoftDeleteHotelHandler , hardDeleteHotelHandler, restoreSoftDeletedHotelByIdHandler , updateHotelHandler } from '../../controllers/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator';

const hotelRouter = express.Router();

hotelRouter.post(
    '/', 
    validateRequestBody(hotelSchema),
    createHotelHandler); 

hotelRouter.get('/:id', getHotelByIdHandler); 

hotelRouter.get('/', getAllHotelsHandler);

hotelRouter.delete('/softDeleteById/:id',softDeleteHotelHandler);

hotelRouter.put('/updateById/:id', updateHotelHandler);

hotelRouter.get('/allSoftDeletedHotels', allSoftDeleteHotelHandler);

hotelRouter.delete('/hardDeleteById/:id', hardDeleteHotelHandler);

hotelRouter.put('/restoreSoftDeletedHotelById/:id', restoreSoftDeletedHotelByIdHandler);

export default hotelRouter; 