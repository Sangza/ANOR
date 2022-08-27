<p align="center">
  <a href="" rel="noopener">
 <img src="https://docs.reach.sh/assets/logo.png" alt="Project logo"></a>
</p>
<h3 align="center">GuessNik </h3>

<div align="center">


</div>

---

<p align="center"> Tutorial for GuessNik
    <br> 
</p>


In this tutorial we would go through all the steps for creating a decentralized application or probably your first decentralized application on the algorand blockchain using REACH.

If you have minimum knowledge in web development (i.e javascript, python e.t.c) and is new to the blockchain/algorand space this is the best and fun place to start.

## Introduction

Lets start with some few questions to get proper footing


- What is Blockchain?
- What is a Decentralized Application (DAPP)?
- What is Reach?

1 - What is blockchain : Simply put, a blockchain is `"Decentralized"` database. The term blockchain refers to the whole network of `"Distributed"` ledger technologies. It can be a computer file that records transactions. A ledger is actually the foundation of accounting and is as old as writing and money. Now imagine a whole suite of incorruptible digital ledgers of economic transactions that can be programmed to record and track not only financial transactions but also virtually everything of value. The Blockchain Technology confers two important values : `"Transperancy"` and `"Security"`. A Blockchain is distributed to a network of Nodes ie: `"Nodes"` are Computer hardware and software that for the network of the blockchain. The process of Distribution breeds Decentralization ie: There's no Centralized Entity like the Banks that control the blockchain. Decentralization is the foundation of the Blockchain. It confers security, transperancy and accessibilty   It is the work of a blockchain developer to build, maintain, and design blockchain applications and systems. Overall, it seeks to use the unique features of blockchain technology to solve problems and create opportunities.

2 - What is a decentralized application (DAPP) : A DAPP is basically any web application slapped on a blockchain, the keyword here is `"Decentralized"`, it is an application that can operate autonomously, typically through the use of smart contracts, that runs on a decentralized computing, blockchain or other distributed ledger system. Like traditional applications, DApps provide some function or utility to its users. However, unlike traditional applications, DApps operate without human intervention and are not owned by any one entity, rather DApps distribute tokens that represent ownership.

3 - What is Reach : `Reach` is a domain-specific language for building decentralized applications (DApps). `Reach` provides a programming language and specialized compiler for developing decentralized applications. Developers can build applications twice as fast using `Reach` compared to current methods while automatically verifying their code’s correctness. `Reach` is so beautiful because it does so much for the developer in very little time with guaranteed security, `Reach` checks all the theorems in the backend and validates if any of the participants cheats or isn’t being fair making it the best blockchain platform from my own perspective based on speed, convenience and security.

Now that we have a proper understanding of blockchain development and what reach does lets go ahead and prepare all the tools needed to create your first decentralized application, but before that you must be asking  "What is going to be the function of this DAPP in this tutorial" and the answer is We are going to create a game called `GuessNik`. It is a two-player guessing game, one player designated as the `Asker` and the other as the `Guesser`. The `Asker` chooses an umber from `0 to 10`, and the `Guesser` tries to predict the `Asker` number. The Guesser is rewarded based on how close his/her guess is to the `Asker` number. Each participant is rewarde with a portion of our prize pool which is derived from the wager between the two players. 

Pretty simple right, now lets set up our tools needed to create this app

## Installation and Configurations

