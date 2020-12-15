const battleship = () => {

//These arrays hold my ship placements
  let layout1 = []
  let layout2 = []
//holds the other 2 arrays
  let layouts = [layout1, layout2]
//This array will eventually hold the player names
  let players = ["player_1", "player_2"]
//This function will be used to subtract the elements of one array from another
  const subtractTwoArrays = (arr1, arr2) => arr1.filter( el => !arr2.includes(el) )
//This array holds the placement name of each ship
  let place_ships = ["first", "second", "third", "fourth"]
//For loop stores players actual names
  for(charictures in players){
    players[charictures] = prompt(`what is your name ${players[charictures]}`)
//Nested loop logs the coordinates of each ship
    for(place in place_ships){
      let spot = prompt(`${players[charictures]} place your ${place_ships[place]} battleship by typing its x and y coordinates e.g (x,y) both x and y must be in the range of 0-3`)
//Regular expression prohibits duplicate coordinates
      if (layouts[charictures].join(' ').match(spot)){
        alert("You're coordinates are invalid. as a punishment I have sunk your ship.")
//Regular expression makes sure each coordinate is between 1 and 3 and is seperated by a comma
//coordinates are then saved
      }else if (spot.match(/[0-3],[0-3]/)){
        layouts[charictures].push(spot)
      }else{
        alert("You're coordinates are invalid. as a punishment I have sunk your ship.")
  }

}
}
//These hold the coordinates of ships that have been sunk
  let player_1_hits = [];
  let player_2_hits = [];
//Holds both arrays
  let hits = [player_1_hits, player_2_hits]
//Will hold the coordinates of a given attack
  let shot;
//holds the index value of each player
  let attacker = 0
  let defender = 1
//Iterates through attacks until a fleet has been sunk
  while (true){
    shot = prompt(`${players[(attacker)]} type the coordinates of your shot`)
//Regular expression makes sure the attack coordinates are valid
    if (layouts[defender].join().match(shot) && shot.match(/\d,\d/)){
      alert("hit")
//Logs coordinates of hit
      hits[defender].push(shot)
//Removes sunken ship so that it may not be hit again.
      layouts[defender] = subtractTwoArrays(layouts[defender], hits[defender])
    }else {
      alert("miss")
}

    if (layouts[0].length === 0){
        return `${players[1]} Wins`

      }
    if (layouts[1].length === 0) {
        return `${players[0]} Wins`
      }
    if (attacker === 0){
      attacker = 1
      defender = 0
    }else {
      attacker = 0
      defender = 1
    }

}

}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
