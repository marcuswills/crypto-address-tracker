
const Transaction = ({ addressId}) => {
    const transaction = localStorage.get(addressId);
    return (
      <table>
        <tbody>
          <tr>
            <td className='transaction-wallet'>
              <p>{transaction.wallet}</p>
            </td>
            <td className='transaction-amount'>
              <p>{transaction.amount}</p>
            </td>
            <td className='transaction-date'>
              <p>{transaction.transactionDate}</p>
            </td>
            <td className='transaction-type'>
              <p>{transaction.transactionType}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  export default Transaction;