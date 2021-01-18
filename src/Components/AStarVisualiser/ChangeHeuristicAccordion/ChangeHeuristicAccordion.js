import React, { Component } from 'react';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import HeuristicRadioGroup from "./HeuristicRadioGroup";
import MoreInfoScrollTrigger from "./MoreInfoScrollTrigger";


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
                <div className="change-heuristic-accordion-text">
                    The heuristic takes a key role in the behavior of the algorithm. It gives an estimate of the minimum cost from a given node to the goal node.
                </div>
                <AccordionDetails>
                    <HeuristicRadioGroup
                        value={this.props.value}
                        setValue={(newValue) => this.props.setValue(newValue)}
                    />
                </AccordionDetails>
                <MoreInfoScrollTrigger
                    scrollToHeuristicInfo={() => this.props.scrollToHeuristicInfo()}
                />
            </Accordion>
        )
    }
}


export default ChangeHeuristicAccordion;
