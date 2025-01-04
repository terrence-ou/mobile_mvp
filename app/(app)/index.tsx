import ViewWrapper from "@/components/ViewWrapper";
import { Redirect } from "expo-router";

export default function Index() {
  return (
    <ViewWrapper>
      <Redirect href="/dictionary" />
    </ViewWrapper>
  );
}
