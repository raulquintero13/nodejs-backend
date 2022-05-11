const ExplorerModel = require("../models/ExplorerModel");
const FormatService = require("../services/FormatService")

class ExplorerController{
    static getList(){
        return ExplorerModel.getAll().then(
            result => {
                return FormatService.toApiResponse(result);
            })
    }

    static getById(id){
        return ExplorerModel.getById(id).then(
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
        return ExplorerModel.create(missionCommander).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        )
    }

    static update(id,data){
        const explorer = {
            id: parseInt(id),
            name: data.name,
            username: data.username,
            azureCertification: data.azureCertification,
        };
        return ExplorerModel.update(explorer).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        )
    }

    static delete(id){
        return ExplorerModel.delete(id).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        )
    }

}

module.exports = ExplorerController;

