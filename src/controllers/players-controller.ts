import { Request, Response } from "express";
import * as service from "../services/players-services";
import { noContent } from "../utils/http-helpers";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async (req:Request, res:Response) => {
    const httResponse = await service.getPlayerService();
    res.status(httResponse.statusCode).json(httResponse.body);
};

export const getPlayerById = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const httResponse = await service.getPlayerByIdService(id);
    res.status(httResponse.statusCode).json(httResponse.body);
};

export const postPlayer = async (req:Request, res:Response) => {
    const bodyValue = req.body;
    const httResponse = await service.createPlayerService(bodyValue);

    if(httResponse) {
        res.status(httResponse.statusCode).json(httResponse.body);
    }else{
        const response = await noContent();
        res.status(response.statusCode).json(response.body);
    }
};

export const deletePlayer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const httResponse = await service.deletePlayerService(id);
    res.status(httResponse.statusCode).json(httResponse.body);
}

export const updatePlayer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: StatisticsModel = req.body;
    const httResponse = await service.updatePlayerService(id, bodyValue);
    res.status(httResponse.statusCode).json(httResponse.body);
}
