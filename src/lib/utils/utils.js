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

const formatDate = dateString => {
  if (!dateString) {
    return "" // Return empty string if the date is invalid or empty
  }

  const date = new Date(dateString)
  if (date instanceof Date && !isNaN(date)) {
    const year = date.getUTCFullYear()
    const month = String(date.getUTCMonth() + 1).padStart(2, "0") // Months are 0-indexed
    const day = String(date.getUTCDate()).padStart(2, "0")
    const hours = String(date.getUTCHours()).padStart(2, "0")
    const minutes = String(date.getUTCMinutes()).padStart(2, "0")

    return `${year}-${month}-${day} ${hours}:${minutes}` // Desired format
  }

  return "" // Fallback to empty string if the date is invalid
}

export { formattedUsersData, formatContactMethodOptions, formatDate }
