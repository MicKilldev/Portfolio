// Navigation & Mobile Menu
const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

function openMenu() {
    if (sideMenu) {
        sideMenu.style.transform = 'translateX(0)';
    }
}

function closeMenu() {
    if (sideMenu) {
        sideMenu.style.transform = 'translateX(100%)';
    }
}

// Window scroll navigation glass effect
const appHeader = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (!appHeader) return;
    if (window.scrollY > 30) {
        appHeader.classList.add('nav-scrolled');
    } else {
        appHeader.classList.remove('nav-scrolled');
    }
});

// Light mode and dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}

// Project Details Data
const projectData = {
    avante: {
        title: "Avante Agri-Products USA — Global Export Platform",
        subtitle: "AgriTech Corporate Web Platform",
        description: "A commercial digital export portal connecting agricultural producers, cooperative farmers, and international markets. Features responsive product showcasing, fresh produce catalog categorization, buyer sourcing pipelines, and enterprise inquiry flows built for global agribusiness trade.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
        image: "./image/avante-agriusa.png",
        demoUrl: "https://www.avanteagri-usa.com",
        githubUrl: "https://github.com/MicKilldev/avante-website"
    },
    sidlak: {
        title: "Sidlak Beach Resort — Reservation & Management System",
        subtitle: "Luxury Hospitality Management",
        description: "Comprehensive resort reservation and hospitality operations ecosystem for Sidlak Beach Resort. Includes guest villa booking calendar, dynamic accommodation rates, real-time check-in and checkout pipelines, administrative revenue analytics, and customer payment processing.",
        stack: ["Laravel", "PHP", "Blade", "MySQL", "Tailwind CSS"],
        image: "./image/SidlakResort.jpg",
        demoUrl: "https://github.com/nathaliepareja25/sidlak",
        githubUrl: "https://github.com/nathaliepareja25/sidlak"
    },
    logicguard: {
        title: "LogicGuard PH — AI Logic & Fact Auditor",
        subtitle: "Formal Logic & Soundness Analyzer",
        description: "An innovative mobile application that turns smartphones into a 'Logic Microscope'. Developed in Flutter, it empowers Filipino students, educators, and citizens to mathematically audit the validity of news headlines, viral claims, and political arguments using truth tables, AI natural language processing, and logical fallacy detection algorithms.",
        stack: ["Flutter", "Dart", "Gemini AI", "NLP", "Android"],
        image: "./image/LogicGuard.jpg",
        demoUrl: "https://github.com/MicKilldev/logicguardph",
        githubUrl: "https://github.com/MicKilldev/logicguardph"
    },
    rangewise: {
        title: "RangeWise EV — Smart Electric Vehicle Suite",
        subtitle: "EV Range & Battery Intelligence",
        description: "An intelligent EV companion and battery health analytics mobile application. Provides drivers with hyper-accurate range forecasting based on route topography, regenerative braking energy harvest tracking, nearby charging station route planning, and vehicle maintenance logging.",
        stack: ["Flutter", "Dart", "Firebase", "State Management", "Android"],
        image: "./image/RangeWise.jpg",
        demoUrl: "https://github.com/WenDEVLIFE/rangewise",
        githubUrl: "https://github.com/WenDEVLIFE/rangewise"
    },
    todonato: {
        title: "To Do Na To — Smart Productivity Suite",
        subtitle: "Task & Schedule Optimizer",
        description: "A streamlined, user-friendly task and schedule management mobile application. Features priority categorization, recurring routine reminders, scheduled background notifications, cloud synchronization, and completion velocity insights to keep daily workflows structured and productive.",
        stack: ["Flutter", "Dart", "Firebase", "SQLite", "Local Notifications"],
        image: "./image/to_do_na_to.png",
        demoUrl: "https://github.com/MicKilldev/to_do_na_to",
        githubUrl: "https://github.com/MicKilldev/to_do_na_to"
    },
    kwartatala: {
        title: "KwartaTala — Financial Intelligence",
        subtitle: "Personal Budgeting & Expense Tracker",
        description: "A sleek modern financial intelligence web application providing intuitive daily expense recording, interactive monthly category breakdowns, visual budgeting goals, and spending analytics wrapped in a clean, modern user experience.",
        stack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
        image: "./image/KwartaTala.png",
        demoUrl: "https://drive.google.com/file/d/1RAVBw-h2l9pWBg2MCVj3_8wsADl3QO6s/view?usp=sharing",
        githubUrl: "https://github.com/MicKilldev/KwartaTala"
    },
    sukati: {
        title: "Sukati — Tailor & Client Management",
        subtitle: "Bespoke Fashion Workflow App",
        description: "A dedicated mobile platform crafted for professional tailors and atelier owners to seamlessly manage client measurement records, cutting orders, fabric inventory, and fitting milestones with real-time Firebase cloud synchronization.",
        stack: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
        image: "./image/Sukati1.png",
        demoUrl: "https://drive.google.com/file/d/19bipxLfbKHmhHjDSnlfBXKhHBs8PzOPK/view?usp=drive_link",
        githubUrl: "https://github.com/MicKilldev/sukati"
    },
    bluebalud: {
        title: "BlueBalud — Interactive STEM Learning",
        subtitle: "Gamified Science & Engineering Platform",
        description: "An educational mobile application tailored for university physicists, engineers, and chemists. Provides interactive physics formula models, step-by-step problem exercises, practice quizzes, and offline-first performance tracking.",
        stack: ["Flutter", "Dart", "Firebase", "State Management"],
        image: "./image/BlueBalud1.png",
        demoUrl: "https://github.com/MicKilldev/BlueBalud",
        githubUrl: "https://github.com/MicKilldev/BlueBalud"
    },
    ascend: {
        title: "Ascend — School Management System",
        subtitle: "Enterprise Academic Ecosystem",
        description: "A comprehensive, multi-tenant school portal engineered to bridge educators, students, and parents. Features real-time gradebooks, automated institutional announcements, attendance monitoring, and administrative record indexing built for speed and reliability.",
        stack: ["PHP", "MySQL", "XAMPP", "JavaScript", "Bootstrap"],
        image: "./image/Ascend.jpg",
        demoUrl: "https://github.com/MicKilldev/Ascend",
        githubUrl: "https://github.com/MicKilldev/Ascend"
    }
};

