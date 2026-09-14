/* =========================================================
   SISTEMA ENDOCRINO INTERACTIVO
   MAPA HORMONAL
   ========================================================= */


/* =========================================================
   BASE DE DATOS DE HORMONAS
   ========================================================= */

const hormones = [

    {
        name: "TRH",
        fullName: "Hormona liberadora de tirotropina",
        origin: "Hipotálamo",
        target: "Adenohipófisis",
        type: "Hormona liberadora",
        function: "Estimula la secreción de TSH."
    },

    {
        name: "CRH",
        fullName: "Hormona liberadora de corticotropina",
        origin: "Hipotálamo",
        target: "Adenohipófisis",
        type: "Hormona liberadora",
        function: "Estimula la secreción de ACTH."
    },

    {
        name: "GnRH",
        fullName: "Hormona liberadora de gonadotropinas",
        origin: "Hipotálamo",
        target: "Adenohipófisis",
        type: "Hormona liberadora",
        function: "Estimula la secreción de LH y FSH."
    },

    {
        name: "GHRH",
        fullName: "Hormona liberadora de hormona de crecimiento",
        origin: "Hipotálamo",
        target: "Adenohipófisis",
        type: "Hormona liberadora",
        function: "Estimula la secreción de GH."
    },

    {
        name: "Somatostatina",
        fullName: "Somatostatina",
        origin: "Hipotálamo",
        target: "Adenohipófisis",
        type: "Hormona inhibidora",
        function: "Inhibe principalmente GH y TSH."
    },

    {
        name: "Dopamina",
        fullName: "Dopamina",
        origin: "Hipotálamo",
        target: "Adenohipófisis",
        type: "Hormona inhibidora",
        function: "Inhibe la secreción de prolactina."
    },

    {
        name: "GH",
        fullName: "Hormona del crecimiento",
        origin: "Adenohipófisis",
        target: "Hígado y tejidos",
        type: "Proteica",
        function: "Promueve crecimiento y síntesis proteica."
    },

    {
        name: "TSH",
        fullName: "Hormona estimulante de la tiroides",
        origin: "Adenohipófisis",
        target: "Tiroides",
        type: "Glucoproteína",
        function: "Estimula la síntesis y liberación de T3 y T4."
    },

    {
        name: "ACTH",
        fullName: "Hormona adrenocorticotrópica",
        origin: "Adenohipófisis",
        target: "Corteza suprarrenal",
        type: "Peptídica",
        function: "Estimula principalmente la producción de cortisol."
    },

    {
        name: "FSH",
        fullName: "Hormona foliculoestimulante",
        origin: "Adenohipófisis",
        target: "Ovarios / Testículos",
        type: "Glucoproteína",
        function: "Participa en la gametogénesis y función gonadal."
    },

    {
        name: "LH",
        fullName: "Hormona luteinizante",
        origin: "Adenohipófisis",
        target: "Ovarios / Testículos",
        type: "Glucoproteína",
        function: "Participa en ovulación y producción de testosterona."
    },

    {
        name: "Prolactina",
        fullName: "Prolactina",
        origin: "Adenohipófisis",
        target: "Glándula mamaria",
        type: "Proteica",
        function: "Estimula la producción de leche."
    },

    {
        name: "MSH",
        fullName: "Hormona estimulante de melanocitos",
        origin: "Adenohipófisis",
        target: "Melanocitos",
        type: "Peptídica",
        function: "Estimula la producción de melanina."
    },

    {
        name: "ADH",
        fullName: "Hormona antidiurética",
        origin: "Neurohipófisis",
        target: "Riñones",
        type: "Peptídica",
        function: "Favorece la reabsorción de agua."
    },

    {
        name: "Oxitocina",
        fullName: "Oxitocina",
        origin: "Neurohipófisis",
        target: "Útero / Glándula mamaria",
        type: "Peptídica",
        function: "Participa en contracción uterina y eyección de leche."
    },

    {
        name: "T3",
        fullName: "Triyodotironina",
        origin: "Tiroides",
        target: "Tejidos corporales",
        type: "Hormona tiroidea",
        function: "Aumenta el metabolismo celular."
    },

    {
        name: "T4",
        fullName: "Tiroxina",
        origin: "Tiroides",
        target: "Tejidos corporales",
        type: "Hormona tiroidea",
        function: "Regula metabolismo, crecimiento y desarrollo."
    },

    {
        name: "Calcitonina",
        fullName: "Calcitonina",
        origin: "Tiroides",
        target: "Hueso",
        type: "Peptídica",
        function: "Disminuye la concentración de calcio sanguíneo."
    },

    {
        name: "PTH",
        fullName: "Hormona paratiroidea",
        origin: "Paratiroides",
        target: "Hueso / Riñón",
        type: "Peptídica",
        function: "Aumenta el calcio sanguíneo."
    },

    {
        name: "Cortisol",
        fullName: "Cortisol",
        origin: "Corteza suprarrenal",
        target: "Múltiples tejidos",
        type: "Esteroidea",
        function: "Participa en respuesta al estrés y metabolismo."
    },

    {
        name: "Aldosterona",
        fullName: "Aldosterona",
        origin: "Corteza suprarrenal",
        target: "Riñones",
        type: "Esteroidea",
        function: "Favorece la retención de sodio y agua."
    },

    {
        name: "Andrógenos suprarrenales",
        fullName: "Andrógenos suprarrenales",
        origin: "Corteza suprarrenal",
        target: "Tejidos periféricos",
        type: "Esteroidea",
        function: "Contribuyen a características sexuales y metabolismo."
    },

    {
        name: "Adrenalina",
        fullName: "Adrenalina",
        origin: "Médula suprarrenal",
        target: "Corazón / Vasos / Pulmones",
        type: "Catecolamina",
        function: "Respuesta rápida de lucha o huida."
    },

    {
        name: "Noradrenalina",
        fullName: "Noradrenalina",
        origin: "Médula suprarrenal",
        target: "Vasos sanguíneos y corazón",
        type: "Catecolamina",
        function: "Aumenta presión arterial y respuesta simpática."
    },

    {
        name: "Insulina",
        fullName: "Insulina",
        origin: "Páncreas",
        target: "Hígado / Músculo / Tejido adiposo",
        type: "Peptídica",
        function: "Disminuye la glucosa sanguínea."
    },

    {
        name: "Glucagón",
        fullName: "Glucagón",
        origin: "Páncreas",
        target: "Hígado",
        type: "Peptídica",
        function: "Aumenta la glucosa sanguínea."
    },

    {
        name: "Somatostatina pancreática",
        fullName: "Somatostatina",
        origin: "Páncreas",
        target: "Páncreas y tubo digestivo",
        type: "Peptídica",
        function: "Modula la secreción de insulina y glucagón."
    },

    {
        name: "Polipéptido pancreático",
        fullName: "Polipéptido pancreático",
        origin: "Páncreas",
        target: "Tubo digestivo",
        type: "Peptídica",
        function: "Participa en la regulación de secreciones pancreáticas."
    },

    {
        name: "Melatonina",
        fullName: "Melatonina",
        origin: "Glándula pineal",
        target: "Sistema nervioso central",
        type: "Indolamina",
        function: "Regula ritmos circadianos y sueño."
    },

    {
        name: "Estrógenos",
        fullName: "Estrógenos",
        origin: "Ovarios",
        target: "Útero / Mama / Hueso",
        type: "Esteroidea",
        function: "Participan en desarrollo sexual y reproducción."
    },

    {
        name: "Progesterona",
        fullName: "Progesterona",
        origin: "Ovarios",
        target: "Útero / Mama",
        type: "Esteroidea",
        function: "Prepara y mantiene el endometrio."
    },

    {
        name: "Inhibina",
        fullName: "Inhibina",
        origin: "Ovarios / Testículos",
        target: "Adenohipófisis",
        type: "Proteica",
        function: "Inhibe principalmente la secreción de FSH."
    },

    {
        name: "Testosterona",
        fullName: "Testosterona",
        origin: "Testículos",
        target: "Tejidos sexuales",
        type: "Esteroidea",
        function: "Desarrollo sexual masculino y espermatogénesis."
    },

    {
        name: "AMH",
        fullName: "Hormona antimülleriana",
        origin: "Testículos / Ovarios",
        target: "Tejidos reproductivos",
        type: "Proteica",
        function: "Participa en diferenciación sexual y función ovárica."
    },

    {
        name: "Eritropoyetina",
        fullName: "Eritropoyetina",
        origin: "Riñón",
        target: "Médula ósea",
        type: "Glucoproteína",
        function: "Estimula la producción de eritrocitos."
    },

    {
        name: "Renina",
        fullName: "Renina",
        origin: "Riñón",
        target: "Sistema renina-angiotensina",
        type: "Enzima hormonal",
        function: "Inicia el sistema renina-angiotensina-aldosterona."
    },

    {
        name: "Calcitriol",
        fullName: "Calcitriol",
        origin: "Riñón",
        target: "Intestino / Hueso / Riñón",
        type: "Hormona esteroidea",
        function: "Aumenta la absorción intestinal de calcio y fosfato."
    },

    {
        name: "Gastrina",
        fullName: "Gastrina",
        origin: "Estómago",
        target: "Estómago",
        type: "Peptídica",
        function: "Estimula la secreción de ácido gástrico."
    },

    {
        name: "Secretina",
        fullName: "Secretina",
        origin: "Duodeno",
        target: "Páncreas",
        type: "Peptídica",
        function: "Estimula la secreción de bicarbonato pancreático."
    },

    {
        name: "Colecistoquinina",
        fullName: "Colecistoquinina",
        origin: "Duodeno",
        target: "Vesícula biliar / Páncreas",
        type: "Peptídica",
        function: "Estimula contracción de la vesícula y secreción pancreática."
    },

    {
        name: "Grelina",
        fullName: "Grelina",
        origin: "Estómago",
        target: "Hipotálamo / Adenohipófisis",
        type: "Peptídica",
        function: "Estimula el apetito y favorece secreción de GH."
    },

    {
        name: "Leptina",
        fullName: "Leptina",
        origin: "Tejido adiposo",
        target: "Hipotálamo",
        type: "Proteica",
        function: "Participa en regulación del apetito y balance energético."
    },

    {
        name: "IGF-1",
        fullName: "Factor de crecimiento similar a la insulina 1",
        origin: "Hígado",
        target: "Huesos y tejidos",
        type: "Factor de crecimiento",
        function: "Media muchos efectos del crecimiento inducidos por GH."
    },

    {
        name: "HCG",
        fullName: "Gonadotropina coriónica humana",
        origin: "Placenta",
        target: "Ovario",
        type: "Glucoproteína",
        function: "Mantiene el cuerpo lúteo durante el embarazo."
    }

];


