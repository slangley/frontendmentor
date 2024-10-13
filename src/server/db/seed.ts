/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { db } from '.';
import { promises as fs } from 'fs';
import { posts } from './schema';

import seedData from './seed.json';

export async function seedDatabase() {
  try {

    await db.insert(posts).values(seedData.articles);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database:', err);
  }
}

const main = async () => {
    await seedDatabase();
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally( () => {
        console.log("Seeding done!");
        process.exit(0);
    });