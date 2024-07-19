const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

 
// function superbowlWin(record) {
//     let res = record.find( record => record.result == "W");        
//         console.log(res);
//         if (res !== "") {
//             return undefined;
//         } else{ return res.year}
// }


superbowlWin = function (record) {
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
  }
