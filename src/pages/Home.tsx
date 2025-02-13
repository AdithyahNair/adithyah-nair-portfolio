import React from "react";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail, Rocket } from "lucide-react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { PageTransition } from "../components/PageTransition";

function Home() {
  const navigate = useNavigate();

  const events = [
    {
      title:
        "Join Me for an Exclusive Virtual Session with Qualcomm Student Developers",
      date: "February 6 2025",
      readTime: "1 min read",
      linkedinUrl:
        "https://www.linkedin.com/posts/debeurre_join-the-qualcomm-developers-discord-server-activity-7293315460547190784-ad_Y?utm_source=share&utm_medium=member_desktop",
    },
    {
      title:
        "I attended Drew Turchin keynote on `The Next Era of DeFi` at NYU's Blackstone LaunchPad!",
      date: "February 3 2025",
      readTime: "2 min read",
      linkedinUrl:
        "https://www.linkedin.com/posts/adithyahnair_defi-blockchain-cryptocurrency-activity-7292280138413547520-Mw97?utm_source=share&utm_medium=member_desktop",
    },
    {
      title:
        "Advancing the Future of Technology with Genesis - The Exclusive Web3 Society",
      date: "January 15 2025",
      readTime: "2 min read",
      linkedinUrl:
        "https://www.linkedin.com/posts/adithyahnair_web3-blockchain-innovation-activity-7285845138906460161-2nzY?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "I got my first job in the US",
      date: "January 13 2025",
      readTime: "1 min read",
      linkedinUrl:
        "https://www.linkedin.com/posts/adithyahnair_im-happy-to-share-that-im-starting-a-new-activity-7284737623321952256-a8Ah?utm_source=share&utm_medium=member_desktop",
    },
  ];

  return (
    <PageTransition>
      <Box minH="100vh" bg="black" color="white" pt={32} pb={20}>
        <Container maxW="7xl">
          {/* Hero Section */}
          <Box position="relative">
            <Box position="absolute" top={0} left={0} opacity={0.3}>
              <Grid templateColumns="repeat(10, 1fr)" gap={2}>
                {Array.from({ length: 100 }).map((_, i) => (
                  <Box key={i} w={2} h={2} bg="gray.600" rounded="full" />
                ))}
              </Grid>
            </Box>

            <VStack align="start" spacing={6} position="relative" zIndex={1}>
              <Text color="green.400" fontWeight="bold" fontSize="xxx-large">
                Hey there! I'm-
              </Text>
              <Heading
                as="h1"
                fontSize={{ base: "6xl", lg: "8xl" }}
                letterSpacing="tight"
                lineHeight="1"
                mb={4}
              >
                Adithyah Nair
              </Heading>
              <Box>
                <Heading
                  as="h2"
                  fontSize="3xl"
                  fontWeight="normal"
                  mb={2}
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Text as="span" fontWeight="bold">
                    Software Engineer.
                  </Text>
                  <Text as="span" fontWeight="bold" color="gray.500">
                    CS Graduate Student @ NYU.
                  </Text>
                </Heading>
              </Box>

              <VStack align="start" spacing={3}>
                <Flex align="center" gap={2} color="gray.400">
                  <Text fontSize={20}>
                    🚀 Security x AI x Blockchain x Full-Stack Enthusiast.
                  </Text>
                </Flex>
                <Flex align="center" gap={2} color="gray.400">
                  <Text as="span" fontSize={20}>
                    ⚡
                  </Text>
                  <Text fontSize={20}>
                    Network Security Course Assistant {""}
                    <Text as="span" color="green.400">
                      NYU
                    </Text>
                  </Text>
                </Flex>
              </VStack>

              <Flex gap={4} mt={4}>
                <Button
                  target="_blank"
                  as="a"
                  rel="noopener noreferrer"
                  href="https://www.github.com/adithyahnair"
                  leftIcon={<Github size={20} />}
                  bg="whiteAlpha.50"
                  color="white"
                  _hover={{
                    bg: "whiteAlpha.100",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.2s"
                >
                  Github
                </Button>
                <Button
                  target="_blank"
                  as="a"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/adithyahnair"
                  leftIcon={<Linkedin size={20} />}
                  bg="whiteAlpha.50"
                  color="white"
                  _hover={{
                    bg: "whiteAlpha.100",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.2s"
                >
                  LinkedIn
                </Button>
                <Button
                  target="_blank"
                  as="a"
                  rel="noopener noreferrer"
                  href="mailto:adithyah.nair@gmail.com"
                  leftIcon={<Mail size={20} />}
                  bg="whiteAlpha.50"
                  color="white"
                  _hover={{
                    bg: "whiteAlpha.100",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.2s"
                >
                  Email
                </Button>
              </Flex>
            </VStack>
          </Box>

          {/* About Section */}
          <Box as="section" mt={40}>
            <Flex align="center" gap={2} mb={8}>
              <Text as="span" fontSize="2xl">
                ⚡
              </Text>
              <Heading as="h2" fontSize="3xl">
                About Me
              </Heading>
            </Flex>

            <Grid
              templateColumns={{ base: "1fr", lg: "3fr 2fr" }}
              gap={12}
              alignItems="start"
            >
              <VStack align="start" spacing={6} color="gray.400">
                <Text fontSize="lg">
                  Hey! I'm Adithyah Nair. I've been passionate about technology
                  from an early age, which led me to explore various aspects of
                  software development, security, and research.
                </Text>
                <Text fontSize="lg">
                  I specialize in mobile application development, AI & web
                  development, computer networks, and security, while also
                  diving into blockchain and IoT research. Over the years, I've
                  gained experience working on high-impact projects, hackathons,
                  and research papers, always striving to build innovative and
                  meaningful solutions. Currently, I work as a Course Assistant
                  for the Network Security course at NYU Tandon's ECE
                  department, where I help students navigate complex
                  cybersecurity concepts.
                </Text>
                <Text fontSize="lg">
                  Beyond my professional endeavors, I love participating in
                  hackathons, where I push the boundaries of what's possible
                  with code. On a personal side, I enjoy traveling, watching
                  shows on Netflix, and playing Karate whenever I get the
                  chance! 🥋
                </Text>
              </VStack>

              <Box position="relative">
                <Box position="absolute" top={0} right={0} opacity={0.3}>
                  <Grid templateColumns="repeat(10, 1fr)" gap={2}>
                    {Array.from({ length: 100 }).map((_, i) => (
                      <Box key={i} w={2} h={2} bg="gray.600" rounded="full" />
                    ))}
                  </Grid>
                </Box>
                <Box
                  as="img"
                  src="assets/images/adithyah-nair.jpeg"
                  alt="Adithyah Nair"
                  borderRadius="full"
                  w="350px"
                  h="350px"
                  mx="auto"
                  objectFit="cover"
                  display="block"
                  position="relative"
                  zIndex={1}
                />
              </Box>
            </Grid>
          </Box>

          {/* Latest Events Section */}
          <Box as="section" mt={40}>
            <Flex justify="space-between" align="center" mb={8}>
              <Flex align="center" gap={2}>
                <Text as="span" fontSize="2xl">
                  📰
                </Text>
                <Heading as="h2" fontSize="3xl">
                  Latest Events.
                </Heading>
              </Flex>
            </Flex>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              {events.map((event, index) => (
                <Link
                  key={index}
                  href={event.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: "none" }}
                >
                  <Box
                    bg="whiteAlpha.50"
                    p={6}
                    borderRadius="xl"
                    _hover={{
                      bg: "whiteAlpha.100",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s"
                    cursor="pointer"
                  >
                    <Heading as="h3" fontSize="xl" mb={4}>
                      {event.title}
                    </Heading>
                    <Flex gap={2} color="gray.500" fontSize="sm">
                      <Text>{event.date}</Text>
                      <Text>•</Text>
                      <Text>{event.readTime}</Text>
                    </Flex>
                  </Box>
                </Link>
              ))}
            </Grid>
          </Box>

          {/* Keep in Touch Section */}
          <Box as="section" mt={40} textAlign="center">
            <Heading as="h2" fontSize="6xl" mb={6}>
              Keep In Touch.
            </Heading>
            <Text color="gray.400" fontSize="lg" mb={8}>
              Feel free to get in touch and talk more about your projects.
            </Text>

            <Flex justify="center" gap={4}>
              <Button
                target="_blank"
                as="a"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/adithyahnair"
                leftIcon={<Linkedin size={20} />}
                bg="whiteAlpha.50"
                color="white"
                _hover={{ bg: "whiteAlpha.100", transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                LinkedIn
              </Button>
              <Button
                target="_blank"
                as="a"
                rel="noopener noreferrer"
                href="mailto:adithyah.nair@gmail.com"
                leftIcon={<Mail size={20} />}
                bg="whiteAlpha.50"
                color="white"
                _hover={{ bg: "whiteAlpha.100", transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                Email
              </Button>
              <Button
                as="a"
                href="assets/resume/adithyah.nair.pdf"
                download="Adithyah_Nair_Resume.pdf"
                color="white"
                _hover={{ bg: "whiteAlpha.100", transform: "translateY(-2px)" }}
                transition="all 0.2s"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Button>
            </Flex>
          </Box>
        </Container>

        {/* Footer */}
        <Box
          as="footer"
          textAlign="center"
          color="gray.400"
          py={8}
          mt={20}
          borderTop="1px solid"
          borderColor="whiteAlpha.100"
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
      </Box>
    </PageTransition>
  );
}

export default Home;
