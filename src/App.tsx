import React, { useState } from 'react';
import Item from './Item';

const App = () => {
  const [list, setList] = useState<any>([]);
  const [timestamp, setTimestamp] = useState<any>();
  console.log(list)
  
  const onClick = () => {
    list.push(Date.now());
    setList(list)
    setTimestamp(Date.now())
  };

  return (
    <div>
      <button onClick={onClick as any}>add</button>
      {timestamp && <div>last item added was: {timestamp}</div>}
      <ol>
        {list.map((item, index) => <Item key={index} value={item} color={item % 2 ? 'green' : 'yellow'} />)}
      </ol>
    </div>
  );
}

export default App;
