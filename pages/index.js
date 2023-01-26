import { LogoSection } from "@/components/sections/Logo";
import { AboutMeSection } from "@/components/sections/AboutMe";
import { SkillsSection } from "@/components/sections/Skills";

import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      direction='column'
    >

      <LogoSection />
      <AboutMeSection />
      <SkillsSection />

    </Flex>
  )
}