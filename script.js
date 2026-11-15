document.addEventListener("DOMContentLoaded", () => {
  const WHATSAPP_NUMBER = "201144816883";

  // 6 Comprehensive Projects containing all 24 deduplicated unique images
  const projectsData = [
    {
      id: 1,
      title: "Coastal Sunset & Evening Buffet Styling",
      category: "catering",
      categoryLabel: "Luxury Catering",
      venue: "Blak by O Catering · Outdoor VIP Event",
      images: [
        "images/img-3.jpg",   // Sunset Poolside Buffet
        "images/img-10.jpg",  // Wooden Grazing Troughs
        "images/img-21.jpg",  // Illuminated White Lamps Evening Buffet
        "images/img-2.jpg"    // Bluefin Tuna & Marble Table
      ],
      description: "Full-scale coastal sunset and evening fine dining buffets featuring gold-rimmed porcelain platters, cured salmon carpaccio, architectural lighting, and artisan grazing displays.",
      tags: ["Sunset Buffet", "Salmon Carpaccio", "Event Styling"]
    },
    {
      id: 2,
      title: "BIAK Seafood Boats & Mirrored Canapés",
      category: "canapes",
      categoryLabel: "Canapés & VIP",
      venue: "BIAK Culinary Showcase · Cairo",
      images: [
        "images/img-11.jpg",  // Seafood Boat Tartlets Tray
        "images/img-13.jpg",  // Copper Tray Seafood Boat Canapes
        "images/img-22.jpg",  // Blue Mirror Tiered Seafood Stand
        "images/img-1.jpg"    // Beef Tartar & Glass Shooters
      ],
      description: "Miniature crispy boat tartlets filled with fresh marinated seafood, multi-tier blue mirror stands, and hand-cut prime beef tartar with botanical consommé shooters.",
      tags: ["Seafood Boats", "Blue Mirror Tier", "Mirrored Service"]
    },
    {
      id: 3,
      title: "Royal Lobster & Signature Course Plating",
      category: "plating",
      categoryLabel: "Fine Plating",
      venue: "Blak by O Fine Dining Dinner",
      images: [
        "images/img-12.jpg",  // Royal Lobster Tail in Bisque Sauce
        "images/img-6.jpg",   // Avocado Mousse & Coral Tuile
        "images/img-9.jpg",   // Crispy Duck Croquette Ring
        "images/img-7.jpg"    // Spiced Sable & Herb Gel
      ],
      description: "Exquisite plated main courses and starters featuring sliced royal lobster tail over velvety bisque reduction, whipped avocado with crimson coral tuile, and confit duck rings.",
      tags: ["Lobster Tail", "Bisque Reduction", "Modern Plating"]
    },
    {
      id: 4,
      title: "Porsche VIP Cones & Tuile Pastry Craft",
      category: "canapes",
      categoryLabel: "Canapés & VIP",
      venue: "Porsche Private Brand Event",
      images: [
        "images/img-4.jpg",   // Porsche Savory Cones
        "images/img-14.jpg",  // Leaf-shaped Tuile Butterfly Canapes
        "images/img-5.jpg",   // Beetroot Crisp Tartlets
        "images/img-19.jpg"   // Gold & Teal Ceramic Bowls
      ],
      description: "Bespoke crimson tuile cones, delicate butterfly leaf crisps, dehydrated beetroot tartlets, and glazed gold-ceramic canapé vessels crafted for exclusive VIP brand receptions.",
      tags: ["Brand Activation", "VIP Finger Food", "Tuile Craft"]
    },
    {
      id: 5,
      title: "Artisanal Cheese, Focaccia & Caviar Station",
      category: "catering",
      categoryLabel: "Luxury Catering",
      venue: "Blak by O Luxury Buffet",
      images: [
        "images/img-16.jpg",  // Fruit & Cheese Trough with Black Bowls
        "images/img-17.jpg",  // Focaccia Sandwiches & Salmon Caviar
        "images/img-18.jpg",  // Mini Cheese & Fruit Plates Spread
        "images/img-8.jpg"    // Royal Caviar & Blini Tasting
      ],
      description: "Curated artisanal cheese boards paired with fresh seasonal peaches, homemade caramelized onion focaccia, smoked salmon, and chilled crystal caviar service.",
      tags: ["Cheese & Fruit", "Artisanal Focaccia", "Royal Caviar"]
    },
    {
      id: 6,
      title: "Live Chef Execution & Micro-Garnishing",
      category: "plating",
      categoryLabel: "Fine Plating",
      venue: "Blak by O Live Service & R&D",
      images: [
        "images/img-20.jpg",  // Chef Ahmed Portrait Garnishing Table
        "images/img-23.jpg",  // Chef Ahmed Angled Garnishing Shot
        "images/img-24.jpg",  // Chef Ahmed Wide Garnishing Shot
        "images/img-15.jpg"   // Chef Apron & Precision Tweezers Action
      ],
      description: "Behind-the-scenes precision micro-garnishing and live brigade leadership led by Chef Ahmed Nageh ensuring flawless execution during luxury events.",
      tags: ["Live Garnishing", "Kitchen Brigade", "Precision Craft"]
    }
  ];

  // Skills Data
  const skillsData = [
    { name: "Fine Dining Cooking Techniques", icon: "bi-stars" },
    { name: "Modern Plating & Food Styling", icon: "bi-palette2" },
    { name: "Creative Menu Development", icon: "bi-journal-richtext" },
    { name: "Kitchen Brigade Leadership (10+ Staff)", icon: "bi-people-fill" },
    { name: "Food Safety Level 2 & HACCP Standards", icon: "bi-shield-fill-check" },
    { name: "Inventory & Food Cost Control", icon: "bi-pie-chart-fill" },
    { name: "Staff Training & Station Mentoring", icon: "bi-person-check-fill" },
    { name: "High-Volume Quality Control", icon: "bi-speedometer2" }
  ];

  const projectsGrid = document.getElementById("projectsGrid");
  const skillsGrid = document.getElementById("skillsGrid");

  skillsGrid.innerHTML = skillsData
    .map(
      (skill) => `
      <div class="col-sm-6">
        <div class="skill-pill-card">
          <i class="bi ${skill.icon}"></i>
          <span>${skill.name}</span>
        </div>
      </div>
    `
    )
    .join("");

  const activeImageIndexes = {};

  function renderProjects(filter = "all") {
    const filtered =
      filter === "all"
        ? projectsData
        : projectsData.filter((item) => item.category === filter);

    projectsGrid.innerHTML = filtered
      .map((project) => {
        if (activeImageIndexes[project.id] === undefined) {
          activeImageIndexes[project.id] = 0;
        }
        const currentIndex = activeImageIndexes[project.id];
        const currentImg = project.images[currentIndex];

        return `
        <div class="col-md-6 col-lg-4">
          <div class="project-card" data-id="${project.id}">
            <div class="project-top-actions">
              <span class="project-badge">${project.categoryLabel}</span>
              <label class="card-photo-upload" title="Replace image" onclick="event.stopPropagation()">
                <i class="bi bi-camera"></i>
                <input type="file" accept="image/*" class="d-none card-file-input" data-project-id="${project.id}" />
              </label>
            </div>

            <!-- Image Slider Container -->
            <div class="project-img-container" id="container-${project.id}">
              <button class="slider-arrow slider-prev" data-action="prev" data-id="${project.id}" onclick="event.stopPropagation()">
                <i class="bi bi-chevron-left"></i>
              </button>
              <button class="slider-arrow slider-next" data-action="next" data-id="${project.id}" onclick="event.stopPropagation()">
                <i class="bi bi-chevron-right"></i>
              </button>
              <img src="${currentImg}" alt="${project.title}" class="project-img" id="img-el-${project.id}" />
              <div class="image-counter-tag" id="counter-${project.id}">${currentIndex + 1} / ${project.images.length}</div>
            </div>

            <div class="project-hover-overlay">
              <div class="project-hover-details">
                <small class="text-warning fw-semibold d-block mb-1">${project.venue}</small>
                <h5 class="font-serif mb-1">${project.title}</h5>
                <p class="small text-white-50 mb-2">${project.description.substring(0, 78)}...</p>
                <span class="small fw-semibold text-white">Click to inspect gallery <i class="bi bi-arrow-right ms-1"></i></span>
              </div>
            </div>
          </div>
        </div>
      `;
      })
      .join("");

    attachCardInteractions();
  }

  // Filter Buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.getAttribute("data-filter"));
    });
  });

  // Modal State
  let currentModalProject = null;
  let modalImageIndex = 0;
  const projectModal = new bootstrap.Modal(document.getElementById("projectModal"));

  function attachCardInteractions() {
    document.querySelectorAll(".slider-arrow").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-id"));
        const action = btn.getAttribute("data-action");
        const project = projectsData.find((p) => p.id === id);
        if (!project) return;

        if (action === "next") {
          activeImageIndexes[id] = (activeImageIndexes[id] + 1) % project.images.length;
        } else {
          activeImageIndexes[id] = (activeImageIndexes[id] - 1 + project.images.length) % project.images.length;
        }

        updateCardImage(id);
      });
    });

    document.querySelectorAll(".project-card").forEach((card) => {
      let hoverInterval = null;
      const id = Number(card.getAttribute("data-id"));
      const project = projectsData.find((p) => p.id === id);

      card.addEventListener("mouseenter", () => {
        if (!project || project.images.length <= 1) return;
        hoverInterval = setInterval(() => {
          activeImageIndexes[id] = (activeImageIndexes[id] + 1) % project.images.length;
          updateCardImage(id);
        }, 1600);
      });

      card.addEventListener("mouseleave", () => {
        if (hoverInterval) clearInterval(hoverInterval);
      });

      card.addEventListener("click", () => {
        if (!project) return;
        currentModalProject = project;
        modalImageIndex = activeImageIndexes[id] || 0;
        openModal();
      });
    });

    document.querySelectorAll(".card-file-input").forEach((input) => {
      input.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const projId = Number(e.target.getAttribute("data-project-id"));
        const reader = new FileReader();
        reader.onload = (ev) => {
          const project = projectsData.find((p) => p.id === projId);
          if (project) {
            project.images[activeImageIndexes[projId]] = ev.target.result;
            updateCardImage(projId);
          }
        };
        reader.readAsDataURL(file);
      });
    });
  }

  function updateCardImage(id) {
    const project = projectsData.find((p) => p.id === id);
    if (!project) return;
    const idx = activeImageIndexes[id];
    const imgEl = document.getElementById(`img-el-${id}`);
    const counterEl = document.getElementById(`counter-${id}`);
    if (imgEl) imgEl.src = project.images[idx];
    if (counterEl) counterEl.textContent = `${idx + 1} / ${project.images.length}`;
  }

  function openModal() {
    if (!currentModalProject) return;
    const imgEl = document.getElementById("modalProjectImg");
    const counterEl = document.getElementById("modalCounter");

    imgEl.src = currentModalProject.images[modalImageIndex];
    counterEl.textContent = `${modalImageIndex + 1} / ${currentModalProject.images.length}`;

    document.getElementById("modalProjectCategory").textContent = currentModalProject.categoryLabel;
    document.getElementById("modalProjectTitle").textContent = currentModalProject.title;
    document.getElementById("modalProjectVenue").textContent = currentModalProject.venue;
    document.getElementById("modalProjectDesc").textContent = currentModalProject.description;

    document.getElementById("modalProjectTags").innerHTML = currentModalProject.tags
      .map((tag) => `<span class="badge bg-light text-dark border px-3 py-2 rounded-pill">${tag}</span>`)
      .join("");

    const waText = encodeURIComponent(
      `Hello Chef Ahmed, I saw "${currentModalProject.title}" on your portfolio and would like to inquire about your culinary services.`
    );
    document.getElementById("modalWhatsAppBtn").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

    projectModal.show();
  }

  document.getElementById("modalNextBtn").addEventListener("click", () => {
    if (!currentModalProject) return;
    modalImageIndex = (modalImageIndex + 1) % currentModalProject.images.length;
    updateModalImage();
  });

  document.getElementById("modalPrevBtn").addEventListener("click", () => {
    if (!currentModalProject) return;
    modalImageIndex = (modalImageIndex - 1 + currentModalProject.images.length) % currentModalProject.images.length;
    updateModalImage();
  });

  function updateModalImage() {
    if (!currentModalProject) return;
    document.getElementById("modalProjectImg").src = currentModalProject.images[modalImageIndex];
    document.getElementById("modalCounter").textContent = `${modalImageIndex + 1} / ${currentModalProject.images.length}`;
  }

  // Chef Photo Upload
  const chefPhotoInput = document.getElementById("chefPhotoInput");
  const chefAvatarImage = document.getElementById("chefAvatarImage");
  if (chefPhotoInput && chefAvatarImage) {
    chefPhotoInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => { chefAvatarImage.src = ev.target.result; };
      reader.readAsDataURL(file);
    });
  }

  // Cover Image Upload
  const coverUploadInput = document.getElementById("coverUploadInput");
  const heroCoverImage = document.getElementById("heroCoverImage");
  if (coverUploadInput && heroCoverImage) {
    coverUploadInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => { heroCoverImage.src = ev.target.result; };
      reader.readAsDataURL(file);
    });
  }

  // WhatsApp Contact Form
  const whatsappContactForm = document.getElementById("whatsappContactForm");
  if (whatsappContactForm) {
    whatsappContactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("senderName").value.trim();
      const type = document.getElementById("inquiryType").value;
      const message = document.getElementById("senderMessage").value.trim();

      const fullText = `Hello Chef Ahmed Nageh,%0A*Name:* ${encodeURIComponent(name)}%0A*Inquiry:* ${encodeURIComponent(type)}%0A*Details:* ${encodeURIComponent(message)}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${fullText}`, "_blank");
    });
  }

  renderProjects("all");
});
