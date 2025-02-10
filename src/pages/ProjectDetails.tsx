import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Flex, Heading, Text, Link, VStack, Button, Code } from '@chakra-ui/react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { PageTransition } from '../components/PageTransition';

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observers = new Map();
    const sections = document.querySelectorAll('section[id]');

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    sections.forEach(section => {
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      observer.observe(section);
      observers.set(section, observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  if (!project) {
    return (
      <Container maxW="7xl" pt="32">
        <Heading>Project not found</Heading>
        <Button onClick={() => navigate('/projects')} leftIcon={<ArrowLeft />} mt={4}>
          Back to Projects
        </Button>
      </Container>
    );
  }

  const projectContent = getProjectContent(project.id);

  return (
    <PageTransition>
      <Box minH="100vh" bg="black" color="white" pt="32">
        <Container maxW="7xl">
          <Box
            position="relative"
            mb={16}
            p={8}
            borderRadius="2xl"
            overflow="hidden"
            bg="linear-gradient(135deg, rgba(34,139,87,0.15) 0%, rgba(0,0,0,0) 50%, rgba(34,139,87,0.15) 100%)"
            transition="background 0.3s ease"
            _hover={{
              bg: "linear-gradient(135deg, rgba(34,139,87,0.2) 0%, rgba(0,0,0,0) 50%, rgba(34,139,87,0.2) 100%)"
            }}
          >
            <Box position="relative" zIndex={1}>
              <Button
                variant="ghost"
                leftIcon={<ArrowLeft />}
                onClick={() => navigate('/projects')}
                _hover={{ color: 'green.400', transform: 'translateX(-4px)' }}
                transition="all 0.3s"
                mb={6}
              >
                Back to Projects
              </Button>

              <Heading as="h1" fontSize={{ base: '4xl', md: '6xl' }} mb={4} bgGradient="linear(to-r, white, green.400)" bgClip="text">
                {project.title}
              </Heading>

              <Flex gap={4} align="center" mb={4} flexWrap="wrap">
                <Text color="gray.300">{project.views || '965'} views</Text>
                <Text color="gray.500">•</Text>
                <Link 
                  href={project.github} 
                  isExternal 
                  display="flex" 
                  alignItems="center" 
                  gap={2}
                  bg="whiteAlpha.100"
                  px={4}
                  py={2}
                  borderRadius="full"
                  _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-2px)' }}
                  transition="all 0.2s"
                >
                  <Github size={18} />
                  <Text>View Source</Text>
                </Link>
                <Link 
                  href={project.link} 
                  isExternal 
                  display="flex" 
                  alignItems="center" 
                  gap={2}
                  bg="green.500"
                  px={4}
                  py={2}
                  borderRadius="full"
                  _hover={{ bg: 'green.600', transform: 'translateY(-2px)' }}
                  transition="all 0.2s"
                >
                  <ExternalLink size={18} />
                  <Text>Live Demo</Text>
                </Link>
              </Flex>

              <Flex gap={2} align="center" color="gray.400">
                <Box as="span" w={3} h={3} bg="green.500" rounded="full" />
                <Text>Personal Project</Text>
              </Flex>
            </Box>
          </Box>

          <Flex gap={20} position="relative">
            <Box flex="1">
              <VStack align="start" spacing={20}>
                {renderSections(project, projectContent)}
              </VStack>
            </Box>

            <Box w="300px" display={{ base: 'none', xl: 'block' }}>
              <Box
                position="sticky"
                top="32"
                bg="whiteAlpha.50"
                p={6}
                borderRadius="xl"
                backdropFilter="blur(8px)"
                borderWidth="1px"
                borderColor="whiteAlpha.100"
              >
                <Heading as="h3" fontSize="xl" mb={6} color="green.400">
                  Table of Contents
                </Heading>
                <VStack align="start" spacing={3}>
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'project-goals', label: 'Project Goals' },
                    { id: 'tech-stack', label: 'Tech Stack' },
                    { id: 'features', label: 'Features' },
                    { id: 'challenges', label: 'Challenges' },
                    { id: 'learning-and-takeaways', label: 'Learning and Takeaways' }
                  ].map(item => (
                    <TableLink 
                      key={item.id}
                      href={`#${item.id}`}
                      isActive={activeSection === item.id}
                    >
                      {item.label}
                    </TableLink>
                  ))}
                </VStack>
              </Box>
            </Box>
          </Flex>

          <Box as="footer" textAlign="center" color="gray.400" py={12} mt={20} borderTop="1px solid" borderColor="whiteAlpha.100">
            <Text mb={2}>Designed and Developed by Adithyah Nair</Text>
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return (
    <Box 
      id={id} 
      as="section" 
      w="full"
      scrollMarginTop="100px"
    >
      <Heading
        as="h2"
        fontSize="3xl"
        mb={8}
        pb={3}
        borderBottom="2px solid"
        borderColor="green.400"
        display="inline-block"
        position="relative"
        _after={{
          content: '""',
          position: 'absolute',
          bottom: '-2px',
          left: 0,
          width: '50%',
          height: '2px',
          bg: 'white',
          opacity: 0.3
        }}
      >
        {title}
      </Heading>
      <Box>{children}</Box>
    </Box>
  );
}

function TableLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive?: boolean }) {
  return (
    <Link
      href={href}
      w="full"
      display="flex"
      alignItems="center"
      px={4}
      py={2}
      borderRadius="md"
      fontSize="sm"
      fontWeight={isActive ? "semibold" : "normal"}
      color={isActive ? "green.400" : "gray.400"}
      bg={isActive ? "whiteAlpha.100" : "transparent"}
      transition="all 0.2s"
      _hover={{
        color: "green.400",
        bg: "whiteAlpha.100",
        transform: "translateX(4px)"
      }}
    >
      <Box
        as="span"
        w="2px"
        h="full"
        bg={isActive ? "green.400" : "transparent"}
        position="absolute"
        left={0}
        borderRadius="full"
      />
      {children}
    </Link>
  );
}

function renderSections(project: any, projectContent: any) {
  return (
    <>
      <Section title="Overview">
        <Text color="gray.300" fontSize="lg" lineHeight="tall">
          {project.overview}
        </Text>
      </Section>

      <Section title="Project Goals">
        <Text color="gray.300" fontSize="lg" lineHeight="tall">
          {project.id === 'daily-prayer' ? (
            <>
              This API was actually written because of my personal use case, it was holiday season at the time and I wanted to maximize those online gaming sessions with my friends, we all know online games (like <Text as="span" fontStyle="italic" color="green.400">Valorant</Text>) can't be paused mid-match, so I built an API for my personal Discord bot to know how much session we can play before the next prayer time.
              <br /><br />
              But I published the API for general use cases for many people by providing a smooth way to integrate prayer times into their projects ✨
            </>
          ) : project.description}
        </Text>
      </Section>

      <Section title="Tech Stack">
        <Flex gap={3} flexWrap="wrap">
          {project.technologies.map((tech: string) => (
            <Box
              key={tech}
              px={4}
              py={2}
              bg="whiteAlpha.100"
              color="green.400"
              borderRadius="full"
              fontSize="sm"
              fontWeight="medium"
              _hover={{ bg: 'whiteAlpha.200' }}
              transition="all 0.2s"
            >
              {tech}
            </Box>
          ))}
        </Flex>
      </Section>

      {renderFeatures(project, projectContent)}
      {renderChallenges(project, projectContent)}

      <Section title="Learning and Takeaways">
        <Text color="gray.300" fontSize="lg" lineHeight="tall">
          {project.learnings}
        </Text>
      </Section>
    </>
  );
}

function renderFeatures(project: any, projectContent: any) {
  return (
    <Section title="Features ✨">
      {project.id === 'daily-prayer' && (
        <>
          <Heading as="h3" fontSize="2xl" mb={4} color="green.400">API Response</Heading>
          <Box
            bg="gray.900"
            p={6}
            borderRadius="xl"
            mb={8}
            boxShadow="lg"
            borderWidth="1px"
            borderColor="whiteAlpha.100"
            position="relative"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
            }}
          >
            <Code display="block" whiteSpace="pre" p={4} bg="transparent" color="green.400" fontSize="sm">
              {projectContent.codeSnippets.apiResponse}
            </Code>
          </Box>
        </>
      )}
    </Section>
  );
}

