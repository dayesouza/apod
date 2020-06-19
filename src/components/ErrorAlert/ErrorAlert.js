import React from 'react';

export default function ErrorAlert(props) {
  return (
    <div>
      Error
      <button onClick={props.tryAgain}>Try again</button>
      <button onClick={window.location.reload()}>Go Back</button>
    </div>
  )
}