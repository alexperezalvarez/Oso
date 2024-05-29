document.addEventListener('DOMContentLoaded', (event) => {
    const rightEye = document.getElementById('right-eye');
<<<<<<< HEAD

=======
    
>>>>>>> 620740e (first commit)
    // Add the blink-animation class to start the animation after a short delay
    setTimeout(() => {
        rightEye.classList.add('blink-animation');
    }, 1000); // Delay of 1 second

<<<<<<< HEAD
    // Remove the blink-animation class after the animation ends
=======
    // Optional: Remove the blink-animation class after the animation ends
>>>>>>> 620740e (first commit)
    rightEye.addEventListener('animationend', () => {
        rightEye.classList.remove('blink-animation');
    });
});
