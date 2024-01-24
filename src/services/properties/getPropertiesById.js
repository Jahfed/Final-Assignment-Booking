import { PrismaClient } from "@prisma/client";

const getPropertiesById = (id) => {
    const prisma = new PrismaClient();


    return prisma.property.findMany({
        where: { id }
    })
}

export default getPropertiesById;