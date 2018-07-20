import React, { Component } from 'react';

const PAGE_TITLE = 'FIFA 18 + Arpad Elo'

function RankingList({ list }) {
  return (
    <table className="table table-hover table-borderless">
      <tbody>
        {list.map(rank => (
          <tr key={rank.key}>
            <td className="p-4 text-right" style={{ width: "50%" }}>
              <h4 className="m-0"><strong>{rank.score}</strong></h4>
            </td>
            <td className="p-4 text-left" style={{ width: "50%" }}>
              <h4 className="m-0">{rank.key}</h4>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function ScoresList({ list }) {
  return (
    <table className="table table-hover table-borderless">
      <tbody>
        {list.map((score, index) => (
          <tr key={index}>
            <td className="p-3 text-right">
              <h6 className="m-0">{score[0]}</h6>
            </td>
            <td className="p-3" style={{ width: "1px", whiteSpace: "nowrap" }}>
              <h6 className="m-0"><strong>{`${score[1]} - ${score[2]}`}</strong></h6>
            </td>
            <td className="p-3 text-left">
              <h6 className="m-0">{score[3]}</h6>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currConfKey: 0
    }
    this.onGameSelect = this.onGameSelect.bind(this)
  }
  onGameSelect(event) {
    event.preventDefault()
    this.setState({
      currConfKey: event.target.dataset.key
    })
  }
  render() {
    const { configs } = this.props
    const currConf = configs[this.state.currConfKey]
    return (
      <div className="container">
        <header className="py-3 mb-5 text-center">
          <h1 className="mb-0">{PAGE_TITLE}</h1>
        </header>
        <main>
          <div className="mt-5">
            <h3 className="text-center py-3 mb-4">Ranking</h3>
            <RankingList list={currConf['ranking']} />
          </div>
          <div className="mt-5">
            <h3 className="text-center py-3 mb-4">Scores</h3>
            <ScoresList list={currConf['scores']} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
