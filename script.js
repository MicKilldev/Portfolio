const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");

    }
})

//  ---- light mode and dark mode ----

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}

// ---- Project Data & Modal ----
const projectData = {
  sukati: {
    title: "Sukati",
    description: "A tailor management system that allows tailors to manage their clients, orders, and measurements."
  }
};

function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    // Check if modal container exists or create one dynamically
    let modal = document.getElementById('projectModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'projectModal';
        modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden opacity-0 transition-opacity duration-300';
        modal.innerHTML = `
            <div class="bg-white dark:bg-darkHover dark:text-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative transform transition-transform duration-300 scale-95" id="modalContent">
                <button onclick="closeProjectModal()" class="absolute top-4 right-4 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white text-2xl font-bold">&times;</button>
                <h3 id="modalTitle" class="text-2xl font-bold mb-4 font-Ovo"></h3>
                <p id="modalDescription" class="text-gray-700 dark:text-white/80 text-sm leading-relaxed mb-6 font-Ovo"></p>
                <div class="flex justify-end">
                    <button onclick="closeProjectModal()" class="px-5 py-2 bg-black text-white rounded-lg text-sm dark:bg-white dark:text-black hover:opacity-80 transition">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeProjectModal();
        });
    }

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        document.getElementById('modalContent').classList.remove('scale-95');
        document.getElementById('modalContent').classList.add('scale-100');
    }, 10);
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    modal.classList.add('opacity-0');
    document.getElementById('modalContent').classList.remove('scale-100');
    document.getElementById('modalContent').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}