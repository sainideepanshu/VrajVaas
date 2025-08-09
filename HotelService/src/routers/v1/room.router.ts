import express from 'express';
import { getAvailableRoomsHandler, updateBookingIdToRoomsHandler } from '../../controllers/room.controller';
import { validateQueryParams, validateRequestBody } from '../../validators';
import { getAvailableRoomsSchema, updateBookingIdToRoomsSchema } from '../../validators/room.validator';

const roomRouter = express.Router();

roomRouter.get('/available',validateQueryParams(getAvailableRoomsSchema), getAvailableRoomsHandler);

roomRouter.post('/update-booking-id', validateRequestBody(updateBookingIdToRoomsSchema), updateBookingIdToRoomsHandler);

export default roomRouter;