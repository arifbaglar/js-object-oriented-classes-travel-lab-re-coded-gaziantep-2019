class Driver{
  constructor(name, day){
    this.name=name;
    this.day=day;
  }
  
  startDate(){
    let date1 = new Date(this.day);
    return date1;
  }
  yearsExperienceFromBeginningOf(day2){
    let date1 = new Date(this.day);
    let date2 = new Date(day2);
    return date2.getFullYear()-date1.getFullYear();
  }
}
class Route{
  constructor(beginningLocation,endingLocation){
    this.beginningLocation=beginningLocation;
    this.endingLocation=endingLocation;
  }
  

  blocksTravelled(){
let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
      let fark= Math.abs(eastWest.indexOf(this.beginningLocation.horizontal)-eastWest.indexOf(this.endingLocation.horizontal))+Math.abs(this.beginningLocation.vertical-this.endingLocation.vertical)
      return fark;
  }
  estimatedTime(){
  let zaman1= this.blocksTravelled()/3;
  let zaman2= this.blocksTravelled()/2;
     return Math.round(zaman1);

}
}













