import React, { useState } from 'react';

const Search = () => {
  const [text, setText] = useState('');

  return (
    <div className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search character'
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Search;
