
import { PrismaClient } from "@prisma/client";

const getUsersById = (id) => {
    const prisma = new PrismaClient();

    const userById = prisma.user.findMany({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            phoneNumber: true,
            profilePicture: true
        }
    })



    return userById;
}

export default getUsersById;