/* =========================================================
   VARIABLES
   ========================================================= */

let currentIndex = 0;
let playing = false;
let interval = null;
let animationFrame = null;


/* =========================================================
   ELEMENTOS DOM
   ========================================================= */

const hormoneList = document.getElementById("hormoneList");
const hormoneName = document.getElementById("hormoneName");
const hormoneOrigin = document.getElementById("hormoneOrigin");
const hormoneTarget = document.getElementById("hormoneTarget");
const hormoneFunction = document.getElementById("hormoneFunction");
const hormoneType = document.getElementById("hormoneType");

const currentHormone = document.getElementById("currentHormone");
const totalHormones = document.getElementById("totalHormones");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const searchInput = document.getElementById("searchInput");

const route = document.getElementById("hormoneRoute");
const particle = document.getElementById("routeParticle");
const humanBody = document.getElementById("humanBody");

const feedbackRoute = document.getElementById("feedbackRoute");
const routeSvg = document.getElementById("routeSvg");


/* =========================================================
   TOTAL DE HORMONAS
   ========================================================= */

if (totalHormones) {
    totalHormones.textContent = hormones.length;
}


/* =========================================================
   NORMALIZAR TEXTO
   ========================================================= */

function normalizeText(text) {

    if (!text) return "";

    return text
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}


