
var instructor = { name: 'Elie', job: 'Instructor' }


function invert(instructor,property) {

    var new_obj = {};
  
    for (var prop in instructor) {
      if(instructor.hasOwnProperty(prop) && prop==property) {
        new_obj[instructor[prop]] = prop;
      }
      else{
        new_obj[instructor[prop]] = prop
      }
    }
  
    return new_obj;
  }

  console.log(invert(instructor,'name'))