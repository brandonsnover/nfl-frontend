/* eslint-disable react/prop-types */
import moment from "moment";
export function Odds(props) {
  console.log(props);

  let currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

  return (
    <div id="odds-index">
      <h3>Odds!</h3>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.odds.map((odds) => (
          <div key={odds.id} className="col">
            <div className="card border-primary mb-3">
              <h4 className="card-header">{odds.sport_title}</h4>
              <div className="card-body">
                <p>{odds.commence_time}</p>
                <p>{currentDate}</p>
                <p>Home Team: {odds.bookmakers[0].markets[0].outcomes[0].name}</p>
                <p>FanDuel line {odds.bookmakers[0].markets[0].outcomes[0].price}</p>
                <p>Draft Kings line {odds.bookmakers[1].markets[0].outcomes[0].price}</p>
                <p>Away Team: {odds.bookmakers[0].markets[0].outcomes[1].name}</p>
                <p>FanDuel line {odds.bookmakers[0].markets[0].outcomes[1].price}</p>
                <p>Draft Kings line {odds.bookmakers[1].markets[0].outcomes[1].price}</p>
                <a href="#" className="btn btn-primary">
                  Place Bet
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
