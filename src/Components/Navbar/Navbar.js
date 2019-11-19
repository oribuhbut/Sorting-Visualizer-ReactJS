import React from 'react';
import './Navbar.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.generateArray = this.generateArray.bind(this);
        this.setLength = this.setLength.bind(this);
    }

    componentDidMount() {
        this.generateArray()
    }

    state = {
        value: 10,
        type: "",
        arr: [],
        info: ""
    }

    generateArray() {
        this.state.arr = Array.from({ length: this.state.value })
        for (let i = 0; i < this.state.arr.length; i++) {
            this.state.arr[i] = Object.create(null);
            this.state.arr[i].index = i;
            this.state.arr[i].value = Math.floor(Math.random() * 100 + 10)
            this.setState({})
        }
        this.props.arrOnChange(this.state.arr);
    }

    setLength(val) {
        this.setState({ value: val }, () => this.generateArray());
    }

    sortFunction() {
        if (!this.state.type.length) {
            this.state.info = "Select Sort Type"
            this.setState({});
            return;
        }
        this.props.sort(this.state.type);
    }

    render() {
        return (
            <div className="row-fluid">
                <div className="nav-container">
                    <div className="trigger">
                        <div disabled={this.props.disabled} onClick={this.sortFunction.bind(this)} className="lead">
                            Generate New Array Sort
                        </div>
                    </div>
                    <div className="slider">
                        <InputRange
                            disabled={this.props.disabled}
                            maxValue={100}
                            minValue={1}
                            value={this.state.value}
                            onChange={this.setLength.bind(this)} />
                    </div>
                    <div className="info lead">{this.state.info}</div>
                    <div className="nav-ul">
                        <li><span disabled={this.props.disabled} onClick={() => this.setState({ type: "Quick", info: "Quick Sort" })}>Quick Sort</span></li>
                        <li><span disabled={this.props.disabled} onClick={() => this.setState({ type: "Heap", info: "Heap Sort" })}>Heap Sort</span></li>
                        <li><span disabled={this.props.disabled} onClick={() => this.setState({ type: "Bubble", info: "Bubble Sort" })}>Bubble Sort</span></li>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;
