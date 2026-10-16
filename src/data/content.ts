import {
  TeamMember,
  FeatureItem,
  ScreenshotItem,
  InstallStep,
  SystemRequirement,
  ResourceItem,
} from '../types';

export const APP_CONFIG = {
  title: 'SkyLock',
  subtitle: 'FSOC Electro-Optical Tracking System',
  headline: 'Precision Tracking. Orbital Intelligence.',
  heroLabel: 'FSOC ELECTRO-OPTICAL TRACKING SYSTEM',
  description:
    'SkyLock is an FSOC electro-optical satellite tracking system that combines 3D orbital visualization, bidirectional satellite tracking, line-of-sight analysis, and a simulated optical sensor feed in a desktop application.',
  version: 'v0.1.0',
  portablePackageName: 'SkyLock-Portable.zip',
  portablePackagePath:
    'https://drive.google.com/uc?export=download&id=1psBtRiVr1JL2hpFQ4Uz1bHPGUH_8-RG3',
  portablePackageSize: '~300 MB',
  presentationName: 'VYSAM-26169-PRESENTATION.pdf',
  presentationPath:
    'https://drive.google.com/uc?export=download&id=1ZxAgxIDGwzq0W83rPG5y4YOUaYJq_sQi',
  presentationSize: '9.5 MB',
  presentationFormat: 'PDF Presentation (SIH 2026)',
  institution: 'MLR Institute of Technology, Hyderabad',
  teamName: 'VYSAM',
  copyrightYear: 2026,
};

export const HERO_TAGS = [
  '3D Orbital Simulation',
  'Bidirectional Tracking',
  'Line-of-Sight Analysis',
  'Optical Sensor Simulation',
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'orbital-visualization',
    number: '01',
    title: 'Orbital Visualization',
    description:
      'Explore Earth, satellite models, and orbital motion in an interactive 3D environment.',
    iconName: 'Orbit',
  },
  {
    id: 'bidirectional-tracking',
    number: '02',
    title: 'Bidirectional Tracking',
    description:
      'Switch between S-1 observing S-2 and S-2 observing S-1.',
    iconName: 'Repeat',
  },
  {
    id: 'line-of-sight',
    number: '03',
    title: 'Line-of-Sight Analysis',
    description:
      'Observe visibility conditions and how Earth obstruction affects the optical path between satellites.',
    iconName: 'Eye',
  },
  {
    id: 'sensor-feed-telemetry',
    number: '04',
    title: 'Sensor Feed and Telemetry',
    description:
      'Inspect the sensor feed, tracking state, gimbal information, and available runtime measurements.',
    iconName: 'Activity',
  },
];

export const SCREENSHOTS_DATA: ScreenshotItem[] = [
  {
    id: '3d-space-simulation',
    title: '3D Space Simulation',
    caption: 'Interactive 3D orbital space view showing Earth, satellite trajectories, and direct optical line of sight.',
    alt: 'SkyLock 3D Space Simulation interface showing Earth and satellites in orbit',
    src: '/assets/screenshots/space-simulation.svg',
    aspectRatio: '16/9',
    category: 'Simulation',
  },
  {
    id: 'camera-sensor-feed',
    title: 'Camera Sensor Feed',
    caption: 'Simulated optical sensor aperture with autonomous target detection, Kalman filtering, and optical crosshairs lock.',
    alt: 'SkyLock Camera Sensor Feed view displaying optical tracking crosshair and beacon acquisition',
    src: '/assets/screenshots/sensor-feed.svg',
    aspectRatio: '16/9',
    category: 'Optical Sensor',
  },
  {
    id: 'telemetry-controls',
    title: 'Telemetry and Controls',
    caption: 'Comprehensive telemetry readout displaying gimbal pitch/yaw, lock state, tracking error, and runtime controls.',
    alt: 'SkyLock Telemetry and Controls dock displaying tracking metrics, gimbal angles, and observer controls',
    src: '/assets/screenshots/telemetry-controls.svg',
    aspectRatio: '16/9',
    category: 'Telemetry',
  },
];

