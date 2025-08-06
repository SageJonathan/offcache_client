import VisitProfile from "../../../components/Dashboard/VisitProfile";

interface ProfilePageProps {
  params: {
    userId: string;
  };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  return <VisitProfile userId={params.userId} />;
}
