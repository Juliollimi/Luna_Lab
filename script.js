const laboratory = {
  whatsappNumber: "593998201218",
  categories: [
    {
      name: "Hematología",
      services: [
        "Hemograma completo", "Hemoglobina", "Hematocrito", "Recuento de eritrocitos",
        "Recuento de leucocitos", "Fórmula leucocitaria", "Plaquetas", "VSG",
        "Reticulocitos", "Grupo sanguíneo y factor Rh", "Coombs directo e indirecto",
        "Frotis de sangre periférica",
      ],
    },
    {
      name: "Química sanguínea",
      services: [
        "Glucosa", "Urea", "Creatinina", "Ácido úrico", "Colesterol total", "HDL", "LDL",
        "Triglicéridos", "Proteínas totales", "Albúmina", "Bilirrubina total/directa/indirecta",
        "TGO/AST", "TGP/ALT", "Fosfatasa alcalina", "GGT", "Calcio", "Fósforo", "Magnesio",
        "Sodio", "Potasio", "Cloro",
      ],
    },
    {
      name: "Perfiles de laboratorio",
      services: [
        "Perfil lipídico", "Perfil hepático", "Perfil renal", "Perfil cardíaco", "Perfil pancreático",
        "Perfil metabólico", "Perfil preoperatorio", "Perfil de control general", "Perfil para diabetes",
      ],
    },
    {
      name: "Hormonas y endocrinología",
      services: [
        "TSH", "T3", "T4", "T4 libre", "FSH", "LH", "Estradiol", "Progesterona", "Prolactina",
        "Testosterona", "Cortisol", "Insulina", "Hormona de crecimiento", "β-hCG",
      ],
    },
    {
      name: "Pruebas de embarazo",
      services: [
        "Prueba de embarazo en sangre", "β-hCG cualitativa", "β-hCG cuantitativa",
        "Prueba de embarazo en orina",
      ],
    },
    {
      name: "Inmunología y serología",
      services: [
        "Antígeno/anticuerpos", "Pruebas para hepatitis", "VIH", "Sífilis", "Dengue", "Toxoplasmosis",
        "Rubéola", "Citomegalovirus", "Helicobacter pylori", "COVID-19",
        "Otras pruebas infecciosas según disponibilidad",
      ],
    },
    {
      name: "Microbiología",
      services: [
        "Urocultivo", "Coprocultivo", "Cultivo de secreciones", "Cultivo vaginal", "Cultivo faríngeo",
        "Cultivo de heridas", "Cultivo de otros tipos de muestras", "Antibiograma",
      ],
    },
    {
      name: "Uroanálisis",
      services: [
        "Examen general de orina", "Sedimento urinario", "Densidad", "pH", "Proteínas", "Glucosa",
        "Cetonas", "Sangre", "Leucocitos", "Nitritos", "Urobilinógeno", "Bilirrubina",
      ],
    },
    {
      name: "Coprología y parasitología",
      services: [
        "Examen general de heces", "Coproparasitario", "Sangre oculta en heces",
        "Investigación de parásitos", "Giardia", "Amebas", "Otros estudios parasitológicos",
      ],
    },
    {
      name: "Coagulación",
      services: [
        "Tiempo de protrombina (TP)", "INR", "Tiempo parcial de tromboplastina (TTP)", "Fibrinógeno",
        "Dímero D", "Tiempo de sangría, según disponibilidad",
      ],
    },
    {
      name: "Vitaminas y minerales",
      services: [
        "Vitamina D", "Vitamina B12", "Ácido fólico", "Hierro", "Ferritina", "Transferrina", "Calcio",
        "Magnesio", "Fósforo",
      ],
    },
    {
      name: "Marcadores tumorales",
      services: ["PSA", "PSA libre", "CEA", "CA 125", "CA 15-3", "CA 19-9", "AFP", "Otros marcadores según disponibilidad"],
    },
    {
      name: "Pruebas infecciosas",
      services: [
        "VIH", "Hepatitis B", "Hepatitis C", "Sífilis", "Dengue", "Toxoplasmosis", "Rubéola",
        "Citomegalovirus", "Helicobacter pylori", "Influenza", "COVID-19",
        "Otras pruebas según catálogo del laboratorio",
      ],
    },
    {
      name: "Pruebas ginecológicas",
      services: [
        "Prueba de embarazo", "Perfil hormonal femenino", "Estradiol", "Progesterona", "FSH", "LH",
        "Prolactina", "Pruebas para infecciones vaginales", "Análisis de secreción vaginal",
        "Otros estudios hormonales",
      ],
    },
    {
      name: "Pruebas de fertilidad",
      services: [
        "Perfil hormonal", "FSH", "LH", "Estradiol", "Progesterona", "Prolactina", "Testosterona",
        "Estudios relacionados con fertilidad, según disponibilidad",
      ],
    },
    {
      name: "Pruebas de alergia",
      services: ["IgE total", "IgE específica", "Paneles de alergias, si están disponibles"],
    },
    {
      name: "Pruebas especiales",
      services: [
        "Hemoglobina glicosilada (HbA1c)", "Insulina", "Péptido C", "Hormonas especiales",
        "Marcadores inmunológicos", "Estudios metabólicos", "Pruebas moleculares/PCR, si están disponibles",
      ],
    },
    {
      name: "Toma y manejo de muestras",
      services: [
        "Toma de sangre", "Recepción de muestras", "Toma de muestras de orina", "Recepción de muestras de heces",
        "Toma de secreciones", "Otras muestras biológicas",
      ],
    },
    {
      name: "Servicios complementarios",
      services: [
        "Entrega de resultados físicos", "Resultados digitales", "Atención particular",
        "Convenios empresariales", "Paquetes de exámenes", "Perfiles preventivos",
        "Toma de muestras a domicilio",
      ],
    },
  ],
};

