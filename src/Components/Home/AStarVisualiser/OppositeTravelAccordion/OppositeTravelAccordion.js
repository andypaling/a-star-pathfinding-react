import React, {Component} from 'react';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import OppositeTravelRadioGroup from "./OppositeTravelRadioGroup";
import OppositeTravelWhatsThisModalTrigger from "./OppositeTravelWhatsThisModalTrigger";

class OppositeTravelAccordion extends Component {
    render() {
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="info-text"
                >
                    Change Travel Direction
                </AccordionSummary>
                <AccordionDetails>
                    <OppositeTravelRadioGroup
                        oppositeTravelAllowed={this.props.oppositeTravelAllowed}
                        setOppositeTravelAllowed={(newValue) => this.props.setOppositeTravelAllowed(newValue)}
                    />
                </AccordionDetails>
                <OppositeTravelWhatsThisModalTrigger />
            </Accordion>
        )
    }
}


export default OppositeTravelAccordion;
