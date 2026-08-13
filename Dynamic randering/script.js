/* =========================================================
   Skillyard — Course Catalog
   Data + interactivity

   To use your own data: replace the `courses` array below with
   the array your mentor gives you. As long as each object keeps
   these fields, everything else on the page updates automatically:
   course_id, category, course_name, duration, course_price,
   assignments, sections, topics_covered, instructor_name, level,
   rating, students_enrolled, language, certificate_available,
   skills_covered (array), thumbnail
   ========================================================= */

let courses = [
  {
    course_id: "CRS101", category: "Technical", course_name: "Full Stack Web Development",
    duration: "6 Months", course_price: 12999, assignments: 24, sections: 18, topics_covered: 65,
    instructor_name: "Amit Sharma", level: "Intermediate", rating: 4.8, students_enrolled: 2450,
    language: "English", certificate_available: true,
    skills_covered: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"], thumbnail: "fullstack.jpg"
  },
  {
    course_id: "CRS102", category: "Technical", course_name: "Python Programming Masterclass",
    duration: "3 Months", course_price: 6999, assignments: 18, sections: 14, topics_covered: 48,
    instructor_name: "Neha Verma", level: "Beginner", rating: 4.7, students_enrolled: 3120,
    language: "English", certificate_available: true,
    skills_covered: ["Python", "OOP", "File Handling", "APIs", "Automation"], thumbnail: "python.jpg"
  },
  {
    course_id: "CRS103", category: "Arts", course_name: "Digital Drawing and Illustration",
    duration: "2 Months", course_price: 4999, assignments: 12, sections: 10, topics_covered: 32,
    instructor_name: "Riya Kapoor", level: "Beginner", rating: 4.6, students_enrolled: 980,
    language: "Hindi", certificate_available: true,
    skills_covered: ["Sketching", "Digital Art", "Illustration", "Color Theory"], thumbnail: "digital-art.jpg"
  },
  {
    course_id: "CRS104", category: "Business", course_name: "Digital Marketing Complete Course",
    duration: "4 Months", course_price: 8999, assignments: 20, sections: 16, topics_covered: 52,
    instructor_name: "Rahul Mehta", level: "Intermediate", rating: 4.5, students_enrolled: 1850,
    language: "English", certificate_available: true,
    skills_covered: ["SEO", "Social Media", "Google Ads", "Email Marketing", "Analytics"], thumbnail: "digital-marketing.jpg"
  },
  {
    course_id: "CRS105", category: "Technical", course_name: "React.js From Beginner to Advanced",
    duration: "2 Months", course_price: 5999, assignments: 16, sections: 12, topics_covered: 40,
    instructor_name: "Amit Sharma", level: "Intermediate", rating: 4.9, students_enrolled: 2780,
    language: "English", certificate_available: true,
    skills_covered: ["React", "Hooks", "Context API", "Redux", "React Router"], thumbnail: "react.jpg"
  },
  {
    course_id: "CRS106", category: "Music", course_name: "Guitar for Beginners",
    duration: "3 Months", course_price: 3999, assignments: 10, sections: 9, topics_covered: 28,
    instructor_name: "Arjun Singh", level: "Beginner", rating: 4.7, students_enrolled: 1450,
    language: "Hindi", certificate_available: false,
    skills_covered: ["Chords", "Strumming", "Fingerstyle", "Music Theory"], thumbnail: "guitar.jpg"
  },
  {
    course_id: "CRS107", category: "Technical", course_name: "Data Science with Python",
    duration: "5 Months", course_price: 14999, assignments: 28, sections: 20, topics_covered: 72,
    instructor_name: "Neha Verma", level: "Advanced", rating: 4.8, students_enrolled: 1680,
    language: "English", certificate_available: true,
    skills_covered: ["Python", "NumPy", "Pandas", "Matplotlib", "Machine Learning"], thumbnail: "data-science.jpg"
  },
  {
    course_id: "CRS108", category: "Design", course_name: "UI UX Design Fundamentals",
    duration: "3 Months", course_price: 7999, assignments: 15, sections: 13, topics_covered: 42,
    instructor_name: "Riya Kapoor", level: "Beginner", rating: 4.6, students_enrolled: 1320,
    language: "English", certificate_available: true,
    skills_covered: ["Figma", "Wireframing", "Prototyping", "User Research"], thumbnail: "ui-ux.jpg"
  },
  {
    course_id: "CRS109", category: "Business", course_name: "Entrepreneurship and Startup Fundamentals",
    duration: "2 Months", course_price: 5499, assignments: 8, sections: 11, topics_covered: 30,
    instructor_name: "Rahul Mehta", level: "Beginner", rating: 4.4, students_enrolled: 860,
    language: "English", certificate_available: true,
    skills_covered: ["Business Model", "Startup Planning", "Funding", "Marketing"], thumbnail: "startup.jpg"
  },
  {
    course_id: "CRS110", category: "Technical", course_name: "Node.js Backend Development",
    duration: "3 Months", course_price: 7499, assignments: 19, sections: 15, topics_covered: 46,
    instructor_name: "Amit Sharma", level: "Intermediate", rating: 4.8, students_enrolled: 1920,
    language: "English", certificate_available: true,
    skills_covered: ["Node.js", "Express.js", "MongoDB", "REST API", "JWT"], thumbnail: "nodejs.jpg"
  },
  {
    course_id: "CRS111", category: "Photography", course_name: "Photography and Photo Editing",
    duration: "2 Months", course_price: 4499, assignments: 14, sections: 10, topics_covered: 35,
    instructor_name: "Karan Malhotra", level: "Beginner", rating: 4.5, students_enrolled: 740,
    language: "Hindi", certificate_available: true,
    skills_covered: ["Photography", "Lighting", "Composition", "Lightroom", "Photoshop"], thumbnail: "photography.jpg"
  },
  {
    course_id: "CRS112", category: "Technical", course_name: "Machine Learning Fundamentals",
    duration: "4 Months", course_price: 13999, assignments: 25, sections: 17, topics_covered: 58,
    instructor_name: "Neha Verma", level: "Advanced", rating: 4.9, students_enrolled: 1560,
    language: "English", certificate_available: true,
    skills_covered: ["Python", "Regression", "Classification", "Clustering", "Scikit-learn"], thumbnail: "machine-learning.jpg"
  },
  {
    course_id: "CRS113", category: "Music", course_name: "Indian Classical Singing",
    duration: "6 Months", course_price: 9999, assignments: 20, sections: 16, topics_covered: 50,
    instructor_name: "Arjun Singh", level: "Intermediate", rating: 4.8, students_enrolled: 620,
    language: "Hindi", certificate_available: true,
    skills_covered: ["Sur", "Taal", "Raag", "Voice Training", "Classical Music"], thumbnail: "classical-music.jpg"
  },
  {
    course_id: "CRS114", category: "Personal Development", course_name: "Communication and Public Speaking",
    duration: "1 Month", course_price: 2999, assignments: 8, sections: 8, topics_covered: 24,
    instructor_name: "Priya Nair", level: "Beginner", rating: 4.6, students_enrolled: 2100,
    language: "English", certificate_available: true,
    skills_covered: ["Communication", "Public Speaking", "Confidence", "Presentation"], thumbnail: "communication.jpg"
  },
  {
    course_id: "CRS115", category: "Technical", course_name: "MongoDB Database Development",
    duration: "1.5 Months", course_price: 4999, assignments: 12, sections: 10, topics_covered: 34,
    instructor_name: "Amit Sharma", level: "Intermediate", rating: 4.7, students_enrolled: 1250,
    language: "English", certificate_available: true,
    skills_covered: ["MongoDB", "Mongoose", "Aggregation", "Indexing", "Database Design"], thumbnail: "mongodb.jpg"
  },
  {
    course_id: "CRS116", category: "Finance", course_name: "Personal Finance and Investing",
    duration: "2 Months", course_price: 5999, assignments: 10, sections: 12, topics_covered: 38,
    instructor_name: "Rahul Mehta", level: "Beginner", rating: 4.5, students_enrolled: 1740,
    language: "Hindi", certificate_available: true,
    skills_covered: ["Budgeting", "Investing", "Mutual Funds", "Stocks", "Risk Management"], thumbnail: "finance.jpg"
  },
  {
    course_id: "CRS117", category: "Technical", course_name: "JavaScript Complete Masterclass",
    duration: "3 Months", course_price: 6499, assignments: 22, sections: 16, topics_covered: 55,
    instructor_name: "Amit Sharma", level: "Intermediate", rating: 4.9, students_enrolled: 3420,
    language: "English", certificate_available: true,
    skills_covered: ["JavaScript", "ES6", "DOM", "Promises", "Async Await", "APIs"], thumbnail: "javascript.jpg"
  },
  {
    course_id: "CRS118", category: "Arts", course_name: "Creative Writing and Storytelling",
    duration: "2 Months", course_price: 3499, assignments: 14, sections: 9, topics_covered: 29,
    instructor_name: "Priya Nair", level: "Beginner", rating: 4.7, students_enrolled: 920,
    language: "English", certificate_available: true,
    skills_covered: ["Creative Writing", "Storytelling", "Character Development", "Plot Writing"], thumbnail: "creative-writing.jpg"
  }
];

