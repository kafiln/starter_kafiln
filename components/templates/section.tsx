import { PropsWithChildren } from "react";

interface SectionProps {
  sectionId: string;
  title?: string;
  subtitle?: string;
}

const Section = ({
  sectionId,
  title,
  subtitle,
  children,
}: PropsWithChildren<SectionProps>) => {
  return (
    <section id={sectionId} className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            {title && (
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
