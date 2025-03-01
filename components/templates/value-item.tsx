interface ValueItemProps {
  title: string;
  description: string;
}
const ValueItem = ({ title, description }: ValueItemProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default ValueItem;