/* =========================================================
   CREAR LISTA DE HORMONAS
   ========================================================= */

function renderHormoneList() {

    if (!hormoneList) return;

    hormoneList.innerHTML = "";

    hormones.forEach((hormone, index) => {

        const item = document.createElement("div");

        item.className = "hormone-item";
        item.textContent = `${index + 1}. ${hormone.name}`;
        item.dataset.index = index;

        item.addEventListener("click", () => {

            currentIndex = index;

            showHormone();

        });

        hormoneList.appendChild(item);

    });
}


/* =========================================================
   MOSTRAR HORMONA
   ========================================================= */

function showHormone() {

    const hormone = hormones[currentIndex];

    if (!hormone) return;


    if (hormoneName) {
        hormoneName.textContent = hormone.name;
    }

    if (hormoneOrigin) {
        hormoneOrigin.textContent =
            `${hormone.fullName} · ${hormone.origin}`;
    }

    if (hormoneTarget) {
        hormoneTarget.textContent = hormone.target;
    }

    if (hormoneFunction) {
        hormoneFunction.textContent = hormone.function;
    }

    if (hormoneType) {
        hormoneType.textContent = hormone.type;
    }

    if (currentHormone) {
        currentHormone.textContent = currentIndex + 1;
    }

    if (progressText) {
        progressText.textContent =
            `${currentIndex + 1} / ${hormones.length}`;
    }

    if (progressBar) {
        progressBar.style.width =
            `${((currentIndex + 1) / hormones.length) * 100}%`;
    }


    updateActiveItem();

    highlightOrgans(hormone);

    animateRoute(hormone);
}


