import { LogoSection } from "@/components/sections/Logo";
import { AboutMeSection } from "@/components/sections/AboutMe";
import { SkillsSection } from "@/components/sections/Skills";
import { ProjectSection } from "@/components/sections/Projects";
import { ContactMeSection } from "@/components/sections/Contact";
import { FooterSection } from "@/components/sections/Footer";

import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      direction='column'
    >

      <LogoSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectSection />
      <ContactMeSection />
      <FooterSection />

    </Flex>
  )
}