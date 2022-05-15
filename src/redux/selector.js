const getAccount = (state) => (state.app.account); 

const getContract = (state) => (state.app.contract); 

const getWager = (state) => (state.app.wager); 

const getNumber = (state) => (state.app._number); 

const getDefaults = (state) => (state.app.defaults); 

export default { getAccount, getContract, getWager, getNumber, getDefaults };