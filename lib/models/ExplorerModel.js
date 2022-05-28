
// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ExplorerModel{

    static async getAll(){
        try {
            return await prisma.explorer.findMany({
                orderBy: [{ id: 'asc',}]
            });
        } catch(err){
            console.log(err);
            return err
        }
    }

    static async getById(id){
        try {
            return await prisma.explorer.findUnique({
                where: { id: parseInt(id) }
            })
        } catch(err){
            return err
        }
    }

    static async create(missionCommander){
        try{
            return await prisma.explorer.create({ data: missionCommander });
        } catch( err ) {
            return err
        }
    }

    static async update(explorer){
        try{
            return await prisma.explorer.update({
                where: { id: explorer.id },
                data: explorer,
            });
        } catch( err ) {
            console.log(err)
            return err;
        }
    }

    static async delete(id){
        try{
            return await prisma.explorer.delete({ where: { id: parseInt(id) } });
        } catch(err)  {
            return err;
        }
    }

}


module.exports = ExplorerModel;