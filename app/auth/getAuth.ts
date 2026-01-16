import { exchangeAccessCodeForAuthTokens, exchangeNpssoForAccessCode } from "psn-api";
import { NPSSOString } from "./AuthString";

/**
* This is a file which uses an string, that is supposed to be treated like a password. Therefore I import said string from another file which is in '.gitignore.
* It also exports the authorization token and refresh token to actually work with the psn Api
*/

const accessCode = await exchangeNpssoForAccessCode(NPSSOString);

export const authorization = await exchangeAccessCodeForAuthTokens(accessCode);

