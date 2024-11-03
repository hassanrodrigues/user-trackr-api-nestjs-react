const year = new Date().getFullYear();

export function passForUser() {
  const pass = `User@${year}`;
  return pass;
}
