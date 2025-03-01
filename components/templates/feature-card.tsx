import { PropsWithChildren } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  children,
}: PropsWithChildren<FeatureCardProps>) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {description && (
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      )}
      {children}
    </div>
  );
}
