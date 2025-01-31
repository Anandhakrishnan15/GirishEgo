import React from "react";
import "./calculator.css";
import Form from "../../../../Components/Form/Form";

const PanelSpaceHeatersCalculator = () => {
  const formFields = [
    {
      type: "text",
      name: "name",
      label: "Your Name:",
      placeholder: "Enter your name",
    },
    {
      type: "email",
      name: "email",
      label: "Your Email:",
      placeholder: "Enter your email",
    },
    {
      type: "number",
      name: "panelLength",
      label: "Panel Length (m):",
      placeholder: "Length in meters",
    },
    {
      type: "number",
      name: "panelWidth",
      label: "Panel Width (m):",
      placeholder: "Width in meters",
    },
    {
      type: "number",
      name: "panelHeight",
      label: "Panel Height (m):",
      placeholder: "Height in meters",
    },
    {
      type: "number",
      name: "desiredTemp",
      label: "Desired Temperature (°C):",
      placeholder: "Desired temp in °C",
    },
    {
      type: "number",
      name: "ambientTemp",
      label: "Ambient Temperature (°C):",
      placeholder: "Ambient temp in °C",
    },
  ];

  return (
    <div>
      <div className="calculator-container">
        <h1 className="heading">Panel Space Heater Calculator</h1>
        <div className="form-container">
          <Form
            formheading="Fill the Form"
            formbutton="Calculate"
            formFields={formFields}
            popupMessage="Sorry for the inconvenience. Kindly call us for a better experience."
            onSubmit={(data) => data}
          />
        </div>
      </div>
    </div>
  );
};

export default PanelSpaceHeatersCalculator;
