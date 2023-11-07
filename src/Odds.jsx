export function Odds(props) {
  console.log(props);

  return (
    <div id="odds">
      <h3>Odds</h3>
      <div className="cards">
        {props.odds.map((odds) => (
          <div key={odds.id} className="card">
            <h2>{odds.sport_title}</h2>
            <p>Home Team: {odds.bookmakers[0].markets[0].outcomes[0].name}</p>
            <p>FanDuel line {odds.bookmakers[0].markets[0].outcomes[0].price}</p>
            <p>Draft Kings line {odds.bookmakers[1].markets[0].outcomes[0].price}</p>
            <p>Away Team: {odds.bookmakers[0].markets[0].outcomes[1].name}</p>
            <p>FanDuel line {odds.bookmakers[0].markets[0].outcomes[1].price}</p>
            <p>Draft Kings line {odds.bookmakers[1].markets[0].outcomes[1].price}</p>
            <button>Place Bet</button>
          </div>
        ))}
      </div>
    </div>
  );
}
