import CryptoAddresses from "./CryptoAddresses";
import AddressCreator from "./AddressCreator"
import { useState } from "react";

function Home() {
    const [addresses, setAddresses] = useState([
      { type: "BitCoin", id: 1, addressId: "90890823asd902f" },
      { type: "Ethereum", id: 2, addressId: "90890823asdsdafdsfds3" },
    ]);
  
    const [showAddressCreator, setShowAddressCreator] = useState(false);
  
    const onSaveAddress = ({ type, addressId }) => {
      setAddresses([
        { type: type, addressId: addressId },
        ...addresses,
      ]);
    };
    return (
        <div className="container">
          <div className="col-12 text-right">
            <button
              className="button outline"
              onClick={() => setShowAddressCreator(!showAddressCreator)}>
              {!showAddressCreator && "New"}
              {showAddressCreator && "➖"}
            </button>
          </div>
          {showAddressCreator && <AddressCreator address={{}} onSaveAddress={onSaveAddress} />}
          <CryptoAddresses addresses={addresses}></CryptoAddresses>
        </div>
    );
  }
  
  export default Home;