/* =========================================================
   ELEMENTO ACTIVO
   ========================================================= */

function updateActiveItem() {

    document.querySelectorAll(".hormone-item").forEach(item => {

        item.classList.remove("active");

    });


    const active = document.querySelector(
        `.hormone-item[data-index="${currentIndex}"]`
    );


    if (active) {

        active.classList.add("active");

        active.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }
}


/* =========================================================
   BUSCADOR
   ========================================================= */

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const query = normalizeText(searchInput.value);

        document.querySelectorAll(".hormone-item").forEach(item => {

            const text = normalizeText(item.textContent);

            item.style.display =
                text.includes(query) ? "block" : "none";

        });

    });

}


/* =========================================================
   SIGUIENTE
   ========================================================= */

function nextHormone() {

    currentIndex++;

    if (currentIndex >= hormones.length) {
        currentIndex = 0;
    }

    showHormone();
}


/* =========================================================
   ANTERIOR
   ========================================================= */

function previousHormone() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = hormones.length - 1;
    }

    showHormone();
}


/* =========================================================
   PLAY
   ========================================================= */

function playAnimation() {

    if (playing) return;

    playing = true;

    interval = setInterval(() => {

        nextHormone();

    }, 3500);
}


/* =========================================================
   PAUSE
   ========================================================= */

function pauseAnimation() {

    playing = false;

    clearInterval(interval);

    interval = null;
}


/* =========================================================
   BOTONES
   ========================================================= */

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");


if (nextBtn) {
    nextBtn.addEventListener("click", nextHormone);
}

if (prevBtn) {
    prevBtn.addEventListener("click", previousHormone);
}

if (playBtn) {
    playBtn.addEventListener("click", playAnimation);
}

if (pauseBtn) {
    pauseBtn.addEventListener("click", pauseAnimation);
}


/* =========================================================
   OBTENER TODOS LOS NOMBRES DE UN TARGET
   ========================================================= */

function getTargetNames(target) {

    if (!target) return [];

    const normalized = normalizeText(target);

    const names = normalized
        .split(/\s*\/\s*|\s+y\s+|\s*,\s*|\s+\/\s+/)
        .map(x => x.trim())
        .filter(Boolean);

    return names;
}


/* =========================================================
   ALIAS DE ÓRGANOS
   ========================================================= */

