// Import necessary modules
import { PrismaClient, Role, Title, Gender } from '@prisma/client'

// Instantiate the Prisma Client
const prisma = new PrismaClient()

// Function to populate the User table
async function populateUsers() {
  try {
    // Array of user data to be inserted into the User table
    const usersData = [
      {
        userId: 'user1',
        firstName: 'John',
        lastName: 'Doe',
        title: Title.Mr,
        gender: Gender.Male,
        email: 'john.doe@example.com',
        password: 'your_password_hash_here', // Make sure to hash the password before inserting it.
        role: Role.Tutor,
        image: 'path/to/user1/image.jpg',
      },
      // Add more users here as needed
    ]

    // Insert users into the User table
    await prisma.user.createMany({ data: usersData })

    console.log('Users successfully populated.')
  } catch (error) {
    console.error('Error populating users:', error)
  } finally {
    // Disconnect the Prisma Client
    await prisma.$disconnect()
  }
}

export default populateUsers
