import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "./App.css";

//Animation
import posed from "react-pose";
import Fade from "react-reveal/Fade";

//components
import PokeCard from "./components/PokeCard";

//simpleComponent
const Box = posed.div({
  draggable: true,
  init: { scale: 1 },
  drag: { scale: 1.2 },
  dragEnd: { scale: 0.7 }
});

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"
      );
      setData(result.data[`results`]);
      console.log(result.data[`results`]);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Fade effect="fadeInUp">
        <Box>
          <h1
            style={{ textAlign: "center", fontWeight: "800", fontSize: "4rem" }}
          >
            Poke React Hooks
          </h1>
        </Box>
        <Grid columns={3} centered relaxed="very">
          <Grid.Row>
            {data.map(d => (
              <Box>
                <PokeCard
                  key={d.name}
                  name={d.name}
                  url={d.url}
                  pokeIndex={`${d.url.match(/([^/]*)\/*$/)[1]}`}
                />
              </Box>
            ))}
          </Grid.Row>
        </Grid>
      </Fade>
    </div>
  );
}
export default App;
