// loadlesson function for learn vocab section
const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((json) => displayLessons(json.data))
};

// loadLevelWord function for word container
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLevelWord(data.data))
};

// loadLevelWord function for word container
const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    words.forEach((word) => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="bg-white rounded-lg shadow-sm text-center py-10 px-5 space-y-4">
                <h2 class="font-bold text-2xl">${word.word}</h2>
                <p class="font-semibold">Meaning/Pronuounciation</p>
                <div class="text-2xl font-medium font-bangla">"${word.meaning} / ${word.pronunciation}"</div>
                <div class="flex justify-between items-center">
                    <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
        `;
        wordContainer.append(card);
    });
};

// loadlesson function for learn vocab section
const displayLessons = (lessons) => {

    // get the container and make it empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // get into every lessons
    for (let lesson of lessons) {

        // create element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onclick = "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book"></i>Lesson - ${lesson.level_no}</button>
        `;

        // append into the container
        levelContainer.append(btnDiv);
    };
};
loadLessons();