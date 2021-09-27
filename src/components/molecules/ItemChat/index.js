import React from 'react';
import IsMe from '../InputChat/IsMe';
import Other from '../InputChat/Other';

const ItemChat = ({isMe, text, time, photo}) => {
  if (isMe) {
    return <IsMe text={text} time={time} />;
  }
  return <Other text={text} time={time} photo={photo} />;
};

export default ItemChat;
