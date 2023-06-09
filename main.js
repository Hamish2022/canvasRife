let color = "black";
let blendValue = 1;
var size = 1;

// Get the canvas element
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

let isDrawing = false;

// Set up event listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', (event) => drawLine(event));
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Get the clear button element
const clearButton = document.getElementById('olo');

// Set up event listener for the clear button
clearButton.addEventListener('click', clearCanvas);

function startDrawing(event) {
  isDrawing = true;
  drawLine(event); // Pass the event object to the draw function
}

// Set up event listener for the change color button
document.getElementById('change_color').addEventListener('click', setColor);

function drawLine(event) {
  if (!isDrawing) return;

  const rect = canvas.getBoundingClientRect();
  const x = event.pageX - rect.left;
  const y = event.pageY - rect.top;

  context.lineWidth = size;
  context.lineCap = 'round';
  context.strokeStyle = color;
  context.globalAlpha = blendValue; // Apply the blending value

  context.lineTo(x, y);
  context.stroke();
  context.beginPath();
  context.moveTo(x, y);
}

function stopDrawing() {
  isDrawing = false;
  context.beginPath();
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function setColor() {
  color = document.getElementById("colorpicker").value;
  size = document.getElementById("sizechoose").value;
  blendValue = parseFloat(document.getElementById("blendValue").value); // Parse the value as a float
  if (isNaN(blendValue)) blendValue = 1; // Use 1 as the default value if parsing fails
}

function save() {
  // Create a new canvas with white background
  const tempCanvas = document.createElement('canvas');
  const tempContext = tempCanvas.getContext('2d');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  tempContext.fillStyle = 'white';
  tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
  
  // Draw the original canvas onto the new canvas
  tempContext.drawImage(canvas, 0, 0);
  
  // Create an image from the new canvas
  const image = new Image();
  image.src = tempCanvas.toDataURL();

  // Create a download link
  const link = document.createElement('a');
  link.href = image.src;
  link.download = 'canvas_image.png';

  link.click();
}

function erase()
{
  color = "white"
  size = 5
}

function PC()
{
  // Get a reference to the element
  var element = document.getElementById("yes");

  // Hide the element by setting the display property to "none"
  element.style.display = "none"

  // Get a reference to the element
  var element2 = document.getElementById("no");

  // Hide the element by setting the display property to "none"
  element2.style.display = "none"

  // Get a reference to the element
  var element3 = document.getElementById("note");

  // Hide the element by setting the display property to "none"
  element3.style.display = "none"
}

function computer()
{
  // Get a reference to the element
  var element = document.getElementById("yes");

  // Hide the element by setting the display property to "none"
  element.remove()

  // Get a reference to the element
  var element2 = document.getElementById("no");

  // Hide the element by setting the display property to "none"
  element2.remove()

  // Get a reference to the element
  var element3 = document.getElementById("note");

  // Hide the element by setting the display property to "none"
  element3.remove()

  document.getElementById("colorpicker").style.left = "1200px";
  document.getElementById("colorpicker").style.bottom = "300px";

  document.getElementById("sizechoose").style.left = "1200px";
  document.getElementById("sizechoose").style.bottom = "250px";

  document.getElementById("change_color").style.left = "1235px";
  document.getElementById("change_color").style.bottom = "150px";

  document.getElementById("blendValue").style.left = "1200px";
  document.getElementById("blendValue").style.bottom = "200px";

  document.getElementById("olo").style.bottom = "100px";

  document.getElementById("sol").style.bottom = "100px";

  document.getElementById("solo").style.bottom = "100px";

  document.getElementById("myCanvas").style.bottom = "165px";
}
    
