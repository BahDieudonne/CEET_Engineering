// All editable business content lives here so the rest of the app never
// needs to change when copy, contact details, or listings are updated.

import rooftopArrayHillside from '../assets/gallery/rooftop-array-hillside.jpg'
import rooftopArrayWide from '../assets/gallery/rooftop-array-wide.jpg'
import inverterBatteryCorner from '../assets/gallery/inverter-battery-corner.jpg'
import inverterBatteryIndoor1 from '../assets/gallery/inverter-battery-indoor-1.jpg'
import inverterBatteryWallMount from '../assets/gallery/inverter-battery-wall-mount.jpg'
import inverterBatteryIndoor2 from '../assets/gallery/inverter-battery-indoor-2.jpg'
import srneBatteryBank from '../assets/gallery/srne-battery-bank.jpg'
import bonjourInverterBatteryBank from '../assets/gallery/bonjour-inverter-battery-bank.jpg'
import projectWalkthroughVideo from '../assets/video/project-walkthrough.mp4'

export const company = {
  name: 'Competence Electrical Engineering Tech',
  shortName: 'CEET',
  phone: '+237 672 816 448',
  phoneHref: 'tel:+237672816448',
  additionalPhones: [
    { number: '+237 673 768 408', href: 'tel:+237673768408' },
    { number: '+237 673 772 786', href: 'tel:+237673772786' },
  ],
  email: 'electriccompetence95@gmail.com',
  emailHref: 'mailto:electriccompetence95@gmail.com',
  whatsappHref: 'https://wa.me/237672816448',
  facebookHref: 'https://www.facebook.com/profile.php?id=61560175286321',
  location: 'Nkwen, Bamenda, North West Region, Cameroon',
  mapEmbedSrc:
    'https://www.google.com/maps?q=Nkwen,Bamenda,Cameroon&output=embed',
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Internship', href: '#internship' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Electrical & Solar Engineering, Bamenda, Cameroon',
  headline: 'All Electrical and Solar Deals',
  subheadline:
    'Solar is here to stay, no blackout. Invest in advanced solar technology, raise your property\u2019s value, and switch to sustainable, reliable power.',
  primaryCta: 'Get a Free Consultation',
  secondaryCta: 'Call Now',
}

export const services = [
  {
    id: 'electrical-installations',
    title: 'Electrical Installations',
    description: 'Safe, reliable and efficient electrical solutions for homes and businesses.',
  },
  {
    id: 'power-audit',
    title: 'Power Audit',
    description: 'Evaluate energy performance and optimize efficiency.',
  },
  {
    id: 'solar-analysis',
    title: 'Solar Analysis',
    description: 'Feasibility studies and system performance assessments.',
  },
  {
    id: 'pv-installations',
    title: 'PV Installations',
    description: 'Design and installation of high-quality solar PV systems.',
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description: 'Preventive and corrective maintenance for electrical systems.',
  },
  {
    id: 'system-activation',
    title: 'System Activation',
    description: 'Commissioning and bring-up of newly installed electrical and solar systems.',
  },
  {
    id: 'roof-assessment',
    title: 'Roof Assessment',
    description: 'On-site evaluation of roof structure and orientation for solar readiness.',
  },
  {
    id: 'load-assessment',
    title: 'Load Assessment',
    description: 'Sizing your system correctly by measuring real household or business load.',
  },
  {
    id: 'panel-mounting',
    title: 'Panel Mounting',
    description: 'Secure, weatherproof mounting of solar panels on any roof type.',
  },
  {
    id: 'solar-streetlights',
    title: 'Solar Streetlights',
    description: 'Off-grid solar lighting for streets, compounds and estates.',
  },
  {
    id: 'consultation',
    title: 'Consultation',
    description: 'Expert guidance to help you choose the right electrical or solar solution.',
  },
]

export const whyChooseUs = [
  {
    title: 'Reliable & Durable',
    description: 'High-quality solar and electrical solutions built to last.',
  },
  {
    title: 'Eco-Friendly',
    description: 'Clean energy that protects the environment.',
  },
  {
    title: 'Cost Saving',
    description: 'Save on energy bills and enjoy continuous power.',
  },
]

// Gallery items: real project photos, stored in src/assets/gallery.
export const galleryItems = [
  {
    id: 'g1',
    type: 'image',
    src: rooftopArrayWide,
    caption: 'Rooftop PV array overlooking the North West hills',
  },
  {
    id: 'g2',
    type: 'image',
    src: rooftopArrayHillside,
    caption: 'Completed panel array on a hillside installation',
  },
  {
    id: 'g3',
    type: 'image',
    src: srneBatteryBank,
    caption: 'Dual inverter and lithium battery energy storage setup',
  },
  {
    id: 'g4',
    type: 'image',
    src: inverterBatteryWallMount,
    caption: 'Inverter and battery bank mounted and wired on-site',
  },
  {
    id: 'g5',
    type: 'image',
    src: inverterBatteryIndoor1,
    caption: 'Indoor inverter and battery installation',
  },
  {
    id: 'g6',
    type: 'image',
    src: inverterBatteryIndoor2,
    caption: 'Inverter and battery system, fully commissioned',
  },
  {
    id: 'g7',
    type: 'image',
    src: bonjourInverterBatteryBank,
    caption: 'Inverter and deep-cycle battery bank setup',
  },
  {
    id: 'g8',
    type: 'image',
    src: inverterBatteryCorner,
    caption: 'Compact inverter and battery corner installation',
  },
]

export const projectVideo = {
  src: projectWalkthroughVideo,
  poster: rooftopArrayWide,
  caption: 'Watch a recent installation from roof assessment to activation.',
}

export const about = {
  eyebrow: 'Who we are',
  heading: 'Powering homes and businesses across the North West',
  body: [
    'Competence Electrical Engineering Tech (CEET) is an electrical and renewable energy company based in Nkwen, Bamenda. We design, install and maintain electrical and solar power systems for homes, businesses and estates.',
    'Our crews work to strict safety standards on every roof and every panel board. Full harnesses, hard hats and gloves are not optional, they\u2019re how we work. From a first roof assessment to system activation, we stay on the job until the power is reliable.',
  ],
}

export const stats = [
  { value: '2022', label: 'Founded' },
  { value: '100%', label: 'Safety-first crews' },
  { value: 'Bamenda', label: 'Home base, North West CM' },
  { value: '24/7', label: 'Consultation requests' },
]

export const internship = {
  eyebrow: 'Call for Internship Application',
  heading: 'Join a team of passionate professionals',
  body: 'Gain real-world experience in the electrical and renewable energy sector.',
  location: 'Nkwen, Bamenda',
  whoCanApply: 'Students and recent graduates in Electrical Engineering and related fields.',
  gains: [
    'Practical hands-on experience',
    'Mentorship from professionals',
    'Exposure to real projects',
    'Skill development',
  ],
  cta: 'Apply Now',
}

export const footerLinks = nav
