import { PrismaClient } from "@prisma/client";


const getUsersByQuery = (id, username, name, email, phoneNumber, profilePicture) => {
    const prisma = new PrismaClient();

    return prisma.user.findMany({
        where: { id, username, name, email, phoneNumber, profilePicture },
        select: {
            id: true,
            name: true,
            email: true,
            phoneNumber: true,
            profilePicture: true
        }

    })
}

export default getUsersByQuery;