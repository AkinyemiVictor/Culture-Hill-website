(function () {
  const blogPosts = [
    {
      id: 1,
      title: "5 Practical Organic Farming Habits for Small Farms",
      date: "January 15, 2025",
      excerpt:
        "Five daily practices that help small farms improve soil health and reduce chemical dependency.",
      content:
        "Strong organic farming starts with consistent routines. At Culture Hill, we focus on compost application, crop rotation planning, mulching, careful water use, and weekly field checks. These simple habits keep the soil alive, reduce production losses, and improve the quality of every harvest we deliver.",
      image: "/assets/Images/20220529_103140.jpg",
    },
    {
      id: 2,
      title: "How Seasonal Eating Supports Family Nutrition",
      date: "February 10, 2025",
      excerpt:
        "Seasonal produce is often fresher, more affordable, and more nutrient-dense for households.",
      content:
        "When families eat foods that are in season, they benefit from better taste, improved nutrient quality, and lower cost. Seasonal choices also support local farmers and reduce transport stress on produce. This is one reason we align our supply with natural harvest cycles throughout the year.",
      image: "/assets/Images/20220602_115950.jpg",
    },
    {
      id: 3,
      title: "Cover Crops: Protecting Soil Between Harvests",
      date: "March 5, 2025",
      excerpt:
        "Cover crops protect topsoil, suppress weeds, and improve moisture retention for the next cycle.",
      content:
        "Empty fields lose nutrients quickly when left exposed. We use cover crops to hold soil structure, prevent erosion, and reduce weed pressure before the next planting window. Over time, this approach builds stronger root zones and helps the next crop establish faster with less stress.",
      image: "/assets/Images/20220615_135804.jpg",
    },
    {
      id: 4,
      title: "What We Learned from This Month's Harvest Run",
      date: "April 2, 2025",
      excerpt:
        "A quick breakdown of harvest logistics, sorting lessons, and delivery improvements from the field.",
      content:
        "This month showed us where timing matters most, especially between harvest, sorting, and dispatch. By tightening our picking windows and improving crate handling, we reduced bruising and sped up delivery to customers. Small operational wins like this improve quality at every stage.",
      image: "/assets/Images/cheese.jpg",
    },
    {
      id: 5,
      title: "Potato Storage Tips That Reduce Waste",
      date: "May 9, 2025",
      excerpt:
        "Better airflow, cooler storage, and sorting routines can significantly lower potato loss.",
      content:
        "Post-harvest loss often comes from poor storage conditions. For potatoes, we prioritize shade, dry storage, and regular sorting to remove damaged tubers early. These changes extend shelf life and protect customer confidence, especially for households and retailers buying in bulk.",
      image: "/assets/Images/potato.jpg",
    },
    {
      id: 6,
      title: "Preparing Poultry Pens Before Rainy Season",
      date: "June 20, 2025",
      excerpt:
        "Rain-ready poultry housing prevents disease pressure and protects flock productivity.",
      content:
        "Before heavy rains begin, poultry housing needs drainage checks, dry bedding plans, and stronger ventilation control. Preventive preparation reduces stress in birds and limits avoidable health issues. Our team reviews these essentials each season to maintain stable egg and meat output.",
      image: "/assets/Images/20220629_083546.jpg",
    },
    {
      id: 7,
      title: "Feed Planning for Steady Egg Production",
      date: "July 11, 2025",
      excerpt:
        "Balanced feed schedules improve laying consistency and long-term flock performance.",
      content:
        "Reliable egg supply starts with structured nutrition. We monitor feed composition, feeding time, and clean water access to maintain productivity without overfeeding. Consistent feed planning also supports bird health, which directly improves shell quality and customer satisfaction.",
      image: "/assets/Images/chicken.jpg",
    },
    {
      id: 8,
      title: "How We Keep Milk Fresh from Farm to Market",
      date: "August 3, 2025",
      excerpt:
        "Clean handling and rapid cooling are key to preserving milk quality after collection.",
      content:
        "Fresh milk quality depends on hygiene, timing, and temperature. Our process emphasizes clean containers, immediate filtration, and quick cooling before dispatch. Maintaining this chain helps preserve taste, extend usable life, and ensure safer dairy handling for buyers.",
      image: "/assets/Images/eggs.jpg",
    },
    {
      id: 9,
      title: "Maize Pest Control Without Heavy Chemicals",
      date: "August 21, 2025",
      excerpt:
        "Field scouting, crop spacing, and targeted treatments reduce pest damage effectively.",
      content:
        "Pest control does not always require aggressive chemical use. We combine early scouting, cleaner field edges, crop spacing discipline, and targeted interventions only where needed. This strategy protects maize yield while supporting safer farm ecosystems and healthier soil activity.",
      image: "/assets/Images/maize.jpg",
    },
    {
      id: 10,
      title: "Plantain Harvest Timing: Signs to Watch",
      date: "September 8, 2025",
      excerpt:
        "Harvesting plantain at the right maturity stage improves shelf life and market value.",
      content:
        "Plantain quality is highly dependent on harvest timing. We track fruit fullness, color tone, and bunch firmness to choose the best picking window. Harvesting too early or too late affects transport resilience, so timing decisions are critical for customer-ready supply.",
      image: "/assets/Images/milk-in-can.jpg",
    },
    {
      id: 11,
      title: "Water Management for Dry Weeks",
      date: "September 25, 2025",
      excerpt:
        "Simple irrigation planning helps farms stay productive during short dry spells.",
      content:
        "Dry weeks can quickly stress crops without planned water management. We prioritize moisture-retaining mulch, staged irrigation, and crop-specific watering schedules. This approach keeps plants stable and reduces emergency losses when rainfall patterns shift unexpectedly.",
      image: "/assets/Images/rain.jpg",
    },
    {
      id: 12,
      title: "Compost Recipe We Use at Culture Hill",
      date: "October 14, 2025",
      excerpt:
        "A balanced mix of green and brown materials creates nutrient-rich compost for strong growth.",
      content:
        "Our composting process blends crop residue, dry leaves, and organic manure in balanced layers. Turning at scheduled intervals and managing moisture allows stable decomposition and nutrient release. The result is healthier soil structure and improved crop performance over time.",
      image: "/assets/Images/young-corn.jpg",
    },
    {
      id: 13,
      title: "Building Trust with Direct Farm Customers",
      date: "November 2, 2025",
      excerpt:
        "Clear communication, honest pricing, and consistent quality build repeat demand.",
      content:
        "Trust is earned through consistency. We keep customers informed about harvest timing, available quantities, and realistic delivery windows. Transparent communication, fair pricing, and dependable quality are central to how we grow long-term buyer relationships.",
      image: "/assets/Images/soil.jpg",
    },
    {
      id: 14,
      title: "Affordable Produce: How We Price Fairly",
      date: "November 20, 2025",
      excerpt:
        "Fair pricing balances farmer sustainability with household and retail affordability.",
      content:
        "Our pricing approach considers farm input costs, seasonal supply changes, and customer affordability. We avoid unstable price swings where possible and communicate early when market pressure increases. Fair pricing helps both producers and buyers plan with confidence.",
      image: "/assets/Images/watermelon.jpg",
    },
    {
      id: 15,
      title: "Farm Safety Checklist for Teams and Visitors",
      date: "December 6, 2025",
      excerpt:
        "Routine safety checks reduce preventable accidents during farm operations.",
      content:
        "Safe farms are productive farms. We maintain daily equipment checks, clear walk paths, protective gear use, and visitor orientation before field access. These basics prevent disruptions and help every team member work confidently across active farm zones.",
      image: "/assets/Images/orange.jpg",
    },
    {
      id: 16,
      title: "Why Biodiversity Matters on a Working Farm",
      date: "December 22, 2025",
      excerpt:
        "Biodiversity improves pollination, pest resilience, and long-term ecological stability.",
      content:
        "Diverse farms are more resilient. By mixing crops and supporting beneficial organisms, we reduce single-point failures from pests or weather stress. Biodiversity also strengthens pollination and soil health, which supports reliable yields across multiple seasons.",
      image: "/assets/Images/20220630_234207.jpg",
    },
    {
      id: 17,
      title: "Post-Harvest Sorting: The Small Step That Pays",
      date: "January 9, 2026",
      excerpt:
        "Effective sorting improves product quality, reduces returns, and strengthens buyer trust.",
      content:
        "Sorting is often overlooked, but it protects value at the final stage of production. We grade by size, condition, and readiness before packaging. This helps match products to buyer needs, lowers rejection rates, and keeps deliveries consistent.",
      image: "/assets/Images/green-tea-bud-leaves-green-tea-plantations-morning.jpg",
    },
    {
      id: 18,
      title: "Healthy Soil, Better Taste: What Customers Notice",
      date: "January 23, 2026",
      excerpt:
        "Soil quality influences not only yield, but also flavor and shelf performance.",
      content:
        "Customers often notice the difference when produce is grown in healthy soil systems. Better nutrient balance and root development can improve taste, texture, and storage performance. This is why soil management remains one of our top long-term priorities.",
      image: "/assets/Images/potatoes.jpg",
    },
    {
      id: 19,
      title: "Community Market Day Highlights",
      date: "February 6, 2026",
      excerpt:
        "A recap of what moved fastest, what customers requested, and what we are scaling next.",
      content:
        "Community market days give us direct insight into buyer priorities. This month, staple foods moved fastest, and customers requested more bundled produce options. We are using that feedback to improve packing formats and next-cycle planning.",
      image: "/assets/Images/rice.jpg",
    },
    {
      id: 20,
      title: "Simple Kitchen Ideas for Fresh Farm Ingredients",
      date: "February 14, 2026",
      excerpt:
        "Simple preparation ideas can help families get more value from farm-fresh ingredients.",
      content:
        "Fresh produce becomes more practical when households have quick preparation options. We now share simple usage tips with deliveries to help reduce waste and improve meal planning. Better usage at home also increases confidence in repeat farm purchases.",
      image: "/assets/Images/20220804_190240.jpg",
    },
    {
      id: 21,
      title: "Seed Selection: Starting Strong Every Season",
      date: "February 18, 2026",
      excerpt:
        "Strong germination starts with quality seed choice and clean early handling.",
      content:
        "Good harvest outcomes begin with seed selection. We prioritize proven varieties, inspect viability, and prepare seed beds carefully before planting. Starting strong at this stage improves stand uniformity and reduces avoidable setbacks later in the cycle.",
      image: "/assets/Images/bottles-milk-arrangement-still-life.jpg",
    },
    {
      id: 22,
      title: "Reducing Plastic in Farm Packaging",
      date: "February 20, 2026",
      excerpt:
        "Packaging updates can reduce waste while still protecting produce in transit.",
      content:
        "We are gradually shifting toward lower-plastic packaging where product protection allows it. Reusable crates and lighter alternatives are improving our environmental footprint without compromising delivery quality. Each packaging decision balances durability, hygiene, and sustainability.",
      image: "/assets/Images/20220811_011932.jpg",
    },
    {
      id: 23,
      title: "Training Young Farmers in Our Community",
      date: "February 23, 2026",
      excerpt:
        "Hands-on training helps younger farmers build practical, sustainable skills quickly.",
      content:
        "Local training sessions focus on field basics, safe handling, and simple farm planning methods. Our goal is to transfer practical knowledge that helps younger farmers start effectively and avoid costly mistakes. Community growth depends on shared skills and mentorship.",
      image: "/assets/Images/20220815_135524.jpg",
    },
    {
      id: 24,
      title: "From Field Notes to Better Farm Decisions",
      date: "February 26, 2026",
      excerpt:
        "Daily observations become powerful when tracked and used in planning meetings.",
      content:
        "Field notes on weather, pests, and crop response are small but valuable data points. We review them regularly to refine schedules, input usage, and risk planning. Better decisions come from consistent records, not guesswork.",
      image: "/assets/Images/20220906_201436.jpg",
    },
    {
      id: 25,
      title: "Harvest Logistics: Moving Faster with Less Loss",
      date: "February 28, 2026",
      excerpt:
        "Route planning and staging can cut delays and preserve product quality in transit.",
      content:
        "Harvest logistics is where quality can be won or lost. We now stage produce earlier, improve loading order, and coordinate delivery windows more tightly. Faster movement reduces spoilage risk and helps customers receive fresher products.",
      image: "/assets/Images/20220729_140131.jpg",
    },
    {
      id: 26,
      title: "What Is Next for Culture Hill in 2026",
      date: "March 1, 2026",
      excerpt:
        "Our next phase focuses on scale, quality consistency, and stronger customer partnerships.",
      content:
        "In 2026, we are expanding production planning, strengthening quality controls, and improving customer communication workflows. We are also investing in better post-harvest handling and community collaboration. The goal remains clear: reliable, healthy farm products delivered with integrity.",
      image: "/assets/Images/20220808_184408.jpg",
    },
  ];

  window.cultureHillBlogPosts = blogPosts;
})();
