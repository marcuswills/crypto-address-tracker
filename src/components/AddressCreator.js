import { useState } from "react";

function AddressCreator({ address, onSaveAddress }) {
  const [type, setType] = useState("");
  const [addressId, setAddressId] = useState("");

  const saveAddress = (e) => {
    e.preventDefault();
    onSaveAddress({ type: type, addressId: addressId });

    setType("");
    setAddressId("");
  };
  return (
    <div className="card">
      <h3>Add Address</h3>
      <form>
        <label htmlFor="type">Type</label>
        <input
          type="text"
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <label htmlFor="addressId">Address</label>
        <input
          type="text"
          name="addressId"
          id="addressId"
          value={addressId}
          onChange={(e) => setAddressId(e.target.value)}
        />

        <div className="text-right">
          <button className="button dark" onClick={saveAddress}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddressCreator;