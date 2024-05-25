import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();
  const { address } = useAccount();
  if (address) router.push("/landing");
  return <ConnectButton />;
};

export default Login;
