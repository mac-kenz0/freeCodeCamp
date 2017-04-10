var Person = function(firstAndLast) {
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName = function() {
    return firstAndLast.split(' ')[0];
  };
  this.getLastName = function() {
    return firstAndLast.split(' ')[1];
  };
  this.setFirstName = function(firstName) {
    firstAndLast = firstName + " " + firstAndLast.split(" ")[1];
  };
  this.setLastName = function(lastName) {
    firstAndLast = firstAndLast.split(" ")[0] + " " + lastName;
  };
  this.setFullName = function(firstAndLastName) {
   firstAndLast = firstAndLastName;
  };

};

var bob = new Person('Bob Ross');
bob.getFullName();
