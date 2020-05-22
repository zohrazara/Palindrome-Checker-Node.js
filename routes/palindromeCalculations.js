const express = require('express');
const router = express.Router();
const data = require("../data");
const palindromeCalculations = data.palindromeCalculations;

router.get("/", (req, res) => {
res.render("palindromeCalculations/index", {});
});

router.get("/results", (req, res) => {
    res.status(400).render("palindromeCalculations/errors", {
      error: "Please enter results."
    }); 
  });

router.post("/results", async (req, res) => {
  let enter = req.body;
  let stringTest =  enter.inputcheck;
  let solution;

  if (!stringTest) 
  {
    res.status(400).render("palindromeCalculations/errors", {
    error: "It's Empty"
    }); 
    return;
  }

  try 
  {
    solution = palindromeCalculations.palindromeCalculations(stringTest);
    if(solution ==="Palindrome")
    {
      res.render("palindromeCalculations/results", {
        inputs: stringTest,
        results: solution    
      });
    }
    else
    {
      res.render("palindromeCalculations/results", {
        inputs: stringTest,
        result1: solution    
      });
    }        
  } 

  catch (error) 
  {
    res.status(400).render("palindromeCalculations/errors", {
      error: error
    });
  }

});
  
module.exports = router;