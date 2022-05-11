                                                /* task 1 */
var nameOfPerson = "ანა";
var ageOfPerson = 28;

var nameOfPerson1 = "ლევანი";
var ageOfPerson1 = 21;

var ageDifference = ageOfPerson - ageOfPerson1;

var text = nameOfPerson + " " + nameOfPerson1 + "ზე" + " " + ageDifference + " " + "წლით უფროსია"

console.log(ageDifference)

console.log(text)

                                                /* task 2 */

    var studentsNames = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
   
    console.log(studentsNames.length / 2 - 1)
    
    var middleStudentName = studentsNames[4]

    console.log(middleStudentName)


                                                /* task 3 */

    var students = {
        firstName: "თორნიკე",
        lastName: "სამხარაძე",
        age: 29,
        subjects:["Math", "Geography", "History", "Physics", "Biology"],
        roommate : {
            fullName: "ვახო კეჩხუაშვილი",
            age: 23,
        },
        fullName: "თორნიკე სამხარაძე",
    }

    var result = students.fullName + " " + "არის" + " " + students.age + " " + "წლის და მისი რუმმეითი არის" + " " + students.roommate.fullName

    /* var result = students.fullName + ` არის ${students.age} წლის და მისი რუმმეითი არის ${ students.roommate.fullName}` */
  
    console.log(result)

    for(let i = 0; i < students.subjects.length; i++){
         console.log(students.subjects[i])
    }

                                               /* task 4 */
        
    var fruitsArray = ["Banana", "Orange", "Apple", "Mango", 2, 12,]

    let i = 0;
    
    while(i < fruitsArray.length && typeof fruitsArray[i] === "string"){
        console.log(fruitsArray[i]);
        i++
        
    }

                                                /* task 5 */

    var numbersArray = [ 12 , 23 , 43 , 11 , 9 , 2 , 121 , 90]
    
    for(let i = 0; i < numbersArray.length ; i++){
        if(numbersArray[i] > 31 && numbersArray[i] % 2 == 0 ){
            console.log(numbersArray[i] + " ელემენტი აღემატება მითითებულ მნიშვნელობას და არის ლუწი, Element is greater than provided value and is EVEN")
        } else if (numbersArray[i] < 31 && numbersArray[i] % 2 != 0 ){
            console.log(numbersArray[i] + " ელემენტი მითითებულ მნიშვნელობაზე ნაკლებია და არის კენტი, Element is less than provided value and is ODD")
        }
    }

                                                /* task 6 */
       
    const BREAK_VALUE = 12
    
    let array = [41 , 31 , 81 , 9 ,2 , 12 , 71 , 21 , 32]

    function arrayBreaker(BREAK_VALUE,array){
        for(let i = 0; i < array.length; i++){
            if(array[i] != BREAK_VALUE){
                console.log(array[i]);
            } else {
                break;
            }
        }
    }

arrayBreaker(BREAK_VALUE,array);

                                                                        /* testing  */

const BREAKVALUE = 12

let array1 = [41 , 31 , 81 , 9 ,2 , 12 , 71 , 21 , 32]

var  s = 0 

while(true){
    console.log(array1[s])
    s++
    if(array1[s] == BREAKVALUE){
        break
    }
}


const BREAKVALUE1 = 12
let array2 = [41 , 31 , 81 , 9 ,2 , 12 , 71 , 21 , 32]
for(let i = 0; i < array2.length ; i++){
    if(array2[i] == 9){
        continue;
    } else if(array2[i] == BREAKVALUE1){
        break;
    }
    console.log(array2[i])
}
