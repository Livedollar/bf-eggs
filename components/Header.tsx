import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";

const Header: React.FC = () => {
  return(
   <div>
    <div>
    <Link href={"/"}>
    Claim</a>
      </Link>
      <Link href={"/nfts"}>
      NFTS </a>
      </Link>
      <Link href={"/my-nfts"}>
      My NFTS</a>
      </Link>
      <Link href={"/write-note"}>
     Write Note </a>
      </Link>
    </div>
    <ConnectWallet  colorMode="light"accentColor="#5500f4" />
   </div>
   );
};


export default Header;