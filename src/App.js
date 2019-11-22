import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { heapSort, callQuickSort, bubbleSort } from './modules/sortFunctions'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.sort = this.sort.bind(this);
    this.arrOnChange = this.arrOnChange.bind(this);
    this.animation = this.animation.bind(this);
  }

  componentDidMount() {
  }

  state = {
    arr: [],
    disabled: false,
    speed: 0
  }


  delay(arr, count) {
    setTimeout(() => {
      let firstIndex = this.state.arr.findIndex(obj => obj.index === arr[count].index1);
      let secondIndex = this.state.arr.findIndex(obj => obj.index === arr[count].index2);
      let temp = this.state.arr[firstIndex];
      this.state.arr[firstIndex] = this.state.arr[secondIndex];
      this.state.arr[secondIndex] = temp;
      count++;
      this.setState({});
      this.animation(arr, count);
    }, this.state.speed);
  }


  animation(arr, count) {
    if (!arr.length) {
      this.setState({ disabled: false });
      return;
    }
    if (count < arr.length) {
      this.delay(arr, count);
    }
    else {
      this.setState({ disabled: false });
      return;
    }
  }



  sort(type) {
    this.setState({
      disabled: true,
    },
      () => this.state.arr.length > 20 ? this.state.speed = 5 : this.state.speed = 50);
    let newarr = this.state.arr.slice();
    switch (type) {
      case "Quick":
        this.animation(callQuickSort(newarr, 0, newarr.length - 1), 0);
        break;
      case "Bubble":
        this.animation(bubbleSort(newarr), 0);
        break;
      case "Heap":
        this.animation(heapSort(newarr), 0);
        break;
    }
  }

  arrOnChange(arr) {
    this.setState({ arr: arr });
  }

  render() {
    return (
      <div>
        <Navbar disabled={this.state.disabled} sort={this.sort} arrOnChange={this.arrOnChange} />
        <div className="row">
          <div className="col-md-12 lead text-center">Sort Performance is Slowed Down For Simulation</div>
        </div>
        <div className="row">
          <ul className="chartContainer">
            {this.state.arr.map((val) => {
              return <li className="chartLi" style={{ height: val.value * 3, width: 1000 / this.state.arr.length / 1.5 }} ></li>
            })}
          </ul>
        </div>
        <div class="row jusify-content-center">
          <div className="col-md-12 lead text-center">By Ori Buhbut | A Full-Stack Web Developer (currently looking for my first position as a junior 0544264769)</div>
          <div className="col-md-12 text-center">For Code Source:<a href="https://github.com/oribuhbut/Sorting-Visualizer-ReactJS">https://github.com/oribuhbut/Sorting-Visualizer-ReactJS</a></div>
        </div>
      </div>
    );
  }
}

export default App;

