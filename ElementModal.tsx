import React from 'react'
import { Element } from '../types'

const ElementModal: React.FC<{element: Element | null; onClose: ()=>void}> = ({element, onClose}) => {
  if(!element) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-[min(900px,95%)] bg-[#07102a] rounded-2xl p-6 shadow-neon-strong border border-white/6">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h2 className="text-3xl font-bold">{element.name} <span className="text-xl opacity-60">({element.symbol})</span></h2>
            <p className="text-sm opacity-70">Atomic Number: {element.number} • Mass: {element.mass} • Block: {element.block}</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs opacity-60">Electron Configuration</h4>
                <p className="mt-1 font-mono">{element.electronConfig ?? '—'}</p>
              </div>
              <div>
                <h4 className="text-xs opacity-60">Valence</h4>
                <p className="mt-1">{element.valence ?? '—'}</p>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-lg opacity-70">Group {element.group ?? '—'}</div>
            <div className="text-lg font-semibold mt-2">Period {element.period}</div>
            <button onClick={onClose} className="mt-4 px-3 py-1 rounded-md bg-white/5">Close</button>
          </div>
        </div>

        <div className="mt-6 border-t border-white/6 pt-4 flex gap-4">
          <div className="flex-1">
            <h5 className="text-sm opacity-60">Category</h5>
            <p className="mt-2">{element.category ?? '—'}</p>
          </div>
          <div className="flex-1">
            <h5 className="text-sm opacity-60">Discovered/Notes</h5>
            <p className="mt-2">{element.yearDiscovered ?? element.summary ?? '—'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElementModal
