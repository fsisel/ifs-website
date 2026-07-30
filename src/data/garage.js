// --- 1. REPEATED PATHS & CONSTANTS ---
const MODEL_PORSCHE = "/models/porsche/scene.gltf";

const COMP_LOGOS = {
    "Portugal": "/logos/FSPT.webp",
    "Austria": "/logos/fsa-logo.webp", // Add others as needed
};

// 2. Updated Helper Function (returning an object, not an array)
const FSComp = (country, date, overall, cost, design, business, description = "") => ({
    name: "Formula Student " + country,
    logo: COMP_LOGOS[country] || "", 
    date: date,
    description: description || "",
    achievements: {
        "Overall": overall,
        "Cost Report": cost,
        "Engineering Design": design, 
        "Business Plan Presentation": business
    }
});

// We define performance, images, and identical comps here so we never type them twice.
const BASE_CARS = {
    ifs06: {
        nickname: "",
        media: { thumbnail: "/images/ifs05-lateral.webp", model: MODEL_PORSCHE }, 
        performance: { Top_Speed: "TBA", "0-100 Km/h": "4.2s", Weight: "250Kg" },
        comps: [FSComp("Portugal","July 2026", "9", "8", "7", "11"),
         FSComp("Austria", "July 2026", "", "", "", "")]
    },
    ifs05: {
        nicknameImage: "/logos/Logo_IFS05.svg",
        media: { thumbnail: "/images/ifs05-lateral.webp", model: MODEL_PORSCHE },
        performance: { Top_Speed: "TBA", "0-100 Km/h": "4.2s", Weight: "240kg" },
        comps: [FSComp("Portugal","July 2025",  "8", "10", "9", "9")]
    },
    ifs04: {
        nicknameImage: "/logos/Logo_IFS04_W.svg",
        description: "",
        media: { thumbnail: "/images/ifs04-lateral.webp", model: MODEL_PORSCHE },
        comps:[ FSComp("Portugal","September 2024",  "5", "8", "6", "2")]
    },
    ifs03: {
        nickname: "",
        description: "",
        media: { thumbnail: "/images/ifs03_right.webp", model: MODEL_PORSCHE },
        comps:[ FSComp("Portugal","August 2023", "8", "5", "7", "8")]
    },
    ifs02: {
        nickname: "",
        description: "",
        media: { thumbnail: "/images/ifs02-lateral.webp" },
    },
    ifs01: {
        nickname: "",
        description: "",
        media: { thumbnail: "/images/ifs01-lateral.webp" },
    }
};

export const garage = {
    pt: {
        ifs06: {
            ...BASE_CARS.ifs06,
            description: "O mais veloz",
            powertrain: { Motor: "Emrax", Power: "80kW (107cv)", Binário: "240Nm", Battery: "Li-ion<br> 7.4kW/h / 403.2 V" },
            suspension: "Double wishbone <br> <b>FOX Floar x2 </b>",
            chassis: "Chassis tubular tipo spaceframe concebido para máxima rigidez e segurança em curvas de alta velocidade."
        },
        ifs05: {
            ...BASE_CARS.ifs05,
            description: "O mais veloz",
            powertrain: { Motor: "Emrax", Power: "80kW (107cv)", Battery: "Li-ion" },
            suspension: "Sistema de suspensão de duplo triângulo otimizado para condições de pista.",
            chassis: "Chassis tubular tipo spaceframe concebido para máxima rigidez e segurança em curvas de alta velocidade.",
            "Periodo de Produção": "2025/26"
        },
        // For older cars with no translated text, just spread the base object:
        ifs04: { ...BASE_CARS.ifs04 },
        ifs03: { ...BASE_CARS.ifs03 },
        ifs02: { ...BASE_CARS.ifs02 },
        ifs01: { ...BASE_CARS.ifs01 }
    },
    en: {
        ifs06: {
            ...BASE_CARS.ifs06,
            description: "The fastest",
            powertrain: { Motor: "Emrax", Power: "80kW (107hp)", Torque: "240Nm", Battery: "Li-ion <br> 7.4kW/h / 403.2 V" }, 
            suspension: "Double wishbone <br> <b>FOX Floar x2 </b>",
            chassis: "<b>Space Frame </b> <br>Steel 25 CrM04",
            "Production period": "2025/26",
        },
        ifs05: {
            ...BASE_CARS.ifs05,
            description: "The fastest",
            powertrain: { Motor: "Emrax", Power: "80kW (107hp)", Battery: "Li-ion" },
            suspension: "Double wishbone suspension system optimized for track conditions.",
            chassis: "Tubular spaceframe designed for maximum rigidity and safety during high-speed cornering.",
        },
        ifs04: { ...BASE_CARS.ifs04 },
        ifs03: { ...BASE_CARS.ifs03 },
        ifs02: { ...BASE_CARS.ifs02 },
        ifs01: { ...BASE_CARS.ifs01 }
    }
}