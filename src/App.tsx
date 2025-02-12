import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box minH="100vh" bg="black" color="white">
      {/* Navigation */}
      <Box
        as="nav"
        position="fixed"
        top={0}
        w="full"
        bg="blackAlpha.50"
        backdropFilter="blur(8px)"
        zIndex={50}
      >
        <Container maxW="7xl" py={4}>
          <Flex justify="space-between" align="center">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              fontSize="2xl"
              fontWeight="bold"
              color="white"
              _hover={{ bg: "transparent" }}
            >
              <Text as="span" color="gray.500">
                {"{"}
              </Text>
              <Text as="span" color="white" fontWeight="bold">
                AN
              </Text>
              <Text as="span" color="gray.500">
                {"}"}
              </Text>
            </Button>
            <Flex gap={6}>
              <Button
                fontWeight="bold"
                onClick={() => navigate("/")}
                variant="ghost"
                _hover={{ color: "green.400" }}
              >
                Home
              </Button>
              <Button
                fontWeight="bold"
                onClick={() => navigate("/projects")}
                variant="ghost"
                _hover={{ color: "green.400" }}
              >
                Projects
              </Button>
              <Button
                fontWeight="bold"
                onClick={() => navigate("/blog")}
                variant="ghost"
                _hover={{ color: "green.400" }}
              >
                Events
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </AnimatePresence>
    </Box>
  );
}

export default App;
