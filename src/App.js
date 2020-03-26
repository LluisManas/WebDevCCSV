import React from "react";
import result from "./data.json";
import InputField from "./InputField";
import SearchButton from "./SearchButton";
import ShowResults from "./ShowResults";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SwitchStyle from "./SwitchStyle";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#007BA7"
    },
    secondary: {
      main: "#02e2f2"
    }
  },
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif"
    ].join(",")
  }
});

class App extends React.Component {
  state = {
    inputSphere: 0,
    cylinder: 0,
    addition: 0,
    results: [],
    darkMode: false
  };

  // #1. In order to get all the products I use this lifecycle
  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({
      results: result.data,
      inputSphere: 0,
      cylinder: 0,
      addition: 0
    });
  }

  findResults = (inputSphere, cylinder, addition) => {
    //#2. Filter the results that match with the values passed
    let filteredResults = result.data.filter(result => {
      if (
        result.minSphere <= this.state.inputSphere &&
        this.state.inputSphere <= result.maxSphere &&
        result.minCylinder <= this.state.cylinder &&
        this.state.cylinder <= result.maxCylinder &&
        result.minAddition <= this.state.addition &&
        this.state.addition <= result.maxAddition
      ) {
        return result;
      }
    });

    this.setState({ results: filteredResults });
  };

  onSearch = e => {
    //#3. When clicking on the "Search" button, it triggers the findResult function in order to filter the results.

    this.findResults();
    e.preventDefault();
  };
  onChange = (key, value) => {
    this.setState({ [key]: value });
  };
  toggledarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode
    });
  };
  render() {
    const { darkMode, inputSphere, results, cylinder, addition } = this.state;
    //#4. Adding the "cylinder" and "addition" search values.
    return (
      <ThemeProvider theme={theme}>
        <div className={darkMode ? "AppDark" : "AppLight"}>
          <Grid className="searchField">
            <InputField
              inputField={inputSphere}
              name="inputSphere"
              label="Sphere"
              onChange={this.onChange}
            />

            <InputField
              inputField={cylinder}
              name="cylinder"
              label="cylinder"
              onChange={this.onChange}
            />
            <InputField
              inputField={addition}
              name="addition"
              label="addition"
              onChange={this.onChange}
            />
            <SearchButton onSearch={this.onSearch} />
          </Grid>
          <Grid className={darkMode ? "serchResult" : "serchResultLight"}>
            <ShowResults results={results} />
          </Grid>
          <SwitchStyle
            darkMode={this.state.darkMode}
            toggledarkMode={this.toggledarkMode}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
