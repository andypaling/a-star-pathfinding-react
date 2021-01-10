import React, { Component, Fragment } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class HeuristicRadioGroup extends Component {
    handleChange(e) {
        this.props.setValue(e.target.value);
    }

    render() {
        return (
            <Fragment>
                <RadioGroup aria-label="heuristic" name="heuristic1" value={this.props.value} onChange={(e) => this.handleChange(e)}>
                    <FormControlLabel value="manhattan" control={<Radio />} label="Manhattan" />
                    <FormControlLabel value="euclidean" control={<Radio />} label="Euclidean" />
                    <FormControlLabel value="octile" control={<Radio />} label="Octile" />
                    <FormControlLabel value="chebyshev" control={<Radio />} label="Chebyshev" />
                </RadioGroup>
            </Fragment>
        )
    }
}


export default HeuristicRadioGroup;
