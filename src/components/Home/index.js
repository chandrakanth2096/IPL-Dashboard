import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const allTeams = await response.json()
    const updatedAllTeams = allTeams.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updatedAllTeams, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="home-section">
        <div className="heading-section">
          <img
            className="player"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testId="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teams-list">
            {teamsList.map(each => (
              <TeamCard eachTeam={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
