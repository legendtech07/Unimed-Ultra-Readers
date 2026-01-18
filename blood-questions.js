// Blood Physiology Quiz Questions
const bloodQuestions = [
    {
        question: "What type of tissue is blood classified as?",
        options: [
            "Epithelial tissue",
            "Connective tissue",
            "Muscle tissue",
            "Nervous tissue"
        ],
        correctAnswer: 1,
        explanation: "Blood is classified as a connective tissue because it consists of cells suspended in an extracellular fluid matrix (plasma)."
    },
    {
        question: "Why is blood called the 'fluid of life'?",
        options: [
            "Because it is red",
            "Because it transports oxygen and nutrients essential for life",
            "Because it contains white blood cells",
            "Because it is produced in bone marrow"
        ],
        correctAnswer: 1,
        explanation: "Blood is called the 'fluid of life' because it transports oxygen and nutrients that are essential for the survival of all body cells."
    },
    {
        question: "What is the average volume of blood in a healthy adult male?",
        options: [
            "3 litres",
            "5 litres",
            "7 litres",
            "10 litres"
        ],
        correctAnswer: 1,
        explanation: "The average volume of blood in a healthy adult male is approximately 5 litres."
    },
    {
        question: "How does the blood volume in females compare to males?",
        options: [
            "It is higher in females",
            "It is about the same",
            "It is slightly lower (about 4.5 litres)",
            "It varies too much to generalize"
        ],
        correctAnswer: 2,
        explanation: "Blood volume is slightly lower in females, averaging about 4.5 litres compared to 5 litres in males."
    },
    {
        question: "What is the pH of blood?",
        options: [
            "6.8",
            "7.0",
            "7.4",
            "8.0"
        ],
        correctAnswer: 2,
        explanation: "Blood is slightly alkaline with a pH of 7.4, which is tightly regulated by buffer systems in the body."
    },
    {
        question: "Why is arterial blood scarlet red?",
        options: [
            "Because it contains more carbon dioxide",
            "Because it contains more oxygen (oxyhemoglobin)",
            "Because it flows faster",
            "Because of higher pressure"
        ],
        correctAnswer: 1,
        explanation: "Arterial blood is scarlet red because it contains oxygenated hemoglobin (oxyhemoglobin) which gives it a bright red color."
    },
    {
        question: "Why is venous blood purple-red?",
        options: [
            "Because it contains more oxygen",
            "Because it contains more carbon dioxide (deoxyhemoglobin)",
            "Because it contains waste products",
            "Because it flows slower"
        ],
        correctAnswer: 1,
        explanation: "Venous blood appears purple-red because it contains deoxygenated hemoglobin (deoxyhemoglobin) which has a darker color."
    },
    {
        question: "How many times more viscous is blood compared to water?",
        options: [
            "2x",
            "3x",
            "5x",
            "10x"
        ],
        correctAnswer: 2,
        explanation: "Blood is approximately 5 times more viscous than water due to the presence of red blood cells and plasma proteins."
    },
    {
        question: "What are the three main types of blood cells?",
        options: [
            "Erythrocytes, lymphocytes, thrombocytes",
            "Leukocytes, erythrocytes, thrombocytes",
            "Neutrophils, erythrocytes, platelets",
            "Monocytes, lymphocytes, erythrocytes"
        ],
        correctAnswer: 1,
        explanation: "The three main types of blood cells are erythrocytes (red blood cells), leukocytes (white blood cells), and thrombocytes (platelets)."
    },
    {
        question: "Which blood cells are primarily responsible for oxygen transport?",
        options: [
            "Leukocytes",
            "Erythrocytes",
            "Thrombocytes",
            "Lymphocytes"
        ],
        correctAnswer: 1,
        explanation: "Erythrocytes (red blood cells) contain hemoglobin which binds to and transports oxygen throughout the body."
    },
    {
        question: "What is the nutritive function of blood?",
        options: [
            "Carrying oxygen to tissues",
            "Transporting hormones",
            "Carrying nutrients from digestive system to tissues",
            "Regulating body temperature"
        ],
        correctAnswer: 2,
        explanation: "The nutritive function of blood involves transporting nutrients like glucose, amino acids, lipids, and vitamins from the digestive system to all body tissues."
    },
    {
        question: "Which blood cells are responsible for phagocytosis of bacteria?",
        options: [
            "Erythrocytes and platelets",
            "Neutrophils and monocytes",
            "Lymphocytes only",
            "All white blood cells equally"
        ],
        correctAnswer: 1,
        explanation: "Neutrophils and monocytes are phagocytic white blood cells that engulf and destroy bacteria through phagocytosis."
    },
    {
        question: "How does blood help regulate body temperature?",
        options: [
            "By changing its viscosity",
            "By transporting heat from core to surface for dissipation",
            "By producing heat through metabolism",
            "By changing its pH"
        ],
        correctAnswer: 1,
        explanation: "Blood helps regulate body temperature by transporting heat from the body core to the surface where it can be dissipated through the skin."
    },
    {
        question: "What is the process of producing new blood cells called?",
        options: [
            "Hemolysis",
            "Hematopoiesis",
            "Hemostasis",
            "Hemoconcentration"
        ],
        correctAnswer: 1,
        explanation: "Hematopoiesis is the continuous process of producing new blood cells from hematopoietic stem cells, primarily in the bone marrow."
    },
    {
        question: "Where does hematopoiesis primarily occur in adults?",
        options: [
            "Liver",
            "Spleen",
            "Bone marrow",
            "Yolk sac"
        ],
        correctAnswer: 2,
        explanation: "In adults, hematopoiesis primarily occurs in the bone marrow, though it begins in the yolk sac and liver during fetal development."
    },
    {
        question: "Which organ is known as the 'graveyard of RBC'?",
        options: [
            "Liver",
            "Bone marrow",
            "Spleen",
            "Kidneys"
        ],
        correctAnswer: 2,
        explanation: "The spleen is known as the 'graveyard of RBC' because it filters out and removes old, damaged red blood cells from circulation."
    },
    {
        question: "What are hematopoietic stem cells capable of?",
        options: [
            "Only producing red blood cells",
            "Only producing white blood cells",
            "Self-renewal and differentiation into all blood cell types",
            "Only producing platelets"
        ],
        correctAnswer: 2,
        explanation: "Hematopoietic stem cells are multipotent cells capable of self-renewal and differentiation into all types of blood cells."
    },
    {
        question: "Which disorder can result from disruptions in hematopoiesis?",
        options: [
            "Diabetes",
            "Hypertension",
            "Anemia and leukemia",
            "Arthritis"
        ],
        correctAnswer: 2,
        explanation: "Disruptions in hematopoiesis can lead to blood disorders like anemia (reduced RBCs) and leukemia (cancer of white blood cells)."
    },
    {
        question: "What does MCV (Mean Corpuscular Volume) measure?",
        options: [
            "Hemoglobin concentration in RBC",
            "Average size of RBC",
            "Variation in RBC size",
            "Number of RBC"
        ],
        correctAnswer: 1,
        explanation: "MCV measures the average size or volume of red blood cells, which helps classify different types of anemia."
    },
    {
        question: "What does MCH (Mean Corpuscular Hemoglobin) measure?",
        options: [
            "Average size of RBC",
            "Average amount of hemoglobin in a single RBC",
            "Hemoglobin concentration within RBC",
            "Variation in RBC size"
        ],
        correctAnswer: 1,
        explanation: "MCH measures the average amount (weight) of hemoglobin in a single red blood cell."
    },
    {
        question: "What is the function of platelets?",
        options: [
            "Oxygen transport",
            "Immune defense",
            "Blood clotting",
            "Nutrient transport"
        ],
        correctAnswer: 2,
        explanation: "Platelets (thrombocytes) are cell fragments that play a crucial role in blood clotting (hemostasis) to prevent excessive bleeding."
    },
    {
        question: "Which of the following is NOT a function of blood?",
        options: [
            "Nutritive function",
            "Respiratory function",
            "Electrical impulse conduction",
            "Excretory function"
        ],
        correctAnswer: 2,
        explanation: "Electrical impulse conduction is primarily a function of nervous tissue, not blood. Blood performs nutritive, respiratory, excretory, and other functions but not electrical conduction."
    },
    {
        question: "How does blood help in acid-base balance regulation?",
        options: [
            "By producing acids",
            "Through plasma proteins and hemoglobin acting as buffers",
            "By changing its volume",
            "Through platelet aggregation"
        ],
        correctAnswer: 1,
        explanation: "Plasma proteins and hemoglobin act as buffers in the blood, helping to maintain the pH balance by neutralizing excess acids or bases."
    },
    {
        question: "What does RDW (Red cell Distribution Width) measure?",
        options: [
            "Average RBC size",
            "Average hemoglobin content",
            "Variation in RBC size",
            "RBC count"
        ],
        correctAnswer: 2,
        explanation: "RDW measures the variation in red blood cell size. A high RDW indicates greater variation in cell sizes (anisocytosis)."
    },
    {
        question: "Which white blood cells are primarily involved in phagocytosis?",
        options: [
            "Lymphocytes only",
            "Neutrophils and monocytes",
            "Eosinophils only",
            "Basophils only"
        ],
        correctAnswer: 1,
        explanation: "Neutrophils and monocytes are the primary phagocytic white blood cells that engulf and destroy pathogens like bacteria."
    },
    {
        question: "What is the normal lifespan of a red blood cell?",
        options: [
            "30 days",
            "60 days",
            "120 days",
            "1 year"
        ],
        correctAnswer: 2,
        explanation: "Red blood cells have a lifespan of approximately 120 days before they are removed from circulation by the spleen."
    },
    {
        question: "Which blood component is responsible for transporting hormones?",
        options: [
            "Red blood cells only",
            "White blood cells only",
            "Plasma",
            "Platelets only"
        ],
        correctAnswer: 2,
        explanation: "Hormones are transported throughout the body dissolved in the plasma component of blood."
    },
    {
        question: "What does MCHC (Mean Corpuscular Hemoglobin Concentration) measure?",
        options: [
            "Average size of RBC",
            "Average hemoglobin amount per RBC",
            "Average hemoglobin concentration within RBC",
            "Variation in RBC hemoglobin content"
        ],
        correctAnswer: 2,
        explanation: "MCHC measures the average concentration of hemoglobin within red blood cells, expressed as a percentage."
    },
    {
        question: "What does the NLR (Neutrophil-Lymphocyte Ratio) indicate?",
        options: [
            "Oxygen carrying capacity",
            "Inflammation level",
            "Clotting ability",
            "Blood volume"
        ],
        correctAnswer: 1,
        explanation: "NLR is an inflammatory marker that indicates the level of inflammation in the body, with higher ratios suggesting greater inflammation."
    },
    {
        question: "What is the main function of plasma in blood?",
        options: [
            "Carrying oxygen",
            "Clotting blood",
            "Transporting cells, nutrients, hormones, and waste",
            "Fighting infection"
        ],
        correctAnswer: 2,
        explanation: "Plasma is the liquid component of blood that transports blood cells, nutrients, hormones, waste products, and other substances throughout the body."
    },
    {
        question: "Which blood cells are involved in specific immune responses?",
        options: [
            "Erythrocytes",
            "Lymphocytes",
            "Platelets",
            "All white blood cells equally"
        ],
        correctAnswer: 1,
        explanation: "Lymphocytes (B-cells and T-cells) are responsible for specific immune responses, including antibody production and cellular immunity."
    },
    {
        question: "What does MPV (Mean Platelet Volume) indicate?",
        options: [
            "Platelet count",
            "Platelet activation and size",
            "Clotting time",
            "Bleeding tendency"
        ],
        correctAnswer: 1,
        explanation: "MPV measures the average size of platelets, which can indicate platelet activation. Larger platelets are generally more active."
    },
    {
        question: "How does blood contribute to the excretory function?",
        options: [
            "By producing urine",
            "By carrying waste products to excretory organs",
            "By filtering blood in the kidneys",
            "By storing waste products"
        ],
        correctAnswer: 1,
        explanation: "Blood carries metabolic waste products (like urea, creatinine, and carbon dioxide) from tissues to excretory organs (kidneys, lungs, liver) for removal."
    },
    {
        question: "What is the primary site of hematopoiesis during fetal development?",
        options: [
            "Bone marrow only",
            "Yolk sac and liver",
            "Spleen only",
            "Thymus"
        ],
        correctAnswer: 1,
        explanation: "During fetal development, hematopoiesis begins in the yolk sac, then shifts to the liver and spleen before finally establishing in the bone marrow."
    },
    {
        question: "Which of the following is a characteristic of arterial blood?",
        options: [
            "Purple-red color",
            "High carbon dioxide content",
            "Flows toward the heart",
            "Scarlet red color"
        ],
        correctAnswer: 3,
        explanation: "Arterial blood is characterized by its scarlet red color due to high oxygen content (oxyhemoglobin)."
    },
    {
        question: "What is the role of hemoglobin in acid-base balance?",
        options: [
            "It produces acids",
            "It acts as a buffer",
            "It transports bases only",
            "It has no role in acid-base balance"
        ],
        correctAnswer: 1,
        explanation: "Hemoglobin acts as a buffer by binding to hydrogen ions, helping to maintain the blood's pH balance."
    },
    {
        question: "What does PDW (Platelet Distribution Width) measure?",
        options: [
            "Average platelet size",
            "Variation in platelet size",
            "Platelet count",
            "Platelet function"
        ],
        correctAnswer: 1,
        explanation: "PDW measures the variation in platelet size. Higher PDW indicates greater variation in platelet sizes."
    },
    {
        question: "Which component gives blood its viscosity?",
        options: [
            "Water content",
            "Red blood cells and plasma proteins",
            "Hormones",
            "Electrolytes"
        ],
        correctAnswer: 1,
        explanation: "The presence of red blood cells and plasma proteins (especially fibrinogen and globulins) gives blood its viscosity, making it thicker than water."
    },
    {
        question: "What is the defensive function of blood primarily carried out by?",
        options: [
            "Red blood cells",
            "White blood cells",
            "Platelets",
            "Plasma"
        ],
        correctAnswer: 1,
        explanation: "The defensive function of blood is primarily carried out by white blood cells (leukocytes) through various immune mechanisms."
    },
    {
        question: "How does blood help in water balance regulation?",
        options: [
            "By producing water",
            "By transporting water to and from tissues",
            "By storing water",
            "By filtering water in kidneys only"
        ],
        correctAnswer: 1,
        explanation: "Blood helps regulate water balance by transporting water to and from tissues and by influencing kidney function through hormones and osmotic pressure."
    },
    {
        question: "What are hematopoietic stem cells?",
        options: [
            "Mature red blood cells",
            "Specialized white blood cells",
            "Multipotent cells that can become any blood cell",
            "Platelet precursors"
        ],
        correctAnswer: 2,
        explanation: "Hematopoietic stem cells are multipotent cells found in bone marrow that can self-renew and differentiate into all types of blood cells."
    },
    {
        question: "What is the significance of hematological indices?",
        options: [
            "They measure blood volume",
            "They diagnose diseases like anemia and infection",
            "They determine blood type",
            "They measure blood pressure"
        ],
        correctAnswer: 1,
        explanation: "Hematological indices are used to diagnose various conditions like anemia, infection, inflammation, and to assess disease severity."
    },
    {
        question: "Which blood cells are described as 'fluid of growth' carriers?",
        options: [
            "All blood components together",
            "Red blood cells only",
            "Plasma only",
            "White blood cells only"
        ],
        correctAnswer: 0,
        explanation: "Blood as a whole is called the 'fluid of growth' because it carries nutritive substances from the digestive system to all tissues for growth and repair."
    },
    {
        question: "What is the primary reason blood is considered the 'fluid of health'?",
        options: [
            "Because it is red",
            "Because it transports oxygen",
            "Because it protects against diseases",
            "Because it regulates temperature"
        ],
        correctAnswer: 2,
        explanation: "Blood is considered the 'fluid of health' because it contains white blood cells and antibodies that protect the body against diseases and infections."
    },
    {
        question: "What happens to hematopoiesis after birth?",
        options: [
            "It stops completely",
            "It shifts to the bone marrow",
            "It only occurs in the spleen",
            "It occurs in all organs equally"
        ],
        correctAnswer: 1,
        explanation: "After birth, hematopoiesis shifts from the fetal sites (yolk sac and liver) to the bone marrow, where it continues throughout life."
    },
    {
        question: "Which cells are involved in the respiratory function of blood?",
        options: [
            "Red blood cells",
            "White blood cells",
            "Platelets",
            "All blood cells equally"
        ],
        correctAnswer: 0,
        explanation: "Red blood cells, specifically the hemoglobin they contain, are primarily responsible for the respiratory function of transporting oxygen and carbon dioxide."
    },
    {
        question: "What is measured by the PLR (Platelet-Lymphocyte Ratio)?",
        options: [
            "Oxygen carrying capacity",
            "Inflammation level",
            "Clotting time",
            "Immune response strength"
        ],
        correctAnswer: 1,
        explanation: "PLR is an inflammatory marker that reflects the level of inflammation in the body and has prognostic value in various diseases."
    },
    {
        question: "How does blood viscosity affect blood flow?",
        options: [
            "Higher viscosity increases flow rate",
            "Higher viscosity decreases flow rate",
            "Viscosity has no effect on flow",
            "Only plasma viscosity matters for flow"
        ],
        correctAnswer: 1,
        explanation: "Higher blood viscosity increases resistance to flow, which decreases blood flow rate and increases the workload on the heart."
    },
    {
        question: "What is the primary function of neutrophils?",
        options: [
            "Antibody production",
            "Phagocytosis of bacteria",
            "Blood clotting",
            "Oxygen transport"
        ],
        correctAnswer: 1,
        explanation: "Neutrophils are the most abundant white blood cells and their primary function is phagocytosis - engulfing and destroying bacteria and other pathogens."
    },
    {
        question: "Which blood cells are also called thrombocytes?",
        options: [
            "Red blood cells",
            "White blood cells",
            "Platelets",
            "Lymphocytes"
        ],
        correctAnswer: 2,
        explanation: "Platelets are also called thrombocytes. They are cell fragments involved in blood clotting and hemostasis."
    },
    {
        question: "What condition might be indicated by a low MCV?",
        options: [
            "Macrocytic anemia",
            "Microcytic anemia",
            "Normocytic anemia",
            "No specific condition"
        ],
        correctAnswer: 1,
        explanation: "A low MCV indicates microcytic anemia, where red blood cells are smaller than normal, often seen in iron deficiency anemia or thalassemia."
    },
    {
        question: "What is the primary component of red blood cells that binds oxygen?",
        options: [
            "Plasma",
            "Hemoglobin",
            "Globulins",
            "Fibrinogen"
        ],
        correctAnswer: 1,
        explanation: "Hemoglobin is the iron-containing protein in red blood cells that binds to oxygen, enabling oxygen transport throughout the body."
    },
    {
        question: "Which blood cells increase in number during parasitic infections?",
        options: [
            "Neutrophils",
            "Eosinophils",
            "Basophils",
            "Lymphocytes"
        ],
        correctAnswer: 1,
        explanation: "Eosinophils increase in number during parasitic infections and allergic reactions. They combat parasites and modulate inflammatory responses."
    },
    {
        question: "What is the average percentage of blood volume occupied by red blood cells?",
        options: [
            "25%",
            "45%",
            "65%",
            "85%"
        ],
        correctAnswer: 1,
        explanation: "Red blood cells typically make up about 45% of total blood volume in males and slightly less in females. This percentage is called hematocrit."
    }
];