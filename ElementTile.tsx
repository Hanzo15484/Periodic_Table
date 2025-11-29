import React from 'react'
import { Element } from '../types'

const colorForCategory = (c?: string) => {
  if(!c) return 'bg-white/5'
  if (c.toLowerCase().includes('noble')) return 'bg-[#2b3340]'
  if (c.toLowerCase().includes('halogen')) return 'bg-[#4e8cff]'
  if (c.toLowerCase().includes('metal')) return 'bg-[#d4af37]/40'
  if (c.toLowerCase().includes('metalloid')) return 'bg-[#9b6cff]/40'
  if (c.toLowerCase().includes('nonmetal')) return 'bg-[#7ee7ff]/30'
  return 'bg-white/5'
}

const ElementTile: React.FC<{element: Element; onClick: ()=>void}> = ({element, onClick}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative rounded-lg p-3 w-28 text-left transform transition shadow-neon-strong hover:scale-105 hover:-translate-y-1 ${colorForCategory(element.category)} `}
      title={`${element.number} • ${element.name}`}
      aria-label={`${element.name} element card`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs opacity-70">#{element.number}</div>
          <div className="text-2xl font-bold tracking-tight mt-1">{element.symbol}</div>
        </div>
        <div className="text-right">
          <div className="text-xs opacity-60">{element.category ?? ''}</div>
          <div className="text-sm font-medium mt-1">{element.mass}</div>
        </div>
      </div>
      <div className="mt-3 text-sm opacity-80">{element.name}</div>

      {/* visual FX: halo & glow */}
      <span className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-30 transition pointer-events-none" style={{
        boxShadow: '0 20px 40px rgba(155,108,255,0.12), inset 0 1px 0 rgba(255,255,255,0.02)',
        mixBlendMode: 'screen'
      }} />

      <div className="absolute bottom-2 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-40 rounded" />
    </button>
  )
}

export default ElementTile
