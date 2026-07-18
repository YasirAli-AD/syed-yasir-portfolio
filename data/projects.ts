export type ProjectCategory =
  | "Campaigns"
  | "Packaging"
  | "Brand Identity"
  | "Events & Activations"
  | "Collateral";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectRecognition {
  title: string;
  url: string;
}

export interface Project {
  id: string;

  title: string;
  client: string;
  brand: string;
  year: string;
  role: string;
  category: ProjectCategory;

  keyVisual: string;

  overview: string;
  challenge: string;
  solution: string;
  outcome: string;

  contribution: string[];

  tools: string[];

  recognition?: ProjectRecognition[];

  links?: ProjectLink[];

  featured?: boolean;
}

export const projects: Record<string, Project> = {
  "campaign-01": {
    id: "campaign-01",

    title: "A Sweet Return",

    brand: "Hershey's",
    client: "Hershey's",

    year: "2024",

    role: "Art Director",

    category: "Campaigns",

    keyVisual: "/images/work/campaign/01-KV.webp",

    overview:
      "An integrated Ramadan campaign designed to reposition Hershey's as a brand that celebrates family togetherness through shared baking moments. The campaign centered on emotional storytelling supported by a unified visual language across multiple touchpoints.",

    challenge:
      "Move Hershey's beyond being perceived as only a chocolate brand and create a meaningful emotional connection with families during Ramadan while maintaining strong product visibility across outdoor and retail environments.",

    solution:
      "Developed the creative direction around the insight that Ramadan brings families back together in the kitchen. Created a warm cinematic key visual that was adapted into a complete integrated campaign system including outdoor media, transit advertising and retail displays.",

    outcome:
      "Delivered a cohesive campaign identity that remained visually consistent across every medium while reinforcing Hershey's presence during the Ramadan season through a memorable and emotionally driven campaign.",

    contribution: [
      "Art Direction",
      "Key Visual Design",
      "Campaign Adaptation",
    ],

    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],

    featured: true,
  },
  "campaign-02": {
    id: "campaign-02",

    title: "Taste the Thrill with Zakis",

    client: "Global Food Industries, UAE",

    brand: "Al Areesh",

    year: "2025",

    role: "Art Director",

    category: "Campaigns",

    keyVisual: "/images/work/campaign/02-KV.webp",

    overview:
      "A product launch campaign developed for Zakis, a snack brand under Al Areesh by Global Food Industries, UAE. The creative direction focused on building a bold visual identity that connected with Gen Z through expressive packaging, energetic visuals and an integrated launch campaign.",

    challenge:
      "Launch a new snack brand in a highly competitive market while creating a distinctive identity that resonates with Gen Z—an audience inspired by bold flavors, visual culture and thrilling experiences.",

    solution:
      "Developed the campaign around the concept 'Taste the Thrill with Zakis.' Designed the packaging, key visual and campaign system to communicate excitement, intensity and confidence, ensuring a consistent brand experience across all launch touchpoints.",

    outcome:
      "Delivered a cohesive launch campaign that established Zakis as a bold and energetic snack brand while creating a memorable visual identity tailored to a new generation of consumers.",

    contribution: [
      "Art Direction",
      "Key Visual Design",
      "Campaign Adaptation",
    ],

    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],


    featured: true,
  },
  "campaign-03": {
    id: "campaign-03",

    title: "See Visible Growth in 8 Weeks",

    client: "Abbott Nutrition Pakistan",

    brand: "PediaSure",

    year: "2025",

    role: "Art Director",

    category: "Campaigns",

    keyVisual: "/images/work/campaign/03-KV.webp",

    overview:
      "An annual integrated campaign developed for PediaSure by Abbott Nutrition Pakistan, focused on reinforcing the brand's growth promise through clear visual communication. The campaign translated scientific credibility into an engaging and reassuring experience for parents across multiple campaign touchpoints.",

    challenge:
      "Parents in our region are highly conscious of their children's growth, while nutritional gaps remain a common concern. The challenge was to communicate PediaSure's growth benefit in a way that felt credible, easy to understand and emotionally relevant without overwhelming parents with scientific complexity.",

    solution:
      "Developed the visual communication direction around the promise 'See Visible Growth in 8 Weeks.' Created a clear and approachable visual system that balanced trust, optimism and scientific credibility while ensuring consistent communication across campaign assets, retail touchpoints and digital applications.",

    outcome:
      "Delivered a cohesive campaign that communicated PediaSure's growth benefit with clarity and confidence, creating a visually consistent brand experience that supported the annual growth campaign across consumer-facing touchpoints.",

    contribution: [
      "Art Direction",
      "Visual Communication",
      "Campaign Adaptation",
    ],

    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],

    featured: true,
  },
  "campaign-04": {
    id: "campaign-04",

        title: "Repair That Responds",



        client: "Unilever Pakistan",



        brand: "Dove",



        year: "2023",



        role: "Art Director",



        category: "Campaigns",



        keyVisual: "/images/work/campaign/04-KV.webp",



        overview:

          "A pioneering programmatic Digital Out of Home (DOOH) campaign developed for Dove Pakistan, designed to deliver real-time, weather-responsive messaging that reinforced Dove's promise of hair repair from the first wash. The campaign combined technology, live data and visual storytelling to create a more relevant consumer experience.",



        challenge:

          "Communicate Dove's hair repair benefit in a way that felt timely, contextual and meaningful while demonstrating how technology could enhance everyday brand communication through dynamic creative.",



        solution:

          "Led the visual and animation direction for a weather-responsive DOOH campaign that adapted creative messaging based on live local weather conditions. Every visual state was designed to remain consistent with Dove's premium identity while delivering relevant communication in real time.",



        outcome:

          "Delivered an innovative campaign that combined creative direction with programmatic DOOH technology, creating a dynamic brand experience that responded to changing weather conditions while reinforcing Dove's core hair repair proposition.",



        contribution: [

          "Art Direction",

          "Visual Direction",

          "Animation Direction",

        ],



        tools: [

          "Adobe Photoshop",

          "Adobe Illustrator",

          "Adobe After Effects",

        ],

        recognition: [
          {
            title: "Public appreciation by Umair Kazi, Partner at Ishtehari Communication",
            url: "https://www.linkedin.com/posts/umairkazi_dove-weather-sensitive-microcampaign-activity-7088511930436399104-Uidg",
          },
          {
            title: "Featured by World Out of Home Organization",
            url: "https://www.worldooh.org/news/DOOH-with-Weather-Ads#",
          },
        ],

        featured: true,

      },
  "campaign-05": {

    id: "campaign-05",

    title: "Win Big With Reese's",

    client: "Hershey's Middle East",

    brand: "Reese's",

    year: "2024",

    role: "Art Director",

    category: "Campaigns",

    keyVisual: "/images/work/campaign/05-KV.webp",

    overview:
      "A promotional campaign developed for Reese's to drive consumer excitement through the opportunity to win exclusive prizes. The creative direction focused on creating a bold and energetic campaign experience that encouraged participation while strengthening the brand's playful personality.",

    challenge:
      "Develop a visually impactful promotional campaign that clearly communicated the consumer promotion, captured attention instantly and motivated shoppers to participate across campaign touchpoints.",

    solution:
      "Created the campaign's visual direction around Win Big With Reese's. Designed a bold key visual and adaptable campaign system that translated the promotional idea into a consistent visual language across retail and campaign applications.",

    outcome:
      "Delivered a visually cohesive promotional campaign that strengthened brand visibility, communicated the promotional mechanic with clarity and created an engaging consumer experience.",

    contribution: [
      "Art Direction",
      "Key Visual Design",
      "Campaign Adaptation",
    ],

    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],

    featured: true,
  },


  "campaign-06": {

    id: "campaign-06",

    title: "PediaSure Rewards Journey",

    client: "Abbott Nutrition Pakistan",

    brand: "PediaSure",

    year: "2023",

    role: "Art Director",

    category: "Campaigns",

    keyVisual: "/images/work/campaign/06-KV.webp",

    overview:
      "A retail-first customer loyalty program developed for PediaSure to strengthen long-term consumer engagement beyond the point of purchase. The campaign introduced a connected rewards ecosystem where parents could sign up, collect points and redeem gifts, transforming every purchase into an ongoing relationship with the brand.",

    challenge:
      "Design a seamless loyalty experience that encouraged parents to participate in the rewards program while keeping every step simple, trustworthy and easy to understand across all retail touchpoints.",

    solution:
      "Led the Art Direction, Key Visual Design and Campaign Adaptation for the complete loyalty program. Developed a visual communication system that clearly explained the three-step consumer journey—Sign Up, Collect Points and Redeem Rewards—while extending the experience across retail displays, POSM, billing counters and in-store branding.",

    outcome:
      "Delivered a unified retail campaign that connected every physical touchpoint into a consistent loyalty experience, making the rewards program easy to understand while strengthening long-term engagement with the PediaSure brand.",

    contribution: [
      "Art Direction",
      "Key Visual Design",
      "Campaign Adaptation",
    ],

    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],

    links: [
      {
        label: "Watch Campaign Film",
        url: "https://www.youtube.com/watch?v=0QHmS_CIo5w",
      },
    ],

    featured: true,
  },

  "campaign-07": {
    id: "campaign-07",

    title: "Distance to Hair Repair",

    client: "Unilever Pakistan",

    brand: "Dove",

    year: "2023",

    role: "Art Director",

    category: "Campaigns",

    keyVisual: "/images/work/campaign/07-KV.webp",

    overview:
      "A contextual DOOH campaign developed for Dove Pakistan that transformed navigation-style communication into a creative brand experience. The campaign used location-based messaging to guide consumers towards nearby retail availability while reinforcing Dove's Hair Repair from the 1st Wash proposition through a simple yet memorable outdoor execution.",

    challenge:
      "Turn a functional retail direction message into a meaningful brand experience instead of a conventional adaptation, while encouraging consumers to discover nearby stores carrying Dove products.",

    solution:
      "Led the Visual Direction for the campaign by combining real-world distance cues with Dove's Hair Repair from the 1st Wash proposition. The creative system transformed navigation into communication, proving that outdoor media could solve a business challenge through original creative thinking rather than standard adaptations.",

    outcome:
      "Delivered a contextual outdoor campaign that connected consumers with nearby retail locations while showcasing how a simple insight could elevate DOOH into a more engaging and memorable brand experience.",

    contribution: [
      "Art Direction",
      "Visual Direction",
    ],

    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],

    recognition: [
      {
        title: "Public appreciation by Umair Kazi, Partner at Ishtehari Communication",
        url: "https://www.linkedin.com/posts/umairkazi_dove-marketinginnovations-agencylife-activity-7125407954031255552-5MKO",
      },
    ],

    featured: true,
  },

  "campaign-08": {
    id: "campaign-08",

    title: "Future Champs",

    client: "Abbott Nutrition Pakistan",

    brand: "PediaSure",

    year: "2022",

    role: "Art Director",

    category: "Campaigns",

    keyVisual: "/images/work/campaign/08-KV.webp",

    overview:
      "A consumer engagement campaign developed for PediaSure in collaboration with Real Madrid, designed to inspire parents to support their children's ambitions through proper nutrition. The campaign connected the excitement of football with the importance of healthy growth, positioning nutrition as the foundation for every future champion.",

    challenge:
      "Create a campaign that could leverage the global appeal of Real Madrid while communicating a meaningful health message. The challenge was to shift the conversation from football dreams alone to the role nutrition plays in helping children achieve their full potential.",

    solution:
      "Led the Art Direction, Key Visual Design and Campaign Adaptation for the campaign. Built a visual system around the message 'The Goal is Nutrition,' combining football-inspired storytelling with PediaSure's trusted nutritional expertise to create a consistent experience across retail, digital and campaign touchpoints.",

    outcome:
      "Delivered a visually engaging campaign that strengthened the connection between aspiration and nutrition, encouraging parents to see proper nutrition as an essential part of helping their children become future champions.",

    contribution: [
      "Art Direction",
      "Key Visual Design",
      "Campaign Adaptation",
    ],

    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],

    featured: true,
  },
  "campaign-09": {
    id: "campaign-09",

    title: "Age is Just a Number",

    client: "Abbott Nutrition Pakistan",

    brand: "Ensure",

    year: "2024",

    role: "Art Director",

    category: "Campaigns",

    keyVisual: "/images/work/campaign/09-KV.webp",

    overview:
      "An integrated annual campaign developed for Ensure Pakistan to encourage active and independent living among older adults. Built around the belief that age should never define a person's lifestyle, the campaign inspired audiences to embrace every stage of life with confidence through balanced nutrition and movement.",

    challenge:
      "Challenge the perception that growing older means slowing down. The campaign needed to reposition healthy aging as an active lifestyle while communicating Ensure's nutritional benefits through relatable, optimistic storytelling across multiple consumer touchpoints.",

    solution:
      "Led the Art Direction, Key Visual Design and Campaign Adaptation across TVC, POSM and retail communication. The visual system reinforced the idea that 'Age is Just a Number', combining lifestyle-focused storytelling with Ensure's science-backed nutritional proposition to create a consistent and uplifting brand experience.",

    outcome:
      "Delivered a cohesive integrated campaign that celebrated healthy aging while strengthening Ensure's positioning as a trusted nutrition partner for active adults. The campaign maintained a consistent visual identity across television, retail and point-of-sale executions.",

    contribution: [
      "Art Direction",
      "Key Visual Design",
      "Campaign Adaptation",
    ],

    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],

    links: [
      {
        label: "Watch TV Commercial",
        url: "https://youtu.be/XrTNPDXTZ_M",
      },
    ],

    featured: true,
  },
};
