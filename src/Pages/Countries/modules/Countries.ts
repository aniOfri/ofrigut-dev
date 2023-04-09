import { RandInt } from './Calculators';
import CountriesList from '../data/countries.json';

// CHECK THAT THERE IS NO DUPLICATES IN THE SET
function Duplicates(countries: any, j: number) {
  let duplicate = false;
  for (let i = 1; i < j; i++) {
    if (countries[i] === countries[j]) duplicate = true;
  }

  return duplicate;
}

// CHECK THAT NO COUNTRIES APPEARED IN THE LAST ROUND
function Unfresh(country: any, lastRound: any) {
  if (lastRound[0] == null)
    return false;
  else {
    let refreshed = false;
    for (let i = 0; i < lastRound.length; i++) {
      if (country === lastRound[i]) refreshed = true;
    }

    return refreshed;
  }
}

// GET ONE COUNTRY
function getCity(list: any[]) {
  return list[RandInt(list.length)];
}

// GET A LIST OF RANDOM COUNTRIES AND A PAIR OF CLOSE ONES
function GetCountry(lastRound: any, score: number, lastcountries: any, minPop:number, pairsList:any) {
  const minDist = 4 + score / 1000;
  const maxDist = 6 + score / 1000;
  const list = CountriesList;

  let countries = [], mostClosest, longt1, longt2, lat1, lat2;

  if (score > 50)
    score = 50;

  let toSubstract = score * 1000;
  let pop = 50000 - toSubstract;
  if (pop < minPop) pop = minPop;

  do {
    countries[0] = getCity(list);
  }
  while (countries[0].population < pop || Unfresh(countries[0], lastRound) || Unfresh(countries[0], lastcountries))

  for (let j = 1; j < 7; j++) {
    do {
      do {
        countries[j] = getCity(list);
      }
      while (countries[j].population < 50000 - toSubstract || Duplicates(countries, j) || Unfresh(countries[j], lastRound))

      longt1 = countries[0].gps.split(" ")[1].replace(")", "");
      longt2 = countries[j].gps.split(" ")[1].replace(")", "");

      lat1 = countries[0].gps.split("(")[1].split(" ")[0];
      lat2 = countries[j].gps.split("(")[1].split(" ")[0];

    }
    while (Math.abs(longt1 - longt2) < maxDist || Math.abs(lat1 - lat2) < maxDist)
  }

  mostClosest = getClosest(countries[0], list, minDist, score, pairsList);

  let index;
  index = countries.indexOf(mostClosest);
  if (index === -1) {
    index = RandInt(4) + 1
    countries[index] = mostClosest;
  }

  return [countries, index];
}

// CHECK IF CLOSEST COUNTRY ISNT IN LIST OF PAIRS
function pairsCheck(list:any, pair:any) {
  let valid = true;
  for (let i = 0; i < list.length && valid; i++) {
    if ((list[i][0] === pair[0] && list[i][1] === pair[1]) ||
      (list[i][1] === pair[0] && list[i][0] === pair[1]))
      valid = false;
  }
  return valid;
}

function createEmpty(){
  var empty = {
    cityLabel: ""
  } as any;

  var arr = [[]] as any[];
  for (let i = 0; i < 7; i++)
    arr[0].push(empty);

  return arr;
}

// GET CLOSEST COUNTRY TO GIVEN Country
function getClosest(dest:any, list:any, minDist = 0.04, score = 0, pairsList = []) {
  let closest, mostClosest, mostClosestLongt = minDist, mostClosestLat = minDist;
  let longt1, longt2, lat1, lat2;
  let i = 0;
  let distExt = 0;

  if (score > 50)
    score = 50;

  let run = true;
  do {
    closest = list[i];

    if (closest.population > 50000 - score * 1000 && pairsCheck(pairsList, [dest, closest])) {
      longt1 = dest.gps.split(" ")[1].replace(")", "");
      longt2 = closest.gps.split(" ")[1].replace(")", "");

      lat1 = dest.gps.split("(")[1].split(" ")[0];
      lat2 = closest.gps.split("(")[1].split(" ")[0];

      if (Math.abs(longt1 - longt2) < mostClosestLongt && Math.abs(lat1 - lat2) < mostClosestLat && Math.abs(longt1 - longt2) > 0) {
        mostClosest = closest;
        mostClosestLongt = Math.abs(longt1 - longt2);
        mostClosestLat = Math.abs(lat1 - lat2);
      }
    }
    i += 1;
    if (i > list.length - 1) {
      distExt += .2;
      mostClosestLat = minDist + distExt;
      mostClosestLongt = minDist + distExt;
      i = 0;

      if (mostClosest !== undefined) {
        run = false;
      }
    }
  }
  while (run)

  return mostClosest;
}




export { GetCountry, getClosest, createEmpty };