class Driver{
  constructor(name, day){
    this.name=name;
    this.day=day;
  }
  
  startDate(){
    let date1 = new Date(this.day);
    return date1;
  }
  yearsExperienceFromBeginningOf(){
    let date1 = new Date(this.day);
    let date2 = new Date();
    return date2.getFullYear()-date1.getFullYear();
  }
}