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
            date: "February 2026 - April 2026",
            description: "Findr, created by Yousef Sadiq, Stanley Wong, and Katherine Jorvina, is a way for University of Toronto Mississauga students to make new friends. It is a digital platform designed to facilitate spontaneous, in-person connections. While students typically meet through clubs or classes, these traditional avenues can be time-consuming or intimidating for many. Findr simplifies the process by showing students who is nearby on campus in real-time. By providing a glimpse into the people around them, the platform makes breaking the ice feel more natural and less awkward.",
            skills: ["HTML", "CSS", "JavaScript", "Firebase", "UI/UX", "Graphic Design", "Iconography", "Project Managment", "Git"],
            categories: ["software", "ux"],
            hasCaseStudy: true,
            caseStudyLinks: {
                software: "case-studies/findr-software.html",
                ux: "case-studies/findr-ux.html"
            } 
        }
    ]
};

const caseStudiesData = {
    "findr-software": [
        {
            mediaType: "image",
            mediaContent: "../assets/findr/image2.png", 
            header: "What is Findr?",
            body: "Findr is a mobile-first social web application designed to facilitate campus networking through real-time geolocation tracking and Firebase integration. The system's underlying architecture relies on a strict Model-View-Controller (MVC) design pattern to ensure long-term scalability and robust data privacy.",
        },
        {
            header: "My Role",
            body: [
                "UI/UX Design & Prototyping: Owned the entire user interface and user experience design process, creating detailed initial wireframes and high-fidelity mockups to guide product direction.",
                "Architecture Refactoring: Re-engineered the team's initial MVP codebase into a clean Model-View-Controller architecture, drastically cutting development time for new features from days to minutes.",
                "Geolocation & Geofencing Engine: Programmed the real-time location-tracking pipeline, implementing custom ray-casting algorithms and coordinate polygons to detect specific campus buildings and grounds.",
                "Privacy & Access Control: Built the core privacy framework, allowing users to toggle location tracking and private modes to halt background GPS polling and selectively filter visibility to accepted friends.",
                "Social & Notification Architecture: Developed the complete friends and live notification systems, including real-time friend requests, badge updates, and bidirectional profile interactions.",
                "User Profile & Customization Suite: Implemented the full profile and profile editor modules, supporting dynamic user metadata, badge categorization, and multi-part image uploads to storage."
            ],
            mediaType: "image",
            mediaContent: "../assets/findr/image5.png"
        },
        {
            header: "Core Model and Data Management",
            body: [
                "The application isolates all structural data definitions within a dedicated User model.",
                "This model safely maps user attributes, such as default avatars and privacy toggles, directly into a toFirestore() format for database synchronization.",
                "By keeping the database schema encapsulated within this class, global user attributes can be expanded without rewriting database logic across the application."
            ],
            mediaType: "code",
            mediaContent: `toFirestore() {
        return {
            name: this.name,
            bio: this.bio,
            avatar: this.avatar,
            tags: this.tags,
            lastLocation: this.lastLocation,
            lastActive: this.lastActive,
            friendsList: this.friendsList,
            incomingRequests: this.incomingRequests, 
            outgoingRequests: this.outgoingRequests,
            locationTrackingEnabled: this.locationTrackingEnabled,
            privateModeEnabled: this.privateModeEnabled  
        };
    }`
        },
        {
            header: "Controller Logic and Scalable Features",
            body: [
                "The application logic is broken down into specialized controllers, ensuring that new capabilities can be added without touching the existing codebase.",
                "Dedicated modules handle specific feature sets, such as the FriendsController managing real-time data listeners or the SettingsController handling system toggles.",
                "This approach allowed the seamless integration of a real-time notification badge system simply by creating the NotificationController and passing the application instance, leaving core dashboard algorithms completely untouched."
            ],
            mediaType: "code",
            mediaContent: `const app = {
    init() {
        // Initialize controllers
        this.router = new AppRouter(this);
        this.dashboardController = new DashboardController();
        this.friendsController = new FriendsController();
        this.profileController = new ProfileController(this);
        this.viewUserController = new ViewUserController(this);
        this.editController = new EditProfileController(this);
        this.authController = new AuthController(this); 
        this.settingsController = new SettingsController(this);
        this.notificationController = new NotificationController(this);
        
        window.app = this; 

        this.setupGlobalListeners();

        // Initialize Firebase Auth
        fb.initAuth((user) => {
            if (user) {
                this.notificationController.startListener();
                this.dashboardController.start();
                this.router.navigate('dashboard');
            } else {
                this.router.navigate('login');
            }
        });
    },

    setupGlobalListeners() {
        const logoutBtn = document.getElementById('btn-logout');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', async () => {
                if(confirm("Are you sure you want to log out?")) {
                    await signOut(fb.auth);
                    window.location.reload();
                }
            });
        }
    }
};`,
        },
        {
            header: "Decoupled Architecture for UI Flexibility",
            body: "Because the application strictly separates presentation from logic, complex interface designs can be fundamentally overhauled without touching critical architecture. The AppRouter dynamically controls the interface by toggling an active CSS class to display requested DOM elements while hiding others. This routing abstraction ensures that the backend controllers only need to focus on data processing, such as the DashboardController executing Ray-Casting algorithms to evaluate coordinate-based geofences, rather than managing manual view transitions.",
            mediaType: "image",
            mediaContent: "../assets/findr/image4.png"
        },
        {
            header: "Efficient Geofencing and Real-Time Polling",
            body: ["Instead of relying on heavy third-party mapping SDKs, Findr maps complex campus boundaries by storing irregular mathematical polygons as hardcoded arrays of latitude and longitude coordinates.",
                "The DashboardController evaluates a user's active GPS position against these buildings using a custom Ray-Casting algorithm. By casting a geometric ray and counting polygon edge intersections, the system instantly flips a boolean state to confirm building entry and dynamically update the interface.",
                "To maintain this precise tracking without draining battery life, the application leverages the native navigator.geolocation.watchPosition API with high-accuracy settings enabled.",
                "This event-driven polling approach eliminates the computational overhead of continuous manual loops, only processing data when the device's hardware registers physical movement.",
                "Privacy is strictly enforced within this polling cycle; every time movement is registered, the callback function verifies the user's locationTrackingEnabled flag, instantly dropping the update and preventing database writes if the setting is disabled."
            ],
            mediaType: "code",
            mediaContent: `locateUser() {
        // Privacy check in case the user has changed their location settings
        if (fb.userModel && fb.userModel.locationTrackingEnabled === false) {
            this.setUIState("Location Disabled");
            return;
        }

        if (!navigator.geolocation) {
            this.setUIState("Off Campus");
            return;
        }

        this.watchId = navigator.geolocation.watchPosition(
            async (position) => {
                if (fb.userModel && fb.userModel.locationTrackingEnabled === false) return;

                const myLat = position.coords.latitude;
                const myLng = position.coords.longitude;
                
                const detectedBuilding = this.findMyBuilding(myLat, myLng);
                const isOnCampus = this.calculateDistance(myLat, myLng, this.CAMPUS_CENTER.lat, this.CAMPUS_CENTER.lng) <= this.CAMPUS_CENTER.radius;

                // 1. Determine exactly what to tell the database
                let newLocationString = "Off Campus";
                
                if (detectedBuilding) {
                    this.currentLocationState = detectedBuilding;
                    newLocationString = detectedBuilding.code;
                } else if (isOnCampus) {
                    this.currentLocationState = "Campus Grounds";
                    newLocationString = "On Campus";
                } else {
                    this.currentLocationState = "Off Campus";
                    newLocationString = "Off Campus";
                }

                // 2. Tell the database where the user is
                if (fb.userModel) {
                    await fb.updateUserLocation(newLocationString);
                }

                // 3. Update the UI
                this.setUIState(this.currentLocationState);
            },
            (error) => {
                console.error("GPS Error:", error);
                this.setUIState("Off Campus"); 
            },
            { enableHighAccuracy: true }
        );
    }`

        }
        
    ],
    "findr-ux": [
        {
            mediaType: "image",
            mediaContent: "../assets/findr/image2.png", 
            header: "What is Findr?",
            body: "Today’s university students often have hundreds of superficial social media followers but struggle to genuinely connect with peers around them. Findr bridges this gap by highlighting shared education, interests, and hangout spots in real-time. I mapped the entire user flow and feature set from scratch to solve this specific campus networking problem, ensuring every interaction served a deliberate purpose.",
        },
        {
            header: "Roles and Responsibilities",
            body: ["Feature Set and User Flow: Mapped the complete end-to-end user journey and defined core feature mechanics to solve the specific problem of meaningful campus networking.",
                "Created the entire visual identity from scratch, including the vibrant, two-tone logo and custom mobile-first navigation icons tailored to a Gen Z demographic.",
                "High-Fidelity UX Mockups: Designed modular, highly reusable interface screens and components featuring a highly scannable color-coded badge system for effortless profile reading.",
                "Coded the real-time location-tracking pipeline from scratch, utilizing custom ray-casting algorithms to accurately map complex campus boundaries.",
                "Built the core privacy framework for location toggling alongside the complete real-time notification, friend request, and dynamic profile customization systems."
            ],
        },
        {
            mediaType: "image",
            mediaContent: "../assets/findr_ux/logo.png",
            header: "Brand Identity & Visual Language",
            body: "Gen Z is moving away from hyper-minimalism, craving color and personality with a subtle retro edge. I established Findr’s visual brand by designing a striking, two-tone logo that balances this vibrant 70s-inspired energy with the professionalism expected in an esteemed educational environment. This modern, sleek aesthetic extends to the custom iconography I designed for the bottom navigation bar, optimized specifically for effortless, one-handed mobile use.",
        },
        {
            mediaType: "image",
            mediaContent: ["../assets/findr_ux/iPhone_Dashboard.png",
                "../assets/findr_ux/iPhone_Dashboard_Profiles.png",],
            header: "Component-Driven Design Systems",
            body: "Rather than treating each screen as a unique canvas, I approached the UX design with Object-Oriented Programming principles in mind. I created a robust, modular design system where visual components like user cards, tag containers, and action buttons were universally reusable. This systemic approach meant that when it came time to code, the UI could be snapped together in minutes rather than days, drastically improving overall development efficiency.",
        },
        {
            mediaType: "image",
            mediaContent: ["../assets/findr_ux/iPhone_Friend.png",
                "../assets/findr_ux/iPhone_Profile_Edit.png",],
            header: "Dashboard & Profile Experience",
            body: 'The dashboard merges aesthetic appeal with immediate utility. Upon opening the app, users are greeted by a visual confirmation of their current building with a large hero image. Below this, the interface populates with nearby user profiles featuring a high-density, innovative badge system. To maximize scannability, I implemented strict color coding: Interests are orange, Education/Skills are blue, and Hangout Spots are purple. This deliberate color categorization allows users to instantly identify shared traits at a glance, directly countering the opaque nature of traditional social feeds. Furthermore, clear, rounded "Add +" and minus buttons are placed intuitively on every user card to make connecting frictionless. When viewing or editing a dedicated profile, this same visual hierarchy is maintained, utilizing straightforward pencil icons and "Discard" / "Save" pill buttons to keep the user experience intuitive.',
        },
        {
            mediaType: "image",
            mediaContent: "../assets/findr_ux/iPhone_Friends.png",
            header: "Contextual Social Awareness",
            body: 'The Friends tab was designed to strip away clutter and focus purely on spatial relevance. Instead of an endless content feed, it provides a clean, easily digestible list showing exactly which connections were recently nearby (e.g., "DV (William G. Davis Building) • Now"). This gives users immediate contextual awareness without overwhelming them with unnecessary data.'
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

function renderCaseStudy() {
    const container = document.getElementById('case-study-container');
    if (!container) return;

    // Detects which case study to load via a data attribute on the body tag
    const studyId = document.body.dataset.casestudy;
    if (!studyId || !caseStudiesData[studyId]) return;

    let htmlContent = '';
    caseStudiesData[studyId].forEach(block => {

        // 1. Generate Text (Paragraph or Bullets)
        let bodyHtml = '';
        if (Array.isArray(block.body)) {
            let listItems = block.body.map(item => `<li>${item}</li>`).join('');
            bodyHtml = `<ul class="study-bullets">${listItems}</ul>`;
        } else {
            bodyHtml = `<p class="study-text">${block.body}</p>`;
        }

        // 2. Generate Media (Image(s) or Code)
        let mediaHtml = '';
        if (block.mediaType === 'image') {
            if (Array.isArray(block.mediaContent)) {
                // If multiple images are provided in an array, build a gallery
                let imagesHtml = block.mediaContent.map(img => 
                    `<img src="${img}" alt="${block.header}" class="study-img gallery-item">`
                ).join('');
                mediaHtml = `<div class="study-gallery">${imagesHtml}</div>`;
            } else {
                // Standard single image
                mediaHtml = `<img src="${block.mediaContent}" alt="${block.header}" class="study-img">`;
            }
        } else if (block.mediaType === 'code') {
            let safeCode = block.mediaContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            mediaHtml = `<pre class="study-code"><code>${safeCode}</code></pre>`;
        }

        // 3. Assemble the Block
        htmlContent += `
            <div class="case-study-block fade-in">
                <h3 class="block-header">${block.header}</h3>
                ${bodyHtml}
                <div class="block-media">${mediaHtml}</div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

// Initialize the rendering when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderFooter(); 
    if (document.getElementById('about-container')) renderAbout();
    if (document.getElementById('courses-container')) renderCourses();
    if (document.getElementById('skills-container')) renderSkills();
    if (document.getElementById('experience-container')) renderExperience();
    if (document.getElementById('projects-container')) renderProjects();
    if (document.getElementById('case-study-container')) renderCaseStudy();
});