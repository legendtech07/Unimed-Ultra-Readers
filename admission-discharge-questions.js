const allQuestions = {
    quiz1: [
        {
            question: "Admission is the process of official acceptance of __________ into the hospital for the purpose of receiving care.",
            answer: "patient",
            explanation: "The document defines admission as the official acceptance of a patient into the hospital for care."
        },
        {
            question: "One purpose of admission is for observation of the patient's __________.",
            answer: "conditions",
            explanation: "The purposes listed include observation of the patient's conditions."
        },
        {
            question: "Admission allows patients to receive treatment for particular __________.",
            answer: "ailment",
            explanation: "The document states that one purpose is to receive treatment for particular ailments."
        },
        {
            question: "__________ admission is a planned admission where the patient is on a waiting list.",
            answer: "Schedule",
            explanation: "Schedule admission is described as planned admission with the patient on a waiting list."
        },
        {
            question: "Emergency admission is also known as __________ admission.",
            answer: "Non Ambulant",
            explanation: "The types of admission include Emergency/Non Ambulant as one category."
        },
        {
            question: "The __________ contains vital signs equipment for admission procedures.",
            answer: "trolley",
            explanation: "The admission trolley is mentioned as containing vital signs equipment."
        },
        {
            question: "A __________ is used to measure blood pressure during admission.",
            answer: "Sphygmomanometer",
            explanation: "Sphygmomanometers are listed in the vital signs tray equipment."
        },
        {
            question: "For expectant mothers, a __________ is included in the admission equipment.",
            answer: "Fetoscope",
            explanation: "The equipment list specifies a fetoscope for expectant women."
        },
        {
            question: "The bottom shelf of the admission trolley contains __________ bottles.",
            answer: "specimen",
            explanation: "Specimen bottles are listed on the bottom shelves of the admission trolley."
        },
        {
            question: "Proper preparation includes making an __________ bed to receive the patient.",
            answer: "open",
            explanation: "The preparation section states to 'make an open bed to receive the patient'."
        }
    ],
    quiz2: [
        {
            question: "During reception, the patient should be addressed by their proper __________ such as Mr., Mrs., Chief, etc.",
            answer: "title",
            explanation: "The reception procedure specifies addressing patients by their proper titles."
        },
        {
            question: "The nurse should __________ herself to the patient during reception.",
            answer: "introduce",
            explanation: "The procedure states the nurse should introduce herself/himself to the patient."
        },
        {
            question: "Patients should be oriented to the ward environment, including the __________ and bathroom.",
            answer: "toilet",
            explanation: "Orientation includes showing the patient the toilet and bathroom facilities."
        },
        {
            question: "Base line observations include checking and recording temperature, pulse, __________, and blood pressure.",
            answer: "respiration",
            explanation: "Vital signs monitoring includes temperature, pulse, respiration, and blood pressure."
        },
        {
            question: "Patients are weighed and __________ is tested routinely during admission.",
            answer: "urine",
            explanation: "The procedure includes weighing the patient and testing urine routinely."
        },
        {
            question: "__________ should be provided while the patient changes into hospital clothes.",
            answer: "Privacy",
            explanation: "The document emphasizes providing privacy during clothing change."
        },
        {
            question: "Patient's __________ are recorded in the personal property books.",
            answer: "valuables",
            explanation: "Valuables are recorded in personal property books according to the procedure."
        },
        {
            question: "All drugs brought in by the patient should be __________.",
            answer: "noted",
            explanation: "The admission procedure requires noting all drugs brought by the patient."
        },
        {
            question: "A __________ card and hospital instructions sheet are given to relatives.",
            answer: "visiting",
            explanation: "Visiting cards and instruction sheets are provided to relatives."
        },
        {
            question: "The __________ should be informed about the patient's arrival for clerking.",
            answer: "doctor",
            explanation: "The procedure requires informing the doctor about the patient's arrival."
        }
    ],
    quiz3: [
        {
            question: "Emergency admission occurs when a patient takes ill suddenly or suffers any form of __________.",
            answer: "accident",
            explanation: "Emergency admission is for sudden illness or accident cases."
        },
        {
            question: "Emergency patients typically come through the __________ or Emergency Department.",
            answer: "casualty",
            explanation: "The document states emergency patients come through casualty or emergency department."
        },
        {
            question: "The emergency tray contains resuscitative drugs like __________ for emergency cases.",
            answer: "Adrenaline",
            explanation: "Adrenaline is listed as one of the resuscitative drugs in the emergency tray."
        },
        {
            question: "__________ is included in the emergency drugs for its anti-inflammatory effects.",
            answer: "Hydrocortisone",
            explanation: "Hydrocortisone is listed among the emergency resuscitative drugs."
        },
        {
            question: "An __________ cylinder with proper gauge must be available for emergency cases.",
            answer: "oxygen",
            explanation: "Oxygen cylinder is specified in the emergency equipment list."
        },
        {
            question: "An __________ bag is part of the emergency equipment for resuscitation.",
            answer: "Ambu",
            explanation: "Ambu bag is listed in the emergency equipment for respiratory support."
        },
        {
            question: "A __________ machine in working order is essential for emergency admissions.",
            answer: "suctioning",
            explanation: "Electric suctioning machine is required for emergency procedures."
        },
        {
            question: "For adult admission, the ward sister must be informed from the __________ department.",
            answer: "out-patient",
            explanation: "The adult admission procedure starts with notification from the out-patient department."
        },
        {
            question: "During adult admission, the nurse receives the __________ card and reads doctor's notes.",
            answer: "outpatient",
            explanation: "The procedure includes receiving the outpatient card and reviewing doctor's notes."
        },
        {
            question: "General observation from __________ to toe is carried out during adult admission.",
            answer: "head",
            explanation: "The document specifies head-to-toe observation during admission assessment."
        }
    ],
    quiz4: [
        {
            question: "For child admission, all particulars must be obtained from those who __________ the child to hospital.",
            answer: "bring",
            explanation: "Child admission requires obtaining information from those accompanying the child."
        },
        {
            question: "The nurse must develop good __________ relationship with the mother during child admission.",
            answer: "interpersonal",
            explanation: "The document emphasizes developing good interpersonal relationships with parents."
        },
        {
            question: "History should include whether the child had a __________ birth.",
            answer: "normal",
            explanation: "Birth history includes asking about normal or abnormal birth circumstances."
        },
        {
            question: "Breast feeding history should note if the child was fed on the breast or __________ milk.",
            answer: "artificial",
            explanation: "Feeding history includes whether breast or artificial milk was used."
        },
        {
            question: "History should include any childhood illnesses like __________.",
            answer: "Measles",
            explanation: "The document specifically mentions measles as an example of childhood illnesses."
        },
        {
            question: "Immunization history should note if the child has been fully __________.",
            answer: "immunized",
            explanation: "Complete immunization history is part of pediatric admission assessment."
        },
        {
            question: "For surgical cases, the __________ form must be signed by parents after explanation.",
            answer: "consent",
            explanation: "Parental consent is required for surgical procedures on children."
        },
        {
            question: "The child should be welcomed into the ward with __________.",
            answer: "relative",
            explanation: "The procedure starts with welcoming the child and relatives into the ward."
        },
        {
            question: "__________ should be provided for the patient and relatives during child admission.",
            answer: "Privacy",
            explanation: "Privacy is emphasized during the pediatric admission process."
        },
        {
            question: "The mother is reassured and allowed to __________ with the child during hospitalization.",
            answer: "stay",
            explanation: "The document encourages allowing mothers to stay with their hospitalized children."
        }
    ],
    quiz5: [
        {
            question: "Discharge is the __________ of patient from hospital when no longer needing confinement.",
            answer: "release",
            explanation: "Discharge is defined as the release of patients from hospital care."
        },
        {
            question: "Discharge occurs when the patient no longer suffers from a __________.",
            answer: "disease",
            explanation: "One purpose of discharge is when the patient no longer suffers from the disease."
        },
        {
            question: "__________ discharge occurs when patients leave against medical advice.",
            answer: "Self",
            explanation: "Self-discharge is mentioned as one type of discharge scenario."
        },
        {
            question: "Discharged patients need knowledge about their present __________.",
            answer: "illness",
            explanation: "Patient education about their illness is a key discharge need."
        },
        {
            question: "Patients must learn to function effectively within their __________ after discharge.",
            answer: "limitations",
            explanation: "Adapting to limitations imposed by illness is an important discharge consideration."
        },
        {
            question: "Discharge requires a written __________ from the doctor.",
            answer: "order",
            explanation: "A written discharge order from the doctor is required for discharge procedures."
        },
        {
            question: "Patients may need written instructions for __________ care after discharge.",
            answer: "home",
            explanation: "Home care instructions are part of discharge planning."
        },
        {
            question: "Preparation for discharge should start with the patient's __________.",
            answer: "admission",
            explanation: "The document states discharge planning should begin at admission."
        },
        {
            question: "Satisfactory __________ arrangements must be made before discharge.",
            answer: "financial",
            explanation: "Financial arrangements with the billing office are part of discharge procedures."
        },
        {
            question: "Unused medications not ordered for home use should be returned to the __________.",
            answer: "pharmacy",
            explanation: "The procedure specifies returning unused medications to the pharmacy for credit."
        }
    ]
};