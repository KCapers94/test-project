document.addEventListener("DOMContentLoaded", () => console.log("I GOT THIS!!!!"))

fetch('http://localhost:3000/players')

const playersArray = [
    {
      id:1,
      name: "Michael Jordan",
      team: "Chicago Bulls, Washington Wizards",
      position: "Shooting Guard",
      height: "6'6",
      titleWins: 6,
      careerPoints: 32292,
      careerAvgPoints: 30.1,
      imageurl: "https://images.app.goo.gl/MoAUKZwvxEpeFssv7"
      
    }, 
    {
    id:2,
    name: "Kobe Bryant",
      team: "Los Angeles Lakers",
      position: "Shooting Guard",
      height: "6'6",
      titleWins: 5,
      careerPoints: 33643,
      careerAvgPoints: 25,
      imageurl: "https://images.app.goo.gl/mvpbwrzEpEYuhg2q9"
    }, 
    {
       id:3,
       name: "Lebron James",
       team: "Cleveland Cavalers, Miami Heat, Los Angeles Lakers",
       position: "Shooting Guard",
       height: "6'8",
       titleWins: 4,
       careerPoints: 39797,
       careerAvgPoints: 27.1,
       imageurl: "https://images.app.goo.gl/mXRf2hoGaqqwAtXd9"
    }
    
  ] 
  
  


