import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { run } from './elo.js'
import scores from './scores.json'

const config = {
  defaultRanking: 2000,
  kfactors: {
    "0": 28,
    "0.5": 32,
    "1": 36
  }
}

const configs = Object.keys(scores).map((key) => {
  const rankingMap = run({}, scores[key], config)
  return {
    key,
    scores: scores[key],
    ranking: Object.keys(rankingMap)
      .map(key => ({ key, score: rankingMap[key] }))
      .sort((a, b) => b.score - a.score)
  }
})

ReactDOM.render(<App configs={configs} />, document.getElementById('root'));
