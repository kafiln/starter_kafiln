import { Logo } from "@/components/logo";
import FeatureCard from "@/components/templates/feature-card";
import FeatureListItem from "@/components/templates/feature-list-item";
import ScrollButton from "@/components/templates/scroll-button";
import ValueItemsList from "@/components/templates/value-items-list";
import { ThemeToggle } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PRODUCT_NAME } from "@/constants/names";
import {
  CloudUpload,
  MessageSquareText,
  MonitorCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";
const VALUES = [
  {
    title: "Time Saved, Focus Gained",
    description: `No more endless searching—${PRODUCT_NAME} retrieves the right document or answer instantly, so your team can focus on high-impact work.`,
  },
  {
    title: "Better Collaboration, Smarter Teams",
    description: `Break down information silos. ${PRODUCT_NAME} ensures knowledge is easily accessible across departments, keeping teams aligned and informed.`,
  },
  {
    title: "Faster, Data-Driven Decisions",
    description:
      "Get AI-powered insights from your internal documents, reports, and data sources—helping leaders make confident, informed choices.",
  },
  {
    title: "Seamless Integration, Effortless Deployment",
    description: `${PRODUCT_NAME} works with the tools you already use—Microsoft 365, CRMs, databases, and more—so there’s no need to change your existing workflow.`,
  },
];

export default function RAGLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <Link className="flex items-center justify-center" href="#">
          <Logo />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <ScrollButton name="Values" id="values" />
          <ScrollButton name="Features" id="features" />
          <ScrollButton name="How It Works" id="how-it-works" />
          <ScrollButton name="Privacy" id="privacy" />
          <ScrollButton name="Contact" id="contact" />
          <ThemeToggle />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find What Matters – Instantly
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Meet Najm AI: the AI-powered entreprise search engine that
                  transforms the way your teams discover, share, and act
                  oncritical information.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/chat">Book a Demo</Link>
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="subtitle"
          className="w-full py-12 md:py-4 lg:py-8 bg-gray-100 dark:bg-gray-800"
        >
          <div className=" px-4 md:px-6">
            <h2 className="text-xl font-semibold tracking-tighter sm:text-4xl md:text-xl text-center">
              Seamlessly connect to your existing tools—{PRODUCT_NAME}
              integrates with Microsoft 365, your CRM, data sources, and more to
              bring all your knowledge into one intelligent search.
            </h2>
          </div>
        </section>
        <section id="values" className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-2 md:px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Value
            </h2>
            <div className="container mx-auto my-8">
              <p className="text-xl text-center font-semibold">
                Finding the right information at the right time can make or
                break productivity. {PRODUCT_NAME} isn’t just a search tool—it’s
                a game-changer for efficiency, collaboration, and
                decision-making across your organization.
              </p>
            </div>
            <ValueItemsList values={VALUES} />
            <div className="container mx-auto my-8">
              <p className="text-xl text-center font-semibold">
                {PRODUCT_NAME} Is More Than a Search Engine—It’s Your
                Competitive Advantage.
              </p>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<MonitorCheck className="h-10 w-10" />}
                title="AI-Powered Search with Source Citations"
                description="Find the right information instantly, with direct source references for accuracy and trust."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10" />}
                title="Real-Time Data Synchronization"
                description="Always access the latest files, and reports with automatic updates from your business tools."
              />
              <FeatureCard
                icon={<MessageSquareText className="h-10 w-10" />}
                title="Smart Summaries & Contextual Answers"
                description="Get key insights fast—no need to read long documents. Important details are extracted for you."
              />
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground rounded-full p-3 mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Data Collection & Integration
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Connects to your company’s knowledge sources—SharePoint,
                  Google Drive, CRMs, and more.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground rounded-full p-3 mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Data Analysis & Processing
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Continuously organizes, ranks, and updates information to
                  ensure accurate and relevant results.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground rounded-full p-3 mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Knowledge Synthesis & Generation
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Delivers precise answers, key insights, and dynamic summaries,
                  with cited sources for verification.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="privacy"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Privacy & Security: Your Data, Your Control
            </h2>
            <div className="flex items-center justify-center container mx-auto">
              <FeatureCard
                icon={<CloudUpload className="h-10 w-10" />}
                title="Cloud Deployment"
              >
                <FeatureListItem
                  features={[
                    {
                      title: "Quick Setup",
                      explanation:
                        "Get up and running in minutes—no hardware required.",
                    },
                    {
                      title: "Automatic Updates",
                      explanation:
                        "Stay ahead with the latest features without manual installations.",
                    },
                    {
                      title: "Cost-Effective",
                      explanation:
                        "Pay only for what you use, and scale as your company grows.",
                    },
                  ]}
                />
              </FeatureCard>
              <FeatureCard
                icon={<MonitorCheck className="h-10 w-10" />}
                title="On-Premises Deployment "
              >
                <FeatureListItem
                  features={[
                    {
                      title: "Full Control",
                      explanation:
                        "Keep all data in your own infrastructure, ideal for highly regulated industries.",
                    },
                    {
                      title: "Custom Integrations",
                      explanation:
                        "Fine-tune LX GPT to match unique workflows and security requirements.",
                    },
                    {
                      title: "Security Assurance",
                      explanation:
                        "Maintain complete data sovereignty and meet strict governance standards.",
                    },
                  ]}
                />
              </FeatureCard>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get Started with AI-Powered Entreprise Search
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Unlock instant access to your company’s knowledge. Find the
                  right information faster, boost productivity, and streamline
                  decision-making.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Book a demo</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 Najm AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
