'use client';

import { useState } from 'react';

export default function SSCCheatSheet() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    content: string;
    section: string;
  } | null>(null);

  const sections = [
    {
      title: 'Pre-Hydross Trash',
      items: [
        { mob: 'Beast Tamer', notes: 'Cleave — Druid tank holds this' },
        { mob: 'Hate Screamer', notes: 'AoE Silence' },
        { mob: 'Sporebats', notes: 'Charge' },
        { mob: 'Underbog Colossus', notes: 'Spore Quake / Frenzy / Acid Geyser (like Quagmirran). On death: spawns 2 adds, mini adds, toxic pool, or Blue Mushrooms (heals + restores mana)' },
      ],
      tip: 'Stack like Gruul trash. Nuke Hate Screamers; H Pal can soak Sporebat charges. Ranged stay 30 yds from Colossus — everyone move out on Quake. If Geyser, targeted player runs to tank. Hunters Tranq Frenzy.',
    },
    {
      title: 'Hydross the Unstable',
      items: [
        { mob: 'Frost Phase — Water Tomb', notes: '8-yard spreadable freeze that deals damage over time. Kel\'Thuzad-style positioning for melee — never stack.' },
        { mob: 'Nature Phase — Vile Sludge', notes: 'Not spreadable. Picks 1 player. 500 Nature dmg over 25 sec, reduces damage dealt & healing received by 50%.' },
        { mob: 'Mark of Hydross / Corruption', notes: 'Increases Frost damage taken. Stacks swap at 100%. Crossing the invisible line between flags triggers phase transition. 4 adds spawn; stun/CC and nuke fast.' },
      ],
      setup: 'Assign everyone a fixed spot in the arena. Threat meter mandatory (Warlocks!). Tanks need Frost Resist.',
      warning: 'Boss is NOT tauntable. Call STOP on all DoTs and damage before every transition. Misdirects are your best friend!',
    },
    {
      title: 'Lurker / Vashj Trash',
      items: [
        { mob: 'Vashjir Honor Guard', notes: 'Mortal Cleave, Fear, Knockback' },
        { mob: 'Coilfang Shatterer ×2', notes: 'Shatter Armor — 50% armor reduction + 35% damage dealt reduction' },
        { mob: 'Coilfang Priestess ×2', notes: 'Heal + Angel Form when dead' },
        { mob: 'Greyheart Technicians ×3-4', notes: 'Auto attacks (non-elite)' },
      ],
      tip: 'Tremor Totems up. Kill order: Honor Guard → Priestesses → Shatterers.',
    },
    {
      title: 'The Lurker Below',
      items: [
        { mob: 'Geyser', notes: 'Randomly targets a raid member — 10-yard knockback.' },
        { mob: 'Whirl', notes: 'Damages + knockbacks all players in melee range. Melee can pre-jump into water before every Whirl (Bigwigs timers are accurate).' },
        { mob: 'Spout ⚠️', notes: '390° frontal sweep. Players MUST go into water to dodge it — come out fast, water ticks 1K/sec.' },
        { mob: 'Coilfang Guardians ×3', notes: 'Tanked. Can and should be stunned. Hit for ~2–3K/swing.' },
        { mob: 'Ambushers ×2 per island', notes: 'CC then kill after Guardians. Don\'t need a tank, but heal those getting hit. 3 small islands × 2 ambushers.' },
      ],
      tip: 'After 1 min or all adds dead, boss respawns — repeat P1.',
    },
    {
      title: 'Additional Naga Trash',
      items: [
        { mob: 'Coilfang Serpentguard', notes: 'Spell Reflect + Corrupt Devotion Aura (25% armor reduction)' },
        { mob: 'Coilfang Fathom-Witch', notes: 'Mind Control, Shadowbolt, Shadow Nova (knockback)' },
      ],
      tip: 'Kill Fathom-Witches first. Grounding Totem counters MC; if it lands, CC the victim. Shadow Nova knocks back — tank against a wall.',
    },
    {
      title: 'Pre-Leotheras Trash',
      items: [
        { mob: 'Greyheart Tidecaller', notes: 'Water Elemental Totem, Poison Shield, Poison Debuff' },
        { mob: 'Greyheart Shieldbearer', notes: 'Charges' },
        { mob: 'Greyheart Nethermage', notes: 'All mage abilities except Polymorph; can Blink' },
        { mob: 'Greyheart Skulker', notes: 'Kicks any casters in melee range. Fast physical damage.' },
      ],
      tip: 'Kill order: Mage → Skulker → Tidecaller / Shield. Disarm Shieldbearers, stack to prevent Charge. Kill totems. Dispel Poison Debuff, Purge Poison Shield off Tidecaller. Face Mage away (Cone of Cold). Can stun Skulkers.',
    },
    {
      title: 'Leotheras the Blind',
      items: [
        { mob: 'Human Phase — Whirlwind', notes: 'Like Sartura, no taunt, applies Rend debuff (11 sec). THREAT WIPE after Whirlwind ends. 1–2 healers on Human Leo — others focus Whirlwind targets.' },
        { mob: 'Demon Phase — Chaos Blast', notes: 'Fireball that applies a stacking debuff increasing Fire damage taken per stack.' },
        { mob: 'Demon Phase — Insidious Whisper', notes: 'Demon spawns on random players. ONLY that player can attack it. Kill within 30 sec or get mind-controlled — raid must kill you.' },
        { mob: '15% — Both Phases', notes: 'Demon and Human both active at 15%. IGNORE the Demon — kill Human Leo to win.' },
      ],
      warning: 'THREAT IS THE MAIN MECHANIC. DPS will grief this fight. Need a Fire Res tank for Demon Phase.',
    },
    {
      title: 'Fathomlord Karathress (Council)',
      items: [
        { mob: 'Tidalvess (KILL 1ST)', notes: 'Shaman — Earthbind, Poison Cleansing Totem, Spitfire Totem (kills >50% HP). Kill all totems immediately!' },
        { mob: 'Sharkiss (KILL 2ND)', notes: 'Hunter — Multitoss, Leeching Throw (drain HP+mana 12 sec), Summon pet (Lurker/Sporebat — CC or kill), Beast Within (+30% dmg)' },
        { mob: 'Cardi B (KILL 3RD)', notes: 'Priestess — Cyclone, Water Bolt Volley, Healing Wave, Tidal Surge. Can skip if needed.' },
        { mob: 'Karathress', notes: 'Big Melee — Cataclysmic Bolt (50% HP hit on mana user), Sear Nova (fire dmg in melee range). Absorbs abilities from each slain Lord.' },
      ],
      warning: 'If any Lord is alive when Karathress hits 75%, he gains a 65% damage + speed buff. Kill order is critical!',
      tip: 'Beefiest tank on Karathress + Sharkiss. One tank on Tidalvess + pet. One tank on Cardi B. Misdirects for each tank. Pull Cardi B far away with a Resto Druid + tank to outrange her heals. 6-healing this fight is incredibly comfortable.',
    },
    {
      title: 'Morogrim Tidewalker',
      items: [
        { mob: 'Tidal Wave', notes: 'Tank mechanic. Deals Frost damage and reduces attack speed.' },
        { mob: 'Watery Grave ×4', notes: '4 simultaneous targets placed in a bubble — burst damage on pop + fall damage. (100–25% only.)' },
        { mob: 'Earthquake', notes: 'Hits everyone for 4K. Murlocs spawn from left and right entrances simultaneously.' },
        { mob: 'Globules (25–0%)', notes: 'No more Watery Grave below 25%. Bubbles chase and explode on contact with their assigned player only. KITE Morogrim as Globules approach.' },
      ],
      setup: '2–3 Tanks (Murloc tanks can be Watery Graved — 3 tanks is safer). Murloc add tanks only need 5.2% Crit Immune (mobs level 71). Gear for high threat. Paladins generate threat healing a life-tapping Warlock; rotate Trinket/Wings for each pack.',
    },
    {
      title: 'Lady Vashj — Final Boss',
      items: [
        { mob: 'P1 — Multishot', notes: 'Hits 8 targets for 2.4K. Unavoidable.' },
        { mob: 'P1 — Shock Blast', notes: '8–9K instant damage to tank + 5-sec stun. MUST be Grounded by tank group\'s Shaman.' },
        { mob: 'P1 — Entangle', notes: 'Physical root on melee — cannot be dispelled. BoF, PvP Trinket, Cloak, Shapeshift, BoP all work. Assign an Offspec Pally to spam Freedom on tank.' },
        { mob: 'P1 — Static Charge', notes: 'Random target: 2K damage to them + anyone nearby every 2 sec for 12 sec. That player MUST move out of raid.' },
        { mob: 'P2 — Enchanted Elementals', notes: 'Spawn at room edge, walk to Vashj granting stacking 5% damage buff. Ranged take these out immediately.' },
        { mob: 'P2 — Tainted Elementals', notes: 'Stationary, spam Poison Bolt, despawn after 15 sec. On kill: loot Tainted Core — holding it prevents movement/casting (hot-potato to a pillar). Min 2 players needed per pillar.' },
        { mob: 'P2 — Coilfang Elites', notes: 'Cleave + Hamstring. Tanked in the INNER circle. Melee focus these.' },
        { mob: 'P2 — Coilfang Striders', notes: 'Pulse AoE Fear every 2 sec. Picked up by Shaman and kited with Frost Shock in the OUTER circle. Ranged kill these when near.' },
        { mob: 'P3 — Poison Pools', notes: 'Sporebats throw poison on the ground — kills in ~2–3 sec. YOU CAN SEE IT COMING before it lands — move pre-emptively! Watch for Entangle + Poison combos.' },
      ],
      tip: 'P1: Healer split: 3 on boss tank, 2 raid healers. P2: Assign 4 smart ranged (pref. Hunters) to quadrants for Tainted Core duty. Before deactivating FINAL pillar, confirm no new adds spawning. P3 is P1 + Poison — same mechanics, just don\'t stand in pools.',
      macro: `/use Tainted Core
/y <------- TAINTED CORE TO: %t !!!
/s <------- TAINTED CORE TO: %t !!!
/script SendChatMessage("!!! YOU HAVE THE CORE !!!", "WHISPER", "Common", UnitName("target"));`,
    },
  ];

  const filteredSections = sections
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.mob.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.notes.toLowerCase().includes(searchQuery.toLowerCase()) ||
          section.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

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
          {filteredSections.map((section) => (
            <section
              key={section.title}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden"
            >
              <div className="px-6 py-5 border-b border-zinc-800 bg-zinc-900/70">
                <h2 className="text-2xl font-bold text-cyan-300">
                  {section.title}
                </h2>
                {section.setup && (
                  <p className="text-zinc-400 text-sm mt-2">
                    <span className="text-zinc-500 font-semibold">Setup:</span> {section.setup}
                  </p>
                )}
                {section.warning && (
                  <p className="text-red-400 text-sm mt-2">
                    <span className="font-semibold">Warning:</span> {section.warning}
                  </p>
                )}
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
                            title: item.mob,
                            content: item.notes,
                            section: section.title,
                          })
                        }
                        className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition-transform shrink-0"
                      >
                        Quick View
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {section.tip && (
                <div className="px-6 py-4 bg-teal-950/40 border-t border-teal-900/40 text-teal-300">
                  <span className="font-semibold">Tip:</span> {section.tip}
                </div>
              )}

              {section.macro && (
                <div className="px-6 py-4 border-t border-zinc-800">
                  <p className="text-zinc-500 text-sm mb-2 font-semibold">Tainted Core Macro:</p>
                  <pre className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-sm text-teal-400 overflow-x-auto whitespace-pre-wrap">{section.macro}</pre>
                </div>
              )}
            </section>
          ))}
        </div>

        <footer className="mt-16 border-t border-zinc-800 pt-8 text-zinc-500 text-sm">
          <p>Good luck, adventurer. May your tanks hold threat and your healers not go OOM.</p>
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
              <h3 className="text-3xl font-bold mb-4">{selectedItem.title}</h3>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                {selectedItem.content}
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
