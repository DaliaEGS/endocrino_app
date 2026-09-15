/* =========================================================
   SISTEMA ENDOCRINO INTERACTIVO
   MAPA HORMONAL
   JAVASCRIPT COMPLETO
   ========================================================= */


/* =========================================================
   BASE DE DATOS DE HORMONAS
   ========================================================= */

const hormones = [

    /* =========================
       HIPOTÁLAMO
       ========================= */

    {
        name: "TRH",
        fullName: "Hormona liberadora de tirotropina",
        origin: "Hipotálamo",
        target: "Adenohipófisis",
        type: "Hormona liberadora",
        function: "Estimula la secreción de TSH.",
        axis: "Eje hipotálamo-hipófisis-tiroides"
    },

    {
        name: "CRH",
        fullName: "Hormona liberadora de corticotropina",
        origin: "Hipotálamo",
        target: "Adenohipófisis",
        type: "Hormona liberadora",
        function: "Estimula la secreción de ACTH.",
        axis: "Eje hipotálamo-hipófisis-suprarrenal"
    },

    {
        name: "GnRH",
        fullName: "Hormona liberadora de gonadotropinas",
        origin: "Hipotálamo",
        target: "Adenohipófisis",
        type: "Hormona liberadora",
        function: "Estimula la secreción de LH y FSH.",
        axis: "Eje hipotálamo-hipófisis-gónadas"
    },

    {
        name: "GHRH",
        fullName: "Hormona liberadora de hormona de crecimiento",
        origin: "Hipotálamo",
        target: "Adenohipófisis",
        type: "Hormona liberadora",
        function: "Estimula la secreción de GH.",
        axis: "Eje GH-IGF-1"
    },

    {
        name: "Somatostatina",
        fullName: "Somatostatina hipotalámica",
        origin: "Hipotálamo",
        target: "Adenohipófisis",
        type: "Hormona inhibidora",
        function: "Inhibe principalmente la secreción de GH y TSH.",
        axis: "Eje GH-IGF-1"
    },

    {
        name: "Dopamina",
        fullName: "Dopamina hipotalámica",
        origin: "Hipotálamo",
        target: "Adenohipófisis",
        type: "Hormona inhibidora",
        function: "Inhibe principalmente la secreción de prolactina.",
        axis: "Eje prolactina"
    },


    /* =========================
       ADENOHIPÓFISIS
       ========================= */

    {
        name: "GH",
        fullName: "Hormona del crecimiento",
        origin: "Adenohipófisis",
        target: "Hígado y tejidos",
        type: "Proteica",
        function: "Promueve crecimiento y síntesis proteica.",
        axis: "Eje GH-IGF-1"
    },

    {
        name: "TSH",
        fullName: "Hormona estimulante de la tiroides",
        origin: "Adenohipófisis",
        target: "Tiroides",
        type: "Glucoproteína",
        function: "Estimula la síntesis y liberación de T3 y T4.",
        axis: "Eje hipotálamo-hipófisis-tiroides"
    },

    {
        name: "ACTH",
        fullName: "Hormona adrenocorticotrópica",
        origin: "Adenohipófisis",
        target: "Corteza suprarrenal",
        type: "Peptídica",
        function: "Estimula principalmente la producción de cortisol.",
        axis: "Eje hipotálamo-hipófisis-suprarrenal"
    },

    {
        name: "FSH",
        fullName: "Hormona foliculoestimulante",
        origin: "Adenohipófisis",
        target: "Ovarios / Testículos",
        type: "Glucoproteína",
        function: "Participa en la gametogénesis y función gonadal.",
        axis: "Eje hipotálamo-hipófisis-gónadas"
    },

    {
        name: "LH",
        fullName: "Hormona luteinizante",
        origin: "Adenohipófisis",
        target: "Ovarios / Testículos",
        type: "Glucoproteína",
        function: "Participa en la ovulación y producción de testosterona.",
        axis: "Eje hipotálamo-hipófisis-gónadas"
    },

    {
        name: "Prolactina",
        fullName: "Prolactina",
        origin: "Adenohipófisis",
        target: "Glándula mamaria",
        type: "Proteica",
        function: "Estimula la producción de leche.",
        axis: "Eje prolactina"
    },

    {
        name: "MSH",
        fullName: "Hormona estimulante de melanocitos",
        origin: "Adenohipófisis",
        target: "Melanocitos",
        type: "Peptídica",
        function: "Estimula la producción de melanina.",
        axis: "Regulación melanocítica"
    },


    /* =========================
       NEUROHIPÓFISIS
       ========================= */

    {
        name: "ADH",
        fullName: "Hormona antidiurética",
        origin: "Neurohipófisis",
        target: "Riñones",
        type: "Peptídica",
        function: "Favorece la reabsorción de agua.",
        axis: "Balance hidroelectrolítico"
    },

    {
        name: "Oxitocina",
        fullName: "Oxitocina",
        origin: "Neurohipófisis",
        target: "Útero / Glándula mamaria",
        type: "Peptídica",
        function: "Participa en la contracción uterina y eyección de leche.",
        axis: "Reproducción y lactancia"
    },


    /* =========================
       TIROIDES
       ========================= */

    {
        name: "T3",
        fullName: "Triyodotironina",
        origin: "Tiroides",
        target: "Tejidos corporales",
        type: "Hormona tiroidea",
        function: "Aumenta el metabolismo celular.",
        axis: "Eje hipotálamo-hipófisis-tiroides"
    },

    {
        name: "T4",
        fullName: "Tiroxina",
        origin: "Tiroides",
        target: "Tejidos corporales",
        type: "Hormona tiroidea",
        function: "Regula metabolismo, crecimiento y desarrollo.",
        axis: "Eje hipotálamo-hipófisis-tiroides"
    },

    {
        name: "Calcitonina",
        fullName: "Calcitonina",
        origin: "Tiroides",
        target: "Hueso",
        type: "Peptídica",
        function: "Disminuye la concentración de calcio sanguíneo.",
        axis: "Homeostasis del calcio"
    },


    /* =========================
       PARATIROIDES
       ========================= */

    {
        name: "PTH",
        fullName: "Hormona paratiroidea",
        origin: "Paratiroides",
        target: "Hueso / Riñón",
        type: "Peptídica",
        function: "Aumenta la concentración de calcio sanguíneo.",
        axis: "Homeostasis del calcio"
    },


    /* =========================
       SUPRARRENAL
       ========================= */

    {
        name: "Cortisol",
        fullName: "Cortisol",
        origin: "Corteza suprarrenal",
        target: "Múltiples tejidos",
        type: "Esteroidea",
        function: "Participa en la respuesta al estrés y regulación metabólica.",
        axis: "Eje hipotálamo-hipófisis-suprarrenal"
    },

    {
        name: "Aldosterona",
        fullName: "Aldosterona",
        origin: "Corteza suprarrenal",
        target: "Riñones",
        type: "Esteroidea",
        function: "Favorece la retención de sodio y agua y la eliminación de potasio.",
        axis: "Sistema renina-angiotensina-aldosterona"
    },

    {
        name: "Andrógenos suprarrenales",
        fullName: "Andrógenos suprarrenales",
        origin: "Corteza suprarrenal",
        target: "Tejidos periféricos",
        type: "Esteroidea",
        function: "Contribuyen a características sexuales y metabolismo.",
        axis: "Función suprarrenal"
    },

    {
        name: "Adrenalina",
        fullName: "Adrenalina",
        origin: "Médula suprarrenal",
        target: "Corazón / Vasos / Pulmones",
        type: "Catecolamina",
        function: "Participa en la respuesta rápida de lucha o huida.",
        axis: "Sistema simpático-adrenal"
    },

    {
        name: "Noradrenalina",
        fullName: "Noradrenalina",
        origin: "Médula suprarrenal",
        target: "Vasos sanguíneos y corazón",
        type: "Catecolamina",
        function: "Aumenta la respuesta simpática y contribuye al aumento de la presión arterial.",
        axis: "Sistema simpático-adrenal"
    },


    /* =========================
       PÁNCREAS
       ========================= */

    {
        name: "Insulina",
        fullName: "Insulina",
        origin: "Páncreas",
        target: "Hígado / Músculo / Tejido adiposo",
        type: "Peptídica",
        function: "Disminuye la concentración de glucosa sanguínea.",
        axis: "Regulación de glucosa"
    },

    {
        name: "Glucagón",
        fullName: "Glucagón",
        origin: "Páncreas",
        target: "Hígado",
        type: "Peptídica",
        function: "Aumenta la concentración de glucosa sanguínea.",
        axis: "Regulación de glucosa"
    },

    {
        name: "Somatostatina pancreática",
        fullName: "Somatostatina pancreática",
        origin: "Páncreas",
        target: "Páncreas y tubo digestivo",
        type: "Peptídica",
        function: "Modula la secreción de insulina y glucagón.",
        axis: "Regulación de glucosa"
    },

    {
        name: "Polipéptido pancreático",
        fullName: "Polipéptido pancreático",
        origin: "Páncreas",
        target: "Tubo digestivo",
        type: "Peptídica",
        function: "Participa en la regulación de secreciones pancreáticas.",
        axis: "Regulación gastrointestinal"
    },


    /* =========================
       PINEAL
       ========================= */

    {
        name: "Melatonina",
        fullName: "Melatonina",
        origin: "Glándula pineal",
        target: "Sistema nervioso central",
        type: "Indolamina",
        function: "Regula los ritmos circadianos y participa en la regulación del sueño.",
        axis: "Ritmo circadiano"
    },


    /* =========================
       GÓNADAS
       ========================= */

    {
        name: "Estrógenos",
        fullName: "Estrógenos",
        origin: "Ovarios",
        target: "Útero / Mama / Hueso",
        type: "Esteroidea",
        function: "Participan en el desarrollo sexual, reproducción y mantenimiento óseo.",
        axis: "Eje hipotálamo-hipófisis-gónadas"
    },

    {
        name: "Progesterona",
        fullName: "Progesterona",
        origin: "Ovarios",
        target: "Útero / Mama",
        type: "Esteroidea",
        function: "Prepara y mantiene el endometrio y participa en la función mamaria.",
        axis: "Eje hipotálamo-hipófisis-gónadas"
    },

    {
        name: "Inhibina",
        fullName: "Inhibina",
        origin: "Ovarios / Testículos",
        target: "Adenohipófisis",
        type: "Proteica",
        function: "Inhibe principalmente la secreción de FSH.",
        axis: "Eje hipotálamo-hipófisis-gónadas"
    },

    {
        name: "Testosterona",
        fullName: "Testosterona",
        origin: "Testículos",
        target: "Tejidos sexuales",
        type: "Esteroidea",
        function: "Participa en el desarrollo sexual masculino y la espermatogénesis.",
        axis: "Eje hipotálamo-hipófisis-gónadas"
    },

    {
        name: "AMH",
        fullName: "Hormona antimülleriana",
        origin: "Testículos / Ovarios",
        target: "Tejidos reproductivos",
        type: "Proteica",
        function: "Participa en la diferenciación sexual y función ovárica.",
        axis: "Eje reproductivo"
    },


    /* =========================
       RIÑÓN
       ========================= */

    {
        name: "Eritropoyetina",
        fullName: "Eritropoyetina",
        origin: "Riñón",
        target: "Médula ósea",
        type: "Glucoproteína",
        function: "Estimula la producción de eritrocitos.",
        axis: "Eritropoyesis"
    },

    {
        name: "Renina",
        fullName: "Renina",
        origin: "Riñón",
        target: "Sistema renina-angiotensina",
        type: "Enzima hormonal",
        function: "Inicia el sistema renina-angiotensina-aldosterona.",
        axis: "Sistema renina-angiotensina-aldosterona"
    },

    {
        name: "Calcitriol",
        fullName: "Calcitriol",
        origin: "Riñón",
        target: "Intestino / Hueso / Riñón",
        type: "Hormona esteroidea",
        function: "Aumenta la absorción intestinal de calcio y fosfato.",
        axis: "Homeostasis del calcio"
    },


    /* =========================
       TUBO DIGESTIVO
       ========================= */

    {
        name: "Gastrina",
        fullName: "Gastrina",
        origin: "Estómago",
        target: "Estómago",
        type: "Peptídica",
        function: "Estimula la secreción de ácido gástrico.",
        axis: "Regulación gastrointestinal"
    },

    {
        name: "Secretina",
        fullName: "Secretina",
        origin: "Duodeno",
        target: "Páncreas",
        type: "Peptídica",
        function: "Estimula la secreción de bicarbonato pancreático.",
        axis: "Regulación gastrointestinal"
    },

    {
        name: "Colecistoquinina",
        fullName: "Colecistoquinina",
        origin: "Duodeno",
        target: "Vesícula biliar / Páncreas",
        type: "Peptídica",
        function: "Estimula la contracción de la vesícula biliar y la secreción pancreática.",
        axis: "Regulación gastrointestinal"
    },

    {
        name: "Grelina",
        fullName: "Grelina",
        origin: "Estómago",
        target: "Hipotálamo / Adenohipófisis",
        type: "Peptídica",
        function: "Estimula el apetito y favorece la secreción de GH.",
        axis: "Regulación energética"
    },


    /* =========================
       TEJIDO ADIPOSO
       ========================= */

    {
        name: "Leptina",
        fullName: "Leptina",
        origin: "Tejido adiposo",
        target: "Hipotálamo",
        type: "Proteica",
        function: "Participa en la regulación del apetito y del balance energético.",
        axis: "Regulación energética"
    },


    /* =========================
       HÍGADO
       ========================= */

    {
        name: "IGF-1",
        fullName: "Factor de crecimiento similar a la insulina tipo 1",
        origin: "Hígado",
        target: "Huesos y tejidos",
        type: "Factor de crecimiento",
        function: "Media muchos de los efectos del crecimiento inducidos por GH.",
        axis: "Eje GH-IGF-1"
    },


    /* =========================
       PLACENTA
       ========================= */

    {
        name: "HCG",
        fullName: "Gonadotropina coriónica humana",
        origin: "Placenta",
        target: "Ovario",
        type: "Glucoproteína",
        function: "Mantiene el cuerpo lúteo durante el embarazo.",
        axis: "Embarazo"
    }

];


