import React from "react";
import { withRouter } from 'react-router-dom';

class RedirectToHome extends React.Component {
    routingFunction = () => {
        this.props.history.push({
            pathname: `/`
        });
    }

}
export default withRouter(RedirectToHome);