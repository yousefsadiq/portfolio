// ==========================================
// 1. THE MODEL (Your Data)
// ==========================================
const portfolioData = {
    skills: [
        {
            category: "Programming Languages & Data",
            items: [
                "Java", 
                "Python", 
                "C", "C#", 
                "JavaScript", 
                "HTML/CSS",
                "SQL (SQLite) & NoSQL",
                "Data Science (Pandas, NumPy)"
            ]
        },
        {
            category: "Frameworks & Developer Tools",
            items: [
                "RESTful APIs", 
                "Firebase Ecosystem", 
                "JavaFX", 
                "Git & Version Control", 
                "QA & Software Testing",
                "Agile Development"
            ]
        },
        {
            category: "Product & Visual Design",
            items: [
                "End-to-End UI/UX", 
                "Prototyping & User Flows", 
                "Brand Identity Systems", 
                "Custom Iconography", "Figma",
                "Adobe Creative Cloud"
            ]
        }
    ],
    experience: [
        {
            role: "Digital Product Testing and Launch Intern",
            company: "PashMotors",
            date: "November 2025 - January 2026",
            bullets: [
                "Executed end-to-end functional and usability testing on web and mobile platforms to identify and document 100+ bugs and UX inconsistencies, enhancing overall product stability prior to launch.",
                "Analyzed and synthesized user feedback from pre- and post-launch phases using structured reporting tools, producing data-driven UX improvement recommendations that informed design refinements.",
                "Collaborated cross-functionally with design and engineering teams to translate test findings into actionable UX/UI updates, supporting a smoother product rollout and improved user satisfaction metrics."
            ]
        },
        {
            role: "Brand Design Intern",
            company: "Canadian Business Disability Inclusion Network",
            date: "September 2025 - November 2025",
            bullets: [
                "Delivered cohesive brand identities that enhanced organizational visibility by developing end-to-end visual systems and marketing assets aligned with strategic goals.",
                "Translated executive vision into design solutions by collaborating with senior leadership to create visuals that advanced key business initiatives.",
                "Strengthened brand consistency across digital and print platforms by enforcing design standards and ensuring alignment with core brand guidelines."
            ]
        },
        {
            role: "Web Design Intern",
            company: "Dadpad",
            date: "February 2025 - March 2025",
            bullets: [
                "Enhanced website aesthetics and user experience by applying modern design principles and maintaining consistent brand identity, resulting in a more cohesive and engaging digital presence.",
                "Built and customized a fully functional e-commerce platform using Shopify, implementing advanced features and best practices to improve usability and streamline the shopping experience.",
                "Drove innovative design and development outcomes by collaborating with a cross-functional team to strategize, refine, and launch creative solutions aligned with project goals."
            ]
        },
        {
            role: "IT Assistant",
            company: "Community Foundation Of Halton North",
            date: "July 2023 - August 2023",
            bullets: [
                "Developed engaging visual content for online seminars to boost viewer retention.",
                "Designed and animated custom graphics and illustrations to increase professionalism and enhance brand impact.",
                "Produced and edited multimedia assets, including video content and sound mixing."
            ]
        }
    ],
    projects: [
        {
            title: "Findr",
            date: "February 2026 - Present",
            description: "Findr, created by Yousef Sadiq, Stanley Wong, and Katherine Jorvina, is a way for University of Toronto Mississauga students to make new friends. It is a digital platform designed to facilitate spontaneous, in-person connections. While students typically meet through clubs or classes, these traditional avenues can be time-consuming or intimidating for many. Findr simplifies the process by showing students who is nearby on campus in real-time. By providing a glimpse into the people around them, the platform makes breaking the ice feel more natural and less awkward.",
            link: "findr.html" // <--- Added link property here!
        }
    ],

    designWork: [
        {
            title: "Findr UI/UX Design",
            date: "February 2026",
            // You can add as many image paths here as you want. 
            // If it's just one image, just put one in the array!
            images: [
                "assets/findr_ux/iPhone_Dashboard.png", 
                "assets/findr_ux/iPhone_Dashboard Profiles.png",
                "assets/findr_ux/iPhone_Friends.png",
                "assets/findr_ux/iPhone_Friend.png",
                "assets/findr_ux/iPhone_Profile.png",
                "assets/findr_ux/iPhone_Profile_Edit.png"
            ]
        },
        {
            title: "University of Guelph Muslim Students Association - Logo",
            date: "August 2025",
            images: [
                "assets/MSA_NEWLOGO.jpg"
            ]
        },
        {
            title: "St. Francis Xavier Catholic Secondary School, S.T.E.A.M. - Logo",
            date: "October 2023",
            images: [
                "assets/steam/dark.jpg", "/assets/steam/light.jpg"
            ]
        },
        {
            title: "St. Francis Xavier Catholic Secondary School, Tech Rocks - Logo",
            date: "November 2021",
            images: [
                "assets/techrockslogo.jpg"
            ]
        }
    ]
};

