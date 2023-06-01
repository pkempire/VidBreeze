import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing',
  description:
    '',
  plans: [
    {
      id: 'oss',
      title: 'Pro',
      description: 'Unlimited Usage + Bonus Features',
      price: '$5 Monthly',
      features: [
        {
          title: 'Unlimited Videos',
        },
        {
          title: '3 Hour Video Limit',
        },
        {
          title: 'Additional Features: Interactive Chatbot, Reliability Rating, ',
        },
      
      ],
      action: {
        href: 'https://sponsor.ajay.app/',
      },
    },
    {
      id: 'bootstrap',
      title: 'Basic',
      description: 'Get the basic features of Vid Breeze at limited usage ',
      price: 'Free',
      isRecommended: true,
      features: [
        {
          title: 'Sponsor Blocking',
        },
        {
          title: 'Video Summarization',
        },
        
      ],
      action: {
        href: 'https://sponsor.ajay.app/',
      },
    },
    {
      id: 'startup',
      title: 'Commercial',
      description: 'API + Commercial Use',
      price: (
        <HStack>
          <Text>Custom</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Commercial projects',
        },
        {
          title: 'API Access',
        },
        {
          title: 'Custom Solutions',
        },
       
      ],
      action: {
        href: 'https://sponsor.ajay.app/',
      },
    },
  ],
}
