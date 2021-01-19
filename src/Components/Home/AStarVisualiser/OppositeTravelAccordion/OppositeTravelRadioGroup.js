import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class OppositeTravelRadioGroup extends Component {
    handleChange(e) {
        if (e.target.value === "true") {
            this.props.setOppositeTravelAllowed(true);
        } else {
            this.props.setOppositeTravelAllowed(false);
        }
    }

    render() {
        return (
            <div style={{marginTop: -10}}>
                <RadioGroup
                    aria-label="opposite"
                    name="opposite1"
                    value={this.props.oppositeTravelAllowed}
                    onChange={(e) => this.handleChange(e)}
                >
                    <FormControlLabel
                        className="radio-btn-long"
                        value={false}
                        control={<Radio />}
                        label="Do Not Allow Diagonal"
                    />
                    <FormControlLabel
                        className="radio-btn-long"
                        value={true}
                        control={<Radio />}
                        label="Allow Diagonal"
                    />
                </RadioGroup>
            </div>
        )
    }
}


export default OppositeTravelRadioGroup;
