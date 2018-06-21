import React, { Component } from 'react';
import './App.css';
import LearnPage from './components/LearnPage';
import PracticePage from './components/PracticePage';
import ReferencePage from './components/ReferencePage';
import { Page, Tabbar, Tab } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class MyTab extends Component {
  render() {
    return (
      <Page>
        <section style={{margin: '16px'}}>
          {this.props.children}
        </section>
      </Page>
    );
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  renderTabs() {
    return [
      {
        content: <MyTab key="learn"><LearnPage/></MyTab>,
        tab: <Tab label='Learn' icon='fa-lightbulb-o' key="learn"/>
      },
      {
        content: <MyTab key="practice"><PracticePage/></MyTab>,
        tab: <Tab label='Practice' icon='fa-pencil-square-o' key="practice"/>
      },
      {
        content: <MyTab key="reference"><ReferencePage/></MyTab>,
        tab: <Tab label='Reference' icon='md-book' key="reference" />
      }
    ];
  }

  render() {
    return (
      <div className="App">
        <Page>
          <Tabbar
            swipeable={false}
            position='auto'
            index={this.state.index}
            tabBorder={true}
            onPreChange={(event) =>
              {
                if (event.index !== this.state.index) {
                  this.setState({index: event.index});
                }
              }
            }
            renderTabs={this.renderTabs}
          />
        </Page>
      </div>
    );
  }
}

export default App;
