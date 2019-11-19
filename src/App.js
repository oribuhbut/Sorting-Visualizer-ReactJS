import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { heapSort, mergeSort, callQuickSort, bubbleSort } from './modules/sortFunctions'
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.getSort = this.getSort.bind(this);
    this.arrChange = this.arrChange.bind(this);
    this.animation = this.animation.bind(this);
  }

  componentDidMount() {

  }

  state = {
    arr: [],
    something: true,
    inputRange: false
  }

  delayLoop(arr, count) {
    setTimeout(() => {
      let index1 = this.state.arr.findIndex(obj => obj.index === arr[count].index1);
      let index2 = this.state.arr.findIndex(obj => obj.index === arr[count].index2)
      let temp = this.state.arr[index1]
      this.state.arr[index1] = this.state.arr[index2];
      this.state.arr[index2] = temp;
      count++
      this.setState({})
      this.animation(arr, count)
    }, 20);
  }


  animation(arr, count) {
    if (count < arr.length) {
      this.delayLoop(arr, count)
    }
    else {
      this.setState({ inputRange: false })
      return;
    }
  }



  getSort(sort) {
    this.setState({ inputRange: true })
    let newarr = this.state.arr.slice()
    if (sort == "Merge") {
      console.log(mergeSort(newarr));
    }
    if (sort == "Quick") {
      return this.animation(callQuickSort(newarr, 0, newarr.length - 1), 0)
    }
    if (sort == "Bubble") {
      return this.animation(bubbleSort(newarr), 0);
    }
    if (sort == "Heap") {
      return this.animation(heapSort(newarr), 0);
    }
  }

  arrChange(arr) {
    this.state.arr = arr;
    this.setState({})
  }

  render() {
    return (
      <div>
        <div>
          <Navbar inputRange={this.state.inputRange} getSort={this.getSort} arrChange={this.arrChange} />
        </div>
        <div className="lead text-center">Sort Performance is Slowed Down by 20 Times For Simulation</div>
        <div className="row">
          <ul className="chartContainer">
            {this.state.arr.map((val) => {
              return <li className="chartLi" style={{ height: val.value * 3, width: 1000 / this.state.arr.length / 1.5 }} ></li>
            })}
          </ul>
        </div>
        <div class="row" style={{ position: 'fixed', top: '90%',left:'30%' }}>
          <div className="col-md-12">
            <div className="lead text-center">By Ori Buhbut | A Full-Stack Web Developer (currently looking for my first position as a junior 0544264769)</div>
            <div>For Code Source:</div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
