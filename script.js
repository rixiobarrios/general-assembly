// NOTE: Make sure to use the `var` keyword for ALL variable declarations.

// #1: Create an array of strings called `foods` that contains three foods.
// Type your solution immediately below this line:

// let foods = ['carrots', 'apples', 'bananas'];
// console.log(foods);

// #2: Access the last item in the array and assign to a variable called `last`.
// Type your solution immediately below this line:

// foods[2] = 'pineapple'; //<--- reassign last item
// var last = foods[2]; //<--- assign to a variable
// console.log(last); //<--- print last item

// #3: Create an empty array called `favoriteFoods`.
// Type your solution immediately below this line:
// var favoriteFoods = [];

// #4: Create a `for` loop that adds each string in `foods` to `favoriteFoods`.
// Type your solution immediately below this line:
// for (let i = 0; i < foods.length; i++) {
//     const str = foods[i];
//     favoriteFoods.push(str);
// }
// console.log(favoriteFoods);

// #5: Create an object literal called `instructor` that contains three key-value pairs.
// Type your solution immediately below this line:
let instructor = {
    //<-- object literal
    name: 'jim',
    age: '32',
    weight: '190',
};

console.log(instructor);

// let instructor = new Object({ name: 'jim', age: '32', weight: '190' }); //<--- constructor

// #6: Add a `has-office-hours` (spelled exactly) property to `instructor` by accessing
// it (do not change the original object you typed above) and assigning it
// a boolean value.
// Type your solution immediately below this line:

// NOTE: Make sure to use the `var` keyword for ALL variable declarations

// var people = [
//     {
//         name: 'Layla',
//         age: 27,
//         knownLanguages: 3,
//     },
//     {
//         name: 'Keanu',
//         age: 54,
//         knownLanguages: 1,
//     },
//     {
//         name: 'Jasmine',
//         age: 35,
//         knownLanguages: 2,
//     },
// ];

// #1: Use the `map` array method to create a new array containing the names of each
// person in the `people` array. Assign the returned array to a variable
// called `peopleNames`.
// Type your solution immediately below this line:

// #2: Use the `filter` array method to create a new, filtered array containing only
// persons from the `people` array who know multiple languages. Assign the returned array
// to a variable called `polyglotPeople`.
// Type your solution immediately below this line:

// NOTE: Make sure to use the `var` keyword for ALL variable declarations

// #1: Define a `Playlist` class with the following properties:
// - a `title` property that is a string determined by some input (passed into the constructor)
// - a `songs` property that is an empty array not determined by input (not passed into the constructor)
// - an `addSong` method that adds a song (string) to the `songs` array
// Type your solution immediately below this line:

// #2: Create an instance of the Playlist class and set it to a variable called `myPlaylist`
// Call the instance's `addSong` method to add a song to the instance's `songs` array
// Type your solution immediately below this line:

// NOTE: THE CODE BELOW IS FOR TESTING PURPOSES. DO NOT REMOVE OR ALTER.
// if (typeof Playlist !== 'undefined') {
//     module.exports = {
//         Playlist,
//     };
// }

/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Create an array called people that contains three names in it.
 */

/*
 * Prompt 02:
 *
 * Create an array called countries that contains four countries in it.
 */

/*
 * Prompt 03:
 *
 * Create an array called cities taht contains five cities in it.
 */

/*
 * Prompt 04:
 *
 * Create an empty array called favoriteNumbers. On a separate line for each,
 * add a number to the favoriteNumbers array so there are 4 numbers in it.
 */

/*
 * Prompt 05:
 *
 * Create an empty array called actors. On a separate line for each, add an
 * actor to the actors array so there are 5 actors in it.
 */

/*
 * Prompt 06:
 *
 * Create an array called sesameStreetCharacters with "Elmo", "Big Bird",
 * "Cookie Monster", "Ernie", and "Bert" in it. On a separate line for each,
 * remove the last 3 characters.
 */

/*
 * Prompt 07:
 *
 * Create an array called starWarsCharacters with "Luke", "Leia", "Han",
 * "R2-D2", "Chewbacca", and "C-3PO" in it. Create a variable called han and
 * assign it the string "Han" from the array (i.e. retrieve it from the array).
 * Do the same for luke, leia, and chewbacca.
 */

/*
 * Prompt 08:
 *
 * Create an array called jerseyShore with "JWoww", "The Situation", "DJ Pauly
 * D", "Snookie", and "Sweetheart" in it. On separate lines for each, remove
 * "Snookie" and "DJ Pauly D"
 */

/*
 * Prompt 09:
 *
 * Create an array called months with all 12 months as strings in it (i.e.
 * "January", "February", "March", etc). In a single line, delete "September",
 * "October", and "November".
 */

/*
 * Prompt 10:
 *
 * Create an array called months with all 12 months as strings in it (i.e.
 * "January", "February", "March", etc). Create a loop that prints out each
 * month from the array on a separate line.
 */

/*
 * Prompt 11:
 *
 * Create an empty array called randomNumbers. Write a for loop that will add
 * 4 random numbers to the randomNumbers array using Math.random() and push.
 */

/*
 * Prompt 12:
 *
 * Create an array name foods and add 10 foods to it. Create another array
 * called favoriteFoods but leave it empty. Create an array that loops through
 * the foods array and adds the current item to the favoriteFoods array if the
 * string is longer than 6 characters (i.e. string.length > 6).
 */

/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Create a variable and assign it a random number between 0 and 100 using
 * Math.random(). Create a conditional so that if the number is greater than 50,
 * you print the message "That's a big number!"
 */

/*
 * Prompt 02:
 *
 * Monkey in the middle! Create a variable and assign it a random number between
 * 0 and 10 using Math.Random(). Create a conditional that:
 *
 *   - prints "small number" if the number is less than 5
 *   - prints "big number" if the number is greater than 5
 *   - otherwise, prints "monkey"
 */

/*
 * Prompt 03:
 *
 * Driver's Ed! Create a variable that holds a person's age. If their age is
 * greater than 16, print "Here are the keys"; otherwise print "Sorry, you're
 * too young for now."
 */

/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Create a function that prints the string "Hello World"
 */

/*
 * Prompt 02:
 *
 * Create a function that takes a single parameter and logs it to the console.
 */

/*
 * Prompt 03:
 *
 * Create a function that takes a parameter name and prints the string "Hello
 * Zakk", if 'Zakk' is passed in as the name argument.
 */

