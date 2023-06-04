import { z } from 'zod';
import jwt_decode from 'jwt-decode';

const googleOIDCBaseSchema = z.object({
  // Issuer Identifier for the Issuer of the response.
  iss: z.string(),
  // Subject Identifier
  sub: z.string(),
  // Audience(s) that this ID Token is intended for
  aud: z.string(),
  // Authorized Party
  azp: z.string(),
  // Issued At
  iat: z.number(),
  // Expiration Time
  exp: z.number(),
});

const googleOIDCScopeProfileSchema = googleOIDCBaseSchema.extend({
  email: z.string().email(),
  email_verified: z.boolean(),
  name: z.string(),
  picture: z.string().url(),
  given_name: z.string(),
  family_name: z.string(),
  locale: z.string(),
});
export type GoogleOIDCProfile = z.infer<typeof googleOIDCScopeProfileSchema>;

export const decodeGoogleOIDCProfile = (idToken: string): GoogleOIDCProfile => {
  return googleOIDCScopeProfileSchema.parse(jwt_decode(idToken));
};
