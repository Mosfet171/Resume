function showDescription(id) {
    document.querySelectorAll('.description').forEach(desc => {
        desc.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function toggleSection(section) {
    const sectionElement = document.getElementById(section);
    sectionElement.style.display = sectionElement.style.display === 'none' ? 'block' : 'none';

}

function toggleSectionTwoCols(sectionId) {
    let section = document.getElementById(sectionId);
    if (section.classList.contains("hidden")) {
        section.classList.remove("hidden");
        section.classList.add("visible");
    } else {
        section.classList.remove("visible");
        section.classList.add("hidden");
    }
}

