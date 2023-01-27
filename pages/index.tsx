import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.info}>
        <h1>My Egg Project</h1>
        <p>Welcome to the test burn function. This is also the first (and only) artwork and design of these Egg characters I ever made.
        </p>
        <br />
        <Web3Button contractAddress="0xcc0DfA67F235a2C473E7aC0236247f660Bbfcdb3" action={(contract) => {contract.erc721.claim(1);}}
          
         colorMode="light" accentColor="#9700f5" 
        >
        <center>Claim an egg</center>
            </Web3Button>
        </section>
        <p>Home</p>
        </div>  
  );
};

export default Home;
