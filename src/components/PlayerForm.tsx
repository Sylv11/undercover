import React, { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { playersState } from '../recoil/playersState'; // Update the path accordingly
import { Button, Container, Input } from './style';
import { Column, Row } from '../style';
import PlayerPlaceholder from './PlayerPlaceholder';

function PlayerForm() {
  const [newPlayer, setNewPlayer] = useState('');
  const [players, setPlayers] = useRecoilState(playersState);
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



  return (
    <Container>
      <Row>
        <Input
          type="text"
          placeholder="Enter player name"
          value={newPlayer}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          ref={inputRef}
          autoFocus={focused}
        />
        <Button onClick={handleAddPlayer}>Add</Button>
  
      </Row>

      {players.length > 0 &&  (
        <Column>
        {players.map(player => (
                               <PlayerPlaceholder player={player.name} />
  
              ))}
        </Column>
      )}

    </Container>
  );
}

export default PlayerForm;
