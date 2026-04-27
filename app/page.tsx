import { getAllContent } from '@/lib/markdown';
import Header from '@/components/Header';
import CVTabs from '@/components/CVTabs';

export default function Home() {
  const content = getAllContent();

  return (
    <main className="min-h-screen">
      <Header />
      <CVTabs content={content} />
    </main>
  );
}
