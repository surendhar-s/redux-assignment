import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import broadcastLastName from '../actions/broadcastLastName'
class LastName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lastName: ""
        }
    }
    setLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    addLastName = () => {
        return { lastName: this.state.lastName }
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.setLastName} />
                <button onClick={() => this.props.addDataToStore(this.addLastName())}>Add</button>
            </div>
        )
    }
}
function mapStoreToProps(dispatch) {
    return bindActionCreators({
        addDataToStore: broadcastLastName
    }, dispatch)
}
export default connect(null,mapStoreToProps)(LastName)