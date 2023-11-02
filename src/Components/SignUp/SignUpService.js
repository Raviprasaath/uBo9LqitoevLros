import { instance } from "../ApiFetch";

function signup(signupRequest) {
  const suffix = `user/signup`;
  return instance.post(suffix, signupRequest);
}
export { signup };
