// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

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
      5: [ctc0, ctc1, ctc1, ctc0, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1]
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
export async function Francis(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Francis expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Francis expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  
  
  const v240 = stdlib.protect(ctc0, interact.timeFrame, 'for Francis\'s interact field timeFrame');
  const v241 = stdlib.protect(ctc0, interact.wager, 'for Francis\'s interact field wager');
  
  const v244 = stdlib.protect(ctc0, await interact.getRandomNum(), {
    at: './index.rsh:48:63:application',
    fs: ['at ./index.rsh:46:17:application call to [unknown function] (defined at: ./index.rsh:46:20:function exp)'],
    msg: 'getRandomNum',
    who: 'Francis'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v241, v244, v240],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:52:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v241, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v246, v247, v248], secs: v250, time: v249, didSend: v33, from: v245 } = txn1;
      
      sim_r.txns.push({
        amt: v246,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v259 = stdlib.add(v249, v248);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v246, v247, v248], secs: v250, time: v249, didSend: v33, from: v245 } = txn1;
  ;
  const v259 = stdlib.add(v249, v248);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ['time', v259],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v245, v246, v248, v259],
      evt_cnt: 0,
      funcNum: 2,
      lct: v249,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v397, time: v396, didSend: v206, from: v395 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v245,
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
    const {data: [], secs: v397, time: v396, didSend: v206, from: v395 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:42:33:application',
      fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:59:89:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Francis'
      });
    
    return;
    
    }
  else {
    const {data: [v265], secs: v267, time: v266, didSend: v44, from: v264 } = txn2;
    const v269 = stdlib.add(v246, v246);
    ;
    const v270 = stdlib.mul(v247, stdlib.checkedBigNumberify('./index.rsh:61:34:decimal', stdlib.UInt_max, '2'));
    const v271 = stdlib.mul(v265, stdlib.checkedBigNumberify('./index.rsh:61:50:decimal', stdlib.UInt_max, '2'));
    const v272 = stdlib.add(v270, v271);
    const v273 = stdlib.div(v272, stdlib.checkedBigNumberify('./index.rsh:61:53:decimal', stdlib.UInt_max, '4'));
    let v274 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v275 = v266;
    let v282 = v269;
    
    while (await (async () => {
      const v290 = stdlib.eq(v274, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v290;})()) {
      stdlib.protect(ctc1, await interact.getGuess(), {
        at: './index.rsh:69:52:application',
        fs: ['at ./index.rsh:68:21:application call to [unknown function] (defined at: ./index.rsh:68:25:function exp)'],
        msg: 'getGuess',
        who: 'Francis'
        });
      const v293 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:70:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:68:21:application call to [unknown function] (defined at: ./index.rsh:68:25:function exp)'],
        msg: 'random',
        who: 'Francis'
        });
      const v294 = stdlib.digest(ctc2, [v293, null]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v245, v246, v248, v264, v282, v294],
        evt_cnt: 1,
        funcNum: 4,
        lct: v275,
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:73:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v297], secs: v299, time: v298, didSend: v73, from: v296 } = txn3;
          
          ;
          const v307 = stdlib.add(v298, v248);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [v297], secs: v299, time: v298, didSend: v73, from: v296 } = txn3;
      ;
      const v300 = stdlib.addressEq(v245, v296);
      stdlib.assert(v300, {
        at: './index.rsh:73:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Francis'
        });
      const v307 = stdlib.add(v298, v248);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc1],
        timeoutAt: ['time', v307],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v245, v246, v248, v264, v282, v297, v307],
          evt_cnt: 0,
          funcNum: 6,
          lct: v298,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v354, time: v353, didSend: v150, from: v352 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v245,
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
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc3, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v354, time: v353, didSend: v150, from: v352 } = txn5;
        ;
        const v355 = stdlib.addressEq(v245, v352);
        const v356 = stdlib.addressEq(v264, v352);
        const v357 = v355 ? true : v356;
        stdlib.assert(v357, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:80:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Francis'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:42:33:application',
          fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:80:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Francis'
          });
        
        return;
        
        }
      else {
        const {data: [v312], secs: v314, time: v313, didSend: v82, from: v311 } = txn4;
        ;
        const v315 = stdlib.addressEq(v264, v311);
        stdlib.assert(v315, {
          at: './index.rsh:80:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Francis'
          });
        const v322 = stdlib.add(v313, v248);
        const txn5 = await (ctc.sendrecv({
          args: [v245, v246, v248, v264, v282, v297, v322, v293, null],
          evt_cnt: 2,
          funcNum: 7,
          lct: v313,
          onlyIf: true,
          out_tys: [ctc0, ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:86:19:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v327, v328], secs: v330, time: v329, didSend: v92, from: v326 } = txn5;
            
            ;
            const cv274 = stdlib.checkedBigNumberify('./index.rsh:15:12:decimal', stdlib.UInt_max, '1');
            const cv275 = v329;
            const cv282 = v282;
            
            await (async () => {
              const v274 = cv274;
              const v275 = cv275;
              const v282 = cv282;
              
              if (await (async () => {
                const v290 = stdlib.eq(v274, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                
                return v290;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v370 = stdlib.eq(v274, stdlib.checkedBigNumberify('./index.rsh:92:18:decimal', stdlib.UInt_max, '0'));
                const v371 = stdlib.eq(v274, stdlib.checkedBigNumberify('./index.rsh:93:18:decimal', stdlib.UInt_max, '2'));
                const v372 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                const v373 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                const v374 = v371 ? v372 : v373;
                const v375 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                const v376 = v370 ? v375 : v374;
                const v377 = v376[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '0')];
                const v378 = v376[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '1')];
                const v379 = stdlib.mul(v377, v246);
                sim_r.txns.push({
                  kind: 'from',
                  to: v245,
                  tok: undefined /* Nothing */
                  });
                const v384 = stdlib.mul(v378, v246);
                sim_r.txns.push({
                  kind: 'from',
                  to: v264,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v322],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc3, ctc0, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v245, v246, v248, v264, v282, v297, v322],
            evt_cnt: 0,
            funcNum: 8,
            lct: v313,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v336, time: v335, didSend: v116, from: v334 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v264,
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
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc3, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v336, time: v335, didSend: v116, from: v334 } = txn6;
          ;
          const v337 = stdlib.addressEq(v245, v334);
          const v338 = stdlib.addressEq(v264, v334);
          const v339 = v337 ? true : v338;
          stdlib.assert(v339, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:86:100:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Francis'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:42:33:application',
            fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:86:100:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Francis'
            });
          
          return;
          
          }
        else {
          const {data: [v327, v328], secs: v330, time: v329, didSend: v92, from: v326 } = txn5;
          ;
          const v331 = stdlib.addressEq(v245, v326);
          stdlib.assert(v331, {
            at: './index.rsh:86:19:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Francis'
            });
          const v332 = stdlib.digest(ctc2, [v327, v328]);
          const v333 = stdlib.digestEq(v297, v332);
          stdlib.assert(v333, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:87:26:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Francis'
            });
          const cv274 = stdlib.checkedBigNumberify('./index.rsh:15:12:decimal', stdlib.UInt_max, '1');
          const cv275 = v329;
          const cv282 = v282;
          
          v274 = cv274;
          v275 = cv275;
          v282 = cv282;
          
          continue;}
        
        }
      
      
      
      }
    const v370 = stdlib.eq(v274, stdlib.checkedBigNumberify('./index.rsh:92:18:decimal', stdlib.UInt_max, '0'));
    const v371 = stdlib.eq(v274, stdlib.checkedBigNumberify('./index.rsh:93:18:decimal', stdlib.UInt_max, '2'));
    const v372 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v373 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v374 = v371 ? v372 : v373;
    const v375 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v376 = v370 ? v375 : v374;
    const v377 = v376[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '0')];
    const v378 = v376[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '1')];
    const v379 = stdlib.mul(v377, v246);
    ;
    const v384 = stdlib.mul(v378, v246);
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v274, v273), {
      at: './index.rsh:99:28:application',
      fs: ['at ./index.rsh:98:11:application call to [unknown function] (defined at: ./index.rsh:98:33:function exp)'],
      msg: 'seeOutcome',
      who: 'Francis'
      });
    
    return;
    }
  
  
  
  };
