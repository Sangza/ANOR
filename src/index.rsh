'reach 0.1';

const [isOutcome, Asker_wins, Guesser_wins, Draw] = makeEnum(3);

const game = (asker_number, guesser_number) => {
    const prize_percent = ((abs(10 - (asker_number - guesser_number)) * 10));

    if (prize_percent > 50) { 
        result = Guesser_wins;
    } else if (prize_percent < 50) {
        result = Asker_wins;
    } else {
        result = Draw;
    }

    const result = {
        prize : prize_percent,
        result : result
    };

    return result;
};

const Player = {
    ...hasRandom,
    getNumber: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null)
};

export const main = Reach.App(() => {
    const Asker = Participant('Asker', {
        ...Player,
        wager: UInt,
        deadline: UInt
    });
    const Guesser = Participant('Guesser', {
        ...Player,
        acceptWager: Fun([UInt], Null)
    });
    init();

    const informTimeout = () => {
        each([Alice, Bob], () => {
        interact.informTimeout();
        });
    };

    Asker.only(() => {
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    });

    Asker.publish(wager, deadline).pay(wager);

    commit();

    Guesser.only(() => {
        interact.acceptWager(wager);
    });

    Guesser.pay(wager).timeout(relativeTime(deadline), () => closeTo(Asker, informTimeout));

    Asker.only(() => {
      const _askerNumber = interact.getNumber();
      const [_commitAsker, _saltAsker] = makeCommitment(interact, _askerNumber);
      const commitAsker = declassify(_commitAsker);
    });

    Asker.publish(commitAsker).timeout(relativeTime(deadline), () => closeTo(Guesser, informTimeout));

    commit();

    unknowable(Guesser, Asker(_handAsker, _saltAsker));

    Guesser.only(() => {
      const guesserNumber = declassify(interact.getNumber());
    });

    Guesser.publish(guesserNumber).timeout(relativeTime(deadline), () => closeTo(Asker, informTimeout));

    commit();

    Asker.only(() => {
      const saltAsker = declassify(_saltAsker);
      const askerNumber = declassify(_askerNumber);
    });

    Asker.publish(saltAsker, askerNumber).timeout(relativeTime(deadline), () => closeTo(Guesser, informTimeout));

    checkCommitment(commitAsker, saltAsker, askerNumber);

    outcome = game(askerNumber, guesserNumber);

    assert(outcome.result == Asker_wins || outcome.result == Guesser_wins || outcome.result == Draw);

    transfer((outcome.prize / 100) * wager).to(outcome.result == Asker_wins ? Asker : Guesser);

    commit();

    each([Asker, Guesser], () => {
        interact.seeOutcome(outcome);
    });
});