const month =
  new Date().getMonth() + 1 < 10
    ? `0${new Date().getMonth() + 1}`
    : new Date().getMonth() + 1;
const year = new Date().getFullYear();

export function passForUser() {
  const pass = `User@${month}${year}`;
  return pass;
}
