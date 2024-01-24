
import { PrismaClient } from "@prisma/client";

const getUsersById = (id) => {
    const prisma = new PrismaClient();

    return prisma.user.findMany({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            phoneNumber: true,
            profilePicture: true
        }
    })
}

export default getUsersById;