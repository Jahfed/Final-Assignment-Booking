
import { PrismaClient } from "@prisma/client";

const getUsersById = (id) => {
    const prisma = new PrismaClient();

    return prisma.user.findMany({
        where: { id }
    })
}

export default getUsersById;