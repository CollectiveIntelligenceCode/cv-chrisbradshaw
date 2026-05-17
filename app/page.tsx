import { getAllContent } from '@/lib/markdown';
import Header from '@/components/Header';
import CVTabs from '@/components/CVTabs';

export default function Home() {
  const content = getAllContent();

  return (
    <main className="min-h-screen">
      <Header />
      <CVTabs content={content} />

      {/* AI Adventure cross-link */}
      <section className="max-w-6xl mx-auto px-6 pb-16 no-print">
        <div className="rounded-2xl border border-border bg-bg-secondary px-8 py-6">
          <p className="font-semibold text-text-primary text-sm">Start with the basics</p>
          <p className="mt-2 text-text-muted text-sm leading-relaxed">
            Not sure where to begin with AI? Our free 60-minute course at{' '}
            <a
              href="https://aiadventure.ai/free"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent-purple hover:underline"
            >
              AI Adventure
            </a>{' '}
            teaches you the essentials — practical skills, no jargon, no tech background needed.
          </p>
          <a
            href="https://aiadventure.ai/free"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm font-semibold text-accent-purple hover:underline"
          >
            Start free →
          </a>
        </div>
      </section>
    </main>
  );
}
