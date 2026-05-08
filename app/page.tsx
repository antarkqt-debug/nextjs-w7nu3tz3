'use client';

import { useState } from 'react';

export default function SSCCheatSheet() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<{
    mob: string;
    notes: string;
    section: string;
  } | null>(null);

  const sections = [
    {
      title: 'Pre-Hydross Trash',
      items: [
        {
          mob: 'Beast Tamer',
          notes: 'Cleave — Druid tank holds this',
        },
        {
          mob: 'Coilfang Priestess',
          notes: 'Interrupt heals and spread positioning',
        },
      ],
    },
    {
      title: 'Hydross the Unstable',
      items: [
        {
          mob: 'Phase Swap',
          notes: 'Swap resistance tanks cleanly at threshold transitions',
        },
        {
          mob: 'Adds',
          notes: 'AoE control immediately after transitions',
        },
      ],
    },
    {
      title: 'Leotheras the Blind',
      items: [
        {
          mob: 'Whirlwind',
          notes: 'Spread and avoid unnecessary melee damage',
        },
        {
          mob: 'Inner Demon',
          notes: 'Players must kill their personal demon quickly',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm mb-4">
            WoW TBC Raid Reference
          </div>

          <h1 className="text-5xl font-black tracking-tight mb-4">
            Serpentshrine Cavern Cheat Sheet
          </h1>

          <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
            A modernized, searchable, mobile-friendly version of your SSC Excel
            sheet. Designed for fast raid reference during progression and farm
            content.
          </p>
        </header>

        <div className="mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 inline-block">
            <div className="text-zinc-400 text-sm mb-2">Raid</div>
            <div className="text-2xl font-bold">SSC</div>
          </div>
        </div>

        <div className="sticky top-0 z-20 bg-zinc-950/90 backdrop-blur pb-4 mb-8">
          <input
            placeholder="Search mechanics, mobs, assignments..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-8">
          {sections
            .map((section) => ({
              ...section,
              items: section.items.filter(
                (item) =>
                  item.mob.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.notes.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  section.title.toLowerCase().includes(searchQuery.toLowerCase())
              ),
            }))
            .filter((section) => section.items.length > 0)
            .map((section) => (
            <section
              key={section.title}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden"
            >
              <div className="px-6 py-5 border-b border-zinc-800 bg-zinc-900/70">
                <h2 className="text-2xl font-bold text-cyan-300">
                  {section.title}
                </h2>
              </div>

              <div className="divide-y divide-zinc-800">
                {section.items.map((item) => (
                  <div
                    key={item.mob}
                    className="p-6 hover:bg-zinc-800/40 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {item.mob}
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                          {item.notes}
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          setSelectedItem({
                            mob: item.mob,
                            notes: item.notes,
                            section: section.title,
                          })
                        }
                        className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition-transform"
                      >
                        Quick View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 border-t border-zinc-800 pt-8 text-zinc-500 text-sm">
          <p>Deploy this project to Vercel for a public URL like:</p>
          <p className="mt-2 text-cyan-300 font-mono">
            yourcheatsheet.vercel.app
          </p>
        </footer>

        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-zinc-900 border border-zinc-700 rounded-3xl p-8 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-cyan-400 text-sm font-medium mb-2">
                {selectedItem.section}
              </div>
              <h3 className="text-3xl font-bold mb-4">{selectedItem.mob}</h3>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                {selectedItem.notes}
              </p>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
