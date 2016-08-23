//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
// The "this" key word refers to the object of the executing code. It gives context to a function invocation when being used inside of an object.
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      // The this key word is bound to the following rules in order:
      // -Explicit binding
      //   This is when we explicitly state the context of a function call and bind it to a particular object.
      //     you can use func.call, func.apply, and func.bind to explicitly call a funciton.
      //   func.call and func.apply invoke the function immidiately and assign the result to whatever variable you assign it to.
      //     For this reason, you need to include perameters with it.
      //   func.apply can pull in an array for the perameters and execute them in order.
      //   func.bind will assign the function to a variable of your choice that can be invoked later on. With func.bind you do
      //    not give it perameters until you invoke it later on.
      // -Implicit binding
      //   With implicit binding, the context is determined by whatever you put on the left of the period when invoking a funtion. If there is nothing
      //     to the left of the function call, it is implied that you are using the default/window. This is usefull because you can pull a fucntion and
      //     use it within different objects, thus accessing the information inside the object.
      // -defult/window
      //   If there is not explicit or implicit binding when a function is called, it will end up using the window. This could interfere with the rest of your code.
      // -New Binding
      //   New binding is only applicable when the "new" key word is used with a constructor funciton. Constructor functions are very usefull when you need to Create
      //     several objects that use the same properties.

  // 3) What is the difference between call and apply?

      //Answer
      // func.call and func.apply invoke the function immidiately and assign the result to whatever variable you assign it to.
      //   For this reason, you need to include perameters with it.
      // func.apply can pull in an array for the perameters and execute them in order.

  // 4) What does .bind do?

      //Answer
      // func.bind will assign the function to a variable of your choice that can be invoked later on. With func.bind you do
      //  not give it perameters until you invoke it later on.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: 'bfrost',
  email: 'bfozzy@icloud.com',
  getUsername: function(){ return this.username;}
}
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

console.log(user.getUsername());
//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
function Car(make, model, year){
  make = this.make;
  model = this.model;
  year = this.year;
  this.move= 0;
  this.moveCar = function(){
    this.move = this.move + 10;
    return this.move;
  };
}
var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
var x = getYear.bind(prius);
var y = getYear.bind(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here- The window because no context was specified when the function was called.

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
