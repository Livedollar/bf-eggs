
import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/WriteNote.module.css";

const WriteNote: NextPage = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <p>WriteNote</p>
        </div>  
  );
};

export default WriteNote;
