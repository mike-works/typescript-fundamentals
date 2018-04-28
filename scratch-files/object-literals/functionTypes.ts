type IsValid = (user: string, password: string) => boolean;

const isValidCredentials: IsValid = (user, password) => {
  if (user && password) {
    return true;
  }
  return false;
}
