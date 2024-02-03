export function generateRandomId() {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 1000); // Adjust the range as needed
  return `${timestamp}_${randomNum}`;
}
