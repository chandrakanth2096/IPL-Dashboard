import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {latestList: {}, recentList: [], ID: '', isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const team = await response.json()

    const updatedDetails = {
      teamBannerUrl: team.team_banner_url,
      latestMatchDetails: team.latest_match_details,
      recentMatches: team.recent_matches,
    }
    const {latestMatchDetails, recentMatches, teamBannerUrl} = updatedDetails

    const latestMatch = {
      id: latestMatchDetails.id,
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
      teamBannerUrl,
    }

    const recentMatch = recentMatches.map(each => ({
      id: each.id,
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      latestList: latestMatch,
      recentList: recentMatch,
      ID: id,
      isLoading: false,
    })
  }

  render() {
    const {latestList, recentList, ID, isLoading} = this.state
    let bgColor

    if (ID === 'DC') {
      bgColor = 'DC'
    } else if (ID === 'SH') {
      bgColor = 'SRH'
    } else if (ID === 'MI') {
      bgColor = 'MI'
    } else if (ID === 'RR') {
      bgColor = 'RR'
    } else if (ID === 'CSK') {
      bgColor = 'CSK'
    } else if (ID === 'KXP') {
      bgColor = 'KXIP'
    } else if (ID === 'KKR') {
      bgColor = 'KKR'
    } else if (ID === 'RCB') {
      bgColor = 'RCB'
    }

    return (
      <div className={`team-matches-page ${bgColor}`}>
        {isLoading ? (
          <div testId="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-section">
            <img
              className="banner"
              src={latestList.teamBannerUrl}
              alt="team banner"
            />
            <p className="heading">Latest Matches</p>
            <div className="latest-matches-container">
              <LatestMatch latestMatch={latestList} key={latestList.id} />
            </div>
            <ul className="recent-matches-container">
              {recentList.map(each => (
                <MatchCard recentMatch={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
