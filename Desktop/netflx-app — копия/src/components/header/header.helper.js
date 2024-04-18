export function getUser() {
  const user = JSON.parse(localStorage.getItem("NetflixUser"))
  return user
}