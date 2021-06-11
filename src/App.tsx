import { useState } from 'react';
import { v4 } from 'uuid';

import Item from './Item';

/** @todo this component should add items to the list when the button is clicked, but it isn't working */

const App = () => {
  const [list, setList] = useState<string[]>([]);
  console.log(list)
  
  const onClick = () => {
    const id = v4();
    list.push(id);
    setList(list);
  };

  return (
    <div>
      <button data-testid="btn" onClick={onClick} style={{ width: '100%', height: 30 }}>Add item</button>
      <ul>
        {list.map((id, index) => <Item key={index} value={id} />)}
      </ul>
    </div>
  );
}

export default App;
