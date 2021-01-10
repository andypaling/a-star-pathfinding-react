import React, { Component } from 'react';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import HeuristicRadioGroup from "./HeuristicRadioGroup";


class ChangeHeuristicAccordion extends Component {
    render() {
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Change Heuristic
                </AccordionSummary>
                <AccordionDetails>
                    <HeuristicRadioGroup
                        value={this.props.value}
                        setValue={(newValue) => this.props.setValue(newValue)}
                    />
                </AccordionDetails>
            </Accordion>
        )
    }
}


export default ChangeHeuristicAccordion;
