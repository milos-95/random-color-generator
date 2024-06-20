import { useEffect, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor;
    else handleCreateRandomHexColor;
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        Choose the type of a color:
        <button onClick={() => setTypeOfColor("hex")}>Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>RGB Color</button>
        <div>Generate it:</div>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "25px",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
        <p>{color}</p>
      </div>
    </div>
  );
}

export default RandomColor;