/*
 * Prompt 04:
 *
 * Write a function printCool that accepts one parameter, name as an argument.
 * The function should print the name and a message saying that that person is
 * cool.
 *
 * i.e. printCool("Captain Reynolds") // => "Captain Reynolds is cool."
 */

/*
 * Prompt 05:
 *
 * Write a function calculateCube that takes a single number and prints the
 * volume of a cube made from that number:
 *
 * i.e. calculateCube(5) // => 125
 */

/*
 * Prompt 06:
 *
 * Write a function isAVowel that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise. The vowel could be upper
 * or lower case.
 *
 * i.e. isAVowel("a"); // => true
 */

/*
 * Prompt 07:
 *
 * Create a function that takes a string as a parameter and returns a reversed
 * version of the string (using the reverse method):
 *
 * Bonus: Use an arrow function
 */

/*
 * Prompt 08:
 *
 * Write a function getTwoLengths that accepts two parameters (strings). The
 * function should return an array of numbers where each number is the length of
 * the corresponding string.
 *
 * i.e. getTwoLengths("Hank", "Hippopopalous"); // => [4, 13]
 */

/*
 * Prompt 09:
 *
 * Write a function getMultipleLengths that accepts a single parameter as an
 * argument: an array of strings. The function should return an array of numbers
 * where each number is the length of the corresponding string.
 *
 * i.e. getMultipleLengths(["hello", "what", "is", "up", "dude"]); // => [5, 4, 2, 2, 4]
 */

/*
 * Prompt 10:
 *
 * Define a function maxOfThree that takes three numbers as arguments and
 * returns the largest of them. If all numbers are the same, it doesn't matter
 * which one is returned. If the two largest numbers are the same, one of them
 * should be returned.
 *
 * i.e. maxOfThree(6, 9, 1); // => 9
 */

/*
 * Prompt 11:
 *
 * Write a function printLongestWord that accepts a single argument, an array of
 * strings. The method should return the longest word in the array. In case of
 * a tie, the method should return the word that appears first in the array.
 *
 * i.e. printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]); // => "Peanutbutter"
 */

/*
 * Prompt 12:
 *
 * Create a function that takes a string as a parameter and returns the
 * uppercase version of the string (using the toUpperCase) method.
 *
 * Bonus: Use an arrow function
 */

/*
 * Prompt 13:
 *
 * Write a function that takes a sentence as a parameter and returns the words
 * in the sentence in reverse order.
 */

/*
 * Prompt 14:
 *
 * Write a function that takes a phone number (as a number) and returns
 * a formatted string. So if the number 2025171777 is pass in, the string
 * '(202) 517-1777' will be returned
 */

/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Solar System! Work through the subprompts below using the solarSystem array.
 */

// const solarSystem = [
//     { name: 'Mercury', ringSystem: false, moons: [] },
//     { name: 'Venus', ringSystem: false, moons: [] },
//     { name: 'Earth', ringSystem: false, moons: ['The Moon'] },
//     { name: 'Mars', ringSystem: false, moons: ['Phobos', 'Deimos'] },
//     {
//         name: 'Jupiter',
//         ringSystem: true,
//         moons: ['Europa', 'Ganymede', 'Io', 'Callisto'],
//     },
//     {
//         name: 'Saturn',
//         ringSystem: true,
//         moons: ['Titan', 'Enceladus', 'Rhea', 'Mimas'],
//     },
//     {
//         name: 'Uranus',
//         ringSystem: true,
//         moons: ['Miranda', 'Titania', 'Ariel', 'Umbriel'],
//     },
//     { name: 'Neptune', ringSystem: true, moons: ['Triton', 'Nereid'] },
// ];

/*
 * For each planet, print the name "[planet name] is beautiful" where planet
 * name is replaced with the name of the planet.
 */

/*
 * Create an array of all the planet names.
 */

/*
 * Create an array of planets that do have a ringSystem
 */

/*
 * Create an array of planes with 3 or more moons.
 */

/*
 * Sort the planets in the array by the number of moons they have
 */

/*
 * Prompt 02:
 *
 * Bond, James Bond! Complete the subprompts below using the bondFilms array.
 */

// const bondFilms = [
//     {
//         title: 'Skyfall',
//         year: 2012,
//         actor: 'Daniel Craig',
//         gross: '$1,108,561,008',
//     },
//     {
//         title: 'Thunderball',
//         year: 1965,
//         actor: 'Sean Connery',
//         gross: '$1,014,941,117',
//     },
//     {
//         title: 'Goldfinger',
//         year: 1964,
//         actor: 'Sean Connery',
//         gross: '$912,257,512',
//     },
//     {
//         title: 'Live and Let Die',
//         year: 1973,
//         actor: 'Roger Moore',
//         gross: '$825,110,761',
//     },
//     {
//         title: 'You Only Live Twice',
//         year: 1967,
//         actor: 'Sean Connery',
//         gross: '$756,544,419',
//     },
//     {
//         title: 'The Spy Who Loved Me',
//         year: 1977,
//         actor: 'Roger Moore',
//         gross: '$692,713,752',
//     },
//     {
//         title: 'Casino Royale',
//         year: 2006,
//         actor: 'Daniel Craig',
//         gross: '$669,789,482',
//     },
//     {
//         title: 'Moonraker',
//         year: 1979,
//         actor: 'Roger Moore',
//         gross: '$655,872,400',
//     },
//     {
//         title: 'Diamonds Are Forever',
//         year: 1971,
//         actor: 'Sean Connery',
//         gross: '$648,514,469',
//     },
//     {
//         title: 'Quantum of Solace',
//         year: 2008,
//         actor: 'Daniel Craig',
//         gross: '$622,246,378',
//     },
//     {
//         title: 'From Russia with Love',
//         year: 1963,
//         actor: 'Sean Connery',
//         gross: '$576,277,964',
//     },
//     {
//         title: 'Die Another Day',
//         year: 2002,
//         actor: 'Pierce Brosnan',
//         gross: '$543,639,638',
//     },
//     {
//         title: 'Goldeneye',
//         year: 1995,
//         actor: 'Pierce Brosnan',
//         gross: '$529,548,711',
//     },
//     {
//         title: "On Her Majesty's Secret Service",
//         year: 1969,
//         actor: 'George Lazenby',
//         gross: '$505,899,782',
//     },
//     {
//         title: 'The World is Not Enough',
//         year: 1999,
//         actor: 'Pierce Brosnan',
//         gross: '$491,617,153',
//     },
//     {
//         title: 'For Your Eyes Only',
//         year: 1981,
//         actor: 'Roger Moore',
//         gross: '$486,468,881',
//     },
//     {
//         title: 'Tomorrow Never Dies',
//         year: 1997,
//         actor: 'Pierce Brosnan',
//         gross: '$478,946,402',
//     },
//     {
//         title: 'The Man with the Golden Gun',
//         year: 1974,
//         actor: 'Roger Moore',
//         gross: '$448,249,281',
//     },
//     {
//         title: 'Dr. No',
//         year: 1962,
//         actor: 'Sean Connery',
//         gross: '$440,759,072',
//     },
//     {
//         title: 'Octopussy',
//         year: 1983,
//         actor: 'Roger Moore',
//         gross: '$426,244,352',
//     },
//     {
//         title: 'The Living Daylights',
//         year: 1987,
//         actor: 'Timothy Dalton',
//         gross: '$381,088,866',
//     },
//     {
//         title: 'A View to a Kill',
//         year: 1985,
//         actor: 'Roger Moore',
//         gross: '$321,172,633',
//     },
//     {
//         title: 'License to Kill',
//         year: 1989,
//         actor: 'Timothy Dalton',
//         gross: '$285,157,191',
//     },
// ];

