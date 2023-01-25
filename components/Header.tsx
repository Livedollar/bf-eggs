import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";

const Header: React.FC = () => {
  return(
   <div>
    <div>
    <Link href={"/"}>
   <a>Claim</a>
      </Link>
      <Link href={"/nfts"}>
     <a> NFTS </a>
      </Link>
      <Link href={"/my-nfts"}>
      <a>My NFTS</a>
      </Link>
      <Link href={"/write-note"}>
    <a> Write Note </a>
      </Link>
    </div>
    <ConnectWallet  colorMode="light"accentColor="#5500f4" />
   </div>
   );
};


export default Header;