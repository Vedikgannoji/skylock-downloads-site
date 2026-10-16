export interface TeamMember {
  id: string;
  name: string;
  role: string;
  isLeader?: boolean;
  email: string;
  mobile: string;
  institution: string;
  initials: string;
  avatarUrl?: string;
}

export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'Orbit' | 'Repeat' | 'Eye' | 'Activity';
}

export interface ScreenshotItem {
  id: string;
  title: string;
  caption: string;
  alt: string;
  src: string;
  aspectRatio: string;
  category: string;
}

export interface InstallStep {
  stepNumber: string;
  title: string;
  instruction: string;
  note?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt: string;
}

export interface SystemRequirement {
  label: string;
  value: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  fileType: string;
  fileSize: string;
  description: string;
  downloadUrl: string;
  fileName: string;
}
