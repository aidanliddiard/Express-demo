window.onload = function() {
    const tbody = document.getElementById('tbody');
    let id = URLSearchParams(window.location.search).get('id');
    let course = fetch(`http://localhost:8081/api/courses/${id}`);
    console.log(course);
}
