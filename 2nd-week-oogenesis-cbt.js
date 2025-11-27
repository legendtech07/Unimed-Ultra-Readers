// Questions for CBT format (50 questions)
const cbtQuestions = [
    {
        question: "On day 8 of development, the blastocyst is:",
        options: [
            "Completely embedded in the endometrial stroma",
            "Partially embedded in the endometrial stroma",
            "Floating freely in the uterine cavity",
            "Attached to the fallopian tube"
        ],
        correctAnswer: 1,
        explanation: "On day 8, the blastocyst is partially embedded in the endometrial stroma. Complete embedding occurs later in the second week."
    },
    {
        question: "The trophoblast differentiates into two layers:",
        options: [
            "Epiblast and hypoblast",
            "Cytotrophoblast and syncytiotrophoblast",
            "Amnion and chorion",
            "Embryonic disc and extraembryonic mesoderm"
        ],
        correctAnswer: 1,
        explanation: "The trophoblast differentiates into an inner layer of mononucleated cells (cytotrophoblast) and an outer multinucleated zone (syncytiotrophoblast)."
    },
    {
        question: "The embryonic disc consists of:",
        options: [
            "Cytotrophoblast and syncytiotrophoblast",
            "Epiblast and hypoblast",
            "Amnion and yolk sac",
            "Extraembryonic mesoderm and cytotrophoblast"
        ],
        correctAnswer: 1,
        explanation: "The embryonic disc consists of two layers: a layer of small cuboidal cells (hypoblast) and a layer of high columnar cells (epiblast)."
    },
    {
        question: "The amniotic cavity appears within the:",
        options: [
            "Hypoblast",
            "Cytotrophoblast",
            "Epiblast",
            "Syncytiotrophoblast"
        ],
        correctAnswer: 2,
        explanation: "A small cavity appears within the epiblast, which enlarges to become the amniotic cavity."
    },
    {
        question: "On day 9, the penetration defect in the surface epithelium is closed by:",
        options: [
            "A blood clot",
            "A fibrin coagulum",
            "Epithelial cells",
            "Trophoblast cells"
        ],
        correctAnswer: 1,
        explanation: "The penetration defect in the surface epithelium is closed by a fibrin coagulum as the blastocyst becomes more deeply embedded."
    },
    {
        question: "The lacunar stage refers to the development of:",
        options: [
            "The amniotic cavity",
            "Vacuoles in the syncytiotrophoblast",
            "The primitive yolk sac",
            "The embryonic disc"
        ],
        correctAnswer: 1,
        explanation: "Vacuoles appear and form lacunae in the syncytium, giving this phase the name 'lacunar stage'."
    },
    {
        question: "The exocoelomic (Heuser's) membrane is formed by cells from the:",
        options: [
            "Epiblast",
            "Cytotrophoblast",
            "Hypoblast",
            "Syncytiotrophoblast"
        ],
        correctAnswer: 2,
        explanation: "Flattened cells from the hypoblast form the exocoelomic (Heuser's) membrane that lines the inner surface of the cytotrophoblast."
    },
    {
        question: "The exocoelomic membrane and hypoblast form the lining of the:",
        options: [
            "Amniotic cavity",
            "Chorionic cavity",
            "Primitive yolk sac",
            "Uterine cavity"
        ],
        correctAnswer: 2,
        explanation: "The exocoelomic membrane, together with the hypoblast, forms the lining of the exocoelomic cavity or primitive yolk sac."
    },
    {
        question: "By days 11-12, the blastocyst is:",
        options: [
            "Partially embedded in the endometrium",
            "Completely embedded in the endometrial stroma",
            "Attached to the fallopian tube",
            "Floating in the uterine cavity"
        ],
        correctAnswer: 1,
        explanation: "By the 11th to 12th day, the blastocyst is completely embedded in the endometrial stroma."
    },
    {
        question: "The uteroplacental circulation is established when:",
        options: [
            "The amniotic cavity forms",
            "Maternal blood enters the lacunar system",
            "The embryonic disc forms",
            "The chorionic cavity develops"
        ],
        correctAnswer: 1,
        explanation: "The syncytial lacunae become continuous with maternal sinusoids, and maternal blood enters the lacunar system, establishing the uteroplacental circulation."
    },
    {
        question: "The extraembryonic mesoderm appears between the:",
        options: [
            "Epiblast and hypoblast",
            "Cytotrophoblast and exocoelomic cavity",
            "Amnion and yolk sac",
            "Syncytiotrophoblast and endometrial stroma"
        ],
        correctAnswer: 1,
        explanation: "The extraembryonic mesoderm appears between the inner surface of the cytotrophoblast and the outer surface of the exocoelomic cavity."
    },
    {
        question: "The extraembryonic cavity is also known as the:",
        options: [
            "Amniotic cavity",
            "Yolk sac",
            "Chorionic cavity",
            "Exocoelomic cavity"
        ],
        correctAnswer: 2,
        explanation: "Large cavities develop in the extraembryonic mesoderm to form the extraembryonic cavity, or chorionic cavity."
    },
    {
        question: "The extraembryonic mesoderm lining the cytotrophoblast and amnion is called:",
        options: [
            "Extraembryonic somatic mesoderm",
            "Extraembryonic splanchnic mesoderm",
            "Embryonic mesoderm",
            "Paraxial mesoderm"
        ],
        correctAnswer: 0,
        explanation: "The extraembryonic mesoderm lining the cytotrophoblast and amnion is called the extraembryonic somatic mesoderm."
    },
    {
        question: "The extraembryonic mesoderm lining the yolk sac is called:",
        options: [
            "Extraembryonic somatic mesoderm",
            "Extraembryonic splanchnic mesoderm",
            "Embryonic mesoderm",
            "Paraxial mesoderm"
        ],
        correctAnswer: 1,
        explanation: "The extraembryonic mesoderm lining the yolk sac is known as the extraembryonic splanchnic mesoderm."
    },
    {
        question: "The decidua reaction refers to changes in the:",
        options: [
            "Trophoblast",
            "Embryonic disc",
            "Endometrium",
            "Amniotic cavity"
        ],
        correctAnswer: 2,
        explanation: "Cells of the endometrium become polyhedral and loaded with glycogen and lipids, with intercellular spaces filled with extravasate - these changes are known as the decidua reaction."
    },
    {
        question: "By day 13, the surface defect in the endometrium has:",
        options: [
            "Become larger",
            "Remained the same",
            "Usually healed",
            "Formed a blood clot"
        ],
        correctAnswer: 2,
        explanation: "By the 13th day, the surface defect in the endometrium has usually healed."
    },
    {
        question: "Primary villi are formed by:",
        options: [
            "Cells of the hypoblast",
            "Cells of the cytotrophoblast penetrating the syncytiotrophoblast",
            "Cells of the epiblast",
            "Cells of the extraembryonic mesoderm"
        ],
        correctAnswer: 1,
        explanation: "Cells of the cytotrophoblast proliferate locally and penetrate into the syncytiotrophoblast, forming cellular columns surrounded by syncytium, known as primary villi."
    },
    {
        question: "The secondary yolk sac is formed by:",
        options: [
            "Cells from the epiblast",
            "Cells from the hypoblast",
            "Cells from the cytotrophoblast",
            "Cells from the syncytiotrophoblast"
        ],
        correctAnswer: 1,
        explanation: "The hypoblast produces additional cells that migrate along the inside of the exocoelomic membrane, forming a new cavity known as the secondary yolk sac or definitive yolk sac."
    },
    {
        question: "The connecting stalk eventually becomes the:",
        options: [
            "Placenta",
            "Amniotic sac",
            "Umbilical cord",
            "Yolk sac"
        ],
        correctAnswer: 2,
        explanation: "With development of blood vessels, the connecting stalk becomes the umbilical cord."
    },
    {
        question: "Ectopic pregnancies occur in what percentage of all pregnancies?",
        options: [
            "0.5%",
            "2%",
            "5%",
            "10%"
        ],
        correctAnswer: 1,
        explanation: "Ectopic pregnancies occur in 2% of all pregnancies and account for 9% of all pregnancy-related deaths for the mother."
    },
    {
        question: "What percentage of oocytes that implant survive until the second week?",
        options: [
            "30%",
            "45%",
            "58%",
            "75%"
        ],
        correctAnswer: 2,
        explanation: "Of the 70% to 75% of oocytes that implant, only 58% survive until the second week."
    },
    {
        question: "The bilaminar germ disc remains small, measuring approximately:",
        options: [
            "0.1 to 0.2 mm",
            "0.5 to 1.0 mm",
            "1.0 to 2.0 mm",
            "2.0 to 3.0 mm"
        ],
        correctAnswer: 0,
        explanation: "Growth of the bilaminar disc is relatively slow compared with that of the trophoblast, so it remains very small (0.1 to 0.2 mm)."
    },
    {
        question: "The outer multinucleated zone of the trophoblast is called the:",
        options: [
            "Cytotrophoblast",
            "Syncytiotrophoblast",
            "Epiblast",
            "Hypoblast"
        ],
        correctAnswer: 1,
        explanation: "The trophoblast differentiates into an inner layer of mononucleated cells (cytotrophoblast) and an outer multinucleated zone (syncytiotrophoblast)."
    },
    {
        question: "The layer of high columnar cells in the embryonic disc is the:",
        options: [
            "Hypoblast",
            "Epiblast",
            "Cytotrophoblast",
            "Syncytiotrophoblast"
        ],
        correctAnswer: 1,
        explanation: "The embryonic disc consists of two layers: a layer of small cuboidal cells (hypoblast) and a layer of high columnar cells (epiblast)."
    },
    {
        question: "The primitive yolk sac is also known as the:",
        options: [
            "Amniotic cavity",
            "Chorionic cavity",
            "Exocoelomic cavity",
            "Uterine cavity"
        ],
        correctAnswer: 2,
        explanation: "The exocoelomic membrane, together with the hypoblast, forms the lining of the exocoelomic cavity, or primitive yolk sac."
    },
    {
        question: "Maternal blood enters the lacunar system through:",
        options: [
            "Maternal veins",
            "Maternal arteries",
            "Sinusoids",
            "Capillaries"
        ],
        correctAnswer: 2,
        explanation: "The syncytial lacunae become continuous with the sinusoids, and maternal blood enters the lacunar system."
    },
    {
        question: "The chorionic plate is formed by:",
        options: [
            "The epiblast",
            "The hypoblast",
            "Extraembryonic mesoderm lining the cytotrophoblast",
            "The syncytiotrophoblast"
        ],
        correctAnswer: 2,
        explanation: "The extraembryonic mesoderm lining the inside of the cytotrophoblast is then known as the chorionic plate."
    },
    {
        question: "Primary villi consist of:",
        options: [
            "Cytotrophoblast only",
            "Syncytiotrophoblast only",
            "Cellular columns with syncytial covering",
            "Extraembryonic mesoderm only"
        ],
        correctAnswer: 2,
        explanation: "Cellular columns with the syncytial covering are known as primary villi."
    },
    {
        question: "The definitive yolk sac is also called the:",
        options: [
            "Primitive yolk sac",
            "Secondary yolk sac",
            "Exocoelomic cavity",
            "Amniotic cavity"
        ],
        correctAnswer: 1,
        explanation: "The new cavity formed within the exocoelomic cavity is known as the secondary yolk sac or definitive yolk sac."
    },
    {
        question: "Extraembryonic mesoderm traverses the chorionic cavity in the:",
        options: [
            "Chorionic plate",
            "Connecting stalk",
            "Yolk sac",
            "Amnion"
        ],
        correctAnswer: 1,
        explanation: "The only place where extraembryonic mesoderm traverses the chorionic cavity is in the connecting stalk."
    },
    {
        question: "In the second week, the blastocyst implantation site is characterized by:",
        options: [
            "Decreased vascularity",
            "Increased vascularity and edema",
            "Necrosis",
            "Fibrosis"
        ],
        correctAnswer: 1,
        explanation: "The implantation site shows increased vascularity and edema as part of the decidual reaction."
    },
    {
        question: "The syncytiotrophoblast is characterized by:",
        options: [
            "Mononucleated cells",
            "Multinucleated zone",
            "Cuboidal cells",
            "Columnar cells"
        ],
        correctAnswer: 1,
        explanation: "The syncytiotrophoblast is the outer multinucleated zone of the trophoblast."
    },
    {
        question: "The cytotrophoblast is characterized by:",
        options: [
            "Mononucleated cells",
            "Multinucleated zone",
            "Flattened cells",
            "Columnar cells"
        ],
        correctAnswer: 0,
        explanation: "The cytotrophoblast is the inner layer of mononucleated cells of the trophoblast."
    },
    {
        question: "The hypoblast layer consists of:",
        options: [
            "High columnar cells",
            "Small cuboidal cells",
            "Multinucleated cells",
            "Flattened cells"
        ],
        correctAnswer: 1,
        explanation: "The hypoblast layer consists of small cuboidal cells in the embryonic disc."
    },
    {
        question: "The epiblast layer consists of:",
        options: [
            "High columnar cells",
            "Small cuboidal cells",
            "Multinucleated cells",
            "Flattened cells"
        ],
        correctAnswer: 0,
        explanation: "The epiblast layer consists of high columnar cells in the embryonic disc."
    },
    {
        question: "The amniotic cavity forms within the:",
        options: [
            "Hypoblast",
            "Epiblast",
            "Cytotrophoblast",
            "Syncytiotrophoblast"
        ],
        correctAnswer: 1,
        explanation: "A small cavity appears within the epiblast and enlarges to become the amniotic cavity."
    },
    {
        question: "The lacunar stage is characterized by:",
        options: [
            "Formation of the amniotic cavity",
            "Formation of vacuoles in the syncytiotrophoblast",
            "Formation of the embryonic disc",
            "Formation of the hypoblast"
        ],
        correctAnswer: 1,
        explanation: "The lacunar stage is characterized by the appearance of vacuoles that form lacunae in the syncytiotrophoblast."
    },
    {
        question: "The exocoelomic (Heuser's) membrane is formed by cells originating from the:",
        options: [
            "Epiblast",
            "Hypoblast",
            "Cytotrophoblast",
            "Syncytiotrophoblast"
        ],
        correctAnswer: 1,
        explanation: "Flattened cells from the hypoblast form the exocoelomic (Heuser's) membrane."
    },
    {
        question: "The primitive yolk sac is lined by:",
        options: [
            "Epiblast and cytotrophoblast",
            "Hypoblast and exocoelomic membrane",
            "Syncytiotrophoblast and cytotrophoblast",
            "Amnion and chorion"
        ],
        correctAnswer: 1,
        explanation: "The exocoelomic membrane, together with the hypoblast, forms the lining of the exocoelomic cavity or primitive yolk sac."
    },
    {
        question: "By days 11-12, maternal blood enters the:",
        options: [
            "Amniotic cavity",
            "Exocoelomic cavity",
            "Lacunar system",
            "Embryonic disc"
        ],
        correctAnswer: 2,
        explanation: "Maternal blood enters the lacunar system, establishing the uteroplacental circulation."
    },
    {
        question: "The extraembryonic mesoderm fills the space between the:",
        options: [
            "Epiblast and hypoblast",
            "Trophoblast and amnion/exocoelomic membrane",
            "Amnion and yolk sac",
            "Syncytiotrophoblast and endometrial stroma"
        ],
        correctAnswer: 1,
        explanation: "The extraembryonic mesoderm fills all of the space between the trophoblast externally and the amnion and exocoelomic membrane internally."
    },
    {
        question: "The chorionic cavity is also known as the:",
        options: [
            "Amniotic cavity",
            "Yolk sac",
            "Extraembryonic coelom",
            "Exocoelomic cavity"
        ],
        correctAnswer: 2,
        explanation: "The extraembryonic coelom expands and forms a large cavity, the chorionic cavity."
    },
    {
        question: "The extraembryonic somatic mesoderm lines the:",
        options: [
            "Yolk sac",
            "Cytotrophoblast and amnion",
            "Syncytiotrophoblast",
            "Embryonic disc"
        ],
        correctAnswer: 1,
        explanation: "The extraembryonic mesoderm lining the cytotrophoblast and amnion is called the extraembryonic somatic mesoderm."
    },
    {
        question: "The extraembryonic splanchnic mesoderm lines the:",
        options: [
            "Yolk sac",
            "Cytotrophoblast and amnion",
            "Syncytiotrophoblast",
            "Embryonic disc"
        ],
        correctAnswer: 0,
        explanation: "The extraembryonic mesoderm lining the yolk sac is known as the extraembryonic splanchnic mesoderm."
    },
    {
        question: "The decidua reaction involves accumulation of:",
        options: [
            "Glycogen and lipids in endometrial cells",
            "Blood in the lacunae",
            "Fluid in the amniotic cavity",
            "Cells in the trophoblast"
        ],
        correctAnswer: 0,
        explanation: "Cells of the endometrium become polyhedral and loaded with glycogen and lipids as part of the decidua reaction."
    },
    {
        question: "On day 13, cellular columns formed by cytotrophoblast are called:",
        options: [
            "Secondary villi",
            "Tertiary villi",
            "Primary villi",
            "Anchoring villi"
        ],
        correctAnswer: 2,
        explanation: "Cellular columns with the syncytial covering are known as primary villi."
    },
        {
        question: "The extraembryonic mesoderm lining the yolk sac is known as:",
        options: [
            "Extraembryonic splanchnic mesoderm",
            "Extraembryonic somatic mesoderm",
            "Visceral mesoderm",
            "Parietal mesoderm"
        ],
        correctAnswer: 0,
        explanation: "The extraembryonic mesoderm lining the yolk sac is known as extraembryonic splanchnic mesoderm."
    },
    {
        question: "The bilaminar disc remains very small (0.1 to 0.2 mm) because:",
        options: [
            "Its growth is slow compared to the trophoblast",
            "It has limited blood supply",
            "It is compressed by the amniotic cavity",
            "It is inhibited by maternal hormones"
        ],
        correctAnswer: 0,
        explanation: "Growth of the bilaminar disc is relatively slow compared with that of the trophoblast, so it remains very small."
    },
    {
        question: "The changes in the endometrium where cells become polyhedral and loaded with glycogen and lipids is known as:",
        options: [
            "Decidua reaction",
            "Implantation reaction",
            "Stromal reaction",
            "Endometrial transformation"
        ],
        correctAnswer: 0,
        explanation: "The changes in endometrial cells (becoming polyhedral and loaded with glycogen and lipids) is known as the decidua reaction."
    },
    {
        question: "By day 13, the surface defect in the endometrium has usually:",
        options: [
            "Healed",
            "Enlarged",
            "Bled profusely",
            "Formed a scar"
        ],
        correctAnswer: 0,
        explanation: "By day 13, the surface defect in the endometrium has usually healed."
    },
    {
        question: "Cells of the cytotrophoblast proliferate and penetrate into the syncytiotrophoblast, forming:",
        options: [
            "Primary villi",
            "Secondary villi",
            "Tertiary villi",
            "Anchoring villi"
        ],
        correctAnswer: 0,
        explanation: "Cellular columns formed by cytotrophoblast cells penetrating into the syncytiotrophoblast, with syncytial covering, are known as primary villi."
    },
    {
        question: "The hypoblast produces additional cells that migrate and form a new cavity within the exocoelomic cavity called the:",
        options: [
            "Secondary yolk sac",
            "Amniotic cavity",
            "Chorionic cavity",
            "Allantoic cavity"
        ],
        correctAnswer: 0,
        explanation: "The hypoblast produces cells that form a new cavity within the exocoelomic cavity, known as the secondary yolk sac or definitive yolk sac."
    },
    {
        question: "The extraembryonic coelom expands and forms a large cavity called the:",
        options: [
            "Chorionic cavity",
            "Amniotic cavity",
            "Yolk sac cavity",
            "Exocoelomic cavity"
        ],
        correctAnswer: 0,
        explanation: "The extraembryonic coelom expands and forms a large cavity, the chorionic cavity."
    },
    {
        question: "The extraembryonic mesoderm lining the inside of the cytotrophoblast is then known as the:",
        options: [
            "Chorionic plate",
            "Amniotic membrane",
            "Yolk sac wall",
            "Connecting stalk"
        ],
        correctAnswer: 0,
        explanation: "The extraembryonic mesoderm lining the inside of the cytotrophoblast is known as the chorionic plate."
    },
    {
        question: "With development of blood vessels, the connecting stalk becomes the:",
        options: [
            "Umbilical cord",
            "Yolk stalk",
            "Allantoic stalk",
            "Body stalk"
        ],
        correctAnswer: 0,
        explanation: "With development of blood vessels, the connecting stalk becomes the umbilical cord."
    },
    {
        question: "Implantation that takes place outside the uterus results in:",
        options: [
            "Ectopic pregnancy",
            "Abnormal implantation",
            "Tubal pregnancy",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "Implantation outside the uterus results in an extra-uterine pregnancy, or ectopic pregnancy, which can occur in various locations including the fallopian tube (tubal pregnancy)."
    },
    {
        question: "Ectopic pregnancies account for what percentage of all pregnancy-related deaths for the mother?",
        options: [
            "9%",
            "15%",
            "25%",
            "5%"
        ],
        correctAnswer: 0,
        explanation: "Ectopic pregnancies occur in 2% of all pregnancies and account for 9% of all pregnancy-related deaths for the mother."
    },
    {
        question: "What percentage of oocytes that are fertilized and start cleavage fail to implant?",
        options: [
            "10-15%",
            "5-10%",
            "15-20%",
            "20-25%"
        ],
        correctAnswer: 0,
        explanation: "Even in fertile women under optimal conditions, 10% to 15% of oocytes that start cleavage fail to implant."
    },
    {
        question: "Of the 70-75% of oocytes that implant, what percentage survive until the second week?",
        options: [
            "58%",
            "65%",
            "75%",
            "80%"
        ],
        correctAnswer: 0,
        explanation: "Of the 70% to 75% that implant, only 58% survive until the second week."
        },
    {
        question: "The secondary yolk sac forms within the:",
        options: [
            "Amniotic cavity",
            "Exocoelomic cavity",
            "Chorionic cavity",
            "Uterine cavity"
        ],
        correctAnswer: 1,
        explanation: "The secondary yolk sac forms within the exocoelomic cavity."
    },
    {
        question: "The connecting stalk contains:",
        options: [
            "Extraembryonic mesoderm",
            "Embryonic mesoderm",
            "Trophoblast cells",
            "Endometrial cells"
        ],
        correctAnswer: 0,
        explanation: "The only place where extraembryonic mesoderm traverses the chorionic cavity is in the connecting stalk."
    },
    {
        question: "Ectopic pregnancies occur in what percentage of all pregnancies?",
        options: [
            "0.5%",
            "2%",
            "5%",
            "10%"
        ],
        correctAnswer: 1,
        explanation: "Ectopic pregnancies occur in 2% of all pregnancies and account for 9% of all pregnancy-related deaths for the mother."
    },
    {
        question: "What percentage of oocytes that implant survive until the second week?",
        options: [
            "30%",
            "45%",
            "58%",
            "75%"
        ],
        correctAnswer: 2,
        explanation: "Of the 70% to 75% of oocytes that implant, only 58% survive until the second week."
    },
    {
        question: "The bilaminar germ disc remains small, measuring approximately:",
        options: [
            "0.1 to 0.2 mm",
            "0.5 to 1.0 mm",
            "1.0 to 2.0 mm",
            "2.0 to 3.0 mm"
        ],
        correctAnswer: 0,
        explanation: "Growth of the bilaminar disc is relatively slow compared with that of the trophoblast, so it remains very small (0.1 to 0.2 mm)."
    },
    {
        question: "The outer multinucleated zone of the trophoblast is called the:",
        options: [
            "Cytotrophoblast",
            "Syncytiotrophoblast",
            "Epiblast",
            "Hypoblast"
        ],
        correctAnswer: 1,
        explanation: "The trophoblast differentiates into an inner layer of mononucleated cells (cytotrophoblast) and an outer multinucleated zone (syncytiotrophoblast)."
    },
    {
        question: "The layer of high columnar cells in the embryonic disc is the:",
        options: [
            "Hypoblast",
            "Epiblast",
            "Cytotrophoblast",
            "Syncytiotrophoblast"
        ],
        correctAnswer: 1,
        explanation: "The embryonic disc consists of two layers: a layer of small cuboidal cells (hypoblast) and a layer of high columnar cells (epiblast)."
    },
    {
        question: "The primitive yolk sac is also known as the:",
        options: [
            "Amniotic cavity",
            "Chorionic cavity",
            "Exocoelomic cavity",
            "Uterine cavity"
        ],
        correctAnswer: 2,
        explanation: "The exocoelomic membrane, together with the hypoblast, forms the lining of the exocoelomic cavity, or primitive yolk sac."
    },
    {
        question: "Maternal blood enters the lacunar system through:",
        options: [
            "Maternal veins",
            "Maternal arteries",
            "Sinusoids",
            "Capillaries"
        ],
        correctAnswer: 2,
        explanation: "The syncytial lacunae become continuous with the sinusoids, and maternal blood enters the lacunar system."
    },
    {
        question: "The chorionic plate is formed by:",
        options: [
            "The epiblast",
            "The hypoblast",
            "Extraembryonic mesoderm lining the cytotrophoblast",
            "The syncytiotrophoblast"
        ],
        correctAnswer: 2,
        explanation: "The extraembryonic mesoderm lining the inside of the cytotrophoblast is then known as the chorionic plate."
    },
    {
        question: "Primary villi consist of:",
        options: [
            "Cytotrophoblast only",
            "Syncytiotrophoblast only",
            "Cellular columns with syncytial covering",
            "Extraembryonic mesoderm only"
        ],
        correctAnswer: 2,
        explanation: "Cellular columns with the syncytial covering are known as primary villi."
    },
    {
        question: "The definitive yolk sac is also called the:",
        options: [
            "Primitive yolk sac",
            "Secondary yolk sac",
            "Exocoelomic cavity",
            "Amniotic cavity"
        ],
        correctAnswer: 1,
        explanation: "The new cavity formed within the exocoelomic cavity is known as the secondary yolk sac or definitive yolk sac."
    },
    {
        question: "Extraembryonic mesoderm traverses the chorionic cavity in the:",
        options: [
            "Chorionic plate",
            "Connecting stalk",
            "Yolk sac",
            "Amnion"
        ],
        correctAnswer: 1,
        explanation: "The only place where extraembryonic mesoderm traverses the chorionic cavity is in the connecting stalk."
    },
    {
        question: "In the second week, the blastocyst implantation site is characterized by:",
        options: [
            "Decreased vascularity",
            "Increased vascularity and edema",
            "Necrosis",
            "Fibrosis"
        ],
        correctAnswer: 1,
        explanation: "The implantation site shows increased vascularity and edema as part of the decidual reaction."
    },
    {
        question: "The syncytiotrophoblast is characterized by:",
        options: [
            "Mononucleated cells",
            "Multinucleated zone",
            "Cuboidal cells",
            "Columnar cells"
        ],
        correctAnswer: 1,
        explanation: "The syncytiotrophoblast is the outer multinucleated zone of the trophoblast."
    },
    {
        question: "The cytotrophoblast is characterized by:",
        options: [
            "Mononucleated cells",
            "Multinucleated zone",
            "Flattened cells",
            "Columnar cells"
        ],
        correctAnswer: 0,
        explanation: "The cytotrophoblast is the inner layer of mononucleated cells of the trophoblast."
    },
    {
        question: "The hypoblast layer consists of:",
        options: [
            "High columnar cells",
            "Small cuboidal cells",
            "Multinucleated cells",
            "Flattened cells"
        ],
        correctAnswer: 1,
        explanation: "The hypoblast layer consists of small cuboidal cells in the embryonic disc."
    },
    {
        question: "The epiblast layer consists of:",
        options: [
            "High columnar cells",
            "Small cuboidal cells",
            "Multinucleated cells",
            "Flattened cells"
        ],
        correctAnswer: 0,
        explanation: "The epiblast layer consists of high columnar cells in the embryonic disc."
    },
    {
        question: "The amniotic cavity forms within the:",
        options: [
            "Hypoblast",
            "Epiblast",
            "Cytotrophoblast",
            "Syncytiotrophoblast"
        ],
        correctAnswer: 1,
        explanation: "A small cavity appears within the epiblast and enlarges to become the amniotic cavity."
    },
    {
        question: "The lacunar stage is characterized by:",
        options: [
            "Formation of the amniotic cavity",
            "Formation of vacuoles in the syncytiotrophoblast",
            "Formation of the embryonic disc",
            "Formation of the hypoblast"
        ],
        correctAnswer: 1,
        explanation: "The lacunar stage is characterized by the appearance of vacuoles that form lacunae in the syncytiotrophoblast."
    },
    {
        question: "The exocoelomic (Heuser's) membrane is formed by cells originating from the:",
        options: [
            "Epiblast",
            "Hypoblast",
            "Cytotrophoblast",
            "Syncytiotrophoblast"
        ],
        correctAnswer: 1,
        explanation: "Flattened cells from the hypoblast form the exocoelomic (Heuser's) membrane."
    },
    {
        question: "The primitive yolk sac is lined by:",
        options: [
            "Epiblast and cytotrophoblast",
            "Hypoblast and exocoelomic membrane",
            "Syncytiotrophoblast and cytotrophoblast",
            "Amnion and chorion"
        ],
        correctAnswer: 1,
        explanation: "The exocoelomic membrane, together with the hypoblast, forms the lining of the exocoelomic cavity or primitive yolk sac."
    },
    {
        question: "By days 11-12, maternal blood enters the:",
        options: [
            "Amniotic cavity",
            "Exocoelomic cavity",
            "Lacunar system",
            "Embryonic disc"
        ],
        correctAnswer: 2,
        explanation: "Maternal blood enters the lacunar system, establishing the uteroplacental circulation."
    },
    {
        question: "The extraembryonic mesoderm fills the space between the:",
        options: [
            "Epiblast and hypoblast",
            "Trophoblast and amnion/exocoelomic membrane",
            "Amnion and yolk sac",
            "Syncytiotrophoblast and endometrial stroma"
        ],
        correctAnswer: 1,
        explanation: "The extraembryonic mesoderm fills all of the space between the trophoblast externally and the amnion and exocoelomic membrane internally."
    },
    {
        question: "The chorionic cavity is also known as the:",
        options: [
            "Amniotic cavity",
            "Yolk sac",
            "Extraembryonic coelom",
            "Exocoelomic cavity"
        ],
        correctAnswer: 2,
        explanation: "The extraembryonic coelom expands and forms a large cavity, the chorionic cavity."
    },
    {
        question: "The extraembryonic somatic mesoderm lines the:",
        options: [
            "Yolk sac",
            "Cytotrophoblast and amnion",
            "Syncytiotrophoblast",
            "Embryonic disc"
        ],
        correctAnswer: 1,
        explanation: "The extraembryonic mesoderm lining the cytotrophoblast and amnion is called the extraembryonic somatic mesoderm."
    },
    {
        question: "The extraembryonic splanchnic mesoderm lines the:",
        options: [
            "Yolk sac",
            "Cytotrophoblast and amnion",
            "Syncytiotrophoblast",
            "Embryonic disc"
        ],
        correctAnswer: 0,
        explanation: "The extraembryonic mesoderm lining the yolk sac is known as the extraembryonic splanchnic mesoderm."
    },
    {
        question: "The decidua reaction involves accumulation of:",
        options: [
            "Glycogen and lipids in endometrial cells",
            "Blood in the lacunae",
            "Fluid in the amniotic cavity",
            "Cells in the trophoblast"
        ],
        correctAnswer: 0,
        explanation: "Cells of the endometrium become polyhedral and loaded with glycogen and lipids as part of the decidua reaction."
    },
    {
        question: "On day 13, cellular columns formed by cytotrophoblast are called:",
        options: [
            "Secondary villi",
            "Tertiary villi",
            "Primary villi",
            "Anchoring villi"
        ],
        correctAnswer: 2,
        explanation: "Cellular columns with the syncytial covering are known as primary villi."
    },
    {
        question: "The secondary yolk sac forms within the:",
        options: [
            "Amniotic cavity",
            "Exocoelomic cavity",
            "Chorionic cavity",
            "Uterine cavity"
        ],
        correctAnswer: 1,
        explanation: "The secondary yolk sac forms within the exocoelomic cavity."
    },
    {
        question: "The connecting stalk contains:",
        options: [
            "Extraembryonic mesoderm",
            "Embryonic mesoderm",
            "Trophoblast cells",
            "Endometrial cells"
        ],
        correctAnswer: 0,
        explanation: "The only place where extraembryonic mesoderm traverses the chorionic cavity is in the connecting stalk."
    },
    {
        question: "Ectopic pregnancy refers to implantation:",
        options: [
            "In the uterine wall",
            "Outside the uterus",
            "In the fallopian tube only",
            "In the ovary"
        ],
        correctAnswer: 1,
        explanation: "Ectopic pregnancy occurs when implantation takes place outside the uterus."
    },
    {
        question: "What percentage of pregnancy-related maternal deaths are due to ectopic pregnancies?",
        options: [
            "5%",
            "9%",
            "15%",
            "20%"
        ],
        correctAnswer: 1,
        explanation: "Ectopic pregnancies account for 9% of all pregnancy-related deaths for the mother."
    },
    {
        question: "What percentage of implanted oocytes are abnormal?",
        options: [
            "5%",
            "10%",
            "16%",
            "25%"
        ],
        correctAnswer: 2,
        explanation: "Of the 58% of implanted oocytes that survive until the second week, 16% of those are abnormal."
    }
];

// Quiz state variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStarted = false;
let startTime;
let timerInterval;

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const retryBtn = document.getElementById('retry-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionElement = document.getElementById('current-question');
const timeDisplay = document.getElementById('time-display');
const scoreElement = document.getElementById('score');
const percentageElement = document.getElementById('percentage');
const answersList = document.getElementById('answers-list');

// Initialize the quiz
function initQuiz() {
    // Select 10 random questions
    currentQuestions = getRandomQuestions(cbtQuestions, 10);
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    quizStarted = false;
    
    // Reset UI
    startScreen.classList.add('active');
    quizScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    
    // Reset timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    timeDisplay.textContent = '00:00';
}

// Get random questions from the pool
function getRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Start the quiz
function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    quizStarted = true;
    startTime = new Date();
    
    // Start timer
    timerInterval = setInterval(updateTimer, 1000);
    
    displayQuestion();
}

// Update the timer
function updateTimer() {
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Display the current question
function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    questionText.textContent = question.question;
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Update button states
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === currentQuestions.length - 1;
    submitBtn.style.display = currentQuestionIndex === currentQuestions.length - 1 ? 'block' : 'none';
}

// Select an option
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update UI
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === optionIndex) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

// Navigate to previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Submit the quiz
function submitQuiz() {
    clearInterval(timerInterval);
    
    // Calculate score
    let score = 0;
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });
    
    // Display results
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    scoreElement.textContent = score;
    percentageElement.textContent = `${(score / currentQuestions.length * 100).toFixed(0)}%`;
    
    // Display review
    displayReview(score);
}

// Display review of answers
function displayReview(score) {
    answersList.innerHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        const isCorrect = userAnswers[index] === question.correctAnswer;
        
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        reviewItem.innerHTML = `
            <div class="review-question">${index + 1}. ${question.question}</div>
            <div class="review-answer">Your answer: ${userAnswers[index] !== null ? question.options[userAnswers[index]] : 'Not answered'}</div>
            <div class="review-answer">Correct answer: ${question.options[question.correctAnswer]}</div>
            <div class="review-explanation">Explanation: ${question.explanation}</div>
        `;
        
        answersList.appendChild(reviewItem);
    });
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
submitBtn.addEventListener('click', submitQuiz);
retryBtn.addEventListener('click', initQuiz);

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', initQuiz);