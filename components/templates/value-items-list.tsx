import ValueItem from "@/components/templates/value-item";

type ValueItem = {
  title: string;
  description: string;
};

interface ValueItemsListProps {
  values: ValueItem[];
}
const ValueItemsList = ({ values }: ValueItemsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
      {values.map((value) => (
        <ValueItem
          key={value.title}
          title={value.title}
          description={value.description}
        />
      ))}
    </div>
  );
};

export default ValueItemsList;
