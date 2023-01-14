import React from 'react';
import './style.css';

export type CardProps = {
  name: string;
  time: string;
}

export function Card(props: CardProps) { // (props)
  return (
    <div className='card'>
      <strong>{ props.name }</strong>
      <small>{ props.time }</small>
    </div>
  )
}