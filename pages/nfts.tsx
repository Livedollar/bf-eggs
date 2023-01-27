import { ThirdwebNftMedia, useNFTs }from "@thirdweb-dev/react";
import { useContract,  } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/Nfts.module.css";


function Nfts() {
  const { contract } = useContract("0xcc0DfA67F235a2C473E7aC0236247f660Bbfcdb3");
  const { data: nfts, isLoading, error } = useNFTs(contract);


  console.log(nfts);

  return (
    <div className={styles.container}>
      <Header />
      <section className="={styles.info}"></section>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        nfts?.map((nft) => {

          return (

            <div key={nft.metadata.id}>
              <ThirdwebNftMedia
                metadata={nft.metadata}
                height="200"
                style={{ borderRadius: "10px" }} />
              <p>{nft.metadata.name}</p>


            </div>
          );
        }))}
    </div>);
} 
     
      
          
  

export default Nfts;
