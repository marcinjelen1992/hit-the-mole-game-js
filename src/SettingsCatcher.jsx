import "./App.css";

export const SettingsCatcher = ({ input1, input2 }) => {
  const getInput1 = input1;
  const getInput2 = input2;

  function getTheStartData(input1, input2) {
    const inputOneBooleanMap = input1.map(
      ({ isHighlightedTime }) => isHighlightedTime
    );
    const inputTwoBooleanMap = input2.map(
      ({ isHighlightedMole }) => isHighlightedMole
    );
    const concatenatedMap = inputOneBooleanMap.concat(inputTwoBooleanMap);
    if (concatenatedMap[0] === true && concatenatedMap[3] === true) {
      return "Your choice is 1 minute and 1 mole";
    }
    if (concatenatedMap[0] === true && concatenatedMap[4] === true) {
      return "Your choice is 1 minute and 2 moles";
    }
    if (concatenatedMap[0] === true && concatenatedMap[5] === true) {
      return "Your choice is 1 minute and 3 moles";
    }
    if (concatenatedMap[1] === true && concatenatedMap[3] === true) {
      return "Your choice is 2 minutes and 1 mole";
    }
    if (concatenatedMap[1] === true && concatenatedMap[4] === true) {
      return "Your choice is 2 minutes and 2 moles";
    }
    if (concatenatedMap[1] === true && concatenatedMap[5] === true) {
      return "Your choice is 2 minutes and 3 moles";
    }
    if (concatenatedMap[2] === true && concatenatedMap[3] === true) {
      return "Your choice is 3 minutes and 1 mole";
    }
    if (concatenatedMap[2] === true && concatenatedMap[4] === true) {
      return "Your choice is 3 minutes and 2 moles";
    }
    if (concatenatedMap[2] === true && concatenatedMap[5] === true) {
      return "Your choice is 3 minutes and 3 moles";
    } else {
      return "Time or mole number setting isn't selected";
    }
  }

  return (
    <div>
      <p>{getTheStartData(getInput1, getInput2)}</p>
    </div>
  );
};
