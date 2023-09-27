
/// This dw_tester.js file is developped by,
///Piyali Chattopadhyay
///Project_scientist- Technical
///Virtual Lab Projects,Mechanical Engineering Department,IIT Kharagpur


$(document).ready(function(){
  $("#instcontrol").click(function(){
    $("#inst").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#myTables").click(function(){
	
	var ipvalue = $("#chkload").val();
	if(ipvalue == 1){
	$("#loadst").html('Loading');
	$("#loadst").slideToggle("slow");
	//$("#loadst").css('display','block');
    $("#loading").slideToggle("slow");
	}
	
  else if(ipvalue == 2){
	$("#loadst").html('Unloading');
	$("#loadst").slideToggle("slow");
	//$("#loadst").css('display','block');
    $("#loading").slideToggle("slow");
  }
  });
});

///wheel rotation
function rotateWheel(){
	
	document.getElementById('wheel').classList.add("rotateWheel");
	document.getElementById('wheel').classList.remove("rotateWheelRev");
}
function rotateWheelRev(){
	document.getElementById('wheel').classList.remove("rotateWheel");
	document.getElementById('wheel').classList.add("rotateWheelRev");
	
}
function stopWheel(){
	
	document.getElementById('wheel').classList.remove("rotateWheel");
	document.getElementById('wheel').classList.remove("rotateWheelRev");
}

///toggle function to rotate and stop wheel
//the pressure gauge starts indicating the value in kPa

var rotation = true;

function rotateToggle(){
	
if(rotation){
	
var l = $("#chkload").val();
	
if(l == 1){	
rotateWheel();
rotation = false;
autoUpdateChart();
}
if(l == 2){	
rotateWheelRev();
rotation = false;
autoUpdateChart();
}	
}
	
else{
stopWheel();
rotation=true;
stopUpdate();	
}	
}

 
 var root = document.documentElement;
 var pos = -10;
 var counter = 0;
 function piston_positionDown(){
	 
	counter++; 
	var newPos = math.add(pos,counter);
	
	document.getElementById('piston').style.top = newPos + "%";
	 
 }
 
 function piston_positionUp(){
	 
	counter--; 
	var newPos = math.add(pos,counter);
	
	document.getElementById('piston').style.top = newPos + "%";
	
 }
 
 ///drag and drop weights
 var mvaluehlf=0,mvalue1kg=0,mvalue1 = 0, mvalue2 = 0, mvalue3 = 0,tp,etp=12,countPos=0;
 function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	 
  ev.preventDefault();
 
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  
  ///top position calculation in drop div
  
  if(document.getElementById('massvalue').value == 0){
	  tp=83;
  }
  else if (document.getElementById('massvalue').value > 0){
	  tp = math.subtract(83,math.multiply(etp,countPos));
	 
  }
   countPos++;
  
  
  ///from bricks to drop div, loading
  if(data == "dischlf" && ev.target.id =="drop_div"){
	 mvaluehlf = 0.5; 
	 
	 document.getElementById('dischlf').style.position = "absolute";
	 document.getElementById('dischlf').style.left = 28 +"%";
	 document.getElementById('dischlf').style.top = tp +"%";
	  document.getElementById('dischlf').style.width = 53 +"%";
	 document.getElementById('dischlf').style.height = 16 +"%";
	 piston_positionDown();
	 $("#chkload").val("1");
 } 
 
 else if(data == "disc1kg" && ev.target.id =="drop_div"){
	 mvalue1kg = 1; 
	 
	 document.getElementById('disc1kg').style.position = "absolute";
	 document.getElementById('disc1kg').style.left = 25 +"%";
	 document.getElementById('disc1kg').style.top = tp +"%";
	  document.getElementById('disc1kg').style.width = 60 +"%";
	 document.getElementById('disc1kg').style.height = 16 +"%";
	 piston_positionDown();
	 $("#chkload").val("1");
 } 
 
  else if(data == "disc1" && ev.target.id =="drop_div"){
	 mvalue1 = 2.5; 
	 
	 document.getElementById('disc1').style.position = "absolute";
	 document.getElementById('disc1').style.left = 20 +"%";
	 document.getElementById('disc1').style.top = tp +"%";
	  document.getElementById('disc1').style.width = 70 +"%";
	 document.getElementById('disc1').style.height = 16 +"%";
	 piston_positionDown();
	 $("#chkload").val("1");
 } 
 
 else if(data == "disc2" && ev.target.id =="drop_div"){
	 mvalue2 = 5; 
	 document.getElementById('disc2').style.position = "absolute";
	 document.getElementById('disc2').style.left = 12 +"%";
	 document.getElementById('disc2').style.top = tp +"%";
	  document.getElementById('disc2').style.width = 85 +"%"; 
	 document.getElementById('disc2').style.height = 16 +"%";
	 piston_positionDown();
	 $("#chkload").val("1");
 } 
 
 else if(data == "disc3" && ev.target.id =="drop_div"){
	 mvalue3 = 10; 
	 document.getElementById('disc3').style.position = "absolute";
	 document.getElementById('disc3').style.left = 6 +"%";
	 document.getElementById('disc3').style.top = tp +"%";
	  document.getElementById('disc3').style.width = 95 +"%";
	 document.getElementById('disc3').style.height = 16 +"%";
	 piston_positionDown();
	 $("#chkload").val("1");
 }


