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
    courses: {
        game: ["CCT382 - Prototyping Digital Games", "CCT334 - History and Theory of Game Production", "CCT285 - Immersive Environment Design", "CCT270 - Principles in Game Design", "CCT211 - Fundamentals of User Interface Programming", "CSC207 - Software Design", "CSC148 - Introduction to Computer Science"],
        software: ["CCT286 - Interactive Media Design", "STA256 - Probability and Statistics I", "CSC236 - Theory of Computation", "CCT211 - Fundamentals of User Interface Programming", "CSC207 - Software Design", "CSC148 - Introduction to Computer Science"],
        ux: ["CCT380 - Human-Computer Interaction and Communication", "CCT286 - Interactive Media Design", "CCT285 - Immersive Environment Design", "CCT211 - Fundamentals of User Interface Programming", "CCT208 - Communications Research Methods", "CCT204 - Design Thinking I"]
    },
    skills: {
        game: [
            { category: "Programming", items: ["C#", "Python", "Java", "C", "Git & Version Control", "Data Structures & Algorithms", "Object-Oriented Programming", "Software Design Patterns"] },
            { category: "Art & Audio", items: ["3D Asset Creation", "Materials & Texturing", "Realtime Lighting", "Custom Foley & SFX", "3D Spatial Audio"] },
            { category: "Level & Game Design", items: ["Enviromental Storytelling", "Narrative Pacing", "Greyboxing", "Prototyping", "Playtesting"] },
            { category: "Software", items: ["Unity", "Blender", "Visual Studio Code", "AutoDesk Maya", "Adobe Creative Cloud"] }
        ],
        software: [
            { category: "Languages", items: ["C#", "Python", "Java", "C", "JavaScript", "HTML/CSS"] },
            { category: "Technologies & Frameworks", items: ["Git", "REST APIs", "NumPy", "Pandas", "Matplotlib", "JavaFX"] },
            { category: "Cloud & Databases", items: ["Firebase", "NoSQL", "SQLite", "JSON"] }
        ],
        ux: [
            { 
                category: "Research & Testing", 
                items: ["Usability Testing", "UX Auditing & QA", "Market Research", "Accessibility & Inclusive Design"] 
            },
            { 
                category: "UI & Visual Design", 
                items: ["High-Fidelity Mockups", "Design Systems", "Brand Identity & Systems", "User Flows"] 
            },
            { 
                category: "Software", 
                items: ["Figma", "Adobe Creative Cloud"] 
            }
        ]
    },
    experience: [
        {
            role: "Founder and Lead Game Developer",
            company: "YS Studios",
            date: "April 2026 - Present",
            description: 'Building and publishing "The Circus That Never Left" - an upcoming horror-mystery title. As the sole developer, I handle everything from core programming to the visual identity and user experience.',
            bullets: [],
            skills: ["Unity", "C#", "UI/UX", "Level Design", "3D Modeling", "Animation", "Sound Design", "Project Managment", "Digital Marketing", "Version Control", "Video Editing", "Adobe Creative Cloud", "Figma", "Blender"],
            categories: ["game", "software"],
            hasCaseStudy: true,
            caseStudyLinks: {
                game: "ysstudios-game-case-study.html",
                software: "ysstudios-software-case-study.html"
            } 
        },
        {
            role: "Digital Product Testing and Launch Intern",
            company: "PashMotors",
            date: "November 2025 - January 2026",
            bullets: [
                "Executed end-to-end functional and usability testing on web and mobile platforms to identify and document 100+ bugs and UX inconsistencies, enhancing overall product stability prior to launch.",
                "Analyzed and synthesized user feedback from pre- and post-launch phases using structured reporting tools, producing data-driven UX improvement recommendations that informed design refinements.",
                "Collaborated cross-functionally with design and engineering teams to translate test findings into actionable UX/UI updates, supporting a smoother product rollout and improved user satisfaction metrics."
            ],
            skills: ["QA Testing", "UI/UX", "Web Design", "Digital Marketing", "Market Research"],
            categories: ["ux"],
            hasCaseStudy: false 
        },
        {
            role: "Brand Design Intern",
            company: "Canadian Business Disability Inclusion Network",
            date: "September 2025 - November 2025",
            bullets: [
                "Delivered cohesive brand identities that enhanced organizational visibility by developing end-to-end visual systems and marketing assets aligned with strategic goals.",
                "Translated executive vision into design solutions by collaborating with senior leadership to create visuals that advanced key business initiatives.",
                "Strengthened brand consistency across digital and print platforms by enforcing design standards and ensuring alignment with core brand guidelines."
            ],
            skills: ["Brand Identity", "Visual Systems", "Graphic Design", "Adobe Creative Cloud", "Figma"],
            categories: ["ux"],
            hasCaseStudy: false
        },
        {
            role: "Web Design Intern",
            company: "Dadpad",
            date: "February 2025 - March 2025",
            bullets: [
                "Enhanced website aesthetics and user experience by applying modern design principles and maintaining consistent brand identity, resulting in a more cohesive and engaging digital presence.",
                "Built and customized a fully functional e-commerce platform using Shopify, implementing advanced features and best practices to improve usability and streamline the shopping experience.",
                "Drove innovative design and development outcomes by collaborating with a cross-functional team to strategize, refine, and launch creative solutions aligned with project goals."
            ],
            skills: ["Web Design", "UI/UX", "Graphic Design", "Market Research", "DaVinci Resolve"],
            categories: ["ux"],
            hasCaseStudy: false 
        },
        {
            role: "IT Assistant",
            company: "Community Foundation Of Halton North",
            date: "July 2023 - August 2023",
            bullets: [
                "Developed engaging visual content for online seminars to boost viewer retention.",
                "Designed and animated custom graphics and illustrations to increase professionalism and enhance brand impact.",
                "Produced and edited multimedia assets, including video content and sound mixing."
            ],
            skills: ["Digital Marketing", "Video Editing", "Graphic Design", "Adobe Creative Cloud"],
            categories: ["ux"],
            hasCaseStudy: false
        }
    ],
    projects: [
        {
            title: "Findr",
            date: "February 2026 - Present",
            description: "Findr, created by Yousef Sadiq, Stanley Wong, and Katherine Jorvina, is a way for University of Toronto Mississauga students to make new friends. It is a digital platform designed to facilitate spontaneous, in-person connections. While students typically meet through clubs or classes, these traditional avenues can be time-consuming or intimidating for many. Findr simplifies the process by showing students who is nearby on campus in real-time. By providing a glimpse into the people around them, the platform makes breaking the ice feel more natural and less awkward.",
            skills: ["HTML", "CSS", "JavaScript", "Firebase", "UI/UX", "Graphic Design", "Iconography", "Project Managment", "Git"],
            categories: ["software", "ux"],
            hasCaseStudy: true,
            caseStudyLinks: {
                software: "findr-software-case-study.html",
                ux: "findr-ux-case-study.html"
            } 
        }
    ]
};

