import React, { Component } from 'react';
import arpad from './arpadelo.jpg'

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

function ExternalLink({ href, children }) {
  return (
    <a rel="noopener noreferrer" target="_blank" href={href}>{children}</a>
  )
}

class ExplorableEloExplanation extends Component {
  render() {
    return []
  }
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
    // color scheme for sections
    // https://coolors.co/ffe3d1-ffd4d1-ffc1c7-f9b8cc-ffc6e8
    const { configs } = this.props
    const currConf = configs[this.state.currConfKey]
    return (
      <div>
        <header className="py-5 text-center" style={{ backgroundColor: "#fff" }}>
          <h1 className="">PagerDuty's<br/><span>FIFA 18</span><br/>Elo Board</h1>
        </header>
        <main>
          <section className="pb-5" style={{ backgroundColor: "#ffe3d1" }}>
            <h2 className="text-center py-4 mb-5 subtitle">ranking</h2>
            <RankingList list={currConf['ranking']} />
          </section>
          <section className="pb-5" style={{ backgroundColor: "#ffd4d1" }}>
            <h2 className="text-center py-4 mb-5 subtitle">about the inventor and namesake</h2>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <img className="w-100 rounded-circle border-translucent" alt="Arpad Elo's face" src={arpad} />
                </div>
                <div className="col-md-6">
                  <h5><strong>Arpad Emrick Elo</strong></h5>
                  <p><em>1903-1992</em></p>
                  <p>Born in Egyházaskesző, Austro-Hungarian Empire (now located in modern-day Hungary), Arpad was the inventor of the Elo ranking system, a physics professor at Marquette University in Wisconsin, a master-level Chess player, a nine-time champion or co-champion of Wisconsin between 1935 and 1961, and a World Chess Hall of Fame inductee (circa 1988).</p>
                  <p>If you're curious, check out the Wikipedia pages for the <ExternalLink href="https://en.wikipedia.org/wiki/Elo_rating_system">Elo ranking system</ExternalLink> or <ExternalLink href="https://en.wikipedia.org/wiki/Arpad_Elo">Arpad Elo</ExternalLink> himself to learn more.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="pb-5" style={{ backgroundColor: "#ffc1c7" }}>
            <h2 className="text-center py-4 mb-5 subtitle">how the original system works</h2>
            <ExplorableEloExplanation />
            <div className="container text-center">
              <p>work in progress...</p>
            </div>
          </section>
          <section className="pb-5" style={{ backgroundColor: "#f9b8cc" }}>
            <h2 className="text-center py-4 mb-5 subtitle">the bashir modification</h2>
            <div className="container text-center">
              <p>work in progress...</p>
            </div>
          </section>
          <section className="pb-5" style={{ backgroundColor: "#ffc6e8" }}>
            <h2 className="text-center py-4 mb-5 subtitle">scores</h2>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5 text-center">
                  <p>To add more scores, <ExternalLink href="https://github.com/PagerDuty/elo/edit/master/src/scores.json">edit the JSON file in GitHub</ExternalLink>. Merging your changes to master will automatically publish a new build (via Netlify).</p>
                </div>
              </div>
            </div>
            <ScoresList list={currConf['scores']} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
