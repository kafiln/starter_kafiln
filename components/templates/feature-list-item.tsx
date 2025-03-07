import React from "react";

interface Feature {
  title: string;
  explanation: string;
}

const FeatureListItem: React.FC<{ features: Feature[] }> = ({ features }) => {
  return (
    <ul className="max-w-md space-y-4">
      {features.map(({ title, explanation }) => (
        <li key={title} className="p-4 ">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400">{explanation}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeatureListItem;
