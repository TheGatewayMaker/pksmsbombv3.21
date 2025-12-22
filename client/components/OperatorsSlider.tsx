import "./OperatorsSlider.css";

export default function OperatorsSlider() {
  const operators = [
    "JAZZ",
    "WARID",
    "UFONE",
    "ZONG",
    "TELENOR",
    "JAZZ",
    "WARID",
    "UFONE",
    "ZONG",
    "TELENOR",
    "JAZZ",
    "WARID",
  ];

  return (
    <div className="operators-slider-container">
      <div className="operators-slider-wrapper">
        <div className="operators-slider">
          {operators.map((operator, index) => (
            <div key={index} className="operator-item">
              {operator}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
