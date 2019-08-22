import React from 'react';
import Button from './Button';
import ButtonHook from './ButtonHook';
import DataLoader from './DataLoader';
import DataLoaderHook from './DataLoaderHook';
import EfectoHook from './EfectoHook';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <Button/>
      <ButtonHook/>
      <EfectoHook/>    
      <Post/>  
      <div className="row">
        <DataLoader/>
        <DataLoaderHook
          render={
            data => {
              return (
                <div className="card col-6">
                  <div className="card-header"><h1>HOOK</h1></div>
                  <div className="card-body">
                      <ul>
                          {data.map(el=>(
                              <li key={el.id}>{el.title}</li>
                          ))}
                      </ul>
                  </div>
                </div>   
              )
            }
          }
        />
      </div>
    </div>
  );
}

export default App;