const organAliases = {

    "adenohipofisis": [
        "adenohipofisis",
        "hipofisis"
    ],

    "neurohipofisis": [
        "neurohipofisis",
        "hipofisis"
    ],

    "hipofisis": [
        "hipofisis"
    ],

    "hipotalamo": [
        "hipotalamo"
    ],

    "glandula pineal": [
        "pineal"
    ],

    "pineal": [
        "pineal"
    ],

    "tiroides": [
        "tiroides"
    ],

    "paratiroides": [
        "paratiroides"
    ],

    "corteza suprarrenal": [
        "corteza suprarrenal",
        "suprarrenal"
    ],

    "medula suprarrenal": [
        "medula suprarrenal",
        "suprarrenal"
    ],

    "suprarrenal": [
        "suprarrenal"
    ],

    "pancreas": [
        "pancreas"
    ],

    "higado": [
        "higado"
    ],

    "rinones": [
        "rinon"
    ],

    "rinon": [
        "rinon"
    ],

    "estomago": [
        "estomago"
    ],

    "duodeno": [
        "duodeno"
    ],

    "ovarios": [
        "ovario"
    ],

    "ovario": [
        "ovario"
    ],

    "testiculos": [
        "testiculo"
    ],

    "testiculo": [
        "testiculo"
    ],

    "tejido adiposo": [
        "tejido adiposo"
    ],

    "adiposo": [
        "tejido adiposo"
    ],

    "placenta": [
        "placenta"
    ],

    "timo": [
        "timo"
    ],

    "hueso": [
        "hueso"
    ],

    "huesos": [
        "hueso"
    ],

    "musculo": [
        "musculo"
    ],

    "corazon": [
        "corazon"
    ],

    "vasos": [
        "vasos"
    ],

    "pulmones": [
        "pulmon"
    ],

    "utero": [
        "utero"
    ],

    "mama": [
        "mama",
        "glandula mamaria"
    ]

};


/* =========================================================
   OBTENER ÓRGANOS DEL DOM
   ========================================================= */

function getAllOrganElements() {

    return Array.from(
        document.querySelectorAll(".organ")
    );

}


/* =========================================================
   ENCONTRAR ÓRGANO
   ========================================================= */

function findOrganElement(name) {

    if (!name) return null;

    const normalized = normalizeText(name);

    const organs = getAllOrganElements();


    /* ---------------------------------------------
       1. COINCIDENCIA EXACTA EN data-organ
       --------------------------------------------- */

    for (const organ of organs) {

        const organName =
            normalizeText(organ.dataset.organ);

        if (organName === normalized) {

            return organ;

        }

    }


    /* ---------------------------------------------
       2. ALIAS
       --------------------------------------------- */

    for (const key in organAliases) {

        const keyNormalized =
            normalizeText(key);

        if (
            normalized === keyNormalized ||
            normalized.includes(keyNormalized) ||
            keyNormalized.includes(normalized)
        ) {

            const aliases =
                organAliases[key];

            for (const alias of aliases) {

                const aliasNormalized =
                    normalizeText(alias);

                for (const organ of organs) {

                    const organName =
                        normalizeText(organ.dataset.organ);

                    if (
                        organName.includes(aliasNormalized) ||
                        aliasNormalized.includes(organName)
                    ) {

                        return organ;

                    }

                }

            }

        }

    }


    /* ---------------------------------------------
       3. data-adenohypophysis
       --------------------------------------------- */

    for (const organ of organs) {

        const adeno =
            normalizeText(
                organ.dataset.adenohypophysis
            );

        if (
            adeno &&
            (
                normalized.includes(adeno) ||
                adeno.includes(normalized)
            )
        ) {

            return organ;

        }

    }


    /* ---------------------------------------------
       4. data-neurohypophysis
       --------------------------------------------- */

    for (const organ of organs) {

        const neuro =
            normalizeText(
                organ.dataset.neurohypophysis
            );

        if (
            neuro &&
            (
                normalized.includes(neuro) ||
                neuro.includes(normalized)
            )
        ) {

            return organ;

        }

    }


    /* ---------------------------------------------
       5. data-medulla
       --------------------------------------------- */

    for (const organ of organs) {

        const medulla =
            normalizeText(
                organ.dataset.medulla
            );

        if (
            medulla &&
            (
                normalized.includes(medulla) ||
                medulla.includes(normalized)
            )
        ) {

            return organ;

        }

    }


    /* ---------------------------------------------
       6. COINCIDENCIA PARCIAL
       --------------------------------------------- */

    for (const organ of organs) {

        const organName =
            normalizeText(organ.dataset.organ);

        if (!organName) continue;

        if (
            normalized.includes(organName) ||
            organName.includes(normalized)
        ) {

            return organ;

        }

    }


    /* ---------------------------------------------
       IMPORTANTE:
       NO HACEMOS FALLBACK AL HIPOTÁLAMO
       --------------------------------------------- */

    return null;
}