// ==========================================
// 2. THE CONTROLLER (Rendering Logic)
// ==========================================

function renderSkills() {
    const container = document.getElementById('skills-container');
    let htmlContent = '';

    portfolioData.skills.forEach(skillSet => {
        let tagsHtml = skillSet.items.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
        
        htmlContent += `
            <div class="skills-category">
                <h4>${skillSet.category}</h4>
                <div class="tags-container">
                    ${tagsHtml}
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    let htmlContent = '';

    portfolioData.experience.forEach(job => {
        let bulletsHtml = job.bullets.map(bullet => `<li>${bullet}</li>`).join('');
        htmlContent += `
            <div class="item-block">
                <h4 class="item-title">${job.role}</h4>
                <p class="item-date">${job.company} | ${job.date}</p>
                <div class="item-description">
                    <ul>${bulletsHtml}</ul>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    let htmlContent = '';

    portfolioData.projects.forEach(project => {
        // If the project has a link, render it as an anchor tag with the hover effects
        if (project.link) {
            htmlContent += `
                <a href="${project.link}" class="item-block project-card">
                    <h4 class="item-title">${project.title}</h4>
                    <p class="item-date">${project.date}</p>
                    <div class="item-description">
                        <p>${project.description}</p>
                    </div>
                </a>
            `;
        } else {
            // If no link, render it as a standard static div (like Experience)
            htmlContent += `
                <div class="item-block">
                    <h4 class="item-title">${project.title}</h4>
                    <p class="item-date">${project.date}</p>
                    <div class="item-description">
                        <p>${project.description}</p>
                    </div>
                </div>
            `;
        }
    });

    container.innerHTML = htmlContent;
}

function renderDesignPortfolio() {
    const container = document.getElementById('design-container');
    if (!container) return; // Exit if we aren't on the design page

    let htmlContent = '';
    
    portfolioData.designWork.forEach((work, index) => {
        // Build the HTML for the images in this specific project
        // Detect if this is a single image project
        let singleImageClass = work.images.length === 1 ? 'single-design-item' : '';
        
        let imagesHtml = work.images.map(imgSrc => `
            <img src="${imgSrc}" alt="${work.title} Graphic" class="timeline-img ${singleImageClass}">
        `).join('');

        // Add a staggered animation delay so they load in beautifully
        let delay = 0.2 + (index * 0.2);

        htmlContent += `
            <div class="timeline-item fade-in" style="animation-delay: ${delay}s;">
                <div class="timeline-header">
                    <h4 class="item-title" style="font-size: 1.5rem;">${work.title}</h4>
                    <p class="item-date" style="margin-bottom: 0;">${work.date}</p>
                </div>
                <div class="timeline-gallery">
                    ${imagesHtml}
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// Initialize the rendering when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // These if-statements check if the container exists on the current HTML page before trying to fill it
    if (document.getElementById('skills-container')) renderSkills();
    if (document.getElementById('experience-container')) renderExperience();
    if (document.getElementById('projects-container')) renderProjects();
    if (document.getElementById('design-container')) renderDesignPortfolio();
});