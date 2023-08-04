import React, { useEffect, useState } from "react";
import { Data } from "../TransactionPageData/TransactionPageData";
import "./DashBoardPageLastTransaction.css";
import { lastThreeTransactions } from "../../utils/utils";
export function LastTransaction() {
  let limit = 3;
  let offSetValue = 0;
  let [lastTransactions, setLastTransactions] = useState(null);
  let [isError, setIsError] = useState(false);

  useEffect(() => {
    lastThreeTransactions({
      setLastTransactions,
      limit,
      offSetValue,
      setIsError,
    });
  }, []);

  function setError() {
    setIsError(false);
    lastThreeTransactions({
      setLastTransactions,
      limit,
      offSetValue,
      setIsError,
    });
  }

  return (
    <div className="lastTransaction">
      <h1 className="lastTransactionHeading">Last Transaction</h1>
      <div className="lastTransactionData">
        {!isError ? (
          <Data
            pageData={lastTransactions}
            redColor="#FE5C73"
            greenColor="#16DBAA"
          />
        ) : (
          <div>
            <h1>Something went wrong</h1>
            <button onClick={setError}>Try Again</button>
          </div>
        )}
      </div>
    </div>
  );
}
