class Driver{
  constructor(name, day){
    this.name=name;
    this.day=day;
  }
  
  startDate(){
    let date1 = new Date();
    
    return date1;
  }
  yearsExperienceFromBeginningOf(day2){
    let date1 = new Date(this.day);
    let date2 = new Date(day2);
    return date2.getFullYear()-date1.getFullYear();
  }
}