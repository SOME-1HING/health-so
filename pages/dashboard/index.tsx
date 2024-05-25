import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useAccount } from "wagmi";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { address } = useAccount();
  React.useEffect(() => {
    if (!address) router.push("/login");
  }, []);
  return (
    <div>
      <ConnectButton />
    </div>
  );
};

export default Dashboard;
