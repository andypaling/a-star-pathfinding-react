import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function OppositeTravelRadioGroup({ oppositeTravelAllowed, setOppositeTravelAllowed }) {
    const handleChange = (e) => {
        if (e.target.value === "true") {
            setOppositeTravelAllowed(true);
        } else {
            setOppositeTravelAllowed(false);
        }
    }

    return (
        <div style={{marginTop: -10}}>
            <RadioGroup
                aria-label="opposite"
                name="opposite1"
                value={oppositeTravelAllowed}
                onChange={(e) => handleChange(e)}
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

export default OppositeTravelRadioGroup;
