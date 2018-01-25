

let rows = 15;
let cols = 30;



$( document ).ready(function() {
    reload();

    test();


    var myVar = setInterval(myTimer, 1000);


    write("Hi there",1);

	function myTimer() {
	    var d = new Date();
	    
	    let timestr = d.toLocaleTimeString();


	    write(timestr,3);
	}
});


function reload(){
	let containerWi = document.getElementById("container").offsetWidth;
	let containerHe = document.getElementById("container").offsetHeight;


	//Clean the dashboard
	$("container").empty();


	let divHeight = containerHe / rows;
	let divWidth = containerWi / cols;

	

	//Add a row for each row
	let acum = 0;

	for(var i = 0; i < rows; i++){
		//Create a row for each one

		let rowpercent = 100 / rows;

		var newrow = $("<div/>")
		.addClass("row")
		.attr("id", "row-"+i)
		.css("height",""+rowpercent+"vh");

		$("#container").append(newrow);


		//Add the cells

		for(var j = 0; j < cols; j++){
			let colpercent = 96/cols;

			var newcell = $("<div/>")
			.addClass("cell")
			.attr("id","cell_"+i+"-"+j)
			.append("<h1>&nbsp;</h1>")
			.css("width",""+colpercent+"vw");


			//Add the half line

			addLineToCellAt(newcell);

			newrow.append(newcell);
		}

	}
}

function addLineToCellAt(cell){


	let halftop = $("<div/>")
			.addClass("half-box")
			.addClass("hf-top");

	let halbot = $("<div/>")
		.addClass("half-box")
		.addClass("hf-bot");

	cell.append(halftop);
	cell.append(halbot);


}





function test(){	

	setLineBackground(1, "#a8e6cf");
	setLineBackground(2, "#dcedc1");
	setLineBackground(3, "#ffd3b6");
	setLineBackground(4, "#ffaaa5");
	setLineBackground(5, "#ff8b94");

	setLineColor(1, "#110022")
	setLineColor(2, "#110022")
	setLineColor(3, "#110022")
	setLineColor(4, "#110022")
	setLineColor(5, "#110022")
}




//------- TEXT CHANGING FUNCTIONS -----------



function setCharAtCell(row, col, str){


	if(str == " "){
		str = "&nbsp;"
	}


	$("#cell_"+row+"-"+col).find("h1").remove();    
	$("#cell_"+row+"-"+col).append("<h1>"+str+"</h1>")
}


function setCharAtCellHexCol(row, col, str, color){
	//$("#cell_"+row+"-"+col).find("h1").remove();
	//$("#cell_"+row+"-"+col).append("<h1>"+str+"</h1>");
	setCharAtCell(row, col, str);
	$("#cell_"+row+"-"+col).css("color", color);
}


function setLineBackground(index, colorstr){
	$("#row-"+index).find(".cell").css("background-color", colorstr);
}

function setLineColor(index, colorstr){
	$("#row-"+index).find(".cell").css("color", colorstr);
}



function write(str, row, col){

	let r, c;
	if(row == undefined){
		r = 0;
	}else{
		r = row;
	}

	if(col == undefined){
		c = 0;
	}else{
		c = col;
	}


	let parts = str.split("");
	for(let i = 0; i < parts.length; i++){

		let location = c + i;

		if(location >= cols){
			r++;
			c = c - cols;
		}
		setCharAtCell(r, c + i, parts[i])
	}
}













/**/