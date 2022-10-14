const data = require("lodash");
function lodash() {
  let month1 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(data.chunk(month1, 4));

  const oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  console.log(data.tail(oddNum, 9));

  const Num = [2, 5, 4, 2, 7];
  console.log(data.union(Num));

  const keyValue = [
    ["horror", "The Avenger"],
    ["drama", "Tenet"],
    ["thriller", "Harry porter"],
    ["fantasy", "Super Man"],
  ];

  console.log(data.fromPairs(keyValue));
  return "done";
}
//lodash()
module.exports.lodash = lodash;
