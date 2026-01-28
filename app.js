// ===========================
// Data Configuration
// ===========================
// REPLACE these placeholder URLs with your actual links
const CONFIG = {
  resumeUrl: '/resume.pdf', // Replace with your resume PDF URL
  email: 'your.email@example.com', // Replace with your email
  github: 'https://github.com/yourusername', // Replace with your GitHub profile
  linkedin: 'https://linkedin.com/in/yourusername', // Replace with your LinkedIn profile
  twitter: 'https://twitter.com/yourusername' // Replace with your Twitter/X profile
};

// Skills data categorized by type
const skillsData = [
  { name: 'C#', category: 'backend' },
  { name: 'ASP.NET Core', category: 'backend' },
  { name: 'ASP.NET MVC', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Web API', category: 'backend' },
  { name: 'Flask', category: 'backend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'AngularJS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Chart.js', category: 'frontend' },
  { name: 'Leaflet.js', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'YOLO', category: 'ai' },
  { name: 'PaddleOCR', category: 'ai' },
  { name: 'OpenCV', category: 'ai' },
  { name: 'NCNN', category: 'ai' },
  { name: 'TensorFlow Lite', category: 'ai' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MSSQL', category: 'database' },
  { name: 'ADO.NET', category: 'database' },
  { name: 'Entity Framework', category: 'database' },
  { name: 'Query Optimization', category: 'database' },
  { name: 'Stored Procedures', category: 'database' },
  { name: 'RESTful APIs', category: 'backend' },
  { name: 'Microservices', category: 'backend' },
  { name: 'RTSP Streaming', category: 'backend' },
  { name: 'Windows Services', category: 'backend' },
  { name: 'gRPC', category: 'backend' },
  { name: 'Git', category: 'devops' },
  { name: 'GitHub', category: 'devops' },
  { name: 'SVN', category: 'devops' },
  { name: 'Visual Studio', category: 'devops' },
  { name: 'VS Code', category: 'devops' },
  { name: 'Postman', category: 'devops' },
  { name: 'Nginx', category: 'devops' },
  { name: 'IIS', category: 'devops' },
  { name: 'Docker', category: 'devops' },
  { name: 'Linux', category: 'devops' }
];

// Projects data with full details
const projectsData = [
  {
    id: 1,
    title: 'NEXGEN - Highway Device Management Solution',
    description: 'Centralized .NET MVC platform integrating cameras, VMS, ATCC, ECB, weather sensors with real-time status monitoring and Leaflet.js interactive mapping for highway operations.',
    tech: ['.NET MVC', 'Leaflet.js', 'PostgreSQL', 'Bootstrap', 'Chart.js', 'RTSP Streaming'],
    challenge: 'Multiple highway sites with diverse device types (cameras, signs, counters, emergency boxes) needed unified real-time monitoring dashboard.',
    approach: 'Architected microservices for each device type, implemented RTSP streaming integration, built Leaflet.js mapping with real-time status indicators.',
    results: 'Reduced manual monitoring effort by 80%, enabled operators to visualize 10+ highway sites with real-time device status and data trends on single dashboard.',
    metrics: ['80% reduction in manual monitoring', 'Real-time RTSP streaming for 10+ sites', 'Multi-device microservices architecture', 'Unified control room interface'],
    links: [
      { label: 'GitHub', url: 'https://github.com/yourusername/nexgen' },
      { label: 'Case Study', url: '#' }
    ]
  },
  {
    id: 2,
    title: 'Consolidated Site Data Summary Tool',
    description: '.NET Core dashboard bridging field installation teams and development team, tracking NEXGEN device integration progress across highway projects in real-time.',
    tech: ['.NET Core', 'PostgreSQL', 'ADO.NET', 'HTML/CSS', 'JavaScript'],
    challenge: 'Installation teams and development teams lacked real-time visibility into device deployment progress across multiple sites, causing communication gaps.',
    approach: 'Built centralized .NET Core dashboard with automated status aggregation service collecting device data from site-level services.',
    results: 'Achieved real-time project visibility, reduced status inquiry time from hours to instant updates, eliminated information gaps between teams.',
    metrics: ['90% reduction in inquiry time', 'Real-time multi-site visibility', 'Automated status aggregation', 'Cross-team communication bridge'],
    links: [
      { label: 'GitHub', url: 'https://github.com/yourusername/csds' },
      { label: 'Case Study', url: '#' }
    ]
  },
  {
    id: 3,
    title: 'Edge-Based ANPR System (Raspberry Pi 5)',
    description: 'Lightweight AI-powered license plate recognition system optimized for edge deployment, achieving 95% accuracy on Indian plates with 15 FPS real-time processing and Flask backend.',
    tech: ['Python', 'YOLO', 'PaddleOCR', 'Flask', 'OpenCV', 'PostgreSQL', 'Raspberry Pi 5', 'NCNN'],
    challenge: 'Deploy production-grade license plate recognition on resource-constrained Raspberry Pi 5 with real-time RTSP stream processing.',
    approach: 'Fine-tuned YOLO with 5,000+ annotated Indian license plate images, optimized inference using NCNN quantization, built Flask backend with responsive frontend and PostgreSQL integration.',
    results: 'Achieved 95% recognition accuracy at 15 FPS on Raspberry Pi 5, reduced model size by 70% via quantization, eliminated manual vehicle logging with 100% automation.',
    metrics: ['95% accuracy on Indian plates', '15 FPS real-time processing', '70% model size reduction', '99.8% system uptime', '85% reduction in false positives'],
    links: [
      { label: 'GitHub', url: 'https://github.com/yourusername/anpr' },
      { label: 'Case Study', url: '#' }
    ]
  },
  {
    id: 4,
    title: 'Cash Deposit System (CDS) Enhancement',
    description: 'Toll plaza cash flow management system enhanced with AngularJS frontend, MSSQL query optimization, and RDLC reporting for improved operational efficiency.',
    tech: ['AngularJS', 'ASP.NET MVC', 'MSSQL', 'ADO.NET', 'RDLC Reports'],
    challenge: 'Slow database queries impacting daily cash reconciliation processes across multiple toll plazas.',
    approach: 'Optimized stored procedures, refactored queries, improved indexing strategy; enhanced frontend with client-requested features.',
    results: 'Improved query response time by 40%, enhanced daily cash reconciliation workflows, improved system reliability and uptime.',
    metrics: ['40% improvement in query response time', 'Enhanced client features', 'Improved system reliability', 'Multi-location toll plaza support'],
    links: [
      { label: 'GitHub', url: 'https://github.com/yourusername/cds' },
      { label: 'Case Study', url: '#' }
    ]
  }
];

// ===========================
// Theme Management
// ===========================
let currentTheme = 'dark';
const themeToggle = document.getElementById('themeToggle');

// Initialize theme from user preference or default to dark
function initTheme() {
  // Check for saved theme preference
  const savedTheme = getCurrentTheme();
  currentTheme = savedTheme;
  document.documentElement.setAttribute('data-theme', currentTheme);
  saveTheme(currentTheme);
}

// Get current theme (uses in-memory storage since localStorage is not available)
function getCurrentTheme() {
  // Default to dark theme
  return currentTheme || 'dark';
}

// Save theme preference (in-memory only due to sandboxed environment)
function saveTheme(theme) {
  currentTheme = theme;
  // Note: localStorage is not available in sandboxed environment
  // Using in-memory variable instead
}

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  saveTheme(currentTheme);
});

// ===========================
// Navigation & Scroll
// ===========================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const backToTop = document.getElementById('backToTop');

// Smooth scroll to sections
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Close mobile menu
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
  const isExpanded = hamburger.classList.contains('active');
  hamburger.setAttribute('aria-expanded', isExpanded.toString());
});

