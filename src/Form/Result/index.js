import { ShowResult } from "./styled";

const Result = ({ result }) => (
  <ShowResult>
    {result !== undefined && (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </ShowResult>
);

export default Result;