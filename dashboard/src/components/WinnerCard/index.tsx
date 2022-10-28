import { Medal, Trophy, VideoCamera } from 'phosphor-react';
import React from 'react';

type Winner = {
  name: string
  votes: number
  position: number
}

export function WinnerCard({ name, position, votes }: Winner) {
  const colorName = position === 1 ? 'DAA520' : (position === 2 ? 'C0C0C0' : 'CD7F32');

  return (
    <div className="justify-between bg-gray-900 rounded-tl-md rounded-bl-md px-2 py-4 text-base font-normal text-gray-400 flex items-center flex-col flex-wrap">
      <Trophy size={96} weight='bold' color={`#${colorName}`} />
      <div className="flex flex-col text-center">
        <span>{name}</span>
        <span>Número de votos: {votes}</span>

      </div>
    </div >
  )
}