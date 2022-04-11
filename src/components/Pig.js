import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';

const Pig = () => {
    const [pigSize, setPigSize] = useState(1);
    const [burstSize, setBurstSize] = useState(Math.floor(Math.random() * (10 - 5) + 5));
    const feedPig = () => {
        setPigSize(prevPigSize => prevPigSize + 1);
    }
    const restartGame = () => {
        setBurstSize(prevBurstSize => prevBurstSize - prevBurstSize + Math.floor(Math.random() * (10 - 5) + 5));
        setPigSize(1);
    }
  return (
    <>
        <span>Burst Size: {burstSize}</span>
        <span>Pig Size: {(pigSize >= burstSize) ? 'you lost' : pigSize}</span>
        <Button 
          m='3'
          colorScheme={'red'} 
        onClick={feedPig}>
          Feed
        </Button>
        <Button
          onClick={restartGame}
          colorScheme={'red'}
        >Restart</Button>
    </>
  );
};

export default Pig;