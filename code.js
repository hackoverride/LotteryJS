var lotteryNumbers= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];
var pickedNumbers= [1,2,3,4,5,6,7]; //you can pick your own, but this is placeholder if you startLottery() without getNumberInput() first.
var won = false;
var antallRette = 0;
var antallUker = 0;

function startLottery() {
  while (!won) 
  {
    var generatedNumbers= []; //7 total will be chosen.
    for (i=0;i<7;i++)
    {
      generatedNumbers[i] = pickANumber();
    }
    generatedNumbers.sort(sortNumber);
    //now to check how many weeks it takes to win %52;
    for (i = 0; i<pickedNumbers.length; i++)
    {
      for (j=0; j<generatedNumbers.length; j++)
      {
        if (pickedNumbers[i] === generatedNumbers[j]) {antallRette++}
      }
    }
    if (antallRette === 7) 
    {
      won = true
      console.log(antallUker);
      document.getElementById("years").value = Math.round(((antallUker/2)/52));
      document.getElementById("moneySpent").value = ((antallUker/2)*10);
    } else {
      antallRette= 0;
      lotteryNumbers= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];
      generatedNumbers = [];
      antallUker++;
    }
   } 
   won=false;
   antallRette = 0;
   }

function sortNumber(a, b) 
   {
     return a-b;
   }

function pickANumber() 
{
  var picked = Math.floor(Math.random()*lotteryNumbers.length)-1;
  var temp = lotteryNumbers.splice(picked, 1);
  return temp[0];
}

function getNumberInput() 
{
  var nr1 = parseInt(document.getElementById("n1").value);
  var nr2 = parseInt(document.getElementById("n2").value);
  var nr3 = parseInt(document.getElementById("n3").value);
  var nr4 = parseInt(document.getElementById("n4").value);
  var nr5 = parseInt(document.getElementById("n5").value);
  var nr6 = parseInt(document.getElementById("n6").value);
  var nr7 = parseInt(document.getElementById("n7").value);
  pickedNumbers = [nr1,nr2,nr3,nr4,nr5,nr6,nr7];
  console.log("numbers updated");
  console.log(pickedNumbers);
}
