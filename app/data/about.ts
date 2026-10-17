export interface AboutPhoto {
  src: string
  width: number
  height: number
  alt: string
  caption?: string
}

export const about = {
  paragraphs: [
    'I like cooking and baking, spending time outside, and being with friends and family. I take my pleasure and my time seriously.',
    'I never skip breakfast. I make time to sit down with breakfast, coffee, and a book before the day starts. My time in Barcelona made me appreciate slow mornings even more.',
    'I love taking photos, but I don’t usually go out specifically to take them. I just notice things as I go. People, food, buildings, small details. There’s a lot around that I want to remember.',
  ],
  photos: [
    {
      src: '/images/dolomites-hike.jpg',
      width: 4032,
      height: 3024,
      alt: 'Two horses in a grassy meadow beneath rocky peaks in the Dolomites.',
      caption: 'On a hike in the Dolomites. Somewhere unfamiliar that still felt like home.',
    },
    {
      src: '/images/coffee-switzerland.jpg',
      width: 4032,
      height: 3024,
      alt: 'Coffee, a glass of water, and sweets on a wooden table in Switzerland.',
      caption: 'Coffee in Switzerland.',
    },
  ] as AboutPhoto[],
}
