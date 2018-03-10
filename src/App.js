import React, { Component } from 'react';
import {Locations, Location} from 'react-router-component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Posts from './containers/PostsCont';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
    };
  }

  componentDidMount() {
    if (this.props) {
      this.props.PostsLoad();
    }
  }

  MyApp() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: "#689f38",
        accent1Color: "#4caf50",
      }
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Locations>
          <Location path="/" handler={Posts} />
        </Locations>
      </MuiThemeProvider>
    )
  }

  render() {
    return(
        <div>
          {this.MyApp()}
        </div>
      )
  }
}
export default App;
