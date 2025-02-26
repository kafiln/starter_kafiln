"use client";
interface ScrollButtonProps {
  name: string;
  id: string;
}

const ScrollButton = ({ name, id }: ScrollButtonProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={() => scrollToSection(id)}
      className="text-sm font-medium hover:underline underline-offset-4"
    >
      {name}
    </button>
  );
};

export default ScrollButton;
