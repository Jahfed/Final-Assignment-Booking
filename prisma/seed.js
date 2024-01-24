import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";

import amenityData from "../src/data/amenities.json" assert {type: "json"};
import bookingData from "../src/data/bookings.json" assert {type: "json"};
import hostData from "../src/data/hosts.json" assert {type: "json"};
import propertyData from "../src/data/properties.json" assert {type: "json"};
import reviewData from "../src/data/reviews.json" assert {type: "json"};
import userData from "../src/data/users.json" assert {type: "json"};

const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });

async function main() {
    const { amenities } = amenityData;
    const { bookings } = bookingData;
    const { hosts } = hostData;
    const { properties } = propertyData;
    const { reviews } = reviewData;
    const { users } = userData;

    for (const booking of bookings) {
        await prisma.booking.upsert({
            where: { id: booking.id },
            update: {},
            create: booking
        })
    }

    for (const host of hosts) {
        const unhashed = host.password;
        const hashed = await bcrypt.hash(unhashed, 10).then(async function (hashed) { return hashed; });

        await prisma.host.upsert({
            where: { id: host.id },
            update: { password: hashed },
            create: { ...host }
        })
    }

    for (const review of reviews) {
        await prisma.review.upsert({
            where: { id: review.id },
            update: {},
            create: review
        })
    }

    for (const user of users) {
        const unhashed = user.password;
        const hashed = await bcrypt.hash(unhashed, 10).then(async function (hashed) { return hashed; });

        await prisma.user.upsert({
            where: { id: user.id },
            update: { password: hashed },
            create: { ...user }
        });
    }

    for (const amenity of amenities) {
        await prisma.amenity.upsert({
            where: { id: amenity.id },
            update: {},
            create: amenity
        })
    }

    for (const property of properties) {
        await prisma.property.upsert({
            where: { id: property.id },
            update: {},
            create: {
                ...property,
                amenities: {
                    connect: amenities.map(amenity => ({ id: amenity.id }))
                }
            }
        })
    }
}



main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })