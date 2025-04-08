//console.log('This is react rendering script.')
import React from 'react';
import {createRoot} from 'react-dom/client';

const App = () =>{
    //return React.createElement('h1', null, 'this is a rect script');
    return <h1>this is a rect script</h1>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)
//root.render(React.createElement(App, null));