// Filter Projects by Category
function filterProjects(category) {
    // update buttons active state
    document.querySelectorAll('.project-filter-btn').forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // filter cards
    const cards = document.querySelectorAll('.project-card-item');
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hidden-project');
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        } else {
            card.classList.add('hidden-project');
        }
    });
}


// Services Data
const serviceData = {
    web: {
        title: "Web Development",
        tagline: "High-Performance Modern Web Apps",
        description: "Crafting blazing fast, responsive web applications with semantic HTML5, modern CSS, JavaScript, React, and Laravel. Focused on clean architecture, accessible UI, fluid responsive layouts, and modern glass aesthetic with optimal performance."
    },
    mobile: {
        title: "Mobile App Development",
        tagline: "Cross-Platform Flutter Applications",
        description: "Designing and building intuitive cross-platform mobile apps for iOS and Android using Flutter and Dart. Integrating Firebase authentication, real-time databases, offline persistence, and smooth native gestures."
    },
    ui: {
        title: "UI / UX Design",
        tagline: "Glassmorphic & Contemporary Interfaces",
        description: "Designing user-centric wireframes, interactive prototypes, and modern glassmorphic design systems in Figma. Emphasizing crystal clarity, micro-interactions, accessibility, and delightful visual hierarchy."
    },
    graphics: {
        title: "Graphics & Brand Design",
        tagline: "Distinctive Visual Identities",
        description: "Creating memorable visual assets, modern digital logos, branded social graphics, and coherent design collateral that elevate developer and business presence across modern web and mobile touchpoints."
    }
};

