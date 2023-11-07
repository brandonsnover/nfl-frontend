import axios from "axios";
import { Odds } from "./Odds";
import { useEffect, useState } from "react";

export function Content() {
  const [odds, setOdds] = useState([]);

  const handleLiveOdds = () => {
    axios
      .get(
        "https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&oddsFormat=american&apiKey=c61e3f8fe75747e040b5ab0edd8f4da8"
      )
      .then((response) => {
        console.log(response.data);
        setOdds(response.data);
      });
  };

  useEffect(handleLiveOdds, []);

  return (
    <div>
      <Odds odds={odds} />
    </div>
  );
}
