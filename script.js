// smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// Select elements to toggle
const themeCheckbox = document.querySelector('.theme-switch__checkbox');
const body = document.body;
const subheading = document.querySelectorAll('.Subheading');
const contactSocial = document.querySelectorAll('.contact-social a');
const aboutText = document.querySelectorAll('#about p');
const profilePicture = document.querySelector('.profile-picture img');

// Check the saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
    subheading.forEach(el => el.className = `Subheading ${savedTheme}`);
    contactSocial.forEach(el => el.className = `${el.className.split(' ')[0]} ${savedTheme}`);
    aboutText.forEach(el => el.className = `${el.className.split(' ')[0]} ${savedTheme}`);
    profilePicture.className = `${savedTheme}`;
    themeCheckbox.checked = savedTheme === 'dark-mode';
}

// Add an event listener to the checkbox
themeCheckbox.addEventListener('change', () => {
    const theme = themeCheckbox.checked ? 'dark-mode' : 'light-mode';
    body.className = theme;
    subheading.forEach(el => el.className = `Subheading ${theme}`);
    contactSocial.forEach(el => el.className = `${el.className.split(' ')[0]} ${theme}`);
    aboutText.forEach(el => el.className = `${el.className.split(' ')[0]} ${theme}`);
    profilePicture.className = theme;
    localStorage.setItem('theme', theme);
});



// Toggle skills section
document.getElementById("toggle-skills").addEventListener("click", function () {
    const skillsWrapper = document.getElementById("skills-wrapper");
    skillsWrapper.classList.toggle("show");
    this.textContent = skillsWrapper.classList.contains("show") ? "Hide Skills" : "Show Skills";
});

// Modal functionality for project details
const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("project-details");
const closeModal = document.querySelector(".close");

// Add event listener to all project containers
document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("click", () => {
        const projectId = project.getAttribute("data-project");
        showProjectDetails(projectId);
    });
});

// Function to display project details in the modal
function showProjectDetails(projectId) {
    const projectData = {
        project1: {
            title: "Blender 3D Model",
            description: "During my third semester, I created a 3D model of an edgy sportscar, inspired by Hot Wheels.",
            technologies: "Blender",
            content: `
                <img src="3d model.png" alt="Blender 3D Model" style="width: 100%; height: auto;">
            `,
            // link: "https://example.com/project1",
        },
        project2: {
            title: "Blender Animation",
            description: "Using vehicle models, I created a 30fps animation of 1800 frames showcasing the designs.",
            technologies: "Blender",
            content: `
                <video controls style="width: 100%; height: auto;">
                    <source src="vid 3d.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `,
            // link: "https://example.com/project2",
        },
        project3: {
            title: "Vehicle Registration Website",
            description: "I was responsible for designing the user interface of this project.",
            technologies: "HTML, CSS, JavaScript",
            content: `
                <img src="website.png" alt="Vehicle Registration Website" style="width: 100%; height: auto;">
            `,
            // link: "https://example.com/project3",
        },
        project4: {
            title: "Destini IT Helpdesk Center",
            description: "I was responsible for designing the user interface of this project.",
            technologies: "HTML, CSS, JavaScript",
            content: `
                <img src="destini.png" alt="Destini IT Helpdesk Center" style="width: 100%; height: auto;">
                <img src="destini2.png" alt="Destini IT Helpdesk Center" style="width: 100%; height: auto;">
            `,
            
        },
        project5: {
            title: "Destini Oil Services Server Relocation",
            description: "IT team from Destini Bhd. went to Destini Oil Services Bhd. to relocate their server into the headquarter.",
            technologies: "Command Prompt, UltraViewer, Cable Tester",
            content: `
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                    <img src="CLI.jpg" alt="Server Relocation CLI" style="max-width: 45%; height: auto; border-radius: 8px;">
                    <img src="Cable.jpg" alt="Server Relocation Cable" style="max-width: 45%; height: auto; border-radius: 8px;">
                </div>
            `,
            
        },
        project6: {
            title: "Executives Card Design for Destini Bhd.",
            description: "I designed the requested card design for the Executives in Destini Sdn. Bhd. and Destini Prima Bhd. and created an infographic poster to show them the flow.",
            technologies: "Adobe Illustrator, FireAlpaca",
            content: `
                <img src="card.jpg" alt="Executives Card Design for Destini Bhd." style="width: 100%; height: auto;">
                <img src="poster.jpg" alt="Executives Card Design for Destini Bhd." style="width: 100%; height: auto;">
            `,
            
        },
    };

    const project = projectData[projectId];
    modalContent.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p><strong>Technologies Used:</strong> ${project.technologies}</p>
        ${project.content}
        
    `;
    modal.style.display = "flex"; 
}

// Close the modal when clicking the close button
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