export const INSTALL_STEPS: InstallStep[] = [
  {
    stepNumber: '01',
    title: 'Download the package',
    instruction:
      'Download the portable SkyLock ZIP package to your Windows computer.',
    buttonText: 'Download SkyLock ZIP',
    buttonHref: APP_CONFIG.portablePackagePath,
    imageSrc: '/assets/screenshots/step-download.svg',
    imageAlt: 'Screenshot of SkyLock ZIP download package in Windows Downloads folder',
  },
  {
    stepNumber: '02',
    title: 'Extract the ZIP',
    instruction:
      'Open your Downloads folder, right-click the downloaded ZIP, select Extract All..., and extract the complete package to a folder of your choice.',
    note: 'Important: Extract the complete archive. Do not move only SkyLock.exe out of its folder, because the application depends on bundled files and resources.',
    imageSrc: '/assets/screenshots/step-extract.svg',
    imageAlt: 'Screenshot of Windows Extract All dialog extracting the complete SkyLock portable package',
  },
  {
    stepNumber: '03',
    title: 'Launch the application',
    instruction:
      'Open the extracted folder and double-click SkyLock.exe. The 3D Space Simulation starts automatically. Switch between the 3D Space Simulation and Camera Sensor Feed using the central tabs or View menu.',
    note: 'No separate Python installation or developer dependencies are required.',
    imageSrc: '/assets/screenshots/step-launch.svg',
    imageAlt: 'Screenshot of SkyLock desktop application running on Windows',
  },
];

export const SYSTEM_REQUIREMENTS: SystemRequirement[] = [
  {
    label: 'Operating system',
    value: 'Windows 10 version 1809 or newer, or Windows 11, 64-bit.',
  },
  {
    label: 'Graphics',
    value: 'OpenGL/WebGL-compatible GPU or software rasterizer.',
  },
  {
    label: 'Minimum display resolution',
    value: '1280×720',
  },
  {
    label: 'Recommended display resolution',
    value: '1920×1080',
  },
  {
    label: 'Python',
    value: 'Not required.',
  },
  {
    label: 'Developer dependencies',
    value: 'Not required.',
  },
];

export const TROUBLESHOOTING_TIPS = [
  {
    title: 'Archive extraction issues',
    detail: 'Ensure the ZIP file has completed downloading (300 MB) before extracting. Always right-click and select "Extract All..." rather than opening files directly inside the compressed archive.',
  },
  {
    title: 'Windows SmartScreen prompt',
    detail: 'Because this portable executable is a standalone release build, Windows Defender SmartScreen may display a notification on first launch. Click "More info" and select "Run anyway" to proceed.',
  },
  {
    title: 'Graphics and OpenGL compatibility',
    detail: 'SkyLock uses hardware-accelerated OpenGL / WebGL rendering. Ensure your display adapter drivers are up to date. If running in a virtual machine, verify 3D acceleration is enabled.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'abhishek-g',
    name: 'Abhishek G',
    role: 'Team Leader',
    isLeader: true,
    email: '24r21a6779@mlrit.ac.in',
    mobile: '9652097857',
    institution: 'MLR Institute of Technology, Hyderabad',
    initials: 'AG',
  },
  {
    id: 'abhinav-sai-g',
    name: 'Abhinav Sai G',
    role: 'Team Member',
    isLeader: false,
    email: '24r21a6778@mlrit.ac.in',
    mobile: '9133694540',
    institution: 'MLR Institute of Technology, Hyderabad',
    initials: 'AS',
  },
  {
    id: 'vedik-g',
    name: 'Vedik G',
    role: 'Team Member',
    email: '24r21a6771@mlrit.ac.in',
    mobile: '9515766733',
    institution: 'MLR Institute of Technology, Hyderabad',
    initials: 'VG',
  },
  {
    id: 'mahesh-g',
    name: 'Mahesh G',
    role: 'Team Member',
    email: '24r21a6773@mlrit.ac.in',
    mobile: '8008712499',
    institution: 'MLR Institute of Technology, Hyderabad',
    initials: 'MG',
  },
  {
    id: 'sathvika-b',
    name: 'Sathvika B',
    role: 'Team Member',
    email: '25r21a0511@mlrit.ac.in',
    mobile: '9398583305',
    institution: 'MLR Institute of Technology, Hyderabad',
    initials: 'SB',
  },
  {
    id: 'sandhya-r',
    name: 'Sandhya R',
    role: 'Team Member',
    email: '25r21a0558@mlrit.ac.in',
    mobile: '6303020037',
    institution: 'MLR Institute of Technology, Hyderabad',
    initials: 'SR',
  },
];

export const PRESENTATION_RESOURCE: ResourceItem = {
  id: 'skylock-presentation',
  title: 'SkyLock Project Presentation',
  fileType: 'PDF Document (SIH 2026)',
  fileSize: '9.5 MB',
  description:
    'Comprehensive project presentation covering system architecture, coarse alignment algorithms, optical beacon tracking, simulation testbed methodology, and feasibility analysis.',
  downloadUrl: APP_CONFIG.presentationPath,
  fileName: APP_CONFIG.presentationName,
};
