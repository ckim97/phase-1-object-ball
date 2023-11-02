console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()

function numPointsScored(name) {
  let object = gameObject();
  if (name in object["home"].players) {
    return object["home"].players[name]["points"];
  } else if (name in object["away"].players) {
    return object["away"].players[name]["points"];
  } 
}

function shoeSize(name) {
  let object = gameObject();
  if (name in object["home"].players) {
    return object["home"].players[name]["shoe"];
  } else if (name in object["away"].players) {
    return object["away"].players[name]["shoe"];
  }
}

function teamColors(team) {
  let object = gameObject();
  if (team === object["home"]["teamName"]) {
      return object["home"]["colors"];
    } else if (team === object["away"]["teamName"]) {
      return object["away"]["colors"];
    }
}

function teamNames() {
  let object = gameObject();
  const names = [];
  names.push(object["home"]["teamName"]);
  names.push(object["away"]["teamName"]);
  return names;
}

function playerNumbers(team) {
  let object = gameObject();
  const jerseyNumbers = [];
  if (team === object["home"]["teamName"]) {
    for (let name in object["home"]["players"]) {
      jerseyNumbers.push(object["home"]["players"][name]["number"]);
    }
  } else if (team === object["away"]["teamName"]) {
    for (let name in object["away"]["players"]) {
      jerseyNumbers.push(object["away"]["players"][name]["number"]);
    }
  }
  return jerseyNumbers;
}

function playerStats(playerName) {
  let object = gameObject();
  let stats = {};
  if (playerName in object["home"]["players"]) {
      stats = object["home"]["players"][playerName];
  } else if (playerName in object["away"]["players"]) {
      stats = object["away"]["players"][playerName];
  }
  return stats;
}

function bigShoeRebounds() {
  let object = gameObject();
  let largest = 0;
  let rebounds = 0;

  for (let player in object["home"]["players"]) {
    if (object["home"]["players"][player]["shoe"] > largest) {
      largest = object["home"]["players"][player]["shoe"];
      rebounds = object["home"]["players"][player]["rebounds"];
    }
  }
  for (let player in object["away"]["players"]) {
    if (object["away"]["players"][player]["shoe"] > largest) {
      largest = object["away"]["players"][player]["shoe"];
      rebounds = object["away"]["players"][player]["rebounds"];
    }
  }
  return rebounds;
}

function mostPointsScored() {
  let object = gameObject();
  let points = 0;
  let playerName = "";

  for (let player in object["home"]["players"]) {
    if (object["home"]["players"][player]["points"] > points) {
      points = object["home"]["players"][player]["points"];
      playerName = player;
    }
  }

  for (let player in object["away"]["players"]) {
    if (object["away"]["players"][player]["points"] > points) {
      points = object["away"]["players"][player]["points"];
      playerName = player;
    }
  }
  return playerName;
}

function winningTeam() {
  let object = gameObject();
  let totalHome = 0;
  let totalAway = 0;

  for (let player in object["home"]["players"]) {
    totalHome = totalHome + object["home"]["players"][player]["points"];
  }

  for (let player in object["away"]["players"]) {
    totalAway = totalAway + object["away"]["players"][player]["points"];
  }

  if (totalHome > totalAway) {
    return object["home"]["teamName"];
  } else if (totalAway > totalHome) {
    return object["away"]["teamName"];
  }

}

function playerWithLongestName() {
  let object = gameObject();
  let nameLength = 0;
  let playerName = "";

  for (let player in object["home"]["players"]) {
    if (player.length > nameLength) {
      nameLength = player.length;
      playerName = player;
    }
  }
  for (let player in object["away"]["players"]) {
    if (player.length > nameLength) {
      nameLength = player.length;
      playerName = player;
    }
  }
  return playerName;

}

function doesLongNameStealATon() {
  let object = gameObject();
  let stealsCount = 0;
  let playerName = "";
  
  for (let player in object["home"]["players"]) {
    if (object["home"]["players"][player]["steals"] > stealsCount) {
      stealsCount = object["home"]["players"][player]["steals"];
      playerName = player;
    }
  }
  for (let player in object["away"]["players"]) {
    if (object["away"]["players"][player]["steals"] > stealsCount) {
      stealsCount = object["away"]["players"][player]["steals"];
      playerName = player;
    }
  }

  return playerName === playerWithLongestName();

}