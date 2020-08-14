import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import broadcastFirstName from "../actions/broadcastFirstName";
class FirstName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: ""
        }
    }
    setFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    addFirstName = () => {
        return { firstName: this.state.firstName }
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.setFirstName} />
                <button onClick={() => this.props.addDataToStore(this.addFirstName())}>Add</button>
            </div>
        )
    }
}
function mapStoreToProps(dispatch) {
    return bindActionCreators({
        addDataToStore: broadcastFirstName
    }, dispatch)
}
export default connect(null,mapStoreToProps)(FirstName)