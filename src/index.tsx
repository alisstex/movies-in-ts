import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import MoviesPage from "./MoviesPage";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const App = () => (
  <div className="App">
    <Tabs>
      <TabList>
        <Tab>Movies</Tab>
        <Tab>Books</Tab>
      </TabList>
      <TabPanel>
        <MoviesPage />
      </TabPanel>
      <TabPanel>
        <div>Books go here</div>
      </TabPanel>
    </Tabs>
  </div>
);

render(<App />, document.getElementById("root"));
