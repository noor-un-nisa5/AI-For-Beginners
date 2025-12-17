// // @ts-check

// /**
//  * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
//  */
// const sidebars = {
//   tutorialSidebar: [
//     'chapter 1',
//     'chapter 2',
//     'chapter 3',
//     'chapter 4',
//     'chapter 5',
//   ],
// };

// export default sidebars;


// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'AI Chapters', // ← Change this to whatever heading you want
      items: [
        'chapter 1',
        'chapter 2',
        'chapter 3',
        'chapter 4',
        'chapter 5',
      ],
    },
  ],
};

export default sidebars;
