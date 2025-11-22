// Computer Based Test Questions (50 questions)
const cbtQuestions = [
    {
        question: "What is the estimated maximum number of germ cells in the ovary during prenatal development?",
        options: [
            "1 million",
            "3 million", 
            "5 million",
            "7 million"
        ],
        correctAnswer: 3
    },
    {
        question: "At what month of prenatal development does the total number of germ cells in the ovary reach its maximum?",
        options: [
            "Third month",
            "Fifth month",
            "Seventh month", 
            "Ninth month"
        ],
        correctAnswer: 1
    },
    {
        question: "What structure is formed by a primary oocyte surrounded by flat epithelial cells?",
        options: [
            "Graafian follicle",
            "Primordial follicle",
            "Primary follicle",
            "Secondary follicle"
        ],
        correctAnswer: 1
    },
    {
        question: "During which stage of meiosis are primary oocytes arrested until puberty?",
        options: [
            "Metaphase I",
            "Anaphase I", 
            "Prophase I",
            "Telophase I"
        ],
        correctAnswer: 2
    },
    {
        question: "What hormone surge induces the completion of meiosis I and ovulation?",
        options: [
            "Follicle-stimulating hormone (FSH)",
            "Luteinizing hormone (LH)",
            "Estrogen",
            "Progesterone"
        ],
        correctAnswer: 1
    },
    {
        question: "Where does fertilization typically occur in the female reproductive system?",
        options: [
            "Uterine cavity",
            "Ampullary region of uterine tube",
            "Cervical canal",
            "Ovary surface"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the process called where sperm undergo conditioning in the female reproductive tract?",
        options: [
            "Acrosome reaction",
            "Capacitation",
            "Fertilization",
            "Implantation"
        ],
        correctAnswer: 1
    },
    {
        question: "How long does the process of capacitation typically last in humans?",
        options: [
            "1-2 hours",
            "3-4 hours",
            "5-6 hours", 
            "7 hours"
        ],
        correctAnswer: 3
    },
    {
        question: "What structure forms from granulosa cells and theca interna cells after ovulation?",
        options: [
            "Corpus albicans",
            "Corpus luteum",
            "Corpus atreticum",
            "Graafian follicle"
        ],
        correctAnswer: 1
    },
    {
        question: "What hormone prevents degeneration of the corpus luteum if fertilization occurs?",
        options: [
            "Estrogen",
            "Progesterone",
            "Human chorionic gonadotropin (hCG)",
            "Luteinizing hormone"
        ],
        correctAnswer: 2
    },
    {
        question: "Approximately how many spermatozoa normally reach the site of fertilization?",
        options: [
            "50-100",
            "300-500",
            "1000-2000",
            "10,000-50,000"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the name of the enzyme released during the acrosome reaction?",
        options: [
            "Amylase",
            "Lipase",
            "Acrosin",
            "Pepsin"
        ],
        correctAnswer: 2
    },
    {
        question: "The repeated mitotic divisions of the zygote into smaller units is called:",
        options: [
            "Implantation",
            "Fertilization",
            "Cleavage",
            "Gastrulation"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the term for the cells produced during cleavage?",
        options: [
            "Blastomeres",
            "Trophoblasts",
            "Embryoblasts",
            "Morulas"
        ],
        correctAnswer: 0
    },
    {
        question: "The inner cell mass of the morula gives rise to:",
        options: [
            "The placenta",
            "The embryo proper",
            "The uterine lining",
            "The yolk sac"
        ],
        correctAnswer: 1
    },
    {
        question: "When does the zona pellucida disappear, allowing implantation to begin?",
        options: [
            "At fertilization",
            "During cleavage",
            "At the morula stage",
            "At the blastocyst stage"
        ],
        correctAnswer: 3
    },
    {
        question: "On approximately which day does implantation begin?",
        options: [
            "Third day",
            "Sixth day",
            "Ninth day",
            "Twelfth day"
        ],
        correctAnswer: 1
    },
    {
        question: "Which layer of the uterus is the regenerative layer that rebuilds after menstruation?",
        options: [
            "Compact layer",
            "Spongy layer",
            "Basal layer",
            "Myometrial layer"
        ],
        correctAnswer: 2
    },
    {
        question: "What condition is characterized by excessive proliferation of trophoblast forming a vesicular mass?",
        options: [
            "Ectopic pregnancy",
            "Hydatidiform mole",
            "Ovarian cyst",
            "Endometriosis"
        ],
        correctAnswer: 1
    },
    {
        question: "Which drug is used to increase FSH concentrations to stimulate ovulation?",
        options: [
            "Metformin",
            "Clomiphene citrate",
            "Progesterone",
            "Estrogen"
        ],
        correctAnswer: 1
    },
    {
        question: "What technique involves injecting a single sperm directly into the cytoplasm of the egg?",
        options: [
            "IVF",
            "ICSI",
            "GIFT",
            "ZIFT"
        ],
        correctAnswer: 1
    },
    {
        question: "The resting stage during prophase I characterized by a lacy network of chromatin is called:",
        options: [
            "Leptotene stage",
            "Zygotene stage",
            "Pachytene stage",
            "Diplotene stage"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the name of the peptide that keeps primary oocytes arrested in prophase?",
        options: [
            "FSH",
            "LH",
            "OMI",
            "hCG"
        ],
        correctAnswer: 2
    },
    {
        question: "Approximately how many primary oocytes are present at the beginning of puberty?",
        options: [
            "10,000",
            "40,000",
            "100,000",
            "200,000"
        ],
        correctAnswer: 1
    },
    {
        question: "What structure is formed when follicular cells change from flat to cuboidal and secrete glycoproteins?",
        options: [
            "Zona pellucida",
            "Corona radiata",
            "Cumulus oophorus",
            "Theca folliculi"
        ],
        correctAnswer: 0
    },
    {
        question: "In which type of follicle do fluid-filled spaces appear between granulosa cells?",
        options: [
            "Primordial follicle",
            "Primary follicle",
            "Vesicular follicle",
            "Mature follicle"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the name of the structure that bulges on the ovary surface before ovulation?",
        options: [
            "Stigma",
            "Hilum",
            "Medulla",
            "Cortex"
        ],
        correctAnswer: 0
    },
    {
        question: "Which cells form the corona radiata around the zona pellucida after ovulation?",
        options: [
            "Theca cells",
            "Granulosa cells",
            "Stromal cells",
            "Epithelial cells"
        ],
        correctAnswer: 1
    },
    {
        question: "What is formed when the corpus luteum degenerates and becomes fibrotic?",
        options: [
            "Corpus albicans",
            "Corpus atreticum",
            "Corpus hemorrhagicum",
            "Corpus luteum of pregnancy"
        ],
        correctAnswer: 0
    },
    {
        question: "The fusion of oocyte and sperm cell membranes results in:",
        options: [
            "Completion of meiosis I",
            "Release of cortical granules",
            "Formation of male pronucleus",
            "Initiation of cleavage"
        ],
        correctAnswer: 2
    },
    {
        question: "The outer cell mass of the morula forms the:",
        options: [
            "Embryo proper",
            "Trophoblast",
            "Yolk sac",
            "Amnion"
        ],
        correctAnswer: 1
    },
    {
        question: "The single cavity that forms in the blastocyst is called:",
        options: [
            "Amniotic cavity",
            "Blastocele",
            "Yolk sac",
            "Coelom"
        ],
        correctAnswer: 1
    },
    {
        question: "Which phase of the uterine cycle begins approximately 2-3 days after ovulation?",
        options: [
            "Proliferative phase",
            "Secretory phase",
            "Menstrual phase",
            "Follicular phase"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the term for the absence of live sperm in the ejaculate?",
        options: [
            "Oligozoospermia",
            "Azoospermia",
            "Asthenozoospermia",
            "Teratozoospermia"
        ],
        correctAnswer: 1
    },
    {
        question: "Which hormone causes thinning of the cervical mucus to allow sperm passage?",
        options: [
            "Progesterone",
            "Estrogen",
            "FSH",
            "LH"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the approximate diameter of a mature graafian follicle before ovulation?",
        options: [
            "5-10 mm",
            "15-20 mm",
            "25 mm",
            "30-35 mm"
        ],
        correctAnswer: 2
    },
    {
        question: "The theca folliculi organizes into theca interna and theca externa in which follicle stage?",
        options: [
            "Primordial follicle",
            "Primary follicle",
            "Vesicular follicle",
            "Mature vesicular follicle"
        ],
        correctAnswer: 3
    },
    {
        question: "How many polar bodies are formed during oocyte maturation if fertilization occurs?",
        options: [
            "None",
            "One",
            "Two",
            "Three"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the term for the cluster of granulosa cells that surround the oocyte?",
        options: [
            "Corona radiata",
            "Cumulus oophorus",
            "Zona pellucida",
            "Theca interna"
        ],
        correctAnswer: 1
    },
    {
        question: "Which cells convert androstenedione and testosterone to estrone and estradiol?",
        options: [
            "Theca interna cells",
            "Granulosa cells",
            "Stromal cells",
            "Epithelial cells"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the average number of follicles that begin to mature each month?",
        options: [
            "1-5",
            "15-20",
            "30-40",
            "50-100"
        ],
        correctAnswer: 1
    },
    {
        question: "The menstrual phase begins when production of which hormone decreases?",
        options: [
            "Estrogen",
            "Progesterone",
            "FSH",
            "LH"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the term for the degeneration of lutein cells in the corpus luteum?",
        options: [
            "Luteinization",
            "Luteolysis",
            "Atresia",
            "Necrosis"
        ],
        correctAnswer: 1
    },
    {
        question: "During fertilization, meiosis II is completed only if:",
        options: [
            "The oocyte is mature",
            "LH surge occurs",
            "The oocyte is fertilized",
            "FSH levels are high"
        ],
        correctAnswer: 2
    },
    {
        question: "The compact and spongy layers of the endometrium are expelled during which phase?",
        options: [
            "Proliferative phase",
            "Secretory phase",
            "Menstrual phase",
            "Follicular phase"
        ],
        correctAnswer: 2
    },
    {
        question: "What structure is formed when a follicle becomes atretic and is replaced by connective tissue?",
        options: [
            "Corpus luteum",
            "Corpus albicans",
            "Corpus atreticum",
            "Graafian follicle"
        ],
        correctAnswer: 2
    },
    {
        question: "Which of the following is NOT a clinical feature of hydatidiform mole?",
        options: [
            "Preeclampsia in first trimester",
            "Elevated hCG levels",
            "Fetal heart sounds present",
            "Enlarged uterus and bleeding"
        ],
        correctAnswer: 2
    },
    {
        question: "The anterior lobe of the pituitary gland is stimulated to secrete LH by:",
        options: [
            "Progesterone",
            "FSH",
            "Estrogen",
            "hCG"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the term for the stage when the embryo reaches the uterine lumen?",
        options: [
            "Zygote stage",
            "Two-cell stage",
            "Morula stage",
            "Blastocyst stage"
        ],
        correctAnswer: 2
    },
    {
        question: "The basal layer of the endometrium is supplied by:",
        options: [
            "Spiral arteries",
            "Basal arteries",
            "Radial arteries",
            "Uterine arteries"
        ],
        correctAnswer: 1
    },
    {
        question: "The 16 cell morula forms after how many days?",
        options: [
            "2 days after fertilisation",
            "4 days after fertilisation",
            "3 days after fertilisation",
            "5 days after fertilisation"
        ],
        correctAnswer: 2
    }
];

// Fill in the Gap Questions (30 questions)
const fillGapQuestions = [
    {
        question: "Once primordial germ cells have arrived in the gonad of a genetic female, they differentiate into <input type='text' class='fill-gap'>.",
        answer: "oogonia"
    },
    {
        question: "By the end of the third month of prenatal development, oogonia are arranged in clusters surrounded by a layer of flat epithelial cells known as <input type='text' class='fill-gap'> cells.",
        answer: "follicular"
    },
    {
        question: "Primary oocytes arrest their cell division in <input type='text' class='fill-gap'> of meiosis I.",
        answer: "prophase"
    },
    {
        question: "By the fifth month of prenatal development, the total number of germ cells in the ovary reaches its maximum, estimated at <input type='text' class='fill-gap'> million.",
        answer: "7"
    },
    {
        question: "Many oogonia and primary oocytes degenerate and become <input type='text' class='fill-gap'>.",
        answer: "atretic"
    },
    {
        question: "A primary oocyte, together with its surrounding flat epithelial cells, is known as a <input type='text' class='fill-gap'> follicle.",
        answer: "primordial"
    },
    {
        question: "Primary oocytes remain arrested in prophase due to <input type='text' class='fill-gap'> secreted by follicular cells.",
        answer: "oocyte maturation inhibitor"
    },
    {
        question: "The total number of primary oocytes at birth is estimated to vary from <input type='text' class='fill-gap'> to 800,000.",
        answer: "600,000"
    },
    {
        question: "Follicular cells change from flat to cuboidal and begin to secrete a layer of glycoproteins forming the <input type='text' class='fill-gap'>.",
        answer: "zona pellucida"
    },
    {
        question: "The surrounding follicular cells begin to proliferate under the influence of <input type='text' class='fill-gap'> to produce granulosa cells.",
        answer: "FSH"
    },
    {
        question: "Ovarian connective tissue forms the <input type='text' class='fill-gap'> folliculi.",
        answer: "theca"
    },
    {
        question: "Fluid-filled spaces appear between granulosa cells and begin to accumulate fluid in a space called the <input type='text' class='fill-gap'>.",
        answer: "antrum"
    },
    {
        question: "Granulosa cells surrounding the oocyte form the <input type='text' class='fill-gap'> oophorus.",
        answer: "cumulus"
    },
    {
        question: "When the secondary follicle is mature, a surge in <input type='text' class='fill-gap'> induces the preovulatory growth phase.",
        answer: "luteinizing hormone"
    },
    {
        question: "Theca interna cells produce androstenedione and testosterone, and granulosa cells convert these hormones to <input type='text' class='fill-gap'>.",
        answer: "estrogen"
    },
    {
        question: "At midcycle, the LH surge elevates concentrations of <input type='text' class='fill-gap'> factor, causing oocytes to complete meiosis I.",
        answer: "maturation-promoting"
    },
    {
        question: "Meiosis I results in formation of two daughter cells of unequal size: the secondary oocyte and the <input type='text' class='fill-gap'>.",
        answer: "first polar body"
    },
    {
        question: "The oocyte enters meiosis II but arrests in <input type='text' class='fill-gap'> approximately 3 hours before ovulation.",
        answer: "metaphase"
    },
    {
        question: "Before ovulation, an avascular spot called the <input type='text' class='fill-gap'> appears on the ovary surface.",
        answer: "stigma"
    },
    {
        question: "After ovulation, some cumulus oophorus cells rearrange around the zona pellucida to form the <input type='text' class='fill-gap'>.",
        answer: "corona radiata"
    },
    {
        question: "After ovulation, granulosa cells and theca interna cells form the <input type='text' class='fill-gap'> which secretes estrogen and progesterone.",
        answer: "corpus luteum"
    },
    {
        question: "If fertilization does not occur, the corpus luteum degenerates and forms a mass called <input type='text' class='fill-gap'>.",
        answer: "corpus albicans"
    },
    {
        question: "Fertilization occurs in the <input type='text' class='fill-gap'> region of the uterine tube.",
        answer: "ampullary"
    },
    {
        question: "Sperm undergo <input type='text' class='fill-gap'>, a period of conditioning in the female reproductive tract.",
        answer: "capacitation"
    },
    {
        question: "The <input type='text' class='fill-gap'> reaction occurs after binding to the zona pellucida and involves release of acrosomal enzymes.",
        answer: "acrosome"
    },
    {
        question: "Only <input type='text' class='fill-gap'> sperm can pass through the corona cells and undergo the acrosome reaction.",
        answer: "capacitated"
    },
    {
        question: "Cleavage consists of repeated <input type='text' class='fill-gap'> divisions of the zygote into smaller units.",
        answer: "mitotic"
    },
    {
        question: "The cells produced during cleavage are called <input type='text' class='fill-gap'>.",
        answer: "blastomeres"
    },
    {
        question: "The inner cell mass forms the <input type='text' class='fill-gap'>, which gives rise to tissues of the embryo proper.",
        answer: "embryoblast"
    },
    {
        question: "The outer cell mass forms the <input type='text' class='fill-gap'>, which later contributes to the placenta.",
        answer: "trophoblast"
    }
];
