import React from 'react'
import { Element } from '../types'
import ElementTile from './ElementTile'

type Props = {
  elements: Element[]
  layout: 'group' | 'period'
  onSelect: (el: Element) => void
}

const PeriodicGrid: React.FC<Props> = ({ elements, layout, onSelect }) => {
  // In group layout we show group columns (1..18), periods stacked; in period layout show periods (1..7)
  const groups = Array.from({length:18}, (_,i)=>i+1)
  const periods = Array.from({length:7}, (_,i)=>i+1)

  return (
    <div className="bg-panel/50 p-4 rounded-2xl shadow-soft-glow card-shine">
      {layout === 'group' ? (
        <div className="grid grid-cols-18 gap-3 auto-rows-fr">
          {/* For responsive, we'll collapse to 6 columns on small screens using CSS below */}
          <div className="col-span-full mb-2 text-xs opacity-60">Group layout — columns: 1..18</div>
          {groups.map(g => (
            <div key={g} className="space-y-3">
              <h4 className="text-sm font-semibold text-center">{g}</h4>
              <div className="flex flex-col gap-3">
                {elements.filter(el=>el.group===g).sort((a,b)=>a.number-b.number).map(el=>{
                  return <ElementTile key={el.number} element={el} onClick={()=>onSelect(el)} />
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="mb-3 text-xs opacity-60">Period layout — rows: 1..7</div>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {periods.map(p => (
              <div key={p} className="p-3 rounded-lg bg-white/2">
                <h4 className="font-semibold mb-2">Period {p}</h4>
                <div className="grid grid-cols-3 gap-3">
                  {elements.filter(el=>el.period===p).sort((a,b)=>a.number-b.number).map(el=>{
                    return <ElementTile key={el.number} element={el} onClick={()=>onSelect(el)} />
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PeriodicGrid
