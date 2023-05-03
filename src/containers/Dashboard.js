import { connect } from 'react-redux'

import Dashboard from '../components/Dashboard'

// Map the global state of cars to props

const mapStateToProps = (state) => {
    //returns an object that matches the key in state.js
    return {
        cars: state.cars,
        user: state.user
    }
}

// Connects the redux container to the Home component
export default connect(mapStateToProps)(Dashboard);