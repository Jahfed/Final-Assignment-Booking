import { PrismaClient } from "@prisma/client";

const getReviewsById = (id) => {
    const prisma = new PrismaClient();

    return prisma.review.findMany({
        where: { id }
    })
}

export default getReviewsById;