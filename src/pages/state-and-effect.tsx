/* eslint-disable react/no-unescaped-entities */
import { CSSProperties, useEffect, useState } from "react";

type Color = CSSProperties["color"];

const red = "#ff4f4f";
const blue = "#405dad";

const styles: { [key: string]: CSSProperties } = {
  container: { display: "flex", flexDirection: "column", gap: 10 },
  buttonsContainer: { display: "flex", flexDirection: "row", gap: 5 },
  button: { padding: 5 },
  colorDiv: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    height: 100,
  },
  counter: {
    backgroundColor: "#fcee6a",
    borderRadius: 5,
    padding: 5,
  },
  colorList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  colorDisplayContainer: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#dedede",
    padding: 5,
    width: 120,
  },
  colorDisplayColor: { height: 10, width: 10 },
};

export const StateAndEffectExample = () => {
  const [backgroundColor, setBackgroundColor] = useState<Color>(red);
  const [colorList, setColorList] = useState<Color[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  // This one is executed just "once"
  useEffect(() => {
    console.log("Loaded!!");
  }, []);

  // This one is executed everytime the something
  // on the dependencies array changes
  useEffect(() => {
    if (backgroundColor && backgroundColor.startsWith("#1")) {
      setCounter(counter + 1);
    }
    setColorList([...colorList, backgroundColor]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backgroundColor]);

  const handleChangeColor = (e: any) => {
    if (backgroundColor === blue) {
      setBackgroundColor(red);
    } else {
      setBackgroundColor(blue);
    }

    // OR using a callback function
    // setBackgroundColor((prevVal) => {
    //   if (prevVal === "blue") {
    //     return "red";
    //   } else {
    //     return "blue";
    //   }
    // });
  };

  const getButtonText = () => {
    const colorToUse = backgroundColor === blue ? "red" : "blue";
    return `Change to ${colorToUse}`;
  };

  const handleApplyRandomColor = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  return (
    <div style={styles.container}>
      <div style={{ ...styles.colorDiv, backgroundColor }}>
        {backgroundColor}
      </div>
      <div style={styles.buttonsContainer}>
        <button style={styles.button} onClick={handleChangeColor}>
          {getButtonText()}
        </button>
        <button style={styles.button} onClick={handleApplyRandomColor}>
          Apply random color
        </button>
      </div>

      <p style={styles.counter}>
        Times that a color that starts with "#1" has been randomly chosen:{" "}
        {counter}
      </p>
      <div style={styles.colorList}>
        {colorList.map((color, index) => (
          <ColorDisplay key={index} color={color} />
        ))}
      </div>
    </div>
  );
};

const ColorDisplay = ({ color: backgroundColor }: { color: Color }) => {
  return (
    <div style={styles.colorDisplayContainer}>
      <div style={{ ...styles.colorDisplayColor, backgroundColor }}></div>
      <div>{backgroundColor}</div>
    </div>
  );
};

export default StateAndEffectExample;
