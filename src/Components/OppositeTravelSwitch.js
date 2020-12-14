import React, {Component} from 'react';
import BootstrapSwitchButton from "bootstrap-switch-button-react";


class OppositeTravelSwitch extends Component {
    render() {
        return (
            <div style={{marginTop: 15}}>
            <BootstrapSwitchButton
                checked={this.props.checked}
                onlabel={"Allow Adjacent Travel"}
                offlabel={"Do Not Allow Adjacent Travel (Default)"}
                onstyle={"secondary"}
                width={400}
                onChange={(checked) => {this.props.changeAllowedTravelValue(checked)}}
            />
            </div>
       )
    }
}


export default OppositeTravelSwitch;
