//triangle
function calculateTriangleArea(){
    //get triangle base value
   const triangleBaseInput = document.getElementById('triangle-base');
   const triangleBaseText = triangleBaseInput.value
   const base = parseFloat(triangleBaseText);
   console.log(base);

   //get triangle height value
   const triangleHeightInput = document.getElementById('triangle-height');
   const triangleHeightText = triangleHeightInput.value;
   const height = parseFloat(triangleHeightText);
   console.log(height);

   //calculate triangle area
   const area = 0.5 * base * height;
   console.log('area of the triangle is:', area);

   //display triangle area
   const triangleAreaSpan = document.getElementById('triangle-area');
   triangleAreaSpan.innerText = area;
}

//rectangle
function calculateRectangleArea(){
    //get rectangle width value
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);

    //get rectangle height value
    const rectangleHeightInput = document.getElementById('rectangle-height');
    const rectangleHeightText = rectangleHeightInput.value;
    const height = parseFloat(rectangleHeightText);
    console.log(height);
    
    //calculate rectangle area
    const area = width * height;
    console.log('area of the rectangle is:', area);

    //display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}

//Parallelogram
function calculateParallelogramArea(){
    //get parallelogram base value
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    console.log(base);

    //get parallelogram height value
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    console.log(height);

    //calculate parallelogram area
    const area = base * height;
    console.log('area of the parallelogram is:', area);

    //display parallelogram area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}
//Rhombus
function calculateRhombusArea(){
    //get rhombus d1 value
    const rhombusD1Input = document.getElementById('rhombus-d1');
    const rhombusD1Text = rhombusD1Input.value;
    const d1 = parseFloat(rhombusD1Text);
    console.log(d1);

    //get rhombus d2 value
    const rhombusD2Input = document.getElementById('rhombus-d2');
    const rhombusD2Text = rhombusD2Input.value;
    const d2 = parseFloat(rhombusD2Text);
    console.log(d2);

    //calculate parallelogram area
    const area = 0.5 * d1 * d2;
    console.log('area of the rhombus is:', area);

    //display parallelogram area
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
}
//pentagon
function calculatePentagonArea(){
    //get pentagon p value
    const pentagonPInput = document.getElementById('pentagon-p');
    const pentagonPText = pentagonPInput.value;
    const p = parseFloat(pentagonPText);
    console.log(p);

    //get pentagon b value
    const pentagonBInput = document.getElementById('pentagon-b');
    const pentagonBText = pentagonBInput.value;
    const b = parseFloat(pentagonBText);
    console.log(b);

    //calculate pentagon area
    const area = 0.5 * p * b;
    console.log('area of the pentagon is:', area);

    //display pentagon area
    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = area;
}
//Ellipse
function calculateEllipseArea(){
    //get ellipse a value
    const ellipseAInput = document.getElementById('ellipse-a');
    const ellipseAText = ellipseAInput.value;
    const a = parseFloat(ellipseAText);
    console.log(a);

    //get ellipse b value
    const ellipseBInput = document.getElementById('ellipse-b');
    const ellipseBText = ellipseBInput.value;
    const b = parseFloat(ellipseBText);
    console.log(b);

    //calculate ellipse area
    const area = 3.1416 * a * b;
    console.log('area of the ellipse is:', area);

    //display ellipse area
    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area;
}