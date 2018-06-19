import React, { Component } from 'react';
import Tile from './Tile';


class Board extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            board: props.Board.split(''), 
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            board: nextProps.Board.split('')
        });
    }

    hadleTileChange(id, newNumber) {
        this.props.onTileChange(id, newNumber);
    }
 
    render() { 
        return ( 
            <div id="Board" className="Board">
                {
                    (this.state.board).map((number, i) => {
                        if (number === '.') {number=" "}
                        return (
                            <Tile
                                id={i}
                                key={i}
                                number={number}
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