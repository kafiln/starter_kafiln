"use client";
import CalendlyButton from "@/components/ui/book-demo-buttom";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DemoPage = () => {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <Button asChild>
        <Link href="/">Go Back</Link>
      </Button>
      <CalendlyButton />
    </div>
  );
};

export default DemoPage;
