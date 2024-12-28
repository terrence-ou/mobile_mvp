import ViewWrapper from "@/components/ViewWrapper";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ViewWrapper>
      <Link href="/dictionary">Go to dictionary</Link>
    </ViewWrapper>
  );
}
