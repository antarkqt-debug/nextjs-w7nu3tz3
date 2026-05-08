'use client';

import { useState } from 'react';

type Ability = { name: string; desc: string };
type Phase = { name: string; abilities: Ability[]; tip?: string };
type Mob = { name: string; desc: string };
type Lord = { name: string; kill: string; role: string; desc: string };

type TrashSection = {
  type: 'trash';
  icon: string;
  title: string;
  mobs: Mob[];
  tip?: string;
};

type BossSection = {
  type: 'boss';
  color: 'blue' | 'teal' | 'red' | 'amber' | 'green';
  icon: string;
  title: string;
  setup?: string;
  warning?: string;
  phases: Phase[];
  tip?: string;
  macro?: string;
};

type CouncilSection = {
  type: 'council';
  color: 'amber';
  icon: string;
  title: string;
  warning?: string;
  lords: Lord[];
  tankNote: string;
  tip?: string;
};

type Section = TrashSection | BossSection | CouncilSection;

export default function SSCCheatSheet() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    content: string;
    section: string;
    color?: string;
  } | null>(null);

  const sections: Section[] = [
    {
      type: 'trash',
      icon: '⚔️',
      title: 'Pre-Hydross Trash',
      mobs: [
        { name: 'Beast Tamer', desc: 'Cleave — Druid tank holds this' },
        { name: 'Hate Screamer', desc: 'AoE Silence' },
        { name: 'Sporebats', desc: 'Charge' },
        {
          name: 'Underbog Colossus',
          desc: 'Spore Quake / Frenzy / Acid Geyser (like Quagmirran). On death: spawns 2 adds, mini adds, toxic pool, or Blue Mushrooms (heals + restores mana)',
        },
      ],
      tip: 'Stack like Gruul trash. Nuke Hate Screamers; H Pal can soak Sporebat charges. Ranged stay 30 yds from Colossus — everyone move out on Quake. If Geyser, targeted player runs to tank. Hunters Tranq Frenzy.',
    },
    {
      type: 'boss',
      color: 'blue',
      icon: '💧',
      title: 'Boss 1 — Hydross the Unstable',
      setup:
        'Assign everyone a fixed spot in the arena. Threat meter mandatory (Warlocks!). Tanks need Frost Resist.',
      warning:
        'Boss is NOT tauntable. Call STOP on all DoTs and damage before every transition. Misdirects are your best friend!',
      phases: [
        {
          name: 'Frost Phase',
          abilities: [
            {
              name: 'Water Tomb',
              desc: '8-yard spreadable freeze that deals damage over time. Kel\'Thuzad-style positioning for melee — never stack.',
            },
          ],
        },
        {
          name: 'Nature Phase',
          abilities: [
            {
              name: 'Vile Sludge',
              desc: 'Not spreadable. Picks 1 player. 500 Nature dmg over 25 sec, reduces damage dealt & healing received by 50%.',
            },
          ],
        },
        {
          name: 'Both Phases',
          abilities: [
            {
              name: 'Mark of Hydross / Corruption',
              desc: 'Increases Frost damage taken. Stacks swap at 100%. Crossing the invisible line between flags triggers phase transition. 4 adds spawn; stun/CC and nuke fast.',
            },
          ],
        },
      ],
    },
    {
      type: 'trash',
      icon: '⚔️',
      title: 'Lurker / Vashj Trash',
      mobs: [
        { name: 'Vashjir Honor Guard', desc: 'Mortal Cleave, Fear, Knockback' },
        {
          name: 'Coilfang Shatterer ×2',
          desc: 'Shatter Armor — 50% armor reduction + 35% damage dealt reduction',
        },
        { name: 'Coilfang Priestess ×2', desc: 'Heal + Angel Form when dead' },
        { name: 'Greyheart Technicians ×3-4', desc: 'Auto attacks (non-elite)' },
      ],
      tip: 'Tremor Totems up. Kill order: Honor Guard → Priestesses → Shatterers.',
    },
    {
      type: 'boss',
      color: 'teal',
      icon: '🌀',
      title: 'Boss 2 — The Lurker Below',
      phases: [
        {
          name: 'Phase 1 — Boss Phase',
          abilities: [
            {
              name: 'Geyser',
              desc: 'Randomly targets a raid member — 10-yard knockback.',
            },
            {
              name: 'Whirl',
              desc: 'Damages + knockbacks all players in melee range. Melee can pre-jump into water before every Whirl (Bigwigs timers are accurate).',
            },
            {
              name: 'Spout ⚠️ MAIN',
              desc: '390° frontal sweep. Players MUST go into water to dodge it — come out fast, water ticks 1K/sec.',
            },
          ],
        },
        {
          name: 'Phase 2 — Add Phase',
          abilities: [
            {
              name: 'Coilfang Guardians ×3',
              desc: 'Tanked. Can and should be stunned. Hit for ~2–3K/swing.',
            },
            {
              name: 'Ambushers ×2 per island',
              desc: "CC then kill after Guardians. Don't need a tank, but heal those getting hit. 3 small islands × 2 ambushers.",
            },
          ],
        },
      ],
      tip: 'After 1 min or all adds dead, boss respawns — repeat P1.',
    },
    {
      type: 'trash',
      icon: '⚔️',
      title: 'Additional Naga Trash',
      mobs: [
        {
          name: 'Coilfang Serpentguard',
          desc: 'Spell Reflect + Corrupt Devotion Aura (25% armor reduction)',
        },
        {
          name: 'Coilfang Fathom-Witch',
          desc: 'Mind Control, Shadowbolt, Shadow Nova (knockback)',
        },
      ],
      tip: 'Kill Fathom-Witches first. Grounding Totem counters MC; if it lands, CC the victim. Shadow Nova knocks back — tank against a wall.',
    },
    {
      type: 'trash',
      icon: '⚔️',
      title: 'Pre-Leotheras Trash',
      mobs: [
        {
          name: 'Greyheart Tidecaller',
          desc: 'Water Elemental Totem, Poison Shield, Poison Debuff',
        },
        { name: 'Greyheart Shieldbearer', desc: 'Charges' },
        {
          name: 'Greyheart Nethermage',
          desc: 'All mage abilities except Polymorph; can Blink',
        },
        {
          name: 'Greyheart Skulker',
          desc: 'Kicks any casters in melee range. Fast physical damage.',
        },
      ],
      tip: 'Kill order: Mage → Skulker → Tidecaller / Shield. Disarm Shieldbearers, stack to prevent Charge. Kill totems. Dispel Poison Debuff, Purge Poison Shield off Tidecaller. Face Mage away (Cone of Cold). Can stun Skulkers.',
    },
    {
      type: 'boss',
      color: 'red',
      icon: '🔥',
      title: 'Boss 3 — Leotheras the Blind',
      warning:
        'THREAT IS THE MAIN MECHANIC. DPS will grief this fight. Need a Fire Res tank for Demon Phase.',
      phases: [
        {
          name: 'Human Phase',
          abilities: [
            {
              name: 'Whirlwind',
              desc: 'Like Sartura, no taunt, applies Rend debuff (11 sec). THREAT WIPE after Whirlwind ends. 1–2 healers on Human Leo — others focus Whirlwind targets.',
            },
          ],
        },
        {
          name: 'Demon Phase',
          abilities: [
            {
              name: 'Chaos Blast',
              desc: 'Fireball that applies a stacking debuff increasing Fire damage taken per stack.',
            },
            {
              name: 'Insidious Whisper',
              desc: 'Demon spawns on random players. ONLY that player can attack it. Kill within 30 sec or get mind-controlled — raid must kill you.',
            },
          ],
        },
        {
          name: '15% — Both Phases',
          abilities: [],
          tip: 'Demon and Human both active at 15%. IGNORE the Demon — kill Human Leo to win.',
        },
      ],
    },
    {
      type: 'council',
      color: 'amber',
      icon: '⚔️',
      title: 'Boss 4 — Fathomlord Karathress (Council)',
      warning:
        'If any Lord is alive when Karathress hits 75%, he gains a 65% damage + speed buff. Kill order is critical!',
      lords: [
        {
          name: 'Tidalvess',
          kill: 'KILL 1ST',
          role: '🔱 Shaman',
          desc: 'Earthbind, Poison Cleansing Totem, Spitfire Totem (kills >50% HP). Kill all totems immediately!',
        },
        {
          name: 'Sharkiss',
          kill: 'KILL 2ND',
          role: '🏹 Hunter',
          desc: 'Multitoss, Leeching Throw (drain HP+mana 12 sec), Summon pet (Lurker/Sporebat — CC or kill), Beast Within (+30% dmg)',
        },
        {
          name: 'Cardi B',
          kill: 'KILL 3RD',
          role: '🔮 Priestess',
          desc: 'Cyclone, Water Bolt Volley, Healing Wave, Tidal Surge. Can skip if needed.',
        },
        {
          name: 'Karathress',
          kill: '',
          role: '🗡 Big Melee',
          desc: 'Cataclysmic Bolt (50% HP hit on mana user), Sear Nova (fire dmg in melee range). Absorbs abilities from each slain Lord.',
        },
      ],
      tankNote:
        'Beefiest tank on Karathress + Sharkiss. One tank on Tidalvess + pet. One tank on Cardi B. On pull: Misdirects for each tank. Pull Cardi B far away with a Resto Druid + tank to outrange her heals.',
      tip: 'Fight ends when Karathress dies. Each Lord he kills grants him their bolded ability — expect Spitfire Totem after Tidalvess. 6-healing this fight is incredibly comfortable.',
    },
    {
      type: 'boss',
      color: 'teal',
      icon: '🌊',
      title: 'Boss 5 — Morogrim Tidewalker',
      setup:
        'Murloc add tanks only need 5.2% Crit Immune (mobs level 71). Gear for high threat. Paladins generate threat healing a life-tapping Warlock; rotate Trinket/Wings for each pack.',
      phases: [
        {
          name: 'Abilities',
          abilities: [
            {
              name: 'Tidal Wave',
              desc: 'Tank mechanic. Deals Frost damage and reduces attack speed.',
            },
            {
              name: 'Watery Grave ×4',
              desc: '4 simultaneous targets placed in a bubble — burst damage on pop + fall damage. (100–25% only.)',
            },
            {
              name: 'Earthquake',
              desc: 'Hits everyone for 4K. Murlocs spawn from left and right entrances simultaneously.',
            },
            {
              name: 'Globules (25–0%)',
              desc: 'No more Watery Grave below 25%. Bubbles chase and explode on contact with their assigned player only. KITE Morogrim as Globules approach.',
            },
          ],
        },
      ],
    },
    {
      type: 'boss',
      color: 'green',
      icon: '✨',
      title: 'Boss 6 — Lady Vashj ★ Final Boss ★',
      phases: [
        {
          name: 'Phase 1 — Boss (100–75%)',
          tip: "Healer split: 3 on boss tank, 2 raid healers for Multishot + Static Charge. P1 goes fast — don't over-spread.",
          abilities: [
            { name: 'Multishot', desc: 'Hits 8 targets for 2.4K. Unavoidable.' },
            {
              name: 'Shock Blast',
              desc: "8–9K instant damage to tank + 5-sec stun. MUST be Grounded by tank group's Shaman.",
            },
            {
              name: 'Entangle',
              desc: 'Physical root on melee — cannot be dispelled. BoF, PvP Trinket, Cloak, Shapeshift, BoP all work. Assign an Offspec Pally to spam Freedom on tank.',
            },
            {
              name: 'Static Charge',
              desc: 'Random target: 2K damage to them + anyone nearby every 2 sec for 12 sec. That player MUST move out of raid.',
            },
          ],
        },
        {
          name: 'Phase 2 — Add Phase (75–50%)',
          tip: 'Assign 4 smart ranged (pref. Hunters) to quadrants for Tainted Core duty. OT picks up core → throws to ranged → relay to pillar. Before deactivating FINAL pillar, confirm no new adds spawning (Bigwigs). Clear adds before going back to Vashj.',
          abilities: [
            {
              name: 'Enchanted Elementals',
              desc: 'Spawn at room edge, walk to Vashj granting stacking 5% damage buff. Ranged take these out immediately.',
            },
            {
              name: 'Tainted Elementals',
              desc: 'Stationary, spam Poison Bolt, despawn after 15 sec. On kill: loot Tainted Core — holding it prevents movement/casting (hot-potato to a pillar). Min 2 players needed per pillar.',
            },
            {
              name: 'Coilfang Elites',
              desc: 'Cleave + Hamstring. Tanked in the INNER circle. Melee focus these.',
            },
            {
              name: 'Coilfang Striders',
              desc: 'Pulse AoE Fear every 2 sec. Picked up by Shaman and kited with Frost Shock in the OUTER circle. Ranged kill these when near.',
            },
          ],
        },
        {
          name: 'Phase 3 — Sporebats (50–0%)',
          tip: "P3 is P1 + Poison. Same mechanics, just don't stand in pools. Predict, react, survive.",
          abilities: [
            {
              name: 'Poison Pools',
              desc: 'Sporebats throw poison on the ground — kills in ~2–3 sec. YOU CAN SEE IT COMING before it lands — move pre-emptively! Watch for Entangle + Poison combos.',
            },
          ],
        },
      ],
      macro: `/use Tainted Core
/y <------- TAINTED CORE TO: %t !!!
/s <------- TAINTED CORE TO: %t !!!
/script SendChatMessage("!!! YOU HAVE THE CORE !!!", "WHISPER", "Common", UnitName("target"));`,
    },
  ];

  const bossColors = {
    blue: {
      bg: 'bg-blue-950',
      border: 'border-blue-700',
      phase: 'text-blue-400',
      header: 'bg-blue-900/50',
    },
    teal: {
      bg: 'bg-teal-950',
      border: 'border-teal-700',
      phase: 'text-teal-400',
      header: 'bg-teal-900/50',
    },
    red: {
      bg: 'bg-red-950',
      border: 'border-red-700',
      phase: 'text-red-400',
      header: 'bg-red-900/50',
    },
    amber: {
      bg: 'bg-amber-950',
      border: 'border-amber-700',
      phase: 'text-amber-400',
      header: 'bg-amber-900/50',
    },
    green: {
      bg: 'bg-green-950',
      border: 'border-green-700',
      phase: 'text-green-400',
      header: 'bg-green-900/50',
    },
  };

  const filterSections = (sections: Section[]): Section[] => {
    if (!searchQuery) return sections;
    const query = searchQuery.toLowerCase();

    return sections.filter((section) => {
      if (section.title.toLowerCase().includes(query)) return true;

      if (section.type === 'trash') {
        return section.mobs.some(
          (mob) =>
            mob.name.toLowerCase().includes(query) ||
            mob.desc.toLowerCase().includes(query)
        );
      }

      if (section.type === 'council') {
        return section.lords.some(
          (lord) =>
            lord.name.toLowerCase().includes(query) ||
            lord.desc.toLowerCase().includes(query)
        );
      }

      if (section.type === 'boss') {
        return section.phases.some((phase) =>
          phase.abilities.some(
            (ab) =>
              ab.name.toLowerCase().includes(query) ||
              ab.desc.toLowerCase().includes(query)
          )
        );
      }

      return false;
    });
  };

  const filteredSections = filterSections(sections);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="text-center mb-10 pb-8 border-b border-slate-800">
          <p className="text-xs tracking-widest text-slate-500 uppercase mb-2">
            World of Warcraft TBC
          </p>
          <h1 className="text-3xl font-bold text-blue-400 tracking-wide mb-1">
            🌊 Serpentshrine Cavern
          </h1>
          <p className="text-sm text-slate-400 mb-4">Raid Cheat Sheet</p>
          <div className="flex gap-4 justify-center flex-wrap text-sm">
            <a
              href="https://wowhead.com/tbc/guide/serpentshrine-cavern-ssc"
              className="text-teal-400 underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              📖 WoWHead Guides
            </a>
            <a
              href="https://patreon.com/posts/t5-ssc-tk-sheet-157560241"
              className="text-teal-400 underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              🔗 Joardee&apos;s T5 Sheet
            </a>
          </div>
        </div>

        <div className="sticky top-0 z-20 bg-slate-950/90 backdrop-blur pb-4 mb-8">
          <input
            placeholder="Search mechanics, mobs, abilities..."
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 outline-none focus:border-teal-500 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredSections.map((section, i) => {
          if (section.type === 'trash') {
            return (
              <div key={i} className="mb-6">
                <h2 className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">
                  {section.icon} {section.title}
                </h2>
                <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
                  {section.mobs.map((mob, j) => (
                    <div
                      key={j}
                      className="flex flex-col sm:flex-row gap-2 sm:gap-3 px-4 py-2.5 border-b border-slate-800 last:border-b-0 cursor-pointer hover:bg-slate-800/50 transition-colors"
                      onClick={() =>
                        setSelectedItem({
                          title: mob.name,
                          content: mob.desc,
                          section: section.title,
                        })
                      }
                    >
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wide sm:min-w-[170px] sm:pt-0.5 shrink-0">
                        {mob.name}
                      </span>
                      <span className="text-sm text-slate-300">{mob.desc}</span>
                    </div>
                  ))}
                  {section.tip && (
                    <div className="px-4 py-2.5 bg-teal-950/40 border-t border-teal-900/40 text-sm text-teal-300">
                      💡 {section.tip}
                    </div>
                  )}
                </div>
              </div>
            );
          }

          if (section.type === 'council') {
            const colors = bossColors[section.color];
            return (
              <div key={i} className="mb-6">
                <h2
                  className={`text-xs font-semibold tracking-widest uppercase mb-2 ${colors.phase}`}
                >
                  {section.icon} {section.title}
                </h2>
                <div
                  className={`border rounded-lg overflow-hidden ${colors.border} ${colors.bg}`}
                >
                  {section.warning && (
                    <div className="px-4 py-2.5 bg-red-950/60 border-b border-red-800/50 text-sm text-red-300">
                      ⚠️ {section.warning}
                    </div>
                  )}
                  {section.lords.map((lord, j) => (
                    <div
                      key={j}
                      className="flex flex-col sm:flex-row gap-2 sm:gap-3 px-4 py-3 border-b border-amber-900/30 last:border-b-0 items-start cursor-pointer hover:bg-amber-900/20 transition-colors"
                      onClick={() =>
                        setSelectedItem({
                          title: lord.name,
                          content: `${lord.role}\n\n${lord.desc}`,
                          section: section.title,
                          color: 'amber',
                        })
                      }
                    >
                      <div className="sm:min-w-[140px] shrink-0">
                        <span className="text-xs font-mono text-amber-400 uppercase tracking-wide block">
                          {lord.name}
                        </span>
                        {lord.kill && (
                          <span className="text-[10px] bg-amber-900/60 text-amber-300 border border-amber-700/50 rounded px-1.5 py-0.5 mt-0.5 inline-block">
                            {lord.kill}
                          </span>
                        )}
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block mb-0.5">
                          {lord.role}
                        </span>
                        <span className="text-sm text-slate-300">
                          {lord.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="px-4 py-2.5 border-t border-amber-900/30">
                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                      Tank setup
                    </p>
                    <p className="text-sm text-slate-300">{section.tankNote}</p>
                  </div>
                  {section.tip && (
                    <div className="px-4 py-2.5 bg-teal-950/40 border-t border-teal-900/40 text-sm text-teal-300">
                      💡 {section.tip}
                    </div>
                  )}
                </div>
              </div>
            );
          }

          // Boss section
          const colors = bossColors[section.color];
          return (
            <div key={i} className="mb-6">
              <h2
                className={`text-xs font-semibold tracking-widest uppercase mb-2 ${colors.phase}`}
              >
                {section.icon} {section.title}
              </h2>
              <div
                className={`border rounded-lg overflow-hidden ${colors.border} ${colors.bg}`}
              >
                {section.warning && (
                  <div className="px-4 py-2.5 bg-red-950/60 border-b border-red-800/50 text-sm text-red-300">
                    ⚠️ {section.warning}
                  </div>
                )}
                {section.setup && (
                  <div className="px-4 py-2.5 border-b border-slate-700/40 text-sm text-slate-300">
                    <span className="text-xs text-slate-500 uppercase tracking-wide mr-2">
                      Setup
                    </span>
                    {section.setup}
                  </div>
                )}
                {section.phases?.map((phase, pi) => (
                  <div key={pi}>
                    <div
                      className={`px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase border-b border-slate-700/40 bg-black/20 ${colors.phase}`}
                    >
                      {phase.name}
                    </div>
                    {phase.abilities.map((ab, ai) => (
                      <div
                        key={ai}
                        className="flex flex-col sm:flex-row gap-2 sm:gap-3 px-4 py-2.5 border-b border-slate-700/30 items-start cursor-pointer hover:bg-slate-800/30 transition-colors"
                        onClick={() =>
                          setSelectedItem({
                            title: ab.name,
                            content: ab.desc,
                            section: `${section.title} - ${phase.name}`,
                            color: section.color,
                          })
                        }
                      >
                        <span
                          className={`text-xs font-mono uppercase tracking-wide sm:min-w-[170px] shrink-0 sm:pt-0.5 ${colors.phase}`}
                        >
                          {ab.name}
                        </span>
                        <span className="text-sm text-slate-300">
                          {ab.desc}
                        </span>
                      </div>
                    ))}
                    {phase.tip && (
                      <div className="px-4 py-2.5 bg-teal-950/40 border-t border-teal-900/40 text-sm text-teal-300">
                        💡 {phase.tip}
                      </div>
                    )}
                  </div>
                ))}
                {section.tip && (
                  <div className="px-4 py-2.5 bg-teal-950/40 border-t border-teal-900/40 text-sm text-teal-300">
                    💡 {section.tip}
                  </div>
                )}
                {section.macro && (
                  <div className="px-4 py-3 border-t border-slate-700/40">
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">
                      Tainted Core Macro
                    </p>
                    <pre className="bg-slate-950 border border-slate-800 rounded p-3 text-xs text-teal-400 overflow-x-auto whitespace-pre-wrap">
                      {section.macro}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        <p className="text-center text-slate-600 text-sm mt-10 pt-6 border-t border-slate-800">
          Good luck, adventurer. May your tanks hold threat and your healers not
          go OOM. 🌊
        </p>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className={`border rounded-2xl p-6 max-w-lg w-full ${
              selectedItem.color
                ? `${bossColors[selectedItem.color as keyof typeof bossColors].bg} ${bossColors[selectedItem.color as keyof typeof bossColors].border}`
                : 'bg-slate-900 border-slate-700'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`text-sm font-medium mb-2 ${
                selectedItem.color
                  ? bossColors[selectedItem.color as keyof typeof bossColors]
                      .phase
                  : 'text-teal-400'
              }`}
            >
              {selectedItem.section}
            </div>
            <h3 className="text-2xl font-bold mb-4">{selectedItem.title}</h3>
            <p className="text-slate-300 leading-relaxed mb-6 whitespace-pre-line">
              {selectedItem.content}
            </p>
            <button
              onClick={() => setSelectedItem(null)}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