These setup methods are for Mac OS users for windows users you can check out this [link](https://docs.reach.sh/guide/windows/#guide-windows)

- You will need to install `make` which comes with every mac and also install `Docker `

- To verify if every thing is installed properly run the following commands on your terminal
```bash
make --version
```
```bash
docker --version
```
```bash
docker-compose --version
```
If all this runs succesfully without any errors you are good to go to the next step

- Lets create a directory for this project. I would recommend using 
```bash
mkdir -p ~/reach/GuessNik && cd ~/reach/GuessNik
```
- Next lets install reach using the command below
```bash
curl https://docs.reach.sh/reach -o reach ; chmod +x reach
```
Run ```./reach version``` on your terminal to verify if reach was installed properly

- For the next step make sure your docker is open, then navigate to the directory we just created i.e `reach/GuessNik` then open it on your vs code, once in your vs code open the folder ans create 2 files namely `index.mjs` and `index.rsh` once done open an integrated terminal and run the following command to install the images
```bash
./reach update
```
this is done on your first time using reach beacause reach needs those images to function ideally.

Now that we have finally installed all our requirements we can dive into the fun part.

## Setup

At the end of this tutorial you will be able to create a `Console` app on the Algorand developer network using `JavaScipt` and `Reach` and also a `React` app. Links to the Github : [Console App](https://github.com/benjamin1234-ben/GuessNik_Demo) and [React App](https://github.com/benjamin1234-ben/GuessNik).

Lets start with the `index.rsh` file which is the `Backend` file and the `Smart Contract` of this DApp will be automatically generated by the `Reach Comiler`. In this game there are two Participants,the `Asker` and `Guesser` where `Asker` is the deployer or the contract and `Guesser` attaches to this contract, all these would make more sense as we proceed in this tutorial. I advice you to write the codes out rather than just copying and pasting. Now Let's Begin.

```js
1 'reach 0.1';
2
3 const GuessNik = (askerNumber, guesserNumber) => {
4    const a = askerNumber;
5    const b = guesserNumber;
6    
7    if(askerNumber >= guesserNumber) {
8        return (10 - (a - b)) * 10;
9    } else {
10        return (10 - (b - a)) * 10;
11    };
12 };
```
- Line 1 tells the compiler that this is a reach file.
- Line 3 to 12 defines a function that comuputes the winner of `GuessNik` using their inputs as arguments. The `Algorithm` of the `GuessNik` function specifies the percentage of the `prize pool` each participant is entitled to when the `GuessNik` ends. `GuessNik` says that the `Guesser` or `Asker` reward is based on proximity of the `Guesser` number to the `Asker` number. The range of numbers to be chosen is from `0 to 10`. Let's look at this scenerio, the `Asker` picks `9` as his/ her number and the `Guesser` picks `4` as his/ her number. Based on the `GuessNik Algorithm`, the `Guesser` is rewarded with `50%` of the `prize pool` while the `Asker` gets the remainder of the `prize pool` which is `50%`. The `Prize Pool` is a sum total of the `wager` of the two `participants`. 

```js
14 const Player = {
15    ...hasRandom,
16    getNumber: Fun([], UInt),
17    seeOutcome: Fun([UInt], Null),
18    seeNumbers: Fun([UInt, UInt], Null),
19    informTimeout: Fun([], Null)
20 };
```
- Line 14 to 20 is an `Object(Interact Interface Object)` which contains definitions of functions in the backend which the frontend can Interact with. These functions connect the frontend with the backend. 
- Line 15 `...hasRandom` is a random function which come by default with the `Reach standard library(stdlib)`, This function helps to generate random numbers which will be used as a `salt` in encrypting / hashing a player's number for privacy. More on this later.
- Line 16 `getNumber: Fun([], UInt)` is a function with no arguments and returns an unsigned interger(UInt), it basically gets the number of a player from the frontend.
- Line 16 `seeOutcome: Fun([UInt], Null)`is a function which takes an unsigned interger(UInt) as an argument and returns nothing(Null). it allows both players to view the outcome of the game from the frontend.
- Line 18 `seeNumbers: Fun([UInt, UInt], Null)` is a function which takes an unsigned interger(UInt) as an arguments and returns nothing(Null). it allows both players to be able to view the number of the other player for assumption of fairness.
- Line 19 `informTimeout: Fun([], Null)` is a function with no arguments and returns nothing(Null). it informs a player of a timeout when the deadline is reached.

```js
22 export const main = Reach.App(() => {
23    const Asker = Participant('Asker', {
24        ...Player,
25        wager: UInt,
26        deadline: UInt,
27    });
28    const Guesser = Participant('Guesser', {
29        ...Player,
30        acceptWager: Fun([UInt], Null),
31    });
32    init();
```
- Line 22 to 32 represents the part of your `Reach Program` termed `Application Initialization`. It contains the steps(local and consensus), Participants and so on.
- Line 23 to 27 initializes the first participant in our program called `Asker`. This is done via the function `Participant()` which takes two arguement namely : `Participant Name` and `Interact Interface Object`. The `Asker` is initialized with the `Player Interact Interface Object` via the `spread operator` similar to that seen in `JavaScript`, the `Wager` and the `Deadline` for the game.
- Line 28 to 31 initializes the second participant in our program called `Guesser`. This is done via the function `Participant()` . The `Guesser` is initialized with the `Player Interact Interface Object` and a function `acceptWager: Fun([UInt], Null)` which accepts or declines the wager set by the `Asker`.
- Line 32 `init()` is a functions that finalizes the `Application Initialization` and separates it from the `Local` and `Consensus` steps.

Next we would be looking at the frontend console app using JavaScript i.e our `index.mjs` file. 
```js
import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();
stdlib.setProviderByName("LocalHost");
```
- Line 1 shows the import of `loadStdlib` function which returns an object containing most of the functions and variables of the `Reach Standard Library` that will be used in our frontend and `ask` object which help in performing I/O operations in the `Command Line Interface(CLI or console)` from `@reach-sh/stdlib(Reach Standard Library)`.
- Line 2 show the import of all the contents of `./build/index.main.mjs` file which is the result of the compilation of our `index.rsh` file by the `Reach Compiler`.
- Line 3 show the function call of `loadStdlib()` function.
- Line 4 `setProviderByName("LocalHost")` function sets the provider for our DApp to `LocalHost`. A `Provider` in Reach is the medium for connecting a DApp to a blockchain network. Reach uses alot of providers mainly `ETH` for `Ethereum`, `ALGO` for `Algorand` and `CFX` for `Conflux`. Reach uses providers for both the `mainnet` and `testnet` and even `devnet` which is a local instance of a blockchain network on your computer for easier and seamless programming experience.

```js
6  const isAsker = await ask.ask(
7   `Are you the Asker?`,
8   ask.yesno
9  );
10 const who = isAsker ? 'Asker' : 'Guesser';
11
12 console.log(`Starting Guessnik! as ${who}`);
```
- Line 6 to 12 depicts the `Role` phase of our DApp. The User selects to either be an `Asker` or `Guesser`, after which `GuessNik` begins.

```js
14 let acc = null;
15 const createAcc = await ask.ask(
16   `Would you like to create an account? (only possible on devnet)`,
17   ask.yesno
18 );
19 if (createAcc) {
20   acc = await stdlib.newTestAccount(stdlib.parseCurrency(10000));
21 } else {
22  const secret = await ask.ask(
23    `What is your account secret?`,
24    (x => x)
25  );
26  acc = await stdlib.newAccountFromSecret(secret);
27 }
```
- Line 14 to 27 depicts the `Account Creation` phase on our DApp. For the end-user to play `GuessNik`, he/she must connect to a blockchain network via an `External Owned Account(EOA)`. An EOA is basically a user's wallet address most probably created with `MetaMask`. As seen above, we will be creating test accounts with fake currency. This can only be done on the `devnet` which resides on your local computer.
- On line 20, `stdlib.newTestAccount(stdlib.parseCurrency(10000))` function creates a new account on your devnet with a starting of `10000`, provided the user chooses to create a new account, hence `CreateAcc` function returns `true`.
- On line 26, `stdlib.newAccountFromSecret(secret)` function creates a new account from the user's `secret`. A `Secret` is a human readable format of an `External Owned Account(EOA)` or `Wallet` private address. When creating an EOA or wallet, the user is asked to store his/her secret ie `12 random words` in a safe location. The secret is used to gain access to your account, if you lose it, your wallet is gone forever. Our DApp uses the secret to get access to the user's wallet.

```js
29 let ctc = null;
30 if (isAsker) {
31  ctc = acc.contract(backend);
32  ctc.getInfo().then((info) => {
33    console.log(`The contract is deployed as ${JSON.stringify(info)}`); });
34 } else {
35  const info = await ask.ask(
36    `Please paste the contract information:`,
37    JSON.parse
38  );
39  ctc = acc.contract(backend, info);
40 }
```
- Line 29 to 40 shows the `Contract Deployment and Attachment` phase of our DApp. As seen above, the `Asker` deploys the contract 
while the `Guesser` attachs to the already deployed contract. A Smart Contract is a peice of code deployed on a blockchain network that specifies the set of rules that the `Participants` and `Principals` of our DApp must follow.
- On line 31, `acc.contract(backend)` function is used to deploy the contract from the `backend` which is a compiled form of our `index.rsh` file as seen on line 2.
- On line 32, `ctc.getInfo()` function is used to get information about the deployed contract like contract `address`, contract `Application Binary Interface(ABI)` and so on.
- On line 39, `acc.contract(backend, info)` function is used attach to the the deployed contract using the `backend` and `info` which is provided by the `ctc.getInfo()` function.

Now lets return back to the `index.rsh` file
```js
34  const informTimeout = () => {
35        each([Asker, Guesser], () => {
36        interact.informTimeout();
37      });
38  };
```
- Line 34 to 38 specifies a `Local` step in our DApp in which `each` participant interacts with the `informTimeout()` function.
- Line 35 to 37 specifies the `each` function which is a `local` step function that depicts that `each` participants can participate in a `local` step of a DApp.
- Line 36 specifies the interaction with `informTimeout()` function via the `Interact Interface Object`. This means that both participants(players) can call a timeout when the other participant(player) takes too long.

```js
40	Asker.only(() => {
41        const wager = declassify(interact.wager);
42        const deadline = declassify(interact.deadline);
43    });
44
45    Asker.publish(wager, deadline).pay(wager);
46
47    commit();
```
- Line 40 to 43 specifies a `Local` step in our DApp in which `only` a participant - `Asker` interacts with some variables.
- Line 41, the `declassify(interact.wager)` function gets the wager set by the `frontend` participant and stores it on our backend. The `declassify` function serves to decrypt the data - `wager` sent from the frontend. This is because by default `Reach` encrypts all data sent across its networks. Emphasis on `SECURITY`.
- Line 42, the `declassify(interact.deadline)` function gets the deadline set by the `frontend` participant and stores it on our backend.
- Line 45 specifies a `Consensus` step in our DApp in which a participant - `Asker` publishes the data - `wager and deadline` to the blockchain network and then pays the `wager`. A `Consensus` step is any action or process that is performed on the blockchain network. Whereas in the `Local` step, data is stored on the participant's local computer. In the `Consensus` step data is stored on the blockchain network. 
- Line 47, the `commit()` function finalizes any action performed on the blockchain network. It helps to separate a `Consensus` step from a `Local` step.

```js
49	Guesser.only(() => {
50        interact.acceptWager(wager);
51    });
52
53    Guesser.pay(wager).timeout(relativeTime(deadline), () => closeTo(Asker, informTimeout));
54
55    commit();
56
57    Asker.only(() => {
58      const _askerNumber = interact.getNumber();
59      const [_commitAsker, _saltAsker] = makeCommitment(interact, _askerNumber);
60      const commitAsker = declassify(_commitAsker);
61    });
62 
63    commit();
64
65	Asker.publish(commitAsker).timeout(relativeTime(deadline), () => closeTo(Guesser, informTimeout));
66
67    commit();
```
- Line 49 to 51 specifies a `Local` step in our DApp in which `only` a participant - `Guesser` interacts with the function, `acceptWager()`.
- Line 50, the `interact.acceptWager(wager)` function accepts or declines the wager set by the `Asker`.
- Line 53 specifies a `Consensus` step where the `Guesser` pays the `wager`, if the `Guesser` does not pay before the `deadline`, `GuesssNik` ends.
- Line 57 to 61 specifies a `Local` step in our DApp in which `only` a participant - `Asker` interacts with some functions as shown above.
- Line 58, the `interact.getNumber()` function gets the number choosen by the frontend participant - `Asker`.
- Line 59, the `makeCommitment(interact, _askerNumber)` function helps to encrypt or commit the `Asker` number. The commitment comes with a secret `salt` which must be revealed later. This `salt` was generated by the `random` function inside of `hasRandom` and its why we pass `interact` to this function. This helps to make the input of the `Asker` hidden before revealing at the same time when `Guesser` interacts with the same function making it impossible to cheat.
- Line 60 has the `Asker` declassify the commitment.
- Line 65 has the `Asker` publish the `commit` of her number, this will be used later to reveal the `salt` value. There is also a `timeout()` function which is triggered when a `deadline` is reached and `GuessNik` ends.

```js
69	unknowable(Guesser, Asker(_askerNumber, _saltAsker));
70
71    Guesser.only(() => {
72      const guesserNumber = declassify(interact.getNumber());
73    });
74
75    Guesser.publish(guesserNumber).timeout(relativeTime(deadline), () => closeTo(Asker, informTimeout));
76
77    commit();
```
- Line 69 depicts an `assertion` that the `Guesser` has no idea of the `Asker` number using the `unknowable()` function.
- Line 71 to 73 specifies a `Local` step in our DApp in which `only` a participant - `Guesser` interacts with the function, `getNumber()`.
- Line 72, the `interact.getNumber()` function gets the number choosen by the frontend participant - `Guesser`.
- Line 75 has the `Gueser` publish his/her number, if `timeout()` function is triggered when a `deadline` is reached and `GuessNik` ends.

```js
79	Asker.only(() => {
80      const saltAsker = declassify(_saltAsker);
81      const askerNumber = declassify(_askerNumber);
82    });
83
84	Asker.publish(saltAsker, askerNumber).timeout(relativeTime(deadline), () => closeTo(Guesser, informTimeout));
85
86    checkCommitment(commitAsker, saltAsker, askerNumber);
87
88    const outcome = GuessNik(askerNumber, guesserNumber);
89
90    const guesserAmount = outcome * 2 * wager / 100;
91
92    const askerAmount = balance() - guesserAmount;
93
94    transfer(guesserAmount).to(Guesser);
95    transfer(askerAmount).to(Asker);
96
97    commit();
98
99    each([Asker, Guesser], () => {
100        interact.seeOutcome(outcome);
101       interact.seeNumbers(askerNumber, guesserNumber);
102    });
```
- Line 79 to 82 specifies a `Local` step in our DApp in which `only` a participant - `Asker` declassifies the `salt` and `number`. 
- Line 80 has the `Asker` declassify the `salt`.
- Line 81 has the `Asker` declassify the `number`.
- Line 84 has the `Asker` publish the  `salt` and `number`. There is also a `timeout()` function which is triggered when a `deadline` is reached and `GuessNik` ends.
- Line 86, the `checkCommitment(commitAsker, saltAsker, askerNumber)` function checks whether the `salt` and `number` which was just published(line 84) matches the `commit` published on line 65. This is because a `commit` is generated from the `number`, thus if the `number` changes the `commit` changes. This prevents the `Asker` from changing his/her `number` even though he/she can see the `Guesser` `number` making it impossible to cheat.
- Line 88, the outcome of `GuessNik` is gotten from the `GuessNik(askerNumber, guesserNumber)` function. The outcome is the percentage of the `prize pool` that the `Guesser` is rewarded with.
- Line 90 specifies the amount the `Guesser` gets from the `prize pool`.
- Line 92 specifies the amount the `Asker` gets from the `prize pool`. The `balance()` function gets the amount of tokens on the `contract`.
- Line 94 and 95 transfers the respective amounts to the `Asker` and `Guesser`.
- Line 99 to 102 specifies a `Local` step in our DApp in which `both` participants interacts with some functions.
- Line 100 has both participants see the outcome of `GuessNik`.
- Line 101 has both participants see the numbers of each other.

This is the end of the `index.rsh` file now lets finialize the `index.mjs` user interface.

```js
42 const fmt = (x) => stdlib.formatCurrency(x, 4);
43 const getBalance = async () => fmt(await stdlib.balanceOf(acc));
44
45 const before = await getBalance();
46 console.log(`Your balance is ${before}`);
47
48 const interact = { ...stdlib.hasRandom };
49
50 interact.informTimeout = () => {
51  console.log(`There was a timeout.`);
52  process.exit(1);
53 };
```
- Line 42 to 46 specifies the balance 0f the participant before `GueesNik`. 
- Line 48 retrieves the `hasRandom` function from the `Reach Standard Library`. The `Interact Interface Object` is initialized.
- Line 50 to 53 has the participant interact with the `informTimeout()` function.

```js
55 if (isAsker) {
56  const amt = await ask.ask(
57    `How much do you want to wager?`,
58    stdlib.parseCurrency
59  );
60  interact.wager = amt;
61  interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
62 } else {
63  interact.acceptWager = async (amt) => {
64    const accepted = await ask.ask(
65      `Do you accept the wager of ${fmt(amt)}?`,
66      ask.yesno
67    );
68    if (!accepted) {
69      process.exit(0);
70    }
71  };
72 }
```
- Line 55 to 72 specifies the `Wagering` phase of our DApp.
- Line 56 to 60 has the `Asker` set the wager and send it to the backend via the `Interact Interface Object`. 
- Line 61 has the `Asker` set the deadline for `GuessNik` on different blockchain network eg: `ETH, ALGO, CFX`. This is a wonderful feature of the `Reach Language` in that it is Cross-chain compatible, thus one codebase can be deployed on multiple blockchain network. In the `Reach Language`, time is not measured in seconds but in the number of `block` rounds in a blockchain network.
- Line 62 to 72 has the `Guesser` accept or decline the `wager`.

```js
74 const arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
75
76 interact.getNumber = async () => {
77  const number = await ask.ask(`What number will you play?`, (x) => {
78    const number = x;
79    if ( !arrNum.includes(number) ) {
80      throw Error(`Not a valid number ${number}, Number must fall betwween the range of 0 - 10`);
81    }
82    return number;
83  });
84  console.log(`You played ${number}`);
85  return number;
86 };
87
88 interact.seeOutcome = async (outcome) => {
89  console.log(`The outcome is : You get ${outcome}% of the Guessnik prize pool`);
90 };
91 interact.seeNumbers = async (a, b) => {
92  isAsker ? console.log(`Your number is ${a}, while your opponents number is ${b}`) : console.log(`Your number is ${b}, while your opponents number is ${a}`) 
93 }
94
95 const participant = isAsker ? ctc.p.Asker : ctc.p.Guesser;
96 await participant(interact);
97
98 const after = await getBalance();
99 console.log(`Your balance is now ${after}`);
100 ask.done();
```
- Line 74 defines the range of numbers that each participant is allowed to choose from.
- Line 76 to 86 has the participant select a number from the given range and sends it to the backend via the `Interact Interface Object`.
- Line 88 to 90 specifies the outcome seen by each participant after `GuessNik` ends.
- Line 91 to 93 has the numbers selected by each participant to be seen by them.
- line 95 and 96 specifies the connection between the frontend participants and the backend participants using the `Interact Interface Object` via `participant(interact)` function.
- Line 98 to 100 specifies the balances of the participant after `GuessNik` ends ensuring unbiased payout.

# Finalization 
The `index.rsh` file should look like this
```js
'reach 0.1';

const game = (askerNumber, guesserNumber) => {
    const a = askerNumber;
    const b = guesserNumber;
    
    if(askerNumber >= guesserNumber) {
        return (10 - (a - b)) * 10;
    } else {
        return (10 - (b - a)) * 10;
    };
};

const Player = {
    ...hasRandom,
    getNumber: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
    seeNumbers: Fun([UInt, UInt], Null),
    informTimeout: Fun([], Null)
};

export const main = Reach.App(() => {
    const Asker = Participant('Asker', {
        ...Player,
        wager: UInt,
        deadline: UInt,
    });
    const Guesser = Participant('Guesser', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });
    init();

    const informTimeout = () => {
        each([Asker, Guesser], () => {
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

    commit()

    Asker.only(() => {
      const _askerNumber = interact.getNumber();
      const [_commitAsker, _saltAsker] = makeCommitment(interact, _askerNumber);
      const commitAsker = declassify(_commitAsker);
    });
 
    commit();

    Asker.publish(commitAsker).timeout(relativeTime(deadline), () => closeTo(Guesser, informTimeout));

    commit();

    unknowable(Guesser, Asker(_askerNumber, _saltAsker));

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

    const outcome = game(askerNumber, guesserNumber);

    const guesserAmount = outcome * 2 * wager / 100;

    const askerAmount = balance() - guesserAmount;

    transfer(guesserAmount).to(Guesser);
    transfer(askerAmount).to(Asker);

    commit();

    each([Asker, Guesser], () => {
        interact.seeOutcome(outcome);
        interact.seeNumbers(askerNumber, guesserNumber);
    });
});
```
And the `index.mjs` file should look like this
```js
import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();
stdlib.setProviderByName("LocalHost");

const isAsker = await ask.ask(
  `Are you the Asker?`,
  ask.yesno
);
const who = isAsker ? 'Asker' : 'Guesser';

console.log(`Starting Guessnik! as ${who}`);

let acc = null;
const createAcc = await ask.ask(
  `Would you like to create an account? (only possible on devnet)`,
  ask.yesno
);
if (createAcc) {
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(10000));
} else {
  const secret = await ask.ask(
    `What is your account secret?`,
    (x => x)
  );
  acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if (isAsker) {
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as ${JSON.stringify(info)}`); });
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}`);

const interact = { ...stdlib.hasRandom };

interact.informTimeout = () => {
  console.log(`There was a timeout.`);
  process.exit(1);
};

if (isAsker) {
  const amt = await ask.ask(
    `How much do you want to wager?`,
    stdlib.parseCurrency
  );
  interact.wager = amt;
  interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
} else {
  interact.acceptWager = async (amt) => {
    const accepted = await ask.ask(
      `Do you accept the wager of ${fmt(amt)}?`,
      ask.yesno
    );
    if (!accepted) {
      process.exit(0);
    }
  };
}

const arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interact.getNumber = async () => {
  const number = await ask.ask(`What number will you play?`, (x) => {
    const number = x;
    if ( !arrNum.includes(number) ) {
      throw Error(`Not a valid number ${number}, Number must fall betwween the range of 0 - 10`);
    }
    return number;
  });
  console.log(`You played ${number}`);
  return number;
};

interact.seeOutcome = async (outcome) => {
  console.log(`The outcome is : You get ${outcome}% of the Guessnik prize pool`);
};
interact.seeNumbers = async (a, b) => {
  isAsker ? console.log(`Your number is ${a}, while your opponents number is ${b}`) : console.log(`Your number is ${b}, while your opponents number is ${a}`) 
}

const part = isAsker ? ctc.p.Asker : ctc.p.Guesser;
await part(interact);

const after = await getBalance();
console.log(`Your balance is now ${after}`);
ask.done();
```
- Now lets compile the `index.rsh file` using the following command on your integrated terminal 
```bash
./reach compile
```
The output should look like this
```bash
Verifying knowledge assertions
Verifying for generic connector
  Verifying when ALL participants are honest
  Verifying when NO participants are honest
Checked 87 theorems; No failures!
```
Then we would go ahead and run the `index.mjs` with the reach backend using 
```bash
./reach run
```
You will need to open two instances of your `Command Line Interface`, One for each participant of `GuessNik` now you can run our DApp
```bash
./reach run
```
The output for the `Asker` should look like this
```bash
Warning! Using development RPC key: REACH_RPC_KEY=opensesame.
Warning! The current TLS certificate is only suitable for development purposes.
Verifying knowledge assertions
Verifying for generic connector
  Verifying when ALL participants are honest
  Verifying when NO participants are honest
Checked 87 theorems; No failures!
Creating 2022-07-10t12-43-33z-ix6j_GuessNik_run ... done

> app
> node --experimental-modules --unhandled-rejections=strict index.mjs


*** Warning! TLS verification disabled! ***

 This is highly insecure in Real Life™ applications and must
 only be permitted under controlled conditions (such as
 during development).

Are you the Asker?
y
Starting Guessnik! as Asker
Would you like to create an account? (only possible on devnet)
y
The contract is deployed as "0xee932a281b70C23c7a859e0B97D32961Ff6122ab"
Your balance is 9999.9999
How much do you want to wager?
1000
What number will you play?
7
You played 7
The outcome is : You get 60% of the Guessnik prize pool
Your number is 7, while your opponents number is 1
Your balance is now 11199.9999
```
The output for the `Guesser` should look like this
```bash
Warning! Using development RPC key: REACH_RPC_KEY=opensesame.
Warning! The current TLS certificate is only suitable for development purposes.
Verifying knowledge assertions
Verifying for generic connector
  Verifying when ALL participants are honest
  Verifying when NO participants are honest
Checked 87 theorems; No failures!
Creating 2022-07-10t12-44-36z-ix6j_GuessNik_run ... done

> app
> node --experimental-modules --unhandled-rejections=strict index.mjs


*** Warning! TLS verification disabled! ***

 This is highly insecure in Real Life™ applications and must
 only be permitted under controlled conditions (such as
 during development).

Are you the Asker?
n
Starting Guessnik! as Guesser
Would you like to create an account? (only possible on devnet)
y
Please paste the contract information:
"0xee932a281b70C23c7a859e0B97D32961Ff6122ab"
Your balance is 10000
Do you accept the wager of 1000
y
What number will you play?
1
You played 1
The outcome is : You get 40% of the Guessnik prize pool
Your number is 1, while your opponents number is 7
Your balance is now 10800
```

