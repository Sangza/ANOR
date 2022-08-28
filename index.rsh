"reach 0.1";
const [isOutcome, F_WIN, DRAW, W_WIN] = makeEnum(3);

const winner =(price,guessFrancis,guessWeddy) =>{
if(guessFrancis == price)
{
        return 0
   }
else if(guessWeddy == price)
{
    return 2
   }
else if(guessFrancis == guessWeddy)
{
    return 1
   }
else {
    return 1
}
};
const Player = {
    ...hasRandom,
    seeOutcome: Fun([UInt,UInt], Null),
    informTimeout: Fun([],Null),
    getGuess:Fun([],Null),
    getRandomNum:Fun([],UInt)
};

export const main = Reach.App(()=>{
    const Francis = Participant('Francis', { 
        ...Player,
         wager: UInt,
         timeFrame: UInt
     });
    const Weddy = Participant('Weddy', { 
        ...Player,
        acceptWager:Fun([UInt],Null),
       });
      init();
    const informTimeout = () => {
        each([Francis, Weddy], () => {
          interact.informTimeout();
        });
      };

    Francis.only(()=> {
        const wager= declassify(interact.wager);
        const randomFrancis = declassify(interact.getRandomNum());
        const timeFrame = declassify(interact.timeFrame);
       
    });
    Francis.publish(wager,randomFrancis,timeFrame).pay(wager);
    commit();

    Weddy.only(() => {
        interact.acceptWager(wager);
        const randomWeddy= declassify(interact.getRandomNum());
      });
    Weddy.publish(randomWeddy).pay(wager).timeout(relativeTime(timeFrame), () => closeTo(Francis, informTimeout));
 
    const price = (randomFrancis*2 + randomWeddy*2)/4;
     var outcome = DRAW;
    invariant(balance() == 2 * wager && isOutcome(outcome));


    while (outcome == DRAW) {
        commit();
        Francis.only(() => {
            const _guessFrancis = interact.getGuess()
            const [_commitFrancis, _saltFrancis] = makeCommitment(interact, _guessFrancis);
            const commitFrancis = declassify(_commitFrancis);
        });
        Francis.publish(commitFrancis);
        commit();
    
        // unknowable(Weddy, Francis(_guessFrancis, _saltFrancis));
        Weddy.only(() => {
            const guessWeddy = declassify(interact.getGuess());
        });
        Weddy.publish(guessWeddy).timeout(relativeTime(timeFrame), () => closeTo(Francis, informTimeout));
        commit();
        Francis.only(() => {
            const saltFrancis = declassify(_saltFrancis);
            const guessFrancis = declassify(_guessFrancis);
          });
          Francis.publish(saltFrancis, guessFrancis).timeout(relativeTime(timeFrame), () => closeTo(Weddy, informTimeout));
          checkCommitment(commitFrancis, saltFrancis, guessFrancis);
          outcome = winner(price, guessFrancis, guessWeddy);
          continue;
    }
      const            [forFrancis, forWeddy] =
      outcome == 0 ? [       0,      2] :
      outcome == 2 ? [       2,      0] :
      /* tie      */ [       1,      1];
      transfer(forFrancis * wager).to(Francis);
      transfer(forWeddy   * wager).to(Weddy);
      commit();
      each([Francis, Weddy], () => {
        interact.seeOutcome(outcome,price);
      });

});

