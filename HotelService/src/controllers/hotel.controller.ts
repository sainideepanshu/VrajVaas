import { Request, Response, NextFunction } from "express";
import { createHotelService, getAllHotelsService, getHotelByIdService , softDeleteHotelService , hardDeleteHotelService, restoreSoftDeletedHotelByIdService , updateHotelService , allSoftDeletedHotelService } from "../services/hotel.service";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler(req: Request, res: Response, next: NextFunction) {
    // 1. Call the service layer

    const hotelResponse = await createHotelService(req.body);

    // 2. Send the response

    res.status(StatusCodes.CREATED).json({
        message: "Hotel created successfully",
        data: hotelResponse,
        success: true,
    })
}

export async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction) {
    // 1. Call the service layer

    const hotelResponse = await getHotelByIdService(Number(req.params.id));

    // 2. Send the response

    res.status(StatusCodes.OK).json({
        message: "Hotel found successfully",
        data: hotelResponse,
        success: true,
    })
}

export async function getAllHotelsHandler(req: Request, res: Response, next: NextFunction) {

    // 1. Call the service layer

    const hotelsResponse = await getAllHotelsService();

    // 2. Send the response
    res.status(StatusCodes.OK).json({
        message: "Hotels found successfully",
        data: hotelsResponse,
        success: true,
    });

}

export async function updateHotelHandler(req: Request, res: Response, next: NextFunction) {
        // Call the service layer to update a hotel
        const updateHotelResponse = await updateHotelService(Number(req.params.id), req.body); 
        // Send a success response with the updated hotel data
        res.status(StatusCodes.OK).json({  
            success: true,
            message: "Hotel updated successfully",
            data: updateHotelResponse,
        });
}

export async function softDeleteHotelHandler(req: Request, res: Response, next: NextFunction) {
        // Call the service layer to soft delete a hotel
        const softDeleteHotelResponse = await softDeleteHotelService(Number(req.params.id)); 
        // Send a success response indicating the hotel was soft deleted
        res.status(StatusCodes.OK).json({  
            success: true,
            message: "Hotel soft deleted successfully",
            data: softDeleteHotelResponse,
        });

}

export async function hardDeleteHotelHandler(req: Request, res: Response, next: NextFunction) {
        // Call the service layer to hard delete a hotel
        const hardDeleteHotelResponse = await hardDeleteHotelService(Number(req.params.id)); 
        // Send a success response indicating the hotel was hard deleted
        res.status(StatusCodes.OK).json({  
            success: true,
            message: "Hotel hard deleted successfully",
            data: hardDeleteHotelResponse,  
        });
} 

export async function allSoftDeleteHotelHandler(req: Request, res: Response, next: NextFunction) {
        const softDeletedHotelResponse = await allSoftDeletedHotelService(); 
        // Send a success response indicating the hotel was hard deleted
        res.status(StatusCodes.OK).json({  
            success: true,
            message: "soft deleted hotels fetched successfully",
            data: softDeletedHotelResponse,  
        });
} 

export async function restoreSoftDeletedHotelByIdHandler(req: Request, res: Response, next: NextFunction) {
        const restoreSoftDeletedHotelResponse = await restoreSoftDeletedHotelByIdService(Number(req.params.id)); 
        // Send a success response indicating the hotel was hard deleted
        res.status(StatusCodes.OK).json({  
            success: true,
            message: "restored soft deleted hotels successfully",
            data: restoreSoftDeletedHotelResponse,  
        });
}