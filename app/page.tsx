import { getAccountDevices, getBasicPresence, getProfileFromAccountId } from "psn-api";
import { authorization } from "./auth/getAuth";

const basicUserPresence = await getBasicPresence(authorization, "me");

async function getMyUsername(authorization: any) {
  const deviceResponse = await getAccountDevices(authorization);
    const myActualId = deviceResponse.accountId; 

    // 3. Now that you have the REAL numerical ID, get the profile
    const profile = await getProfileFromAccountId(authorization, myActualId);

    console.log("Your Username is:", profile.onlineId);
    return profile.onlineId;
}

export default function Home() {
  return (
    <div>
      Hallo { getMyUsername(authorization) }, gerade bist du {basicUserPresence.basicPresence.primaryPlatformInfo.onlineStatus}
    </div>
  );
}
