import React, { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { playersState } from '../recoil/playersState'; // Update the path accordingly
import { Button, Container } from './style';

function PlayerForm() {
  const [newPlayer, setNewPlayer] = useState('');
  const [players, setPlayers] = useRecoilState(playersState);
  const [gameStarted, setGameStarted] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (event) => { 
    setNewPlayer(event.target.value);
  };

  const handleAddPlayer = () => {
    if (newPlayer.trim() !== '') {
      setPlayers(state => [...state, { name: newPlayer, role: '' }]);
      setNewPlayer('');
      setFocused(true);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddPlayer();
    }
  };

  const handleDistributeRoles = () => {
    const updatedPlayers = players.map(player => {
      if (!player.role) {
        const role = Math.random() < 0.5 ? 'Civile' : 'Undercover';
        return { ...player, role };
      }
      return player;
    });
    setPlayers(state => updatedPlayers);
    setGameStarted(true);
  };

  return (
    <Container>
      <h2>Undercover Game</h2>
      <div>
        <input
          type="text"
          placeholder="Enter player name"
          value={newPlayer}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          ref={inputRef}
          autoFocus={focused}
        />
        <Button onClick={handleAddPlayer}>Add</Button>
        <Button onClick={handleDistributeRoles} disabled={players.length === 0}>
          Distribute Roles
        </Button>
      </div>
      {gameStarted && players.length > 0 && (
        <div>
          <h3>Player Roles:</h3>
          <ul>
            {players.map(player => (
              <li key={player.name}>
                {player.name}: {player.role}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
}

export default PlayerForm;
