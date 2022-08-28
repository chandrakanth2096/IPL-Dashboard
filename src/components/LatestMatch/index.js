import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch

  return (
    <div className="latest-matches">
      <div className="names-section">
        <div className="all-names">
          <p className="team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="text">{venue}</p>
          <p className="text">{result}</p>
        </div>
        <img
          className="logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr className="line" />

      <div className="innings">
        <p className="text">First Innings</p>
        <p className="text2">{firstInnings}</p>
        <p className="text">Second Innings</p>
        <p className="text2">{secondInnings}</p>
        <p className="text">Man Of The Match</p>
        <p className="text2">{manOfTheMatch}</p>
        <p className="text">Umpires</p>
        <p className="text2">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
