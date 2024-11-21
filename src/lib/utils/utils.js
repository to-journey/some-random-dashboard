import { initialUsersRawData } from "../constants/dummyData.js"

const formatContactMethodOptions = contactMethods => {
  return contactMethods
  .filter(([, isChecked]) => isChecked)
  .map(([method]) => {
    const words = method.split(" ")
    const formattedWords = words.map(word => {
      if (word.toUpperCase() === "SMS") {
        return "SMS"
      }
      const firstLetter = word.charAt(0).toUpperCase()
      const remainingLetters = word.slice(1).toLowerCase()
      return firstLetter + remainingLetters
    })
    return formattedWords.join(" ")
  })
  .join(", ")
}

const formattedUsersData = initialUsersRawData.map(user => ({
  ...user,
  dateOfBirth: new Date(user.dateOfBirth),
  newsletterSubscription: user.newsletterSubscription
    ? "Subscribed"
    : "Not Subscribed",
  contactMethod: user.contactMethod.join(", "),
}))

export { formattedUsersData, formatContactMethodOptions }
