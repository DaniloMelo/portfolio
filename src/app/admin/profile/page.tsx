import UpdateProfileForm from "@/components/UpdateProfileForm";
import { getMe } from "@/services/me/getMe";

export default async function ProfilePage() {
  const data = await getMe();

  return <UpdateProfileForm meData={data} />;
}
