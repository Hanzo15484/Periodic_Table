import React from 'react'

type Props = {
  block: string | 'ALL'
  onBlockChange: (b: any) => void
  query: string
  onQueryChange: (s: string) => void
}

const blocks = ['ALL','A','B','C','D','E','F']

const Controls: React.FC<Props> = ({ block, onBlockChange, query, onQueryChange }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between bg-panel/50 rounded-xl p-4 shadow-soft-glow">
      <div className="flex gap-2 items-center">
        {blocks.map(b => (
          <button
            key={b}
            onClick={() => onBlockChange(b)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              block === b ? 'bg-accent text-black shadow-lg' : 'bg-white/5 hover:bg-white/7'
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      <div className="flex gap-3 items-center w-full md:w-auto">
        <input
          value={query}
          onChange={(e)=>onQueryChange(e.target.value)}
          placeholder="Search by name, symbol, or number..."
          className="flex-1 md:flex-none w-full md:w-[420px] bg-transparent border border-white/6 rounded-lg px-4 py-2 outline-none placeholder:opacity-50"
        />
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent to-[#7ee7ff] text-black font-semibold shadow-neon-strong">
          Search
        </button>
      </div>
    </div>
  )
}

export default Controls
