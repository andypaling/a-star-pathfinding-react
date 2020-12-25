import React, {Component} from 'react';
import BootstrapSwitchButton from "bootstrap-switch-button-react";


class OppositeTravelSwitch extends Component {
    render() {
        return (
            <div style={{marginTop: 15}}>
                <BootstrapSwitchButton
                    checked={this.props.checked}
                    onlabel={"Adjacent Travel"}
                    offlabel={"No Adjacent Travel (Default)"}
                    onstyle={"secondary"}
                    width={300}
                    onChange={(checked) => {this.props.changeAllowedTravelValue(checked)}}
                />
            </div>
        )
    }
}


export default OppositeTravelSwitch;
