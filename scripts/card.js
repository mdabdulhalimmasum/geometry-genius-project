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