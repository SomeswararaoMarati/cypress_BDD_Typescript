export function generateRandomNumber(length: number): string | number {
  if (length <= 0) {
    throw new Error('Length must be a positive integer')
  }

  let result = ''
  const characters = '123456789' // Excludes 0

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result += characters[randomIndex]
  }

  return result // Return as string if not parsable as integer
}

export const setGlobal = (key: string, value: string): void => {
  Cypress.env(key, value)
}

export const getGlobal = (key: string): string => {
  return Cypress.env(key)
}

export function generateDateAfter(days: number): string {
  const date = new Date()
  date.setDate(date.getDate() + days)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const finalDate = year + '-' + month + '-' + day
  return finalDate
}
 

export function generateRandomString(length: number): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let randomString = ''
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return randomString
}
 