/* =========================================================
   ENCONTRAR TODOS LOS ÓRGANOS POSIBLES
   ========================================================= */

function findAllOrganElements(target) {

    if (!target) return [];

    const normalized = normalizeText(target);

    const found = [];

    const targetNames = getTargetNames(target);


    /* ---------------------------------------------
       SI EL TARGET CONTIENE /
       --------------------------------------------- */

    targetNames.forEach(name => {

        const organ = findOrganElement(name);

        if (organ && !found.includes(organ)) {

            found.push(organ);

        }

    });


    /* ---------------------------------------------
       CASOS ESPECIALES
       --------------------------------------------- */

    if (
        normalized.includes("ovarios") ||
        normalized.includes("testiculos")
    ) {

        const ovarios =
            findOrganElement("ovarios");

        const testiculos =
            findOrganElement("testiculos");

        if (
            ovarios &&
            !found.includes(ovarios)
        ) {
            found.push(ovarios);
        }

        if (
            testiculos &&
            !found.includes(testiculos)
        ) {
            found.push(testiculos);
        }

    }


    return found;
}


/* =========================================================
   RESALTAR ÓRGANOS
   ========================================================= */

function highlightOrgans(hormone) {

    document
        .querySelectorAll(".organ")
        .forEach(organ => {

            organ.classList.remove(
                "origin",
                "target"
            );

        });


    const originElements =
        findAllOrganElements(hormone.origin);

    const targetElements =
        findAllOrganElements(hormone.target);


    /* ---------------------------------------------
       ORIGEN = ROJO
       --------------------------------------------- */

    originElements.forEach(organ => {

        organ.classList.add("origin");

    });


    /* ---------------------------------------------
       DESTINO = BLANCO
       --------------------------------------------- */

    targetElements.forEach(organ => {

        if (originElements.includes(organ)) {

            organ.classList.add(
                "origin",
                "target"
            );

        } else {

            organ.classList.add("target");

        }

    });

}


/* =========================================================
   COORDENADAS DE UN ELEMENTO
   ========================================================= */

function getElementCenter(element) {

    if (!element || !humanBody) {
        return null;
    }

    const bodyRect =
        humanBody.getBoundingClientRect();

    const rect =
        element.getBoundingClientRect();


    return {

        x:
            rect.left +
            rect.width / 2 -
            bodyRect.left,

        y:
            rect.top +
            rect.height / 2 -
            bodyRect.top

    };

}


/* =========================================================
   CONVERTIR COORDENADA AL VIEWBOX
   ========================================================= */

function bodyPointToSvg(point) {

    if (!routeSvg || !humanBody || !point) {
        return null;
    }

    const bodyRect =
        humanBody.getBoundingClientRect();

    const viewBox =
        routeSvg.viewBox.baseVal;


    return {

        x:
            (point.x / bodyRect.width) *
            viewBox.width,

        y:
            (point.y / bodyRect.height) *
            viewBox.height

    };

}


/* =========================================================
   CREAR CURVA ENTRE DOS PUNTOS
   ========================================================= */