/*
 * Create a new array with only the titles of the Bond films:
 */

/*
 * Create a new array with only the gross revenue for each Bond film:
 */

/*
 * Create a new array with only the years of each Bond film:
 */

/*
 * Sort the bondFilms array by year:
 */

/*
 * Create a new array oddBonds, of only the Bond films released on odd-numbered years:
 */

/*
 * Determine the total cumulative gross of the Bond franchise (reduce), and console.log
 * the result. hint To make the grosses into usable numbers, look into the
 * .replace Javascript method (there are many ways to do this, however). Look
 * into parseInt also:
 */

/*
 * Create an object with each bond actor and the number of movies they played
 * in:
 *
 * i.e:
 *
 * {
 *  'Pierce Brosnan': 3,
 *  'Sean Connery': 6,
 * }
 */

/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Create a loop that prints each number from 0 to 10.
 */

/*
 * Prompt 02:
 *
 * Create a loop that prints each number from 10 to 0.
 */

/*
 * Prompt 03:
 *
 * Create a loop that prints out the even numbers between 0 and 50.
 */

/*
 * Prompt 04:
 *
 * Create a loop that prints out the odd numbers between 50 and 0
 */

/*
 * Prompt 05:
 *
 * Print out the numbers between 50 and 100.
 */

/*
 * Prompt 06:
 *
 * Create an array with the members of the ninja turtles (Donatello, Leonardo,
 * Raphael, Michaelangelo).  Use a for loop to call toUpperCase() on each of
 * them and print out the result.
 */

/*
 * Prompt 07:
 *
 * Write a for loop that prints the numbers in the following array in order
 */
// const twoDArray1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

/*
 * Prompt 08:
 *
 * Write a for loop that prints the numbers in the following array in order
 */
// const twoDArray = [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1],
// ];

/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Create an object representing a person with name, age, and gender properies.
 */

/*
 * Prompt 02:
 *
 * Create an object for a movie with a title (string), genre (string), length
 * (number), and cast (array). Fill the cast array with characters from the
 * movie (strings).
 */

/*
 * Prompt 03:
 *
 * Given the slimer object:
 *   - What would you write to access the name and console.log it?
 *   - What would you write to change the type to 'creature' (without changing it inside the object)
 *   - What would you write to add a key to the object called age, and set the age to 6?
 *   - console.log the object to make sure type is creature, and age is 6
 */
// const monster = {
//     name: 'Slimer',
//     color: 'greenish',
//     type: 'plasm or ghost or something',
// };

/*
 * Prompt 04:
 *
 * Create an empty object called computer and save it to a variable.
 *
 * On the next line, add a make property and set it equal to 'Apple'.
 * On the next line, add a model property and set it equal to 'MacBook'.
 * On the next line, add a year property and set it equal to 2017.
 * On the next line, add a `warranty-type` (spelled exactly )property and set it
 * equal to 'limited'.
 */

/*
 * Prompt 05:
 *
 * Crazy Object! Use the object below to log out each the following:
 *
 *   - "omg my mouth is burning"
 *   - "Pretty pretty prettayyyyy good"
 *   - "Swearing at Larry and Jeff"
 *   - "Chicken Teriyaki Boyyyyyy"
 *   - The object the contains the name funkhauser
 *   - Add the quote "I'm trying to elevate small talk to medium talk" to Larry's
 *     quote array. Confirm that it was added.
 *
 */

// const crazyObject = {
//     taco: [
//         {
//             meat: 'steak',
//             cheese: ['panela', 'queso', 'chihuahua'],
//         },
//         {
//             meat: 'chicken',
//             salsa: [
//                 'pico',
//                 'hot',
//                 'hotter',
//                 'really hot',
//                 'really really hot',
//                 'omg my mouth is burning',
//             ],
//         },
//     ],
//     larry: {
//         nicknames: ['LD', 'Chicken Teriyaki Boyyyyyy'],
//         quotes: [
//             'Pretty pretty prettayyyyy good',
//             "Is that a parkinson's thing?",
//             'women love a self confident bald man',
//             "I'm a walking talking enigma",
//         ],
//         characters: [
//             {
//                 name: 'Jeff',
//                 occupation: 'manager',
//             },
//             {
//                 name: 'funkhauser',
//                 occupation: 'tv dude',
//             },
//             {
//                 name: 'susie',
//                 occupation: 'jeffs wife',
//                 favourtieHobby: 'Swearing at Larry and Jeff',
//             },
//         ],
//     },
// };

/*
 * Prompt 06:
 *
 * Change the value of limbo to null in the following object:
 */
// const inception = {
//     reality: {
//         dreamLayer1: {
//             dreamLayer2: {
//                 dreamLayer3: {
//                     dreamLayer4: {
//                         dreamLayer5: {
//                             dreamLayer6: {
//                                 limbo: 'Joseph Gordon Levitt',
//                             },
//                         },
//                     },
//                 },
//             },
//         },
//     },
// };

/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Define a class Person with the following properties:
 *
 *   - name
 *   - age
 *   - favoriteColor
 *
 * Create 2 instances of your Person class
 */

/*
 * Prompt 02:
 *
 * Create a BankAccount class with the folowing properties:
 *
 *   - type (should default to 'checking')
 *   - amount (should default to 0)
 *   - withdraw (a method that should decrease the value of amount by the amount
 *     withdrawn)
 *   - deposit (a method that should increase the value of amount by the amount
 *     deposited)
 *   - transaction history (an array of objects describing each transaction
 *     (withdraw and deposit) on the account)
 *
 * Create an instance of your BankAccount class. Use your deposit and withdraw
 * methods, then print the transaction history.
 */

