
import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/MyNfts.module.css";

const MyNfts: NextPage = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <p>MyNfts</p>
        </div>  
  );
};

export default MyNfts;
