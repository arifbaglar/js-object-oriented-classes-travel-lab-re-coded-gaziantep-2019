class Driver{
  constructor(name, day){
    this.name=name;
    this.day=day;
  }
  
  startDate(){
    return date(this.day);
  }
  yearsExperienceFromBeginningOf(){
    return date.now()-date(this.day);
  }
}
