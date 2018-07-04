import React, {Component} from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.number,
            id: props.id
        };
    }

    changeHandle(e) {
        let newNumber = e.target.value;
        if (newNumber < 1 || newNumber > 9) {
            newNumber = " ";
        }
        this.setState({ number: newNumber});
        this.props.onTileChange(this.state.id, newNumber);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            number: nextProps.number
        });
    }

    render() {
        return (
            <input 
                type='number'
                max= {9}
                min= {1}
                maxLength= {1}
                value={this.state.number}
                disabled = {this.props.disabled}
                className = {this.props.error ? 'error' : this.props.perfection ? 'perfection' : '' }
                onChange={e => this.changeHandle(e)}
            />
        )
    }
    
}

export default Tile;