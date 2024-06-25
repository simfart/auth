import Backendless from "backendless";

const APP_ID = "1888D58B-90FC-489F-8002-A10CF38E8293";
const API_KEY = "CF077EE2-514A-479F-B602-84BD78EE8FBB";

Backendless.initApp(APP_ID, API_KEY);

class AppUser extends Backendless.User {
  name: string | undefined;
}

export interface errorType {
  message: string;
  statusCode: string;
}

const user: AppUser = new AppUser();
user.email = "michael@backendless.cuu";
user.password = "my_super_password";
user.name = "Michael";

export const registerUse = Backendless.UserService.register<AppUser>(user)
  .then((result: AppUser) => console.log("Registered User:", result))
  .catch((error) => console.error("Can not Register User:", error.message));

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const user: AppUser = new AppUser();
    user.email = email;
    user.password = password;
    user.name = name;

    const res = await Backendless.UserService.register(user);
    console.log("Registered User:", res);
    //   return res;
  } catch (err) {
    if (err instanceof Error) {
      console.log("error message - " + err.message);
      console.log("error code - " + err.stack);
    } else {
      console.error("Unexpected error", err);
    }
    return null;
  }
};
