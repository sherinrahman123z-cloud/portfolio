document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        alert('You clicked on a project!');
    });
});