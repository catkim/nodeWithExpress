let messageStoreArray = [
  "Thanks for visiting.",
  "Node is cool!",
  "I <3 Javascript!",
  "Have a great day!",
  "Let's get some coffee."
]

exports.getMessage = function(){
  let inx = Math.floor(Math.random() * messageStoreArray.length);
  return messageStoreArray[inx];
};
