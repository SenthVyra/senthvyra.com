export const slugFromLink = (link) => decodeURIComponent(link.replace(/\/+$/, "").split("/").pop());

const blogPosts = [
  {
    title: "When the Table Gets Longer - Going Beyond",
    link: "https://medium.com/@senthvyra/when-the-table-gets-longer-going-beyond-2beab00e131f",
    mediumLink: "https://medium.com/@senthvyra/when-the-table-gets-longer-going-beyond-2beab00e131f",
    linkedinLink: "https://www.linkedin.com/pulse/when-table-gets-longer-going-beyond-senthalan-vyravanathan-qnsyc/",
    pubDate: "2025-12-21",
    categories: ["senth-vyra", "software-company", "software-development", "habb", "sri-lanka"],
    thumbnail: "https://cdn-images-1.medium.com/max/1024/0*m3sWSoxW5QeZldPX",
    excerpt:
      "Some weeks don't explode with noise. They expand quietly — through people, preparation, movement, and meaning. This was one of those weeks.",
    summary:
      "A recap of a packed week for HABB: hosting visiting collaborators from India and Switzerland, celebrating Karthigai Vilakkeedu at the office, representing HappyMarket.lk at trade fairs in Jaffna and Colombo, crossing 100K reach on HABB's Facebook page, and fitting in client meetings, a colleague's wedding, and a few quiet resets along the way.",
  },
  {
    title: "The Week HABB Started Walking Into Real AI",
    link: "https://medium.com/@senthvyra/the-week-habb-started-walking-into-real-ai-e84f0a9ba2fa",
    mediumLink: "https://medium.com/@senthvyra/the-week-habb-started-walking-into-real-ai-e84f0a9ba2fa",
    linkedinLink: "https://www.linkedin.com/pulse/week-habb-started-walking-real-ai-senthalan-vyravanathan-ji42c/",
    pubDate: "2025-12-02",
    categories: ["senth-vyra", "senthalan-vyravanathan", "habb", "startup", "ai-projects"],
    thumbnail: "https://cdn-images-1.medium.com/max/1024/0*LKQ5HGWO2tYKrJIN",
    excerpt:
      "Some weeks arrive gently… but some weeks hit you like a turning point. This one felt like the universe whispering, \"Hey Team, Its level up time.\"",
    summary:
      "HABB moves into onsite operations in Jaffna and takes on its first real-time AI project, submits a proposal for a Department of Industries contract, expands OOIVU's hotel marketing work at a couple of Jaffna properties, and pauses to mark Maveerar Thinam as a team.",
  },
  {
    title: "From Software Engineer to Marketing Leader: The OOIVU Journey",
    link: "https://medium.com/@senthvyra/from-software-engineer-to-marketing-leader-the-ooivu-journey-59d36ad5baab",
    mediumLink: "https://medium.com/@senthvyra/from-software-engineer-to-marketing-leader-the-ooivu-journey-59d36ad5baab",
    linkedinLink: "https://www.linkedin.com/pulse/from-software-engineer-marketing-leader-ooivu-journey-vyravanathan-rphpc/",
    pubDate: "2025-11-15",
    categories: ["senth-vyra", "innovay", "ooivu", "habb", "marketing"],
    thumbnail: "https://cdn-images-1.medium.com/max/1024/0*OEJHf1TPtAaFyrcr",
    excerpt: "\"One skill is never enough — life doesn't let you stay in one lane.\"",
    summary:
      "A personal account of moving from a software engineering role into leading marketing for OOIVU, HABB's hotel management product — from early branding and field research to the product's launch at Tilko City Hotel.",
  },
  {
    title: "A New Chapter with Vavuniya Fashion Academy (VFA) & HABB Edgrow",
    link: "https://medium.com/@senthvyra/a-new-chapter-with-vavuniya-fashion-academy-vfa-habb-edgrow-35727ff9c626",
    mediumLink: "https://medium.com/@senthvyra/a-new-chapter-with-vavuniya-fashion-academy-vfa-habb-edgrow-35727ff9c626",
    linkedinLink: "https://www.linkedin.com/pulse/new-chapter-vavuniya-fashion-academy-vfa-habb-edgrow-vyravanathan-mhakc/",
    pubDate: "2025-11-09",
    categories: ["habb", "senth-vyra", "vavuniya-fashion-academy", "edgrow", "women-empowerment"],
    thumbnail: "https://cdn-images-1.medium.com/max/1024/0*3b8oLF_auTw87LTQ",
    excerpt:
      "After our recent collaboration, VFA now proudly partners with HABB Edgrow as their official digital partner. I'm honoured that Thulaxan Uthayakumar and I represent HABB on the VFA board.",
    summary:
      "HABB Edgrow becomes the official digital partner for Vavuniya Fashion Academy, taking on its website, social presence, and photography, and helping run a graduation event for the academy's women graduates.",
  },
  {
    title: "EdGrow's Journey - Part 2",
    link: "https://medium.com/@senthvyra/edgrows-journey-part-2-197246c0cd3b",
    mediumLink: "https://medium.com/@senthvyra/edgrows-journey-part-2-197246c0cd3b",
    linkedinLink: "https://www.linkedin.com/pulse/edgrows-journey-part-2-senthalan-vyravanathan-5ibfc/",
    pubDate: "2025-11-06",
    categories: ["sri-lanka", "senth-vyra", "education", "habb", "edgrow"],
    thumbnail: "https://cdn-images-1.medium.com/max/1024/0*hM_JrH04QNZBVgLb",
    excerpt:
      "The journey of EdGrow isn't just about building an education platform — it's about shaping moments that make young hearts dream bigger.",
    summary:
      "Notes from EdGrow's outreach trips to Trincomalee and Mullaitivu, visiting preschools and community sites as part of its hands-on approach to education work in the region.",
  },
  {
    title: "What is EdGrow?",
    link: "https://medium.com/@senthvyra/what-is-edgrow-20bf2945a976",
    mediumLink: "https://medium.com/@senthvyra/what-is-edgrow-20bf2945a976",
    linkedinLink: "https://www.linkedin.com/pulse/what-edgrow-senthalan-vyravanathan-tktgc/",
    pubDate: "2025-09-02",
    categories: ["habb", "social-services", "edgrow", "sri-lanka"],
    thumbnail: "https://cdn-images-1.medium.com/max/1024/0*v10qhXidhiwx9eqP",
    excerpt:
      "Every seed of change has its story. For us at HABB, that seed was EdGrow — our dedicated path to education growth.",
    summary:
      "An overview of EdGrow, HABB's education initiative — the U-Learn AI learning app, preschool sponsorships, the Vavuniya Fashion Academy partnership, and its push for fairer teacher pay in Northern Sri Lanka.",
  },
  {
    title: "Next Chapter: The Internship Wave at HABB",
    link: "https://medium.com/@senthvyra/next-chapter-the-internship-wave-at-habb-734824afca3f",
    mediumLink: "https://medium.com/@senthvyra/next-chapter-the-internship-wave-at-habb-734824afca3f",
    linkedinLink: "https://www.linkedin.com/pulse/next-chapter-internship-wave-habb-senthalan-vyravanathan-bueac/",
    pubDate: "2025-08-28",
    categories: ["internships", "habb-lanka", "habb"],
    thumbnail: "https://cdn-images-1.medium.com/max/1024/1*C2YQmn5alHOzhWVWZj6juA.jpeg",
    excerpt:
      "From August 4, a new chapter quietly unfolded at HABB, one that excites me deeply. We began training our very first wave of interns.",
    summary:
      "HABB launches its first internship program across AI/ML, development, business, and cybersecurity tracks, starting with a virtual orientation and growing into in-person meetups with students from several universities.",
  },
  {
    title: "Thalir 2025 - When Ideas Take Root in the North",
    link: "https://medium.com/@senthvyra/thalir-2025-when-ideas-take-root-in-the-north-1e1c1bea03e0",
    mediumLink: "https://medium.com/@senthvyra/thalir-2025-when-ideas-take-root-in-the-north-1e1c1bea03e0",
    linkedinLink: "https://www.linkedin.com/pulse/thalir-2025-when-ideas-take-root-north-senthalan-vyravanathan-dxubc/",
    pubDate: "2025-08-04",
    categories: ["thalir", "jaffna", "startup", "sri-lanka", "david-pieris"],
    thumbnail: "https://cdn-images-1.medium.com/max/1024/0*Wn90Q3hHWIOY-dd8",
    excerpt:
      "Date: 15 July 2025. Venue: Hotel North Gate, Jaffna. Hosted by: David Pieris Motor Company (DPMC) under the David Pieris Group.",
    summary:
      "HABB receives a Rs. 500,000 grant at the Thalir 2025 entrepreneurship event in Jaffna, part of a wider Rs. 20 million seed-funding round split among 26 regional finalists across sectors like automotive, logistics, and agriculture.",
  },
  {
    title: "VANTA 25 - HABB Phase 2 Begins: A New Era of Product-Driven Innovation",
    link: "https://medium.com/@senthvyra/vanta-25-habb-phase-2-begins-a-new-era-of-product-driven-innovation-65d203687118",
    mediumLink: "https://medium.com/@senthvyra/vanta-25-habb-phase-2-begins-a-new-era-of-product-driven-innovation-65d203687118",
    linkedinLink: "https://www.linkedin.com/pulse/vanta-25-habb-phase-2-begins-new-era-product-driven-vyravanathan-5wclc/",
    pubDate: "2025-07-17",
    categories: ["habb", "senth-vyra", "sri-lanka", "vanta", "software-company"],
    thumbnail: "https://cdn-images-1.medium.com/max/1024/0*rCtqDAO72tWxQb12",
    excerpt:
      "There are moments in a company's life when everything shifts — not by accident, but by design. VANTA 25 was one such moment for HABB.",
    summary:
      "HABB marks its move into a product-focused second phase with the VANTA 25 event, reflecting on team culture and setting the roadmap for the AI-powered products it plans to launch next.",
  },
  {
    title: "The HABB Journey: Part Two - Where Sparks Found a Home",
    link: "https://medium.com/@senthvyra/the-habb-journey-part-two-where-sparks-found-a-home-cf5663120cee",
    mediumLink: "https://medium.com/@senthvyra/the-habb-journey-part-two-where-sparks-found-a-home-cf5663120cee",
    linkedinLink: "https://www.linkedin.com/pulse/habb-journey-phase-two-senthalan-vyravanathan-bbwhc/",
    pubDate: "2025-07-13",
    categories: ["senth-vyra", "habb", "software-company", "startup", "sri-lanka"],
    thumbnail: "https://cdn-images-1.medium.com/max/1024/0*5wB-WSL3iy36Oqa_",
    excerpt:
      "There's a moment when every startup leaves the sketchbook and steps into real space. For HABB, that moment came on June 9, 2025.",
    summary:
      "HABB sets up its first physical office space, meets with Innovay's leadership, and welcomes a new AI/ML lead as the company matures from an idea into a working business.",
  },
  {
    title: "🕰️ Some Moments Are Rare",
    link: "https://medium.com/@senthvyra/%EF%B8%8F-some-moments-are-rare-2d46ecbaf9d9",
    mediumLink: "https://medium.com/@senthvyra/%EF%B8%8F-some-moments-are-rare-2d46ecbaf9d9",
    linkedinLink: "https://www.linkedin.com/pulse/some-moments-rare-senthalan-vyravanathan-xnsjc/",
    pubDate: "2025-07-02",
    categories: ["senth-vyra", "sri-lanka", "jaffna", "story"],
    thumbnail: "https://miro.medium.com/v2/resize:fit:700/0*nHThAg-dBGclOJZw",
    excerpt:
      "A few weeks back, I stepped into the historic Kailasapathy Auditorium at the University of Jaffna for the Second International Research conference.",
    summary:
      "A reflection on meeting veteran Tamil scholar Prof. C. Sivalingarasa at a University of Jaffna education conference, and what his decades spent preserving Tamil literature and mentoring students meant to the author.",
  },
  {
    title: "The Calm Within the Chaos | ft. Gajarthan Theverajah",
    link: "https://www.linkedin.com/pulse/calm-within-chaos-ft-gajarthan-theverajah-senthalan-vyravanathan-ud6oc/",
    linkedinLink: "https://www.linkedin.com/pulse/calm-within-chaos-ft-gajarthan-theverajah-senthalan-vyravanathan-ud6oc/",
    pubDate: "2025-06-12",
    categories: ["senth-vyra", "mentorship", "leadership", "startup"],
    thumbnail:
      "https://media.licdn.com/dms/image/v2/D5612AQHmrfcZneF6aQ/article-cover_image-shrink_720_1280/B56ZdipTL0G0AQ-/0/1749706697732?e=2147483647&v=beta&t=RRHlTNh7t62MsJiSB6HwXgvBFIeMCMQ4-5QUVKsN4OU",
    excerpt:
      "Lessons in staying grounded under pressure, drawn from working alongside senior entrepreneur Gajarthan Theverajah at Bohar Solutions.",
    summary:
      "A reflection on what the author learned working under Gajarthan Theverajah, a senior student and tech entrepreneur running Bohar Solutions. Drawing on classical Tamil philosophy and the Japanese idea of Ikigai, it covers his approach to staying calm under pressure, leading by trust rather than control, and putting in consistent effort without fixating on outcomes.",
  },
  {
    title: "The Extraordinary Journey of HABB",
    link: "https://medium.com/@senthvyra/the-extraordinary-journey-of-habb-2d6c3d1ba5e7",
    mediumLink: "https://medium.com/@senthvyra/the-extraordinary-journey-of-habb-2d6c3d1ba5e7",
    linkedinLink: "https://www.linkedin.com/pulse/extraordinary-journey-habb-senthalan-vyravanathan-wgrac/",
    pubDate: "2025-06-09",
    categories: ["habb-lanka", "habb", "software-company", "story", "entrepreneurship"],
    thumbnail: "https://miro.medium.com/v2/resize:fit:700/0*ibd-ZGVUB5dvdncK",
    excerpt:
      "There are journeys that begin with capital, and there are journeys that begin with calling. Ours? It began with both dust and dream.",
    summary:
      "The origin story of HABB — four friends at SLIIT turning a hostel-room idea into a registered company in February 2025, with early mentorship, its first team, and the launch of the EdGrow initiative.",
  },
  {
    title: "Google now knows my name.",
    link: "https://www.linkedin.com/pulse/google-now-knows-my-name-senthalan-vyravanathan-btwcc/",
    linkedinLink: "https://www.linkedin.com/pulse/google-now-knows-my-name-senthalan-vyravanathan-btwcc/",
    pubDate: "2025-06-03",
    categories: ["senth-vyra", "personal-branding", "milestone"],
    thumbnail:
      "https://media.licdn.com/dms/image/v2/D5612AQFyw_ii0KiZYg/article-cover_image-shrink_720_1280/B56Zc0hFBzG0AM-/0/1748932832836?e=2147483647&v=beta&t=ZdMsS5GD--ZhoUCNbb5FyNp74RcMfkCOYf6xxL9Mqx8",
    excerpt:
      "Getting a Google Knowledge Panel and what it means after years of building a consistent, genuine online presence.",
    summary:
      "The author marks getting a Google Knowledge Panel — a form of recognition Google grants for an established, verifiable online presence. He frames it as proof that consistent, authentic effort compounds over time, and uses the milestone to encourage other self-taught developers and early-career professionals to keep building their own presence rather than treating it as a finish line.",
  },
  {
    title: "A War-torn Dreamer from Vaddakkachchi — \"A Kutty Story\"",
    link: "https://medium.com/@senthvyra/a-war-torn-dreamer-from-vaddakkachchi-a-kutty-story-0238ed3f03f4",
    mediumLink: "https://medium.com/@senthvyra/a-war-torn-dreamer-from-vaddakkachchi-a-kutty-story-0238ed3f03f4",
    linkedinLink: "https://www.linkedin.com/pulse/war-torn-dreamer-from-vaddakkachchi-kutty-story-vyravanathan-kjxgc/",
    pubDate: "2025-05-27",
    categories: ["entrepreneurship", "senth-vyra", "startup", "software-development", "habb"],
    thumbnail: "https://miro.medium.com/v2/resize:fit:700/1*Og6bDWlii_bEpl_33IIaqw.png",
    excerpt:
      "Not all founders are born in boardrooms. Some are born in warzones. Some dreams aren't funded, they're forged. It was 2013. I was 14.",
    summary:
      "A personal history piece tracing the author's path from a childhood shaped by the final years of the civil war and time in a refugee camp, through early curiosity about technology as a teenager, to the ambitions that eventually led to founding HABB.",
  },
  {
    title: "Is the Field Saturated? Let's Talk About Growth and Opportunities",
    link: "https://www.linkedin.com/pulse/field-saturated-lets-talk-growth-opportunities-senthalan-vyravanathan-wyf5c/",
    linkedinLink: "https://www.linkedin.com/pulse/field-saturated-lets-talk-growth-opportunities-senthalan-vyravanathan-wyf5c/",
    pubDate: "2025-01-04",
    categories: ["career-growth", "senth-vyra", "software-engineering", "mindset"],
    thumbnail:
      "https://media.licdn.com/dms/image/v2/D5612AQHpdTTCORObOg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1735964384419?e=2147483647&v=beta&t=7gI1fUjSR1rOAjJum_i_MV_IBK9bmrxQqjyHN7rM_DA",
    excerpt:
      "A response to juniors and peers worried their field is saturated — arguing that growth comes down to personal effort, not market conditions.",
    summary:
      "A response to the recurring worry among juniors and career-changers that their field is 'too saturated.' The author argues saturation isn't the real barrier — what matters is building focused expertise, taking the opportunities in front of you seriously regardless of size, and treating consistent personal growth and networking as the actual drivers of a career, rather than waiting for ideal market conditions.",
  },
];

export default blogPosts;
