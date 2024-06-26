import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount } from "wagmi";
import Landing from "./landing";
import Login from "./login";

const Home: NextPage = () => {
  const { address } = useAccount();
  if (address) return <Landing />;
  else return <Login />;
};

export default Home;
