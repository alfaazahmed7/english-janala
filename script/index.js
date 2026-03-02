const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((json) => displayLessons(json.data))
};

const displayLessons = (lessons) => {

    // get the container and make it empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // get into every lessons
    for (let lesson of lessons) {

        // create element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book"></i>Lesson - ${lesson.level_no}</button>
        `;

        // append into the container
        levelContainer.append(btnDiv);
    };
}
loadLessons();