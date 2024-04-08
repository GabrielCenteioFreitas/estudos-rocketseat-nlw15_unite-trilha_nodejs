import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: { 
      id: '42c78552-72e1-4662-b0df-ab08f4ce99be',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento p/ devs apaixonados(as) por código!',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})