const serviceGrid = document.querySelector("#service-grid");
const categoryFilters = document.querySelector("#category-filters");
const serviceSearch = document.querySelector("#service-search");
const serviceCount = document.querySelector("#service-count");
const emptyState = document.querySelector("#empty-state");

let activeCategory = "Todos";

function createContactLink(serviceName) {
  const message = `Hola, LunaLab. Me gustaría recibir información sobre: ${serviceName}.`;
  return `https://wa.me/${laboratory.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function renderFilters() {
  const names = ["Todos", ...laboratory.categories.map((category) => category.name)];
  categoryFilters.innerHTML = names
    .map((name) => `
      <button class="filter-button" type="button" data-category="${name}" aria-pressed="${name === activeCategory}">
        ${name}
      </button>
    `)
    .join("");
}

function createServiceCard(category, index, query) {
  const normalizedQuery = query.trim().toLocaleLowerCase("es");
  const services = category.services.filter((service) => service.toLocaleLowerCase("es").includes(normalizedQuery));
  if (services.length === 0 && !category.name.toLocaleLowerCase("es").includes(normalizedQuery)) return "";

  const visibleServices = services.length > 0 ? services : category.services;
  const serviceItems = visibleServices
    .map((service) => `
      <li class="service-item">
        <span>${service}</span>
        <button class="item-contact" type="button" data-service="${service}">Solicitar</button>
      </li>
    `)
    .join("");

  return `
    <article class="service-card">
      <div class="card-topline">
        <span class="card-category">${category.name}</span>
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3>${category.name}</h3>
      <ul class="service-list">${serviceItems}</ul>
    </article>
  `;
}

function renderServices() {
  const query = serviceSearch.value.trim();
  const categories = laboratory.categories.filter((category) => {
    const matchesCategory = activeCategory === "Todos" || category.name === activeCategory;
    const matchesQuery = !query
      || category.name.toLocaleLowerCase("es").includes(query.toLocaleLowerCase("es"))
      || category.services.some((service) => service.toLocaleLowerCase("es").includes(query.toLocaleLowerCase("es")));
    return matchesCategory && matchesQuery;
  });

  serviceGrid.innerHTML = categories.map((category) =>
    createServiceCard(category, laboratory.categories.indexOf(category), query),
  ).join("");

  const matches = categories.reduce((total, category) => {
    if (!query || category.name.toLocaleLowerCase("es").includes(query.toLocaleLowerCase("es"))) {
      return total + category.services.length;
    }
    return total + category.services.filter((service) => service.toLocaleLowerCase("es").includes(query.toLocaleLowerCase("es"))).length;
  }, 0);

  serviceCount.textContent = `${matches} ${matches === 1 ? "servicio" : "servicios"}`;
  emptyState.hidden = categories.length !== 0;
}

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderServices();
});

serviceGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-service]");
  if (!button) return;
  window.open(createContactLink(button.dataset.service), "_blank", "noopener,noreferrer");
});

serviceSearch.addEventListener("input", renderServices);

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== serviceSearch) {
    event.preventDefault();
    serviceSearch.focus();
  }
});

renderFilters();
renderServices();