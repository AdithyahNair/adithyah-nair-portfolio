import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Search } from 'lucide-react';
import { Box, Container, Grid, Heading, Input, Text, InputGroup, InputLeftElement, Flex, Link } from '@chakra-ui/react';
import { projects } from '../data/projects';
import { PageTransition } from '../components/PageTransition';

function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some(tech => 
      tech.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <PageTransition>
      <Box minH="100vh" bg="black" color="white" pt="32" px={4}>
        <Container maxW="7xl">
          <Heading as="h1" fontSize="7xl" mb={6}>Projects</Heading>
          <Text fontSize="xl" color="gray.400" mb={12}>
            I love building projects and practice my engineering skills, here's an archive of things that I've worked on.
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
                _hover={{ borderColor: 'whiteAlpha.300' }}
                _focus={{ borderColor: 'green.500', boxShadow: 'none' }}
              />
            </InputGroup>
          </Box>

          {/* Projects Grid */}
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8} mb={20}>
            {filteredProjects.map((project) => (
              <Box
                key={project.id}
                as="article"
                bg="whiteAlpha.50"
                borderRadius="xl"
                overflow="hidden"
                transition="all 0.3s"
                _hover={{ bg: 'whiteAlpha.100', transform: 'translateY(-4px)' }}
                cursor="pointer"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <Box position="relative" aspectRatio={16/9} overflow="hidden">
                  <Box
                    as="img"
                    src={project.image}
                    alt={project.title}
                    w="full"
                    h="full"
                    objectFit="cover"
                    transition="transform 0.3s"
                    _groupHover={{ transform: 'scale(1.05)' }}
                  />
                </Box>
                <Box p={6}>
                  <Flex justify="space-between" align="start" mb={4}>
                    <Heading as="h3" fontSize="xl">{project.title}</Heading>
                    <Link
                      href={project.link}
                      p={2}
                      borderRadius="lg"
                      bg="whiteAlpha.100"
                      _hover={{ bg: 'whiteAlpha.200' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                    </Link>
                  </Flex>
                  <Flex gap={3} mb={4} flexWrap="wrap">
                    {project.technologies.map((tech) => (
                      <Text
                        key={tech}
                        px={3}
                        py={1}
                        borderRadius="full"
                        bg="whiteAlpha.100"
                        fontSize="sm"
                        color="gray.300"
                      >
                        {tech}
                      </Text>
                    ))}
                  </Flex>
                  <Text color="gray.400">{project.description}</Text>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Footer */}
          <Box as="footer" textAlign="center" color="gray.400" py={8} borderTop="1px solid" borderColor="whiteAlpha.200">
            <Text mb={2}>Designed and Developed by Adithyah Nair.</Text>
            <Text>
              Built with{' '}
              <Text as="span" color="green.400">Next.js</Text> &{' '}
              <Text as="span" color="green.400">Chakra UI</Text>. Hosted on{' '}
              <Text as="span" color="green.400">Vercel</Text>.
            </Text>
          </Box>
        </Container>
      </Box>
    </PageTransition>
  );
}

export default Projects;