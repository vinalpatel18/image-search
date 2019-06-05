import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App'


ReactDom.render(
    <div className='index-ui'>
        <App/>
    </div>,
    document.querySelector('#root')
)
