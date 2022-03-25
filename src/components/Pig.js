import React, { useState } from 'react';

const Pig = () => {
    const [pigSize, setPigSize] = useState(1);
    let burstSize = Math.floor(Math.random() * (20 - 5) * 5);
    const feedPig = () => {
        setPigSize(prevPigSize => prevPigSize + 1);
    }
    const restartGame = () => {
        burstSize = Math.floor(Math.random() * (20 - 5) * 5);
        setPigSize(1);
    }
  return (
    <>
        <span>{burstSize}</span>
        <span>{(pigSize >= burstSize) ? 'you lost' : pigSize}</span>
        <button onClick={feedPig}>Feed</button>
        <button onClick={restartGame}>Restart</button>
    </>
  );
};

export default Pig;