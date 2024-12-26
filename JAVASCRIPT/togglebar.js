
//to toggle the sidebar once the user clicks on the icon
const toggleButton = document.getElementById('toggle-sidebar');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


//to close the sidebar if the user clicks outside of it
document .addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggleButton = toggleButton.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnToggleButton) {
        sidebar.classList.remove('active');
    }
});