/* =========================================================
   VARIABLES PRINCIPALES
   ========================================================= */

let currentIndex = 0;
let playing = false;
let interval = null;
let animationFrame = null;
let feedbackAnimationFrame = null;


/* =========================================================
   ELEMENTOS DEL DOM
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

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const humanBody = document.getElementById("humanBody");
const routeSvg = document.getElementById("routeSvg");

const hormoneRoute = document.getElementById("hormoneRoute");
const feedbackRoute = document.getElementById("feedbackRoute");

const routeParticle = document.getElementById("routeParticle");


/* =========================================================
   CONFIGURACIÓN
   ========================================================= */

const COLORS = {
    origin: "#ff304f",
    hormone: "#ffe600",
    target: "#ffffff",
    feedback: "#00f6ff"
};


/* =========================================================
   ALIAS DE ÓRGANOS
   ========================================================= */

const organAliases = {

    "hipotálamo": [
        "hipotalamo"
    ],

    "adenohipófisis": [
        "adenohipofisis",
        "hipofisis"
    ],

    "neurohipófisis": [
        "neurohipofisis",
        "hipofisis"
    ],

    "glándula pineal": [
        "pineal"
    ],

    "tiroides": [
        "tiroides"
    ],

    "paratiroides": [
        "paratiroides"
    ],

    "corteza suprarrenal": [
        "suprarrenal",
        "corteza"
    ],

    "médula suprarrenal": [
        "medula suprarrenal",
        "medula"
    ],

    "páncreas": [
        "pancreas"
    ],

    "hígado": [
        "higado"
    ],

    "riñón": [
        "rinon",
        "riñones"
    ],

    "estómago": [
        "estomago"
    ],

    "duodeno": [
        "duodeno"
    ],

    "ovarios": [
        "ovario"
    ],

    "testículos": [
        "testiculo",
        "testículos"
    ],

    "tejido adiposo": [
        "adiposo"
    ],

    "placenta": [
        "placenta"
    ],

    "timo": [
        "timo"
    ]
};


