// components/CalendlyButton.js
import { useEffect } from "react";

const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_URL = "https://calendly.com/kafil-nasdami-innovx";

const CalendlyButton = () => {
  useEffect(() => {
    if (!document.querySelector(`script[src="${CALENDLY_JS}"]`)) {
      const script = document.createElement("script");
      script.src = CALENDLY_JS;
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "830px", overflow: "visible" }}
      />
    </>
  );
};

export default CalendlyButton;
