import "./Transaction.css";
import React from "react";
import TransactionDownArrow from "../../icons/TransactionDownArrow/TransactionDownArrow";
import TransactionUpArrow from "../../icons/TransactionUpArrow/TransactionUpArrow";
import TransactionPencil from "../../icons/TransactionPencil/TransactionPencil";
import TransactionDelete from "../../icons/TransactionDelete/TransactionDelete";

export function FinalData({ transaction, pageData, redColor, greenColor }) {
  let indexOfTransaction;
  indexOfTransaction = pageData.indexOf(transaction);
  let arrowAndPrice = {};
  if (transaction.type === "credit") {
    arrowAndPrice.arrow = (
      <span>
        <TransactionUpArrow color={greenColor} />
      </span>
    );
    arrowAndPrice.Amount = (
      <span style={{ color: "#16DBAA" }}>{"+" + transaction.amount}</span>
    );
  } else {
    arrowAndPrice.arrow = (
      <span>
        <TransactionDownArrow color={redColor} />
      </span>
    );
    arrowAndPrice.Amount = (
      <span style={{ color: "#FE5C73" }}>{"-" + transaction.amount}</span>
    );
  }
  return (
    <div>
      <div className="transaction">
        <div className="iconAndTransactionName transactionName">
          <span>{arrowAndPrice.arrow}</span>
          <span className="dataStyles transactionNamePaddingLeft">
            {transaction.transaction_name}
          </span>
        </div>

        <span className="_category dataStyles">{transaction.category}</span>
        <span className="_Date dataStyles">{transaction.date}</span>
        <span className="_amount dataStyles">{arrowAndPrice.Amount}</span>
        <div className="editOption dataStyles">
          <TransactionPencil />
        </div>
        <TransactionDelete className="deleteIcon" />
      </div>
      {indexOfTransaction !== pageData.length - 1 ? (
        <hr className="horizontalLine"></hr>
      ) : (
        ""
      )}
    </div>
  );
}
