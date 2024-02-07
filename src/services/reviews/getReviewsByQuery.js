import { PrismaClient } from "@prisma/client";


const getReviewsByQuery = async (id, userId, propertyId, rating, comment) => {
    const prisma = new PrismaClient();

    return prisma.review.findMany({
        where: {
            id, userId, propertyId, rating: rating, comment
        }
    })
}

export default getReviewsByQuery;