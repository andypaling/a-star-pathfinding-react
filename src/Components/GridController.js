import React, { Component } from 'react';

class GridController extends Component {
    render() {
        const{ selectedItem } = this.props;

        return (
            <div className="controllerContainer">
                <div
                    className="controllerContainerItem"
                    style={{backgroundColor: selectedItem === 'wall' ? '#848484' : ''}}
                    onClick={() => this.props.changeSelectedItemValue('wall')}
                >
                    <span className="controllerContainerItemColorSquare" style={{backgroundColor: '#5f5f5f'}}/>
                    Wall
                </div>
                <div
                    className="controllerContainerItem"
                    style={{backgroundColor: selectedItem === 'start' ? '#848484' : ''}}
                    onClick={() => this.props.changeSelectedItemValue('start')}
                >
                    <span className="controllerContainerItemColorSquare" style={{backgroundColor: 'green'}} />
                    Start
                </div>
                <div
                    className="controllerContainerItem"
                    style={{backgroundColor: selectedItem === 'end' ? '#848484' : ''}}
                    onClick={() => this.props.changeSelectedItemValue('end')}
                >
                    <span className="controllerContainerItemColorSquare" style={{backgroundColor: 'red'}} />
                    Finish
                </div>
            </div>
        );
    }
}


export default GridController;
