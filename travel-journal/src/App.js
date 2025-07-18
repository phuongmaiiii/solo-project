import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import data from './data';
function App() {
  const elements = data.map((item) => {
    return (
      <Body 
      key={item.id}
      item={item}
      />
    )
  })
  return (
    <div>
      <Header />
      <main className="container">
        {elements}
      </main>
    </div>
  );
}

export default App;
