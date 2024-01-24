import { PrismaClient } from "@prisma/client";


const getAmenityByType = async (type) => {

    const prisma = new PrismaClient();

    return prisma.amenity.findMany({
        where: { name: type }
    })
}

export default getAmenityByType;