function renderChallenges(project: any, projectContent: any) {
  return (
    <Section title="Challenges">
      {project.id === 'daily-prayer' ? (
        <VStack align="start" spacing={6}>
          <Text color="gray.300" fontSize="lg" lineHeight="tall">
            There's a lot of complexities when you're doing web scraping.
          </Text>
          <Text color="gray.300" fontSize="lg" lineHeight="tall">
            My initial approach involved querying the Muslim Pro website directly for prayer times in various cities. However, this is ineffective because the URLs of the prayer time from each city are different and may involve the language of that city in the URL.
          </Text>
          <Box
            p={4}
            bg="whiteAlpha.50"
            borderRadius="lg"
            borderLeft="4px solid"
            borderColor="green.400"
          >
            <Text color="gray.300" fontSize="lg" lineHeight="tall">
              To address that issue, I had an idea of using a search engine. I can get the most relevant site by querying{' '}
              <Code bg="whiteAlpha.200" px={2} color="green.400">
                {projectContent.codeSnippets.searchQuery}
              </Code>
              {' '}I can safely query any city in the world while making sure it's a valid Muslim Pro URL that way.
            </Text>
          </Box>
          <Text color="gray.300" fontSize="lg" lineHeight="tall">
            Then, the most inevitable problem of web scraping is the changes in the source website, Muslim Pro site has several HTML structure revisions, and I have to adjust and even rewrite the code at times.
          </Text>
        </VStack>
      ) : (
        <Text color="gray.300" fontSize="lg" lineHeight="tall">
          {project.challenges}
        </Text>
      )}
    </Section>
  );
}

function getProjectContent(projectId: string) {
  switch (projectId) {
    case 'daily-prayer':
      return {
        codeSnippets: {
          apiResponse: `{
  "city": "Mecca",
  "date": "25 March 2021",
  "today": {
    "Fajr": "05:03",
    "Sunrise": "06:19",
    "Dhuhr": "12:27",
    "Asr": "15:52",
    "Maghrib": "18:34",
    "Isha'a": "20:04"
  },
  "tomorrow": {
    "Date": "Fri 26 Mar",
    "Fajr": "05:03",
    "Sunrise": "06:19",
    "Dhuhr": "12:27",
    "Asr": "15:52",
    "Maghrib": "18:34",
    "Isha'a": "20:04"
  }
}`,
          searchQuery: '(city) prayer time site:muslimpro.com'
        }
      };
    case 'spherix-marketing':
      return {
        codeSnippets: {
          astroConfig: `import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  site: 'https://spherix.marketing'
});`,
          splineScene: `import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('scene');
const app = new Application(canvas);

app.load('https://prod.spline.design/scene.splinecode')
  .then(() => {
    // Scene loaded successfully
    console.log('3D scene loaded');
  });`
        }
      };
    case 'ggl-fitness':
      return {
        codeSnippets: {
          workoutSchema: `type Workout {
  id: ID!
  name: String!
  exercises: [Exercise!]!
  duration: Int
  difficulty: Difficulty!
  targetMuscles: [Muscle!]!
}

type Exercise {
  name: String!
  sets: Int!
  reps: Int!
  weight: Float
  notes: String
}

enum Difficulty {
  BEGINNER
  INTERMEDIATE
  ADVANCED
}`,
          offlineSync: `// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

// IndexedDB Setup
const dbPromise = idb.openDB('fitness-app', 1, {
  upgrade(db) {
    db.createObjectStore('workouts');
    db.createObjectStore('measurements');
  }
});

// Sync Function
async function syncData() {
  const db = await dbPromise;
  const tx = db.transaction('workouts', 'readonly');
  const store = tx.objectStore('workouts');
  
  const offlineWorkouts = await store.getAll();
  
  try {
    await fetch('/api/sync', {
      method: 'POST',
      body: JSON.stringify(offlineWorkouts)
    });
    
    // Clear synced data
    const clearTx = db.transaction('workouts', 'readwrite');
    await clearTx.objectStore('workouts').clear();
  } catch (error) {
    console.error('Sync failed:', error);
  }
}`
        }
      };
    case 'opiniometer':
      return {
        codeSnippets: {
          sentimentAnalysis: `from textblob import TextBlob
import tweepy
import pandas as pd

def analyze_sentiment(text):
    analysis = TextBlob(text)
    if analysis.sentiment.polarity > 0:
        return 'positive'
    elif analysis.sentiment.polarity < 0:
        return 'negative'
    return 'neutral'

def get_tweets(query, count=100):
    tweets = api.search_tweets(q=query, count=count)
    return [{
        'text': tweet.text,
        'sentiment': analyze_sentiment(tweet.text)
    } for tweet in tweets]

def generate_report(topic):
    tweets = get_tweets(topic)
    df = pd.DataFrame(tweets)
    
    sentiment_counts = df['sentiment'].value_counts()
    return {
        'positive': sentiment_counts.get('positive', 0),
        'neutral': sentiment_counts.get('neutral', 0),
        'negative': sentiment_counts.get('negative', 0)
    }`
        }
      };
    default:
      return { codeSnippets: {} };
  }
}

export default ProjectDetails;