export const forumCategories = [
  {
    id: 'c1',
    title: 'Getting started',
    description: 'Tools, setup, and your first models',
    threads: 128,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 'c2',
    title: 'Projects & portfolios',
    description: 'Feedback, demos, and collaboration',
    threads: 96,
    color: 'from-purple-500 to-fuchsia-500',
  },
  {
    id: 'c3',
    title: 'Ethics & society',
    description: 'Safety, bias, and real-world impact',
    threads: 54,
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'c4',
    title: 'Careers & learning paths',
    description: 'Internships, research, and next steps',
    threads: 71,
    color: 'from-cyan-500 to-blue-500',
  },
]

export const forumThreads = [
  {
    id: 'th1',
    categoryId: 'c1',
    title: 'Best beginner GPU options in 2026?',
    author: 'Neha Verma',
    replies: 24,
    likes: 56,
    lastActive: '2h ago',
    excerpt: 'I’m budgeting for a small desktop setup—what are people actually happy with?',
  },
  {
    id: 'th2',
    categoryId: 'c2',
    title: 'Showcase: sentiment dashboard for school feedback',
    author: 'Aanya Sharma',
    replies: 18,
    likes: 41,
    lastActive: '5h ago',
    excerpt: 'Looking for critique on UX + model choice. Link to Loom in thread.',
  },
  {
    id: 'th3',
    categoryId: 'c3',
    title: 'When is “good enough” documentation for a class project?',
    author: 'Priya Nair',
    replies: 31,
    likes: 72,
    lastActive: '1d ago',
    excerpt: 'Balancing transparency vs time—what do mentors want to see?',
  },
  {
    id: 'th4',
    categoryId: 'c4',
    title: 'Internship prep: what helped you the most?',
    author: 'Rohan Mehta',
    replies: 45,
    likes: 88,
    lastActive: '1d ago',
    excerpt: 'Collecting a crowdsourced checklist for summer applications.',
  },
]

export const sampleComments = [
  {
    id: 'cm1',
    author: 'Kabir Joshi',
    time: '35m ago',
    body: 'I’d add a tiny “limitations” section—recruiters love seeing you know where the model fails.',
    likes: 12,
  },
  {
    id: 'cm2',
    author: 'Ishaan Kapoor',
    time: '1h ago',
    body: 'Love the chart choices. Maybe annotate one outlier so readers don’t misread it?',
    likes: 7,
  },
  {
    id: 'cm3',
    author: 'Sara Khan',
    time: '3h ago',
    body: 'If you can share the label distribution (even rough), that helps fairness review a lot.',
    likes: 15,
  },
]
