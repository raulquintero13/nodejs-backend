const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
            where: { name: "Woopa" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mission: "Node"
            },
        });

        const woopa1 = await prisma.explorer.upsert({
            where: { name: "Woopa1" },
            update: {},
            create: {
                name: "Woopa1",
                username: "ajolonauta1",
                mission: "Node"
            },
        });

        const woopa2 = await prisma.explorer.upsert({
            where: { name: "Woopa 2" },
            update: {},
            create: {
                name: "Woopa 2",
                username: "ajolonauta2",
                mission: "Java"
            },
        });

        const woopa3 = await prisma.explorer.upsert({
            where: { name: "Woopa 3" },
            update: {},
            create: {
                name: "Woopa 3",
                username: "ajolonauta3",
                mission: "Node"
            },
        });

        const woopa4 = await prisma.explorer.upsert({
            where: { name: "Woopa 4" },
            update: {},
            create: {
                name: "Woopa 4",
                username: "ajolonauta4",
                mission: "Node"
            },
        });

        const woopa5 = await prisma.explorer.upsert({
            where: { name: "Woopa 5" },
            update: {},
            create: {
                name: "Woopa 5",
                username: "ajolonauta5",
                mission: "Node"
            },
        });

        console.log("Create 5 explorers");
    } catch(e) {
        console.error(e);
        process.exit(1);
    } 
  
    // inserting elements for MissionCommander FinalProject
    try {
        const mc = await prisma.MissionCommander.upsert({
            where: { name: "Carlo Gilmar" },
            update: {},
            create: {
                name: "Carlo Gilmar",
                username: "carlogilmar",
                mainStack: "Java",
                currentEnrollment: true,
                hasAzureCertification: true
            },
        });

        const mc1 = await prisma.MissionCommander.upsert({
            where: { name: "Juan Perez" },
            update: {},
            create: {
                name: "Carlo Juan Perez",
                username: "juanperez",
                mainStack: "Node",
                currentEnrollment: true,
                hasAzureCertification: false
            },
        });

   
        console.log("Create 2 MC Project");
    } catch(e) {
        console.error(e);
        process.exit(1);
    } 
  

    finally {
        await prisma.$disconnect();
    }
})();