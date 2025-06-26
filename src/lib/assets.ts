import { appConfig } from "@/config/app.config";

// Asset loading utilities with fallbacks

export const checkAssetExists = async (path: string): Promise<boolean> => {
  try {
    const response = await fetch(path, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
};

export const getLogoSrc = async (): Promise<string | null> => {
  const logoPath = appConfig.branding.logo.path;
  if (!logoPath) return null;

  const exists = await checkAssetExists(logoPath);
  return exists ? logoPath : null;
};

export const getVideoSrc = async (): Promise<string | null> => {
  const videoPath = appConfig.branding.video.previewPath;
  if (!videoPath) return null;

  const exists = await checkAssetExists(videoPath);
  return exists ? videoPath : null;
};

export const getDownloadLink = (
  platform: keyof typeof appConfig.downloads,
): string | null => {
  const linkConfig = appConfig.downloads[platform];
  if (!linkConfig || typeof linkConfig === "string") return null;

  return linkConfig.link || null;
};

export const hasDownloadLink = (
  platform: keyof typeof appConfig.downloads,
): boolean => {
  const link = getDownloadLink(platform);
  return link !== null && link !== "";
};

export const getAppVersion = (
  platform: keyof typeof appConfig.downloads,
): string => {
  const linkConfig = appConfig.downloads[platform];
  if (!linkConfig || typeof linkConfig === "string") return "1.0.0";

  return linkConfig.version || "1.0.0";
};