/* Map each category name to a CSS variable defined in style.css.
   Unknown/new categories fall back to the default accent colour. */
const categoryColorVar = {
  "Technical": "--cat-technical",
  "Arts": "--cat-arts",
  "Business": "--cat-business",
  "Music": "--cat-music",
  "Design": "--cat-design",
  "Photography": "--cat-photography",
  "Finance": "--cat-finance",
  "Personal Development": "--cat-personal"
};

const grid = document.getElementById("courseGrid");
const emptyState = document.getElementById("emptyState");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const levelFilter = document.getElementById("levelFilter");
const sortSelect = document.getElementById("sortSelect");
const clearFiltersBtn = document.getElementById("clearFilters");
const heroStats = document.getElementById("heroStats");

const currency = (n) =>
  "₹" + Number(n).toLocaleString("en-IN");

function uniqueValues(key) {
  return [...new Set(courses.map((c) => c[key]))].sort();
}

function populateFilters() {
  uniqueValues("category").forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.appendChild(opt);
  });

  // Keep level order sensible rather than alphabetical
  const levelOrder = ["Beginner", "Intermediate", "Advanced"];
  levelOrder
    .filter((lvl) => courses.some((c) => c.level === lvl))
    .forEach((lvl) => {
      const opt = document.createElement("option");
      opt.value = lvl;
      opt.textContent = lvl;
      levelFilter.appendChild(opt);
    });
}

