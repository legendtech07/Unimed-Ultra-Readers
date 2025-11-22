// Computer Based Test Questions (50 questions)
const cbtQuestions = [
    {
        id: 1,
        question: "The patella is formed in the tendon of which muscle?",
        options: [
            "Hamstrings",
            "Quadriceps femoris",
            "Gastrocnemius",
            "Gluteus maximus"
        ],
        correctAnswer: 1,
        explanation: "The patella is formed in the tendon of the quadriceps femoris muscle."
    },
    {
        id: 2,
        question: "Which joint is formed by the articulation between the patella and femur?",
        options: [
            "Tibiofemoral joint",
            "Patellofemoral joint",
            "Talocrural joint",
            "Subtalar joint"
        ],
        correctAnswer: 1,
        explanation: "The patella articulates with the femur to form the patellofemoral joint."
    },
    {
        id: 3,
        question: "What is the shape of the anterior surface of the patella?",
        options: [
            "Concave",
            "Flat",
            "Convex",
            "Irregular"
        ],
        correctAnswer: 2,
        explanation: "The anterior surface of the patella is convex in shape."
    },
    {
        id: 4,
        question: "Which structure lies between the skin and the anterior surface of the patella?",
        options: [
            "Pre-patellar bursa",
            "Synovial membrane",
            "Articular cartilage",
            "Medial meniscus"
        ],
        correctAnswer: 0,
        explanation: "A pre-patellar bursa lies between the skin and the anterior surface of the patella."
    },
    {
        id: 5,
        question: "How is the upper articular part of the posterior surface of the patella divided?",
        options: [
            "Into superior and inferior facets",
            "Into anterior and posterior facets",
            "Into narrow medial and wider lateral facets",
            "Into three equal facets"
        ],
        correctAnswer: 2,
        explanation: "The upper articular part is made up of a large oval facet which is divided into narrow medial facet and wider lateral facet by a vertical ridge."
    },
    {
        id: 6,
        question: "Which muscle inserts on the medial border of the patella?",
        options: [
            "Vastus lateralis",
            "Vastus medialis",
            "Rectus femoris",
            "Biceps femoris"
        ],
        correctAnswer: 1,
        explanation: "The medial border of the patella serves as a site of insertion for vastus medialis muscle."
    },
    {
        id: 7,
        question: "What attaches to the apex of the patella?",
        options: [
            "Quadriceps femoris tendon",
            "Patellar ligament",
            "Medial collateral ligament",
            "Lateral collateral ligament"
        ],
        correctAnswer: 1,
        explanation: "The apex of the patella serves as an attachment site for patellar ligament which is a continuation of quadriceps femoris tendon."
    },
    {
        id: 8,
        question: "What is Bipartite Patella?",
        options: [
            "A fracture of the patella",
            "A congenital issue where the patella has two separate ossification centers that fail to fuse",
            "Inflammation of the patellar tendon",
            "Degeneration of patellar cartilage"
        ],
        correctAnswer: 1,
        explanation: "Bipartite Patella is a congenital issue where the patella has two separate ossification centers and fails to fuse."
    },
    {
        id: 9,
        question: "Which condition is characterized by softening and degeneration of the cartilage on the underside of the patella?",
        options: [
            "Patellar tendinitis",
            "Chondromalacia patellae",
            "Bipartite patella",
            "Osgood-Schlatter disease"
        ],
        correctAnswer: 1,
        explanation: "Chondromalacia patellae is caused by softening and degeneration of the cartilage on the underside of the patella."
    },
    {
        id: 10,
        question: "How many bones make up the tarsus?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        correctAnswer: 2,
        explanation: "The seven bones of the tarsus make up the posterior half of the foot."
    },
    {
        id: 11,
        question: "Which two tarsal bones occupy the posterior two thirds of the tarsus?",
        options: [
            "Talus and navicular",
            "Calcaneus and cuboid",
            "Talus and calcaneus",
            "Navicular and cuneiforms"
        ],
        correctAnswer: 2,
        explanation: "The talus and calcaneus occupy the posterior two thirds of the tarsus, or the hind foot."
    },
    {
        id: 12,
        question: "Which joint is formed by the articulation between the talus and tibia?",
        options: [
            "Subtalar joint",
            "Talocalcaneal joint",
            "Talocural joint",
            "Talonavicular joint"
        ],
        correctAnswer: 2,
        explanation: "The articulation between the talus and tibia forms the ankle joint, also known as talocural joint."
    },
    {
        id: 13,
        question: "What type of joint is the ankle joint?",
        options: [
            "Pivot joint",
            "Ball and socket joint",
            "Synovial hinge joint",
            "Plane joint"
        ],
        correctAnswer: 2,
        explanation: "The ankle joint forms a type of synovial hinge joint."
    },
    {
        id: 14,
        question: "Which is the largest and strongest bone in the foot?",
        options: [
            "Talus",
            "Navicular",
            "Cuboid",
            "Calcaneus"
        ],
        correctAnswer: 3,
        explanation: "The calcaneus is the largest and strongest bone in the foot."
    },
    {
        id: 15,
        question: "What is the massive, weight-bearing prominence on the posterior part of the calcaneus called?",
        options: [
            "Calcaneal tuberosity",
            "Sustentaculum tali",
            "Calcaneal sulcus",
            "Peroneal trochlea"
        ],
        correctAnswer: 0,
        explanation: "The posterior part of the calcaneus has a massive, weight-bearing prominence, the calcaneal tuberosity."
    },
    {
        id: 16,
        question: "Which bone is described as flattened and boat-shaped?",
        options: [
            "Talus",
            "Navicular",
            "Cuboid",
            "Calcaneus"
        ],
        correctAnswer: 1,
        explanation: "The navicular is a flattened, boat-shaped bone."
    },
    {
        id: 17,
        question: "What important structure is formed by the medial surface of the navicular projecting inferiorly?",
        options: [
            "Navicular groove",
            "Navicular tuberosity",
            "Navicular facet",
            "Navicular crest"
        ],
        correctAnswer: 1,
        explanation: "The medial surface of the navicular projects inferiorly to form the navicular tuberosity."
    },
    {
        id: 18,
        question: "Which tarsal bone is approximately cubical in shape and is the most lateral in the distal row?",
        options: [
            "Talus",
            "Navicular",
            "Cuboid",
            "Lateral cuneiform"
        ],
        correctAnswer: 2,
        explanation: "The cuboid is approximately cubical in shape and is the most lateral bone in the distal row of the tarsus."
    },
    {
        id: 19,
        question: "Which tendon passes through a groove on the lateral and inferior surfaces of the cuboid bone?",
        options: [
            "Tibialis anterior",
            "Tibialis posterior",
            "Fibularis longus",
            "Flexor hallucis longus"
        ],
        correctAnswer: 2,
        explanation: "Anterior to the tuberosity of the cuboid on the lateral and inferior surfaces of the bone is a groove for the tendon of the fibularis (peroneus) longus muscle."
    },
    {
        id: 20,
        question: "How many cuneiform bones are there?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correctAnswer: 2,
        explanation: "The three cuneiform bones are the medial, intermediate and lateral."
    },
    {
        id: 21,
        question: "Which is the largest cuneiform bone?",
        options: [
            "Medial cuneiform",
            "Intermediate cuneiform",
            "Lateral cuneiform",
            "They are all the same size"
        ],
        correctAnswer: 0,
        explanation: "The medial cuneiform is the largest bone."
    },
    {
        id: 22,
        question: "Which is the smallest cuneiform bone?",
        options: [
            "Medial cuneiform",
            "Intermediate cuneiform",
            "Lateral cuneiform",
            "They are all the same size"
        ],
        correctAnswer: 1,
        explanation: "The intermediate cuneiform is the smallest."
    },
    {
        id: 23,
        question: "How many arches does the foot have?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correctAnswer: 2,
        explanation: "The foot is made up of three arches: Medial Longitudinal, Lateral Longitudinal, and Transverse arch."
    },
    {
        id: 24,
        question: "Which arch of the foot is higher and more important?",
        options: [
            "Medial longitudinal arch",
            "Lateral longitudinal arch",
            "Transverse arch",
            "They are equally important"
        ],
        correctAnswer: 0,
        explanation: "The medial longitudinal arch is higher and more important than the lateral longitudinal arch."
    },
    {
        id: 25,
        question: "What is the keystone of the medial longitudinal arch?",
        options: [
            "Calcaneus",
            "Talar head",
            "Navicular",
            "Medial cuneiform"
        ],
        correctAnswer: 1,
        explanation: "The talar head is the keystone of the medial longitudinal arch."
    },
    {
        id: 26,
        question: "Which tendons help support the medial longitudinal arch?",
        options: [
            "Tibialis anterior and posterior",
            "Fibularis longus and brevis",
            "Flexor hallucis longus and flexor digitorum longus",
            "Extensor hallucis longus and extensor digitorum longus"
        ],
        correctAnswer: 0,
        explanation: "The tibialis anterior and posterior, via their tendinous attachments, help support the medial longitudinal arch."
    },
    {
        id: 27,
        question: "Which arch of the foot is much flatter and rests on the ground during standing?",
        options: [
            "Medial longitudinal arch",
            "Lateral longitudinal arch",
            "Transverse arch",
            "All arches rest on the ground"
        ],
        correctAnswer: 1,
        explanation: "The lateral longitudinal arch is much flatter than the medial part of the arch and rests on the ground during standing."
    },
    {
        id: 28,
        question: "Which bones make up the lateral longitudinal arch?",
        options: [
            "Calcaneus, talus, and lateral two metatarsals",
            "Calcaneus, cuboid, and lateral two metatarsals",
            "Talus, navicular, and lateral two metatarsals",
            "Calcaneus, cuboid, and all metatarsals"
        ],
        correctAnswer: 1,
        explanation: "The lateral longitudinal arch is made up of the calcaneus, cuboid, and lateral two metatarsals."
    },
    {
        id: 29,
        question: "Which arch runs from side to side in the foot?",
        options: [
            "Medial longitudinal arch",
            "Lateral longitudinal arch",
            "Transverse arch",
            "Oblique arch"
        ],
        correctAnswer: 2,
        explanation: "The transverse arch of the foot runs from side to side."
    },
    {
        id: 30,
        question: "What is the first layer of fibrous tissue that bowstrings the longitudinal arch?",
        options: [
            "Long plantar ligament",
            "Plantar aponeurosis",
            "Plantar calcaneocuboid ligament",
            "Plantar calcaneonavicular ligament"
        ],
        correctAnswer: 1,
        explanation: "The four successive layers of fibrous tissue that bowstring the longitudinal arch are: 1. Plantar aponeurosis, 2. Long plantar ligament, 3. Plantar calcaneocuboid ligament, 4. Plantar calcaneonavicular ligament."
    },
    {
        id: 31,
        question: "What is Pes Planus?",
        options: [
            "High arch foot",
            "Flat feet",
            "Club foot",
            "Bunion"
        ],
        correctAnswer: 1,
        explanation: "Pes planus is a structural abnormality of the foot where the arch along the inner side of the foot is lower than normal or completely flattened."
    },
    {
        id: 32,
        question: "What is Pes Cavus?",
        options: [
            "High arch foot",
            "Flat feet",
            "Club foot",
            "Bunion"
        ],
        correctAnswer: 0,
        explanation: "Pes cavus is high arch foot, which is an abnormal elevation of the medial longitudinal arch of the foot."
    },
    {
        id: 33,
        question: "Which surface of the patella is convex?",
        options: [
            "Anterior surface",
            "Posterior surface",
            "Medial surface",
            "Lateral surface"
        ],
        correctAnswer: 0,
        explanation: "The anterior surface of the patella is convex in shape."
    },
    {
        id: 34,
        question: "The posterior surface of the patella is divided into how many parts?",
        options: [
            "Two - upper and lower",
            "Three - upper, middle, and lower",
            "Four - quarters",
            "It is a single continuous surface"
        ],
        correctAnswer: 0,
        explanation: "The posterior surface has an upper three-quarters that is smooth and articular, and a lower one-quarter that is rough and non-articular."
    },
    {
        id: 35,
        question: "What helps keep the patella in the intercondylar groove during knee movement?",
        options: [
            "Cruciate ligaments",
            "Collateral ligaments",
            "Vastus muscles and vertical ridge",
            "Patellar ligament only"
        ],
        correctAnswer: 2,
        explanation: "The vastus muscles and the vertical ridge help to keep the patella in the intercondylar groove during flexion and extension of the knee."
    },
    {
        id: 36,
        question: "Patellar Tendinitis is also known as:",
        options: [
            "Runner's Knee",
            "Jumper's Knee",
            "Swimmer's Knee",
            "Cyclist's Knee"
        ],
        correctAnswer: 1,
        explanation: "Patellar Tendinitis is also called Jumper's Knee."
    },
    {
        id: 37,
        question: "Which tarsal bone articulates with the tibia?",
        options: [
            "Calcaneus",
            "Talus",
            "Navicular",
            "Cuboid"
        ],
        correctAnswer: 1,
        explanation: "The talus articulates with the tibia to form the ankle joint."
    },
    {
        id: 38,
        question: "The calcaneus articulates with which bone anteriorly?",
        options: [
            "Talus",
            "Navicular",
            "Cuboid",
            "Tibia"
        ],
        correctAnswer: 2,
        explanation: "The anterior surface of the calcaneus articulates with the cuboid."
    },
    {
        id: 39,
        question: "The navicular articulates posteriorly with which bone?",
        options: [
            "Talus",
            "Calcaneus",
            "Cuboid",
            "Tibia"
        ],
        correctAnswer: 0,
        explanation: "The navicular is located between the head of the talus posteriorly and the three cuneiforms anteriorly."
    },
    {
        id: 40,
        question: "When does the cuboid bone appear?",
        options: [
            "At birth",
            "3 months after birth",
            "6 months after birth",
            "1 year after birth"
        ],
        correctAnswer: 2,
        explanation: "The cuboid appears 6 months after birth."
    },
    {
        id: 41,
        question: "Which cuneiform also articulates with the cuboid?",
        options: [
            "Medial cuneiform",
            "Intermediate cuneiform",
            "Lateral cuneiform",
            "All cuneiforms"
        ],
        correctAnswer: 2,
        explanation: "The lateral cuneiform also articulates with the cuboid."
    },
    {
        id: 42,
        question: "What is the main function of the foot arches?",
        options: [
            "Only shock absorption",
            "Only propulsion",
            "Weight distribution, shock absorption, and propulsion",
            "Only weight distribution"
        ],
        correctAnswer: 2,
        explanation: "The arches distribute weight over the pedal platform (foot), acting not only as shock absorbers but also as springboards for propelling it during walking, running, and jumping."
    },
    {
        id: 43,
        question: "Body weight is transmitted from the tibia to which bone first?",
        options: [
            "Calcaneus",
            "Talus",
            "Navicular",
            "Cuboid"
        ],
        correctAnswer: 1,
        explanation: "The weight of the body is transmitted to the talus from the tibia."
    },
    {
        id: 44,
        question: "Which tendons help maintain the curvature of the transverse arch?",
        options: [
            "Tibialis anterior and extensor hallucis longus",
            "Fibularis longus and tibialis posterior",
            "Flexor digitorum longus and flexor hallucis longus",
            "Extensor digitorum longus and peroneus brevis"
        ],
        correctAnswer: 1,
        explanation: "The tendons of the fibularis longus and tibialis posterior, crossing under the sole of the foot like a stirrup, help maintain the curvature of the transverse arch."
    },
    {
        id: 45,
        question: "What serves as pillars for the transverse arch?",
        options: [
            "Medial and lateral parts of the longitudinal arch",
            "Talus and calcaneus",
            "Navicular and cuboid",
            "Metatarsals only"
        ],
        correctAnswer: 0,
        explanation: "The medial and lateral parts of the longitudinal arch serve as pillars for the transverse arch."
    },
    {
        id: 46,
        question: "Which ligament is also known as the spring ligament?",
        options: [
            "Plantar aponeurosis",
            "Long plantar ligament",
            "Plantar calcaneocuboid ligament",
            "Plantar calcaneonavicular ligament"
        ],
        correctAnswer: 3,
        explanation: "The plantar calcaneonavicular ligament is also known as the spring ligament."
    },
    {
        id: 47,
        question: "Which movement does the ankle joint allow?",
        options: [
            "Flexion and extension only",
            "Plantar flexion and dorsiflexion",
            "Inversion and eversion",
            "All of the above"
        ],
        correctAnswer: 1,
        explanation: "The ankle joint allows plantar flexion and dorsiflexion."
    },
    {
        id: 48,
        question: "The anterior surface of the patella consists of multiple small foramen for:",
        options: [
            "Nerve passage",
            "Muscle attachment",
            "Nutrient vessels",
            "Ligament attachment"
        ],
        correctAnswer: 2,
        explanation: "The anterior surface of the patella consists of multiple small foramen for nutrient vessels."
    },
    {
        id: 49,
        question: "Which part of the posterior surface of the patella is rough and non-articular?",
        options: [
            "Upper three-quarters",
            "Lower one-quarter",
            "Medial half",
            "Lateral half"
        ],
        correctAnswer: 1,
        explanation: "The lower one-quarter of the posterior surface is rough and non-articular."
    },
    {
        id: 50,
        question: "The base of the patella serves as a site of attachment for:",
        options: [
            "Patellar ligament",
            "Quadriceps femoris tendon",
            "Vastus medialis",
            "Vastus lateralis"
        ],
        correctAnswer: 1,
        explanation: "The base of the patella serves as a site of attachment for quadriceps femoris tendon."
    }
];