///from drop div to bricks. unloading

else if(data == "dischlf" && ev.target.id =="bricks"){
	 mvaluehlf = 0; 
	 document.getElementById('dischlf').style.position = "absolute";
	 document.getElementById('dischlf').style.left = 47 +"%";
	 document.getElementById('dischlf').style.top = 10 +"%";
	  document.getElementById('dischlf').style.width = 6 +"%";
	 document.getElementById('dischlf').style.height = 10 +"%";
	 piston_positionUp();
	 $("#chkload").val("2");
 }

else if(data == "disc1kg" && ev.target.id =="bricks"){
	 mvalue1kg = 0; 
	 document.getElementById('disc1kg').style.position = "absolute";
	 document.getElementById('disc1kg').style.left = 46 +"%";
	 document.getElementById('disc1kg').style.top = 27 +"%";
	  document.getElementById('disc1kg').style.width = 8 +"%";
	 document.getElementById('disc1kg').style.height = 10 +"%";
	 piston_positionUp();
	 $("#chkload").val("2");
 }

else if(data == "disc1" && ev.target.id =="bricks"){
	 mvalue1 = 0; 
	 document.getElementById('disc1').style.position = "absolute";
	 document.getElementById('disc1').style.left = 45 +"%";
	 document.getElementById('disc1').style.top = 42 +"%";
	  document.getElementById('disc1').style.width = 10 +"%";
	 document.getElementById('disc1').style.height = 12 +"%";
	 piston_positionUp();
	 $("#chkload").val("2");
 }

else if(data == "disc2" && ev.target.id =="bricks"){
	 mvalue2 = 0; 
	 document.getElementById('disc2').style.position = "absolute";
	 document.getElementById('disc2').style.left = 43 +"%";
	 document.getElementById('disc2').style.top = 58 +"%";
	  document.getElementById('disc2').style.width = 14 +"%";
	 document.getElementById('disc2').style.height = 14 +"%";
	 piston_positionUp();
	 $("#chkload").val("2");
 }
else if(data == "disc3" && ev.target.id =="bricks"){
	 mvalue3 = 0; 
	 document.getElementById('disc3').style.position = "absolute";
	 document.getElementById('disc3').style.left = 41 +"%";
	 document.getElementById('disc3').style.top = 77 +"%";
	  document.getElementById('disc3').style.width = 19 +"%";
	 document.getElementById('disc3').style.height = 16 +"%";
	 piston_positionUp();
	 $("#chkload").val("2");
 }

document.getElementById('massvalue').value = math.add(mvaluehlf,mvalue1kg,mvalue1,mvalue2,mvalue3); 
 
}
 
 ///main programme simulation using sample report
 var IndicatedValue,indiErr,m,mp,mpdia,mp_Area,totalMass,F,ActPressure,prErr;
 function Dw_Tester(){
	 
	 m = $("#massvalue").val();///Mass value of the discs
	//console.log('massvalue ='+ m);
	
	 mp = 0.5;///Mass of piston acc. to the sample report in kg
	 mpdia = 0.01767;///Diameter of piston acc. to the sample report
	 mp_Area = math.divide(math.multiply(math.pi,math.pow(mpdia,2)),4);///Area of cross section of piston acc. to the sample report
	//console.log('pistonArea ='+ mp_Area);
	
	 totalMass = math.add(m,mp);///Mass of discs kept + Mass of piston
	//console.log('Total Mass ='+ totalMass);
	
	 F = math.multiply(totalMass,9.81);///total force or weight applied in Newton (Kg-m/s^2),g = 9.81 m/s^2
	//console.log('Force ='+ F);
	
	 ActPressure = math.divide(math.divide(F,mp_Area),1000);///Actual calculated pressure in KPa
	//console.log('Actpressure ='+ ActPressure);
	//var gaugeErr = math.random();
	 IndicatedValue = math.add(math.round(ActPressure),math.random(0,3));///Pressure gauge indicated value 
	//console.log('Indicated pressure ='+ IndicatedValue);
	
	var gaugeErr = math.abs(math.subtract(IndicatedValue,ActPressure));///error between calculated and measured value of pressure
	//console.log('Gauge Error ='+ gaugeErr);
	
	 prErr = math.multiply(math.divide(gaugeErr,ActPressure),100);///percentage error in pressure measurement
	//console.log('prcntg Err ='+ prErr);	 
	 
	 
 }
 
 /////////////////////////////////////Table Creation//////////////////////////////////////////////////////////EDIT it
 
