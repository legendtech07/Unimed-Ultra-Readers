// Fill-in-the-Gap Questions (30 questions)
const fillGapQuestions = [
    {
        id: 1,
        text: "The patella is formed in the tendon of the __________ muscle.",
        answer: "quadriceps femoris",
        explanation: "The patella is formed in the tendon of the quadriceps femoris muscle."
    },
    {
        id: 2,
        text: "The patella articulates with the femur to form the __________ joint.",
        answer: "patellofemoral",
        explanation: "The patella articulates with the femur to form the patellofemoral joint."
    },
    {
        id: 3,
        text: "The anterior surface of the patella is __________ in shape.",
        answer: "convex",
        explanation: "The anterior surface of the patella is convex in shape."
    },
    {
        id: 4,
        text: "A __________ lies between the skin and the anterior surface of the patella.",
        answer: "pre-patellar bursa",
        explanation: "A pre-patellar bursa lies between the skin and the anterior surface of the patella."
    },
    {
        id: 5,
        text: "The upper articular part of the patella is divided into narrow medial facet and wider lateral facet by a __________.",
        answer: "vertical ridge",
        explanation: "The upper articular part is divided into narrow medial facet and wider lateral facet by a vertical ridge."
    },
    {
        id: 6,
        text: "The medial border of the patella serves as a site of insertion for the __________ muscle.",
        answer: "vastus medialis",
        explanation: "The medial border of the patella serves as a site of insertion for vastus medialis muscle."
    },
    {
        id: 7,
        text: "The apex of the patella serves as an attachment site for the __________.",
        answer: "patellar ligament",
        explanation: "The apex of the patella serves as an attachment site for patellar ligament."
    },
    {
        id: 8,
        text: "__________ is a congenital issue where the patella has two separate ossification centers that fail to fuse.",
        answer: "Bipartite patella",
        explanation: "Bipartite patella is a congenital issue where the patella has two separate ossification centers that fail to fuse."
    },
    {
        id: 9,
        text: "__________ is caused by softening and degeneration of the cartilage on the underside of the patella.",
        answer: "Chondromalacia patellae",
        explanation: "Chondromalacia patellae is caused by softening and degeneration of the cartilage on the underside of the patella."
    },
    {
        id: 10,
        text: "The __________ bones of the tarsus make up the posterior half of the foot.",
        answer: "seven",
        explanation: "The seven bones of the tarsus make up the posterior half of the foot."
    },
    {
        id: 11,
        text: "The talus and __________ occupy the posterior two thirds of the tarsus.",
        answer: "calcaneus",
        explanation: "The talus and calcaneus occupy the posterior two thirds of the tarsus."
    },
    {
        id: 12,
        text: "The articulation between the talus and tibia forms the __________ joint.",
        answer: "talocural",
        explanation: "The articulation between the talus and tibia forms the talocural joint (ankle joint)."
    },
    {
        id: 13,
        text: "The ankle joint is a type of __________ joint.",
        answer: "synovial hinge",
        explanation: "The ankle joint is a type of synovial hinge joint."
    },
    {
        id: 14,
        text: "The __________ is the largest and strongest bone in the foot.",
        answer: "calcaneus",
        explanation: "The calcaneus is the largest and strongest bone in the foot."
    },
    {
        id: 15,
        text: "The posterior part of the calcaneus has a massive, weight-bearing prominence called the __________.",
        answer: "calcaneal tuberosity",
        explanation: "The posterior part of the calcaneus has a massive, weight-bearing prominence called the calcaneal tuberosity."
    },
    {
        id: 16,
        text: "The __________ is a flattened, boat-shaped bone.",
        answer: "navicular",
        explanation: "The navicular is a flattened, boat-shaped bone."
    },
    {
        id: 17,
        text: "The medial surface of the navicular projects inferiorly to form the __________.",
        answer: "navicular tuberosity",
        explanation: "The medial surface of the navicular projects inferiorly to form the navicular tuberosity."
    },
    {
        id: 18,
        text: "The __________ is approximately cubical in shape and is the most lateral bone in the distal row of the tarsus.",
        answer: "cuboid",
        explanation: "The cuboid is approximately cubical in shape and is the most lateral bone in the distal row of the tarsus."
    },
    {
        id: 19,
        text: "There are __________ cuneiform bones.",
        answer: "three",
        explanation: "There are three cuneiform bones: medial, intermediate, and lateral."
    },
    {
        id: 20,
        text: "The foot is made up of __________ arches.",
        answer: "three",
        explanation: "The foot is made up of three arches: medial longitudinal, lateral longitudinal, and transverse."
    },
    {
        id: 21,
        text: "The __________ is the keystone of the medial longitudinal arch.",
        answer: "talar head",
        explanation: "The talar head is the keystone of the medial longitudinal arch."
    },
    {
        id: 22,
        text: "The __________ and __________ tendons help support the medial longitudinal arch.",
        answer: "tibialis anterior, tibialis posterior",
        explanation: "The tibialis anterior and tibialis posterior tendons help support the medial longitudinal arch."
    },
    {
        id: 23,
        text: "The lateral longitudinal arch is made up of the calcaneus, cuboid, and __________.",
        answer: "lateral two metatarsals",
        explanation: "The lateral longitudinal arch is made up of the calcaneus, cuboid, and lateral two metatarsals."
    },
    {
        id: 24,
        text: "The __________ arch of the foot runs from side to side.",
        answer: "transverse",
        explanation: "The transverse arch of the foot runs from side to side."
    },
    {
        id: 25,
        text: "The first layer of fibrous tissue that bowstrings the longitudinal arch is the __________.",
        answer: "plantar aponeurosis",
        explanation: "The first layer of fibrous tissue that bowstrings the longitudinal arch is the plantar aponeurosis."
    },
    {
        id: 26,
        text: "__________ is a structural abnormality where the arch of the foot is lower than normal or completely flattened.",
        answer: "Pes planus",
        explanation: "Pes planus is a structural abnormality where the arch of the foot is lower than normal or completely flattened."
    },
    {
        id: 27,
        text: "__________ is characterized by an abnormal elevation of the medial longitudinal arch.",
        answer: "Pes cavus",
        explanation: "Pes cavus is characterized by an abnormal elevation of the medial longitudinal arch."
    },
    {
        id: 28,
        text: "The __________ muscles and the vertical ridge help keep the patella in the intercondylar groove.",
        answer: "vastus",
        explanation: "The vastus muscles and the vertical ridge help keep the patella in the intercondylar groove."
    },
    {
        id: 29,
        text: "Patellar Tendinitis is also known as __________.",
        answer: "Jumper's Knee",
        explanation: "Patellar Tendinitis is also known as Jumper's Knee."
    },
    {
        id: 30,
        text: "The cuboid bone appears __________ after birth.",
        answer: "6 months",
        explanation: "The cuboid bone appears 6 months after birth."
    }
];