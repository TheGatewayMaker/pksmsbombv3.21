import "./OperatorsSlider.css";

export default function OperatorsSlider() {
  const operators = [
    "JAZZ",
    "WARID",
    "UFONE",
    "ZONG",
    "JAZZ",
    "WARID",
    "UFONE",
    "ZONG",
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