var tabrowindex = 0;
var arr = [];

var table;



//------------------------------------------------- Table Creation -----------------------------------------------//
function CreateTables() {//loading


    arr[0] = tabrowindex+1 ;
    arr[1] = m;
    arr[2] = mp;
	arr[3] = totalMass;
	arr[4] = F;
	arr[5] = mpdia;
	arr[6] = mp_Area;
	arr[7] = ActPressure;
	arr[8] = IndicatedValue;
	arr[9] = prErr;
   
	
	table = document.getElementById("loading");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 50) {
        
         // Row increment
        for (var q = 0; q < 10; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }

}  


/*function table2() {//unloading


    arr[0] = tabrowindex+1 ;
    arr[1] = m;
    arr[2] = mp;
	arr[3] = totalMass;
	arr[4] = F;
	arr[5] = mpdia;
	arr[6] = mp_Area;
	arr[7] = ActPressure;
	arr[8] = IndicatedValue;
	arr[9] = prErr;
   
	
	table = document.getElementById("unloading");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 50) {
        
         // Row increment
        for (var q = 0; q < 10; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }

}  

function CreateTables(){
	
var load = $("#chkload").val();
	
if(load == 1){
table1();
}
	
if(load == 2){
table2();
}	
	
}*/

///plot section



function plot(){
	
var dataArrayX = [];///x axis values
var dataArrayY = [];///y axis values

document.getElementById('myPlot').style.display = "block";	
	//if(document.getElementById('chkload').value == 1){
var tableData = document.getElementById('loading');	
	//}
	
//if(document.getElementById('chkload').value == 2){
//var tableData = document.getElementById('unloading');	
	//}	
	
for (var tabrowindex1 = 1; tabrowindex1 < tableData.rows.length; tabrowindex1++) {
	var rwe1 = tableData.rows[tabrowindex1].cells;

	dataArrayX.push( parseFloat(rwe1[8].innerHTML));
	dataArrayY.push( parseFloat(rwe1[9].innerHTML));
}

///plot using chart.js, not good 	
/*new Chart("myPlot", {
  type: "line",
  data: {
    labels: dataArrayX,
    datasets: [{
      fill: false,
      //lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: dataArrayY
    }]
  },
  /*options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});*/
	
///plot using plotly.js	

const data = [{
  x:dataArrayX,
  y:dataArrayY,
  type:"spline",
  //orientation:"v",
  marker: {color:"#2163A5"}
}];

const layout = {
	title:"Percentage error vs. gauge reading(KPa)",

xaxis: {
	showgrid: true,
    zeroline: true,
    showline: true,
    //mirror: 'ticks',
    gridcolor: '#bdbdbd',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 3,
    linecolor: '#636363',
    linewidth: 2,
	rangemode:'tozero',
    title: {
      text: 'Gauge Reading(KPa)',
      font: {
        family: 'Times New Roman, monospace',
        size: 18,
        color: '#2163A5'
      }
    },
  },
  yaxis: {
	  tickangle: -65,
	  showgrid: true,
    zeroline: true,
    showline: true,
    //mirror: 'ticks',
    gridcolor: '#bdbdbd',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 3,
    linecolor: '#636363',
    linewidth: 2,
	rangemode:'tozero',
    title: {
      text: 'Percentage Error( % )',
	  
      font: {
        family: 'Times New Roman, monospace',
        size: 18,
        color: '#2163A5'
      }
    }
  }



};

Plotly.newPlot("myPlot", data, layout);
	
}


/// clear button function

function clear(){
var load = $('#chkload').val();

if(load == '1'){
var Dtable= document.getElementById('loading');
}
if(load == '2'){
var Dtable= document.getElementById('unloading');	
}
var Trow = Dtable.rows.length;
for (var i= Trow-1;i>0;i--){
Dtable.deleteRow(i);
}

tabrowindex=0;

document.getElementById('myPlot').style.display = "none";
	
};
function Refresh(){
	var load = document.getElementById('chkload').value;
	
	//if(load == '1'){
	var Dtable= document.getElementById('loading');
	//}
	//if(load == '2'){
	//var Dtable= document.getElementById('unloading');	
	//}
	
	var Trow = Dtable.rows.length;
	for (var i= Trow-1;i>0;i--){

	Dtable.deleteRow(i);
	}
	//Dtable.style.display="none";
	tabrowindex=0;
	
	document.getElementById('myPlot').style.display="none"; 
	
 }