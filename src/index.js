import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { run } from './elo.js'
import scores from './scores.json'

const ranking = run({}, scores.fifa)

ReactDOM.render(<App ranking={ranking}/>, document.getElementById('root'));
