'use client';

import { useState, useEffect } from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import DownloadButton from './DownloadButton';
import type { MarkdownContent } from '@/lib/markdown';

interface CVTabsProps {
  content: {
    cv: MarkdownContent;
    coverLetter: MarkdownContent;
    executiveSummary: MarkdownContent;
  };
}

type TabId = 'cv' | 'cover-letter' | 'executive-summary';

const tabs = [
  { id: 'cv' as TabId, label: 'Full CV', hash: '#cv' },
  { id: 'cover-letter' as TabId, label: 'Cover Letter', hash: '#cover-letter' },
  { id: 'executive-summary' as TabId, label: 'Executive Summary', hash: '#executive-summary' },
];

export default function CVTabs({ content }: CVTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('cv');

  // Handle URL hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#cv') setActiveTab('cv');
    else if (hash === '#cover-letter') setActiveTab('cover-letter');
    else if (hash === '#executive-summary') setActiveTab('executive-summary');
  }, []);

  const handleTabClick = (tabId: TabId, hash: string) => {
    setActiveTab(tabId);
    window.history.pushState(null, '', hash);
  };

  const getActiveContent = () => {
    switch (activeTab) {
      case 'cv':
        return content.cv.content;
      case 'cover-letter':
        return content.coverLetter.content;
      case 'executive-summary':
        return content.executiveSummary.content;
      default:
        return content.cv.content;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Tab Navigation */}
      <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8 border-b border-border mb-8 no-print">
        {tabs.map((tab, index) => {
          const gradients = [
            'from-accent-purple to-accent-blue',
            'from-accent-blue to-accent-green',
            'from-accent-green to-accent-orange',
          ];
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.hash)}
              className={`pb-4 px-2 text-lg font-semibold transition-all duration-250 border-b-2 ${
                activeTab === tab.id
                  ? `text-text-primary border-transparent bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent`
                  : 'text-text-muted border-transparent hover:text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>

      {/* Download Button */}
      <div className="flex justify-end mb-8 no-print">
        <DownloadButton />
      </div>

      {/* Content */}
      <article className="mt-8">
        <MarkdownRenderer content={getActiveContent()} />
      </article>
    </div>
  );
}
