import { PrismaClient } from "@prisma/client";


const getPropertiesByQuery = async (id, title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestCount, hostId, rating) => {
    const prisma = new PrismaClient();

    return prisma.property.findMany({
        where: { id, title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestCount, hostId, rating }
    })
}

export default getPropertiesByQuery;