
const init = () => {
  const inputForm = document.querySelector("#nbaCard")
  
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#playerName").value;
    

  fetch(`http://localhost:3000/players/${input}`)
  .then((res) => res.json())
  .then((data) => console.log(data)
)});
};



document.addEventListener("DOMContentLoaded", init)
 



//I want the user to be able to search for a player 
    // lets make sure the submit event works
    // how do i catch the user input 

//by inputing a name and click a button to submit
// informatioin comes up they will see the info and stats of that player


  









  


 

  
  
  
  
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //create fetch with the db.json
  //app will be either a black or white background whichever is easier
  //3 pictures will be there 1 of MJ, Kobe, Lebron
  // done
  //create a hover event so there names will appear when the mouse is over the picture

  //create a search bar
  //create a submit event
  //Type in a players name there stats will appear, with a picture
  //there will be a button to vote for them
  
 






