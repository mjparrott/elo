import React, { Component } from 'react';

function RankingList({ list }) {
  return (
    <table className="table table-borderless mb-3" style={{ maxWidth: "1px", margin: "auto" }}>
      <tbody>
        {list.map(rank => (
          <tr key={rank.key}>
            <td className="p-3 text-right" style={{ width: "50%" }}>
              <h4 className="m-0"><strong>{rank.score}</strong></h4>
            </td>
            <td className="p-3 text-left" style={{ width: "50%" }}>
              <h4 className="m-0 budgies">{rank.key}</h4>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function ScoresList({ list }) {
  return (
    <table className="table table-borderless mb-3">
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
      <div>
        <header className="py-5 text-center" style={{ backgroundColor: "#F7F7F7" }}>
          <h1 className="my-5">PagerDuty's<br/>FIFA 18<br/>Elo Board</h1>
        </header>
        <main>
          <div className="pb-5" style={{ backgroundColor: "#ffe5d9" }}>
            <h2 className="text-center py-4 mb-5 subtitle">Ranking</h2>
            <RankingList list={currConf['ranking']} />
          </div>
          <div className="pb-5" style={{ backgroundColor: "#ffcad4" }}>
            <h2 className="text-center py-4 mb-5 subtitle">Scores</h2>
            <ScoresList list={currConf['scores']} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
