import React, { useState } from "react";
import { Github, Search } from "lucide-react";
import {
  Box,
  Container,
  Grid,
  Heading,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  Flex,
  Link,
  AspectRatio,
} from "@chakra-ui/react";
import { projects } from "../data/projects";
import { PageTransition } from "../components/PageTransition";

function Projects() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageTransition>
      <Box minH="100vh" bg="black" color="white" pt="32" px={4}>
        <Container maxW="7xl">
          <Heading as="h1" fontSize="7xl" mb={6}>
            Projects
          </Heading>
          <Text fontSize="xl" color="gray.400" mb={12}>
            I love building projects and practicing my engineering skills.
            Here's an archive of things that I've worked on.
          </Text>

          {/* Search Bar */}
          <Box position="relative" mb={12}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search color="var(--chakra-colors-gray-500)" size={20} />
              </InputLeftElement>
              <Input
                placeholder="Search projects"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.200"
                _hover={{ borderColor: "whiteAlpha.300" }}
                _focus={{ borderColor: "green.500", boxShadow: "none" }}
              />
            </InputGroup>
          </Box>

          {/* Projects Grid */}
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={8}
            mb={20}
          >
            {filteredProjects.map((project) => (
              <Box
                key={project.id}
                as="article"
                bg="whiteAlpha.50"
                borderRadius="xl"
                overflow="hidden"
                transition="all 0.3s"
                _hover={{ bg: "whiteAlpha.100", transform: "translateY(-4px)" }}
                cursor="pointer"
                onClick={() => window.open(project.github, "_blank")}
              >
                <AspectRatio ratio={16 / 9}>
                  <Box
                    as="img"
                    src={project.image}
                    alt={project.title}
                    objectFit="cover"
                    transition="transform 0.3s"
                  />
                </AspectRatio>
                <Box p={6}>
                  <Flex justify="space-between" align="center" mb={4}>
                    <Heading as="h3" fontSize="xl">
                      {project.title}
                    </Heading>
                    <Link
                      href={project.github}
                      isExternal
                      p={2}
                      borderRadius="lg"
                      bg="whiteAlpha.100"
                      _hover={{ bg: "whiteAlpha.200" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                    </Link>
                  </Flex>
                  <Text color="gray.400">{project.description}</Text>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Footer */}
          <Box
            as="footer"
            textAlign="center"
            color="gray.400"
            py={8}
            borderTop="1px solid"
            borderColor="whiteAlpha.200"
          >
            <Text mb={2}>Designed and Developed by Adithyah Nair.</Text>
            <Text>
              Built with{" "}
              <Text as="span" color="green.400">
                Next.js
              </Text>{" "}
              &{" "}
              <Text as="span" color="green.400">
                Chakra UI
              </Text>
              . Hosted on{" "}
              <Text as="span" color="green.400">
                Vercel
              </Text>
              .
            </Text>
          </Box>
        </Container>
      </Box>
    </PageTransition>
  );
}

export default Projects;
