import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import broadcastScore from "../actions/broadcastScore"
class Score extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0
        }
    }
    addScore = () => {
        this.setState({
            score: this.state.score + 1
        })
        return { score: this.state.score }
    }
    render() {
        return (
            <div>
                Score:&nbsp;{this.state.score}&nbsp;
                <button onClick={() => this.props.addDataToStore(this.addScore())}>+</button>
            </div>
        )
    }
}
function mapData(dispatch) {
    return bindActionCreators({
        addDataToStore: broadcastScore
    }, dispatch)
}
export default connect(null,mapData)(Score)