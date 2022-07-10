// Define a function called cleanNames that accepts an array of strings
// containing additional space characters at the beginning and end.
// The cleanNames()function should use the array map method to return a new
// array full of trimmed names.

// eg, cleanNames(["anne" , "chris" , "irene", "brenda" ]) 
// should give ["anne", "chris", "irene", "brenda"]

function cleanNames(arr){
    return arr.map(name => name.trim())
  }
  console.log(cleanNames(["  lulu", "   panther", "emmy    ", " joker    "]))


// Write a function Myfunc that takes in an array of numbers
//  and multiply each of the elements by 3.

function Myfunc(nums);{
return nums.map(nums=> nums*2);
}

Myfunc([3,5,9,6]);

// Write a js programme to check the grades of a student in exams 
// eg if student has marks between 90-100, you will print out the student's grade as A
// 90-100 =A
// 70-89=B
//60-69 =C
// 50-59= D
//0-49 E

function Grades(score) {
  var marks;

  switch(true) {
    case (score <= 100 && score >= 90):
       marks = 'A';
        break;
    case (score <= 89 && score >= 80):
        marks = 'B';
         
    case (score <= 79 && score >= 70):
        marks = 'C';
      
       case (score <= 69 && score >= 60):
        marks = 'D';
         
    case (score <= 59 && score >= 0):
        marks = 'F';
        break
}

  return Grades(score);
}

// Write JavaScript statements that will produce the following output:
// ["exuberant", destruction", "relocation" , "exaggerated"]


// Trial one
const findWords=inputWords.filter(word.length>8);{
console.log(["exuberant" , "destruction","relocation" ,"exaggerated"])
}

// Trial two
var string1="Exuberant"
var string2="Destruction"
var string3="Relocation"
var string4="Exaggerated"

var myarray=string1+string2+string3+string4
console.log(myarray)

var myarray=[]
myarray.push(string1)
myarray.push(string2)
myarray.push(string3)
myarray.push(string4)

document.write(myarray)