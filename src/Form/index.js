import { useState } from "react";
import currencies from "../currencies";
import Result from "../Result";
import "./style.css";

const Form = ({ calculateResult, result }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <p>
          <label>
            <span className="form__labelText">
              Kwota w PLN*:
            </span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              className="form__field"
              type="number"
              min="0"
              step="0.01"
              placeholder="Wpisz kwotę w PLN"
              autoFocus
              required
            />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">
              Waluta:
            </span>
            <select
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
              className="form__field"
            >
              {currencies.map((currency) => (
                <option
                  key={currency.short}
                  value={currency.short}
                >
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
      </fieldset>
      <p>
        <button className="form__button">Przelicz!</button>
      </p>
      <p className="form__info">Kursy pochodzą ze strony Narodowego Banku Polskiego z Tabeli nr 073/A/NBP/2023 z dnia
        2023-04-14.</p>
      <Result result={result} />
    </form>
  );
}

export default Form;