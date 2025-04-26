function twoPlayers(arr1, arr2) {
  const sport1 = {};
  const multiSport = [];

  for (let i = 0; i < arr1.length; i++) {
    const fullName = `${arr1[i].first_name} ${arr1[i].last_name}`;
    sport1[fullName] = true;
  }

  for (let i = 0; i < arr2.length; i++) {
    const fullName = `${arr2[i].first_name} ${arr2[i].last_name}`;
    if (sport1[fullName]) {
      multiSport.push(fullName);
    }
  }

  return multiSport;
}

const basketball_players = [
  { first_name: 'Jill', last_name: 'Huang', team: 'Gators' },
  { first_name: 'Janko', last_name: 'Barton', team: 'Sharks' },
  { first_name: 'Wanda', last_name: 'Vakulskas', team: 'Sharks' },
  { first_name: 'Jill', last_name: 'Moloney', team: 'Gators' },
  { first_name: 'Luuk', last_name: 'Watkins', team: 'Gators' },
];
const football_players = [
  { first_name: 'Hanzla', last_name: 'Radosti', team: '32ers' },
  { first_name: 'Tina', last_name: 'Watkins', team: 'Barleycorns' },
  { first_name: 'Alex', last_name: 'Patel', team: '32ers' },
  { first_name: 'Jill', last_name: 'Huang', team: 'Barleycorns' },
  { first_name: 'Wanda', last_name: 'Vakulskas', team: 'Barleycorns' },
];

console.log(twoPlayers(basketball_players, football_players));
