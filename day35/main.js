const circle = document.querySelector('.circle');
    const timerDisplay = document.querySelector('.timer');
    const pointsDisplay = document.querySelector('.points');
    
    let startTime = 0;
    let stopTime = 0;
    let timerInterval = null;
    let isTimerRunning = false;
    let points = 0;

    // Function to generate random numbers within a specified range
    function getRandomPosition(max) {
      return Math.floor(Math.random() * max);
    }

    // Function to generate a random color
    function getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`; // Return an RGB color string
    }

    // Function to move the circle to a random position
    function moveCircle() {
      const x = getRandomPosition(window.innerWidth - 100); // Subtract circle width
      const y = getRandomPosition(window.innerHeight - 100); // Subtract circle height

      // Set random position and random color
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      circle.style.backgroundColor = getRandomColor(); // Set a random background color
    }

    // Function to start the timer
    function startTimer() {
      if (!isTimerRunning) {
        startTime = Date.now(); // Start time when clicked
        isTimerRunning = true;

        // Update the timer every 10 milliseconds for precision
        timerInterval = setInterval(() => {
          const elapsed = Date.now() - startTime; // Elapsed time in milliseconds
          const seconds = (elapsed / 1000).toFixed(3); // Convert to seconds with 3 decimals
          timerDisplay.textContent = `Time: ${seconds}s`; // Update timer display
        }, 10);
      }
    }

    // Function to stop the timer
    function stopTimer() {
      clearInterval(timerInterval); // Stop the interval
      stopTime = Date.now(); // Record the stop time
      isTimerRunning = false;

      // Calculate final time when stopping
      const finalElapsed = (stopTime - startTime) / 1000; // Final time in seconds
      timerDisplay.textContent = `Time: ${finalElapsed.toFixed(3)}s`; // Show the final time
    }

    // Function to update the points
    function updatePoints() {
      points++; // Increment the points
      pointsDisplay.textContent = `Points: ${points}`; // Update points display
    }

    // Event listener for when the circle is clicked
    circle.addEventListener('click', function() {
      // If the timer is running, stop it and show the final time
      if (isTimerRunning) {
        stopTimer();
      } else {
        // Otherwise, start the timer and reset the time display
        startTimer();
      }

      // Move the circle to a random position, change its color, and increment points
      moveCircle();
      updatePoints();
    });

    // Initial position of the circle
    moveCircle();