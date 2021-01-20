import React, { Fragment } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function HeuristicRadioGroup({ value, setValue }) {
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <Fragment>
            <RadioGroup
                aria-label="heuristic"
                name="heuristic1"
                value={value}
                onChange={(e) => handleChange(e)}
            >
                <FormControlLabel
                    value="manhattan"
                    control={<Radio />}
                    label="Manhattan"
                />
                <FormControlLabel
                    value="euclidean"
                    control={<Radio />}
                    label="Euclidean"
                />
                <FormControlLabel
                    value="chebyshev"
                    control={<Radio />}
                    label="Chebyshev"
                />
            </RadioGroup>
        </Fragment>
    )
}

export default HeuristicRadioGroup;
