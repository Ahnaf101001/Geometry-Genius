function calculateAreaOfATriangle(){
    //-----Base of the Triangle
    const baseInputField = document.getElementById("triangle-base");
    const baseValue = baseInputField.value;
    const base = parseFloat(baseValue);
    //-----Height of the Triangle
    const heightInputField = document.getElementById("triangle-height");
    const heightValue = heightInputField.value;
    const height = parseFloat(heightValue);
    
    //-----Area of a Triangle
    const area = 0.5*base*height;
    console.log(area);

    //-----Display the area
    const areaOutput = document.getElementById("area-triangle");
    areaOutput.innerText = area;
}

function calculateAreaOfARectangle(){
    //-----Width of the Rectangle
    const widthInputField = document.getElementById("rectangle-width");
    const widthValue = widthInputField.value;
    const width = parseFloat(widthValue);
    //-----Length of the Rectangle
    const lengthInputField = document.getElementById("rectangle-length");
    const lengthValue = lengthInputField.value;
    const length = parseFloat(lengthValue);
    
    //-----Area of a Rectangle
    const area = width*length;
    console.log(area);
    
    //-----Display the area
    const areaOutput = document.getElementById("area-rectangle");
    areaOutput.innerText = area;
}

// function calculateAreaOfAParallelogram(){
//     //-----Base of the Parallelogram
//     const baseInputField = document.getElementById("parallelogram-base");
//     const baseValue = baseInputField.value;
//     const base = parseFloat(baseValue);
//     //-----Height of the Parallelogram
//     const heightInputField = document.getElementById("parallelogram-height");
//     const heightValue = heightInputField.value;
//     const height = parseFloat(heightValue);
    
//     //-----Area of a Parallelogram
//     const area = base*height;
//     console.log(area);
    
//     //-----Display the area
//     const areaOutput = document.getElementById("area-parallelogram");
//     areaOutput.innerText = area;
// }

function calculateAreaOfARhombus(){
    //-----First side of the Rhombus
    const firstSideInputField = document.getElementById("rhombus-first-side");
    const firstSideValue = firstSideInputField.value;
    const firstSide = parseFloat(firstSideValue);
    //-----Second side of the Rhombus
    const secondSideInputField = document.getElementById("rhombus-second-side");
    const secondSideValue = secondSideInputField.value;
    const secondSide = parseFloat(secondSideValue);
    
    //-----Area of a Rhombus
    const area = 0.5*firstSide*secondSide;
    console.log(area);
    
    //-----Display the area
    const areaOutput = document.getElementById("area-rhombus");
    areaOutput.innerText = area;
}

function calculateAreaOfAPentagon(){
    //-----Perimeter of the Pentagon
    const perimeterInputField = document.getElementById("pentagon-perimeter");
    const perimeterValue = perimeterInputField.value;
    const perimeter = parseFloat(perimeterValue);
    //-----Base of the Pentagon
    const baseInputField = document.getElementById("pentagon-base");
    const baseValue = baseInputField.value;
    const base = parseFloat(baseValue);
    
    //-----Area of a Pentagon
    const area = 0.5*perimeter*base;
    console.log(area);
    
    //-----Display the area
    const areaOutput = document.getElementById("area-pentagon");
    areaOutput.innerText = area;
}

function calculateAreaOfAEllipse(){
    //-----Axis of the Ellipse
    const axisInputField = document.getElementById("ellipse-axis");
    const axisValue = axisInputField.value;
    const axis = parseFloat(axisValue);
    //-----Base of the Ellipse
    const baseInputField = document.getElementById("ellipse-base");
    const baseValue = baseInputField.value;
    const base = parseFloat(baseValue);
    
    //-----Area of a Ellipse
    const area = 3.14156*axis*base;
    console.log(area);
    
    //-----Display the area
    const areaOutput = document.getElementById("area-ellipse");
    areaOutput.innerText = area;
}

//NOTE: This method is for the sole purpose of reducing the over all work done previously
//-----Calculating Area for all purpose
function calculateAreaOfAParallelogram(){
    const base = getInputValueById("parallelogram-base");

    const height = getInputValueById("parallelogram-height");

    const area = base*height;

    setAreaValueById("area-parallelogram",area);
    
}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
function setAreaValueById(areaId,area){
    const element = document.getElementById(areaId);
    element.innerText = area;
}