const MCModel = require("../models/MCModel");
const FormatService = require("../services/FormatService")

class MCController{

    static getList(){
        return MCModel.getAll().then(
            result => {
                return FormatService.toApiResponse(result);
            })
    }

    static getById(id){
        return MCModel.getById(id).then(
            result => {
                return FormatService.toApiResponse(result)
            })
    }

    static create(data){
        const missionCommander = {
            name: data.name,
            username: data.username,
            mainStack: data.mainStack,
            currentEnrollment: data.currentEnrollment,
            hasAzureCertification: data.hasAzureCertification,
        };
        return MCModel.create(missionCommander).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        )
    }

    static update(id,data){
        const missionCommander = {
            id: parseInt(id),
            name: data.name,
            username: data.username,
            mainStack: data.mainStack,
            currentEnrollment: data.currentEnrollment,
            hasAzureCertification: data.hasAzureCertification,
        };
        return MCModel.update(missionCommander).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        )
        
    }

    static delete(id){
        return MCModel.delete(id).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        )
    }

}

module.exports = MCController;