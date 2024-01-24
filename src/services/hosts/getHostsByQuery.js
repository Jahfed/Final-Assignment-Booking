import { PrismaClient } from "@prisma/client";

const getHostsByQuery = (name, email, phoneNumberGiven, profilePicture, aboutMe) => {
    const prisma = new PrismaClient();

    return prisma.host.findMany({
        where: { name, email, phoneNumberGiven, profilePicture, aboutMe },
        select: {
            id: true,
            name: true,
            email: true,
            phoneNumber: true,
            profilePicture: true,
            aboutMe: true,
        }
    })
}

export default getHostsByQuery;