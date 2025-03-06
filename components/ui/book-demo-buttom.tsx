// components/CalendlyButton.js
import { useEffect } from "react";

const CalendlyButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/kafil-nasdami-innovx"
      style={{ minWidth: "320px", height: "830px", overflow: "visible" }}
    ></div>
  );
};

export default CalendlyButton;
