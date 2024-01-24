import { PrismaClient } from "@prisma/client";


const getReviewsByQuery = (userId, propertyId, rating, comment) => {
    const prisma = new PrismaClient();

    return prisma.review.findMany({
        where: {
            userId, propertyId, rating: rating, comment
        }
    })
}

export default getReviewsByQuery;