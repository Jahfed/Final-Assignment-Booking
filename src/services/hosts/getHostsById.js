import { PrismaClient } from "@prisma/client";

const getHostsById = (id) => {
    const prisma = new PrismaClient();


    return prisma.host.findMany({
        where: { id }
    })
}

export default getHostsById;