const sunMoonContainer = document.querySelector('.sun-moon-container');

document.querySelector('.theme-switch-button').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Get current value of the --rotation property of the .sun-moon-container element
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));

    sunMoonContainer.style.setProperty('--rotation', currentRotation + 180);
});