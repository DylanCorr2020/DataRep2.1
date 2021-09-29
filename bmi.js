class BMI{
    //add constructor with two arguments
    //initiliaze all our data
    //class is a blue print to create objects
    constructor(height,weight){
       //crate local variables
       this.height = height;
       this.weight = weight;
    }

    //add method 
    calculateBMI(){
       
        let bmi = this.weight/(this.height**2);
        return bmi
    }

}

//crate new variable 
//new instance of this class
//create an object
let myBmi = new BMI(2,90);


let calculatedBMI = myBmi.calculateBMI();

//output calclauted bmi
console.log(calculatedBMI);

//made instnce of class
//using that instance used method
//then store in calcylatedBMI 