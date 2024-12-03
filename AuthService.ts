import { deleteCredentials, saveCredentials } from "./storage";
import { generateToken } from "./jwt";

export const login = async (username: string, password: string) => {
  if (username === "user" && password === "password") {
    const token = await generateToken(username, password);
    await saveCredentials(token as string);
  } else {
    throw new Error("Invalid credentials");
  }
};

export const logout = async () => {
  await deleteCredentials();
};
