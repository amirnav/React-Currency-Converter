import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Header.module.css";
import ReactCountryFlag from "react-country-flag";

const Header = () => {
  const [currentUSD, setCurrentUSD] = useState();
  const [currentEUR, setCurrentEUR] = useState();
  const [currentCAD, setCurrentCAD] = useState();
  const [currentJPY, setCurrentJPY] = useState();
  const [currentCNY, setCurrentCNY] = useState();

  let config = {
    headers: {
      apikey: "CVuyb9gchkXR85V9rDLgAj0ENLRXDaVa",
    },
  };

  const getCurrencyRates = () => {
    const getCurrentUSD = axios
      .get(
        "https://api.apilayer.com/exchangerates_data/latest?base=USD",
        config
      )
      .then((res) => setCurrentUSD(res.data.rates.IRR.toFixed(4)))
      .catch((err) => console.log(err));

    const getCurrentEUR = axios
      .get(
        "https://api.apilayer.com/exchangerates_data/latest?base=EUR",
        config
      )
      .then((res) => setCurrentEUR(res.data.rates.IRR.toFixed(4)))
      .catch((err) => console.log(err));

    const getCurrentCAD = axios
    .get(
      "https://api.apilayer.com/exchangerates_data/latest?base=CAD",
      config
    )
    .then((res)=> setCurrentCAD(res.data.rates.IRR.toFixed(4)))
    .catch((err)=> console.log(err));

    const getCurrentJPY = axios
    .get(
      "https://api.apilayer.com/exchangerates_data/latest?base=JPY",
      config
    )
    .then((res)=> setCurrentJPY(res.data.rates.IRR.toFixed(4)))
    .catch((err)=> console.log(err));

    const getCurrentCNY = axios
    .get(
      "https://api.apilayer.com/exchangerates_data/latest?base=CNY",
      config
    )
    .then((res)=> setCurrentCNY(res.data.rates.IRR.toFixed(4)))
    .catch((err)=> console.log(err));
  };

  useEffect(() => {
    getCurrencyRates();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.currency}>
        <ReactCountryFlag countryCode="US" svg className={styles.flag} />
        USD <span className={styles.rate}>{currentUSD}</span>
      </div>
      <div className={styles.currency}>
        <ReactCountryFlag countryCode="EU" svg className={styles.flag} />
        EUR <span className={styles.rate}>{currentEUR}</span>{" "}
      </div>
      <div className={styles.currency}>
        <ReactCountryFlag countryCode="CA" svg className={styles.flag} />
        CAD <span className={styles.rate}>{currentCAD}</span>{" "}
      </div>
      <div className={styles.currency}>
        <ReactCountryFlag countryCode="JP" svg className={styles.flag} />
        JPY <span className={styles.rate}>{currentJPY}</span>{" "}
      </div>
      <div className={styles.currency}>
        <ReactCountryFlag countryCode="CN" svg className={styles.flag} />
        CNY <span className={styles.rate}>{currentCNY}</span>{" "}
      </div>
    </header>
  );
};

export default Header;