/*
 * Prompt 03:
 *
 * Define a class Flower with the following properties:
 *
 *   - color (string)
 *   - petals (number)
 *   - smellsPrety (boolean)
 *   - sniff (method, should print "such a pleasing smell" is smellsPretty is
 *     true or "yuck!" if it's false)
 *   - describe (method, should print "This is a red flower", if the value of
 *     color is "red")
 *   - loveMe (method, should print "They love me", "They love me not", "They
 *     love me", etc for however many petals there are)
 *
 * Create 2 instances using your Flower class. Set all the properties and use each method.
 */

/*
 * Prompt 04:
 *
 * Define a class SuperHero with the following properties:
 *
 *   - name (string)
 *   - health (number)
 *   - superpower (string)
 *   - power (a number)
 *   - attack (method: take an instance of the SuperHero class and subtract
 *     power from their health)
 *
 * Create two instances of your SuperHero class and have them attack each other.
 */

/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Create a variable called firstName and assign it a string of your first name.
 * Create a variable called lastName and assign it a string of your last name.
 * Create a variable called full name and assign it your full name using the
 * firstName and lastName variables.
 */

/*
 * Prompt 02:
 *
 * Create a variable holding the sentence "She sells sea shells by the sea
 * shore", but by adding one word to the string at a time.
 */

/*
 * Prompt 03:
 *
 * Check if the string in the sentence variable includes the word 'fox'
 */

// let sentence = 'The quick brown fox jumped over the lazy dog.';

/*
 * Prompt 04:
 *
 * Use the replace method to replace 'Andy Dwyer' with your name.
 */

// let andy = 'The best character on Parks and Rec is Andy Dwyer - hands down!';

/*
 * Prompt 05:
 *
 * Create the string "eeny, meeny, miny, moe" by concatenating the strings
 * together using the concat method
 */
// let eeny = 'eeny';
// let meeny = 'meeny';
// let miny = 'miny';
// let moe = 'moe';

/*
 * Prompt 06:
 *
 * Split the string below into an array of characters
 */

// let toArray = 'Goodnight Moon';

/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Create a variable called message using var and assign it the value 'Hello
 * World'
 */

/*
 * Prompt 02:
 *
 *  Create a variable called firstName using let and assign it the value of your
 *  first name.
 */

/*
 * Prompt 03:
 *
 * Create a variable called lastName using const and assign it the value of your
 * last name.
 */

/*
 * Prompt 04:
 *
 * Create a variable called number and assign a number to it. On separate lines
 * for each, assign a string, another number, and a boolean value to the
 * variable.
 *
 * What do we need to use to define variables we can change?
 */

/*
 * Prompt 05:
 *
 * Define a variable in such a way that we can't change it's value later.
 */

/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Create a loop that counts from 0 to 10, printing each number.
 */

/*
 * Prompt 2:
 *
 * Create a loop that prints every even number between 0 and 100.
 */

/*
 * Prompt 3:
 *
 * Create a loop that counts from -5 to 5, printing each number.
 */

/*
 * Prompt 4:
 *
 * Create a loop that counts down from 10 to 0, printing each number.
 */

/*
 * Prompt 5:
 *
 * Create a loop that counts down from 5 to -5, printing each number.
 */

/*
 * Prompt 6:
 *
 * Create a loop that counts from 0 to 50 in multiples of 2 (instead of 1),
 * printing each number.
 */

/*
 * Prompt 7:
 *
 * For the numbers 0 - 100, print out "I found a [ number ]. High five!" if the
 * number is a multiple of five.
 *
 * Sample Output:
 *   - I found a 5. High five!
 *   - I found a 10. High five!
 */

/*
 * Prompt 8:
 *
 * Create a variable called someNumber and assign it a random number between
 * 0 and 100.
 *
 * Create a conditional that matches these requirments:
 *   - if someNumber is less than 30, print "that's a small number"
 *   - if someNumber is between 30 and 60, print "the number is medium sized"
 *   - if someNumber is greater than 60, print "We got a big one!"
 */

/*
 * Prompt 9:
 *
 * Iterate over the starWars array printing each character's name and index
 *
 * i.e. 0. Han, 1. C3PO, 2. R2D2
 */

// const StarWars = ['Han', 'C3PO', 'R2D2', 'Luke', 'Leia', 'Anakin'];

/*
 * Prompt 10:
 *
 * Write a loop that pushes every even number between 0 and 100 into an array,
 * then print the array.
 */

/*
 * Prompt 11:
 *
 * Find the median number in the following nums array (the mid point), then
 * console.log that number.
 *
 * Hint: What does Math.floor() do?
 */

// let nums = [
//     14,
//     11,
//     16,
//     15,
//     13,
//     16,
//     15,
//     17,
//     19,
//     11,
//     12,
//     14,
//     19,
//     11,
//     15,
//     17,
//     11,
//     18,
//     12,
//     17,
//     12,
//     71,
//     18,
//     15,
//     12,
// ];

/*
 * Prompt 12:
 *
 * Did you know that you can nest loops? The catch is that you have to use
 * different incrementers (normally i). You'll commonly see developers use
 * another 1-letter incrementer (j, k, l, etc).
 *
 * Create an "outer" loop that counts up from 1 to 10 with an incrementer of i.
 * Create an "inner" loop that counts from 11 to 20 with an incrementer of j.
 * Inside the inner loop, print "i: ${i} / j: ${j}"
 */

/*
 * Prompt 13:
 *
 * Using nested loops, print the values inside the nested arrays.
 */

// let nestedArrays = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
// ];

/*
 * Before you begin working on the prompts, open up index.html and add a script
 * tag to import this JavaScript file. You'll know it's working when you see the
 * console.log below in the console of your browser.
 */

// console.log('challenge.js has been included!');

/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteNumber on one line; assign it a value on
 * the next line.
 */

/*
 * Prompt 2:
 *
 * Declare 3 variables using each of let, const, and var.
 */

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 */

/*
 * Prompt 5:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */

/*
 * Prompt 6:
 *
 * Write some code that solves each sub-prompt below.
 */

// A. Use loose-equals (==) to create a statement that is false
// B. Use strict equals (===) to create a statement that is true
// C. Use strict unequal (!==) to create a statement that is true
// D. Use less than (<) to create a statement that is false
// E. Use greater than (>) to create a statement that is false
// F. Use less than or equals (<=) to create a statemetn that is true
// G. Use greater than or equals (>=) to create a statemetn that is false

