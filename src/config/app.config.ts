// App Configuration
// Update these values to customize your SideQuestAI instance

export const appConfig = {
  // Branding
  branding: {
    name: "SideQuestAI",
    tagline: "Your AI Mentor for Side Hustles",
    // Logo settings - if logoPath is empty, falls back to text logo
    logo: {
      path: "/assets/logo.png", // Put your logo in public/assets/logo.png
      alt: "SideQuestAI Logo",
      width: 32,
      height: 32,
    },
    // Video settings - if videoPath is empty, falls back to static content
    video: {
      previewPath: "/assets/preview.mp4", // Put your video in public/assets/preview.mp4
      alt: "SideQuestAI Preview",
      autoPlay: true,
      loop: true,
      muted: true,
    },
  },

  // Download links - leave empty string "" to show "Coming Soon"
  downloads: {
    // Mobile
    ios: {
      link: "", // "https://apps.apple.com/app/sidequestai" or ""
      version: "1.0.0",
    },
    android: {
      link: "", // "https://play.google.com/store/apps/details?id=com.sidequestai" or ""
      version: "1.0.0",
    },

    // Desktop
    windows: {
      link: "", // "https://github.com/username/sidequestai/releases/download/v1.0.0/SideQuestAI-Windows.exe" or ""
      version: "1.0.0",
    },
    mac: {
      link: "", // "https://github.com/username/sidequestai/releases/download/v1.0.0/SideQuestAI-Mac.dmg" or ""
      version: "1.0.0",
    },
    linux: {
      link: "", // "https://github.com/username/sidequestai/releases/download/v1.0.0/SideQuestAI-Linux.AppImage" or ""
      version: "1.0.0",
    },

    // Web
    web: {
      link: "", // "https://app.sidequestai.com" or ""
    },
  },

  // Social & External Links
  links: {
    github: "", // "https://github.com/username/sidequestai" or ""
    twitter: "", // "https://twitter.com/sidequestai" or ""
    discord: "", // "https://discord.gg/sidequestai" or ""
    support: "", // "mailto:support@sidequestai.com" or ""
    privacy: "",
    terms: "",
  },

  // Features
  features: {
    enableStats: true,
    enableParticles: true,
    enableAnimations: true,
  },

  // Contact
  contact: {
    email: "sidequestaiofficial@gmail.com",
    phone: "",
  },
};

export default appConfig;
