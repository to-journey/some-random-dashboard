import { initialUsersRawData } from "../constants/dummyData.js"

const INITIAL_USERS = initialUsersRawData.map(user => ({
  ...user,
  dateOfBirth: new Date(user.dateOfBirth),
  newsletterSubscription: user.newsletterSubscription ? "Subscribed" : "Not Subscribed",
}))

export { INITIAL_USERS }
