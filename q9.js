function displaycar(){
  console.log("play car information");
}
function displaytruck() {
  console.log("display truck information");
}
function displaybike() {
  console.log("display bike information");

}


function vehicleinfo(vehiclecategory,callbackfn){
  console.log(`category: ${"vehiclecategory"} `);
  callbackfn();
}
vehicleinfo("Car",displaycar);
vehicleinfo("truck",displaytruck);
vehicleinfo("bike",displaybike);
