function Person(name, surname) {
  this.name = name;
  this.surname = surname;

  this.getFullName = function() {
    return this.name + ' ' + this.surname;
  };

  /**
   * Or this also can be used.
   *
   * this.getFullName = function() {
   *   return name + ' ' + surname;
   * }
   *
   * REMEMBER: function remembers all variables that are used in it,
   * no matter when the function is called.
   * More to read: https://www.w3schools.com/js/js_function_closures.asp
   * */
}