// ==========================================
// 2. THE CONTROLLER (Rendering Logic)
// ==========================================

// Detects which page is currently open using the body's data-category attribute
const pageCategory = document.body.dataset.category || 'all';

function renderAbout() {
    const container = document.getElementById('about-container');
    if (!container) return;

    let htmlContent = '<h3 class="section-title">About Me</h3>';
    portfolioData.about.forEach(paragraph => {
        htmlContent += `<p>${paragraph}</p>`;
    });
    container.innerHTML = htmlContent;
}

function renderCourses() {
    const container = document.getElementById('courses-container');
    if (!container || pageCategory === 'all') return;
    
    // Hide section if no courses exist for this category
    if (!portfolioData.courses[pageCategory] || portfolioData.courses[pageCategory].length === 0) {
        container.parentElement.style.display = 'none';
        return;
    }
    
    let htmlContent = '<div class="tags-container" style="justify-content: center; margin-bottom: 20px;">';
    portfolioData.courses[pageCategory].forEach(course => {
        htmlContent += `<span class="skill-tag">${course}</span>`;
    });
    htmlContent += '</div>';
    container.innerHTML = htmlContent;
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container || pageCategory === 'all') return;

    if (!portfolioData.skills[pageCategory] || portfolioData.skills[pageCategory].length === 0) {
        container.parentElement.style.display = 'none';
        return;
    }

    let htmlContent = '';
    portfolioData.skills[pageCategory].forEach(skillSet => {
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

    let filteredExperience = portfolioData.experience;
    if (pageCategory !== 'all') {
        filteredExperience = filteredExperience.filter(job => job.categories.includes(pageCategory));
    }

    if (filteredExperience.length === 0) {
        container.parentElement.style.display = 'none';
        return;
    }

    let htmlContent = '';
    filteredExperience.forEach(job => {
        let bulletsHtml = job.bullets && job.bullets.length > 0
            ? `<ul>${job.bullets.map(bullet => `<li>${bullet}</li>`).join('')}</ul>` 
            : '';
        
        let descriptionHtml = job.description 
            ? `<p style="margin-bottom: 15px;">${job.description}</p>` 
            : '';

        // Pulls the unique link for this specific job AND this specific tab
        let buttonHtml = '';
        if (pageCategory !== 'all' && job.hasCaseStudy && job.caseStudyLinks && job.caseStudyLinks[pageCategory]) {
            buttonHtml = `<a href="${job.caseStudyLinks[pageCategory]}" class="btn secondary-btn view-project-btn">See More &rarr;</a>`;
        }

        let skillsHtml = job.skills && job.skills.length > 0 
            ? `<div class="card-skills">${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}</div>`
            : '';

        // Button moved to the absolute bottom of the block
        htmlContent += `
            <div class="item-block">
                <div class="card-content">
                    <h4 class="item-title">${job.role}</h4>
                    <p class="item-date">${job.company} | ${job.date}</p>
                    <div class="item-description">
                        ${descriptionHtml}
                        ${bulletsHtml}
                    </div>
                </div>
                ${skillsHtml}
                ${buttonHtml}
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return; 

    let filteredProjects = portfolioData.projects;
    if (pageCategory !== 'all') {
        filteredProjects = filteredProjects.filter(project => project.categories.includes(pageCategory));
    }

    if (filteredProjects.length === 0) {
        container.parentElement.style.display = 'none';
        return;
    }

    let htmlContent = '';
    filteredProjects.forEach(project => {
        
        // Pulls the unique link for this specific project AND this specific tab
        let buttonHtml = '';
        if (pageCategory !== 'all' && project.hasCaseStudy && project.caseStudyLinks && project.caseStudyLinks[pageCategory]) {
            buttonHtml = `<a href="${project.caseStudyLinks[pageCategory]}" class="btn secondary-btn view-project-btn">See More &rarr;</a>`;
        }

        let skillsHtml = project.skills && project.skills.length > 0 
            ? `<div class="card-skills">${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}</div>`
            : '';

        // Button moved to the absolute bottom of the block
        htmlContent += `
            <div class="item-block">
                <div class="card-content">
                    <h4 class="item-title">${project.title}</h4>
                    <p class="item-date">${project.date}</p>
                    <div class="item-description">
                        <p>${project.description}</p>
                    </div>
                </div>
                ${skillsHtml}
                ${buttonHtml}
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
    if (document.getElementById('courses-container')) renderCourses();
    if (document.getElementById('skills-container')) renderSkills();
    if (document.getElementById('experience-container')) renderExperience();
    if (document.getElementById('projects-container')) renderProjects();
});