import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Currency from "./Currency";
import styles from "./Converter.module.css";
import { FaExchangeAlt } from "react-icons/fa";

const Converter = () => {
  const [rates, setRates] = useState();
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [amountFromCurrency, setAmountFromCurrency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();

  const options = ["EUR", "USD", "UAH","IRR","TRY","CNY","CAD","JPY"];

  let config = {
    headers: {
      apikey: "CVuyb9gchkXR85V9rDLgAj0ENLRXDaVa",
    },
  };

  async function getData() {
    const result = await axios.get(
      `https://api.apilayer.com/fixer/latest?symbols=${options}&base=EUR`,
      config
    );
    setRates(result.data.rates);
    setFromCurrency(result.data.base);
    setToCurrency(options[2]);
  }

  useEffect(() => {
    getData();
  }, []);

  /*Calculation*/
  let toAmount, fromAmount;
  if (amountFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exchangeRate).toFixed(4);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRate).toFixed(4);
  }

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountFromCurrency(true);
  };

  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountFromCurrency(false);
  };

  const changeCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    if (fromCurrency !== undefined && toCurrency !== undefined) {
      axios
        .get(
          `https://api.apilayer.com/fixer/latest?symbols=${toCurrency}&base=${fromCurrency}`,
          config
        )
        .then((res) => setExchangeRate(res.data.rates[toCurrency]))
        .catch((err) => console.log(err));
    }
  }, [fromCurrency, toCurrency]);

  return (
    <main className={styles.main}>
      <Currency
        options={options}
        selectCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <button onClick={changeCurrency} className={styles.equals}>
        <FaExchangeAlt />
      </button>
      <Currency
        options={options}
        selectCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </main>
  );
};

export default Converter;
