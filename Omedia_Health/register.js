let userObject;

let inputName;
let getName;

let inputEmail;
let getEmail;

let inputPassword;
let getPassword;

let inputDesiredWeight;
let getDesiredWeight;

let inputMealPerDay;
let getMealPerDay;

let inputActivityperday;
let getActivityPerDay;

let weightDatetime;
let getWeightDatetime;

let inputWeight;
let getWeight;

let inputMealDate;
let getMealDate;

let inputMealName;
let getMealName;

let inputMealCalories;
let getMealCalories;

let inputActivityDate;
let getActivityDate;

let inputActivityType;
let getActivityType;

let inputActivityDistance;
let getActivityDistance;

let inputActivityCalories;
let num = 1;

function save_info(){
    if (typeof(Storage) !== "undefined") {
        //------------------input  values
      inputName = document.getElementById("inputname").value;
      inputEmail = document.getElementById("inputemail").value;
      inputPassword = document.getElementById("inputpassword").value;
      inputDesiredWeight = document.getElementById("desired_weight").value;
      inputMealPerDay = document.getElementById("meal_per_day").value;
      inputActivityperday = document.getElementById("activity_per_day").value;

      userObject = {
            name: inputName,
            email: getEmail,
            password: getPassword,
            desired_weight: getDesiredWeight,
            meal_per_day: getMealPerDay,
            activity_per_day: getActivityPerDay
        };
          window.location.href = "#profile-register"; 
          return profileUserInfo();
      }else {
        document.getElementById("h1d").innerHTML = "404 error";
      }
}
function profileUserInfo(){
  //____name
  localStorage.setItem("name", inputName);
  getName = localStorage.getItem("name"); 
  document.getElementById("profile-name").innerText = getName;
  //____email
  window.localStorage.setItem("email",inputEmail);
  getEmail = localStorage.getItem("email");
  document.getElementById("profile-email").innerHTML = getEmail;
  //____password
  localStorage.setItem("password", inputPassword);
  getPassword = localStorage.getItem("password");
  document.getElementById("profile-password").innerHTML = getPassword;
  //_____desired weight
  localStorage.setItem("desired_weight", inputDesiredWeight);
  getDesiredWeight = localStorage.getItem("desired_weight");
  document.getElementById("desired_weightkg").innerHTML = getDesiredWeight;
  //____meal per day
  localStorage.setItem("meal_del_day",inputMealPerDay);
  getMealPerDay = localStorage.getItem("meal_del_day");
  document.getElementById("meal-per-day").innerHTML = getMealPerDay;
  //___activity per day
  localStorage.setItem("activity_per_day", inputActivityperday);
  getActivityPerDay = localStorage.getItem("activity_per_day");
  document.getElementById("activity-per-day").innerHTML = getActivityPerDay;
};

