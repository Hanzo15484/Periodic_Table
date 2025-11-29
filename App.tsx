import React, { useEffect, useMemo, useState } from 'react'
import elementsData from './data/elements.sample.json'
import { Element } from './types'
import PeriodicGrid from './components/PeriodicGrid'
import Controls from './components/Controls'
import ElementModal from './components/ElementModal'

const App: React.FC = () => {
  const [elements, setElements] = useState<Element[]>([])
  const [filterBlock, setFilterBlock] = useState<'ALL' | string>('ALL')
  const [layout, setLayout] = useState<'group' | 'period'>('group')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Element | null>(null)

  useEffect(() => {
    // In real app replace with fetch('/data/elements.json') if using full 1-118 file.
    setElements(elementsData as Element[])
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return elements.filter(el => {
      if (filterBlock !== 'ALL' && el.block.toUpperCase() !== filterBlock) return false
      if (!q) return true
      return (
        el.name.toLowerCase().includes(q) ||
        el.symbol.toLowerCase().includes(q) ||
        String(el.number).includes(q)
      )
    })
  }, [elements, filterBlock, query])

  return (
    <div className="min-h-screen p-6 lg:p-12 relative">
      <div id="grain" />
      <header className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight"
                style={{textShadow: '0 8px 30px rgba(0,0,0,0.8)'}}>
              Modern Periodic Table
            </h1>
            <p className="text-sm opacity-70">Arranged by group/period & block — cinematic UI, animated VFX</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-lg bg-gradient-to-br from-[#0f1724] to-[#0b1220] shadow-neon-strong">
              <span className="text-xs opacity-80 mr-2">Layout</span>
              <button
                className={`px-3 py-1 rounded-md text-sm mr-1 ${layout === 'group' ? 'bg-accent/90 text-black' : 'bg-white/5'}`}
                onClick={() => setLayout('group')}
              >
                Groups
              </button>
              <button
                className={`px-3 py-1 rounded-md text-sm ${layout === 'period' ? 'bg-accent/90 text-black' : 'bg-white/5'}`}
                onClick={() => setLayout('period')}
              >
                Periods
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid gap-8">
        <Controls
          block={filterBlock}
          onBlockChange={setFilterBlock}
          query={query}
          onQueryChange={setQuery}
        />

        <PeriodicGrid
          elements={filtered}
          layout={layout}
          onSelect={setSelected}
        />
      </main>

      <footer className="max-w-6xl mx-auto mt-8 text-xs opacity-60">
        <p>Built with React + TypeScript + Tailwind — cinematic animations & VFX</p>
      </footer>

      <ElementModal element={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

export default App