/*
 * Prompt 7:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to true
 */

// let a = 4;
// let b = 53;
// let c = 57;
// let d = 16;
// let e = 'Kevin';

// a _ b;

// c _ d;

// 'Name' ___ 'Name';

// a _ b ___ c;

// a _ a ___ d;

// e ___ 'Kevin';

// 48 ___ '48';

/*
 * Prompt 8:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to false
 */

// a = 6;
// b = 100;
// c = -5;
// d = 3000;
// e = 'Jelly Bean';

// a _ b;

// c _ d;

// 'Peanut' ___ 'Peanut';

// a _ b ___ c;

// a _ a ___ d;

// e ___ 'Jelly Bean';

// 48 ___ '48';

/*
 * Prompt 9:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

// let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
// let array2 = [
//     ['Marty Feldman', 'Marty Marion'],
//     ['Marty Stuart', 'Marty McFly'],
//     ['Marty Jannetty', 'Marty Robbins'],
// ];
// let array3 = [
//     ['Marty Feldman', ['Marty Marion']],
//     ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']],
// ];

/*
 * Prompt 10:
 *
 * Use the length of the array below to retrieve the second to last item.
 */

// let array4 = ['a', 'b', 'c', 'd', 'e'];

/*
 * Prompt 11:
 *
 * Use the following arrays to answer the subprompts below.
 */

// let thom = ['Thom', 1000, 'Christchurch'];
// let karolin = ['Karolin', 16, 'New York'];
// let kristyn = ['Kristyn', 5, 'Pittsburgh'];
// let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Gameboy".

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".

/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */

/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Original Problem - do not modify */
// function (a) {
//   return a ** 2
// }

/** Your Solution */
// function (a) {
//   return a ** 2
// }

/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */

/*
 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */

/*
 * Prompt 7:
 *
 * Fix the following code.
 */

/** Original Problem - do not modify */
// function makePerson(firstname, lastname) {
//   firstname: firstname,
//     lastname: lastname
// }

// const zakk = makePerson('Zakk', 'F')
// const jimmy = makePerson('Jimmy', 'B')

/** Your Solution */
// function makePerson(firstname, lastname) {
//   firstname: firstname,
//     lastname: lastname
// }

// const zakk = makePerson('Zakk', 'F')
// const jimmy = makePerson('Jimmy', 'B')

/*
 * Prompt 8:
 *
 * Write a function that returns an object. The object can be anything.
 */

/*
 * Prompt 9:
 *
 * Write a function that returns an array. The array can be of anything.
 */

/*
 * Prompt 10:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

/** Starter Code */
// let sum = 0

/** Your Solution */
// let sum = 0

/*
 * Prompt 11:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */

/*
 * Prompt 12:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string.
 */

/*
 * Prompt 13:
 *
 * How can you write a function so that this expression works? It should print
 * the string "this works!"
 */

/** Starter Code */
// testFunc()()

/** Your Solution */
// testFunc()()

/*
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */
// function add(a, b) {
//   a + b
// }

/** Your Solution */
// function add(a, b) {
//   a + b
// }

/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */

/*
 * Work through each of the prompts below.
 *
 * Pro tip: comment out your solution to each prompt before moving on, so your
 * console only has messages from the prompt you're currently working on.
 *
 * Remember to make a commit after completing each prompt!
 */

/*
 * Prompt:
 *
 * Create a variable called age and assign it to your age (or a number). Write
 * a conditional that matches the following conditions:
 *
 *   - if age is less than or equal 19, print "You're still a teenager!"
 */

/*
 * Prompt:
 *
 * Create a variable called favoriteNumber and assign your favorite number to
 * it. Write a conditional that matches the following conditions:
 *
 *   - if favoriteNumber is less than 10, print "A little number!" to the
 *   console
 *   - otherwise, print "Not a little number!" to the console
 */

/*
 * Prompt:
 *
 * Create a variable called a and assign it a number. Write a conditional that
 * matches the following conditions:
 *   - if (a * 3) % 2 is equal to 0, print "After running our calculations, the
 *   result is even"
 *   - otherwise, print "After running our calculations, the result is odd"
 */

/*
 * Prompt:
 *
 * Create a variable called b and assign it a random number between 0 and 100.
 * Write a conditional that matches the following conditions:
 *
 *   - if b is less than 25, print "bottom quartile"
 *   - if b is between 25 and 50, print "lower quartile"
 *   - if b is between 50 and 75, print "upper quartile"
 *   - if b is between 75 and 100, print "top quartile"
 */

// JavaScript Errors and Debugging
// Each code snippet below throws an error. Your task is to determine (a) what is the error message, (b) what is causing the error message and (c) how to resolve or fix the error?

// Errors
// Prompt 1
// We want an alert to appear in the browser that says "Hello World". But for some reason, it's not working ...

// alert(greeting);

// A. What is the error message?

// B. What is causing the error?

// C. How can you resolve/fix the error?

// Prompt 2
// We're trying to log the birds with names that are more than 4 characters long. But for some reason, it's not working ...

// The .forEach() array method takes a callback function as an argument. We will discuss those types of array methods this afternoon, but you don't need to know about them to debug this error.

// let birds = ['Eagle', 'Falcon', 'Duck', 'Turkey']

// birds.forEach(function(bird) {
//   if (bird.length > 4) {
//     console.log(bird)
// }

// A. What is the error message?

// B. What is causing the error?

// C. How can you resolve/fix the error?

// Prompt 3
// We're trying to concatenate these two strings together. But for some reason, it's not working ...

// let greeting = "hello";
// greeting.push(" world");
// console.log(greeting);

// A. What is the error message?

// B. What is causing the error?

// C. How can you resolve/fix the error?

// Prompt 4

// We're trying to call the `greet` function. But for some reason, it's not working...

// this.greet();

// A. What is the error message?

// B. What is causing the error?

// C. How can you resolve/fix the error?

// Prompt 5
// We're trying to print Bob's name to the console. But for some reason, it's not working ...

// var bob;
// console.log(bob.name);

// A. What is the error message?

// B. What is causing the error?

// C. How can you resolve/fix the error?

// Prompt 6
// We're trying to print the message to the console. But for some reason, it's not working...

// let forSale = "sea shells"
// let message = `She "sells' ${forSale} by \'sea' sea shore`
// console.log(message)

// A. What is the error message?

// B. What is causing the error?

