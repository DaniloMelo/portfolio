import UpdateProfileForm from "@/components/UpdateProfileForm";
import { getProfile } from "@/services/me/getProfile";

export default async function ProfilePage() {
  const data = await getProfile();

  return <UpdateProfileForm meData={data} />;
}
