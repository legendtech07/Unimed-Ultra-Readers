// Upper Limb Anatomy Question Bank - 70+ Questions
const upperLimbQuestions = [
    // Pectoral Girdle Questions (1-10)
    {
        id: 1,
        question: "With regard to the pectoral girdle:",
        options: {
            a: "contains three joints, the sternoclavicular, the acromioclavicular and the glenohumeral",
            b: "serratus anterior, the rhomboids and subclavius attach the scapula to the axial skeleton",
            c: "pectoralis major and deltoid are the only muscular attachments between the clavicle and the upper limb",
            d: "teres major provides attachment between the axial skeleton and the girdle"
        },
        answer: "b",
        explanation: "Serratus anterior, rhomboids and subclavius are muscles that attach the scapula to the axial skeleton. The pectoral girdle has two joints (sternoclavicular and acromioclavicular), not three (glenohumeral is the shoulder joint).",
        topic: "pectoral"
    },
    {
        id: 2,
        question: "Which muscle does not insert in or next to the intertubecular groove of the upper humerus?",
        options: {
            a: "pectoralis major",
            b: "pectoralis minor",
            c: "latissimus dorsi",
            d: "teres major"
        },
        answer: "b",
        explanation: "Pectoralis minor inserts into the coracoid process of the scapula, not the intertubercular groove. Pectoralis major inserts into lateral lip, latissimus dorsi into floor, and teres major into medial lip of the intertubercular groove.",
        topic: "pectoral"
    },
    {
        id: 3,
        question: "The clavicle:",
        options: {
            a: "ossifies at eight weeks",
            b: "has atypical synovial joints at both ends",
            c: "articulates with the first rib",
            d: "is more curved in females",
            e: "usually fractures between deltoid tubercle and coranoid tubercle"
        },
        answer: "b",
        explanation: "The clavicle has synovial joints at both ends (sternoclavicular and acromioclavicular). It is the first bone to ossify (5th week), articulates with sternum and scapula (not first rib), and fractures most commonly at the junction of middle and outer thirds.",
        topic: "pectoral"
    },
    {
        id: 4,
        question: "Which is true of muscles of the pectoral girdle?",
        options: {
            a: "'direct' muscles are inserted into the clavicle or scapula from the axial skeleton, eg pectoralis major",
            b: "'indirect' attachment to the axial skeleton is represented by serratus anterior",
            c: "the sternocostal fibres of pectoralis major from the 6th costal cartilage are inserted higher on the lateral lip of the intertubecular groove than the fibres from the first cartilage",
            d: "biceps muscle gives no stability to the shoulder joint",
            e: "trapezius is the only muscle to be supplied by all five segments of the brachial plexus"
        },
        answer: "c",
        explanation: "The sternocostal fibers of pectoralis major have a twisted insertion - the lower fibers insert higher on the humerus. Pectoralis major is a 'direct' attachment from axial skeleton to humerus (not clavicle/scapula).",
        topic: "pectoral"
    },
    {
        id: 5,
        question: "Regarding the clavicle, which is false?",
        options: {
            a: "the clavicle is longer and its curvatures more pronounced in the male",
            b: "the articulating sternal end is covered by fibrocartilage",
            c: "it is the first bone to ossify in the foetus",
            d: "it has four named ligaments attached to it",
            e: "fractures of the clavicle tend to occur between the costoclavicular and the coracoclavicular ligaments"
        },
        answer: "d",
        explanation: "The clavicle has more than four named ligaments attached (costoclavicular, coracoclavicular - trapezoid and conoid parts, interclavicular, sternoclavicular ligaments).",
        topic: "pectoral"
    },
    {
        id: 6,
        question: "Which of the following does not connect the arm to the pelvic girdle?",
        options: {
            a: "deltoid",
            b: "biceps",
            c: "subclavius",
            d: "subscapularis",
            e: "supraspinatus"
        },
        answer: "c",
        explanation: "Subclavius connects clavicle to first rib (axial skeleton), not to pelvic girdle. The others are upper limb muscles.",
        topic: "pectoral"
    },
    {
        id: 7,
        question: "What is the first bone of the skeleton to ossify?",
        options: {
            a: "tibia",
            b: "humerus",
            c: "scapula",
            d: "femur",
            e: "clavicle"
        },
        answer: "e",
        explanation: "The clavicle is the first bone to ossify in the fetus (intramembranous ossification starting around week 5-6).",
        topic: "pectoral"
    },
    {
        id: 8,
        question: "Pectoralis major:",
        options: {
            a: "is innervated laterally by the lateral pectoral nerve",
            b: "inserts into the medial lip of the intertubercular sulcus",
            c: "receives its arterial supply via the thoracoacromial artery",
            d: "can act as an accessory muscle of inspiration",
            e: "acts with latissimus dorsi and teres minor to adduct the arm"
        },
        answer: "d",
        explanation: "Pectoralis major can elevate the ribs when the arm is fixed, acting as an accessory muscle of inspiration. It inserts into lateral lip (not medial) of intertubercular groove.",
        topic: "pectoral"
    },
    {
        id: 9,
        question: "Pectoralis major arises from all EXCEPT the:",
        options: {
            a: "lateral anterior half of manubrium",
            b: "body of sternum",
            c: "aponeurosis of external oblique",
            d: "upper six ribs",
            e: "medial half of anterior clavicle"
        },
        answer: "c",
        explanation: "Pectoralis major arises from clavicle (medial half), sternum, and upper 6 costal cartilages (not from external oblique aponeurosis).",
        topic: "pectoral"
    },
    {
        id: 10,
        question: "Which of the following is INCORRECT? Pectoralis major:",
        options: {
            a: "consists of clavicular and sternocostal heads",
            b: "is innervated by C6 to T1",
            c: "medially rotates and abducts the arm",
            d: "assists flexion at the shoulder",
            e: "can act as an accessory muscle of respiration"
        },
        answer: "c",
        explanation: "Pectoralis major adducts and medially rotates the arm (not abducts). Abduction is primarily by deltoid and supraspinatus.",
        topic: "pectoral"
    },

    // Brachial Plexus Questions (11-20)
    {
        id: 11,
        question: "Regarding the brachial plexus, which is INCORRECT?",
        options: {
            a: "it is derived from the anterior rami of C5-T1 after they have given off segmental supply to the prevertebral and scalene muscles",
            b: "the roots give off three branches including the long thoracic nerve to latissimus dorsi",
            c: "the trunks give off one branch",
            d: "the cords are divided into anterior and posterior divisions that supply the flexor and extensor compartments respectively and give off 13 branches",
            e: "the lateral cord supplies part of the median nerve"
        },
        answer: "b",
        explanation: "The long thoracic nerve (to serratus anterior) arises from roots C5,6,7, not to latissimus dorsi. The thoracodorsal nerve supplies latissimus dorsi.",
        topic: "brachial"
    },
    {
        id: 12,
        question: "Regarding the brachial plexus:",
        options: {
            a: "the lateral cord contains fibres from C5, 6, 7 & 8",
            b: "the posterior cord has fibres from C5, 6, 7, 8 & T1",
            c: "the medial cord has fibres from C8 and T1",
            d: "the suprascapular nerve arises from C5",
            e: "the ulnar nerve is a continuation of the medial cord"
        },
        answer: "a",
        explanation: "The lateral cord contains fibers from C5,6,7 (not C8). Ulnar nerve is indeed a continuation of the medial cord (C8,T1).",
        topic: "brachial"
    },
    {
        id: 13,
        question: "Which is CORRECT regarding nerve root values?",
        options: {
            a: "medial pectoral nerve C7 C8",
            b: "ulnar nerve C7 C8 T1",
            c: "dorsal scapular nerve C5 C6",
            d: "long thoracic nerve C6 C7 C8",
            e: "musculocutaneous C5 C6"
        },
        answer: "b",
        explanation: "Ulnar nerve is typically C8,T1 but often carries C7 fibers. Musculocutaneous is C5,6,7. Long thoracic is C5,6,7. Dorsal scapular is C5.",
        topic: "brachial"
    },
    {
        id: 14,
        question: "Regarding the brachial plexus:",
        options: {
            a: "the roots lie behind scalenus medius muscle",
            b: "the trunks are formed behind the clavicle",
            c: "at the first rib, the cords are formed",
            d: "the cords give branches around second part of artery"
        },
        answer: "a",
        explanation: "The roots of the brachial plexus emerge between scalenus anterior and medius, with C5,6 roots above scalenus anterior, and C7,8,T1 behind scalenus anterior.",
        topic: "brachial"
    },
    {
        id: 15,
        question: "With respect to the brachial plexus:",
        options: {
            a: "it consists of the entire anterior rami of C5 to T1",
            b: "there are five roots, three trunks, five divisions and three cords",
            c: "there are two branches from the divisions",
            d: "there are a total of 13 branches from the cords",
            e: "there are two branches from the roots"
        },
        answer: "d",
        explanation: "There are 13 branches from the cords of brachial plexus. There are 5 roots, 3 trunks, 6 divisions (each trunk gives anterior and posterior divisions), 3 cords.",
        topic: "brachial"
    },
    {
        id: 16,
        question: "Regarding the brachial plexus:",
        options: {
            a: "the medial cord has three branches",
            b: "the lateral cord has fibres from C7, C8 and T1",
            c: "the musculocutaneous nerve is a branch of the medial cord",
            d: "the five roots are found from the posterior rami and C5 - T1 nerves",
            e: "none of the above"
        },
        answer: "e",
        explanation: "All statements are incorrect: Medial cord has 5 branches, lateral cord has C5-7 fibers, musculocutaneous is from lateral cord, roots are from anterior rami.",
        topic: "brachial"
    },
    {
        id: 17,
        question: "The peripheral nerve arising directly from the upper trunk of the brachial plexus is the:",
        options: {
            a: "dorsal scapular",
            b: "thoracodorsal",
            c: "suprascapular",
            d: "upper subscapular",
            e: "lower subscapular"
        },
        answer: "c",
        explanation: "The suprascapular nerve arises from the upper trunk (C5,6). Dorsal scapular arises from C5 root, thoracodorsal from posterior cord.",
        topic: "brachial"
    },
    {
        id: 18,
        question: "Which of the following DOES NOT arise from the roots of the brachial plexus?",
        options: {
            a: "dorsal scapular",
            b: "nerve to serratus anterior",
            c: "medial pectoral nerve",
            d: "nerve to subclavius"
        },
        answer: "c",
        explanation: "Medial pectoral nerve arises from the medial cord. Dorsal scapular (C5), nerve to serratus anterior (long thoracic, C5-7), and nerve to subclavius (C5,6) arise from roots.",
        topic: "brachial"
    },
    {
        id: 19,
        question: "Which nerve is a branch of the lateral cord of the brachial plexus?",
        options: {
            a: "upper subscapular nerve",
            b: "thoracodorsal nerve",
            c: "musculocutaneous nerve",
            d: "ulnar nerve",
            e: "lower subscapular nerve"
        },
        answer: "c",
        explanation: "Musculocutaneous nerve arises from the lateral cord. Upper/lower subscapular and thoracodorsal are from posterior cord, ulnar from medial cord.",
        topic: "brachial"
    },
    {
        id: 20,
        question: "Regarding branches of the posterior cord, which is INCORRECT?",
        options: {
            a: "C5,6 - upper subscapular nerve",
            b: "C6,7,8 - thoracodorsal nerve",
            c: "C5,6 - lower subscapular nerve",
            d: "C7,8 - axillary",
            e: "C5,6,7,8,T1 - radial nerve"
        },
        answer: "d",
        explanation: "Axillary nerve is C5,6 (not C7,8). Upper subscapular is C5,6; thoracodorsal is C6,7,8; lower subscapular is C5,6; radial is C5-T1.",
        topic: "brachial"
    },

    // Shoulder Joint Questions (21-30)
    {
        id: 21,
        question: "Regarding the shoulder joint, which is INCORRECT?",
        options: {
            a: "full abduction requires medial rotation",
            b: "the long head of biceps is intracapsular",
            c: "the subacromial bursa is attached to the coracoacromial ligaments",
            d: "flexion involves pec major, deltoid, coracobrachialis and biceps",
            e: "supraspinatus initiates abduction"
        },
        answer: "a",
        explanation: "Full abduction requires lateral rotation (not medial) to clear the greater tubercle from the acromion. The long head of biceps is intracapsular but extrasynovial.",
        topic: "shoulder"
    },
    {
        id: 22,
        question: "The shoulder joint:",
        options: {
            a: "subscapularis, supraspinatus, infraspinatus and teres minor all have rotatory action on the humerus and their tendons form the rotator cuff with the lateral part of the shoulder capsule",
            b: "the subacromial bursa rolls inwards under the acromion when the arm is adducted",
            c: "the joint capsule is attached to the surgical neck of the humerus inferiorly",
            d: "the articular surface of the head of the humerus is five times the area of the glenoid cavity",
            e: "upward thrust on the humerus will preferentially fracture the coracoacromial arch"
        },
        answer: "c",
        explanation: "The capsule attaches to anatomical neck medially but extends to surgical neck inferiorly. Glenoid cavity area is about 1/3 to 1/4 of humeral head area.",
        topic: "shoulder"
    },
    {
        id: 23,
        question: "Regarding the shoulder joint:",
        options: {
            a: "the glenoid labrum is the most important stabilising factor",
            b: "the strong capsule is reinforced by tight glenohumeral ligaments",
            c: "the coracoacromial arch prevents the humeral head from displacing",
            d: "the long head of triceps gives stability to the abducted humerus",
            e: "the pull of teres minor stabilises the abducted humerus"
        },
        answer: "c",
        explanation: "The coracoacromial arch (coracoid, acromion, coracoacromial ligament) forms a protective arch preventing superior displacement of humeral head. The rotator cuff muscles are the primary stabilizers.",
        topic: "shoulder"
    },
    {
        id: 24,
        question: "Which of the following statements about the glenohumeral (shoulder) joint is INCORRECT?",
        options: {
            a: "long tendon of biceps is extrasynovial",
            b: "subscapularis bursa communicates with joint cavity",
            c: "innervated by medial pectoral nerve",
            d: "branches of third part of axillary artery provide majority of blood supply",
            e: "surface area of humeral head is about four times greater than that of glenoid fossa"
        },
        answer: "c",
        explanation: "Shoulder joint is innervated by axillary, suprascapular, and lateral pectoral nerves (not medial pectoral). Subscapularis bursa communicates with joint cavity.",
        topic: "shoulder"
    },
    {
        id: 25,
        question: "Which muscle is part of the rotator cuff?",
        options: {
            a: "subclavius",
            b: "teres minor",
            c: "pectoralis major",
            d: "teres major",
            e: "deltoid"
        },
        answer: "b",
        explanation: "Rotator cuff consists of supraspinatus, infraspinatus, teres minor, and subscapularis. Teres minor is part of the posterior cuff.",
        topic: "shoulder"
    },
    {
        id: 26,
        question: "Paralysis of which nerve results in inability to initiate abduction of the arm?",
        options: {
            a: "the axillary nerve",
            b: "the suprascapular nerve",
            c: "the subscapular nerve",
            d: "the dorsal scapular nerve",
            e: "the thoracodorsal nerve"
        },
        answer: "b",
        explanation: "Supraspinatus (innervated by suprascapular nerve) initiates abduction (0-15°). Deltoid (axillary nerve) continues abduction from 15-90°.",
        topic: "shoulder"
    },
    {
        id: 27,
        question: "The capsule of the shoulder joint:",
        options: {
            a: "is supplied exclusively by the axillary nerve",
            b: "is separated from the tendons of the short scapular muscles by a bursa",
            c: "bridges the gap between the greater and lesser tuberosities as the transverse ligament",
            d: "the long tendon of biceps is extracapsular",
            e: "is the major stabilising factor for the shoulder joint"
        },
        answer: "c",
        explanation: "The transverse humeral ligament bridges the intertubercular groove, converting it into a tunnel for biceps tendon. Capsule has poor inherent stability.",
        topic: "shoulder"
    },
    {
        id: 28,
        question: "Which muscle does not extend from the posterior surface of the scapula to the greater tubercle of the humerus?",
        options: {
            a: "teres major",
            b: "infraspinatus",
            c: "supraspinatus",
            d: "teres minor"
        },
        answer: "a",
        explanation: "Teres major inserts into medial lip of intertubercular groove, not the greater tubercle. Infraspinatus, supraspinatus, and teres minor all insert into greater tubercle.",
        topic: "shoulder"
    },
    {
        id: 29,
        question: "The subacromial bursa:",
        options: {
            a: "communicates with the shoulder joint",
            b: "does not extend beyond the lateral aspect of the acromion",
            c: "innervated in part by the dorsal scapular nerve",
            d: "attached superiorly to the conoid trapezoid and conoid ligaments",
            e: "attached inferiorly to the tendon of supraspinatus"
        },
        answer: "e",
        explanation: "Subacromial bursa lies between supraspinatus tendon and acromion/coracoacromial ligament. It does NOT normally communicate with shoulder joint.",
        topic: "shoulder"
    },
    {
        id: 30,
        question: "Regarding the humerus:",
        options: {
            a: "the head forms half a sphere",
            b: "the lateral epicondyle is more prominent",
            c: "the axillary nerve winds around the anatomical neck",
            d: "the greater tuberosity continues distally as the medial lip of the intertubercular groove",
            e: "the capsule of the shoulder joint extends down the medial side of the humeral shaft"
        },
        answer: "c",
        explanation: "Axillary nerve winds around surgical neck of humerus (not anatomical neck). Humeral head forms about 1/3 of sphere. Medial epicondyle is more prominent.",
        topic: "shoulder"
    },

    // Arm Anatomy Questions (31-40)
    {
        id: 31,
        question: "With regards to the posterior compartment of the arm, which is FALSE?",
        options: {
            a: "the medial head of triceps lies deep to the long and lateral heads",
            b: "triceps inserts onto the upper surface of the olecranon",
            c: "midshaft fracture of the humerus can damage the radial nerve resulting in paralysis of triceps",
            d: "the medial intermuscular septum divides it from the anterior compartment and runs from the axilla to the elbow"
        },
        answer: "c",
        explanation: "Midshaft humeral fractures typically damage the radial nerve in the spiral groove, but triceps is usually spared because it receives innervation proximal to the injury. The nerve injury affects muscles of the posterior forearm (wrist drop).",
        topic: "arm"
    },
    {
        id: 32,
        question: "Which of the following has some nerve supply from the radial nerve?",
        options: {
            a: "long head of biceps",
            b: "coracobrachialis",
            c: "short head of biceps",
            d: "brachialis"
        },
        answer: "d",
        explanation: "Brachialis has dual innervation: musculocutaneous nerve (main) and radial nerve (small lateral part). Biceps and coracobrachialis are supplied by musculocutaneous only.",
        topic: "arm"
    },
    {
        id: 33,
        question: "Regarding triceps:",
        options: {
            a: "the long head is lateral to the medial head",
            b: "it inserts into the posterior aspect of the radial tuberosity",
            c: "attachment to the olecranon is by a tendon only",
            d: "the long head receives two branches of the radial nerve",
            e: "the medial head has origins in both lateral and medial intermuscular septum"
        },
        answer: "e",
        explanation: "Medial head of triceps arises from posterior humerus below spiral groove and from both intermuscular septa. Long head is medial (not lateral), inserts into olecranon (not radial tuberosity).",
        topic: "arm"
    },
    {
        id: 34,
        question: "Long head of triceps:",
        options: {
            a: "lies between teres minor and teres major",
            b: "is supplied by branch of radial nerve at the humeral groove",
            c: "arises from the humerus above the radial groove",
            d: "converges with the medial head",
            e: "arises from the supraclavicular rim"
        },
        answer: "a",
        explanation: "Long head of triceps arises from infraglenoid tubercle of scapula and passes between teres minor and teres major. It's supplied by radial nerve branches before entering spiral groove.",
        topic: "arm"
    },
    {
        id: 35,
        question: "Which muscle takes origin (in part) from both the medial and lateral intermuscular septa?",
        options: {
            a: "biceps",
            b: "brachioradialis",
            c: "extensor carpi radialis longus",
            d: "supinator",
            e: "triceps"
        },
        answer: "e",
        explanation: "The medial head of triceps arises from both medial and lateral intermuscular septa. Brachialis arises from both septa as well, but the question specifies triceps.",
        topic: "arm"
    },
    {
        id: 36,
        question: "Which does NOT enter posterior compartment of the arm?",
        options: {
            a: "radial nerve",
            b: "profunda brachii artery",
            c: "ulnar nerve",
            d: "posterior cutaneous nerve of forearm",
            e: "superior ulnar collateral artery"
        },
        answer: "c",
        explanation: "Ulnar nerve runs in anterior compartment of arm, then passes posterior to medial epicondyle. Radial nerve and profunda brachii artery enter posterior compartment via triangular interval.",
        topic: "arm"
    },
    {
        id: 37,
        question: "Brachialis is supplied by:",
        options: {
            a: "median nerve",
            b: "musculocutaneous nerve",
            c: "radial nerve",
            d: "median and musculocutaneous nerves",
            e: "musculocutaneous and radial nerves"
        },
        answer: "e",
        explanation: "Brachialis has dual innervation: mainly by musculocutaneous nerve, but a small lateral part is supplied by radial nerve.",
        topic: "arm"
    },
    {
        id: 38,
        question: "The musculocutaneous nerve passes through which muscle?",
        options: {
            a: "coracobrachialis",
            b: "short head of biceps",
            c: "brachialis",
            d: "medial head of triceps",
            e: "long head of biceps"
        },
        answer: "a",
        explanation: "Musculocutaneous nerve pierces coracobrachialis muscle. It then runs between biceps and brachialis, supplying all three muscles.",
        topic: "arm"
    },
    {
        id: 39,
        question: "Which of the following is INCORRECT? The biceps:",
        options: {
            a: "is a powerful flexor of the elbow",
            b: "supinates the forearm",
            c: "is paralysed by an injury to the posterior cord of the brachial plexus",
            d: "is a weak flexor of the shoulder",
            e: "inserts into the bicipital aponeurosis"
        },
        answer: "c",
        explanation: "Biceps is supplied by musculocutaneous nerve from lateral cord (not posterior cord). Injury to posterior cord affects radial nerve (extensors).",
        topic: "arm"
    },
    {
        id: 40,
        question: "The coracobrachialis muscle:",
        options: {
            a: "is functionally important",
            b: "origin = apex of acromion",
            c: "insertion = lateral border of humerus",
            d: "nerve supply = C4, C5",
            e: "is pierced by the musculocutaneous nerve"
        },
        answer: "e",
        explanation: "Musculocutaneous nerve pierces coracobrachialis. Origin = coracoid process (not acromion). Insertion = medial humerus (not lateral). Nerve = C5,6,7.",
        topic: "arm"
    },

    // Forearm Anatomy Questions (41-50)
    {
        id: 41,
        question: "In the forearm:",
        options: {
            a: "the median nerve passes between the two heads of pronator teres",
            b: "the ulnar nerve lies deep to flexor digitorum profundus",
            c: "superficial fibres of flexor digitorum superficialis gives rise to the tendons for index and middle fingers",
            d: "the radial artery is on the lateral side of the radial nerve",
            e: "the fibres of the interosseous membrane run obliquely down from ulna to radius"
        },
        answer: "a",
        explanation: "Median nerve passes between the two heads of pronator teres (humeral and ulnar heads). Interosseous membrane fibers run obliquely down from radius to ulna (proximal radius to distal ulna).",
        topic: "forearm"
    },
    {
        id: 42,
        question: "Which muscle arises from both the radius and ulna?",
        options: {
            a: "extensor pollicis longus",
            b: "extensor pollicis brevis",
            c: "abductor pollicis longus",
            d: "extensor indicis",
            e: "extensor digitorum"
        },
        answer: "c",
        explanation: "Abductor pollicis longus arises from posterior surfaces of both radius and ulna and interosseous membrane. Most forearm muscles arise from one bone or the other.",
        topic: "forearm"
    },
    {
        id: 43,
        question: "Which muscle arises from both ulnar and radius?",
        options: {
            a: "pronator teres",
            b: "flexor carpi radialis",
            c: "flexor digitorum superficialis",
            d: "flexor digitorum profundus",
            e: "flexor pollicis longus"
        },
        answer: "c",
        explanation: "Flexor digitorum superficialis has two heads: humeroulnar head (medial epicondyle and coronoid process) and radial head (anterior radius).",
        topic: "forearm"
    },
    {
        id: 44,
        question: "Which is NOT an origin of supinator?",
        options: {
            a: "radial tuberosity",
            b: "radial collateral ligament",
            c: "lateral epicondyle of humerus",
            d: "supinator crest of ulna",
            e: "aponeurosis overlying supinator muscle"
        },
        answer: "a",
        explanation: "Supinator arises from lateral epicondyle, radial collateral ligament, annular ligament, and supinator crest of ulna (not radial tuberosity - that's biceps insertion).",
        topic: "forearm"
    },
    {
        id: 45,
        question: "The median nerve goes through the heads of which muscle?",
        options: {
            a: "biceps brachii",
            b: "supinator",
            c: "pronator teres",
            d: "pronator quadratus",
            e: "flexor digitorum superficialis"
        },
        answer: "c",
        explanation: "Median nerve passes between the two heads of pronator teres (humeral-ulnar head). It also passes between the two heads of flexor digitorum superficialis.",
        topic: "forearm"
    },
    {
        id: 46,
        question: "Flexor pollicis longus:",
        options: {
            a: "is a bipennate muscle",
            b: "arises from the common flexor origin",
            c: "pierces the flexor retinaculum at the wrist",
            d: "inserts into the radial border of the proximal phalanx",
            e: "has fleshy fibres to a point, just above the wrist"
        },
        answer: "e",
        explanation: "FPL has fleshy fibers almost to the wrist. It arises from anterior radius (not common flexor origin), is unipennate, inserts into distal phalanx (not proximal).",
        topic: "forearm"
    },
    {
        id: 47,
        question: "Regarding flexor digitorum profundus, which is NOT TRUE?",
        options: {
            a: "is the most powerful and bulky muscle of the forearm",
            b: "arises from the common flexor origin",
            c: "the tendon for the index separates in the forearm from the three other tendons",
            d: "it gives rise to origin of four lumbricals",
            e: "it is supplied by the anterior interosseous nerve and the ulnar nerve in a variable distribution"
        },
        answer: "b",
        explanation: "FDP arises from ulna and interosseous membrane (not common flexor origin - that's for superficial muscles). Common flexor origin gives rise to FCU, FDS, etc.",
        topic: "forearm"
    },
    {
        id: 48,
        question: "Which of the following DOES NOT arise from the common extensor origin?",
        options: {
            a: "extensor carpi radialis brevis",
            b: "extensor digitorum",
            c: "extensor digiti minimi",
            d: "extensor carpi radialis longus",
            e: "extensor carpi ulnaris"
        },
        answer: "d",
        explanation: "Extensor carpi radialis longus arises from lateral supracondylar ridge, not common extensor origin (lateral epicondyle). ECRB, ED, EDM, ECU arise from common extensor origin.",
        topic: "forearm"
    },
    {
        id: 49,
        question: "Pronator teres:",
        options: {
            a: "ulnar artery passes between two heads",
            b: "forms medial boundary of cubital fossa",
            c: "arises from common flexor origin",
            d: "adducts radius",
            e: "less powerful pronator than pronator quadratus"
        },
        answer: "a",
        explanation: "Ulnar artery passes between the two heads of pronator teres. Pronator teres is the primary pronator (more powerful than pronator quadratus which maintains pronation).",
        topic: "forearm"
    },
    {
        id: 50,
        question: "Simple pronation:",
        options: {
            a: "requires an intact radial nerve",
            b: "requires an intact C8 nerve root",
            c: "occurs without movement of the ulna",
            d: "occurs about an axis which runs along the shaft of the radius",
            e: "requires the action of anconeus"
        },
        answer: "c",
        explanation: "In pronation, radius rotates around a relatively fixed ulna. Pronator teres and pronator quadratus are main pronators (median nerve, C6,7).",
        topic: "forearm"
    },

    // Hand Anatomy Questions (51-60)
    {
        id: 51,
        question: "At the wrist / carpal tunnel:",
        options: {
            a: "flexor retinaculum attaches to scaphoid and trapezoid laterally",
            b: "all superficial and deep flexors, except flexor pollicis longus, share a common flexor sheath",
            c: "the ulnar nerve lies medial to pisiform",
            d: "tendons of flexor digitorum remain attached until they reach the palm",
            e: "median nerve lies beneath flexor retinaculum between flexor digitorum superficialis and flexor pollicis longus"
        },
        answer: "e",
        explanation: "The median nerve lies in the carpal tunnel between FDS and FPL tendons. Flexor retinaculum attaches to scaphoid/trapezium laterally and pisiform/hamate medially.",
        topic: "hand"
    },
    {
        id: 52,
        question: "Regarding innervation of hand muscles:",
        options: {
            a: "opponens pollicis may be supplied by ulnar nerve",
            b: "opponens digiti minimi may be supplied by median nerve",
            c: "two radial interossei are usually supplied by median nerve",
            d: "nail beds are supplied 3½ to 1½ by branches of radial and ulnar nerves",
            e: "adductor pollicis is supplied by muscular (recurrent) branch of median nerve"
        },
        answer: "a",
        explanation: "Opponens pollicis is typically supplied by median nerve but can have ulnar innervation in some individuals. Adductor pollicis is always ulnar nerve.",
        topic: "hand"
    },
    {
        id: 53,
        question: "Which structure does NOT insert into the flexor retinaculum?",
        options: {
            a: "abductor pollicis brevis",
            b: "flexor digiti minimi brevis",
            c: "palmaris longus",
            d: "opponens pollicis",
            e: "flexor pollicis brevis"
        },
        answer: "c",
        explanation: "Palmaris longus inserts into palmar aponeurosis (not flexor retinaculum). Thenar and hypothenar muscles arise from flexor retinaculum.",
        topic: "hand"
    },
    {
        id: 54,
        question: "The lumbrical muscles:",
        options: {
            a: "arise from the four superficial tendons",
            b: "are all bicipital muscles",
            c: "pass along the ulnar side of the metacarpophalangeal joint",
            d: "flex the metacarpophalangeal joint",
            e: "attach directly to the first phalanx"
        },
        answer: "d",
        explanation: "Lumbricals flex MCP joints and extend IP joints. They arise from FDP tendons (not FDS), 1st and 2nd are unipennate, 3rd and 4th bipennate, pass radial side of fingers.",
        topic: "hand"
    },
    {
        id: 55,
        question: "Which of the following is CORRECT about flexor carpi radialis?",
        options: {
            a: "tendon receives muscle fibres down to just above the wrist",
            b: "tendon lies in a groove on the trapezoid",
            c: "arises lateral to flexor digitorum superficialis",
            d: "has median nerve 'plastered' to deep surface",
            e: "tendon pierces flexor retinaculum"
        },
        answer: "e",
        explanation: "FCR tendon passes through its own compartment in flexor retinaculum. It inserts into base of 2nd and 3rd metacarpals, lies in groove on trapezium (not trapezoid).",
        topic: "hand"
    },
    {
        id: 56,
        question: "The recurrent branch of the median nerve supplies:",
        options: {
            a: "opponens digiti minimi",
            b: "first dorsal interosseous",
            c: "adductor pollicis",
            d: "first lumbrical",
            e: "abductor pollicis brevis"
        },
        answer: "e",
        explanation: "Recurrent branch of median nerve supplies thenar muscles (APB, FPB, opponens pollicis). First lumbrical is supplied by median nerve proper.",
        topic: "hand"
    },
    {
        id: 57,
        question: "Laceration of the recurrent branch of the median nerve results in paralysis of all the following muscles of the thumb EXCEPT:",
        options: {
            a: "abductor pollicis brevis",
            b: "deep head of flexor pollicis brevis",
            c: "opponens pollicis",
            d: "superficial head of flexor pollicis brevis"
        },
        answer: "b",
        explanation: "Deep head of FPB is often supplied by ulnar nerve. Recurrent branch supplies APB, opponens pollicis, and superficial head of FPB.",
        topic: "hand"
    },
    {
        id: 58,
        question: "Regarding the intrinsic muscles of the hand, which of the following is NOT true?",
        options: {
            a: "the palmar and dorsal interossei are supplied by the deep branch of the median nerve",
            b: "the intrinsic muscles of the thumb are abductor pollicis brevis, flexor pollicis brevis, opponents pollicis, adductor pollicis, first palmar and first dorsal interossei",
            c: "opponens pollicis acts only on the carpometacarpal joint",
            d: "their motor supply is derived from segment T1 of the spinal cord",
            e: "the thenar muscles are supplied by the recurrent branch of the median nerve"
        },
        answer: "a",
        explanation: "Interossei are supplied by deep branch of ulnar nerve (not median). Median nerve supplies thenar muscles (except adductor pollicis) and lateral two lumbricals.",
        topic: "hand"
    },
    {
        id: 59,
        question: "The palmar interossei:",
        options: {
            a: "abduct the fingers",
            b: "are usually supplied by a branch of the ulnar nerve",
            c: "have two heads",
            d: "arise from the medial side of the metacarpal bone of the index, ring and little fingers",
            e: "have no role in extension of the terminal phalanges"
        },
        answer: "b",
        explanation: "All interossei (palmar and dorsal) are supplied by deep branch of ulnar nerve. Palmar interossei ADDUCT (PAD), dorsal interossei ABDUCT (DAB).",
        topic: "hand"
    },
    {
        id: 60,
        question: "Interossei muscles in the hand:",
        options: {
            a: "flex the interphalangeal joints",
            b: "assist in extension of metacarpophalangeal joints",
            c: "cannot laterally deviate the middle finger",
            d: "the palmar interossei have two heads of origin",
            e: "are usually supplied by the ulnar nerve"
        },
        answer: "e",
        explanation: "All interossei are supplied by deep branch of ulnar nerve. They flex MCP joints and extend IP joints. Dorsal interossei abduct, palmar interossei adduct.",
        topic: "hand"
    },

    // Innervation Questions (61-70)
    {
        id: 61,
        question: "Identify the incorrect innervation:",
        options: {
            a: "subclavius - own nerve from the brachial plexus",
            b: "serratus anterior - long thoracic nerve",
            c: "clavicular head of pectoralis major - medial pectoral nerve",
            d: "latissimus dorsi - dorsal scapular nerve",
            e: "trapezius - accessory nerve"
        },
        answer: "d",
        explanation: "Latissimus dorsi is supplied by the thoracodorsal nerve (middle subscapular nerve), not the dorsal scapular nerve. Dorsal scapular nerve supplies rhomboids and levator scapulae.",
        topic: "innervation"
    },
    {
        id: 62,
        question: "Which nerve supplies serratus anterior?",
        options: {
            a: "axillary nerve (C5, C6)",
            b: "long thoracic nerve (C5, C6, C7)",
            c: "musculocutaneous nerve (C5, C6)",
            d: "thoracodorsal nerve (C6, C7, C8)",
            e: "suprascapular nerve (C5, C6)"
        },
        answer: "b",
        explanation: "Serratus anterior is supplied by long thoracic nerve (C5,6,7). Damage causes winging of scapula.",
        topic: "innervation"
    },
    {
        id: 63,
        question: "The nerve supply to deltoid is from the:",
        options: {
            a: "pectoral nerves",
            b: "thoracodorsal nerve",
            c: "axillary nerve",
            d: "long thoracic nerve",
            e: "dorsal scapular nerve"
        },
        answer: "c",
        explanation: "Deltoid is supplied by axillary nerve (C5,6) which also supplies teres minor and skin over regimental badge area.",
        topic: "innervation"
    },
    {
        id: 64,
        question: "The nerve supply of latissimus dorsi is from the:",
        options: {
            a: "pectoral nerves",
            b: "thoracodorsal nerve",
            c: "axillary nerve",
            d: "long thoracic nerve",
            e: "dorsal scapular nerve"
        },
        answer: "b",
        explanation: "Latissimus dorsi is supplied by thoracodorsal nerve (C6,7,8) from posterior cord. Also called middle subscapular nerve.",
        topic: "innervation"
    },
    {
        id: 65,
        question: "The nerve supply of rhomboid major and rhomboid minor is from the:",
        options: {
            a: "pectoral nerves",
            b: "thoracodorsal nerve",
            c: "axillary nerve",
            d: "long thoracic nerve",
            e: "dorsal scapular nerve"
        },
        answer: "e",
        explanation: "Rhomboids and levator scapulae are supplied by dorsal scapular nerve (C5).",
        topic: "innervation"
    },
    {
        id: 66,
        question: "The nerve supply to supraspinatus is from the:",
        options: {
            a: "lower subscapular nerve",
            b: "dorsal scapular nerve",
            c: "suprascapular nerve",
            d: "upper subscapular nerve",
            e: "thoracodorsal nerve"
        },
        answer: "c",
        explanation: "Supraspinatus and infraspinatus are supplied by suprascapular nerve (C5,6) from upper trunk.",
        topic: "innervation"
    },
    {
        id: 67,
        question: "The nerve supply to teres major is from the:",
        options: {
            a: "lower subscapular nerve",
            b: "dorsal scapular nerve",
            c: "suprascapular nerve",
            d: "upper subscapular nerve",
            e: "thoracodorsal nerve"
        },
        answer: "a",
        explanation: "Teres major is supplied by lower subscapular nerve (C5,6) from posterior cord. Upper subscapular nerve supplies subscapularis.",
        topic: "innervation"
    },
    {
        id: 68,
        question: "The nerve supply of infraspinatus is the:",
        options: {
            a: "axillary nerve",
            b: "long thoracic nerve",
            c: "infrascapular nerve",
            d: "suprascapular nerve",
            e: "subscapular nerve"
        },
        answer: "d",
        explanation: "Infraspinatus (along with supraspinatus) is supplied by suprascapular nerve (C5,6).",
        topic: "innervation"
    },
    {
        id: 69,
        question: "Which nerve does NOT make contact with periosteum?",
        options: {
            a: "radial nerve",
            b: "axillary nerve",
            c: "median nerve",
            d: "ulnar nerve",
            e: "anterior interosseous nerve"
        },
        answer: "c",
        explanation: "Median nerve doesn't contact periosteum. Radial nerve in spiral groove, axillary nerve at surgical neck, ulnar nerve at medial epicondyle, anterior interosseous nerve on interosseous membrane all contact periosteum.",
        topic: "innervation"
    },
    {
        id: 70,
        question: "A high ulnar nerve injury might produce:",
        options: {
            a: "weakness of elbow flexion",
            b: "a 'claw hand'",
            c: "weak abduction of the index finger",
            d: "triceps paralysis",
            e: "sensory loss over the radial three fingers"
        },
        answer: "c",
        explanation: "Ulnar nerve supplies most intrinsic hand muscles. High injury causes 'ulnar claw' (hyperextension at MCP, flexion at IP), weakness of finger abduction/adduction, and sensory loss on ulnar 1.5 fingers.",
        topic: "innervation"
    },

    // Blood Supply Questions (71-78)
    {
        id: 71,
        question: "Blood supply to the upper limb, which is FALSE?",
        options: {
            a: "the subclavian artery is divided schematically by scalenus anterior",
            b: "usually all branches of the subclavian come from the first segment",
            c: "the dorsal scapular branch may arise from the third segment",
            d: "pectoralis major schematically divides the axillary artery into three parts",
            e: "the acromial branch of the thoracoacromial trunk accompanies the cephalic vein in the deltopectoral triangle"
        },
        answer: "d",
        explanation: "Pectoralis MINOR (not major) divides the axillary artery into three parts. The acromial branch does accompany the cephalic vein in the deltopectoral triangle.",
        topic: "blood"
    },
    {
        id: 72,
        question: "The blood supply to the breast involves all but one of the following:",
        options: {
            a: "lateral thoracic artery",
            b: "long thoracic artery",
            c: "internal thoracic artery",
            d: "posterior intercostal artery",
            e: "thoracoacromial artery"
        },
        answer: "b",
        explanation: "There is no 'long thoracic artery'. Breast blood supply includes: lateral thoracic, thoracoacromial, internal thoracic (mammary), posterior intercostal arteries.",
        topic: "blood"
    },
    {
        id: 73,
        question: "Which artery is the main supply of triceps?",
        options: {
            a: "dorsal scapular artery",
            b: "brachial artery",
            c: "profunda brachii artery",
            d: "radial artery",
            e: "posterior circumflex humeral artery"
        },
        answer: "c",
        explanation: "Profunda brachii artery (deep artery of arm) supplies posterior compartment including triceps. It accompanies radial nerve in radial groove.",
        topic: "blood"
    },
    {
        id: 74,
        question: "The largest branch of the axillary artery is:",
        options: {
            a: "superior thoracic artery",
            b: "thoracoacromial artery",
            c: "lateral thoracic artery",
            d: "subscapular artery",
            e: "posterior circumflex humeral artery"
        },
        answer: "d",
        explanation: "Subscapular artery is the largest branch of axillary artery (3rd part). It gives off circumflex scapular and thoracodorsal branches.",
        topic: "blood"
    },
    {
        id: 75,
        question: "Axillary artery:",
        options: {
            a: "becomes brachial artery at lower border teres minor",
            b: "axillary vein lies laterally to the artery",
            c: "is divided into three parts by pectoralis minor",
            d: "second part is clasped by the two heads of median nerve",
            e: "gives off the superior thoracic artery from its second part"
        },
        answer: "c",
        explanation: "Axillary artery is divided into 3 parts by pectoralis minor: 1st - medial to muscle, 2nd - behind muscle, 3rd - lateral to muscle. Becomes brachial artery at lower border of teres major.",
        topic: "blood"
    },
    {
        id: 76,
        question: "The brachial artery:",
        options: {
            a: "commences at the upper border of teres major",
            b: "is in direct contact with the humerus",
            c: "has biceps tendon lying medial to it",
            d: "is readily compressible",
            e: "is accompanied throughout its course by the basilic vein"
        },
        answer: "d",
        explanation: "Brachial artery is compressible against humerus. Begins at lower border of teres major. Biceps tendon lies lateral to it in cubital fossa.",
        topic: "blood"
    },
    {
        id: 77,
        question: "The radial artery:",
        options: {
            a: "gives rise to the posterior interosseous artery",
            b: "passes distally, lateral to the biceps tendon",
            c: "passes across the tendon of abductor pollicis brevis to enter the anatomical snuffbox",
            d: "passes over the tendon of insertion of pronator teres",
            e: "none of the above"
        },
        answer: "d",
        explanation: "Radial artery passes over pronator teres insertion in forearm. Posterior interosseous artery is from common interosseous (from ulnar). In snuffbox, it passes over scaphoid and trapezium.",
        topic: "blood"
    },
    {
        id: 78,
        question: "The cephalic vein:",
        options: {
            a: "arises in the region of the anatomical snuffbox",
            b: "at the elbow, is deep to the lateral cutaneous nerve of the forearm",
            c: "terminates by joining the brachial vein",
            d: "is medial to biceps in the arm",
            e: "has no valves"
        },
        answer: "a",
        explanation: "Cephalic vein begins in anatomical snuffbox, runs lateral in arm, pierces clavipectoral fascia to join axillary vein. Basilic vein is medial and joins brachial veins.",
        topic: "blood"
    }
];

// Additional questions can be added to reach 100+ if needed
// This file now contains 78 questions covering all major topics