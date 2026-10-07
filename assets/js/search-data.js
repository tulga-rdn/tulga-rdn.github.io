// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "Blog posts by Tulga-Erdene Sodjargal, mostly write-ups of class projects in bioinformatics and statistics.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Papers, preprints, and presentations in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "CV of Tulga-Erdene Sodjargal (PDF).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-analyzing-workplace-discrimination",
        
          title: "Analyzing workplace discrimination",
        
        description: "analyzing workplace discrimination using data",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/mas456/";
          
        },
      },{id: "post-sars-cov-2-genome-analysis",
        
          title: "SARS-CoV-2 genome analysis",
        
        description: "seeing through data when delta variant took over alpha",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/bis232/";
          
        },
      },{id: "news-i-m-now-a-visiting-undergraduate-researcher-at-the-cosmo-lab-at-epfl-in-switzerland-working-with-prof-michele-ceriotti-on-adding-long-range-interactions-to-machine-learned-interatomic-potentials",
          title: 'I’m now a visiting undergraduate researcher at the COSMO lab at EPFL in...',
          description: "",
          section: "News",},{id: "news-i-presented-a-poster-on-long-range-machine-learned-interatomic-potentials-at-the-dpg-spring-meeting-2025-in-regensburg-germany",
          title: 'I presented a poster on long-range machine-learned interatomic potentials at the DPG Spring...',
          description: "Poster walk-through from the DPG Spring Meeting 2025: adding long-range electrostatics to machine-learned interatomic potentials with torch-pme and metatrain.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-i-m-spending-the-summer-in-boston-as-a-research-intern-at-the-wellman-center-for-photomedicine-mgh-harvard-medical-school-with-prof-mei-x-wu-i-ll-be-running-molecular-docking-and-simulations-to-help-make-sense-of-and-guide-the-experiments",
          title: 'I’m spending the summer in Boston as a research intern at the Wellman...',
          description: "",
          section: "News",},{id: "news-our-preprint-on-scicode-widgets-a-python-package-for-building-interactive-teaching-notebooks-is-out-on-arxiv",
          title: 'Our preprint on scicode-widgets, a Python package for building interactive teaching notebooks, is...',
          description: "scicode-widgets is a Python package that turns Jupyter notebooks into interactive computational-science exercises with instant checks and easy grading.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-our-preprint-introducing-lorem-a-machine-learned-interatomic-potential-that-passes-equivariant-messages-over-long-distances-is-out-on-arxiv",
          title: 'Our preprint introducing LOREM, a machine-learned interatomic potential that passes equivariant messages over...',
          description: "",
          section: "News",},{id: "news-our-paper-on-lorem-a-long-range-equivariant-machine-learned-interatomic-potential-is-out-in-tmlr",
          title: 'Our paper on LOREM, a long-range equivariant machine-learned interatomic potential, is out in...',
          description: "LOREM, a long-range equivariant machine-learned interatomic potential, is out in TMLR. Why scalar charges fall short and how equivariant messages help.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-i-joined-the-data-science-amp-amp-artificial-intelligence-lab-dsail-at-kaist-as-a-research-intern-with-prof-chanyoung-park-i-ll-be-working-on-using-reinforcement-learning-and-llms-for-materials-design",
          title: 'I joined the Data Science &amp;amp;amp; Artificial Intelligence Lab (DSAIL) at KAIST as...',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/tulga-rdn.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%75%6C%67%61%65%72%64%65%6E%65.%73%6F%64%6A%61%72%67%61%6C@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tulga-rdn", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tulga-erdene", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=G9eVhWQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
