import { PrismaClient } from "@prisma/client";
import notFoundError from "../../errors/notFoundError.js";

const deleteUser = async (id) => {
    const prisma = new PrismaClient();

    const deletedUser = await prisma.user.deleteMany({
        where: { id }
    })

    if (!deleteUser || deleteUser.count === 0) {
        throw new notFoundError("User", id);
    }

    return `User with id: ${id} is deleted!`;


}

export default deleteUser;