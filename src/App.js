import React, { Component } from 'react';
import './App.css';
import LearnPage from './components/LearnPage';
import PracticePage from './components/PracticePage';
import ReferencePage from './components/ReferencePage';
import { Page, Tabbar, Tab } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import Style from './style/style';

import LanguageData from './languages/indonesian';

const { colorScheme } = Style;

class MyTab extends Component {
  render() {

    return (
      <Page>
        <div style={{
          position: 'absolute',
          left: '0px',
          right: '0px',
          height: 'calc(100vh - 49px)',
          backgroundColor: colorScheme[this.props.tabIndex],
        }}>
        {this.props.children}
        </div>
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
        content: <MyTab key="learn" tabIndex={0}><LearnPage languageData={LanguageData}/></MyTab>,
        tab: <Tab label='Learn' icon='fa-lightbulb-o' key="learn"/>
      },
      {
        content: <MyTab key="practice" tabIndex={1}><PracticePage languageData={LanguageData}/></MyTab>,
        tab: <Tab label='Practice' icon='fa-pencil-square-o' key="practice"/>
      },
      {
        content: <MyTab key="reference" tabIndex={2}><ReferencePage languageData={LanguageData}/></MyTab>,
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
