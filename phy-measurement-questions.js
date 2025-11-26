// All 50 questions for the Physics Measurement Quiz
const allQuestions = [
    // Test 1: Physics Fundamentals & SI Units
    {
        test: 1,
        question: "What is the primary focus of physics?",
        options: [
            "The study of living organisms",
            "The basic principles of the universe",
            "The application of mathematical formulas",
            "The history of scientific discoveries"
        ],
        correct: 1,
        explanation: "Physics is concerned with the basic principles that govern the universe, from subatomic particles to galaxies."
    },
    {
        test: 1,
        question: "Which of the following is NOT one of the three fundamental quantities in physics?",
        options: [
            "Length",
            "Mass",
            "Time",
            "Temperature"
        ],
        correct: 3,
        explanation: "The three fundamental quantities are length (L), mass (M), and time (T). Temperature is a derived quantity."
    },
    {
        test: 1,
        question: "What does the SI system stand for?",
        options: [
            "Standard International",
            "Scientific International",
            "System International",
            "Systematic International"
        ],
        correct: 2,
        explanation: "SI stands for 'System International', the international system of units agreed upon in 1960."
    },
    {
        test: 1,
        question: "Which physicist made major contributions to mechanics in 1687?",
        options: [
            "Albert Einstein",
            "Galileo Galilei",
            "Isaac Newton",
            "Niels Bohr"
        ],
        correct: 2,
        explanation: "Isaac Newton published his seminal work 'Philosophiæ Naturalis Principia Mathematica' in 1687, laying the foundation for classical mechanics."
    },
    {
        test: 1,
        question: "What is the SI unit of mass?",
        options: [
            "Gram",
            "Pound",
            "Kilogram",
            "Newton"
        ],
        correct: 2,
        explanation: "The kilogram (kg) is the SI unit of mass, defined as the mass of a specific platinum-iridium alloy cylinder."
    },
    {
        test: 1,
        question: "How is the meter currently defined?",
        options: [
            "1/10,000,000 of the distance from Equator to North Pole",
            "The length of a specific metal bar in Paris",
            "Distance light travels in 1/299,792,458 second in vacuum",
            "A specific number of wavelengths of krypton-86 radiation"
        ],
        correct: 2,
        explanation: "Since 1983, the meter has been defined as the distance traveled by light in a vacuum during 1/299,792,458 of a second."
    },
    {
        test: 1,
        question: "What is the approximate diameter of a hydrogen atom?",
        options: [
            "10^-5 m",
            "10^-10 m",
            "10^-15 m",
            "10^-20 m"
        ],
        correct: 1,
        explanation: "The diameter of a hydrogen atom is approximately 10^-10 meters."
    },
    {
        test: 1,
        question: "Which prefix represents 10^-9?",
        options: [
            "Micro",
            "Nano",
            "Pico",
            "Femto"
        ],
        correct: 1,
        explanation: "The prefix 'nano' represents 10^-9. For example, 1 nanometer = 10^-9 meters."
    },
    {
        test: 1,
        question: "What is the approximate mass of the Earth?",
        options: [
            "5.98 × 10^24 kg",
            "7.36 × 10^22 kg",
            "1.99 × 10^30 kg",
            "7 × 10^41 kg"
        ],
        correct: 0,
        explanation: "The mass of the Earth is approximately 5.98 × 10^24 kg."
    },
    {
        test: 1,
        question: "How is the second currently defined?",
        options: [
            "1/86,400 of a solar day",
            "1/31,556,926 of a year",
            "9,192,631,770 periods of cesium radiation",
            "Based on the lunar cycle"
        ],
        correct: 2,
        explanation: "The second is defined as 9,192,631,770 periods of the radiation corresponding to the transition between two hyperfine levels of the ground state of the cesium-133 atom."
    },

    // Test 2: Length, Mass & Time
    {
        test: 2,
        question: "What is the approximate distance from the Earth to the Moon?",
        options: [
            "3.84 × 10^5 m",
            "3.84 × 10^6 m",
            "3.84 × 10^7 m",
            "3.84 × 10^8 m"
        ],
        correct: 3,
        explanation: "The mean distance from the Earth to the Moon is approximately 3.84 × 10^8 meters."
    },
    {
        test: 2,
        question: "Which of these has the smallest mass?",
        options: [
            "Mosquito",
            "Bacterium",
            "Hydrogen atom",
            "Electron"
        ],
        correct: 3,
        explanation: "An electron has a mass of approximately 9.11 × 10^-31 kg, which is smaller than a hydrogen atom (1.67 × 10^-27 kg)."
    },
    {
        test: 2,
        question: "What is the approximate age of the Earth in seconds?",
        options: [
            "1.3 × 10^14 s",
            "1.3 × 10^15 s",
            "1.3 × 10^16 s",
            "1.3 × 10^17 s"
        ],
        correct: 3,
        explanation: "The age of the Earth is approximately 1.3 × 10^17 seconds."
    },
    {
        test: 2,
        question: "How many significant figures does 0.00605 have?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 1,
        explanation: "0.00605 has 3 significant figures. The zeros before the 6 are not significant, but the zero between 6 and 5 is significant."
    },
    {
        test: 2,
        question: "What is the period of visible light waves?",
        options: [
            "~10^-3 s",
            "~10^-6 s",
            "~10^-9 s",
            "~10^-15 s"
        ],
        correct: 3,
        explanation: "The period of visible light waves is approximately 10^-15 seconds."
    },
    {
        test: 2,
        question: "What is the approximate length of a football field?",
        options: [
            "91 m",
            "9.1 m",
            "0.91 m",
            "910 m"
        ],
        correct: 0,
        explanation: "A football field is approximately 91 meters long."
    },
    {
        test: 2,
        question: "Which body has a mass of approximately 7.36 × 10^22 kg?",
        options: [
            "Sun",
            "Earth",
            "Moon",
            "Milky Way galaxy"
        ],
        correct: 2,
        explanation: "The Moon has a mass of approximately 7.36 × 10^22 kg."
    },
    {
        test: 2,
        question: "What is the time between normal heartbeats?",
        options: [
            "0.08 s",
            "0.8 s",
            "8 s",
            "80 s"
        ],
        correct: 1,
        explanation: "The time between normal heartbeats is approximately 0.8 seconds."
    },
    {
        test: 2,
        question: "What is the diameter of an atomic nucleus?",
        options: [
            "~10^-5 m",
            "~10^-10 m",
            "~10^-14 m",
            "~10^-18 m"
        ],
        correct: 2,
        explanation: "The diameter of an atomic nucleus is approximately 10^-14 meters."
    },
    {
        test: 2,
        question: "How long is one lightyear in meters?",
        options: [
            "9.46 × 10^12 m",
            "9.46 × 10^15 m",
            "9.46 × 10^18 m",
            "9.46 × 10^21 m"
        ],
        correct: 1,
        explanation: "One lightyear is approximately 9.46 × 10^15 meters."
    },

    // Test 3: Density & Atomic Mass
    {
        test: 3,
        question: "What is the formula for density?",
        options: [
            "ρ = m/v",
            "ρ = v/m",
            "ρ = m×v",
            "ρ = m+v"
        ],
        correct: 0,
        explanation: "Density (ρ) is defined as mass (m) per unit volume (v), so ρ = m/v."
    },
    {
        test: 3,
        question: "Which element has the highest density?",
        options: [
            "Gold",
            "Uranium",
            "Lead",
            "Copper"
        ],
        correct: 0,
        explanation: "Gold has a density of 19.3 × 10^3 kg/m³, which is higher than uranium (18.7), lead (11.3), and copper (8.92)."
    },
    {
        test: 3,
        question: "What is the density of water?",
        options: [
            "0.0012 × 10^3 kg/m³",
            "1.00 × 10^3 kg/m³",
            "2.70 × 10^3 kg/m³",
            "8.92 × 10^3 kg/m³"
        ],
        correct: 1,
        explanation: "The density of water is 1.00 × 10^3 kg/m³."
    },
    {
        test: 3,
        question: "What is the atomic mass unit (u) in kilograms?",
        options: [
            "1.66 × 10^-24 kg",
            "1.66 × 10^-27 kg",
            "1.66 × 10^-30 kg",
            "1.66 × 10^-33 kg"
        ],
        correct: 1,
        explanation: "1 atomic mass unit (u) = 1.6605402 × 10^-27 kg."
    },
    {
        test: 3,
        question: "What is Avogadro's number?",
        options: [
            "6.02 × 10^23",
            "6.02 × 10^25",
            "6.02 × 10^27",
            "6.02 × 10^29"
        ],
        correct: 0,
        explanation: "Avogadro's number is 6.02 × 10^23 particles per mole."
    },
    {
        test: 3,
        question: "If a cube of aluminum (ρ = 2.7 g/cm³) has a volume of 0.2 cm³, what is its mass?",
        options: [
            "0.054 g",
            "0.54 g",
            "5.4 g",
            "54 g"
        ],
        correct: 1,
        explanation: "Using ρ = m/v, m = ρ×v = 2.7 g/cm³ × 0.2 cm³ = 0.54 g."
    },
    {
        test: 3,
        question: "How many aluminum atoms are in 0.54 g of aluminum? (Atomic mass = 27 g/mol)",
        options: [
            "1.2 × 10^21",
            "1.2 × 10^22",
            "1.2 × 10^23",
            "1.2 × 10^24"
        ],
        correct: 1,
        explanation: "Number of atoms = (mass/molar mass) × Avogadro's number = (0.54/27) × 6.02×10^23 = 1.2×10^22 atoms."
    },
    {
        test: 3,
        question: "What is the mass of 1 mole of iron? (Atomic mass = 55.85 u)",
        options: [
            "55.85 g",
            "55.85 kg",
            "55.85 mg",
            "55.85 μg"
        ],
        correct: 0,
        explanation: "The mass of 1 mole of any element is equal to its atomic mass expressed in grams, so for iron it's 55.85 g."
    },
    {
        test: 3,
        question: "Which substance has the lowest density?",
        options: [
            "Water",
            "Aluminum",
            "Air",
            "Magnesium"
        ],
        correct: 2,
        explanation: "Air has a density of 0.0012 × 10^3 kg/m³, which is much lower than water (1.00), aluminum (2.70), and magnesium (1.75)."
    },
    {
        test: 3,
        question: "What is the relationship between the number of protons/neutrons and atomic mass?",
        options: [
            "No relationship",
            "The number determines the element but not the mass",
            "The number is related to the atomic mass",
            "The number is inversely proportional to atomic mass"
        ],
        correct: 2,
        explanation: "The number of protons and neutrons in the nucleus of an atom is related to the atomic mass of the element."
    },

    // Test 4: Dimensional Analysis
    {
        test: 4,
        question: "What are the dimensions of area?",
        options: [
            "L",
            "L²",
            "L³",
            "M L²"
        ],
        correct: 1,
        explanation: "Area is length × length, so its dimensions are L²."
    },
    {
        test: 4,
        question: "What are the dimensions of speed?",
        options: [
            "L T",
            "L T⁻¹",
            "L T⁻²",
            "M L T⁻¹"
        ],
        correct: 1,
        explanation: "Speed is distance/time, so its dimensions are L T⁻¹."
    },
    {
        test: 4,
        question: "What are the dimensions of force?",
        options: [
            "M L T⁻¹",
            "M L T⁻²",
            "M L² T⁻²",
            "M² L T⁻²"
        ],
        correct: 1,
        explanation: "Force = mass × acceleration = M × (L T⁻²) = M L T⁻²."
    },
    {
        test: 4,
        question: "Which equation is dimensionally consistent?",
        options: [
            "v = a t²",
            "s = v t + a t",
            "s = (1/2) a t²",
            "F = m v"
        ],
        correct: 2,
        explanation: "s = (1/2) a t² has dimensions L = (L T⁻²)(T²) = L, so it's dimensionally consistent."
    },
    {
        test: 4,
        question: "For a pendulum, the period P depends on length l and gravity g as:",
        options: [
            "P ∝ l g",
            "P ∝ √(l/g)",
            "P ∝ l/g",
            "P ∝ g/l"
        ],
        correct: 1,
        explanation: "Dimensional analysis shows that P = k√(l/g), where k is a constant."
    },
    {
        test: 4,
        question: "What are the dimensions of acceleration?",
        options: [
            "L T⁻¹",
            "L T⁻²",
            "L² T⁻²",
            "M L T⁻²"
        ],
        correct: 1,
        explanation: "Acceleration is change in velocity over time, velocity has dimensions L T⁻¹, so acceleration has dimensions L T⁻²."
    },
    {
        test: 4,
        question: "In the equation P = k m^x l^y g^z, what is the value of x?",
        options: [
            "0",
            "1/2",
            "-1/2",
            "1"
        ],
        correct: 0,
        explanation: "Dimensional analysis shows that the period of a pendulum does not depend on mass, so x = 0."
    },
    {
        test: 4,
        question: "Which physical quantity has dimensions M L² T⁻³?",
        options: [
            "Force",
            "Energy",
            "Power",
            "Pressure"
        ],
        correct: 2,
        explanation: "Power = energy/time = (M L² T⁻²)/(T) = M L² T⁻³."
    },
    {
        test: 4,
        question: "What is the dimension of the constant k in F = k x (Hooke's Law)?",
        options: [
            "M T⁻²",
            "M L T⁻²",
            "M L⁻¹ T⁻²",
            "M L T²"
        ],
        correct: 0,
        explanation: "F = k x, so k = F/x. F has dimensions M L T⁻², x has dimension L, so k has dimensions M T⁻²."
    },
    {
        test: 4,
        question: "Is v = a t dimensionally correct?",
        options: [
            "Yes, both sides have dimensions L T⁻¹",
            "No, left side has L T⁻¹, right side has L T⁻²",
            "No, left side has L T⁻¹, right side has L T⁻¹ T",
            "Yes, both sides have dimensions L T⁻²"
        ],
        correct: 0,
        explanation: "v has dimensions L T⁻¹, a t has dimensions (L T⁻²)(T) = L T⁻¹, so the equation is dimensionally correct."
    },

    // Test 5: Unit Conversion & Estimation
    {
        test: 5,
        question: "Convert 2 minutes to seconds.",
        options: [
            "60 s",
            "120 s",
            "200 s",
            "720 s"
        ],
        correct: 1,
        explanation: "2 minutes × (60 seconds/1 minute) = 120 seconds."
    },
    {
        test: 5,
        question: "Convert 15 inches to centimeters. (1 in = 2.54 cm)",
        options: [
            "5.9 cm",
            "38.1 cm",
            "58.1 cm",
            "381 cm"
        ],
        correct: 1,
        explanation: "15 inches × (2.54 cm/1 inch) = 38.1 cm."
    },
    {
        test: 5,
        question: "What is the order of magnitude of a person's mass?",
        options: [
            "10^0 kg",
            "10^1 kg",
            "10^2 kg",
            "10^3 kg"
        ],
        correct: 1,
        explanation: "A person's mass is typically around 70 kg, which is on the order of 10^2 kg."
    },
    {
        test: 5,
        question: "What is 123 + 5.35 with proper significant figures?",
        options: [
            "128.35",
            "128.4",
            "128",
            "130"
        ],
        correct: 2,
        explanation: "When adding, the result should have the same number of decimal places as the term with the fewest decimal places. 123 has 0 decimal places, so the result is 128."
    },
    {
        test: 5,
        question: "What is 5.4 cm × 6.3 cm with proper significant figures?",
        options: [
            "34.02 cm²",
            "34.0 cm²",
            "34 cm²",
            "30 cm²"
        ],
        correct: 2,
        explanation: "When multiplying, the result should have the same number of significant figures as the factor with the fewest significant figures. Both factors have 2 significant figures, so the result is 34 cm²."
    },
    {
        test: 5,
        question: "Estimate the circumference of Earth (radius ≈ 6370 km).",
        options: [
            "~20,000 km",
            "~40,000 km",
            "~60,000 km",
            "~80,000 km"
        ],
        correct: 1,
        explanation: "Circumference = 2πr ≈ 2 × 3.14 × 6370 km ≈ 40,000 km."
    },
    {
        test: 5,
        question: "One gallon of paint (volume = 0.00378 m³) covers 25 m². What is the paint thickness?",
        options: [
            "0.015 cm",
            "0.15 cm",
            "1.5 cm",
            "15 cm"
        ],
        correct: 1,
        explanation: "Thickness = volume/area = 0.00378 m³ / 25 m² = 0.0001512 m = 0.1512 mm ≈ 0.15 cm."
    },
    {
        test: 5,
        question: "What is the order of magnitude of the age of the Universe?",
        options: [
            "10^15 s",
            "10^17 s",
            "10^19 s",
            "10^21 s"
        ],
        correct: 1,
        explanation: "The age of the Universe is approximately 5 × 10^17 seconds, which is on the order of 10^17 seconds."
    },
    {
        test: 5,
        question: "Convert 7.2 × 10^3 m to km.",
        options: [
            "0.72 km",
            "7.2 km",
            "72 km",
            "720 km"
        ],
        correct: 1,
        explanation: "7.2 × 10^3 m = 7.2 km (since 1 km = 10^3 m)."
    },
    {
        test: 5,
        question: "Convert 5 mg to kg.",
        options: [
            "5 × 10^-3 kg",
            "5 × 10^-6 kg",
            "5 × 10^-9 kg",
            "5 × 10^-12 kg"
        ],
        correct: 1,
        explanation: "5 mg = 5 × 10^-3 g = 5 × 10^-6 kg (since 1 kg = 10^3 g)."
    }
];