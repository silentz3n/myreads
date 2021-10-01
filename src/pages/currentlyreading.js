import React from 'react';
import Book from '../components/Books/Book'

function CurrentlyReading() {
  return(
    <div>
      <Book estante="currentlyReading"/>
    </div>
  )
}

export default CurrentlyReading;