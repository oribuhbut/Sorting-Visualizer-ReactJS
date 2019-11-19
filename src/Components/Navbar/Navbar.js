import React from 'react';
import './Navbar.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
class Navbar extends React.Component {

    componentDidMount() {
        this.state.arr = Array.from({ length: this.state.value }, () => Math.floor(Math.random() * 100 + 10))
        for (let i = 0; i < this.state.arr.length; i++) {
            this.state.arr[i] = Object.create(null);
            this.state.arr[i].index = i;
            this.state.arr[i].value = Math.floor(Math.random() * 100 + 10)
            this.setState({})
        }
        this.props.arrChange(this.state.arr);
    }

    state = {
        value: 10,
        sortType: "",
        arr: [],
        alert: "",
    }

    sendArr(val) {
        this.state.arr = Array.from({ length: val })
        for (let i = 0; i < this.state.arr.length; i++) {
            this.state.arr[i] = Object.create(null);
            this.state.arr[i].index = i;
            this.state.arr[i].value = Math.floor(Math.random() * 100 + 10)
            this.setState({})
        }
        this.state.value = val;
        console.log(this.state.arr)
        this.setState({})
        this.props.arrChange(this.state.arr);
    }

    sortFunction() {
        if (!this.state.sortType.length) {
            this.state.alert = "Select Sort Type"
            this.setState({});
            return;
        }
        this.props.getSort(this.state.sortType);
    }

    render() {
        return (
            <div className="row-fluid">
                <div className="nav-container">
                    <div className="trigger">
                        <div onClick={this.sortFunction.bind(this)} className="lead">
                            Generate New Array Sort
                        </div>
                    </div>
                    <div className="slider">
                        <InputRange
                            disabled={this.props.inputRange}
                            maxValue={100}
                            minValue={1}
                            value={this.state.value}
                            onChange={this.sendArr.bind(this)} />
                    </div>
                    <div className="alert lead">{this.state.alert}</div>
                    <div className="nav-ul">
                        <li><span onClick={() => this.setState({ sortType: "Merge", alert: "Merge Sort" })}>Merge Sort</span></li>
                        <li><span onClick={() => this.setState({ sortType: "Quick", alert: "Quick Sort" })}>Quick Sort</span></li>
                        <li><span onClick={() => this.setState({ sortType: "Heap", alert: "Heap Sort" })}>Heap Sort</span></li>
                        <li><span onClick={() => this.setState({ sortType: "Bubble", alert: "Bubble Sort" })}>Bubble Sort</span></li>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;