function createPath(start, end) {

    if (!start || !end) return "";


    const dx =
        end.x - start.x;

    const dy =
        end.y - start.y;


    /* ---------------------------------------------
       MISMO PUNTO
       --------------------------------------------- */

    if (
        Math.abs(dx) < 4 &&
        Math.abs(dy) < 4
    ) {

        return `
            M ${start.x} ${start.y}

            C
            ${start.x - 35} ${start.y - 45},
            ${start.x + 35} ${start.y - 45},
            ${start.x} ${start.y}
        `;

    }


    /* ---------------------------------------------
       CURVA VERTICAL
       --------------------------------------------- */

    if (Math.abs(dy) >= Math.abs(dx)) {

        const curve =
            Math.min(
                Math.max(
                    Math.abs(dy) * 0.30,
                    25
                ),
                120
            );


        return `
            M ${start.x} ${start.y}

            C
            ${start.x} ${start.y + curve},
            ${end.x} ${end.y - curve},
            ${end.x} ${end.y}
        `;

    }


    /* ---------------------------------------------
       CURVA HORIZONTAL
       --------------------------------------------- */

    const curve =
        Math.min(
            Math.max(
                Math.abs(dx) * 0.30,
                25
            ),
            120
        );


    return `
        M ${start.x} ${start.y}

        C
        ${start.x + (dx > 0 ? curve : -curve)} ${start.y},
        ${end.x - (dx > 0 ? curve : -curve)} ${end.y},
        ${end.x} ${end.y}
    `;
}


/* =========================================================
   ANIMAR PARTÍCULA SOBRE LA RUTA
   ========================================================= */

function animateParticle(path) {

    if (!particle || !path) return;


    if (animationFrame) {

        cancelAnimationFrame(
            animationFrame
        );

        animationFrame = null;

    }


    let length;

    try {

        length =
            path.getTotalLength();

    } catch (error) {

        return;

    }


    if (!length || !isFinite(length)) {
        return;
    }


    const duration = 1800;

    const startTime =
        performance.now();


    particle.classList.add("active");


    function moveParticle(now) {

        const elapsed =
            now - startTime;

        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        const point =
            path.getPointAtLength(
                length * progress
            );


        particle.setAttribute(
            "cx",
            point.x
        );

        particle.setAttribute(
            "cy",
            point.y
        );


        if (progress < 1) {

            animationFrame =
                requestAnimationFrame(
                    moveParticle
                );

        } else {

            /* ---------------------------------
               VOLVER A COMENZAR
               --------------------------------- */

            setTimeout(() => {

                if (
                    route &&
                    route.classList.contains("visible")
                ) {

                    animateParticle(path);

                }

            }, 250);

        }

    }


    animationFrame =
        requestAnimationFrame(
            moveParticle
        );
}


/* =========================================================
   ANIMACIÓN PRINCIPAL DE RUTA
   ========================================================= */

