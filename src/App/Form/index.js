import { useState } from "react";
import Result from "./Result";
import { Fieldset, Button, FormField, Info, LabelText, Legend, Loading, Failure } from "./styled";
import { useRatesData } from "../useRatesData";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (amount, currency) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form onSubmit={onFormSubmit}>
      {ratesData.state === "loading"
        ? (
          <Loading>
            Zaczekaj chwilkę... <br /> Ładuję aktualne kursy walut z Europejskiego Banku Centralnego...
          </Loading>
        )
        : (
          ratesData.state === "error"
            ? (
              <Failure>
                Coś poszło nie tak. Sprawdź, czy masz połączenie z siecią. Jeśli tak, wygląda na to, że problem wystąpił po naszej stronie. <br /> <br /> Spróbuj ponownie później. Przepraszamy za utrudnienia.
              </Failure>
            ) : (
              <>
                <Fieldset>
                  <Legend>Kalkulator walut</Legend>
                  <p>
                    <label>
                      <LabelText>Kwota w PLN*:</LabelText>
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
                      <LabelText>Waluta:</LabelText>
                      <FormField
                        as="select"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                      >
                        {!!ratesData.rates && Object.keys(ratesData.rates).map((currency) => (
                          <option
                            key={currency}
                            value={currency}
                          >
                            {currency}
                          </option>
                        ))}
                      </FormField>
                    </label>
                  </p>
                </Fieldset>

                <p>
                  <Button>Przelicz!</Button>
                </p>

                <Result result={result} />

                <Info>
                  Kursy walut pobierane są z Europejskiego Banku Centralnego. Aktualne na dzień {ratesData.date}.
                </Info>
              </>
            )
        )}
    </form>
  );
};

export default Form;