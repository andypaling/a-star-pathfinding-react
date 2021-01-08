import React, {Component} from 'react';
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import OppositeTravelWhatsThisModalTrigger from "./OppositeTravelWhatsThisModalTrigger";


class OppositeTravelSwitch extends Component {
    render() {
        return (
            <div style={{marginTop: 15}}>
                <BootstrapSwitchButton
                    checked={this.props.checked}
                    onlabel={"Adjacent Travel"}
                    offlabel={"No Adjacent Travel (Default)"}
                    onstyle={"secondary"}
                    width={280}
                    onChange={(checked) => {this.props.changeAllowedTravelValue(checked)}}
                />
               <OppositeTravelWhatsThisModalTrigger />
            </div>
        )
    }
}


export default OppositeTravelSwitch;