function renderHeroStats() {
  const totalStudents = courses.reduce((sum, c) => sum + c.students_enrolled, 0);
  const stats = [
    { num: courses.length, label: "Courses" },
    { num: uniqueValues("category").length, label: "Categories" },
    { num: `${Math.round(totalStudents / 1000)}k+`, label: "Learners" }
  ];
  heroStats.innerHTML = stats
    .map(
      (s) => `
      <div>
        <span class="stat-num">${s.num}</span>
        <span class="stat-label">${s.label}</span>
      </div>`
    )
    .join("");
}

function courseCardHTML(course) {
  const colorVar = categoryColorVar[course.category] || "--accent";
  const shownSkills = course.skills_covered.slice(0, 3);
  const remaining = course.skills_covered.length - shownSkills.length;

  const skillsHTML =
    shownSkills.map((s) => `<li>${s}</li>`).join("") +
    (remaining > 0 ? `<li class="more">+${remaining} more</li>` : "");

  return `
    <article class="course-card" style="--cat-color:var(${colorVar})">
      <div class="card-stub">
        <span class="stub-id">${course.course_id}</span>
        <span class="stub-tag">${course.category}</span>
      </div>
      <div class="perf"></div>
      <div class="card-body">
        <h3 class="card-title">${course.course_name}</h3>
        <p class="card-instructor">${course.instructor_name}<span class="dot">·</span>${course.language}</p>
        <ul class="skill-list">${skillsHTML}</ul>
      </div>
      <div class="card-stats">
        <span>${course.duration}</span>
        <span class="rating">★ ${course.rating.toFixed(1)}</span>
        <span>${course.students_enrolled.toLocaleString("en-IN")} enrolled</span>
        <span>${course.level}</span>
        ${course.certificate_available ? "<span>🎓 Certificate</span>" : ""}
      </div>
      <div class="card-footer">
        <div class="price">
          ${currency(course.course_price)}
          <small>${course.sections} sections · ${course.assignments} assignments</small>
        </div>
        <button class="card-cta" type="button" data-id="${course.course_id}">View syllabus</button>
      </div>
    </article>
  `;
}

function getFilteredCourses() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const level = levelFilter.value;

  let result = courses.filter((c) => {
    const matchesQuery =
      !query ||
      c.course_name.toLowerCase().includes(query) ||
      c.instructor_name.toLowerCase().includes(query) ||
      c.skills_covered.some((s) => s.toLowerCase().includes(query));

    const matchesCategory = category === "all" || c.category === category;
    const matchesLevel = level === "all" || c.level === level;

    return matchesQuery && matchesCategory && matchesLevel;
  });

  switch (sortSelect.value) {
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;
    case "price-asc":
      result.sort((a, b) => a.course_price - b.course_price);
      break;
    case "price-desc":
      result.sort((a, b) => b.course_price - a.course_price);
      break;
    case "popular":
      result.sort((a, b) => b.students_enrolled - a.students_enrolled);
      break;
    default:
      break; // keep catalog order
  }

  return result;
}

function render() {
  const filtered = getFilteredCourses();

  grid.innerHTML = filtered.map(courseCardHTML).join("");
  emptyState.hidden = filtered.length !== 0;

  resultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${courses.length}</strong> courses`;
}

// Simple placeholder action for the CTA — wire this up to a real
// course detail page or modal when you have one.
grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".card-cta");
  if (!btn) return;
  const course = courses.find((c) => c.course_id === btn.dataset.id);
  if (course) {
    alert(`${course.course_name}\n\nThis is where you'd link to the full syllabus page for ${course.course_id}.`);
  }
});

[searchInput, categoryFilter, levelFilter, sortSelect].forEach((el) =>
  el.addEventListener("input", render)
);

clearFiltersBtn.addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  levelFilter.value = "all";
  sortSelect.value = "default";
  render();
});

populateFilters();
renderHeroStats();
render();