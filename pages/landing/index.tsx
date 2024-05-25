import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px, 20px, 20px, 20px;
  background: #1d2733;
  padding-bottom: 60px;
`;

const Card = styled.div`
  width: 320px;
  height: 158px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #4e73fa;
  box-shadow: 0px 2px 5.5px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: #4e73fa;
  box-shadow: 0px 2px 5.5px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  gap: 0px;
`;
const Title = styled.h1`
  color: #fff;

  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: 0;
`;
const Icon = styled.img`
  width: 91px;
  height: 91px;
  flex-shrink: 0;
  mix-blend-mode: color-burn;
`;

const Landing: NextPage = () => {
  return (
    <Wrapper>
      <Link href={"/dashboard"}>
        <Card style={{ backgroundColor: "#4E73FA" }}>
          <TitleWrapper>
            <Title className={inter.className}>AI</Title>
            <Title className={inter.className}>Trainer</Title>
          </TitleWrapper>
          <Icon src="./l1.png" />
        </Card>
      </Link>
      <Card style={{ backgroundColor: "#10729D" }}>
        <TitleWrapper>
          <Title className={inter.className}>Cal-Mac</Title>
          <Title className={inter.className}>Tracker</Title>
        </TitleWrapper>
        <Icon src="./l2.png" />
      </Card>

      <Card style={{ backgroundColor: "#0091CF" }}>
        <TitleWrapper>
          <Title className={inter.className}>User</Title>
          <Title className={inter.className}>Profile</Title>
        </TitleWrapper>
        <Icon src="./l3.png" />
      </Card>
    </Wrapper>
  );
};

export default Landing;
