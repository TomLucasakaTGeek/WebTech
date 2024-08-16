for(let i : number = 0; i <= 5; i++)
    console.log(5)

//optional types

//union type
let v: string | number;
v = "12";

function abcd(variable: string | number) {
    if(typeof variable === 'number')
        variable.toFixed(2)
    else if(typeof variable === 'string')
        variable.toUpperCase()
}

abcd(12);

//intersection type
type classmates = {
    section: string
}
type students = {
    name: string
}
type ClassmatesInStudents = classmates & students;

let a: ClassmatesInStudents = {
    name: "Harsh",
    section: "A"
}



