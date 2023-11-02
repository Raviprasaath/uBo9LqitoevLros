import { instance } from "../ApiFetch";

function login(username, password) {
  const suffix = `user/login`;
  return instance.post(suffix, {
    email: username,
    password: password,
    appType: "ott",
  });
}
export { login };
