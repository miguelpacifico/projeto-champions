import * as httpResponse from "../utils/http-helpers";
import * as clubRepository from "../repositories/clubs-repository";

export const getClubsService = async () => {
    const data = await clubRepository.findAllClubs();
    let response = null;

    if(data){
        response = await httpResponse.ok(data);
    }else{
        response = await httpResponse.noContent();
    }

    return response;
}