'use client';

import { useLocale } from '@/components/language-provider';
import { Briefcase, Calendar, GitPullRequest, Github, ExternalLink, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Experience = {
    roleKey: string;
    company?: string;
    badgeKey?: string;
    periodKey: string;
    descriptionKey: string;
    fullWidth?: boolean;
    stack?: string[];
    tasksKeys: string[];
    links?: Array<{ labelKey: string; href: string; icon?: 'github' | 'pr' }>;
};

const experiences: Experience[] = [
    {
        roleKey: 'experience.0.role',
        badgeKey: 'experience.0.badge',
        periodKey: 'experience.0.period',
        descriptionKey: 'experience.0.description',
        fullWidth: true,
        stack: ['Go', 'MCP (Model Context Protocol)', 'SQLite / FTS5', 'AI Agent Tooling', 'Integration Testing'],
        tasksKeys: [
            'experience.0.tasks.0',
            'experience.0.tasks.1',
            'experience.0.tasks.2',
            'experience.0.tasks.3',
        ],
        links: [
            {
                labelKey: 'experience.0.links.repo',
                href: 'https://github.com/Gentleman-Programming/engram',
                icon: 'github',
            },
            {
                labelKey: 'experience.0.links.pr878',
                href: 'https://github.com/Gentleman-Programming/engram/pull/878',
                icon: 'pr',
            },
            {
                labelKey: 'experience.0.links.pr874',
                href: 'https://github.com/Gentleman-Programming/engram/pull/874',
                icon: 'pr',
            },
        ],
    },
    {
        roleKey: 'experience.1.role',
        periodKey: 'experience.1.period',
        descriptionKey: 'experience.1.description',
        stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
        tasksKeys: [
            'experience.1.tasks.0',
            'experience.1.tasks.1',
            'experience.1.tasks.2',
            'experience.1.tasks.3',
            'experience.1.tasks.4',
            'experience.1.tasks.5',
            'experience.1.tasks.6',
        ],
    },
    {
        roleKey: 'experience.2.role',
        periodKey: 'experience.2.period',
        descriptionKey: 'experience.2.description',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        tasksKeys: [
            'experience.2.tasks.0',
            'experience.2.tasks.1',
            'experience.2.tasks.2',
            'experience.2.tasks.3',
            'experience.2.tasks.4',
            'experience.2.tasks.5',
        ],
    },
    {
        roleKey: 'experience.3.role',
        periodKey: 'experience.3.period',
        descriptionKey: 'experience.3.description',
        stack: ['Vue', 'Laravel', 'PostgreSQL', 'Neon'],
        tasksKeys: [
            'experience.3.tasks.0',
            'experience.3.tasks.1',
            'experience.3.tasks.2',
            'experience.3.tasks.3',
            'experience.3.tasks.4',
            'experience.3.tasks.5',
            'experience.3.tasks.6',
        ],
    },
    {
        roleKey: 'experience.4.role',
        periodKey: 'experience.4.period',
        descriptionKey: 'experience.4.description',
        stack: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
        tasksKeys: [
            'experience.4.tasks.0',
            'experience.4.tasks.1',
            'experience.4.tasks.2',
            'experience.4.tasks.3',
            'experience.4.tasks.4',
            'experience.4.tasks.5',
        ],
    },
];

export default function ExperienceSection() {
    const { t } = useLocale();

    return (
        <section id="experience" aria-labelledby="experience-title" className="w-full py-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2
                    id="experience-title"
                    className="text-3xl font-bold font-headline tracking-tight text-center mb-12"
                >
                    {t('experience.heading')}
                </h2>

                <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
                    {experiences.map((exp, index) => (
                        <Card
                            key={index}
                            className={cn(
                                'h-full rounded-2xl shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-gray-850 dark:via-gray-800 dark:to-gray-750',
                                exp.fullWidth && 'md:col-span-2 border-primary/30 ring-1 ring-primary/20'
                            )}
                        >
                            <CardContent className="p-6 flex flex-col h-full gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <div className="flex items-start gap-2 text-primary">
                                            <Briefcase className="w-4 h-4 shrink-0 mt-1" />
                                            <h3 className="text-lg font-semibold leading-snug text-foreground">
                                                {t(exp.roleKey)}
                                            </h3>
                                        </div>

                                        {exp.badgeKey && (
                                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 w-fit">
                                                <Award className="w-3.5 h-3.5 shrink-0" />
                                                <span>{t(exp.badgeKey)}</span>
                                            </span>
                                        )}
                                    </div>

                                    {exp.company && (
                                        <span className="text-sm font-medium text-primary">
                                            {exp.company}
                                        </span>
                                    )}

                                    <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-secondary">
                                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                                        <span>{t(exp.periodKey)}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground dark:text-secondary">
                                    {t(exp.descriptionKey)}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-2">
                                    {exp.stack?.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <ul
                                    className={cn(
                                        'space-y-1.5 list-disc list-outside marker:text-primary pl-5',
                                        exp.fullWidth && 'md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-2 md:space-y-0'
                                    )}
                                >
                                    {exp.tasksKeys.map((key) => (
                                        <li key={key} className="text-sm text-foreground/85 pl-1">
                                            {t(key)}
                                        </li>
                                    ))}
                                </ul>

                                {exp.links && exp.links.length > 0 && (
                                    <div className="pt-3 mt-auto border-t border-border/50 flex flex-wrap items-center gap-2.5">
                                        {exp.links.map((link) => (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-background/70 hover:bg-primary/15 text-foreground hover:text-primary border border-border/60 hover:border-primary/40 transition-colors"
                                            >
                                                {link.icon === 'github' ? (
                                                    <Github className="w-3.5 h-3.5 shrink-0" />
                                                ) : (
                                                    <GitPullRequest className="w-3.5 h-3.5 shrink-0" />
                                                )}
                                                <span>{t(link.labelKey)}</span>
                                                <ExternalLink className="w-3 h-3 opacity-70" />
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
