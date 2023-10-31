import { useState } from "react";

const satisfactionPercentOptions = [
  { value: 0, description: "Dissatisfield (0%)" },
  { value: 5, description: "It was okay (5%)" },
  { value: 10, description: "It was good (10%)" },
  { value: 20, description: "Absolutely amazing! (20%)" },
];

function BillInput({ value, onChange, id, children }) {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input id={id} value={value} onChange={onChange} />
    </div>
  );
}

function PercentSelectInput({ options, value, onChange, id, children }) {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <select id={id} value={value} onChange={onChange}>
        {options.map((el) => (
          <option value={el.value} key={el.value}>
            {el.description}
          </option>
        ))}
      </select>
    </div>
  );
}

function App() {
  const [billAmount, setBillAmount] = useState(100);
  const [mySatisfactionPercent, setMySSatisfactionPercent] = useState(5);
  const [friendSatisfactionPercent, setFriendSatisfactionPercent] =
    useState(10);

  const tipAmount =
    (Number(billAmount) *
      ((Number(mySatisfactionPercent) + Number(friendSatisfactionPercent)) /
        2)) /
    100;
  console.log(tipAmount);
  const totalAmount = Number(billAmount) + tipAmount;

  function handleReset() {
    setBillAmount(0);
    setFriendSatisfactionPercent(0);
    setMySSatisfactionPercent(0);
  }

  return (
    <div>
      <BillInput
        value={billAmount}
        onChange={(e) => {
          setBillAmount(e.target.value);
        }}
        id="bill-input"
      >
        How much was the bill?
      </BillInput>
      <PercentSelectInput
        options={satisfactionPercentOptions}
        value={mySatisfactionPercent}
        onChange={(e) => setMySSatisfactionPercent(e.target.value)}
        id="my-percent-input"
      >
        How did you like the service?
      </PercentSelectInput>
      <PercentSelectInput
        options={satisfactionPercentOptions}
        value={friendSatisfactionPercent}
        onChange={(e) => setFriendSatisfactionPercent(e.target.value)}
        id="frient-percent-input"
      >
        How did you like the service?
      </PercentSelectInput>

      {billAmount === 0 ? null : (
        <>
          <h3>
            You pay ${totalAmount} (${billAmount || 0} + ${tipAmount})
          </h3>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
}

export default App;
