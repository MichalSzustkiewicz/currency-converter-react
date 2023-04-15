import Form from "./Form";
import Container from "./Container";
import currencies from "./currencies";
import { useState } from "react";

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
    <Container>
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </Container>
  );
}

export default App;
