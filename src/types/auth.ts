export interface CredentialData {
  id: string;
  email: string;
  passwordHash: string;
}

export interface JwtPayload {
  sub: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginResult {
  accessToken: string;
}