// C. How can you resolve/fix the error?

// Prompt 7
// We're trying to print Bob's first name to the console. But for some reason, it's not working.

// const bob = {
//   profile: {
//     name: {
//       firstName: "Bob",
//       lastName: "Seger"
//     },
//     age: 73,
//     dateOfBirth: {
//       month: "May",
//       day: 6,
//       year: 1945
//     },
//     career: "Singer"
//   }
// };

// console.log(bob.name.first_name);

// A. What is the error message?

// B. What is causing the error?

// C. How can you resolve/fix the error?

// Prompt 8
// We're trying to make it so that when we call the greet method of person, an alert appears with the person's full name. But for some reason, it's not working ...

// let person = {
//   firstName: "Bob",
//   lastName: "Seger",
//   greet: function() {
//     function fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }

//     alert(fullName());
//   }
// };

// person.greet();

// A. What is the error message?

// B. What is causing the error?

// C. How can you resolve/fix the error?

// Prompt 9
// We're trying to implement the Fibonacci Sequence. But for some reason, it's not working ...

// function createSequence( max ) {
//   let sequence = [1, 1]
// a = 1
// b = 1

// for (let i = 2; i < max; i++) {
// let a = sequence[i - 1]
// let b = sequence[i - 2]
// sequence.push(a + b)

// while (i <= max) {
//    var a = 1, b = 1
// }
// }
//     return sequence
//   }

// let sequence = createSequence(20)
// console.log(sequence)

// A. What is the error message?

// B. What is causing the error?

// C. How can you resolve/fix the error?

// Prompt 10
// We're trying to make a working counter object. But for some reason, it's not working ...

// const Counter = {
//   total: 0,
// }

// Counter.increase() {
//   this.total++
// }

// Counter.decrease() {
//   this.total--
// }

// Counter.reset() {
//   this.total = 0
// }

// Counter.increase()
// Counter.increase()
// Counter.increase()
// Counter.increase()
// Counter.increase()
// Counter.increase()
// console.log(Counter.total) // => value = 6
// Counter.decrease()
// Counter.decrease()
// Counter.decrease()
// Counter.decrease()
// console.log(Counter.total)  // => value = 2
// Counter.rest()
// console.log(Counter.total) // => value = 0

// A. What is the error message?

// B. What is causing the error?

// C. How can you resolve/fix the error?

// Prompt 11
// We're trying to print the string "hello world". But for some reason, it's not working ...

// let obj = {
//   oompa: [
//     {
//       loompa: {
//         doopati: [
//           [
//             {
//               do: ["good by cruel world", "hello world", "goodnight moon"]
//             }
//           ]
//         ]
//       }
//     }
//   ]
// };

// let message = obj[0].oompa.loompa[0].doopati.do[2];
// console.log(message);

// A. What is the error message?

// B. What is causing the error?

// C. How can you resolve/fix the error?

/*
 * PART 1: for loops
 */

/*
 * Prompt:
 *
 * Write a for loop that counts from 0 to 5, printing each number to the
 * console.
 */

/*
 * Prompt:
 *
 * Write a for loop that counts down from 5 to 0, printing each number to the
 * console.
 */

/*
 * Prompt:
 *
 * Write a for loop that counts from 0 to 10 in increments of 2, printing each
 * number to the console.
 */

/*
 * Prompt:
 *
 * Write a for loop that counts from -5 to 5, printing each number to the
 * console.
 */

/*
 * Prompt:
 *
 * Create a variable called sum (make sure sum is defined outside of your loop).
 * Create a loop that counts from 1 to 10, incrementing by 1. This time, rather
 * than printing i to the console, add i to sum. After your loop, print the
 * value of sum to the console.
 *
 * Reflect: What did we just do here?
 */

/*
 * Prompt:
 *
 * We can write any valid JavaScript inside the block of our loop (the part
 * between the curly braces). Let's put a conditional in there!
 *
 * Create a loop that counts from 0 to 10. Inside your loop, write a conditional
 * that matches these requirements:
 *
 *    - if the value of i is even, print out "i is event"
 *    - otherwise, print out "i is odd"
 */

/*
 * PART 2: Iterating through Arrays
 */

/*
 * Prompt:
 *
 * Write a for loop that prints out each item in the below array.
 */

// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

/*
 * Prompt:
 *
 * Write a for loop that sums the values in the below array.
 */

// const numbers = [23, 19, 23, 52, 12];

/*
 * PART 3: while loops
 */

/*
 * Prompt:
 *
 * Use a while loop to count from 0 to 10.
 */

/*
 * Prompt:
 *
 * Use the prompt function to write a while loop that will continue to ask the
 * user for the magic number until they enter the number 7.
 */

// ARRAY METHODS HW

// Welcome to Season 65 of the Bachelor! Our Bachelor, Kolton, needs your help remembering his beautiful contestants.
// You have received an array of objects representing data about the women competing for Kolton's heart. Follow
// the prompts to jog Kolton's memory using array methods.

// var list1 = [
//   { firstName: 'Katie', lastInitial: 'M.', city: 'Los Angeles', state: 'CA', age: 24, zodiacSign: 'Aries', signUpDate: 2011 },
//   { firstName: 'Lauren', lastInitial: 'K.', city: 'Philadelphia', state: 'PA', age: 26, zodiacSign: 'Gemini', signUpDate: 1994 },
//   { firstName: 'Sara', lastInitial: 'T.', city: 'Encinitas', state: 'CA', age: 28, zodiacSign: 'Scorpio', signUpDate: 2012 },
//   { firstName: 'Yasmein', lastInitial: 'A.', city: 'Santa Barbara', state: 'CA', age: 25, zodiacSign: 'Aries', signUpDate: 2001 },
//   { firstName: 'Danielle', lastInitial: 'R.', city: 'Boston', state: 'MA', age: 25, zodiacSign: 'Aries', signUpDate: 2008 },
//   { firstName: 'Marybeth', lastInitial: 'M.', city: 'New York', state: 'NY', age: 29, zodiacSign: 'Aquarius', signUpDate: 1999 },
//   { firstName: 'Jillian', lastInitial: 'L.', city: 'Grand Rapids', state: 'MI', age: 27, zodiacSign: 'Libra', signUpDate: 2000 },
//   { firstName: 'Krissy', lastInitial: 'M.', city: 'Raleigh', state: 'NC', age: 28, zodiacSign: 'Pisces', signUpDate: 2019 }
// ]

// Prompt 1

// Kolton is from California and wants to know how many contestants are from his home state. Return the number of contestants
// from California.

