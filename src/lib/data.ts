import { Linkedin, Github, InstagramIcon, Twitter } from 'lucide-react';
import { allImages, ImageAsset } from './image-assets';

export const navLinks = [
    { href: '/#hero', labelKey: 'nav.home' },
    { href: '/#experience', labelKey: 'nav.experience' },
    { href: '/#work', labelKey: 'nav.work' },
    { href: '/#about', labelKey: 'nav.about' },
    { href: '/#contact', labelKey: 'nav.contact' },
];

export interface ImagePlaceholder extends ImageAsset { }

export interface PortfolioProjectDetails {
    nameKey?: string;
    summaryKey?: string;
    stackKey?: string;
    statusKey?: string;
    typeKey?: string;
    contextKey?: string;
    objectiveKey?: string;
    objectiveItemsKey?: string;
    processKey?: string;
    processStepsKey?: string;
    resultKey?: string;
    resultItemsKey?: string;
    roleKey?: string;
    responsibilitiesKey?: string;
    technologiesKey?: string;
    feedbackKey?: string;
}

export interface PortfolioProject {
    id: string;
    titleKey: string;
    descriptionKey: string;
    tags: string[];
    image?: ImagePlaceholder;
    liveUrl?: string;
    githubUrl?: string;
    details?: PortfolioProjectDetails;
}

const getImage = (id: string) => allImages.find(img => img.id === id);

