import { Request, Response } from "express";
import * as service from "../services/clubs-service";

export const getClubs = async (req:Request, res:Response) => {
    const httResponse = await service.getClubsService();
    res.status(httResponse.statusCode).json(httResponse.body);
};