// Prompt 2

// Kolton recently read in his horoscope that he is likely to match with an Aries. Return the number of contestants
// from California who are also an Aries.

// Prompt 3

// Help Kolton out! The show has begun, and he needs to start a coversation with the contestants. Return an array
// where each object will have a new property 'icebreaker' with the following string value:

// Hi < firstName here >, what do you like the most about < city here >?

// Prompt 4

// Kolton is nervous that an old flame from Michigan has made it onto his season. Return:

// true if at least one contestant is from MI; or
// false if there will be no contestants from MI.

// Prompt 5

// Aries is of the most assertive astrological signs. Let's find out which Aries contestant signed up first,
// if there are any. Return one of the following strings:

// 'Hi, my name is < firstName here > < lastInitial here > from < city here >, and I was the first to sign up!'; or
// 'There will be no Aries contestants this season.' if there are no Aries contestants.

// BONUS

// Kolton wants to know the breakdown of each astrological sign. Return an object which includes the count of each sign
// represented by the pool of contestants.

// Example: { Aries: 4, Libra: 1, Pisces: 1 }

/*
 * Before you begin working on the prompts, open up index.html and add a script
 * tag to import this JavaScript file. You'll know it's working when you see the
 * console.log below in the console of your browser.
 */

// console.log('challenge.js has been included!');

/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteNumber on one line; assign it a value on
 * the next line.
 */

/*
 * Prompt 2:
 *
 * Declare 3 variables using each of let, const, and var.
 */

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 */

/*
 * Prompt 5:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */

/*
 * Prompt 6:
 *
 * Write some code that solves each sub-prompt below.
 */

// A. Use loose-equals (==) to create a statement that is false
// B. Use strict equals (===) to create a statement that is true
// C. Use strict unequal (!==) to create a statement that is true
// D. Use less than (<) to create a statement that is false
// E. Use greater than (>) to create a statement that is false
// F. Use less than or equals (<=) to create a statemetn that is true
// G. Use greater than or equals (>=) to create a statemetn that is false

/*
 * Prompt 7:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to true
 */

// let a = 4;
// let b = 53;
// let c = 57;
// let d = 16;
// let e = 'Kevin';

// a _ b;

// c _ d;

// 'Name' ___ 'Name';

// a _ b ___ c;

// a _ a ___ d;

// e ___ 'Kevin';

// 48 ___ '48';

/*
 * Prompt 8:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to false
 */

// a = 6;
// b = 100;
// c = -5;
// d = 3000;
// e = 'Jelly Bean';

// a _ b;

// c _ d;

// 'Peanut' ___ 'Peanut';

// a _ b ___ c;

// a _ a ___ d;

// e ___ 'Jelly Bean';

// 48 ___ '48';

/*
 * Prompt 9:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

// let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
// let array2 = [
//   ['Marty Feldman', 'Marty Marion'],
//   ['Marty Stuart', 'Marty McFly'],
//   ['Marty Jannetty', 'Marty Robbins']
// ];
// let array3 = [
//   ['Marty Feldman', ['Marty Marion']],
//   ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
// ];

/*
 * Prompt 10:
 *
 * Use the length of the array below to retrieve the second to last item.
 */

// let array4 = ['a', 'b', 'c', 'd', 'e'];

/*
 * Prompt 11:
 *
 * Use the following arrays to answer the subprompts below.
 */

// let thom = ['Thom', 1000, 'Christchurch'];
// let karolin = ['Karolin', 16, 'New York'];
// let kristyn = ['Kristyn', 5, 'Pittsburgh'];
// let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Gameboy".

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".

/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */

/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Original Problem - do not modify */
// function (a) {
//   return a ** 2
// }

/** Your Solution */
// function (a) {
//   return a ** 2
// }

/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */

/*
 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */

/*
 * Prompt 7:
 *
 * Fix the following code.
 */

/** Original Problem - do not modify */
// function makePerson(firstname, lastname) {
//   firstname: firstname,
//     lastname: lastname
// }

// const zakk = makePerson('Zakk', 'F')
// const jimmy = makePerson('Jimmy', 'B')

// /** Your Solution */
// function makePerson(firstname, lastname) {
//   firstname: firstname,
//     lastname: lastname
// }

// const zakk = makePerson('Zakk', 'F')
// const jimmy = makePerson('Jimmy', 'B')

/*
 * Prompt 8:
 *
 * Write a function that returns an object. The object can be anything.
 */

/*
 * Prompt 9:
 *
 * Write a function that returns an array. The array can be of anything.
 */

/*
 * Prompt 10:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

/** Starter Code */
// let sum = 0

/** Your Solution */
// let sum = 0

/*
 * Prompt 11:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */

/*
 * Prompt 12:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string.
 */

/*
 * Prompt 13:
 *
 * How can you write a function so that this expression works? It should print
 * the string "this works!"
 */

/** Starter Code */
// testFunc()()

/** Your Solution */
// testFunc()()

/*
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */
// function add(a, b) {
//   a + b
// }

/** Your Solution */
// function add(a, b) {
//   a + b
// }

/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */

/*
 * Work through each of the prompts below.
 *
 * Pro tip: comment out your solution to each prompt before moving on, so your
 * console only has messages from the prompt you're currently working on.
 *
 * Remember to make a commit after completing each prompt!
 */

/*
 * Prompt:
 *
 * Create a variable called age and assign it to your age (or a number). Write
 * a conditional that matches the following conditions:
 *
 *   - if age is less than or equal 19, print "You're still a teenager!"
 */

/*
 * Prompt:
 *
 * Create a variable called favoriteNumber and assign your favorite number to
 * it. Write a conditional that matches the following conditions:
 *
 *   - if favoriteNumber is less than 10, print "A little number!" to the
 *   console
 *   - otherwise, print "Not a little number!" to the console
 */

/*
 * Prompt:
 *
 * Create a variable called a and assign it a number. Write a conditional that
 * matches the following conditions:
 *   - if (a * 3) % 2 is equal to 0, print "After running our calculations, the
 *   result is even"
 *   - otherwise, print "After running our calculations, the result is odd"
 */

/*
 * Prompt:
 *
 * Create a variable called b and assign it a random number between 0 and 100.
 * Write a conditional that matches the following conditions:
 *
 *   - if b is less than 25, print "bottom quartile"
 *   - if b is between 25 and 50, print "lower quartile"
 *   - if b is between 50 and 75, print "upper quartile"
 *   - if b is between 75 and 100, print "top quartile"
 */

