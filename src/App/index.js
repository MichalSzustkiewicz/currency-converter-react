import Form from "./Form";
import currencies from "./currencies";
import { useState } from "react";
import { Wrapper } from "./styled";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <Wrapper>
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </Wrapper>
  );
}

export default App;