export async function Weddy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Weddy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Weddy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v246, v247, v248], secs: v250, time: v249, didSend: v33, from: v245 } = txn1;
  ;
  const v259 = stdlib.add(v249, v248);
  stdlib.protect(ctc1, await interact.acceptWager(v246), {
    at: './index.rsh:56:29:application',
    fs: ['at ./index.rsh:55:15:application call to [unknown function] (defined at: ./index.rsh:55:19:function exp)'],
    msg: 'acceptWager',
    who: 'Weddy'
    });
  const v263 = stdlib.protect(ctc0, await interact.getRandomNum(), {
    at: './index.rsh:57:60:application',
    fs: ['at ./index.rsh:55:15:application call to [unknown function] (defined at: ./index.rsh:55:19:function exp)'],
    msg: 'getRandomNum',
    who: 'Weddy'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v245, v246, v248, v259, v263],
    evt_cnt: 1,
    funcNum: 1,
    lct: v249,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v246, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v265], secs: v267, time: v266, didSend: v44, from: v264 } = txn2;
      
      const v269 = stdlib.add(v246, v246);
      sim_r.txns.push({
        amt: v246,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v270 = stdlib.mul(v247, stdlib.checkedBigNumberify('./index.rsh:61:34:decimal', stdlib.UInt_max, '2'));
      const v271 = stdlib.mul(v265, stdlib.checkedBigNumberify('./index.rsh:61:50:decimal', stdlib.UInt_max, '2'));
      const v272 = stdlib.add(v270, v271);
      const v273 = stdlib.div(v272, stdlib.checkedBigNumberify('./index.rsh:61:53:decimal', stdlib.UInt_max, '4'));
      const v274 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v275 = v266;
      const v282 = v269;
      
      if (await (async () => {
        const v290 = stdlib.eq(v274, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v290;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v370 = stdlib.eq(v274, stdlib.checkedBigNumberify('./index.rsh:92:18:decimal', stdlib.UInt_max, '0'));
        const v371 = stdlib.eq(v274, stdlib.checkedBigNumberify('./index.rsh:93:18:decimal', stdlib.UInt_max, '2'));
        const v372 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v373 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v374 = v371 ? v372 : v373;
        const v375 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v376 = v370 ? v375 : v374;
        const v377 = v376[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '0')];
        const v378 = v376[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '1')];
        const v379 = stdlib.mul(v377, v246);
        sim_r.txns.push({
          kind: 'from',
          to: v245,
          tok: undefined /* Nothing */
          });
        const v384 = stdlib.mul(v378, v246);
        sim_r.txns.push({
          kind: 'from',
          to: v264,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v259],
    tys: [ctc4, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v245, v246, v248, v259],
      evt_cnt: 0,
      funcNum: 2,
      lct: v249,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v397, time: v396, didSend: v206, from: v395 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v245,
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
    const {data: [], secs: v397, time: v396, didSend: v206, from: v395 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:42:33:application',
      fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:59:89:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Weddy'
      });
    
    return;
    
    }
  else {
    const {data: [v265], secs: v267, time: v266, didSend: v44, from: v264 } = txn2;
    const v269 = stdlib.add(v246, v246);
    ;
    const v270 = stdlib.mul(v247, stdlib.checkedBigNumberify('./index.rsh:61:34:decimal', stdlib.UInt_max, '2'));
    const v271 = stdlib.mul(v265, stdlib.checkedBigNumberify('./index.rsh:61:50:decimal', stdlib.UInt_max, '2'));
    const v272 = stdlib.add(v270, v271);
    const v273 = stdlib.div(v272, stdlib.checkedBigNumberify('./index.rsh:61:53:decimal', stdlib.UInt_max, '4'));
    let v274 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v275 = v266;
    let v282 = v269;
    
    while (await (async () => {
      const v290 = stdlib.eq(v274, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v290;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v297], secs: v299, time: v298, didSend: v73, from: v296 } = txn3;
      ;
      const v300 = stdlib.addressEq(v245, v296);
      stdlib.assert(v300, {
        at: './index.rsh:73:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Weddy'
        });
      const v307 = stdlib.add(v298, v248);
      stdlib.protect(ctc1, await interact.getGuess(), {
        at: './index.rsh:78:60:application',
        fs: ['at ./index.rsh:77:19:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)'],
        msg: 'getGuess',
        who: 'Weddy'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v245, v246, v248, v264, v282, v297, v307, null],
        evt_cnt: 1,
        funcNum: 5,
        lct: v298,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:80:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v312], secs: v314, time: v313, didSend: v82, from: v311 } = txn4;
          
          ;
          const v322 = stdlib.add(v313, v248);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v307],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v245, v246, v248, v264, v282, v297, v307],
          evt_cnt: 0,
          funcNum: 6,
          lct: v298,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v354, time: v353, didSend: v150, from: v352 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v245,
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
        const {data: [], secs: v354, time: v353, didSend: v150, from: v352 } = txn5;
        ;
        const v355 = stdlib.addressEq(v245, v352);
        const v356 = stdlib.addressEq(v264, v352);
        const v357 = v355 ? true : v356;
        stdlib.assert(v357, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:80:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Weddy'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:42:33:application',
          fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:80:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Weddy'
          });
        
        return;
        
        }
      else {
        const {data: [v312], secs: v314, time: v313, didSend: v82, from: v311 } = txn4;
        ;
        const v315 = stdlib.addressEq(v264, v311);
        stdlib.assert(v315, {
          at: './index.rsh:80:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Weddy'
          });
        const v322 = stdlib.add(v313, v248);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc1],
          timeoutAt: ['time', v322],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v245, v246, v248, v264, v282, v297, v322],
            evt_cnt: 0,
            funcNum: 8,
            lct: v313,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v336, time: v335, didSend: v116, from: v334 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v264,
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
          const {data: [], secs: v336, time: v335, didSend: v116, from: v334 } = txn6;
          ;
          const v337 = stdlib.addressEq(v245, v334);
          const v338 = stdlib.addressEq(v264, v334);
          const v339 = v337 ? true : v338;
          stdlib.assert(v339, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:86:100:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Weddy'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:42:33:application',
            fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:86:100:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Weddy'
            });
          
          return;
          
          }
        else {
          const {data: [v327, v328], secs: v330, time: v329, didSend: v92, from: v326 } = txn5;
          ;
          const v331 = stdlib.addressEq(v245, v326);
          stdlib.assert(v331, {
            at: './index.rsh:86:19:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Weddy'
            });
          const v332 = stdlib.digest(ctc3, [v327, v328]);
          const v333 = stdlib.digestEq(v297, v332);
          stdlib.assert(v333, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:87:26:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Weddy'
            });
          const cv274 = stdlib.checkedBigNumberify('./index.rsh:15:12:decimal', stdlib.UInt_max, '1');
          const cv275 = v329;
          const cv282 = v282;
          
          v274 = cv274;
          v275 = cv275;
          v282 = cv282;
          
          continue;}
        
        }
      
      
      
      }
    const v370 = stdlib.eq(v274, stdlib.checkedBigNumberify('./index.rsh:92:18:decimal', stdlib.UInt_max, '0'));
    const v371 = stdlib.eq(v274, stdlib.checkedBigNumberify('./index.rsh:93:18:decimal', stdlib.UInt_max, '2'));
    const v372 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v373 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v374 = v371 ? v372 : v373;
    const v375 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v376 = v370 ? v375 : v374;
    const v377 = v376[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '0')];
    const v378 = v376[stdlib.checkedBigNumberify('./index.rsh:91:24:array', stdlib.UInt_max, '1')];
    const v379 = stdlib.mul(v377, v246);
    ;
    const v384 = stdlib.mul(v378, v246);
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v274, v273), {
      at: './index.rsh:99:28:application',
      fs: ['at ./index.rsh:98:11:application call to [unknown function] (defined at: ./index.rsh:98:33:function exp)'],
      msg: 'seeOutcome',
      who: 'Weddy'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiALAAEIUCAFeCgGAjAmAwEAAQEAIjUAMRhBBHIqZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQUMQAG7SYEHDEAAykkkDEAAVCQSRCQ0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gAQX/NsusDIGNAMhBlsPRDQDVwAgMQASNP8xABIRRLEisgE0AyVbsggjshA0/7IHs0IDk0gkNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/0k1BUkiWzX+SCo1/YAE0SS4hTT+FlA0/VCwMgY0AyEGWwxENP8xABJENANXWCA0/hY0/VABEkQ0/zQDIQRbNAMhB1s0A1cwICMyBjQDJVtCAnpJIQgMQABTSCEINAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEYbSsDLAyBjQDIQZbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMlW7III7IQNP+yB7NCAslIIQg0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/IQRbNf4hB1s1/VcwIDX8JVs1+1dYIDX6STUFNfmABFMRNrk0+VCwMgY0AyEGWwxENPwxABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPgWUChLAVcAf2cpSwFXfwFnSCQ1ATIGNQJCAlVJIQkMQADISYEEDEAAgEghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/iEHWzX9VzAgNfwlWzX7STUFNfqABDiwIy00+lCwNP8xABJEMgY0/Qg1+TT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUChLAVcAf2cpSwFXfwFnSCEINQEyBjUCQgHHIQkSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhClsPRLEisgE0AyEEW7III7IQNANXACCyB7NCAWpJIwxAAFJIIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQRbNf9JNQUXNf6ABNUVGRQ0/hZQsDIGNAMhClsMRDT/iAGYNANXACA0/zQDIQdbMQAjMgY0/0kIQgBpSIGgjQaIAXgiNAESRDQESSISTDQCEhFESTUFSUkiWzX/JFs1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsDT/iAE+MgY0/Qg1/DEANP8WUDT9FlA0/BZQKEsBVwA4Z0gjNQEyBjUCQgDFNf81/jX9Nfw1+zX6Nfk0/SMSQQAkNPk0+hZQNPsWUDT8UDT/FlAoSwFXAFhnSCEFNQEyBjUCQgCMgBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAgAAAAAAAAAANP0hCRJNgBAAAAAAAAAAAAAAAAAAAAACNP0iEk01+LEisgE0+CJbNPoLsggjshA0+bIHs7EisgE0+CRbNPoLsggjshA0/LIHs0IAADEZIQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
                "name": "v246",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v247",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v248",
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
                "name": "v246",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v247",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v248",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v265",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
        "internalType": "struct T9",
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
                "name": "v297",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
                "internalType": "bool",
                "name": "v312",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
        "internalType": "struct T9",
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
                "name": "v327",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v328",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
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
        "internalType": "struct T9",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v265",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
        "internalType": "struct T9",
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
                "name": "v297",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
                "internalType": "bool",
                "name": "v312",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
        "internalType": "struct T9",
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
                "name": "v327",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v328",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
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
        "internalType": "struct T9",
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
  Bytecode: `0x608060405260405162001a2238038062001a22833981016040819052620000269162000255565b600080805543600355604080516020808201835292815281513381528451818501528484015180518285015293840151606082015292909101516080830152907fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69060a00160405180910390a1602082015151620000a890341460076200014e565b602082015160400151620000bd9043620002ec565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b86018051518652518a015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a09091019093528051919262000144926002929091019062000178565b5050505062000350565b81620001745760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001869062000313565b90600052602060002090601f016020900481019282620001aa5760008555620001f5565b82601f10620001c557805160ff1916838001178555620001f5565b82800160010185558215620001f5579182015b82811115620001f5578251825591602001919060010190620001d8565b506200020392915062000207565b5090565b5b8082111562000203576000815560010162000208565b604051606081016001600160401b03811182821017156200024f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200026957600080fd5b604080519081016001600160401b03811182821017156200029a57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002b457600080fd5b620002be6200021e565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600082198211156200030e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200032857607f821691505b602082108114156200034a57634e487b7160e01b600052602260045260246000fd5b50919050565b6116c280620003606000396000f3fe60806040526004361061008f5760003560e01c8063a209ad4e11610056578063a209ad4e1461010a578063ab53f2c61461011d578063ad9fa3d814610140578063c798003714610153578063e533a29d1461016657005b80631e93b0f11461009857806379a16581146100bc5780637eea518c146100cf57806383230757146100e2578063873779a1146100f757005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611245565b610179565b6100966100dd36600461126f565b61037a565b3480156100ee57600080fd5b506001546100a9565b61009661010536600461126f565b6104f8565b61009661011836600461126f565b61068a565b34801561012957600080fd5b50610132610894565b6040516100b3929190611292565b61009661014e36600461126f565b610931565b61009661016136600461126f565b610b24565b61009661017436600461126f565b610cbb565b6101896008600054146021610e56565b6101a38135158061019c57506001548235145b6022610e56565b6000808055600280546101b5906112ef565b80601f01602080910402602001604051908101604052809291908181526020018280546101e1906112ef565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b505050505080602001905181019061024691906113de565b90506102598160c0015143106023610e56565b7f8a3cfc652f10c71bd5b7e52b0af351500ad4916112e8fb6a321431e70f909dd4338360405161028a929190611425565b60405180910390a161029e3415601e610e56565b80516102b6906001600160a01b03163314601f610e56565b61031060208301356102ce6060850160408601611451565b6040516020016102ea9291909182521515602082015260400190565b6040516020818303038152906040528051906020012060001c8260a00151146020610e56565b610318611092565b815181516001600160a01b0391821690526020808401518351820152604080850151845182015260608086015185519416930192909252808301805160019052805143920191909152608084015190519091015261037581610e7b565b505050565b61038a600160005414600d610e56565b6103a48135158061039d57506001548235145b600e610e56565b6000808055600280546103b6906112ef565b80601f01602080910402602001604051908101604052809291908181526020018280546103e2906112ef565b801561042f5780601f106104045761010080835404028352916020019161042f565b820191906000526020600020905b81548152906001019060200180831161041257829003601f168201915b5050505050806020019051810190610447919061146c565b905061045b8160600151431015600f610e56565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161048c9291906114e5565b60405180910390a16104a03415600c610e56565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104dd573d6000803e3d6000fd5b50600080805560018190556104f4906002906110eb565b5050565b6105086001600054146009610e56565b6105228135158061051b57506001548235145b600a610e56565b600080805560028054610534906112ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610560906112ef565b80156105ad5780601f10610582576101008083540402835291602001916105ad565b820191906000526020600020905b81548152906001019060200180831161059057829003601f168201915b50505050508060200190518101906105c5919061146c565b90506105d881606001514310600b610e56565b7f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72253383604051610609929190611502565b60405180910390a1610622816020015134146008610e56565b61062a611092565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251610678908061153f565b60208201516040015261037581610e7b565b61069a6005600054146012610e56565b6106b4813515806106ad57506001548235145b6013610e56565b6000808055600280546106c6906112ef565b80601f01602080910402602001604051908101604052809291908181526020018280546106f2906112ef565b801561073f5780601f106107145761010080835404028352916020019161073f565b820191906000526020600020905b81548152906001019060200180831161072257829003601f168201915b50505050508060200190518101906107579190611557565b905061076f6040518060200160405280600081525090565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033846040516107a0929190611502565b60405180910390a16107b434156010610e56565b81516107cc906001600160a01b031633146011610e56565b60408201516107db904361153f565b81526040805160e081018252600080825260208083018281528385018381526060808601858152608080880187815260a0890188815260c08a018981528d516001600160a01b039081168c528e8a01519098528d8c0151909652938c0151909516909152890151909252888301359091528551905260069091554360015591519091610869918391016115e1565b6040516020818303038152906040526002908051906020019061088d929190611128565b5050505050565b6000606060005460028080546108a9906112ef565b80601f01602080910402602001604051908101604052809291908181526020018280546108d5906112ef565b80156109225780601f106108f757610100808354040283529160200191610922565b820191906000526020600020905b81548152906001019060200180831161090557829003601f168201915b50505050509050915091509091565b6109416006600054146016610e56565b61095b8135158061095457506001548235145b6017610e56565b60008080556002805461096d906112ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610999906112ef565b80156109e65780601f106109bb576101008083540402835291602001916109e6565b820191906000526020600020905b8154815290600101906020018083116109c957829003601f168201915b50505050508060200190518101906109fe91906113de565b9050610a166040518060200160405280600081525090565b610a278260c0015143106018610e56565b7f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c213653384604051610a58929190611638565b60405180910390a1610a6c34156014610e56565b6060820151610a87906001600160a01b031633146015610e56565b6040820151610a96904361153f565b81526040805160e081018252600080825260208083018281528385018381526060808601858152608080880187815260a0808a0189815260c08b018a81528e516001600160a01b039081168d528f8b01519099528e8d0151909752948d01519096169092528a01519052918801519091528551905260089091554360015591519091610869918391016115e1565b610b34600660005414601b610e56565b610b4e81351580610b4757506001548235145b601c610e56565b600080805560028054610b60906112ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8c906112ef565b8015610bd95780601f10610bae57610100808354040283529160200191610bd9565b820191906000526020600020905b815481529060010190602001808311610bbc57829003601f168201915b5050505050806020019051810190610bf191906113de565b9050610c058160c00151431015601d610e56565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610c369291906114e5565b60405180910390a1610c4a34156019610e56565b8051610c7e906001600160a01b03163314610c745760608201516001600160a01b03163314610c77565b60015b601a610e56565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104dd573d6000803e3d6000fd5b610ccb6008600054146026610e56565b610ce581351580610cde57506001548235145b6027610e56565b600080805560028054610cf7906112ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610d23906112ef565b8015610d705780601f10610d4557610100808354040283529160200191610d70565b820191906000526020600020905b815481529060010190602001808311610d5357829003601f168201915b5050505050806020019051810190610d8891906113de565b9050610d9c8160c001514310156028610e56565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763383604051610dcd9291906114e5565b60405180910390a1610de134156024610e56565b8051610e15906001600160a01b03163314610e0b5760608201516001600160a01b03163314610e0e565b60015b6025610e56565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156104dd573d6000803e3d6000fd5b816104f45760405163100960cb60e01b81526004810182905260240160405180910390fd5b610e836111ac565b60208201515160011415610f8157610ed56040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182526005600055436001558551978801989098529451938601939093529051908401525190931691810191909152905160a082015260c00160405160208183030381529060405260029080519060200190610f7b929190611128565b50505050565b80516002908190528151600060209182018190528184018051600190819052905183015260408401805191909152518101919091528201515115610fdd57602082015151600214610fd6578060200151610fe3565b8051610fe3565b80604001515b606082018190528251805160209091015191516001600160a01b03909116916108fc91611010919061166d565b6040518115909202916000818181858888f19350505050158015611038573d6000803e3d6000fd5b508160000151606001516001600160a01b03166108fc83600001516020015183606001516020015161106a919061166d565b6040518115909202916000818181858888f193505050501580156104dd573d6000803e3d6000fd5b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016110e660405180606001604052806000815260200160008152602001600081525090565b905290565b5080546110f7906112ef565b6000825580601f10611107575050565b601f0160209004906000526020600020908101906111259190611230565b50565b828054611134906112ef565b90600052602060002090601f016020900481019282611156576000855561119c565b82601f1061116f57805160ff191683800117855561119c565b8280016001018555821561119c579182015b8281111561119c578251825591602001919060010190611181565b506111a8929150611230565b5090565b6040805160c0810190915260006080820181815260a0830191909152819081526020016111ec604051806040016040528060008152602001600081525090565b815260200161120e604051806040016040528060008152602001600081525090565b81526020016110e6604051806040016040528060008152602001600081525090565b5b808211156111a85760008155600101611231565b60006060828403121561125757600080fd5b50919050565b60006040828403121561125757600080fd5b60006040828403121561128157600080fd5b61128b838361125d565b9392505050565b82815260006020604081840152835180604085015260005b818110156112c6578581018301518582016060015282016112aa565b818111156112d8576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061130357607f821691505b6020821081141561125757634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461133b57600080fd5b919050565b600060e0828403121561135257600080fd5b60405160e0810181811067ffffffffffffffff8211171561138357634e487b7160e01b600052604160045260246000fd5b60405290508061139283611324565b815260208301516020820152604083015160408201526113b460608401611324565b60608201526080830151608082015260a083015160a082015260c083015160c08201525092915050565b600060e082840312156113f057600080fd5b61128b8383611340565b8035801515811461133b57600080fd5b8035825261141a602082016113fa565b151560208301525050565b6001600160a01b03831681528135602080830191909152608082019061128b906040840190850161140a565b60006020828403121561146357600080fd5b61128b826113fa565b60006080828403121561147e57600080fd5b6040516080810181811067ffffffffffffffff821117156114af57634e487b7160e01b600052604160045260246000fd5b6040526114bb83611324565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681526060810161128b602083018461140a565b6001600160a01b03831681526060810161128b602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b6000821982111561155257611552611529565b500190565b600060a0828403121561156957600080fd5b60405160a0810181811067ffffffffffffffff8211171561159a57634e487b7160e01b600052604160045260246000fd5b6040526115a683611324565b815260208301516020820152604083015160408201526115c860608401611324565b6060820152608083015160808201528091505092915050565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c0918201519181019190915260e00190565b6001600160a01b03831681528135602080830191909152606082019061165f9084016113fa565b151560408301529392505050565b600081600019048311821515161561168757611687611529565b50029056fea2646970667358221220064e3cd949efb12cd16f18e484aa63f60b563c77686b62d95a93b2906631323b64736f6c634300080c0033`,
  BytecodeLen: 6690,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:53:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:59:89:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:97:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:67:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:74:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:80:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:81:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:86:100:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Francis": Francis,
  "Weddy": Weddy
  };
export const _APIs = {
  };
