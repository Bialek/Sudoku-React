import React, { Component } from 'react';
import Tile from './Tile';


class Board extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            board: props.Board.split(''),
            initBoard: props.initBoard.split(''),
            initBoardArray: [],
            disabled: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            board: nextProps.Board.split(''),
            initBoard: nextProps.initBoard.split(''),  
        }); 
        this.disabledIDArray();
    }

    disabledIDArray() {
        this.state.initBoardArray.length = 0;
        (this.state.initBoard).map((number, i) => {
            if (number !== '.') {
                (this.state.initBoardArray).push(i);
            }
        });
    }


    hadleTileChange(id, newNumber) {
        this.props.onTileChange(id, newNumber);
    }
 
    render() { this.disabledIDArray();
        return ( 
            <div id="Board" className="Board">
                {
                    (this.state.board).map((number, i) => {
                        if (number === '.') {number= " "} 
                        var disabled = 0;
                        for (let j = 0; j < (this.state.initBoardArray).length; j++) {
                            if (this.state.initBoardArray[j] === (i)) {
                                disabled = 1;
                            }; 
                        };
                        return (
                            <Tile
                                id={i}
                                key={i}
                                number={number}
                                disabled= {disabled}
                                onTileChange = {(id, newNumber) =>
                                    this.hadleTileChange(id, newNumber)}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default Board;