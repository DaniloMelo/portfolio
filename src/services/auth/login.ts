import { findCredentials } from "@/repository/credentials/credentialRepository";
import { LoginInput, LoginResult } from "@/types/auth";
import { comparePassword } from "./comparePassword";
import { AuthenticationError } from "@/errors/auth/AuthenticationError";
import { InvalidCredentialsError } from "@/errors/auth/InvalidCredentialsError";
import { signJwt } from "@/libs/auth/jwt";

export async function login({
  email,
  password,
}: LoginInput): Promise<LoginResult> {
  const credentials = await findCredentials();

  if (!credentials) {
    throw new AuthenticationError();
  }

  if (email !== credentials.email) {
    throw new InvalidCredentialsError();
  }

  const passwordMatches = await comparePassword(
    password,
    credentials.passwordHash,
  );

  if (!passwordMatches) {
    throw new InvalidCredentialsError();
  }

  const token = await signJwt(credentials.id);

  return {
    accessToken: token,
  };
}
