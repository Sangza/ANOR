// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Asker(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Asker expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Asker expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v247 = stdlib.protect(ctc0, interact.deadline, 'for Asker\'s interact field deadline');
  const v248 = stdlib.protect(ctc0, interact.wager, 'for Asker\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v248, v247],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/index.rsh:37:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v248, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v252, v253], secs: v255, time: v254, didSend: v31, from: v251 } = txn1;
      
      sim_r.txns.push({
        amt: v252,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v264 = stdlib.add(v254, v253);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v252, v253], secs: v255, time: v254, didSend: v31, from: v251 } = txn1;
  ;
  const v264 = stdlib.add(v254, v253);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v264],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v251, v252, v253, v264],
      evt_cnt: 0,
      funcNum: 2,
      lct: v254,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v407, time: v406, didSend: v222, from: v405 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v252,
          kind: 'from',
          to: v251,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v407, time: v406, didSend: v222, from: v405 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './src/index.rsh:28:31:application',
      fs: ['at ./src/index.rsh:27:13:application call to [unknown function] (defined at: ./src/index.rsh:27:35:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./src/index.rsh:26:30:function exp)', 'at ./src/index.rsh:45:69:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Asker'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v270, time: v269, didSend: v40, from: v268 } = txn2;
    const v272 = stdlib.add(v252, v252);
    ;
    const v275 = stdlib.protect(ctc0, await interact.getNumber(), {
      at: './src/index.rsh:48:46:application',
      fs: ['at ./src/index.rsh:47:15:application call to [unknown function] (defined at: ./src/index.rsh:47:19:function exp)'],
      msg: 'getNumber',
      who: 'Asker'
      });
    const v276 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:53:31:application',
      fs: ['at ./src/index.rsh:49:56:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./src/index.rsh:47:15:application call to [unknown function] (defined at: ./src/index.rsh:47:19:function exp)'],
      msg: 'random',
      who: 'Asker'
      });
    const v277 = stdlib.digest(ctc1, [v276, v275]);
    
    const v285 = stdlib.add(v269, v253);
    const txn3 = await (ctc.sendrecv({
      args: [v251, v252, v253, v268, v272, v285, v277],
      evt_cnt: 1,
      funcNum: 3,
      lct: v269,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./src/index.rsh:55:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v288], secs: v290, time: v289, didSend: v54, from: v287 } = txn3;
        
        ;
        const v298 = stdlib.add(v289, v253);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v285],
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v251, v252, v253, v268, v272, v285],
        evt_cnt: 0,
        funcNum: 4,
        lct: v269,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v389, time: v388, didSend: v191, from: v387 } = txn4;
          
          ;
          sim_r.txns.push({
            amt: v272,
            kind: 'from',
            to: v268,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v389, time: v388, didSend: v191, from: v387 } = txn4;
      ;
      const v390 = stdlib.addressEq(v251, v387);
      const v391 = stdlib.addressEq(v268, v387);
      const v392 = v390 ? true : v391;
      stdlib.assert(v392, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./src/index.rsh:55:77:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Asker'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './src/index.rsh:28:31:application',
        fs: ['at ./src/index.rsh:27:13:application call to [unknown function] (defined at: ./src/index.rsh:27:35:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./src/index.rsh:26:30:function exp)', 'at ./src/index.rsh:55:77:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Asker'
        });
      
      return;
      
      }
    else {
      const {data: [v288], secs: v290, time: v289, didSend: v54, from: v287 } = txn3;
      ;
      const v291 = stdlib.addressEq(v251, v287);
      stdlib.assert(v291, {
        at: './src/index.rsh:55:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Asker'
        });
      const v298 = stdlib.add(v289, v253);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: ['time', v298],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v251, v252, v253, v268, v272, v288, v298],
          evt_cnt: 0,
          funcNum: 6,
          lct: v289,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v371, time: v370, didSend: v157, from: v369 } = txn5;
            
            ;
            sim_r.txns.push({
              amt: v272,
              kind: 'from',
              to: v251,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v371, time: v370, didSend: v157, from: v369 } = txn5;
        ;
        const v372 = stdlib.addressEq(v251, v369);
        const v373 = stdlib.addressEq(v268, v369);
        const v374 = v372 ? true : v373;
        stdlib.assert(v374, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./src/index.rsh:65:81:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Asker'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './src/index.rsh:28:31:application',
          fs: ['at ./src/index.rsh:27:13:application call to [unknown function] (defined at: ./src/index.rsh:27:35:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./src/index.rsh:26:30:function exp)', 'at ./src/index.rsh:65:81:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Asker'
          });
        
        return;
        
        }
      else {
        const {data: [v304], secs: v306, time: v305, didSend: v64, from: v303 } = txn4;
        ;
        const v307 = stdlib.addressEq(v268, v303);
        stdlib.assert(v307, {
          at: './src/index.rsh:65:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Asker'
          });
        const v314 = stdlib.add(v305, v253);
        const txn5 = await (ctc.sendrecv({
          args: [v251, v252, v268, v272, v288, v304, v314, v276, v275],
          evt_cnt: 2,
          funcNum: 7,
          lct: v305,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./src/index.rsh:74:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v319, v320], secs: v322, time: v321, didSend: v74, from: v318 } = txn5;
            
            ;
            const v326 = stdlib.sub(v320, v304);
            const v327 = stdlib.sub(stdlib.checkedBigNumberify('./src/index.rsh:4:20:decimal', stdlib.UInt_max, '0'), v326);
            const v328 = stdlib.sub(stdlib.checkedBigNumberify('./src/index.rsh:4:14:decimal', stdlib.UInt_max, '10'), v327);
            const v329 = stdlib.mul(v328, stdlib.checkedBigNumberify('./src/index.rsh:4:59:decimal', stdlib.UInt_max, '10'));
            const v330 = stdlib.div(v329, stdlib.checkedBigNumberify('./src/index.rsh:80:25:decimal', stdlib.UInt_max, '100'));
            const v331 = stdlib.mul(stdlib.checkedBigNumberify('./src/index.rsh:80:33:decimal', stdlib.UInt_max, '2'), v252);
            const v332 = stdlib.mul(v330, v331);
            sim_r.txns.push({
              amt: v332,
              kind: 'from',
              to: v268,
              tok: undefined /* Nothing */
              });
            const v337 = stdlib.sub(stdlib.checkedBigNumberify('./src/index.rsh:81:16:decimal', stdlib.UInt_max, '100'), v329);
            const v338 = stdlib.div(v337, stdlib.checkedBigNumberify('./src/index.rsh:81:33:decimal', stdlib.UInt_max, '100'));
            const v340 = stdlib.mul(v338, v331);
            sim_r.txns.push({
              amt: v340,
              kind: 'from',
              to: v251,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v314],
          tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v251, v252, v268, v272, v288, v304, v314],
            evt_cnt: 0,
            funcNum: 8,
            lct: v305,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v353, time: v352, didSend: v123, from: v351 } = txn6;
              
              ;
              sim_r.txns.push({
                amt: v272,
                kind: 'from',
                to: v268,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v353, time: v352, didSend: v123, from: v351 } = txn6;
          ;
          const v354 = stdlib.addressEq(v251, v351);
          const v355 = stdlib.addressEq(v268, v351);
          const v356 = v354 ? true : v355;
          stdlib.assert(v356, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./src/index.rsh:74:88:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Asker'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './src/index.rsh:28:31:application',
            fs: ['at ./src/index.rsh:27:13:application call to [unknown function] (defined at: ./src/index.rsh:27:35:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./src/index.rsh:26:30:function exp)', 'at ./src/index.rsh:74:88:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Asker'
            });
          
          return;
          
          }
        else {
          const {data: [v319, v320], secs: v322, time: v321, didSend: v74, from: v318 } = txn5;
          ;
          const v323 = stdlib.addressEq(v251, v318);
          stdlib.assert(v323, {
            at: './src/index.rsh:74:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Asker'
            });
          const v324 = stdlib.digest(ctc1, [v319, v320]);
          const v325 = stdlib.digestEq(v288, v324);
          stdlib.assert(v325, {
            at: 'reach standard library:58:17:application',
            fs: ['at ./src/index.rsh:76:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
            msg: null,
            who: 'Asker'
            });
          const v326 = stdlib.sub(v320, v304);
          const v327 = stdlib.sub(stdlib.checkedBigNumberify('./src/index.rsh:4:20:decimal', stdlib.UInt_max, '0'), v326);
          const v328 = stdlib.sub(stdlib.checkedBigNumberify('./src/index.rsh:4:14:decimal', stdlib.UInt_max, '10'), v327);
          const v329 = stdlib.mul(v328, stdlib.checkedBigNumberify('./src/index.rsh:4:59:decimal', stdlib.UInt_max, '10'));
          const v330 = stdlib.div(v329, stdlib.checkedBigNumberify('./src/index.rsh:80:25:decimal', stdlib.UInt_max, '100'));
          const v331 = stdlib.mul(stdlib.checkedBigNumberify('./src/index.rsh:80:33:decimal', stdlib.UInt_max, '2'), v252);
          const v332 = stdlib.mul(v330, v331);
          ;
          const v337 = stdlib.sub(stdlib.checkedBigNumberify('./src/index.rsh:81:16:decimal', stdlib.UInt_max, '100'), v329);
          const v338 = stdlib.div(v337, stdlib.checkedBigNumberify('./src/index.rsh:81:33:decimal', stdlib.UInt_max, '100'));
          const v340 = stdlib.mul(v338, v331);
          ;
          stdlib.protect(ctc3, await interact.seeOutcome(v329), {
            at: './src/index.rsh:86:28:application',
            fs: ['at ./src/index.rsh:85:9:application call to [unknown function] (defined at: ./src/index.rsh:85:31:function exp)'],
            msg: 'seeOutcome',
            who: 'Asker'
            });
          
          return;
          }
        
        }
      
      }
    
    }
  
  
  
  };