// Active section highlighting on scroll
const sections = document.querySelectorAll('.section, .hero-section');

function updateActiveSection() {
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Back to top button visibility
function toggleBackToTop() {
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  updateActiveSection();
  toggleBackToTop();
});

// ===========================
// Skills Section
// ===========================
const skillsGrid = document.getElementById('skillsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderSkills(filter = 'all') {
  skillsGrid.innerHTML = '';
  
  const filteredSkills = filter === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === filter);
  
  filteredSkills.forEach((skill, index) => {
    const skillChip = document.createElement('div');
    skillChip.className = 'skill-chip';
    skillChip.textContent = skill.name;
    skillChip.setAttribute('data-category', skill.category);
    skillChip.style.animationDelay = `${index * 0.05}s`;
    skillsGrid.appendChild(skillChip);
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');
    renderSkills(filter);
  });
});

// ===========================
// Projects Section
// ===========================
const projectsGrid = document.getElementById('projectsGrid');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

function renderProjects() {
  projectsGrid.innerHTML = '';
  
  projectsData.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.style.animationDelay = `${index * 0.1}s`;
    projectCard.innerHTML = `
      <div class="project-image">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.links.map(link => `
            <a href="${link.url}" class="project-link" target="_blank" rel="noopener noreferrer">
              ${link.label}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          `).join('')}
        </div>
      </div>
    `;
    
    projectCard.addEventListener('click', (e) => {
      // Don't open modal if clicking on a link
      if (e.target.closest('.project-link')) return;
      openProjectModal(project);
    });
    
    projectsGrid.appendChild(projectCard);
  });
}

