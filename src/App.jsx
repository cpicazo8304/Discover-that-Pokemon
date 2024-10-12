import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

  // initialize all state variables
  const [pokemon, setPokemon] = useState ('');
  const [ability, setAbility] = useState ('');
  const [types, setTypes] = useState ('');
  const [sprite, setSprite] = useState ('');
  const [location, setLocation] = useState ('');
  const [discoverList, setList] = useState ([]);
  const [pokemonIndex, setIndex] = useState (0);

  // use the effect hook in order to fetch data from the Pokemon API
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch (API_URL + pokemonIndex + '/');
      const data = await response.json ();
      
      // set data values gotten from API
      const pokemon_ability = data.abilities[0].ability.name;
      setPokemon (data.name.charAt(0).toUpperCase() + data.name.slice(1));
      setAbility (pokemon_ability.charAt(0).toUpperCase() + pokemon_ability.slice(1));
      setSprite (data.sprites.front_default);

      let type = '';
      type += data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);

      // check if pokemon has a second type and add it to string representing pokemon's type
      if (data.types.length > 1)
      {
        type += '/';
        type += data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.slice(1);
      }
      setTypes (type);

      // make another API call to get the location of the pokemon
      const new_response = await fetch (data.location_area_encounters);
      const new_data = await new_response.json ();

      const location = new_data[0].location_area.name;
      setLocation(location.charAt(0).toUpperCase() + location.slice(1));
    }
    fetchPokemon ();
  }, [pokemonIndex]);

  // move through the different pokemon the Pokemon API provides
  const handleDiscoverButton = () => {
    setIndex (pokemonIndex + 1);

    // add to a seen list
    setList([...discoverList, [sprite, pokemon]]);
  };

  const banType = () => {

  };

  const banAbility = () => {

  };

  const banLocation = () => {

  };

  return (
    <div className='app'>
      <div className='discover' id='discover'>
        <h3 className='discover-header'>Who have we seen so far?</h3>
        <div>
          {discoverList.map((currPokemon, index) => (
            <div key={index} className="dynamic-component">
              <img className='discovered-sprite' src={currPokemon[0]}/>
              <h3 className='discovered-pokemon'>{currPokemon[1]}</h3>
            </div>
          ))}
        </div>
      </div>
      
      <div className='menu'>
        <h1 className='menu-header'>Gotta Discover 'Em All</h1>
        <h4 className='description'>Discover multitudes of Pokemon!</h4>
        {pokemonIndex == 0 ?
          (<h3 className='pikachu'> ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⢻⣿⡗⢶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣄.
            ⠀⢻⣇⠀⠈⠙⠳⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠶⠛⠋⣹⣿⡿.
            ⠀⠀⠹⣆⠀⠀⠀⠀⠙⢷⣄⣀⣀⣀⣤⣤⣤⣄⣀⣴⠞⠋⠉⠀⠀⠀⢀⣿⡟⠁
            ⠀⠀⠀⠙⢷⡀⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⠀
            ⠀⠀⠀⠀⠈⠻⡶⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣠⡾⠋⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⣼⠃⠀⢠⠒⣆⠀⠀⠀⠀⠀⠀⢠⢲⣄⠀⠀⠀⢻⣆⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⢰⡏⠀⠀⠈⠛⠋⠀⢀⣀⡀⠀⠀⠘⠛⠃⠀⠀⠀⠈⣿⡀⠀⠀⠀⠀
            ⠀⠀⠀⠀⣾⡟⠛⢳⠀⠀⠀⠀⠀⣉⣀⠀⠀⠀⠀⣰⢛⠙⣶⠀⢹⣇⠀⠀⠀⠀
            ⠀⠀⠀⠀⢿⡗⠛⠋⠀⠀⠀⠀⣾⠋⠀⢱⠀⠀⠀⠘⠲⠗⠋⠀⠈⣿⠀⠀⠀⠀
            ⠀⠀⠀⠀⠘⢷⡀⠀⠀⠀⠀⠀⠈⠓⠒⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡇⠀⠀⠀
            ⠀⠀⠀⠀⠀⠈⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀⠀
            ⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀
            </h3>
          ) : (
            <div className='pokemon'>
              <h2 className='pokemon-name'>{pokemon}</h2>
              <div className='buttons'>
                <button className='type'>{types}</button>
                <button className='ability'>{ability}</button>
                <button className='location'>{location}</button>
              </div>
              <img className='pokemon-image' src={sprite}/>
            </div>
          )}
        <button className='discover-button' onClick={handleDiscoverButton}>Discover!</button>
      </div>
      
      <div className='ban'>
        <h2 className='ban-header'>Ban List</h2>
      </div>
    </div>
  )
};

export default App;
