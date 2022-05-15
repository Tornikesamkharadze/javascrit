//Task 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"
*/

function check(object){
    if(object.isItarable === true){
        for(let i = 0 ; i < object.sampleArray.length; i++)
            console.log(object.sampleArray[i]);
    } else {
        console.log("provided array isn't itarable");
    }

}

let sampleObject = {
    isItarable : false,
    sampleArray : [12,63,21,34,98,57],
}

check(sampleObject);

/*
    /Task 2
    შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
    ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
    აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
    თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
    წინააღმდეგ შემთხვევაში false
*/

function checkPythagoras (x,y,z){
    if(x**2 == (y**2 + z**2)){
        return true + " x";
    } else if(y**2 == (x**2 + z**2)){
        return true + " y";
    } else if (z**2 == (y**2 + x**2)){
        return true + " z";
    }
    return false;
  }

  console.log(checkPythagoras(3,4,5));

//Task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/

function minMax(x){
    let max = x[0];
    let min = x[0];
    for (let i = 0; i < x.length; i++){
        if(x[i] > max){
            max = x[i];
        }
    }
    for (let j = 0; j < x.length; j++){
        if(x[j] < min){
            min = x[j];
        }
    }
    return `Min value is ${min} and Max value is ${max}`;
}
               
console.log(minMax([2,1,14,25,75,11,102,6]));
                
//Task 4
/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.
*/

function angleName(angle){
    if( angle < 90){
        return "Acute angle";
    } else if(angle == 90){
        return "Right angle";
    } else if(angle < 180){
        return "Obtuse angle";
    } else if(angle == 180){
        return "Straight angle";
    }
}

console.log(angleName(1));

//Task 5
/*
    დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .

    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A

    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]
*/

function checkStudentGrade(x){
    for(let i = 0; i < x.length; i++){
        if(x[i].grade  <= 50){
            studentScore[i].finalResult = 'F';
        } else if (x[i].grade <= 60){
            studentScore[i].finalResult = 'E';
        } else if (x[i].grade  <= 70){
            studentScore[i].finalResult = 'D';
        } else if (x[i].grade  <= 80){
            studentScore[i].finalResult = 'C';
        } else if (x[i].grade  <= 100){
            studentScore[i].finalResult = 'A';
        }
    }
    return x;
}

let studentScore = [
{name: "სალომე", grade : 91}, 
{name: "თორნიკე", grade : 71}, 
{name: "ზურა", grade : 45},
{name: "ვახო", grade : 67},
{name: "მაგდა", grade: 60}];

console.log(checkStudentGrade(studentScore));