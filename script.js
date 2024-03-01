<<<<<<< HEAD
function drawStar(event) {
    const canvas = document.getElementById("imgCanvas");
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
  
    const posX = event.clientX - rect.left;
    const posY = event.clientY - rect.top;
  
    const radius = 50; // Adjust star radius as desired
    const points = 5; // Adjust number of points for different star shapes
  
    // Calculate starting point for drawing the star
    const startX = posX - radius / 2;
    const startY = posY - radius / 2;
  
    ctx.fillStyle = "#00ff00"; // Set star color
  
    ctx.beginPath();
  
    // Draw the star using a combination of moveTo and lineTo methods
    for (let i = 0; i < 2 * points; i++) {
      const angle = Math.PI * i / points;
      const offset = i % 2 === 0 ? radius : radius / 2;
      const x = startX + offset * Math.cos(angle);
      const y = startY + offset * Math.sin(angle);
      ctx.lineTo(x, y);
    }
  
    ctx.closePath(); // Close the path back to the starting point
    ctx.fill(); // Fill the star    
  }
  
  imgCanvas.onclick = drawStar;
  
=======
function draw(event) {
// function draw() {
    let canvas = document.getElementById("imgCanvas");
    let ctx = canvas.getContext("2d");
    let rect = canvas.getBoundingClientRect();

    let posX = event.clientX - rect.left;
    let posY = event.clientY - rect.top;

    ctx.fillStyle = "#00ff00";

    ctx.beginPath();

    ctx.arc(posX, posY, 50, 0, 2 * Math.PI);

    ctx.fill()

    
}

imgCanvas.onclick = draw;
>>>>>>> 797a94e14c8a2d3bd63585e7b80b3841d2a6beac
