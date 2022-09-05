var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};

person.lucky_numbers[3]=33; // forma fácil de hacer el cambio, se podra hacer un bucle for?

//console.log(person.lucky_numbers);

//'significant_other: undefined', porque esta definido antes de que conozca el item?

 //var person3=Object.assign({},person); Asi asigno los valores del objeto person a una nueva var, person3. Pero nose como modificarlo, o si es mejor opción.

 function member(name, lastname, age, gender, lucky_numbers, significant_other) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.lucky_numbers = lucky_numbers;
    this.significant_other = significant_other;
  }

    var person3= new member("Jimmy", "Doe", 13, "male", [1,2,3,4], null);

    family.members.push(person3); //metemos a jimmy dentro del grupo de la familia
    // var SUMlucky_numbers= person.lucky_numbers.concat(person2.lucky_numbers,person3.lucky_numbers);
    var newarray = [];
    function sum(array){
        newarray.push(array);
    };
    sum(person.lucky_numbers);
    sum(person2.lucky_numbers);
    sum(person3.lucky_numbers);
    console.log(newarray);
    //console.log(SUMlucky_numbers);
