// Code your solution in this file
function findMatching(drivers,name){

  let MatchingDrivers = drivers.filter(function(driver){
    if(name.toLowerCase() ===driver.toLowerCase()){
      return true
    } else {
      return false
    }
    }
  })
  return MatchingDrivers;
}