/* =========================================================
   NORMALIZAR TEXTO
   ========================================================= */

function normalizeText(text) {

    return String(text || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


/* =========================================================
   GENERAR LISTA
   ========================================================= */

function renderHormoneList(filter = "") {

    hormoneList.innerHTML = "";

    const query = normalizeText(filter);

    hormones.forEach((hormone, index) => {

        const searchable = normalizeText(
            [
                hormone.name,
                hormone.fullName,
                hormone.origin,
                hormone.target,
                hormone.function,
                hormone.axis,
                hormone.type
            ].join(" ")
        );

        if (query && !searchable.includes(query)) {
            return;
        }

        const item = document.createElement("button");

        item.className = "hormone-item";

        item.dataset.index = index;

        item.innerHTML = `
            <strong>${hormone.name}</strong>
            <br>
            <span>${hormone.fullName}</span>
        `;

        if (index === currentIndex) {
            item.classList.add("active");
        }

        item.addEventListener("click", () => {

            currentIndex = index;

            showHormone(currentIndex);

            stopPlayback();

        });

        hormoneList.appendChild(item);

    });

}


/* =========================================================
   BUSCAR ELEMENTOS REALES
   ========================================================= */

function findOrganElement(name) {

    if (!name) {
        return null;
    }

    const normalized = normalizeText(name);

    const allOrgans = [
        ...humanBody.querySelectorAll(".organ")
    ];

    /* Coincidencia exacta */

    for (const organ of allOrgans) {

        const dataName = normalizeText(
            organ.dataset.organ
        );

        if (dataName === normalized) {
            return organ;
        }

    }


    /* Alias */

    for (const key in organAliases) {

        const aliases = organAliases[key];

        const normalizedKey = normalizeText(key);

        if (
            normalized === normalizedKey ||
            aliases.some(
                alias => normalizeText(alias) === normalized
            )
        ) {

            for (const organ of allOrgans) {

                const dataName = normalizeText(
                    organ.dataset.organ
                );

                if (
                    dataName === normalizedKey ||
                    normalizeText(
                        organ.dataset.adenohypophysis
                    ) === normalized ||
                    normalizeText(
                        organ.dataset.neurohypophysis
                    ) === normalized ||
                    normalizeText(
                        organ.dataset.medulla
                    ) === normalized
                ) {
                    return organ;
                }

            }

        }

    }


    /* Adenohipófisis */

    for (const organ of allOrgans) {

        if (
            normalizeText(
                organ.dataset.adenohypophysis
            ) === normalized
        ) {
            return organ;
        }

    }


    /* Neurohipófisis */

    for (const organ of allOrgans) {

        if (
            normalizeText(
                organ.dataset.neurohypophysis
            ) === normalized
        ) {
            return organ;
        }

    }


    /* Médula suprarrenal */

    for (const organ of allOrgans) {

        if (
            normalizeText(
                organ.dataset.medulla
            ) === normalized
        ) {
            return organ;
        }

    }


    /* Coincidencia parcial */

    for (const organ of allOrgans) {

        const dataName = normalizeText(
            organ.dataset.organ
        );

        if (
            dataName.includes(normalized) ||
            normalized.includes(dataName)
        ) {
            return organ;
        }

    }

    return null;
}


/* =========================================================
   DIANAS VIRTUALES
   =========================================================
   Estas NO modifican las coordenadas de tus órganos.
   Se utilizan para estructuras que todavía no tienen
   un botón propio en el HTML.
   ========================================================= */

const virtualTargetPositions = {

    "hueso": {
        top: 38,
        left: 39
    },

    "huesos y tejidos": {
        top: 43,
        left: 61
    },

    "músculo": {
        top: 60,
        left: 38
    },

    "músculo / tejido adiposo": {
        top: 58,
        left: 42
    },

    "corazón": {
        top: 35,
        left: 47
    },

    "vasos": {
        top: 40,
        left: 58
    },

    "vasos sanguíneos y corazón": {
        top: 40,
        left: 55
    },

    "pulmones": {
        top: 33,
        left: 42
    },

    "útero": {
        top: 63,
        left: 50
    },

    "glándula mamaria": {
        top: 36,
        left: 50
    },

    "mama": {
        top: 36,
        left: 50
    },

    "melanocitos": {
        top: 28,
        left: 30
    },

    "médula ósea": {
        top: 70,
        left: 52
    },

    "sistema nervioso central": {
        top: 12,
        left: 50
    },

    "sistema renina-angiotensina": {
        top: 49,
        left: 50
    },

    "intestino": {
        top: 58,
        left: 52
    },

    "vesícula biliar": {
        top: 48,
        left: 61
    },

    "tubo digestivo": {
        top: 57,
        left: 53
    },

    "tejidos corporales": {
        top: 45,
        left: 35
    },

    "múltiples tejidos": {
        top: 45,
        left: 65
    },

    "tejidos periféricos": {
        top: 55,
        left: 35
    },

    "tejidos sexuales": {
        top: 70,
        left: 55
    },

    "tejidos reproductivos": {
        top: 67,
        left: 50
    },

    "hígado y tejidos": {
        top: 45,
        left: 58
    },

    "páncreas y tubo digestivo": {
        top: 54,
        left: 53
    },

    "ovario": {
        top: 66,
        left: 50
    },

    "sistema nervioso": {
        top: 15,
        left: 50
    }

};


/* =========================================================
   CREAR DIANA VIRTUAL
   ========================================================= */

function createVirtualTarget(name) {

    const normalized = normalizeText(name);

    let key = Object.keys(
        virtualTargetPositions
    ).find(
        k => normalizeText(k) === normalized
    );

    if (!key) {

        key = Object.keys(
            virtualTargetPositions
        ).find(
            k =>
                normalized.includes(normalizeText(k)) ||
                normalizeText(k).includes(normalized)
        );

    }

    if (!key) {
        return null;
    }

    const existing = humanBody.querySelector(
        `.virtual-target[data-target="${CSS.escape(key)}"]`
    );

    if (existing) {
        return existing;
    }

    const position = virtualTargetPositions[key];

    const point = document.createElement("div");

    point.className = "virtual-target";

    point.dataset.target = key;

    point.style.top = `${position.top}%`;
    point.style.left = `${position.left}%`;

    point.title = key.toUpperCase();

    humanBody.appendChild(point);

    return point;
}


/* =========================================================
   BUSCAR TODAS LAS DIANAS
   ========================================================= */

function findAllTargetElements(targetText) {

    if (!targetText) {
        return [];
    }

    const parts = targetText
        .split("/")
        .map(x => x.trim())
        .filter(Boolean);

    const result = [];

    parts.forEach(part => {

        const real = findOrganElement(part);

        if (real) {

            result.push(real);

            return;
        }

        const virtual = createVirtualTarget(part);

        if (virtual) {
            result.push(virtual);
        }

    });

    return result;
}


/* =========================================================
   CENTRO DE ELEMENTO
   ========================================================= */

function getElementCenter(element) {

    if (!element) {
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
   CONVERTIR COORDENADAS A SVG
   ========================================================= */

function bodyPointToSvg(point) {

    const bodyRect =
        humanBody.getBoundingClientRect();

    const svgRect =
        routeSvg.getBoundingClientRect();

    const viewBox =
        routeSvg.viewBox.baseVal;

    return {

        x:
            (
                point.x +
                bodyRect.left -
                svgRect.left
            )
            *
            viewBox.width /
            svgRect.width,

        y:
            (
                point.y +
                bodyRect.top -
                svgRect.top
            )
            *
            viewBox.height /
            svgRect.height

    };

}


/* =========================================================
   CREAR CURVA
   ========================================================= */

function createPath(start, end) {

    const dx = end.x - start.x;
    const dy = end.y - start.y;

    const curve = Math.max(
        45,
        Math.abs(dy) * 0.35
    );

    return `
        M ${start.x} ${start.y}
        C
        ${start.x + dx * 0.20}
        ${start.y + curve}

        ${end.x - dx * 0.20}
        ${end.y - curve}

        ${end.x}
        ${end.y}
    `;

}


/* =========================================================
   RESALTAR ÓRGANOS
   ========================================================= */

function highlightOrgans(hormone) {

    const allOrgans =
        humanBody.querySelectorAll(
            ".organ, .virtual-target"
        );

    allOrgans.forEach(element => {

        element.classList.remove(
            "origin",
            "target",
            "active",
            "hormone-active"
        );

    });


    /* ORIGEN */

    const origins =
        findAllTargetElements(
            hormone.origin
        );

    origins.forEach(element => {

        element.classList.add(
            "origin",
            "active"
        );

    });


    /* DIANAS */

    const targets =
        findAllTargetElements(
            hormone.target
        );

    targets.forEach(element => {

        element.classList.add(
            "target",
            "active"
        );

    });


    /* Si un elemento es ambos */

    origins.forEach(origin => {

        targets.forEach(target => {

            if (origin === target) {

                origin.classList.add(
                    "origin",
                    "target"
                );

            }

        });

    });

}


/* =========================================================
   CREAR RUTA HORMONAL
   ========================================================= */

function buildHormoneRoute(hormone) {

    const origin =
        findOrganElement(
            hormone.origin
        );

    if (!origin) {
        return [];
    }

    const originCenter =
        getElementCenter(origin);

    const originSvg =
        bodyPointToSvg(originCenter);

    const targets =
        findAllTargetElements(
            hormone.target
        );

    if (!targets.length) {
        return [];
    }

    const paths = [];

    targets.forEach(target => {

        const targetCenter =
            getElementCenter(target);

        const targetSvg =
            bodyPointToSvg(targetCenter);

        paths.push(
            createPath(
                originSvg,
                targetSvg
            )
        );

    });

    return paths;
}


/* =========================================================
   ANIMACIÓN DE PARTÍCULA
   ========================================================= */

function animateParticle(paths) {

    cancelAnimationFrame(
        animationFrame
    );

    if (!paths.length) {

        routeParticle.style.display =
            "none";

        return;

    }

    routeParticle.style.display =
        "block";

    const tempPaths =
        paths.map(d => {

            const path =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                );

            path.setAttribute(
                "d",
                d
            );

            routeSvg.appendChild(path);

            return path;

        });


    let currentPath = 0;
    let progress = 0;

    function animate() {

        if (
            currentPath >=
            tempPaths.length
        ) {

            currentPath = 0;
            progress = 0;

        }

        const path =
            tempPaths[currentPath];

        const length =
            path.getTotalLength();

        const point =
            path.getPointAtLength(
                length * progress
            );

        routeParticle.setAttribute(
            "cx",
            point.x
        );

        routeParticle.setAttribute(
            "cy",
            point.y
        );

        progress += 0.008;

        if (progress >= 1) {

            progress = 0;

            currentPath++;

        }

        animationFrame =
            requestAnimationFrame(
                animate
            );

    }

    animate();


    setTimeout(() => {

        tempPaths.forEach(
            path => path.remove()
        );

    }, 3000);

}


/* =========================================================
   RETROALIMENTACIÓN NEGATIVA
   ========================================================= */

const feedbackMap = {

    "TRH": {
        from: "Tiroides",
        to: "Hipotálamo"
    },

    "TSH": {
        from: "Tiroides",
        to: "Hipotálamo"
    },

    "T3": {
        from: "Tiroides",
        to: "Hipotálamo"
    },

    "T4": {
        from: "Tiroides",
        to: "Hipotálamo"
    },

    "CRH": {
        from: "Corteza suprarrenal",
        to: "Hipotálamo"
    },

    "ACTH": {
        from: "Corteza suprarrenal",
        to: "Hipotálamo"
    },

    "Cortisol": {
        from: "Corteza suprarrenal",
        to: "Hipotálamo"
    },

    "GnRH": {
        from: "Ovarios / Testículos",
        to: "Hipotálamo"
    },

    "LH": {
        from: "Ovarios / Testículos",
        to: "Hipotálamo"
    },

    "FSH": {
        from: "Ovarios / Testículos",
        to: "Hipotálamo"
    },

    "Testosterona": {
        from: "Testículos",
        to: "Hipotálamo"
    },

    "Estrógenos": {
        from: "Ovarios",
        to: "Hipotálamo"
    },

    "Progesterona": {
        from: "Ovarios",
        to: "Hipotálamo"
    },

    "Inhibina": {
        from: "Ovarios / Testículos",
        to: "Adenohipófisis"
    },

    "GHRH": {
        from: "Hígado",
        to: "Hipotálamo"
    },

    "GH": {
        from: "Hígado",
        to: "Hipotálamo"
    },

    "IGF-1": {
        from: "Hígado",
        to: "Hipotálamo"
    }

};


/* =========================================================
   CREAR RUTA DE FEEDBACK
   ========================================================= */

function buildFeedbackRoute(hormone) {

    const feedback =
        feedbackMap[hormone.name];

    if (!feedback) {
        return "";
    }

    const from =
        findAllTargetElements(
            feedback.from
        )[0];

    const to =
        findAllTargetElements(
            feedback.to
        )[0];

    if (!from || !to) {
        return "";
    }

    const start =
        bodyPointToSvg(
            getElementCenter(from)
        );

    const end =
        bodyPointToSvg(
            getElementCenter(to)
        );

    return createPath(
        start,
        end
    );

}


/* =========================================================
   ANIMAR RUTA
   ========================================================= */

function animateRoute(hormone) {

    const paths =
        buildHormoneRoute(
            hormone
        );

    hormoneRoute.setAttribute(
        "d",
        paths.join(" ")
    );


    /* Feedback */

    const feedbackPath =
        buildFeedbackRoute(
            hormone
        );

    feedbackRoute.setAttribute(
        "d",
        feedbackPath
    );


    /* Partícula */

    animateParticle(paths);

}


/* =========================================================
   INFORMACIÓN EXTRA
   ========================================================= */

function createExtraInfoPanel() {

    let panel =
        document.getElementById(
            "hormoneExtraInfo"
        );

    if (panel) {
        return panel;
    }

    const infoCard =
        document.querySelector(
            ".info-card"
        );

    if (!infoCard) {
        return null;
    }

    panel =
        document.createElement("div");

    panel.id =
        "hormoneExtraInfo";

    panel.className =
        "hormone-extra-info";

    infoCard.appendChild(panel);

    return panel;

}


/* =========================================================
   DATOS CLÍNICOS
   ========================================================= */

const clinicalInfo = {

    "TRH":
        "Alteraciones del eje tiroideo pueden modificar TSH y hormonas tiroideas.",

    "CRH":
        "Su regulación participa en la respuesta neuroendocrina al estrés.",

    "GnRH":
        "La secreción pulsátil de GnRH es necesaria para la función reproductiva.",

    "GHRH":
        "Participa en la regulación de la secreción de GH.",

    "Somatostatina":
        "Su exceso inhibe múltiples secreciones endocrinas y gastrointestinales.",

    "Dopamina":
        "Es el principal inhibidor fisiológico de la secreción de prolactina.",

    "GH":
        "Su exceso o déficit puede producir alteraciones importantes del crecimiento.",

    "TSH":
        "Es un marcador fundamental para valorar la función del eje tiroideo.",

    "ACTH":
        "Su interpretación permite valorar la función del eje hipotálamo-hipófisis-suprarrenal.",

    "FSH":
        "Participa en la gametogénesis y es útil en la valoración de función gonadal.",

    "LH":
        "Participa en la ovulación y esteroidogénesis gonadal.",

    "Prolactina":
        "La hiperprolactinemia puede producir alteraciones reproductivas y galactorrea.",

    "ADH":
        "Alteraciones de ADH participan en diabetes insípida y síndrome de secreción inadecuada de ADH.",

    "Oxitocina":
        "Participa en el trabajo de parto y la eyección de leche.",

    "T3":
        "Es la forma tiroidea con mayor actividad biológica.",

    "T4":
        "Es la principal hormona tiroidea circulante y funciona como precursor de T3.",

    "Calcitonina":
        "Tiene un papel relativamente menor en la homeostasis del calcio en comparación con PTH.",

    "PTH":
        "Es una hormona fundamental para mantener la concentración de calcio extracelular.",

    "Cortisol":
        "Su exceso crónico puede asociarse con síndrome de Cushing.",

    "Aldosterona":
        "Su exceso puede producir hipertensión e hipopotasemia.",

    "Adrenalina":
        "Participa en la respuesta aguda al estrés y puede aumentar frecuencia cardiaca y glucemia.",

    "Noradrenalina":
        "Tiene un importante efecto vasoconstrictor y participa en la regulación de la presión arterial.",

    "Insulina":
        "Su deficiencia o resistencia tiene un papel central en la diabetes mellitus.",

    "Glucagón":
        "Es importante durante el ayuno para mantener la disponibilidad de glucosa.",

    "Melatonina":
        "Su secreción está relacionada con el ciclo luz-oscuridad.",

    "Estrógenos":
        "Participan en función reproductiva y mantenimiento de la masa ósea.",

    "Progesterona":
        "Es fundamental para la preparación y mantenimiento del endometrio.",

    "Testosterona":
        "Participa en desarrollo sexual masculino, masa muscular y espermatogénesis.",

    "Eritropoyetina":
        "Su disminución en enfermedad renal crónica puede contribuir a anemia.",

    "Renina":
        "Participa en el control de la presión arterial mediante el sistema renina-angiotensina-aldosterona.",

    "Calcitriol":
        "Es la forma activa de vitamina D y favorece la absorción intestinal de calcio y fosfato.",

    "Gastrina":
        "Participa en la regulación de la secreción de ácido gástrico.",

    "Secretina":
        "Promueve la secreción pancreática de bicarbonato.",

    "Colecistoquinina":
        "Participa en la digestión de grasas y proteínas.",

    "Grelina":
        "Es una señal periférica importante relacionada con hambre y secreción de GH.",

    "Leptina":
        "Señala al hipotálamo el estado energético asociado a las reservas adiposas.",

    "IGF-1":
        "Media gran parte de los efectos periféricos del eje GH.",

    "HCG":
        "Es fundamental durante las primeras etapas del embarazo para mantener el cuerpo lúteo."

};


/* =========================================================
   MOSTRAR INFORMACIÓN EXTRA
   ========================================================= */

function updateExtraInfo(hormone) {

    const panel =
        createExtraInfoPanel();

    if (!panel) {
        return;
    }

    const feedback =
        feedbackMap[hormone.name];

    panel.innerHTML = `

        <div class="extra-title">
            INFORMACIÓN FISIOLÓGICA
        </div>

        <div class="extra-row">
            <span>EJE</span>
            <strong>
                ${hormone.axis || "—"}
            </strong>
        </div>

        <div class="extra-row">
            <span>REGULACIÓN</span>
            <strong>
                ${
                    feedback
                        ? "Retroalimentación negativa"
                        : "Regulación fisiológica"
                }
            </strong>
        </div>

        <div class="extra-row">
            <span>CLÍNICA</span>
            <strong>
                ${
                    clinicalInfo[hormone.name]
                    || "Sin información clínica adicional."
                }
            </strong>
        </div>

    `;

}


/* =========================================================
   MOSTRAR HORMONA
   ========================================================= */

function showHormone(index) {

    if (
        index < 0 ||
        index >= hormones.length
    ) {
        return;
    }

    currentIndex = index;

    const hormone =
        hormones[index];


    /* Información */

    hormoneName.textContent =
        hormone.name;

    hormoneOrigin.textContent =
        hormone.origin;

    hormoneTarget.textContent =
        hormone.target;

    hormoneFunction.textContent =
        hormone.function;

    hormoneType.textContent =
        hormone.type;


    /* Contador */

    currentHormone.textContent =
        index + 1;

    totalHormones.textContent =
        hormones.length;


    /* Progreso */

    const percentage =
        (
            (index + 1) /
            hormones.length
        ) *
        100;

    progressBar.style.width =
        `${percentage}%`;

    progressText.textContent =
        `${index + 1} / ${hormones.length}`;


    /* Lista */

    document
        .querySelectorAll(".hormone-item")
        .forEach(item => {

            item.classList.toggle(
                "active",
                Number(item.dataset.index) === index
            );

        });


    /* Órganos */

    highlightOrgans(
        hormone
    );


    /* Información adicional */

    updateExtraInfo(
        hormone
    );


    /* Ruta */

    requestAnimationFrame(() => {

        animateRoute(
            hormone
        );

    });

}


/* =========================================================
   SIGUIENTE
   ========================================================= */

function nextHormone() {

    currentIndex++;

    if (
        currentIndex >=
        hormones.length
    ) {
        currentIndex = 0;
    }

    showHormone(
        currentIndex
    );

}


/* =========================================================
   ANTERIOR
   ========================================================= */

function previousHormone() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex =
            hormones.length - 1;

    }

    showHormone(
        currentIndex
    );

}


/* =========================================================
   REPRODUCIR
   ========================================================= */

function startPlayback() {

    if (playing) {
        return;
    }

    playing = true;

    interval =
        setInterval(() => {

            nextHormone();

        }, 3500);

}


/* =========================================================
   PAUSAR
   ========================================================= */

function stopPlayback() {

    playing = false;

    clearInterval(
        interval
    );

    interval = null;

}


/* =========================================================
   BUSCADOR
   ========================================================= */

searchInput.addEventListener(
    "input",
    event => {

        renderHormoneList(
            event.target.value
        );

    }
);


/* =========================================================
   BOTONES
   ========================================================= */

nextBtn.addEventListener(
    "click",
    nextHormone
);

prevBtn.addEventListener(
    "click",
    previousHormone
);

playBtn.addEventListener(
    "click",
    startPlayback
);

pauseBtn.addEventListener(
    "click",
    stopPlayback
);


/* =========================================================
   INTERACCIÓN CON ÓRGANOS
   ========================================================= */

function setupOrganInteractions() {

    const organs =
        humanBody.querySelectorAll(
            ".organ"
        );

    organs.forEach(organ => {

        organ.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                const name =
                    organ.dataset.organ;

                const matches =
                    hormones.filter(
                        hormone =>
                            normalizeText(
                                hormone.origin
                            ).includes(
                                normalizeText(name)
                            ) ||
                            normalizeText(
                                name
                            ).includes(
                                normalizeText(
                                    hormone.origin
                                )
                            )
                    );

                if (!matches.length) {
                    return;
                }

                const current =
                    hormones[currentIndex];

                const currentMatch =
                    matches.indexOf(
                        current
                    );

                let nextMatch =
                    currentMatch + 1;

                if (
                    nextMatch >=
                    matches.length
                ) {
                    nextMatch = 0;
                }

                const selected =
                    matches[nextMatch];

                currentIndex =
                    hormones.indexOf(
                        selected
                    );

                showHormone(
                    currentIndex
                );

            }
        );


        /* Tooltip */

        organ.addEventListener(
            "mouseenter",
            () => {

                const name =
                    organ.dataset.organ;

                const matches =
                    hormones.filter(
                        hormone =>
                            normalizeText(
                                hormone.origin
                            ).includes(
                                normalizeText(
                                    name
                                )
                            )
                    );

                organ.dataset.info =
                    matches.length
                        ? `${name} · ${matches.map(h => h.name).join(", ")}`
                        : name;

            }
        );

    });

}


