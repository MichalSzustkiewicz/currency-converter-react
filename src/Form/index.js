import { useState } from "react";
import currencies from "../currencies";
import Clock from "./Clock";
import Result from "./Result";
import { Fieldset, FormButton, FormField, Info, LabelText, Legend } from "./styled";

const Form = ({ calculateResult, result }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Clock />
      <Fieldset>
        <Legend>Kalkulator walut</Legend>
        <p>
          <label>
            <LabelText>
              Kwota w PLN*:
            </LabelText>
            <FormField
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
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
            <LabelText>
              Waluta:
            </LabelText>
            <FormField as="select"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option
                  key={currency.short}
                  value={currency.short}
                >
                  {currency.name}
                </option>
              ))}
            </FormField>
          </label>
        </p>
      </Fieldset>
      <p>
        <FormButton>Przelicz!</FormButton>
      </p>
      <Info>Kursy pochodzą ze strony Narodowego Banku Polskiego z Tabeli nr 073/A/NBP/2023 z dnia
        2023-04-14.</Info>
      <Result result={result} />
    </form>
  );
}

export default Form;