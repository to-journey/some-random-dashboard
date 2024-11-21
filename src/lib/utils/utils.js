import { initialUsersRawData } from "../constants/dummyData.js"

const formattedUsersData = initialUsersRawData.map(user => ({
  ...user,
  dateOfBirth: new Date(user.dateOfBirth),
  newsletterSubscription: user.newsletterSubscription ? "Subscribed" : "Not Subscribed",
}))

export { formattedUsersData }