import Transaction from './Transaction'

function CryptoAddressViewer({ address }) {
    return (
        <div className="card text-left" key={address.id}>
        <div className="row">
            <div className="col-10">
                <h4>{address.type}</h4>
            </div>
            <div className="col-12">
                <p>{address.addressId}</p>
            </div>
            <div className="transaction-container">
                {this.props.transactionData.map((data, key) => {
                    return (
                    <div key={key}>
                        <Transaction
                            key={key}
                            wallet={data.wallet}
                            amount={data.amount}
                            transactionDate={data.transactionDate}
                            transactionType={data.transactionType}
                        />
                    </div>
                    );
                })}
            </div>
        </div>
        </div>
    );
  }
  
  export default CryptoAddressViewer;