/*
 * PART 1: for loops
 */

/*
 * Prompt:
 *
 * Write a for loop that counts from 0 to 5, printing each number to the
 * console.
 */

/*
 * Prompt:
 *
 * Write a for loop that counts down from 5 to 0, printing each number to the
 * console.
 */

/*
 * Prompt:
 *
 * Write a for loop that counts from 0 to 10 in increments of 2, printing each
 * number to the console.
 */

/*
 * Prompt:
 *
 * Write a for loop that counts from -5 to 5, printing each number to the
 * console.
 */

/*
 * Prompt:
 *
 * Create a variable called sum (make sure sum is defined outside of your loop).
 * Create a loop that counts from 1 to 10, incrementing by 1. This time, rather
 * than printing i to the console, add i to sum. After your loop, print the
 * value of sum to the console.
 *
 * Reflect: What did we just do here?
 */

/*
 * Prompt:
 *
 * We can write any valid JavaScript inside the block of our loop (the part
 * between the curly braces). Let's put a conditional in there!
 *
 * Create a loop that counts from 0 to 10. Inside your loop, write a conditional
 * that matches these requirements:
 *
 *    - if the value of i is even, print out "i is event"
 *    - otherwise, print out "i is odd"
 */

/*
 * PART 2: Iterating through Arrays
 */

/*
 * Prompt:
 *
 * Write a for loop that prints out each item in the below array.
 */

// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

/*
 * Prompt:
 *
 * Write a for loop that sums the values in the below array.
 */

// const numbers = [23, 19, 23, 52, 12];

/*
 * PART 3: while loops
 */

/*
 * Prompt:
 *
 * Use a while loop to count from 0 to 10.
 */

/*
 * Prompt:
 *
 * Use the prompt function to write a while loop that will continue to ask the
 * user for the magic number until they enter the number 7.
 */

/*
 * Instructions:
 * Work through the following prompts. Prompts marked with "We Do", we will work
 * on together, as a class; prompts marked with "You Do", you will be given time
 * to work through on your own.
 *
 * Tip: comment out your solution to each prompt before moving on to the next
 * one! This will keep your console clear.
 */

/*
 * Prompt 1: We Do
 *
 * Define a class for a Car. Your Car class should have the following
 * properties:
 *
 *    - make
 *    - model
 *    - color
 *
 * Your Car class should have the following methods:
 *
 *    - drive: print 'vroom vroom' to the console
 *
 * Once you create your class definition create two instances.
 */

/*
 * Prompt 2: You Do
 *
 * Define a class for your favorite animal (dog, cat, giraffe, etc). Give your
 * class 3 attributes and two methods.
 *
 * After you've defined your class, create 3 instances.
 */

/*
 * Prompt 3: We Do
 *
 * We're going to modify our Car class from the previous prompt and extend it to
 * create a Toyota class:
 *
 *   - Make a Car class with make, model, and color properties.
 *   - Extend your Car class to create a Toyota class. The make property will always
 *     be 'Toyota'. Add a drive method to your Toyota class.
 *
 * Make an instance of your Toyota class.
 *
 * You Do:
 *
 * Once we've completed the above, work through the following changes to your
 * Car and Toyota classes:
 *
 *   - move the color property to your Toyota class
 *   - move the drive method to your Car class
 *   - add a property to your Toyota class
 *   - add a property to your Car class and "fill it in" for your Toyota class
 */

/*
 * Prompt 4: You Do
 *
 * Define and Animal class with the following properties and methods:
 *
 *   - group (Invertebrates, Fish, Amphibians, Reptiles, Birds, and Mammals)
 *   - eat: log "yum yum" to the console
 *   - sleep: log "zzzzz" to the console
 *
 * Modify your animal from the previous prompt so that it extends your new
 * Animal class.
 *
 * Create an instance of your animal class (the one that extends the Animal
 * class).
 */

/*
 * Prompt 5: You Do
 *
 * Define a Card class with the following properties:
 *
 *   - suit (hearts, spades, clubs, diamonds)
 *   - rank (Ace, 2, 3, 4, .. Jack, King, Queen)
 *   - score (1, 2, 3, 4, ... 11, 12, 13)
 *
 * Define a Deck class with the following properties and methods:
 *
 *   - length (the number of cards - should start at 52)
 *   - cards (an array of cards in the deck)
 *   - draw: return a random card from the cards array
 *
 * When you create an instance of your Deck class (i.e. in your constructor),
 * fill in the cards array with 52 instances of your Card class. You can do
 * this with a nested for loop - first loop through an array of all possible
 * suits, then loop through an array of all possible ranks. Inside your inner
 * loop, create an instance of your Card class and push it into the Deck's cards
 * array.
 *
 * Instantiate an instance of your Deck and start drawing random cards!
 */

// console.log('hello world');
//Part 1: It's Hip to Be Square
//Make a function that that squares each number passed into it from an array, and sums the results.
//const arr = [1, 2, 2];
// let sumOfSquares = arr => {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i] ** 2;
// 	}
// 	return sum;
// };
// function sumOfSquares(arr) {
// 	const reducer = (acc, val) => {
// 		return acc + val ** 2;
// 	};
// 	return arr.reduce(reducer);
// }
// console.log(sumOfSquares(arr));
//Part 2: Loop the Loop: 2D Array Addition
//Make a function that returns the greatest sum of a row, column or diagonal from a two dimensional array
// const arr = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, -80, 90]
// ];
// function greatestSum(arr) {
//     let maxRowSum = 0;
//     let maxColumnSum = 0;
//     let diagonal1Sum = 0;
//     let diagonal2Sum = 0;
//     let length = arr.length;
//check row sums;
// for (let i = 0; i < length; i++) {
//     let temp = 0;
//     for (let j = 0; j < length; j++) {
//         temp += arr[i][j];
//         maxRowSum = maxRowSum > temp ? maxRowSum : temp;
//     }
// }
//check column sums:
// for (let i = 0; i < length; i++) {
//     let temp = 0;
//     for (let j = 0; j < length; j++) {
//         temp += arr[j][i];
//         maxColumnSum = maxColumnSum > temp ? maxColumnSum : temp;
//     }
// }
//check diagonal sums:
// for (let i = 0; i < length; i++) {
//NW SE diagonal
// diagonal1Sum += arr[i][i];
//SW NE diagonal
// diagonal2Sum += arr[i][length - i - 1];

//     return Math.max(maxRowSum, maxColumnSum, diagonal1Sum, diagona // }l2Sum);
// }
// console.log(greatestSum(arr));
