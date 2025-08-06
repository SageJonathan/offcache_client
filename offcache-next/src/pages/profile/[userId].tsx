import { useRouter } from "next/router";
import VisitProfile from "../../components/Dashboard/VisitProfile";

export default function ProfilePage() {
  const router = useRouter();
  const { userId } = router.query;

  return <VisitProfile userId={userId as string} />;
}
