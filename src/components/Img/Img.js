import React from 'react';
import './Img.scss';

export default function Img(props) {
  return (
    <img
      src={props.url}
      alt={props.title}
      className="photo"
    />
  )
}