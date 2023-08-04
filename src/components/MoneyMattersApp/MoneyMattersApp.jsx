import "./MoneyMattersApp.css";
import { SideBar } from "../Sidebar/Sidebar";
import HomeIcon from "../../icons/HomeIcon/HomeIcon";
import TransactionsIcon from "../../icons/TransactionIcon/Transaction";
import ProfileIcon from "../../icons/ProfileIcon/profileIcon";
import Logo from "../../icons/Logo/Logo";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { TransactionBoardDataPage } from "../TransactionBoardDataPage/TransactionBoardDataPage";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import React from "react";
import { allTransactionsDataAPI } from "../../utils/utils";
import { DashBoardPage } from "../DashBoardPage/DashBoardPage";
import LogOutIcon from "../../icons/LogOutIcon/logoutIcon";
import { setAllTransactionsError } from "../../App";

export const ActivePageContext = createContext(null);
export const CurrentActiveBoardID = createContext(null);
export const Error = createContext(null);

export function MoneyMattersApp() {
  let activeBoardRef = useRef(null);
  const [currentActiveBoardID, setCurrentActiveBoardID] = useState("DashBoard");
  activeBoardRef.current = currentActiveBoardID;

  const [allTransactionsData, setAllTransactionsData] = useState(null);
  const [creditData, setCreditData] = useState(null);
  const [debitData, setDebitData] = useState(null);
  const [lastTransactions, setLastTransactions] = useState(null);
  let setTransactionsError = useContext(setAllTransactionsError);

  const sideBarBoards = [
    {
      id: "DashBoard",
      boardName: "Dashboard",
      icon: HomeIcon,
      isSelected: false,
    },
    {
      id: "TransactionsBoard",
      boardName: "Transactions",
      icon: TransactionsIcon,
      isSelected: true,
    },
    {
      id: "ProfileBoard",
      boardName: "Profile",
      icon: ProfileIcon,
      isSelected: false,
    },
  ];
  const Logo_MoneyMatters = {
    logo: <Logo />,
    money: "Money",
    matters: "Matters",
  };
  const PROFILE = {
    profilePic: <ProfileIcon />,
    profileName: "Hari Kuruva",
    profileMail: "harikuruva2003@gmail.com",
    logOutIcon: <LogOutIcon />,
  };

  useEffect(() => {
    allTransactionsDataAPI({
      setAllTransactionsData,
      setDebitData,
      setCreditData,
      setLastTransactions,
      setTransactionsError,
    });
  }, []);

  function currentBoardData() {
    switch (activeBoardRef.current) {
      case "DashBoard":
        return <DashBoardPage lastTransactions={lastTransactions} />;

      case "TransactionsBoard":
        return (
          <TransactionBoardDataPage
            allTransactionsData={allTransactionsData}
            debitData={debitData}
            creditData={creditData}
          />
        );

      case "ProfileBoard":
        return <ProfilePage />;

      default:
        return [];
    }
  }

  return (
    <div className="MoneyMatters_AllTransactions">
      <CurrentActiveBoardID.Provider value={currentActiveBoardID}>
        <div className="sidBar">
          <SideBar
            sideBarBoards={sideBarBoards}
            logo={Logo_MoneyMatters}
            profile={PROFILE}
            setCurrentActiveBoardID={setCurrentActiveBoardID}
          />
        </div>
        <div className="transactionPage">{currentBoardData()}</div>
      </CurrentActiveBoardID.Provider>
    </div>
  );
}
