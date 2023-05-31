import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing',
  description:
    '',
  plans: [
    {
      id: 'oss',
      title: 'Pro',
      description: 'Unlimited + Bonus Features',
      price: 'Free',
      features: [
        {
          title: 'MIT License',
        },
        {
          title: 'Authentication (Clerk/Supabase/Magic)',
        },
        {
          title: 'Form (react-hook-form)',
        },
        {
          title: 'Modals manager',
        },
        {
          title: 'Hotkeys',
        },
        {
          title: 'Web3 components',
        },
        {
          title: 'And much more...',
        },
      ],
      action: {
        href: 'https://sponsor.ajay.app/',
      },
    },
    {
      id: 'bootstrap',
      title: 'Basic',
      description: 'Get the basic features of Vid Breeze ',
      price: 'Free',
      isRecommended: true,
      features: [
        {
          title: 'One project',
        },
        {
          title: 'One developer',
        },
        {
          title: 'Advanced components',
        },
        {
          title: 'Multiple themes',
        },
        {
          title: 'Next.js and Electron boilerplates',
        },
        {
          title: 'Private discord community',
        },
        {
          title: '1 year of updates',
        },
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://sponsor.ajay.app/',
      },
    },
    {
      id: 'startup',
      title: 'Commercial',
      description: 'Unlimited usage for teams.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €999,-
          </Text>
          <Text>$499,-</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Unlimited projects',
        },
        {
          title: 'Unlimited developers',
        },
        {
          title: '1 year of updates',
        },
        {
          title: 'Everything from Bootstrap',
        },
       
      ],
      action: {
        href: 'https://sponsor.ajay.app/',
      },
    },
  ],
}
