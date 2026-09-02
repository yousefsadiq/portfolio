// ==========================================
// 1. THE MODEL (Your Data)
// ==========================================
const portfolioData = {
    about: [
        "My obsession with technology started in the bins of discarded motherboards at IBM and through the lens of LEGO stop-motion animation. What began as a childhood hobby of building mini-games on Scratch and teaching myself graphic design has evolved into a deep exploration of how technical architecture and human experience intersect.",
        "Currently at the University of Toronto, I am majoring in Technology, Coding, & Society with minors in Computer Science and Geospatial Data Science. My academic work is a constant bridge between the granular and the global. I spend my time navigating the rigid logic of data structures time complexity while simultaneously analyzing the messy, complex reality of human-machine relations within our society.",
        "I've spent the majority of my life engaging with media through tech, and I don't plan on stopping. By combining years of design experience with a rigorous technical foundation, I focus on building intuitive, media-rich products that are as computationally efficient as they are socially conscious."
    ],
    contact: {
        email: "sadiqy2006@gmail.com",
        phoneDisplay: "647-858-6978",
        phoneLink: "+16478586978"
    },
    skills: [
        {
            category: "Programming Languages & Data",
            items: ["Java", "Python", "C", "C#", "JavaScript", "HTML/CSS", "SQL (SQLite) & NoSQL", "Data Science (Pandas, NumPy)"]
        },
        {
            category: "Frameworks & Developer Tools",
            items: ["RESTful APIs", "Firebase Ecosystem", "JavaFX", "Git & Version Control", "QA & Software Testing", "Agile Development"]
        },
        {
            category: "Product & Visual Design",
            items: ["End-to-End UI/UX", "Prototyping & User Flows", "Brand Identity Systems", "Custom Iconography", "Figma", "Adobe Creative Cloud"]
        }
    ],
    experience: [
        {
            role: "Founder and Lead Game Developer",
            company: "YS Studios",
            date: "April 2026 - Present",
            description: 'Building and publishing "The Circus That Never Left" - an upcoming horror-mystery title. As the sole developer, I handle everything from core programming to the visual identity and user experience.',
            link: "https://store.steampowered.com/app/4829810/The_Circus_That_Never_Left/",
            bullets:[]
        },
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
            link: "findr.html"
        }
    ],
    designWork: [
        {
            title: "Findr UI/UX Design",
            date: "February 2026",
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
            images: ["assets/MSA_NEWLOGO.jpg"]
        },
        {
            title: "St. Francis Xavier Catholic Secondary School, S.T.E.A.M. - Logo",
            date: "October 2023",
            images: ["assets/steam/dark.jpg", "assets/steam/light.jpg"]
        },
        {
            title: "St. Francis Xavier Catholic Secondary School, Tech Rocks - Logo",
            date: "November 2021",
            images: ["assets/techrockslogo.jpg"]
        }
    ]
};

// ==========================================
// 2. THE CONTROLLER (Rendering Logic)
// ==========================================

function renderAbout() {
    const container = document.getElementById('about-container');
    if (!container) return;

    let htmlContent = '<h3 class="section-title">About Me</h3>';
    portfolioData.about.forEach(paragraph => {
        htmlContent += `<p>${paragraph}</p>`;
    });
    container.innerHTML = htmlContent;
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    let htmlContent = '';
    portfolioData.skills.forEach(skillSet => {
        let tagsHtml = skillSet.items.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
        htmlContent += `
            <div class="skills-category">
                <h4>${skillSet.category}</h4>
                <div class="tags-container">${tagsHtml}</div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    let htmlContent = '';
    portfolioData.experience.forEach(job => {
        let bulletsHtml = job.bullets 
            ? `<ul>${job.bullets.map(bullet => `<li>${bullet}</li>`).join('')}</ul>` 
            : '';
        
        let descriptionHtml = job.description 
            ? `<p style="margin-bottom: 15px;">${job.description}</p>` 
            : '';

        // Added target="_blank" and rel="noopener noreferrer"
        let buttonHtml = job.link 
            ? `<a href="${job.link}" target="_blank" rel="noopener noreferrer" class="btn secondary-btn view-project-btn">Learn More &rarr;</a>` 
            : '';

        htmlContent += `
            <div class="item-block">
                <h4 class="item-title">${job.role}</h4>
                <p class="item-date">${job.company} | ${job.date}</p>
                <div class="item-description">
                    ${descriptionHtml}
                    ${bulletsHtml}
                    ${buttonHtml}
                </div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return; 

    let htmlContent = '';
    portfolioData.projects.forEach(project => {
        // Added target="_blank" and rel="noopener noreferrer"
        let buttonHtml = project.link 
            ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn secondary-btn view-project-btn">Learn More &rarr;</a>` 
            : '';

        htmlContent += `
            <div class="item-block">
                <h4 class="item-title">${project.title}</h4>
                <p class="item-date">${project.date}</p>
                <div class="item-description">
                    <p>${project.description}</p>
                    ${buttonHtml}
                </div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

function renderDesignPortfolio() {
    const container = document.getElementById('design-container');
    if (!container) return;

    let htmlContent = '';
    portfolioData.designWork.forEach(item => {
        let imagesHtml = item.images.map(img => 
            `<img src="${img}" alt="${item.title}" class="timeline-img ${item.images.length === 1 ? 'single-design-item' : ''}">`
        ).join('');
        
        htmlContent += `
            <div class="timeline-item">
                <div class="timeline-header">
                    <h4 class="item-title">${item.title}</h4>
                    <p class="item-date">${item.date}</p>
                </div>
                <div class="timeline-gallery">
                    ${imagesHtml}
                </div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

function renderFooter() {
    const footers = document.querySelectorAll('.site-footer');
    footers.forEach(footer => {
        footer.innerHTML = `
            <p>
                <a href="mailto:${portfolioData.contact.email}" class="footer-link">${portfolioData.contact.email}</a>
                <span class="footer-divider">•</span>
                <a href="tel:${portfolioData.contact.phoneLink}" class="footer-link">${portfolioData.contact.phoneDisplay}</a>
            </p>
        `;
    });
}

// Initialize the rendering when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderFooter(); 
    if (document.getElementById('about-container')) renderAbout();
    if (document.getElementById('skills-container')) renderSkills();
    if (document.getElementById('experience-container')) renderExperience();
    if (document.getElementById('projects-container')) renderProjects();
    if (document.getElementById('design-container')) renderDesignPortfolio();
});