function openProjectModal(project) {
  modalBody.innerHTML = `
    <h2 class="modal-title" id="modalTitle">${project.title}</h2>
    <div class="modal-section">
      <h3>Overview</h3>
      <p>${project.description}</p>
    </div>
    <div class="modal-section">
      <h3>Technologies</h3>
      <div class="modal-tech">
        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
    </div>
    <div class="modal-section">
      <h3>Challenge</h3>
      <p>${project.challenge}</p>
    </div>
    <div class="modal-section">
      <h3>Approach</h3>
      <p>${project.approach}</p>
    </div>
    <div class="modal-section">
      <h3>Results</h3>
      <p>${project.results}</p>
    </div>
    <div class="modal-section">
      <h3>Key Metrics</h3>
      <ul>
        ${project.metrics.map(metric => `<li>${metric}</li>`).join('')}
      </ul>
    </div>
  `;
  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  projectModal.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeProjectModal);

projectModal.addEventListener('click', (e) => {
  if (e.target === projectModal) {
    closeProjectModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal.classList.contains('active')) {
    closeProjectModal();
  }
});

// ===========================
// Contact Form
// ===========================
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formAlert = document.getElementById('formAlert');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  
  // Show loading state
  btnText.style.display = 'none';
  btnLoading.style.display = 'block';
  submitBtn.disabled = true;
  
  // Simulate form submission (replace with actual form handling)
  setTimeout(() => {
    // Reset loading state
    btnText.style.display = 'block';
    btnLoading.style.display = 'none';
    submitBtn.disabled = false;
    
    // Show success message
    formAlert.textContent = 'Message sent successfully! I\'ll get back to you soon.';
    formAlert.className = 'form-alert success';
    
    // Reset form
    contactForm.reset();
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      formAlert.className = 'form-alert';
    }, 5000);
  }, 1500);
});

// ===========================
// 3D Background Scene
// ===========================
let scene, camera, renderer, particles, shapes, animationId;
let isAnimationEnabled = true;
let mouse = { x: 0, y: 0 };

const animationToggle = document.getElementById('animationToggle');

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  isAnimationEnabled = false;
}

function init3DScene() {
  const canvas = document.getElementById('threeBg');
  
  // Scene setup
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0b0f17, 10, 50);
  
  // Camera setup
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 15;
  
  // Renderer setup
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);
  
  const directionalLight1 = new THREE.DirectionalLight(0x2BE3FF, 0.5);
  directionalLight1.position.set(5, 5, 5);
  scene.add(directionalLight1);
  
  const directionalLight2 = new THREE.DirectionalLight(0x9B7BFF, 0.5);
  directionalLight2.position.set(-5, -5, 5);
  scene.add(directionalLight2);
  
  // Create circuit grid plane
  createCircuitGrid();
  
  // Create floating geometric shapes
  createFloatingShapes();
  
  // Create particle system
  createParticles();
  
  // Create holographic UI cards
  createHolographicCards();
  
  // Mouse movement for parallax
  document.addEventListener('mousemove', onMouseMove);
  
  // Handle window resize
  window.addEventListener('resize', onWindowResize);
  
  // Start animation
  animate();
}

function createCircuitGrid() {
  const gridSize = 20;
  const divisions = 20;
  const gridHelper = new THREE.GridHelper(gridSize, divisions, 0x2BE3FF, 0x2BE3FF);
  gridHelper.material.opacity = 0.2;
  gridHelper.material.transparent = true;
  gridHelper.position.y = -5;
  scene.add(gridHelper);
}

function createFloatingShapes() {
  shapes = [];
  const geometries = [
    new THREE.IcosahedronGeometry(0.8, 0),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.OctahedronGeometry(0.8, 0),
    new THREE.TetrahedronGeometry(0.9, 0),
    new THREE.DodecahedronGeometry(0.7, 0)
  ];
  
  const material = new THREE.MeshStandardMaterial({
    color: 0x2BE3FF,
    emissive: 0x2BE3FF,
    emissiveIntensity: 0.2,
    wireframe: true,
    transparent: true,
    opacity: 0.6
  });
  
  for (let i = 0; i < 7; i++) {
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    const mesh = new THREE.Mesh(geometry, material.clone());
    
    // Random position
    mesh.position.x = (Math.random() - 0.5) * 20;
    mesh.position.y = (Math.random() - 0.5) * 10;
    mesh.position.z = (Math.random() - 0.5) * 10;
    
    // Random rotation speed
    mesh.userData.rotationSpeed = {
      x: (Math.random() - 0.5) * 0.01,
      y: (Math.random() - 0.5) * 0.01,
      z: (Math.random() - 0.5) * 0.01
    };
    
    // Alternate colors
    if (i % 2 === 0) {
      mesh.material.color.setHex(0x9B7BFF);
      mesh.material.emissive.setHex(0x9B7BFF);
    }
    
    shapes.push(mesh);
    scene.add(mesh);
  }
}

