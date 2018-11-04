function Child(firstName, lastName, age, gender){
	//properties of Child
	this.firstName = firstName;
	this.midName = midName
	this.age = age;
	this.gender = gender;
}

//inheritance means the traits of the function constructor are inherited
var x = new Child ("Alexandra", "Sage", 12, "girl");

//method used to create object firstChild
var child1 = {
	firstName1: "Josh",
	midName1: "David",
	age1: 15,
	gender: "boy",
	
	Name: function() {
		return this.firstName1 + " " + this.midName1;
	}
	
};