import { useHistory } from "react-router-dom";

function CryptoAddress({ address }) {
    const history = useHistory();
    const goToAddressDetails = (address) => {
        localStorage.setItem(address.addressId, address);
        history.push('/address-details/'+ address.addressId);
    };

    return (
        <div className="card text-left" key={address.id}>
        <div className="row">
            <div className="col-10">
                <h4>{address.type}</h4>
            </div>
            <div className="col-12">
                <p>{address.addressId}</p>
            </div>
        </div>
        </div>
    );
  }
  
  export default CryptoAddress;