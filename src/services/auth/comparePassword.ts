import bcrypt from "bcryptjs";

export async function comparePassword(
  password: string,
  passwordHash: string,
): Promise<boolean> {
  return await bcrypt.compare(password, passwordHash);
}
