import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from 'react-icons/si';

const items: { name: string; Icon: React.ComponentType<{ className?: string }> }[] = [
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'React', Icon: SiReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Node', Icon: SiNodedotjs },
  { name: 'Tailwind', Icon: SiTailwindcss },
];

export default function TechLogos() {
  return (
    <div className="mt-4 flex items-center justify-center gap-6 flex-wrap">
      {items.map(({ name, Icon }, index) => (
        <div
          key={name}
          className="flex items-center justify-center w-14 h-14"
          style={{
            animation: `
              float-${index} ${3 + index * 0.3}s ease-in-out infinite,
              waveColorStrong 4s ease-in-out infinite
            `,
            animationDelay: `${index * 0.5}s`
          }}
          title={name}
          aria-label={name}
        >
          <Icon className="w-8 h-8 text-current transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}
