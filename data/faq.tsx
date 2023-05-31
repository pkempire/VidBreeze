import * as React from 'react';

const faq = {
  title: 'Frequently asked questions',
  items: [
    {
      q: 'How does VidBreeze enhance my YouTube watching experience?',
      a: (
        <>
          VidBreeze enhances your YouTube watching experience by skipping sponsored segments, summarizing videos, and providing a chatbot for questions about video content.
        </>
      ),
    },
    {
      q: 'Is VidBreeze available for all browsers?',
      a: 'Currently, VidBreeze is available as a Chrome extension, providing its features exclusively for users of the Chrome browser.',
    },
    {
      q: 'How accurate is the video summarization feature of VidBreeze?',
      a: 'The video summarization feature of VidBreeze utilizes advanced AI algorithms to provide accurate and concise summaries of videos. While it strives for accuracy, the level of summarization may vary based on factors such as video content and language.',
    },
    {
      q: 'Can I customize the chatbot in VidBreeze?',
      a: 'At the moment, the chatbot in VidBreeze is designed to answer questions about the content of the video. Customization options for the chatbot are not available.',
    },
    {
      q: 'Are there any usage restrictions for VidBreeze?',
      a: 'VidBreeze can be used for personal and non-commercial purposes free of charge. However, for commercial use, licensing options are available. Please refer to our pricing page for more information.',
    },
    {
      q: 'Does VidBreeze work with all YouTube videos?',
      a: 'VidBreeze aims to enhance your YouTube watching experience across a wide range of videos. However, certain videos with restricted access or limited functionality may not be fully supported.',
    },
  ],
};

export default faq;