import React from "react";
import { connect } from "react-redux";
class DetailContainer extends React.Component {
    render() {
        return (
            <div>
                {console.log(
                    this.props.firstName[0],
                    this.props.lastName[0],
                    this.props.score[0]
                )}
                First name: {this.props.firstName[0] === undefined ? "" : this.props.firstName[0].firstName}<br/>
                Last name: {this.props.lastName[0] === undefined ? "" : this.props.lastName[0].lastName}<br/>
                Score: {this.props.score[0] === undefined ? "" : this.props.score[0].score}<br/>
            </div>
        )
    }
}
function mapStoreToData(store) {
    return {
        firstName: store.firstName,
        lastName: store.lastName,
        score: store.score
    }
}
export default connect(mapStoreToData)(DetailContainer)