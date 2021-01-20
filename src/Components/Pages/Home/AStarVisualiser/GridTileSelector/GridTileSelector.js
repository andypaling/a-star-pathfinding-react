import React from 'react';

function GridTileSelector({ selectedItem, setSelectedItem }) {
    /*
    This component is within the main visualiser AND in the tutorial modal,
    changed made here will apply to both a tutorial modal and visualiser.
     */
        return (
            <div className="controllerContainer">
                <div
                    className="controllerContainerItem"
                    style={{backgroundColor: selectedItem === 'wall' ? '#848484' : ''}}
                    onClick={() => setSelectedItem('wall')}
                >
                    <span className="controllerContainerItemColorSquare" style={{backgroundColor: '#5f5f5f'}}/>
                    Wall
                </div>
                <div
                    className="controllerContainerItem middleControllerContainerItem"
                    style={{backgroundColor: selectedItem === 'start' ? '#848484' : ''}}
                    onClick={() => setSelectedItem('start')}
                >
                    <span className="controllerContainerItemColorSquare" style={{backgroundColor: '#28a745'}} />
                    Start
                </div>
                <div
                    className="controllerContainerItem"
                    style={{backgroundColor: selectedItem === 'end' ? '#848484' : ''}}
                    onClick={() => setSelectedItem('end')}
                >
                    <span className="controllerContainerItemColorSquare" style={{backgroundColor: '#dc3545'}} />
                    Finish
                </div>
            </div>
        );
}

export default GridTileSelector;
