    
    let color = "black";
    let blendValue = 1;
    var size = 1;

    // Get the canvas element
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');

    let isDrawing = false;

    // Set up event listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', (event) => draw(event));
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Get the clear button element
    const clearButton = document.getElementById('clearButton');

    // Set up event listener for the clear button
    olo.addEventListener('click', clearCanvas);

    function startDrawing(event) {
      isDrawing = true;
      draw(event); // Pass the event object to the draw function
    }
    // Set up event listener for the change color button
document.getElementById('change_color').addEventListener('click', setColor);


// ...

function draw(event) {
  if (!isDrawing) return;

  const rect = canvas.getBoundingClientRect();
  const x = event.pageX - rect.left;
  const y = event.pageY - rect.top;

  context.lineWidth = 5;
  context.lineCap = 'round';

  // Calculate the modified color with blending
  const modifiedColor = applyBlending(color, blendValue);

  context.strokeStyle = modifiedColor;

  context.lineTo(x, y);
  context.stroke();
  context.beginPath();
  context.moveTo(x, y);
}

// ...

// ...

// ...

function applyBlending(color, blendValue) {
  const parsedBlendValue = parseFloat(blendValue);
  if (isNaN(parsedBlendValue)) return color;

  const adjustedBlendValue = Math.max(Math.min(parsedBlendValue, 100), 1); // Ensure blendValue is between 1 and 100
  const blendingFactor = adjustedBlendValue / 100; // Convert blendValue to a decimal between 0.01 and 1

  const modifiedColor = blendColors(color, blendingFactor);

  return modifiedColor;
}






function blendColors(color, blendingFactor) {
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);

  const blendedR = Math.round((1 - blendingFactor) * 255 + blendingFactor * r);
  const blendedG = Math.round((1 - blendingFactor) * 255 + blendingFactor * g);
  const blendedB = Math.round((1 - blendingFactor) * 255 + blendingFactor * b);

  const blendedColor = rgbToHex(blendedR, blendedG, blendedB);

  return blendedColor;
}



function rgbToHex(r, g, b) {
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// ...



// ...



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
    
    function draw(event) {
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
    