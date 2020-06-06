import React from 'react';
import { Provider } from './Store/Provider';
import Counter from './components/Counter';
import Card from './components/Card/newCard';


function App () {
  return (
    <div >
       <Provider>
         <>
          <Counter/>
          <Card/>
         </>
      </Provider>
    </div>
  );
}

export default App;
