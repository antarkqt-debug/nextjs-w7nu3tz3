export default function SSCCheatSheet() {
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

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
            <div className="text-zinc-400 text-sm mb-2">Raid</div>
            <div className="text-2xl font-bold">SSC</div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
            <div className="text-zinc-400 text-sm mb-2">Format</div>
            <div className="text-2xl font-bold">Interactive Guide</div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
            <div className="text-zinc-400 text-sm mb-2">Optimized For</div>
            <div className="text-2xl font-bold">Desktop + Mobile</div>
          </div>
        </div>

        <div className="sticky top-0 z-20 bg-zinc-950/90 backdrop-blur pb-4 mb-8">
          <input
            placeholder="Search mechanics, mobs, assignments..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500 text-lg"
          />
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
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

                      <button className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition-transform">
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
      </div>
    </div>
  );
}