function animateRoute(hormone) {

    if (!route || !humanBody || !routeSvg) {
        return;
    }


    /* ---------------------------------------------
       LIMPIAR ANIMACIÓN ANTERIOR
       --------------------------------------------- */

    route.classList.remove("visible");

    if (particle) {
        particle.classList.remove("active");
    }


    if (animationFrame) {

        cancelAnimationFrame(
            animationFrame
        );

        animationFrame = null;

    }


    /* ---------------------------------------------
       BUSCAR ORIGEN
       --------------------------------------------- */

    const originEl =
        findOrganElement(hormone.origin);


    /* ---------------------------------------------
       BUSCAR DESTINOS
       --------------------------------------------- */

    const targetEls =
        findAllOrganElements(hormone.target);


    /* ---------------------------------------------
       SI NO HAY ORIGEN
       --------------------------------------------- */

    if (!originEl) {

        console.warn(
            `No se encontró el origen de ${hormone.name}:`,
            hormone.origin
        );

        route.setAttribute("d", "");

        return;
    }


    /* ---------------------------------------------
       SI NO HAY DESTINO
       --------------------------------------------- */

    if (!targetEls.length) {

        console.warn(
            `No se encontró el destino de ${hormone.name}:`,
            hormone.target
        );

        route.setAttribute("d", "");

        return;
    }


    /* ---------------------------------------------
       CENTRO DEL ORIGEN
       --------------------------------------------- */

    const originPoint =
        getElementCenter(originEl);


    const start =
        bodyPointToSvg(originPoint);


    if (!start) return;


    /* =================================================
       SI EXISTE UN SOLO DESTINO
       ================================================= */

    if (targetEls.length === 1) {

        const targetPoint =
            getElementCenter(
                targetEls[0]
            );

        const end =
            bodyPointToSvg(
                targetPoint
            );


        if (!end) return;


        const pathData =
            createPath(
                start,
                end
            );


        route.setAttribute(
            "d",
            pathData
        );


        /* ---------------------------------------------
           POSICIÓN INICIAL DE PARTÍCULA
           --------------------------------------------- */

        if (particle) {

            particle.setAttribute(
                "cx",
                start.x
            );

            particle.setAttribute(
                "cy",
                start.y
            );

        }


        /* ---------------------------------------------
           MOSTRAR
           --------------------------------------------- */

        setTimeout(() => {

            route.classList.add("visible");

            animateParticle(route);

        }, 80);


        return;
    }


    /* =================================================
       MÚLTIPLES DESTINOS
       ================================================= */

    let completePath = "";

    targetEls.forEach((targetEl, index) => {

        const targetPoint =
            getElementCenter(
                targetEl
            );

        const end =
            bodyPointToSvg(
                targetPoint
            );


        if (!end) return;


        /* -----------------------------------------
           Primera ruta:
           origen → primer destino
           ----------------------------------------- */

        if (index === 0) {

            completePath +=
                createPath(
                    start,
                    end
                );

        } else {

            /* -------------------------------------
               Las siguientes salen desde el origen
               ------------------------------------- */

            completePath +=
                createPath(
                    start,
                    end
                );

        }

    });


    route.setAttribute(
        "d",
        completePath
    );


    if (particle) {

        particle.setAttribute(
            "cx",
            start.x
        );

        particle.setAttribute(
            "cy",
            start.y
        );

    }


    setTimeout(() => {

        route.classList.add("visible");

        animateParticle(route);

    }, 80);

}


/* =========================================================
   CLICK DIRECTO SOBRE ÓRGANOS
   ========================================================= */

document
    .querySelectorAll(".organ")
    .forEach(organ => {

        organ.addEventListener(
            "click",
            () => {

                const organName =
                    organ.dataset.organ || "";

                const normalizedOrgan =
                    normalizeText(
                        organName
                    );


                const index =
                    hormones.findIndex(
                        hormone => {

                            return (
                                normalizeText(
                                    hormone.origin
                                ).includes(
                                    normalizedOrgan
                                ) ||
                                normalizedOrgan.includes(
                                    normalizeText(
                                        hormone.origin
                                    )
                                )
                            );

                        }
                    );


                if (index !== -1) {

                    currentIndex = index;

                    showHormone();

                }

            }
        );

    });


/* =========================================================
   TECLADO
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "ArrowRight") {

            nextHormone();

        }


        if (event.key === "ArrowLeft") {

            previousHormone();

        }


        if (event.key === " ") {

            event.preventDefault();


            if (playing) {

                pauseAnimation();

            } else {

                playAnimation();

            }

        }

    }
);


/* =========================================================
   REDIBUJAR RUTA AL CAMBIAR TAMAÑO
   ========================================================= */

window.addEventListener(
    "resize",
    () => {

        const hormone =
            hormones[currentIndex];

        if (!hormone) return;

        animateRoute(hormone);

    }
);


/* =========================================================
   DETENER ANIMACIÓN AL SALIR
   ========================================================= */

window.addEventListener(
    "beforeunload",
    () => {

        clearInterval(interval);

        if (animationFrame) {

            cancelAnimationFrame(
                animationFrame
            );

        }

    }
);


/* =========================================================
   INICIO
   ========================================================= */

renderHormoneList();

showHormone();