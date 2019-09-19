import React, { useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
const PokeCard = ({ name, url, pokeIndex }) => {
  const [Poke, setPoke] = useState(true);
  return (
    <>
      <Card
        style={{ margin: 15 }}
        color="red"
        className="pokeCard"
        onClick={() => setPoke(!Poke)}
      >
        <Image
          // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`}
          src={
            Poke
              ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`
              : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeIndex}.png`
          }
          wrapped
          ui={false}
          className="pokeImage"
        />
        <Card.Content>
          <Card.Header>{name.toUpperCase()}</Card.Header>
          <Card.Meta>{Poke ? "Normal" : "Shiny"}</Card.Meta>
          <Card.Description>{url}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          Pokemon Index : {`${pokeIndex}`}
        </Card.Content>
      </Card>
    </>
  );
};

export default PokeCard;
