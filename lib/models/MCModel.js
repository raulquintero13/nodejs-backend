
// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class MCModel{

    static async getAll(){
        try {
            return await prisma.MissionCommander.findMany({ orderBy: [{ id: 'asc',}] });
        } catch(err){
            return err
        }
    }

    static async getById(id){
        try {
            return await prisma.MissionCommander.findUnique({
                where: { id: parseInt(id) }
            })
        } catch(err){
            return err
        }
    }

    static async create(missionCommander){
        try{
            return await prisma.MissionCommander.create({ data: missionCommander });
        } catch( err ) {
            return err
        }
    }

    static async update(missionCommander){
        try{
            return await prisma.MissionCommander.update({
                where: { id: missionCommander.id },
                data: missionCommander,
            });
        } catch( err ) {
            return err;
        }
    }

    static async delete(id){
        try{
            return await prisma.MissionCommander.delete({ where: { id: parseInt(id) } });
        } catch(err)  {
            return err;
        }
    }

}


module.exports = MCModel;