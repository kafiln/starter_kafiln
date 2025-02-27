import FeatureCard from "@/components/templates/feature-card";
import ScrollButton from "@/components/templates/scroll-button";
import { ThemeToggle } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart, Cpu, Database, Zap } from "lucide-react";
import Link from "next/link";
export default function RAGLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <Link className="flex items-center justify-center" href="#">
          <Cpu className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">RAGSolution</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <ScrollButton name="Features" id="features" />
          <ScrollButton name="How It Works" id="how-it-works" />
          <ScrollButton name="Benefits" id="benefits" />
          <ThemeToggle />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Supercharge Your AI with RAG
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Enhance your AI applications with external knowledge using our
                  Retrieval Augmented Generation solution.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/chat">Get Started</Link>
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
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
                icon={<Database className="h-10 w-10" />}
                title="External Knowledge Integration"
                description="Seamlessly incorporate external data sources to enhance your AI's knowledge base."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10" />}
                title="Real-time Updates"
                description="Keep your AI up-to-date with the latest information from your knowledge base."
              />
              <FeatureCard
                icon={<BarChart className="h-10 w-10" />}
                title="Improved Accuracy"
                description="Boost the accuracy and relevance of your AI's responses with contextual information."
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
                <h3 className="text-xl font-bold mb-2">Data Ingestion</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Import your external data sources into our system.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground rounded-full p-3 mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Indexing & Embedding</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We process and index your data for efficient retrieval.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground rounded-full p-3 mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">AI Integration</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Your AI now has access to this knowledge during generation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="benefits"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className=" px-2 md:px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold">Enhanced Accuracy</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Provide more accurate and contextually relevant responses.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold">Up-to-date Information</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Always work with the latest data from your knowledge base.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold">Customization</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Tailor the AI&apos;s knowledge to your specific domain or use
                  case.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold">Scalability</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Easily scale your knowledge base as your needs grow.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Enhance Your AI?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Start using our RAG solution today and see the difference in
                  your AI&apos;s performance.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Get Started</Button>
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
          © 2024 RAGSolution. All rights reserved.
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
