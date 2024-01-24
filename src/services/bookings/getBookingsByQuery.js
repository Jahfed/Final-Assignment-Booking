import { PrismaClient } from "@prisma/client";

const getBookingsByQuery = (propertyId, checkinDate, checkoutDate, numberOfGuests, totalPrice, bookingStatus) => {
    const prisma = new PrismaClient();

    return prisma.booking.findMany({
        where: { propertyId, checkinDate, checkoutDate, numberOfGuests, totalPrice, bookingStatus }
    })
}

export default getBookingsByQuery;