import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = recentMatch

  const isWon = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="match-card">
      <div className="box">
        <img
          className="recent-logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="recent-team-name">{competingTeam}</p>
        <p className="recent-result">{result}</p>
        <p className={isWon}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