function InfoSave(){
  //_____dateTime
  weightDatetime = document.getElementById("weightDateTime").value;
  localStorage.setItem("dateweight", weightDatetime);
  getWeightDatetime = localStorage.getItem("dateweight"); 
  //_____user weight
  inputWeight = document.getElementById("userWeight").value;
  localStorage.setItem("user-weight",inputWeight);
  getWeight = localStorage.getItem("user-weight");
  //_____meal date
  inputMealDate = document.getElementById("mealdate").value;
  localStorage.setItem("meal-date", inputMealDate);
  getMealDate = localStorage.getItem("meal-date");
  //____meal name
  inputMealName = document.getElementById("userMealname").value;
  localStorage.setItem("meal-name",inputMealName);
  getMealName = localStorage.getItem("meal-name");
  //____meal calories
  inputMealCalories = document.getElementById("userMealCalories").value;
  localStorage.setItem("meal-calories", inputMealCalories);
  getMealCalories = localStorage.getItem("meal-calories");
  //____activity date
  inputActivityDate = document.getElementById("activitydate").value;
  localStorage.setItem("activity-date",inputActivityDate);
  getActivityDate = localStorage.getItem("activity-date");
  //____activity type
  inputActivityType = document.getElementById("activityType").value;
  localStorage.setItem("activity-type", inputActivityType);
  getActivityType = localStorage.getItem("activity-type");
  //____activity distance
  inputActivityDistance = document.getElementById("activityDistancee").value;
  localStorage.setItem("activity-distance",inputActivityDistance);
  getActivityDistance = localStorage.getItem("activity-distance");
  //___activity calories
  if(getActivityType == "Hiking"){
    inputActivityCalories = getActivityDistance * 40;
  }else if(getActivityType == "Running"){
    inputActivityCalories = getActivityDistance * 140;
  }else{
    inputActivityCalories = getActivityDistance * 300;
  }
  //    insert in grid
  if(num == 1 && getWeightDatetime == getMealDate && getMealDate == getActivityDate ){
  document.getElementById("d1").innerHTML = getWeightDatetime;
    if(getDesiredWeight <= getWeight){
      document.getElementById("d2").innerHTML = getWeight+"kg";
      document.getElementById("d2").style.color = "red";
    }else{
      document.getElementById("d2").innerHTML = getWeight +"kg";
      document.getElementById("d2").style.color = "green";
    }
    if(getMealCalories >= inputMealPerDay){
      document.getElementById("d3").innerHTML = getMealCalories +"cl";
      document.getElementById("d3").style.color = "red";
    }else{
      document.getElementById("d3").innerHTML = getMealCalories +"cl";
      document.getElementById("d3").style.color = "green";
    }

    if(inputActivityperday <= inputActivityCalories ){
      
      document.getElementById("d4").innerHTML = inputActivityCalories +"cl";
      document.getElementById("d4").style.color = "green";
    }else{
      document.getElementById("d4").innerHTML = inputActivityCalories +"cl";
      document.getElementById("d4").style.color = "red";
    }
  }
  
  if(num == 2 && getWeightDatetime == getMealDate && getMealDate == getActivityDate ){
    document.getElementById("d5").innerHTML = getWeightDatetime;
      if(getDesiredWeight <= getWeight){
        document.getElementById("d6").innerHTML = getWeight+"kg";
        document.getElementById("d6").style.color = "red";
      }else{
        document.getElementById("d6").innerHTML = getWeight +"kg";
        document.getElementById("d6").style.color = "green";
      }
      if(getMealCalories >= inputMealPerDay){
        document.getElementById("d7").innerHTML = getMealCalories +" cl";
        document.getElementById("d7").style.color = "red";
      }else{
        document.getElementById("d7").innerHTML = getMealCalories +"cl";
        document.getElementById("d7").style.color = "green";
      }
  
      if(inputActivityperday <= inputActivityCalories ){
        
        document.getElementById("d8").innerHTML = inputActivityCalories +"cl";
        document.getElementById("d8").style.color = "green";
      }else{
        document.getElementById("d8").innerHTML = inputActivityCalories +"cl";
        document.getElementById("d8").style.color = "red";
      }
    }

    if(num == 3 && getWeightDatetime == getMealDate && getMealDate == getActivityDate ){
      document.getElementById("d9").innerHTML = getWeightDatetime;
        if(getDesiredWeight <= getWeight){
          document.getElementById("d10").innerHTML = getWeight+"kg";
          document.getElementById("d10").style.color = "red";
        }else{
          document.getElementById("d10").innerHTML = getWeight +"kg";
          document.getElementById("d10").style.color = "green";
        }
        if(getMealCalories >= inputMealPerDay){
          document.getElementById("d11").innerHTML = getMealCalories +"cl";
          document.getElementById("d11").style.color = "red";
        }else{
          document.getElementById("d11").innerHTML = getMealCalories +" dcl";
          document.getElementById("d11").style.color = "green";
        }
    
        if(inputActivityperday <= inputActivityCalories ){
          
          document.getElementById("d12").innerHTML = inputActivityCalories +"cl";
          document.getElementById("d12").style.color = "green";
        }else{
          document.getElementById("d12").innerHTML = inputActivityCalories +"cl";
          document.getElementById("d12").style.color = "red";
        }
      }

  num ++;
} 
//---------------------------Edit
//---------------------------Weight
function Weight1Edit(){
  let weightEdit1 = prompt("Enter your weight: /kg",getWeight);
  if(weightEdit1  > getDesiredWeight ){
    document.getElementById("d2").innerHTML = weightEdit1 +"kg";
    document.getElementById("d2").style.color = "red";
  }else{
    document.getElementById("d2").innerHTML = weightEdit1 +"kg";
    document.getElementById("d2").style.color = "green";
  }
}
function Weight2Edit(){
  let weightEdit2 = prompt("Enter your weight: /kg",getWeight);
  if(weightEdit2  > getDesiredWeight ){
    document.getElementById("d6").innerHTML = weightEdit2 +"kg";
    document.getElementById("d6").style.color = "red";
  }else{
    document.getElementById("d6").innerHTML = weightEdit2 +"kg";
    document.getElementById("d6").style.color = "green";
  }
}
function Weight3Edit(){
  let weightEdit3 = prompt("Enter your weight: /kg", getWeight);
  if(weightEdit3  > getDesiredWeight ){
    document.getElementById("d10").innerHTML = weightEdit3 +"kg";
    document.getElementById("d10").style.color = "red";
  }else{
    document.getElementById("d10").innerHTML = weightEdit3 +"kg";
    document.getElementById("d10").style.color = "green";
  }
}
//-----------------------------meal
function Meal1Edit(){
  let MealEdit1 = prompt("Enter meal calories:", getMealPerDay);
  if(getMealPerDay <= MealEdit1){
    document.getElementById("d3").innerHTML = MealEdit1 + "cl";
    document.getElementById("d3").style.color = "red";
  }else{
    document.getElementById("d3").innerHTML = MealEdit1 + "cl";
    document.getElementById("d3").style.color = "green";
  }
 }
 function Meal2Edit(){
  let MealEdit2 = prompt("Enter meal calories:", getMealPerDay);
  if(getMealPerDay <= MealEdit2){
    document.getElementById("d7").innerHTML = MealEdit2 + "cl";
    document.getElementById("d7").style.color = "red";
  }else{
    document.getElementById("d7").innerHTML = MealEdit2 + "cl";
    document.getElementById("d7").style.color = "green";
  }
 }
 function Meal3Edit(){
  let MealEdit3 = prompt("Enter meal calories:", getMealPerDay);
  if(getMealPerDay <= MealEdit3){
    document.getElementById("d11").innerHTML = MealEdit3 + "cl";
    document.getElementById("d11").style.color = "red";
  }else{
    document.getElementById("d11").innerHTML = MealEdit3 + "cl";
    document.getElementById("d11").style.color = "green";
  }
 }
 //-------------------------Activities
 let activitySum;
 let actType1;
 let actType2;
 let actType3;
 function Activities1Edit(){
   activitySum;
   actType1 = prompt("Enter distance: ", getActivityDistance);
   if(getActivityType == "Hiking"){
    activitySum = actType1 * 40;
    insertInCalories1();

  }else if(getActivityType == "Running"){
    activitySum = actType1 * 140;
    insertInCalories1();

  }else{
    activitySum = actType1 * 300;
    insertInCalories1();
  }
 }

 function Activities2Edit(){
  activitySum;
  actType2 = prompt("Enter distance: ", getActivityDistance);
  if(getActivityType == "Hiking"){
   activitySum = actType2 * 40;
   insertInCalories2();

 }else if(getActivityType == "Running"){
   activitySum = actType2 * 140;
   insertInCalories2();

 }else{
   activitySum = actType2 * 300;
   insertInCalories2();
 }
}

function Activities3Edit(){
  activitySum;
  actType3 = prompt("Enter distance: ", getActivityDistance);
  if(getActivityType == "Hiking"){
   activitySum = actType3 * 40;
   insertInCalories3();

 }else if(getActivityType == "Running"){
   activitySum = actType3 * 140;
   insertInCalories3();

 }else{
   activitySum = actType3 * 300;
   insertInCalories3();
 }
}
//----------------------------fuctionInfunction
 function insertInCalories1(){
  document.getElementById("d4").innerHTML = activitySum + "cl";
  if(activitySum > getActivityPerDay){
    document.getElementById("d4").style.color ="green";
  }else{
    document.getElementById("d4").style.color ="red";
  }
 }
 function insertInCalories2(){
  document.getElementById("d8").innerHTML = activitySum + "cl";
  if(activitySum > getActivityPerDay){
    document.getElementById("d8").style.color ="green";
  }else{
    document.getElementById("d8").style.color ="red";
  }
 }
 function insertInCalories3(){
  document.getElementById("d12").innerHTML = activitySum + "cl";
  if(activitySum > getActivityPerDay){
    document.getElementById("d12").style.color ="green";
  }else{
    document.getElementById("d12").style.color ="red";
  }
 }
 //-----------whereisnospoon