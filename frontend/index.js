async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  /*
    ❗ Read the README.md first! Below is a strategy you can follow to tackle the challenge:

    * Fetch learners using Axios or fetch
        * Fetch mentors using Axios or fetch
            * Create a variable to hold the combined data
            * Combine the learners and the mentors to form an array like so:
                [etc
                  {
                    id: 22,
                    email:"mickey.mouse@example.com",
                    fullName: "Mickey Mouse",
                    mentors: ['James Gosling', 'Mary Shaw'] // ❗ actual names instead of IDs!
                  },
                etc]
            * Loop over the array holding the formatted data
                * For each object, make a `div.card` with all its children elements, put it in the DOM
                * Add a click handler to the `div.card` that activates it and deactivates it

    Have fun!
  */


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