export async function Guesser(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Guesser expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Guesser expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v252, v253], secs: v255, time: v254, didSend: v31, from: v251 } = txn1;
  ;
  const v264 = stdlib.add(v254, v253);
  stdlib.protect(ctc1, await interact.acceptWager(v252), {
    at: './src/index.rsh:42:29:application',
    fs: ['at ./src/index.rsh:41:17:application call to [unknown function] (defined at: ./src/index.rsh:41:21:function exp)'],
    msg: 'acceptWager',
    who: 'Guesser'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v251, v252, v253, v264],
    evt_cnt: 0,
    funcNum: 1,
    lct: v254,
    onlyIf: true,
    out_tys: [],
    pay: [v252, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v270, time: v269, didSend: v40, from: v268 } = txn2;
      
      const v272 = stdlib.add(v252, v252);
      sim_r.txns.push({
        amt: v252,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v285 = stdlib.add(v269, v253);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v264],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v251, v252, v253, v264],
      evt_cnt: 0,
      funcNum: 2,
      lct: v254,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v407, time: v406, didSend: v222, from: v405 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v252,
          kind: 'from',
          to: v251,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v407, time: v406, didSend: v222, from: v405 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './src/index.rsh:28:31:application',
      fs: ['at ./src/index.rsh:27:13:application call to [unknown function] (defined at: ./src/index.rsh:27:35:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./src/index.rsh:26:30:function exp)', 'at ./src/index.rsh:45:69:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Guesser'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v270, time: v269, didSend: v40, from: v268 } = txn2;
    const v272 = stdlib.add(v252, v252);
    ;
    const v285 = stdlib.add(v269, v253);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: ['time', v285],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v251, v252, v253, v268, v272, v285],
        evt_cnt: 0,
        funcNum: 4,
        lct: v269,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v389, time: v388, didSend: v191, from: v387 } = txn4;
          
          ;
          sim_r.txns.push({
            amt: v272,
            kind: 'from',
            to: v268,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v389, time: v388, didSend: v191, from: v387 } = txn4;
      ;
      const v390 = stdlib.addressEq(v251, v387);
      const v391 = stdlib.addressEq(v268, v387);
      const v392 = v390 ? true : v391;
      stdlib.assert(v392, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./src/index.rsh:55:77:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Guesser'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './src/index.rsh:28:31:application',
        fs: ['at ./src/index.rsh:27:13:application call to [unknown function] (defined at: ./src/index.rsh:27:35:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./src/index.rsh:26:30:function exp)', 'at ./src/index.rsh:55:77:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Guesser'
        });
      
      return;
      
      }
    else {
      const {data: [v288], secs: v290, time: v289, didSend: v54, from: v287 } = txn3;
      ;
      const v291 = stdlib.addressEq(v251, v287);
      stdlib.assert(v291, {
        at: './src/index.rsh:55:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Guesser'
        });
      const v298 = stdlib.add(v289, v253);
      const v302 = stdlib.protect(ctc0, await interact.getNumber(), {
        at: './src/index.rsh:62:58:application',
        fs: ['at ./src/index.rsh:61:17:application call to [unknown function] (defined at: ./src/index.rsh:61:21:function exp)'],
        msg: 'getNumber',
        who: 'Guesser'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v251, v252, v253, v268, v272, v288, v298, v302],
        evt_cnt: 1,
        funcNum: 5,
        lct: v289,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./src/index.rsh:65:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v304], secs: v306, time: v305, didSend: v64, from: v303 } = txn4;
          
          ;
          const v314 = stdlib.add(v305, v253);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v298],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v251, v252, v253, v268, v272, v288, v298],
          evt_cnt: 0,
          funcNum: 6,
          lct: v289,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v371, time: v370, didSend: v157, from: v369 } = txn5;
            
            ;
            sim_r.txns.push({
              amt: v272,
              kind: 'from',
              to: v251,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v371, time: v370, didSend: v157, from: v369 } = txn5;
        ;
        const v372 = stdlib.addressEq(v251, v369);
        const v373 = stdlib.addressEq(v268, v369);
        const v374 = v372 ? true : v373;
        stdlib.assert(v374, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./src/index.rsh:65:81:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Guesser'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './src/index.rsh:28:31:application',
          fs: ['at ./src/index.rsh:27:13:application call to [unknown function] (defined at: ./src/index.rsh:27:35:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./src/index.rsh:26:30:function exp)', 'at ./src/index.rsh:65:81:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Guesser'
          });
        
        return;
        
        }
      else {
        const {data: [v304], secs: v306, time: v305, didSend: v64, from: v303 } = txn4;
        ;
        const v307 = stdlib.addressEq(v268, v303);
        stdlib.assert(v307, {
          at: './src/index.rsh:65:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Guesser'
          });
        const v314 = stdlib.add(v305, v253);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v314],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v251, v252, v268, v272, v288, v304, v314],
            evt_cnt: 0,
            funcNum: 8,
            lct: v305,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v353, time: v352, didSend: v123, from: v351 } = txn6;
              
              ;
              sim_r.txns.push({
                amt: v272,
                kind: 'from',
                to: v268,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v353, time: v352, didSend: v123, from: v351 } = txn6;
          ;
          const v354 = stdlib.addressEq(v251, v351);
          const v355 = stdlib.addressEq(v268, v351);
          const v356 = v354 ? true : v355;
          stdlib.assert(v356, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./src/index.rsh:74:88:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Guesser'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './src/index.rsh:28:31:application',
            fs: ['at ./src/index.rsh:27:13:application call to [unknown function] (defined at: ./src/index.rsh:27:35:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./src/index.rsh:26:30:function exp)', 'at ./src/index.rsh:74:88:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Guesser'
            });
          
          return;
          
          }
        else {
          const {data: [v319, v320], secs: v322, time: v321, didSend: v74, from: v318 } = txn5;
          ;
          const v323 = stdlib.addressEq(v251, v318);
          stdlib.assert(v323, {
            at: './src/index.rsh:74:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Guesser'
            });
          const v324 = stdlib.digest(ctc3, [v319, v320]);
          const v325 = stdlib.digestEq(v288, v324);
          stdlib.assert(v325, {
            at: 'reach standard library:58:17:application',
            fs: ['at ./src/index.rsh:76:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
            msg: null,
            who: 'Guesser'
            });
          const v326 = stdlib.sub(v320, v304);
          const v327 = stdlib.sub(stdlib.checkedBigNumberify('./src/index.rsh:4:20:decimal', stdlib.UInt_max, '0'), v326);
          const v328 = stdlib.sub(stdlib.checkedBigNumberify('./src/index.rsh:4:14:decimal', stdlib.UInt_max, '10'), v327);
          const v329 = stdlib.mul(v328, stdlib.checkedBigNumberify('./src/index.rsh:4:59:decimal', stdlib.UInt_max, '10'));
          const v330 = stdlib.div(v329, stdlib.checkedBigNumberify('./src/index.rsh:80:25:decimal', stdlib.UInt_max, '100'));
          const v331 = stdlib.mul(stdlib.checkedBigNumberify('./src/index.rsh:80:33:decimal', stdlib.UInt_max, '2'), v252);
          const v332 = stdlib.mul(v330, v331);
          ;
          const v337 = stdlib.sub(stdlib.checkedBigNumberify('./src/index.rsh:81:16:decimal', stdlib.UInt_max, '100'), v329);
          const v338 = stdlib.div(v337, stdlib.checkedBigNumberify('./src/index.rsh:81:33:decimal', stdlib.UInt_max, '100'));
          const v340 = stdlib.mul(v338, v331);
          ;
          stdlib.protect(ctc1, await interact.seeOutcome(v329), {
            at: './src/index.rsh:86:28:application',
            fs: ['at ./src/index.rsh:85:9:application call to [unknown function] (defined at: ./src/index.rsh:85:31:function exp)'],
            msg: 'seeOutcome',
            who: 'Guesser'
            });
          
          return;
          }
        
        }
      
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAPAAEIIAUHeFADZCgKAlgwJgMBAAEBACI1ADEYQQR2KmRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEEDEACT0mBBgxAAV9JIQUMQAEESSQMQABWJBJEIQU0ARJENARJIhJMNAISEUQoZClkUEk1A1coIDX/gAQX/NsusDIGNAMhBlsPRDQDVwAgMQASNP8xABIRRLEisgE0A4FIW7III7IQNP+yB7NCA45IIQU0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/STUFSSJbNf4kWzX9gASCa3t2NP4WUDT9FlCwMgY0AyEGWwxENP8xABJENANXUCA0/hY0/RZQARJEIQsiNP00A4FwWwkJCSELCzX8IQw0AyVbCzX7sSKyATT8IQkKNPsLsggjshA0A1coILIHs7EisgEhCTT8CSEJCjT7C7III7IQNP+yB7NCAuZIIQQ0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gARhtKwMsDIGNAMhBlsPRDT/MQASNANXMCAxABIRRLEisgE0AyEHW7III7IQNP+yB7NCApJJIQQMQACRSCEENAESRDQESSISTDQCEhFEKGQpZFBJNQNJSklXACA1/yVbNf5XMCA1/SEHWzX8V1ggNftJNQUXNfqABIGqms80+hZQsDIGNAMhBlsMRDT9MQASRDIGNAMhClsINfk0/zT+FlA0/VA0/BZQNPtQNPoWUDT5FlAoSwFXAH9nKUsBV38BZ0ghBTUBMgY1AkICFkghCDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABJEnNPOwMgY0AyENWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQdbsggjshA0/7IHs0IBqUkhDAxAAM1JIQgMQACJSCEINAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yVbNf4hCls1/VcwIDX8IQdbNftJNQU1+oAEE+7qUTT6ULAyBjQDIQ1bDEQ0/zEAEkQyBjT9CDX5NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQKEsBVwB/ZylLAVd/AWdIIQQ1ATIGNQJCAS5IIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEOWw9EsSKyATQDJVuyCCOyEDQDVwAgsgezQgDVSSMMQABwSCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8lWzX+IQpbNf2ABJqLkXSwMgY0AyEOWwxENP5JCDX8NP6IAOcyBjT9CDX7NP80/hZQNP0WUDEAUDT8FlA0+xZQKEsBVwBgZ0ghCDUBMgY1AkIAe0giNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwgaCNBogAhTT/iACAMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgAcMRkhBBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v252",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v253",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v252",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v253",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v288",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v304",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v320",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v288",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v304",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v320",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001ab638038062001ab683398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000144565b6020808301510151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b611797806200031f6000396000f3fe60806040526004361061009a5760003560e01c806383230757116100615780638323075714610113578063a7661d5414610128578063ab53f2c61461013b578063c79800371461015e578063e533a29d14610171578063f4cedab01461018457005b80631e93b0f1146100a35780632c10a159146100c7578063422eb85c146100da578063552d7b8e146100ed5780637eea518c1461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461136c565b610197565b6100a16100e836600461138f565b610402565b6100a16100fb36600461136c565b6106e4565b6100a161010e36600461136c565b61092d565b34801561011f57600080fd5b506001546100b4565b6100a161013636600461136c565b610aab565b34801561014757600080fd5b50610150610c46565b6040516100be9291906113a1565b6100a161016c36600461136c565b610ce3565b6100a161017f36600461136c565b610e7a565b6100a161019236600461136c565b611015565b6101a76001600054146009611259565b6101c1813515806101ba57506001548235145b600a611259565b6000808055600280546101d3906113fe565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906113fe565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611486565b9050610283604051806040016040528060008152602001600081525090565b61029482606001514310600b611259565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516102c59291906114ff565b60405180910390a160208201516102dc9080611552565b815260208201516102f09034146008611259565b60408201516102ff9043611552565b8160200181815250506103536040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b82516001600160a01b0390811680835260208086015181850190815260408088015181870190815233606080890191825289516080808b019182528b88015160a0808d019182526003600055436001558751998a019a909a529651958801959095529251908601525190951690830152925191810191909152905160c082015260e0015b604051602081830303815290604052600290805190602001906103fb92919061127e565b5050505050565b6104126007600054146027611259565b61042c8135158061042557506001548235145b6028611259565b60008080556002805461043e906113fe565b80601f016020809104026020016040519081016040528092919081815260200182805461046a906113fe565b80156104b75780601f1061048c576101008083540402835291602001916104b7565b820191906000526020600020905b81548152906001019060200180831161049a57829003601f168201915b50505050508060200190518101906104cf919061156a565b90506104ee604051806040016040528060008152602001600081525090565b6104ff8260c0015143106029611259565b604080513381528435602080830191909152850135818301529084013560608201527f443eedfa7cb93bcf21ba813a200d6756eee22aa1d3e6f8f9e753ebc0faaa84aa9060800160405180910390a161055a34156024611259565b8151610572906001600160a01b031633146025611259565b604080516105be9161059891602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360800151146026611259565b60a0820151600a906105d49060408601356115dc565b6105df9060006115dc565b6105ea90600a6115dc565b6105f491906115f3565b815260208201516106069060026115f3565b60208201819052604083015182516001600160a01b03909116916108fc9161063090606490611612565b61063a91906115f3565b6040518115909202916000818181858888f19350505050158015610662573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc826020015160648460000151606461068c91906115dc565b6106969190611612565b6106a091906115f3565b6040518115909202916000818181858888f193505050501580156106c8573d6000803e3d6000fd5b50600080805560018190556106df90600290611302565b505050565b6106f4600560005414601c611259565b61070e8135158061070757506001548235145b601d611259565b600080805560028054610720906113fe565b80601f016020809104026020016040519081016040528092919081815260200182805461074c906113fe565b80156107995780601f1061076e57610100808354040283529160200191610799565b820191906000526020600020905b81548152906001019060200180831161077c57829003601f168201915b50505050508060200190518101906107b19190611634565b90506107c96040518060200160405280600081525090565b6107da8260c001514310601e611259565b7f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d3338460405161080b9291906116a6565b60405180910390a161081f3415601a611259565b606082015161083a906001600160a01b03163314601b611259565b60408201516108499043611552565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b03908116808352602080860151818501908152606080880151851660408088019182526080808b0151848a0190815260a0808d0151838c019081528e890135828d019081528d5160c0808f0191825260076000554360015587519b8c019c909c529851958a01959095529451909916948701949094529251928501929092525194830194909452925191810191909152905160e0820152610100016103d7565b61093d600160005414600d611259565b6109578135158061095057506001548235145b600e611259565b600080805560028054610969906113fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610995906113fe565b80156109e25780601f106109b7576101008083540402835291602001916109e2565b820191906000526020600020905b8154815290600101906020018083116109c557829003601f168201915b50505050508060200190518101906109fa9190611486565b9050610a0e8160600151431015600f611259565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610a3f9291906114ff565b60405180910390a1610a533415600c611259565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610a90573d6000803e3d6000fd5b5060008080556001819055610aa790600290611302565b5050565b610abb6003600054146017611259565b610ad581351580610ace57506001548235145b6018611259565b600080805560028054610ae7906113fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610b13906113fe565b8015610b605780601f10610b3557610100808354040283529160200191610b60565b820191906000526020600020905b815481529060010190602001808311610b4357829003601f168201915b5050505050806020019051810190610b7891906116cd565b9050610b8c8160a001514310156019611259565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610bbd9291906114ff565b60405180910390a1610bd134156015611259565b8051610c05906001600160a01b03163314610bfb5760608201516001600160a01b03163314610bfe565b60015b6016611259565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610a90573d6000803e3d6000fd5b600060606000546002808054610c5b906113fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610c87906113fe565b8015610cd45780601f10610ca957610100808354040283529160200191610cd4565b820191906000526020600020905b815481529060010190602001808311610cb757829003601f168201915b50505050509050915091509091565b610cf36005600054146021611259565b610d0d81351580610d0657506001548235145b6022611259565b600080805560028054610d1f906113fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4b906113fe565b8015610d985780601f10610d6d57610100808354040283529160200191610d98565b820191906000526020600020905b815481529060010190602001808311610d7b57829003601f168201915b5050505050806020019051810190610db09190611634565b9050610dc48160c001514310156023611259565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610df59291906114ff565b60405180910390a1610e093415601f611259565b8051610e3d906001600160a01b03163314610e335760608201516001600160a01b03163314610e36565b60015b6020611259565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610a90573d6000803e3d6000fd5b610e8a600760005414602c611259565b610ea481351580610e9d57506001548235145b602d611259565b600080805560028054610eb6906113fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee2906113fe565b8015610f2f5780601f10610f0457610100808354040283529160200191610f2f565b820191906000526020600020905b815481529060010190602001808311610f1257829003601f168201915b5050505050806020019051810190610f47919061156a565b9050610f5b8160c00151431015602e611259565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763383604051610f8c9291906114ff565b60405180910390a1610fa03415602a611259565b8051610fd4906001600160a01b03163314610fca5760408201516001600160a01b03163314610fcd565b60015b602b611259565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015610a90573d6000803e3d6000fd5b6110256003600054146012611259565b61103f8135158061103857506001548235145b6013611259565b600080805560028054611051906113fe565b80601f016020809104026020016040519081016040528092919081815260200182805461107d906113fe565b80156110ca5780601f1061109f576101008083540402835291602001916110ca565b820191906000526020600020905b8154815290600101906020018083116110ad57829003601f168201915b50505050508060200190518101906110e291906116cd565b90506110fa6040518060200160405280600081525090565b61110b8260a0015143106014611259565b7f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc1338460405161113c9291906116a6565b60405180910390a161115034156010611259565b8151611168906001600160a01b031633146011611259565b60408201516111779043611552565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260056000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e0820152610100016103d7565b81610aa75760405163100960cb60e01b81526004810182905260240160405180910390fd5b82805461128a906113fe565b90600052602060002090601f0160209004810192826112ac57600085556112f2565b82601f106112c557805160ff19168380011785556112f2565b828001600101855582156112f2579182015b828111156112f25782518255916020019190600101906112d7565b506112fe92915061133f565b5090565b50805461130e906113fe565b6000825580601f1061131e575050565b601f01602090049060005260206000209081019061133c919061133f565b50565b5b808211156112fe5760008155600101611340565b60006040828403121561136657600080fd5b50919050565b60006040828403121561137e57600080fd5b6113888383611354565b9392505050565b60006060828403121561136657600080fd5b82815260006020604081840152835180604085015260005b818110156113d5578581018301518582016060015282016113b9565b818111156113e7576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061141257607f821691505b6020821081141561136657634e487b7160e01b600052602260045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561146457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461148157600080fd5b919050565b60006080828403121561149857600080fd5b6040516080810181811067ffffffffffffffff821117156114c957634e487b7160e01b600052604160045260246000fd5b6040526114d58361146a565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461152d57600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156115655761156561153c565b500190565b600060e0828403121561157c57600080fd5b611584611433565b61158d8361146a565b8152602083015160208201526115a56040840161146a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6000828210156115ee576115ee61153c565b500390565b600081600019048311821515161561160d5761160d61153c565b500290565b60008261162f57634e487b7160e01b600052601260045260246000fd5b500490565b600060e0828403121561164657600080fd5b61164e611433565b6116578361146a565b815260208301516020820152604083015160408201526116796060840161146a565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b038316815260608101611388602083018480358252602090810135910152565b600060c082840312156116df57600080fd5b60405160c0810181811067ffffffffffffffff8211171561171057634e487b7160e01b600052604160045260246000fd5b60405261171c8361146a565b8152602083015160208201526040830151604082015261173e6060840161146a565b60608201526080830151608082015260a083015160a0820152809150509291505056fea26469706673582212207b486acf7046bdb5d40408246b8b2d4fdfbfdda511d3262a34de812ea62c51d764736f6c634300080c0033`,
  BytecodeLen: 6838,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/index.rsh:39:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./src/index.rsh:45:69:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './src/index.rsh:53:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./src/index.rsh:55:77:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/index.rsh:57:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./src/index.rsh:65:81:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/index.rsh:67:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./src/index.rsh:74:88:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './src/index.rsh:83:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Asker": Asker,
  "Guesser": Guesser
  };
export const _APIs = {
  };
