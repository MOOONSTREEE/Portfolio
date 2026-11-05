import { useMemo, useState } from 'react';
import { getSaeById, getSkill, visibleProjects } from '@/data';
import type { SkillId } from '@/data/types';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Header, type NavItem } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Saes } from '@/components/Saes';
import { Projects } from '@/components/Projects';
import { Internships } from '@/components/Internships';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { SaeDetail } from '@/components/SaeDetail';
import { SkillDetail } from '@/components/SkillDetail';

export default function App() {
  // États des modales (SAÉ et Compétence), partagés entre les sections.
  const [openSaeId, setOpenSaeId] = useState<string | null>(null);
  const [openSkillId, setOpenSkillId] = useState<SkillId | null>(null);

  const openSae = openSaeId ? getSaeById(openSaeId) ?? null : null;
  const openSkill = openSkillId ? getSkill(openSkillId) ?? null : null;

  // Depuis la modale Compétence, ouvrir une SAÉ : on bascule d'une modale à l'autre.
  const openSaeFromSkill = (id: string) => {
    setOpenSkillId(null);
    setOpenSaeId(id);
  };

  // Navigation dérivée des sections réellement affichées.
  const navItems = useMemo<NavItem[]>(() => {
    const items: NavItem[] = [
      { id: 'a-propos', label: 'À propos' },
      { id: 'formation', label: 'Formation' },
      { id: 'competences', label: 'Compétences' },
      { id: 'saes', label: 'SAÉ' },
    ];
    if (visibleProjects().length > 0) items.push({ id: 'projets', label: 'Projets' });
    items.push({ id: 'stages', label: 'Alternance' });
    items.push({ id: 'contact', label: 'Contact' });
    return items;
  }, []);

  const sectionIds = useMemo(() => navItems.map((i) => i.id), [navItems]);
  const active = useActiveSection(sectionIds);

  return (
    <>
      <Header initials="NC" items={navItems} active={active} />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills onOpenSkill={(id) => setOpenSkillId(id as SkillId)} />
        <Saes onOpen={setOpenSaeId} />
        <Projects />
        <Internships />
        <Contact />
      </main>

      <Footer />

      <SaeDetail sae={openSae} onClose={() => setOpenSaeId(null)} />
      <SkillDetail
        skill={openSkill}
        onClose={() => setOpenSkillId(null)}
        onOpenSae={openSaeFromSkill}
      />
    </>
  );
}
