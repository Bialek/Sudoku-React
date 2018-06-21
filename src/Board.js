import React, { Component } from 'react';
import Tile from './Tile';


class Board extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            board: props.Board.split(''),
            initBoard: props.initBoard.split(''),
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            board: nextProps.Board.split(''),
            initBoard: nextProps.initBoard.split(''),  
        }); 
    }


    hadleTileChange(id, newNumber) {
        this.props.onTileChange(id, newNumber);
    }
 
    render() {	console.log(this.state.initBoard);
        return ( 
            <div id="Board" className="Board">
                {
                    (this.state.board).map((number, i) => {
                        if (number === '.') {number= " "} 
                        return (
                            <Tile
                                id={i}
                                key={i}
                                number={number}
                                disabled= {!!(this.state.initBoard[i].trim() !=='.')}
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