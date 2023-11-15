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
      return "Zaznaczono 1 minutę i 1 kreta";
    }
    if (concatenatedMap[0] === true && concatenatedMap[4] === true) {
      return "Zaznaczono 1 minutę i 2 krety";
    }
    if (concatenatedMap[0] === true && concatenatedMap[5] === true) {
      return "Zaznaczono 1 minutę i 3 krety";
    }
    if (concatenatedMap[1] === true && concatenatedMap[3] === true) {
      return "Zaznaczono 2 minuty i 1 kreta";
    }
    if (concatenatedMap[1] === true && concatenatedMap[4] === true) {
      return "Zaznaczono 2 minuty i 2 krety";
    }
    if (concatenatedMap[1] === true && concatenatedMap[5] === true) {
      return "Zaznaczono 2 minuty i 3 krety";
    }
    if (concatenatedMap[2] === true && concatenatedMap[3] === true) {
      return "Zaznaczono 3 minuty i 1 kreta";
    }
    if (concatenatedMap[2] === true && concatenatedMap[4] === true) {
      return "Zaznaczono 3 minuty i 2 krety";
    }
    if (concatenatedMap[2] === true && concatenatedMap[5] === true) {
      return "Zaznaczono 3 minuty i 3 krety";
    } else {
      return "Nie zaznaczono obu opcji";
    }
  }

  return (
    <div>
      <p>{getTheStartData(getInput1, getInput2)}</p>
    </div>
  );
};
