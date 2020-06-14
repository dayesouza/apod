import React from 'react';
import './Video.scss'

export default function Video(props) {
  return (
    <iframe
      title="space-video"
      src={props.url}
      frameBorder="0"
      allow="encrypted-media"
      allowFullScreen
      className="video"
    />
  )
}