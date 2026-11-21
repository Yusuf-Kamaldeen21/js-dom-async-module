//function to calculate age approximately using year of birth
function calculateAge(dateOfBirth) {
  const birthYear = new Date(dateOfBirth).getFullYear();
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

//Creating an object to store personal information
const  myInformation = {
  //string data type
  name: "Yusuf Kamaldeen",
  
  //string data type (YYY-MM-DD format)
  dateOfBirth: "1998-05-15",
  //string data type
  address: "123 Main Street, Lagos, Nigeria",
  nationality: "Nigerian",
  //string data type
  currentLocation: "Kano, Nigeria",
  //Array data type for multiple hobbies 
  hobbies: ["Reading", "Traveling", "Cooking", "Photography"],
  //Array data type for multiple skills
  skills: ["JavaScript", "React", "Node.js", "Python"],
  //Number data type
  yearsOfExperience: 5,
  education: "Bachelor's Degree in Computer Science",
 //function to calculate age based on date of birth
  age: function() {
  return calculateAge(this.dateOfBirth);
 }

};

//display the personal information
console.log("Name: " + myInformation.name);
console.log("Date of Birth: " + myInformation.dateOfBirth);
console.log("Address: " + myInformation.address);
console.log("Nationality: " + myInformation.nationality);
console.log("Current Location: " + myInformation.currentLocation);
console.log("Hobbies: " + myInformation.hobbies.join(", "));
console.log("Skills: " + myInformation.skills.join(", "));
console.log("Years of Experience: " + myInformation.yearsOfExperience);
console.log("Education: " + myInformation.education);
console.log("Age: " + myInformation.age());