function createParticles() {
  const particleCount = window.innerWidth < 768 ? 100 : 300;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    
    velocities.push({
      x: (Math.random() - 0.5) * 0.02,
      y: (Math.random() - 0.5) * 0.02,
      z: (Math.random() - 0.5) * 0.02
    });
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const material = new THREE.PointsMaterial({
    color: 0x2BE3FF,
    size: 0.05,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });
  
  particles = new THREE.Points(geometry, material);
  particles.userData.velocities = velocities;
  scene.add(particles);
}

function createHolographicCards() {
  const cardGeometry = new THREE.BoxGeometry(2, 1.5, 0.05);
  const cardMaterial = new THREE.MeshBasicMaterial({
    color: 0x2BE3FF,
    transparent: true,
    opacity: 0.1,
    wireframe: false
  });
  
  const edgeGeometry = new THREE.EdgesGeometry(cardGeometry);
  const edgeMaterial = new THREE.LineBasicMaterial({
    color: 0x2BE3FF,
    transparent: true,
    opacity: 0.5
  });
  
  for (let i = 0; i < 3; i++) {
    const card = new THREE.Mesh(cardGeometry, cardMaterial.clone());
    const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial.clone());
    
    card.position.x = (Math.random() - 0.5) * 15;
    card.position.y = (Math.random() - 0.5) * 8;
    card.position.z = (Math.random() - 0.5) * 8;
    
    card.rotation.x = Math.random() * Math.PI;
    card.rotation.y = Math.random() * Math.PI;
    
    card.userData.bobSpeed = 0.001 + Math.random() * 0.002;
    card.userData.bobOffset = Math.random() * Math.PI * 2;
    
    edges.position.copy(card.position);
    edges.rotation.copy(card.rotation);
    
    if (i % 2 === 0) {
      card.material.color.setHex(0x9B7BFF);
      edges.material.color.setHex(0x9B7BFF);
    }
    
    scene.add(card);
    scene.add(edges);
  }
}

function onMouseMove(event) {
  if (!isAnimationEnabled) return;
  
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  if (!isAnimationEnabled) return;
  
  animationId = requestAnimationFrame(animate);
  
  // Rotate shapes
  shapes.forEach(shape => {
    shape.rotation.x += shape.userData.rotationSpeed.x;
    shape.rotation.y += shape.userData.rotationSpeed.y;
    shape.rotation.z += shape.userData.rotationSpeed.z;
  });
  
  // Animate particles
  const positions = particles.geometry.attributes.position.array;
  const velocities = particles.userData.velocities;
  
  for (let i = 0; i < positions.length / 3; i++) {
    positions[i * 3] += velocities[i].x;
    positions[i * 3 + 1] += velocities[i].y;
    positions[i * 3 + 2] += velocities[i].z;
    
    // Wrap particles around
    if (Math.abs(positions[i * 3]) > 15) positions[i * 3] *= -1;
    if (Math.abs(positions[i * 3 + 1]) > 15) positions[i * 3 + 1] *= -1;
    if (Math.abs(positions[i * 3 + 2]) > 15) positions[i * 3 + 2] *= -1;
  }
  particles.geometry.attributes.position.needsUpdate = true;
  
  // Camera parallax
  camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
  camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
  camera.lookAt(scene.position);
  
  renderer.render(scene, camera);
}

function toggleAnimation() {
  isAnimationEnabled = !isAnimationEnabled;
  
  if (isAnimationEnabled) {
    animate();
  } else {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  }
}

animationToggle.addEventListener('click', toggleAnimation);

// ===========================
// Initialize Application
// ===========================
function initApp() {
  initTheme();
  renderSkills();
  renderProjects();
  
  // Lazy-load 3D scene after a short delay
  setTimeout(() => {
    if (typeof THREE !== 'undefined') {
      init3DScene();
    }
  }, 500);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}