/* =========================================================
   ESTILOS DINÁMICOS
   ========================================================= */

function injectDynamicStyles() {

    if (
        document.getElementById(
            "dynamicEndocrineStyles"
        )
    ) {
        return;
    }

    const style =
        document.createElement("style");

    style.id =
        "dynamicEndocrineStyles";

    style.textContent = `

        /* =====================================
           DIANAS VIRTUALES
           ===================================== */

        .virtual-target {

            position: absolute;

            width: 10px;
            height: 10px;

            transform:
                translate(-50%, -50%);

            border-radius: 50%;

            background:
                rgba(255,255,255,0.15);

            border:
                2px solid rgba(255,255,255,0.45);

            box-shadow:
                0 0 7px
                rgba(255,255,255,0.25);

            z-index: 25;

            pointer-events: none;

            opacity: 0;

            transition:
                0.25s ease;

        }


        .virtual-target.target {

            opacity: 1;

            background:
                #ffffff;

            border-color:
                #ffffff;

            box-shadow:
                0 0 8px #ffffff,
                0 0 18px
                rgba(255,255,255,0.65);

        }


        /* =====================================
           RUTA HORMONAL
           ===================================== */

        .route.hormone {

            stroke:
                #ffe600 !important;

            filter:
                url(#glow);

        }


        /* =====================================
           FEEDBACK
           ===================================== */

        .route.feedback {

            stroke:
                #00f6ff !important;

            stroke-width:
                2.5px;

            stroke-dasharray:
                8 8;

            opacity:
                0.7;

        }


        /* =====================================
           PARTÍCULA
           ===================================== */

        .particle.hormone {

            fill:
                #ffe600 !important;

            filter:
                url(#glow);

        }


        /* =====================================
           INFORMACIÓN EXTRA
           ===================================== */

        .hormone-extra-info {

            margin-top:
                5px;

            padding:
                12px;

            border:
                1px solid
                rgba(0,246,255,0.10);

            background:
                rgba(0,246,255,0.025);

        }


        .extra-title {

            color:
                #ffe600;

            font-size:
                8px;

            font-weight:
                800;

            letter-spacing:
                2px;

            margin-bottom:
                12px;

        }


        .extra-row {

            display:
                flex;

            flex-direction:
                column;

            gap:
                4px;

            margin-bottom:
                10px;

        }


        .extra-row:last-child {

            margin-bottom:
                0;

        }


        .extra-row span {

            color:
                #00f6ff;

            font-size:
                7px;

            font-weight:
                700;

            letter-spacing:
                1.5px;

        }


        .extra-row strong {

            color:
                #b5d1d7;

            font-size:
                10px;

            line-height:
                1.45;

            font-weight:
                400;

        }


        /* =====================================
           INFORMACIÓN AL PASAR SOBRE ÓRGANO
           ===================================== */

        .organ[data-info]::after {

            content:
                attr(data-info);

            position:
                absolute;

            bottom:
                calc(100% + 8px);

            left:
                50%;

            transform:
                translateX(-50%);

            padding:
                6px 8px;

            min-width:
                120px;

            max-width:
                190px;

            background:
                rgba(3,12,18,0.96);

            border:
                1px solid
                rgba(0,246,255,0.35);

            color:
                #d8faff;

            font-size:
                8px;

            line-height:
                1.4;

            text-align:
                center;

            pointer-events:
                none;

            opacity:
                0;

            transition:
                opacity .2s ease;

            z-index:
                100;

        }


        .organ:hover[data-info]::after {

            opacity:
                1;

        }

    `;

    document.head.appendChild(
        style
    );

}


/* =========================================================
   REDIBUJAR AL CAMBIAR TAMAÑO
   ========================================================= */

window.addEventListener(
    "resize",
    () => {

        requestAnimationFrame(() => {

            const hormone =
                hormones[currentIndex];

            highlightOrgans(
                hormone
            );

            animateRoute(
                hormone
            );

        });

    }
);


/* =========================================================
   TECLADO
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.target.tagName ===
            "INPUT"
        ) {
            return;
        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            nextHormone();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            previousHormone();

        }


        if (
            event.code ===
            "Space"
        ) {

            event.preventDefault();

            if (playing) {
                stopPlayback();
            } else {
                startPlayback();
            }

        }

    }
);


/* =========================================================
   LIMPIEZA
   ========================================================= */

window.addEventListener(
    "beforeunload",
    () => {

        stopPlayback();

        cancelAnimationFrame(
            animationFrame
        );

        cancelAnimationFrame(
            feedbackAnimationFrame
        );

    }
);


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

function initializeApp() {

    injectDynamicStyles();

    totalHormones.textContent =
        hormones.length;

    renderHormoneList();

    setupOrganInteractions();

    showHormone(
        0
    );

}


/* =========================================================
   INICIAR
   ========================================================= */

initializeApp();