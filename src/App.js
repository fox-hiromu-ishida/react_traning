import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// コンポーネントの読み込み
import HelloWorld from './components/HelloWorld';
import GoodMorining from './components/GoodMorining';


class App extends Component {

  //コンストラクタ 
  constructor(props){
    super(props);
    this.state = {
      arg1: 'ボタンがあるよ',
      arg2: '押してみよう！',
    };
    // this.updateGreeting = this.updateGreeting.bind(this);
    this.updateFuncTest = this.updateFuncTest.bind(this);

  }

  updateFuncTest(){
    this.setState({arg1: 'ありがとう', arg2: 'そして、ありがとう'});
  }

  render() {
    return (
      <div className="App">
       
       {/* <HelloWorld /> */}

      <HelloWorld arg1 = {this.state.arg1} arg2 = {this.state.arg2} />
      <button onClick = {this.updateFuncTest}> ボタン</button>

      {/* defaultPropsでそのままの変数を渡す*/}
      {/* <HelloWorld defaultProps to = "test"/> */}

      {/* 引数をセットして動的に表示を変更する */}
      {/* <HelloWorld greeting = "おはよう" to = "世界" /> */}

      {/* GoodMoriningをHelloWorldの子にするとどうなるか？ */}
      {/* <HelloWorld />
       <GoodMorining />
       <HelloWorld /> */}

      {/* 横込んだコンポーネントの表示 */}
      {/* <HelloWorld /> */}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  
}

export default App;
