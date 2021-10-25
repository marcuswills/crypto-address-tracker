import CryptoAddress from "./CryptoAddress";
import { withRouter } from "react-router";

function CryptoAddresses({addresses}) {

    return (
        <div className="row">
            {addresses.map((address) => (
                <CryptoAddress address={address} key={address.id}/>
            ))}
      </div>
    );
  }
  
  export default withRouter(CryptoAddresses);