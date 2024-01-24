import { PrismaClient } from "@prisma/client";


const getPropertiesByQuery = (title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestCount, hostId, rating) => {
    const prisma = new PrismaClient();

    return prisma.property.findMany({
        where: { title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestCount, hostId, rating }
    })
}

export default getPropertiesByQuery;