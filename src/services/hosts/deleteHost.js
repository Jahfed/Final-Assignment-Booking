import { PrismaClient } from "@prisma/client";
import notFoundError from "../../errors/notFoundError.js";

const deleteHost = async (id) => {
    const prisma = new PrismaClient();




    const deletedHost = await prisma.host.deleteMany({
        where: { id }
    })

    if (!deleteHost || deleteHost.count === 0) {
        throw new notFoundError("Host", id);
    }

    return `Host with id: ${id} is deleted!`;


}

export default deleteHost;