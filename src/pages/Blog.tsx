import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Box, Container, Grid, Heading, Input, Text, InputGroup, InputLeftElement, Flex, Link } from '@chakra-ui/react';
import { articles } from '../data/articles';

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box minH="100vh" bg="black" color="white" pt="32" px={4}>
      <Container maxW="7xl">
        <Heading as="h1" fontSize="7xl" mb={6}>Blog</Heading>
        <Text fontSize="xl" color="gray.400" mb={12}>
          This is where I share my writings on programming, tutorials, and my experiences.
        </Text>

        {/* Search Bar */}
        <Box position="relative" mb={12}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search color="var(--chakra-colors-gray-500)" size={20} />
            </InputLeftElement>
            <Input
              placeholder="Search articles"
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

        {/* Articles List */}
        <Box mb={20}>
          <Grid gap={12}>
            {filteredArticles.map((article) => (
              <Box
                key={article.title}
                role="group"
                _hover={{ '& h2': { color: 'green.400' } }}
              >
                <Flex gap={8}>
                  <Box textAlign="right" color="gray.500" pt={1}>
                    <Text>{article.date}</Text>
                    <Text>{article.readTime}</Text>
                  </Box>
                  <Box>
                    <Heading
                      as="h2"
                      fontSize="2xl"
                      mb={2}
                      transition="color 0.2s"
                    >
                      {article.title}
                    </Heading>
                    <Text color="gray.400" mb={4}>
                      {article.title.includes('2024 Retrospective') 
                        ? 'A late retrospective on 2024. Moving to Bali, stepping outside my comfort zone, and embracing a year of growth and new experiences.'
                        : article.title.includes('GitHub Issues') 
                        ? 'Turn your GitHub Issues into a powerful Next.js blog to write more and publish faster!'
                        : article.title.includes('Vim Shortcuts')
                        ? 'Never leave your hands on your keyboard again.'
                        : 'No more typing the same thing over and over again with Code Snippets!'}
                    </Text>
                    <Link
                      href="#"
                      color="green.400"
                      _hover={{ color: 'green.300' }}
                    >
                      Learn more →
                    </Link>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>

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
  );
}

export default Blog;