export const portfolioProjects: PortfolioProject[] = [
    {
        id: 'cinloLabs',
        titleKey: 'projects.cinloLabs.title',
        descriptionKey: 'projects.cinloLabs.description',
        tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
        image: getImage('cinloLabs'),
        liveUrl: 'https://labs.cinlodev.com/',
        githubUrl: 'https://github.com/CinloDev/cinlolabs-showcase',
        details: {
            nameKey: 'projects.cinloLabs.details.name',
            summaryKey: 'projects.cinloLabs.details.summary',
            stackKey: 'projects.cinloLabs.details.stack',
            statusKey: 'projects.cinloLabs.details.status',
            typeKey: 'projects.cinloLabs.details.type',
            contextKey: 'projects.cinloLabs.details.context',
            objectiveKey: 'projects.cinloLabs.details.objective',
            objectiveItemsKey: 'projects.cinloLabs.details.objective.items',
            processKey: 'projects.cinloLabs.details.process',
            processStepsKey: 'projects.cinloLabs.details.process.steps',
            resultKey: 'projects.cinloLabs.details.result',
            resultItemsKey: 'projects.cinloLabs.details.result.items',
            roleKey: 'projects.cinloLabs.details.role',
            responsibilitiesKey: 'projects.cinloLabs.details.responsibilities',
            technologiesKey: 'projects.cinloLabs.details.technologies',
            feedbackKey: 'projects.cinloLabs.details.feedback',
        },
    },
    {
        id: 'alDia',
        titleKey: 'projects.alDia.title',
        descriptionKey: 'projects.alDia.description',
        tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
        image: getImage('alDia'),
        liveUrl: 'https://aldia.cinlodev.com',
        githubUrl: 'https://github.com/CinloDev/aldia-showcase',
        details: {
            nameKey: 'projects.alDia.details.name',
            summaryKey: 'projects.alDia.details.summary',
            stackKey: 'projects.alDia.details.stack',
            statusKey: 'projects.alDia.details.status',
            typeKey: 'projects.alDia.details.type',
            contextKey: 'projects.alDia.details.context',
            objectiveKey: 'projects.alDia.details.objective',
            objectiveItemsKey: 'projects.alDia.details.objective.items',
            processKey: 'projects.alDia.details.process',
            processStepsKey: 'projects.alDia.details.process.steps',
            resultKey: 'projects.alDia.details.result',
            resultItemsKey: 'projects.alDia.details.result.items',
            roleKey: 'projects.alDia.details.role',
            responsibilitiesKey: 'projects.alDia.details.responsibilities',
            technologiesKey: 'projects.alDia.details.technologies',
            feedbackKey: 'projects.alDia.details.feedback',
        },
    },
    {
        id: 'mailQuark',
        titleKey: 'projects.mailQuark.title',
        descriptionKey: 'projects.mailQuark.description',
        tags: ['Next.js', 'React', 'TypeScript', 'Docker', 'Tailwind CSS'],
        image: getImage('mailQuark'),
        liveUrl: 'https://mailquark.cinlodev.com/',
        githubUrl: 'https://github.com/CinloDev/mailquark',
        details: {
            nameKey: 'projects.mailQuark.details.name',
            summaryKey: 'projects.mailQuark.details.summary',
            stackKey: 'projects.mailQuark.details.stack',
            statusKey: 'projects.mailQuark.details.status',
            typeKey: 'projects.mailQuark.details.type',
            contextKey: 'projects.mailQuark.details.context',
            objectiveKey: 'projects.mailQuark.details.objective',
            objectiveItemsKey: 'projects.mailQuark.details.objective.items',
            processKey: 'projects.mailQuark.details.process',
            processStepsKey: 'projects.mailQuark.details.process.steps',
            resultKey: 'projects.mailQuark.details.result',
            resultItemsKey: 'projects.mailQuark.details.result.items',
            roleKey: 'projects.mailQuark.details.role',
            responsibilitiesKey: 'projects.mailQuark.details.responsibilities',
            technologiesKey: 'projects.mailQuark.details.technologies',
            feedbackKey: 'projects.mailQuark.details.feedback',
        },
    },
    {
        id: 'nekoTools',
        titleKey: 'projects.nekoTools.title',
        descriptionKey: 'projects.nekoTools.description',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        image: getImage('nekoTools'),
        liveUrl: 'https://nekotools.cinlodev.com/',
        githubUrl: 'https://github.com/CinloDev/nekotools',
        details: {
            nameKey: 'projects.nekoTools.details.name',
            summaryKey: 'projects.nekoTools.details.summary',
            stackKey: 'projects.nekoTools.details.stack',
            statusKey: 'projects.nekoTools.details.status',
            typeKey: 'projects.nekoTools.details.type',
            contextKey: 'projects.nekoTools.details.context',
            objectiveKey: 'projects.nekoTools.details.objective',
            objectiveItemsKey: 'projects.nekoTools.details.objective.items',
            processKey: 'projects.nekoTools.details.process',
            processStepsKey: 'projects.nekoTools.details.process.steps',
            resultKey: 'projects.nekoTools.details.result',
            resultItemsKey: 'projects.nekoTools.details.result.items',
            roleKey: 'projects.nekoTools.details.role',
            responsibilitiesKey: 'projects.nekoTools.details.responsibilities',
            technologiesKey: 'projects.nekoTools.details.technologies',
            feedbackKey: 'projects.nekoTools.details.feedback',
        },
    },
    {
        id: 'commandCenter',
        titleKey: 'projects.commandCenter.title',
        descriptionKey: 'projects.commandCenter.description',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        image: getImage('commandCenter'),
        liveUrl: 'https://vault.cinlodev.com/',
        githubUrl: 'https://github.com/CinloDev/command-center-dev',
        details: {
            nameKey: 'projects.commandCenter.details.name',
            summaryKey: 'projects.commandCenter.details.summary',
            stackKey: 'projects.commandCenter.details.stack',
            statusKey: 'projects.commandCenter.details.status',
            typeKey: 'projects.commandCenter.details.type',
            contextKey: 'projects.commandCenter.details.context',
            objectiveKey: 'projects.commandCenter.details.objective',
            objectiveItemsKey: 'projects.commandCenter.details.objective.items',
            processKey: 'projects.commandCenter.details.process',
            processStepsKey: 'projects.commandCenter.details.process.steps',
            resultKey: 'projects.commandCenter.details.result',
            resultItemsKey: 'projects.commandCenter.details.result.items',
            roleKey: 'projects.commandCenter.details.role',
            responsibilitiesKey: 'projects.commandCenter.details.responsibilities',
            technologiesKey: 'projects.commandCenter.details.technologies',
            feedbackKey: 'projects.commandCenter.details.feedback',
        },
    },
    {
        id: 'figuNet',
        titleKey: 'projects.figuNet.title',
        descriptionKey: 'projects.figuNet.description',
        tags: ['PWA', 'React', 'TypeScript', 'Tailwind CSS'],
        image: getImage('figuNet'),
        liveUrl: 'https://figunet.cinlodev.com/',
        githubUrl: 'https://github.com/CinloDev/figunet',
        details: {
            nameKey: 'projects.figuNet.details.name',
            summaryKey: 'projects.figuNet.details.summary',
            stackKey: 'projects.figuNet.details.stack',
            statusKey: 'projects.figuNet.details.status',
            typeKey: 'projects.figuNet.details.type',
            contextKey: 'projects.figuNet.details.context',
            objectiveKey: 'projects.figuNet.details.objective',
            objectiveItemsKey: 'projects.figuNet.details.objective.items',
            processKey: 'projects.figuNet.details.process',
            processStepsKey: 'projects.figuNet.details.process.steps',
            resultKey: 'projects.figuNet.details.result',
            resultItemsKey: 'projects.figuNet.details.result.items',
            roleKey: 'projects.figuNet.details.role',
            responsibilitiesKey: 'projects.figuNet.details.responsibilities',
            technologiesKey: 'projects.figuNet.details.technologies',
            feedbackKey: 'projects.figuNet.details.feedback',
        },
    },
];

export const aboutMe = {
    descriptionKey: 'about.description',
    image: getImage('aboutMe'),
};

export const socialLinks = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/cinlodev/',
        icon: Linkedin,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/CinloDev',
        icon: Github,
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/cinlodev/',
        icon: InstagramIcon,
    },
    {
        name: 'Twitter',
        url: 'https://x.com/cinlodev',
        icon: Twitter,
    },
];
