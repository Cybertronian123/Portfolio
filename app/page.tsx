import { BugHuntSection } from './components/BugHuntSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { GitHubSection } from './components/GitHubSection';
import { HeroSection } from './components/HeroSection';
import { LlmEvaluationGallerySection } from './components/LlmEvaluationGallerySection';
import { MethodologySummarySection } from './components/MethodologySummarySection';
import { ModelComparisonSection } from './components/ModelComparisonSection';
import { Navbar } from './components/Navbar';
import { PromptEngineeringLabSection } from './components/PromptEngineeringLabSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <LlmEvaluationGallerySection />
        <PromptEngineeringLabSection />
        <ModelComparisonSection />
        <BugHuntSection />
        <CaseStudiesSection />
        <MethodologySummarySection />
        <GitHubSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
