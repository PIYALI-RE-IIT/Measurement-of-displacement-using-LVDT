
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
	
    $("#obsTable").slideToggle("slow");
	});
	
 
  });


///power on-off
function power(){
	
if (document.getElementById('poff').src.match("./images/poff.png")){
	
document.getElementById('poff').src = "./images/pon.png";
$('#rotateScrew').prop("disabled",false);	
	
}	
else if (document.getElementById('poff').src.match("./images/pon.png")){
	
document.getElementById('poff').src = "./images/poff.png";	
$('#rotateScrew').prop("disabled", true);	
	
}	
}


//////animation gauge clockwise//////
 var p = 0,t=0,interval,intervalrev;
function cw(){
	
const images = ['./images/cs6.png','./images/cs1.png','./images/cs2.png','./images/cs3.png','./images/cs4.png','./images/cs5.png','./images/cs6.png'];
    
	 document.getElementById('cirSc').src = images[p];
        p++;
		if(p == images.length){
		 p = 0	;
clearInterval(interval);		 
        }
//setTimeout(function(){ cw(); },100);
 //clearTimeout(8);

 }
 function acw(){
	
const images = ['./images/cs6.png','./images/cs5.png','./images/cs4.png','./images/cs3.png','./images/cs2.png','./images/cs1.png','./images/cs6.png'];
    
	 document.getElementById('cirSc').src = images[p];
        p++;
		if(p == images.length){
		 p = 0	;
clearInterval(intervalrev);		 
        }
//setTimeout(function(){ cw(); },100);
 //clearTimeout(8);

 }

function rotategauge(){
	
	 interval = setInterval(cw,100);
}

function rotategaugerev(){
	
	 intervalrev = setInterval(acw,100);
}

///incr the right position of gauge with 0.7. with one complete revolution circular scale moves 1 mm forward
var posCount = 0;
var gwCount = 0;

var csPos = 5;
var gw = 14.5;

function cscalePosChng(){

posCount+=0.7;
gwCount+=0.4;

var newPos = math.add(csPos,posCount);
var newgw = math.add(gw,gwCount);

document.getElementById('cirSc').style.right = newPos + "%";
document. getElementById('seudobox').value = newPos;///grap the value of right position of circular scale

document.getElementById('gatis').style.width = newgw + "%";	
	
}
function cscalePosChngRev(){

posCount-=0.7;
gwCount-=0.8;

var newPos = math.add(csPos,posCount);
var newgw = math.add(gw,gwCount);

document.getElementById('cirSc').style.right = newPos + "%";
document. getElementById('seudobox').value = newPos;///grap the value of right position of circular scale

document.getElementById('gatis').style.width = newgw + "%";		
	
}


/////////////////////////////////////////
 var screwwidth = 0.5;
 var counter = 0;
 function screw_widthincr(){
	 
	counter+=0.2; 
	var newPos = math.add(screwwidth,counter);
	
	document.getElementById('screw').style.width = newPos + "%";
	 
 }
 
 function screw_widthdecr(){
	 
	counter-=0.2; 
	var newPos = math.add(screwwidth,counter);
	
	document.getElementById('screw').style.width = newPos + "%";
	
 }
 
 var corewidth = 6.2;
 var counter2 = 0;
 function core_widthincr(){
	 
	counter2+=0.2; 
	var newPos = math.add(corewidth,counter2);
	
	document.getElementById('lvcore').style.width = newPos + "%";
	 
 }
 
 function core_widthdecr(){
	 
	counter2-=0.2; 
	var newPos = math.add(corewidth,counter2);
	
	document.getElementById('lvcore').style.width = newPos + "%";
	
 }
 
 
 /////////////////////Displacement Count////////////////////////////////////////////
 var displacement,lsmm,E;
 function Math_model(){
	 
	var gaugePos = document.getElementById('seudobox').value;
	
	var diff = math.subtract(gaugePos,1.5);///digital display mm
	var micromm = math.subtract(15.5,gaugePos);///micrometer display mm
	
	console.log('diff =' +diff);
	
	var count = math.divide(diff,0.7);
	lsmm = math.round(math.divide(micromm,0.7));
	
	displacement = math.add(-10,count);
	console.log('D = '+ displacement);
	
	E = math.abs(math.multiply(displacement,20));///20mV/mm sensitivity
	
	document.getElementById('displacement').value = math.round(displacement);	
	 
 }
 
 
 
 
 /////////////////////////////////////Table Creation//////////////////////////////////////////////////////////EDIT it
 
var tabrowindex = 0;
var arr = [];

var table;



//------------------------------------------------- Table Creation -----------------------------------------------//
function CreateTable() {//loading


    arr[0] = tabrowindex+1 ;
    arr[1] = lsmm;
    arr[2] = displacement;
	arr[3] = E;
	
   
	
	table = document.getElementById("obsTable");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 50) {
        
         // Row increment
        for (var q = 0; q < 4; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }

}  



///plot section



function plot(){
	
var dataArrayX = [];///x axis values
var dataArrayY = [];///y axis values

document.getElementById('myPlot').style.display = "block";	
	
var tableData = document.getElementById('obsTable');	

for (var tabrowindex1 = 1; tabrowindex1 < tableData.rows.length; tabrowindex1++) {
	var rwe1 = tableData.rows[tabrowindex1].cells;

	dataArrayX.push( parseFloat(rwe1[2].innerHTML));
	dataArrayY.push( parseFloat(rwe1[3].innerHTML));
}


	
///plot using plotly.js	

const data = [{
  x:dataArrayX,
  y:dataArrayY,
  type:"line",
  //orientation:"v",
  marker: {color:"#2163A5"}
}];

const layout = {
	title:"Output Voltage |E0| vs. Core displacement (mm)",

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
      text: 'Core displacement(mm)',
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
      text: 'Output Voltage |E0|',
	  
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

function Refresh(){///donot keep the name of the function as clear

var Dtable= document.getElementById('obsTable');
var Trow = Dtable.rows.length;
	for (var i= Trow-1;i>0;i--){

	Dtable.deleteRow(i);
	}

tabrowindex=0;

document.getElementById('myPlot').style.display = "none";
	
}
