
//create a parent class
class Vehicle{

    //starting point of class constructor with three arguments 
    constructor(make,model,year){
      //asign these as local variables using this
      this.make = make;
      this.model = model;
      this.year = year;
    }

    //create method 
    //print out make model and year using string template literal
    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, year: ${this.year}`);
    }


}
//end of parent class 


//let myVehicle = new Vehicle('VW','Gold',2008);
//let info = myVehicle.Information();


//class Cars extends from parent class Vehicle
//inherits from Vechucle class
class Cars extends Vehicle{

    //create constructor with 4 arguments
    constructor(make,model,year,doors){
        
         //invoke constructor of the parent class
         //using keyword super
         super(make,model,year);
         this.doors = doors;

    }

    //same method
    Information(){
        //envoke method of parent class uing super
        super.Information();
        //also console.log dooors
        console.log(`Doors: ${this.doors}`);
    }


}

//invoke the cars class 
//create variable and create an instance of class
let myCar = new Cars('VW','Golf',2011,5);

//envoke method of that class
myCar.Information();