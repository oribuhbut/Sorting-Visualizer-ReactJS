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
            this.state.arr[i].value = Math.floor(Math.random() * 60 + 10)
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
            <nav class="navbar navbar-expand-lg navbar-light bg-dark fullwidth">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item trigger">
                            <div disabled={this.props.disabled} onClick={this.sortFunction.bind(this)} className="lead">
                                Generate New Array Sort
                            </div>
                        </li>
                        <li class="nav-item slider">
                            <InputRange
                                disabled={this.props.disabled}
                                maxValue={100}
                                minValue={1}
                                value={this.state.value}
                                onChange={this.setLength.bind(this)} />
                        </li>
                        <li className="nav-item">
                            <div className="lead text-white">{this.state.info}</div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li class="nav-item">
                            <span className="nav-link text-white" disabled={this.props.disabled} onClick={() => this.setState({ type: "Quick", info: "Quick Sort" })}>Quick Sort</span>
                        </li>
                        <li class="nav-item">
                            <span className="nav-link text-white" disabled={this.props.disabled} onClick={() => this.setState({ type: "Heap", info: "Heap Sort" })}>Heap Sort</span>
                        </li>
                        <li class="nav-item">
                            <span className="nav-link text-white" disabled={this.props.disabled} onClick={() => this.setState({ type: "Bubble", info: "Bubble Sort" })}>Bubble Sort</span>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
