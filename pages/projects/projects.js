document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "Page d'accueil GPT-3",
            imgLink: "https://i.suar.me/LYeZG/l",
            description: "Transformer une maquette Figma en un site web réactif.",
            langs: "React",
            previewLink: "https://ymaamri.github.io/gpt3-landing-page/",
            codeLink: "https://github.com/ymaamri/gpt3-landing-page/"
        },
        {
            title: "Panier d'achat - React",
            imgLink: "https://i.suar.me/176d3/l ",
            description: "Panier d'achat en React pour un site e-commerce simple.",
            langs: "React Router, React Context API",
            previewLink: "https://ymaamri.github.io/shopping-cart/",
            codeLink: "https://github.com/ymaamri/shopping-cart/"
        },
        {
            title: "Répéteur de texte",
            imgLink: "https://i.suar.me/jZEX1/l",
            description: "Ajoutez du texte, répétez-le plusieurs fois et copiez-le.",
            langs: "Vue.js, JavaScript, HTML, CSS",
            previewLink: "https://test-repeater.netlify.app/",
            codeLink: "https://github.com/ymaamri/text-repeater"
        },
        {
            title: "Application To Do",
            imgLink: "https://i.suar.me/3PvJL/l",
            description: "Une application simple de tâches avec stockage local et manipulation DOM en JavaScript.",
            langs: "HTML, CSS, Bootstrap, JavaScript",
            previewLink: "https://ymaamri.github.io/to-do/",
            codeLink: "https://github.com/ymaamri/to-do/"
        },
        {
            title: "Modèle Deer",
            imgLink: "https://i.suar.me/gwEXQ/l",
            description: "Convertir un modèle PSD en HTML/CSS.",
            langs: "HTML, CSS",
            previewLink: "https://ymaamri.github.io/deer-template/",
            codeLink: "https://github.com/ymaamri/deer-template/"
        },
        {
            title: "Modèle Kasper",
            imgLink: "https://i.suar.me/7YvEm/l",
            description: "Convertir un modèle PSD créatif d'une page en HTML/CSS.",
            langs: "HTML, CSS",
            previewLink: "https://ymaamri.github.io/kasper-template/",
            codeLink: "https://github.com/ymaamri/kasper-template/"
        },
        {
            title: "Modèle Leon",
            imgLink: "https://i.suar.me/ovEye/l",
            description: "Convertir un modèle PSD d'agence en HTML/CSS.",
            langs: "HTML, CSS, JavaScript",
            previewLink: "https://ymaamri.github.io/leon-template/",
            codeLink: "https://github.com/ymaamri/leon-template/"
        }
    ];

    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <img src="${project.imgLink}" alt="${project.title}" class="project-img" />
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.langs.split(', ').map(lang => `<span class="project-tag">${lang}</span>`).join('')}
            </div>
            <div class="project-btns">
                <a href="${project.previewLink}" target="_blank">Aperçu</a>
                <a href="${project.codeLink}" target="_blank">Code</a>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
});
