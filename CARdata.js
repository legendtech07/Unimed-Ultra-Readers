// Complete quiz data - 50 questions
const quizData = [
    // Test 1: Questions 1-10 (Basics & Monosaccharides)
    {
        question: "Carbohydrates are organic compounds consisting of carbon, hydrogen, and __________.",
        correctAnswers: ["oxygen"],
        explanation: "Carbohydrates are composed of carbon, hydrogen, and oxygen atoms, with the general formula Cm(H₂O)n."
    },
    {
        question: "The empirical formula for most carbohydrates is __________.",
        correctAnswers: ["Cm(H₂O)n", "C(H₂O)n"],
        explanation: "This formula represents carbohydrates as hydrates of carbon, though some carbohydrates may not strictly follow this ratio."
    },
    {
        question: "Monosaccharides with an aldehyde group are called __________.",
        correctAnswers: ["aldoses"],
        explanation: "Aldoses are monosaccharides containing an aldehyde functional group (-CHO) as their carbonyl group."
    },
    {
        question: "Glucose is an example of a __________, which is a six-carbon aldose sugar.",
        correctAnswers: ["aldohexose"],
        explanation: "Aldohexose indicates a six-carbon sugar (hexose) with an aldehyde group (aldo-)."
    },
    {
        question: "The simplest monosaccharides with three carbon atoms are called __________.",
        correctAnswers: ["trioses"],
        explanation: "Trioses are the simplest monosaccharides containing three carbon atoms, like glyceraldehyde."
    },
    {
        question: "Monosaccharides exist in D and L forms based on the orientation of the asymmetric carbon __________ from the carbonyl group.",
        correctAnswers: ["furthest", "farthest"],
        explanation: "The D/L designation is determined by the configuration of the chiral center farthest from the carbonyl group."
    },
    {
        question: "All monosaccharides are __________ sugars because they have free aldehyde or ketone groups.",
        correctAnswers: ["reducing"],
        explanation: "The free carbonyl group allows monosaccharides to act as reducing agents in chemical tests."
    },
    {
        question: "Ribulose biphosphate acts as a carbon dioxide __________ during photosynthesis.",
        correctAnswers: ["acceptor"],
        explanation: "In the Calvin cycle, ribulose-1,5-bisphosphate accepts CO₂ to form two molecules of 3-phosphoglycerate."
    },
    {
        question: "If the -OH group on the anomeric carbon is below the ring in glucose, it is called __________ glucose.",
        correctAnswers: ["alpha", "α"],
        explanation: "α-glucose has the hydroxyl group on the anomeric carbon pointing downward in the Haworth projection."
    },
    {
        question: "The monomer units of carbohydrates are linked by __________ bonds.",
        correctAnswers: ["glycosidic", "glycosidic bonds"],
        explanation: "Glycosidic bonds connect monosaccharide units through dehydration synthesis reactions."
    },

    // Test 2: Questions 11-20 (Glycosidic Bonds)
    {
        question: "Glycosidic bonds are formed through a __________ reaction that releases water.",
        correctAnswers: ["condensation", "dehydration synthesis"],
        explanation: "Condensation reactions join monomers by removing a water molecule between functional groups."
    },
    {
        question: "The breakage of glycosidic bonds occurs through __________, which adds water.",
        correctAnswers: ["hydrolysis"],
        explanation: "Hydrolysis breaks bonds by adding water molecules, reversing the condensation reaction."
    },
    {
        question: "The carbon atom involved in glycosidic bond formation is called the __________ carbon.",
        correctAnswers: ["anomeric"],
        explanation: "The anomeric carbon is the carbonyl carbon (C1 in aldoses, C2 in ketoses) that becomes asymmetric in ring formation."
    },
    {
        question: "Glycosidic bonds can be either __________ or β linkages depending on stereochemistry.",
        correctAnswers: ["alpha", "α"],
        explanation: "α-glycosidic bonds have the glycosidic oxygen and CH₂OH group on opposite sides, while β-bonds have them on the same side."
    },
    {
        question: "Linear chains in carbohydrates typically have __________ glycosidic bonds.",
        correctAnswers: ["1,4", "1-4"],
        explanation: "Most linear polysaccharides have 1,4-glycosidic linkages between carbon 1 of one sugar and carbon 4 of the next."
    },
    {
        question: "Branching in carbohydrates results from __________ glycosidic bonds.",
        correctAnswers: ["1,6", "1-6"],
        explanation: "1,6-glycosidic bonds create branch points in polysaccharides like glycogen and amylopectin."
    },
    {
        question: "In living systems, hydrolysis of glycosidic bonds is catalyzed by enzymes called __________.",
        correctAnswers: ["hydrolases"],
        explanation: "Hydrolases are enzymes that catalyze hydrolysis reactions, including glycosidases for carbohydrate breakdown."
    },
    {
        question: "The formation of a glycosidic bond involves nucleophilic displacement at the __________ center.",
        correctAnswers: ["anomeric"],
        explanation: "The alcohol oxygen acts as a nucleophile attacking the anomeric carbon of the sugar donor."
    },
    {
        question: "Acid-catalyzed hydrolysis of glycosidic bonds involves protonation of the __________ atom.",
        correctAnswers: ["oxygen"],
        explanation: "Protonation of the glycosidic oxygen makes it a better leaving group, facilitating bond cleavage."
    },
    {
        question: "Glycosidic bonds result in relatively __________ structures compared to alcohols.",
        correctAnswers: ["stable", "more stable"],
        explanation: "Ether bonds in glycosidic linkages are more stable than alcohol groups against many chemical reactions."
    },

    // Test 3: Questions 21-30 (Disaccharides & Reducing Sugars)
    {
        question: "A sugar composed of two monosaccharide units is called a __________.",
        correctAnswers: ["disaccharide"],
        explanation: "Disaccharides are carbohydrates formed by linking two monosaccharides via a glycosidic bond."
    },
    {
        question: "Sucrose is a __________ sugar because it lacks free aldehyde or ketone groups.",
        correctAnswers: ["non-reducing"],
        explanation: "In sucrose, both anomeric carbons are involved in the glycosidic bond, so no free carbonyl is available for reduction."
    },
    {
        question: "Lactose is composed of galactose and __________ linked by a β-1,4-glycosidic bond.",
        correctAnswers: ["glucose"],
        explanation: "Lactose (milk sugar) is a disaccharide of β-D-galactose and D-glucose."
    },
    {
        question: "Maltose, a reducing disaccharide, consists of two __________ molecules.",
        correctAnswers: ["glucose"],
        explanation: "Maltose is formed from two α-D-glucose units linked by an α-1,4-glycosidic bond."
    },
    {
        question: "Reducing sugars can be detected by __________ test, which gives a positive color change.",
        correctAnswers: ["Benedict's", "Fehling's"],
        explanation: "These tests use copper(II) ions that are reduced to copper(I) oxide by the aldehyde/ketone groups of reducing sugars."
    },
    {
        question: "The molecular formula of most unmodified disaccharides is __________.",
        correctAnswers: ["C₁₂H₂₂O₁₁"],
        explanation: "This formula results from the condensation of two hexoses (C₆H₁₂O₆) minus one water molecule."
    },
    {
        question: "In reducing disaccharides, the __________ group remains free to act as a reducing agent.",
        correctAnswers: ["carbonyl", "aldehyde", "ketone"],
        explanation: "One of the monosaccharide units retains a free anomeric carbon with a carbonyl group."
    },
    {
        question: "Sucrose hydrolysis yields equal amounts of glucose and __________.",
        correctAnswers: ["fructose"],
        explanation: "Sucrose is composed of α-D-glucose and β-D-fructose linked by their anomeric carbons."
    },
    {
        question: "The sweetness of __________ sugars is generally higher than that of non-reducing sugars.",
        correctAnswers: ["reducing"],
        explanation: "Most reducing sugars like glucose and fructose taste sweeter than non-reducing sugars like sucrose."
    },
    {
        question: "Disaccharides serve as an important __________ source as they can be broken down into monosaccharides.",
        correctAnswers: ["energy"],
        explanation: "Disaccharides are digestible carbohydrates that provide glucose for cellular energy production."
    },

    // Test 4: Questions 31-40 (Polysaccharides - Starch & Glycogen)
    {
        question: "Polysaccharides with more than ten monosaccharide units are also called __________.",
        correctAnswers: ["glycans"],
        explanation: "The term glycan refers to any polysaccharide or oligosaccharide, whether homo- or heteropolysaccharide."
    },
    {
        question: "Starch is composed of two polymers: linear __________ and branched amylopectin.",
        correctAnswers: ["amylose"],
        explanation: "Amylose is the linear component of starch with α-1,4 linkages only, while amylopectin has both α-1,4 and α-1,6 linkages."
    },
    {
        question: "The linkage in amylose is specifically an __________ glycosidic bond.",
        correctAnswers: ["α-1,4", "alpha-1,4"],
        explanation: "Amylose consists of D-glucose units connected exclusively by α-1,4-glycosidic bonds."
    },
    {
        question: "Glycogen is often called '__________ starch' because it serves similar storage functions in animals.",
        correctAnswers: ["animal"],
        explanation: "Glycogen is the animal equivalent of plant starch, serving as the main glucose storage polysaccharide."
    },
    {
        question: "Glycogen has more frequent branching than starch, with branches occurring every __________ glucose residues.",
        correctAnswers: ["10", "ten"],
        explanation: "Glycogen branches every 8-12 glucose residues, making it more branched and compact than amylopectin."
    },
    {
        question: "Starch granules are stored in plant __________ and storage organs like roots and tubers.",
        correctAnswers: ["chloroplasts"],
        explanation: "In photosynthetic tissues, starch is synthesized and stored temporarily in chloroplasts."
    },
    {
        question: "The primary function of glycogen is to store excess __________ in animal bodies.",
        correctAnswers: ["glucose"],
        explanation: "Glycogen acts as a glucose reservoir that can be mobilized when blood glucose levels drop."
    },
    {
        question: "About 6-10% of liver weight is composed of __________, which is mobilized during fasting.",
        correctAnswers: ["glycogen"],
        explanation: "The liver stores glycogen to maintain blood glucose levels between meals and during fasting."
    },
    {
        question: "Muscle glycogen serves as a fuel source for __________ during contraction.",
        correctAnswers: ["ATP production", "energy"],
        explanation: "Muscle glycogen is broken down to glucose-6-phosphate for glycolysis and ATP generation during exercise."
    },
    {
        question: "Starch hydrolysis in digestion yields __________, which is absorbed and metabolized for energy.",
        correctAnswers: ["glucose"],
        explanation: "Enzymes like amylase break down starch into maltose and eventually glucose for absorption."
    },

    // Test 5: Questions 41-50 (Cellulose & Applications)
    {
        question: "__________ is the most abundant polysaccharide on Earth and a major component of plant cell walls.",
        correctAnswers: ["Cellulose"],
        explanation: "Cellulose is the primary structural polysaccharide in plants and the most abundant organic compound on Earth."
    },
    {
        question: "Cellulose consists of __________ glucose units linked by β-1,4-glycosidic bonds.",
        correctAnswers: ["β-D", "beta-D"],
        explanation: "The β configuration creates straight chains that can form extensive hydrogen bonding networks."
    },
    {
        question: "Unlike starch, cellulose cannot be digested by humans due to lack of __________ enzymes.",
        correctAnswers: ["cellulase"],
        explanation: "Humans lack cellulase enzymes needed to hydrolyze β-1,4 linkages in cellulose."
    },
    {
        question: "Cellulose provides __________ and strength to plant cell walls due to its rigid structure.",
        correctAnswers: ["rigidity"],
        explanation: "Extensive hydrogen bonding between cellulose chains creates strong, insoluble fibers."
    },
    {
        question: "The molecular weight of cellulose ranges from __________ to 2,000,000.",
        correctAnswers: ["200,000"],
        explanation: "Cellulose molecules are very large, containing 1,250 to 12,500 glucose units per molecule."
    },
    {
        question: "Cellulose is an important raw material for __________ and wood production.",
        correctAnswers: ["paper"],
        explanation: "Wood pulp, rich in cellulose, is the primary raw material for paper manufacturing."
    },
    {
        question: "In cellulose, glucose units are linked between C1 of one molecule and C4 of the next via __________ bonds.",
        correctAnswers: ["β-1,4-glycosidic", "beta-1,4-glycosidic"],
        explanation: "This specific linkage pattern allows cellulose chains to align and form strong microfibrils."
    },
    {
        question: "Cellulose differs from amylose mainly in the __________ of its glycosidic linkages.",
        correctAnswers: ["configuration", "stereochemistry"],
        explanation: "Cellulose has β linkages while amylose has α linkages, leading to different three-dimensional structures."
    },
    {
        question: "Some animals like ruminants can digest cellulose because their gut contains __________ that produce cellulase.",
        correctAnswers: ["microorganisms", "bacteria"],
        explanation: "Symbiotic bacteria and protozoa in ruminant stomachs produce cellulase enzymes to break down cellulose."
    },
    {
        question: "Carbohydrate polymers can lubricate skeletal joints and participate in cell __________ and adhesion.",
        correctAnswers: ["recognition"],
        explanation: "Glycoproteins and glycolipids on cell surfaces mediate cell-cell recognition and adhesion processes."
    }
];