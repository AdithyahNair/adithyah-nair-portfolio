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
                    A self-taught developer with an interest in Computer
                    Science.
                  </Text>
                </Heading>
              </Box>

              <VStack align="start" spacing={3}>
                <Flex align="center" gap={2} color="gray.400">
                  <Rocket size={20} />
                  <Text>
                    Currently specializing in Frontend (React / Next.js)
                  </Text>
                </Flex>
                <Flex align="center" gap={2} color="gray.400">
                  <Text as="span" fontSize="lg">
                    ⚡
                  </Text>
                  <Text>
                    Frontend Engineer at{" "}
                    <Text as="span" color="green.400">
                      GGL
                    </Text>
                  </Text>
                </Flex>
              </VStack>

              <Flex gap={4} mt={4}>
                <Button
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
                  Hey! I'm Abdul Rahman, I've been close to a computer since an
                  early age, and been passionate about it ever since.
                </Text>
                <Text fontSize="lg">
                  I really liked to build stuff using{" "}
                  <Link color="green.400" href="#">
                    no-code tools
                  </Link>{" "}
                  back in 2010, and from that, I explored how to code myself,
                  fast-forward to today, I do programming in various languages
                  and technologies, and had the privilege to worked in a{" "}
                  <Link color="green.400" href="#">
                    Recruitment Company
                  </Link>{" "}
                  and a{" "}
                  <Link color="green.400" href="#">
                    SaaS Company
                  </Link>
                  . I'm interested in building something awesome with code and
                  automate tasks with code, currently focused on{" "}
                  <Link color="green.400" href="#">
                    Web & Mobile Development
                  </Link>
                  ,{" "}
                  <Link color="green.400" href="#">
                    Open Source
                  </Link>{" "}
                  and{" "}
                  <Link color="green.400" href="#">
                    Competitive Programming
                  </Link>
                  .
                </Text>
                <Text fontSize="lg">
                  When I'm not coding I play games with my friends, watch some
                  show on Netflix, or if the weather's good, play basketball! 🏀
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
                  src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&q=80"
                  alt="Abdul Rahman"
                  borderRadius="full"
                  w="full"
                  maxW="400px"
                  mx="auto"
                  position="relative"
                  zIndex={1}
                />
              </Box>
            </Grid>
          </Box>

          {/* Latest Articles Section */}
          <Box as="section" mt={40}>
            <Flex justify="space-between" align="center" mb={8}>
              <Flex align="center" gap={2}>
                <Text as="span" fontSize="2xl">
                  📰
                </Text>
                <Heading as="h2" fontSize="3xl">
                  Latest Article.
                </Heading>
              </Flex>
              <Link
                href="/blog"
                color="green.400"
                fontSize="lg"
                _hover={{ textDecoration: "none", color: "green.300" }}
              >
                View all articles →
              </Link>
            </Flex>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              {[
                {
                  title: "2024 Retrospective",
                  date: "January 21 2025",
                  readTime: "6 min read",
                },
                {
                  title:
                    "Unleash Your Dev Blog: Write More with GitHub Issues as Your CMS",
                  date: "April 2 2024",
                  readTime: "3 min read",
                },
                {
                  title: "Code Faster with Vim Shortcuts!",
                  date: "July 18 2022",
                  readTime: "2 min read",
                },
                {
                  title: "Easily Boost Your Productivity With Code Snippets",
                  date: "September 22 2021",
                  readTime: "3 min read",
                },
              ].map((article, index) => (
                <Box
                  key={index}
                  bg="whiteAlpha.50"
                  p={6}
                  borderRadius="xl"
                  _hover={{ bg: "whiteAlpha.100" }}
                  transition="all 0.2s"
                  cursor="pointer"
                >
                  <Heading as="h3" fontSize="xl" mb={4}>
                    {article.title}
                  </Heading>
                  <Flex gap={2} color="gray.500" fontSize="sm">
                    <Text>{article.date}</Text>
                    <Text>•</Text>
                    <Text>{article.readTime}</Text>
                  </Flex>
                </Box>
              ))}
            </Grid>
          </Box>

          {/* Keep in Touch Section */}
          <Box as="section" mt={40} textAlign="center">
            <Heading as="h2" fontSize="6xl" mb={6}>
              Keep In Touch.
            </Heading>
            <Text color="gray.400" fontSize="lg" mb={2}>
              I'm currently specializing in{" "}
              <Text as="span" color="green.400">
                Front-end Development
              </Text>
              .
            </Text>
            <Text color="gray.400" fontSize="lg" mb={8}>
              Feel free to get in touch and talk more about your projects.
            </Text>

            <Flex justify="center" gap={4}>
              <Button
                leftIcon={<Linkedin size={20} />}
                bg="whiteAlpha.50"
                color="white"
                _hover={{ bg: "whiteAlpha.100", transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                LinkedIn
              </Button>
              <Button
                leftIcon={<Mail size={20} />}
                bg="whiteAlpha.50"
                color="white"
                _hover={{ bg: "whiteAlpha.100", transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                Email
              </Button>
              <Button
                bg="whiteAlpha.50"
                color="white"
                _hover={{ bg: "whiteAlpha.100", transform: "translateY(-2px)" }}
                transition="all 0.2s"
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
          <Text mb={2}>Designed and Developed by Abdul Rahman.</Text>
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
