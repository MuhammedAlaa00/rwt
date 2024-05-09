"use client";
import AddAdvertise from "@/pages/AddAdvertise";
import AdvertiseProvider from "@/providers/AdvertiseProvider";
import withAuthentication from "@/providers/withAuthentication";
const Home = () => {
  return (
    <AdvertiseProvider>
      <AddAdvertise />
    </AdvertiseProvider>
  );
};
export default withAuthentication(Home);
