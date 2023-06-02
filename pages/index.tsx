import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="VidBreeze - Transform Your YouTube Experience"
        description="Enhance your YouTube watching with our AI-powered Chrome extension"
      />
      <Box>
        <HeroSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Transform Your 
                <Br /> YouTube Experience
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
               Enhance your video watching with our AI-powered Chrome extension
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="https://sponsor.ajay.app/">
                  Get Extension
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://sponsor.ajay.app/"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/waiting.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        title={
          <FallInPlace delay={0.3} fontWeight="medium">
          How It Works:
          </FallInPlace>
        }
        id="benefits"
        columns={[1, 2, 3, 4]}
        iconSize={5}
        innerWidth="container.xl"
        pt="22"
        features={[
          {
            title: "Skip Sponsored Segments",
            icon: FiSmile,
            description: "Tired of sitting through sponsored content? VidBreeze automatically detects and skips sponsored segments, so you can focus on the content you love.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Video Summaries",
            icon: FiSliders,
            description: "Short on time? Our AI-generated video summaries give you the key takeaways from any video in just a few moments, saving you time and effort.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Smart Topic Search",
            icon: FiGrid,
            description: "Search the video for what you care about and skip the rest. VidBreeze takes you straight to the timestamps relevant to your interests. Like an AI powered ctrl + f for videos",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Annotations",
            icon: FiGrid,
            description: "Jot down notes attached to videos to increase comprehension and mark important points. Come back later and pickup with the notes you left.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Bookmarks",
            icon: FiGrid,
            description: "Bookmark specific moments within a video and save them to your library. Keep segments for later reference and store moments that inspire you.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Reliability Rating",
            icon: FiThumbsUp,
            description: "In an age of misinformation, our AI algorithm evaluates the scientific accuracy of the content you are watching and provides a reliability rating from 0 to 100.",
            iconPosition: "left",
            delay: 1.1,
          },
          {
            title: "Smart Recommendations",
            icon: FiGrid,
            description: "Discover videos based on the topics you enjoy. Our algorithm analyzes your watch habits to suggest videos you'll love.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Transcript for Notes",
            icon: FiGrid,
            description: "Quickly download a formatted transcript of the video with AI-generated headers, making it easy to take organized notes on the topic.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Quizzes",
            icon: FiGrid,
            description: "Ensure your understanding of the topic with built-in quizzes related to the video content as you watch.",
            iconPosition: "left",
            delay: 1,
          },
          
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};


const FeaturesSection = () => {
  return (
      
  <Features
  id="features"
  title={
  <Heading
  lineHeight="short"
  fontSize={["2xl", null, "4xl"]}
  textAlign="left"
  as="p"
  >
  Getting Started
  <Br />
  </Heading>
  }
  description={
  <>
  VidBreeze is a powerful Chrome extension that enhances your YouTube and video watching experience. It offers features like ad skipping, content summarization, and smart search for YouTube videos.
  <Br />
  Install VidBreeze and transform the way you interact with online videos.
  </>
  }
  align="left"
  columns={[1, 2, 3]}
  iconSize={4}
  features={[
  {
  title: "1. Install VidBreeze",
  description:
  "Experience the convenience of having all the premium features at your fingertips. VidBreeze integrates with your Chrome browser, eliminating the need for manual copy-pasting and ensuring you always have the latest updates.",
  variant: "inline",
  },
  {
  title: "2. Customize Your Settings",
  description:
  "Tailor VidBreeze to your preferences. Adjust the settings to suit your needs and make your video-watching experience even more personalized.",
  variant: "inline",
  },
  {
  title: "3. Enjoy Enhanced YouTube",
  description: (
  <>
  VidBreeze provides you with the flexibility to control and modify your video workflow. With the availability of code packages in a high-performance <Link href="https://turborepo.com">Turborepo</Link>, you have the freedom to enhance and optimize your video watching experience.
  </>
  ),
  variant: "inline",
  },
  ]}
  />
  );
  };

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;