Now we have finally created our `GuessNik` console DApp Yay.
For a link to the test repo Click [Here](https://github.com/benjamin1234-ben/GuessNik_Demo)
Now we will do a brief explaination of how to build the frontend using react js

# Further Learning
If you want to implement this using React
below is the app.js file for the `GueeNik` logic.
```js
import './App.css';
import { Grid, Item, Button, Modal, Box, Divider, CircularProgress } from '@mui/material';
import { useState } from 'react';
import ErrorBoundary from './components/error';
import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAccount } from './redux/slice';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
// import { ALGO_MyAlogoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setProviderByName("LocalHost");
// reach.setWalletFallback(reach.walletFallback({providerEnv: "TestNet", MyAlgoConnect}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [rules, setRules] = useState(true);
  const [account, setAccount] = useState();
  const [connect, setConnect] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect();

    const handleClick = async (e) => {
      e.preventDefault();

      // const acc = await reach.getDefaultAccount();
      // const balAtomic = await reach.balanceOf(acc);
      // const balance = reach.formatCurrency(balAtomic, 4);
      // const account = { acc, balance }

      const account = await reach.newTestAccount(reach.parseCurrency(100));

      account.then((acc) => {
        console.log(account);
        setAccount(acc);
        dispatch(updateAccount(acc));
        setRules(false);
        setConnect(true);
        if(reach.canFundFromFaucet()) {
          navigate("/fund");
        } else {
          // navigate("/role");
          console.log(account);
        };
      }).catch((error) => console.log(error))
    };

  return (
    <ErrorBoundary>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2}/>
          <Grid item xs={8}>
              <Box sx={{textAlign: "center"}}>
                <h1>GuessNik</h1>
              </Box>
              {rules &&
               <div>
                  <Divider>RULES</Divider>
                  <Box sx={{textAlign: "center", marginTop: 5, marginBottom: 5}}>
                    <Button variant="text" color="primary" onClick={() => setOpen(true)}>Rules of GuessNik</Button>
                  </Box>
                  <Divider>RULES</Divider>
                  <Modal onClose={() => setOpen(false)} open={open} aria-labelledby="title" aria-describedby="description">
                    <Box sx={style}>
                      <h1 id="title">Rules of GuessNik</h1>
                      <p id="description">
                        This is a two player game - "The Asker and The Guesser". The Asker initates the game and sets the wager while the Guesser joins the game and decides whether or not to
                        accept the wager. The wager paid by both the Asker and Guesser is added to our Liquidity "LUCK" Pool. The Asker selects a unique number of her choice from a given range
                        of numbers "0 - 10", then the Guesser try to predict the unique number. Guess What ?? -- There are no wrong answers. If the Guesser wins, he/she is rewarded with the most 
                        part of our pool. If the Asker wins, he/she is rewarded with the most part of our pool. If the is a draw, both the Asker and Guesser are rewarded with equal amount of the 
                        pool. The outcome of the game is determined by our special Formula -- It calculates how far the Guesser's number is from the Asker's unique number and determines the pool
                        that each player gets.
                      </p>
                    </Box> 
                  </Modal>
               </div>
              }
              {(connect && !account) &&
               <Box sx={{textAlign: "center"}}>
                <p>Please wait while we connect to your wallet account. If this takes more than a few seconds then there is something wrong.</p>
                <CircularProgress color="primary" />
               </Box>
              }
              {!account &&
               <Box sx={{textAlign: "center", marginTop: 5, marginBottom: 5}}>
                <Button variant="contained" color="success" onClick={handleClick}>{!connect ? 'Connect Wallet' : 'Loading....'}</Button>
               </Box>
              }
          </Grid>
          <Grid item xs={2}/>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}/>
         <Grid item xs={8}>
            <Outlet/>
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </Box>
    </ErrorBoundary>
  );
};

export default App;
```
For the link to the full repo check out the [link](https://github.com/benjamin1234-ben/GuessNik).

# Conclusion 
If you made it here it means you have completed the `GuesssNik` Reach tutorial and you have created your first DApp. 
Our discord community is open to everyone, if you have any questions concerning reach please reach out to us on the discord [community](https://discord.gg/AZsgcXu).