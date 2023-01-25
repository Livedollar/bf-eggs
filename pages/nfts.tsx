
import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/Nfts.module.css";

const Nfts: NextPage = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <p>NFTS</p>
        </div>  
  );
};

export default Nfts;