// Open Project Modal
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    let modal = document.getElementById('glassModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'glassModal';
        modal.className = 'fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xl opacity-0 pointer-events-none transition-all duration-300';
        modal.innerHTML = `
            <div id="glassModalCard" class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel p-6 sm:p-8 transform scale-95 transition-all duration-300 border border-white/80 dark:border-white/20 shadow-2xl">
                <button onclick="closeModal()" class="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center glass-btn-white text-gray-700 dark:text-white font-bold text-xl hover:scale-105 transition cursor-pointer z-10" aria-label="Close modal">
                    &times;
                </button>
                <div id="modalBody"></div>
            </div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    const modalBody = document.getElementById('modalBody');
    const stackPills = project.stack.map(tech => 
        `<span class="glass-badge text-xs px-3 py-1 font-medium">${tech}</span>`
    ).join('');

    modalBody.innerHTML = `
        <div class="space-y-5">
            <div class="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/80 dark:border-white/10 shadow-inner">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                    <span class="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/90 text-slate-900 backdrop-blur-md mb-1">${project.subtitle}</span>
                    <h3 class="text-2xl font-bold text-white drop-shadow-md">${project.title}</h3>
                </div>
            </div>
            
            <p class="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">${project.description}</p>
            
            <div>
                <h4 class="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2">Technologies Used</h4>
                <div class="flex flex-wrap gap-2">
                    ${stackPills}
                </div>
            </div>

            <div class="flex items-center gap-4 pt-4 border-t border-slate-200/60 dark:border-white/10">
                ${project.demoUrl && project.demoUrl !== '#' ? `
                <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="px-6 py-2.5 rounded-full font-medium text-sm glass-btn-dark inline-flex items-center gap-2">
                    Live Demo
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>` : ''}
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="px-6 py-2.5 rounded-full font-medium text-sm glass-btn-white inline-flex items-center gap-2">
                    Source Code
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </a>
            </div>
        </div>
    `;

    modal.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => {
        const card = document.getElementById('glassModalCard');
        if (card) {
            card.classList.remove('scale-95');
            card.classList.add('scale-100');
        }
    }, 10);
}

// Open Service Modal
function openServiceModal(serviceKey) {
    const service = serviceData[serviceKey];
    if (!service) return;

    let modal = document.getElementById('glassModal');
    if (!modal) {
        openProjectModal('sukati'); // create container
        modal = document.getElementById('glassModal');
    }

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="space-y-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Service Offering
            </div>
            <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">${service.title}</h3>
            <p class="text-sm font-medium text-purple-600 dark:text-purple-400">${service.tagline}</p>
            <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">${service.description}</p>
            <div class="pt-4 flex items-center gap-3">
                <a href="#contact" onclick="closeModal()" class="px-6 py-2.5 rounded-full text-sm font-medium glass-btn-dark inline-flex items-center gap-2">
                    Inquire About This Service
                </a>
            </div>
        </div>
    `;

    modal.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => {
        const card = document.getElementById('glassModalCard');
        if (card) {
            card.classList.remove('scale-95');
            card.classList.add('scale-100');
        }
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('glassModal');
    if (!modal) return;
    const card = document.getElementById('glassModalCard');
    if (card) {
        card.classList.remove('scale-100');
        card.classList.add('scale-95');
    }
    modal.classList.add('opacity-0', 'pointer-events-none');
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Interactive Glass Cursor Follower for Desktop
if (window.matchMedia('(pointer: fine)').matches) {
    const follower = document.createElement('div');
    follower.className = 'glass-cursor-follower hidden sm:block';
    
    const dot = document.createElement('div');
    dot.className = 'glass-cursor-dot hidden sm:block';
    
    document.body.appendChild(follower);
    document.body.appendChild(dot);

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
    });

    function animateCursor() {
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // Hover expansions on interactive elements
    const interactiveElements = 'a, button, input, textarea, .glass-card, [onclick]';
    document.querySelectorAll(interactiveElements).forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.style.width = '48px';
            follower.style.height = '48px';
            follower.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
        });
        el.addEventListener('mouseleave', () => {
            follower.style.width = '32px';
            follower.style.height = '32px';
            follower.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
        });
    });
}