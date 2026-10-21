import type { Module } from '@/types';

export const modules: Module[] = [
  {
    id: 'about-viva',
    title: 'About Viva Talent',
    shortTitle: 'About Viva',
    subtitle: 'What Viva does and who it serves',
    duration: '2 min',
    icon: 'Building2',
    objective: 'Understand what Viva Talent does and who it connects.',
    learnCards: [
      {
        title: 'What Viva Does',
        body: 'Viva Talent connects Latin American talent with executives at fast-growing startups in the United States and Canada. It specializes in remote Executive Assistant roles that offer meaningful, long-term career opportunities.',
        icon: 'Globe',
      },
      {
        title: 'Who Viva Serves',
        body: 'Viva works with two groups: talented professionals across Latin America seeking great remote roles, and high-growth North American startups that need skilled executive support to scale efficiently.',
        icon: 'Users',
      },
      {
        title: 'Why It Exists',
        body: 'Viva bridges a gap: talented people in Latin America often lack access to premium remote opportunities, while startups struggle to find reliable, affordable executive support. Viva creates a win-win match.',
        icon: 'Target',
      },
      {
        title: 'The Remote Model',
        body: 'Roles are fully remote, paid in USD, and designed as long-term placements rather than short gigs. This gives candidates stability and career growth while giving startups consistency.',
        icon: 'Laptop',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What does Viva Talent do?',
        options: [
          { id: 'a', label: 'Sells software to startups', correct: false, explanation: 'Viva is not a software company. It connects talent with executives.' },
          { id: 'b', label: 'Connects Latin American talent with executives at fast-growing startups in the US and Canada', correct: true, explanation: 'Correct. Viva specializes in remote EA roles for Latin American talent placed with North American startups.' },
          { id: 'c', label: 'Provides loans to small businesses', correct: false, explanation: 'Viva is not a financial services company.' },
          { id: 'd', label: 'Runs a job board for local jobs', correct: false, explanation: 'Viva focuses on remote, long-term placements, not a general job board.' },
        ],
      },
      {
        id: 'q2',
        question: 'How are roles at Viva typically structured?',
        options: [
          { id: 'a', label: 'Short-term gigs with rotating clients', correct: false, explanation: 'Viva focuses on long-term placements, not short gigs.' },
          { id: 'b', label: 'Fully remote, paid in USD, long-term placements', correct: true, explanation: 'Correct. Roles are remote, USD-paid, and designed for stability and growth.' },
          { id: 'c', label: 'On-site only, in specific cities', correct: false, explanation: 'Roles are fully remote.' },
          { id: 'd', label: 'Unpaid internships for training', correct: false, explanation: 'Roles are paid positions, not internships.' },
        ],
      },
    ],
  },
  {
    id: 'social-mission',
    title: "Viva's Social Mission",
    shortTitle: 'Social Mission',
    subtitle: 'The movement for change and how it\u2019s driven forward',
    duration: '2 min',
    icon: 'Heart',
    objective: 'Explain Viva\u2019s social mission and how it drives community impact.',
    learnCards: [
      {
        title: 'The Social Mission',
        body: 'At Viva, we\u2019re more than just a company \u2014 we\u2019re a movement for change. Our mission is to empower women and reduce gender inequality by creating 1,000 meaningful job opportunities for women across Latin America.',
        icon: 'Compass',
      },
      {
        title: 'Diverse & Inclusive Team',
        body: 'We\u2019re proud to have a women-majority workforce while welcoming talent from all backgrounds, genders, and perspectives. Inclusion isn\u2019t a checkbox \u2014 it\u2019s how we build a stronger team.',
        icon: 'Users',
      },
      {
        title: 'Community Impact',
        body: 'Through NGOs like ProMujer and Pies Descalzos, we provide micro-loans and skills training to help individuals achieve financial independence and career readiness.',
        icon: 'HeartHandshake',
      },
      {
        title: 'Volunteer Opportunities',
        body: 'Viva team members have the chance to support and volunteer with our community impact initiatives \u2014 turning the mission into action, not just words.',
        icon: 'Sparkles',
      },
      {
        title: 'Equal Opportunities',
        body: 'Every role at Viva contributes to our mission, ensuring that our work leaves a positive, lasting impact on our communities, staff, and families.',
        icon: 'Globe',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What is Viva\u2019s social mission in one sentence?',
        options: [
          { id: 'a', label: 'Maximize shareholder value', correct: false, explanation: 'Viva is mission-driven around people, not just profit.' },
          { id: 'b', label: 'Empower women and reduce gender inequality by creating 1,000 meaningful job opportunities for women across Latin America', correct: true, explanation: 'Correct. Viva is a movement for change focused on women\u2019s empowerment and gender equality.' },
          { id: 'c', label: 'Become the largest staffing agency globally', correct: false, explanation: 'Scale is a means, not the mission.' },
          { id: 'd', label: 'Provide free training courses', correct: false, explanation: 'Training supports the mission, but the mission is about opportunity.' },
        ],
      },
      {
        id: 'q2',
        question: 'How does Viva drive its mission forward in the community?',
        options: [
          { id: 'a', label: 'By partnering with NGOs like ProMujer and Pies Descalzos to provide micro-loans and skills training', correct: true, explanation: 'Correct. Viva works with NGOs to create financial independence and career readiness.' },
          { id: 'b', label: 'By running large-scale advertising campaigns', correct: false, explanation: 'Marketing isn\u2019t how Viva drives community impact.' },
          { id: 'c', label: 'By charging candidates a placement fee', correct: false, explanation: 'Viva doesn\u2019t charge candidates \u2014 that wouldn\u2019t advance the mission.' },
          { id: 'd', label: 'By hosting annual conferences only', correct: false, explanation: 'Conferences alone don\u2019t create lasting community impact.' },
        ],
      },
    ],
  },
  {
    id: 'values',
    title: 'Our Five Values',
    shortTitle: 'Values',
    subtitle: 'The five values that guide your growth and fulfillment',
    duration: '2 min',
    icon: 'Award',
    objective: 'Recall all five of Viva\u2019s core values and what each means for an EA.',
    learnCards: [
      {
        title: 'Why Values Matter',
        body: 'To support your growth and fulfillment, Viva embraces 5 values that guide everything we do. These aren\u2019t just words on a page \u2014 they shape how EAs work, communicate, and grow every day.',
        icon: 'Info',
      },
      {
        title: 'Value 1 — Drive Fast',
        body: 'We operate with ownership, speed, and adaptability to swiftly turn challenges into outcomes. For an EA, this means resolving issues quickly without waiting for permission on things within your scope.',
        icon: 'Zap',
      },
      {
        title: 'Value 2 — Empower Each Other',
        body: 'We share the journey, the accountability, and the credit. We lift each other up with determination and compassion. An EA embodies this by supporting the executive and the wider team, not just working solo.',
        icon: 'HeartHandshake',
      },
      {
        title: 'Value 3 — Embrace Feedback',
        body: 'We see feedback as a two-way exchange and a gift for growth through resilience and radical respect for one another. Great EAs seek feedback actively and give it constructively.',
        icon: 'TrendingUp',
      },
      {
        title: 'Value 4 — Customer Obsession',
        body: 'We are committed to understanding and delighting our customers, adapting to meet their evolving needs. For an EA, the executive and the startup are your customers \u2014 anticipate what they need before they ask.',
        icon: 'Target',
      },
      {
        title: 'Value 5 — Use Your Voice',
        body: 'We champion big ideas and encourage open discussion to let the best ones win. A strong EA speaks up with solutions, not just problems, and contributes ideas confidently.',
        icon: 'Mic',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'Which of these is NOT one of Viva\u2019s five values?',
        options: [
          { id: 'a', label: 'Drive Fast', correct: false, explanation: 'Drive Fast is a core value.' },
          { id: 'b', label: 'Customer Obsession', correct: false, explanation: 'Customer Obsession is a core value.' },
          { id: 'c', label: 'Perfection at all costs', correct: true, explanation: 'Correct. The five values are Drive Fast, Empower Each Other, Embrace Feedback, Customer Obsession, and Use Your Voice \u2014 not perfection at all costs.' },
          { id: 'd', label: 'Use Your Voice', correct: false, explanation: 'Use Your Voice is a core value.' },
        ],
      },
      {
        id: 'q2',
        question: 'What does "Drive Fast" mean for an EA?',
        options: [
          { id: 'a', label: 'Rushing through tasks without checking quality', correct: false, explanation: 'Drive Fast is about ownership and adaptability, not carelessness.' },
          { id: 'b', label: 'Operating with ownership, speed, and adaptability to swiftly turn challenges into outcomes', correct: true, explanation: 'Correct. Drive Fast means resolving issues quickly within your scope.' },
          { id: 'c', label: 'Ignoring the executive\u2019s priorities', correct: false, explanation: 'Speed still serves the executive\u2019s priorities.' },
          { id: 'd', label: 'Working late every night', correct: false, explanation: 'Drive Fast is about effectiveness, not hours worked.' },
        ],
      },
      {
        id: 'q3',
        question: 'What does "Embrace Feedback" mean at Viva?',
        options: [
          { id: 'a', label: 'Only the manager gives feedback, never the EA', correct: false, explanation: 'Feedback is a two-way exchange at Viva.' },
          { id: 'b', label: 'Seeing feedback as a gift for growth, given and received with resilience and radical respect', correct: true, explanation: 'Correct. Feedback flows both ways and is treated as a growth tool.' },
          { id: 'c', label: 'Avoiding feedback to prevent conflict', correct: false, explanation: 'Avoiding feedback goes against this value.' },
          { id: 'd', label: 'Only accepting positive feedback', correct: false, explanation: 'All feedback \u2014 positive and constructive \u2014 is valued.' },
        ],
      },
    ],
  },
  {
    id: 'what-is-ea',
    title: 'What Is an Executive Assistant?',
    shortTitle: 'What Is an EA',
    subtitle: 'The role, who you support, and why it matters',
    duration: '2 min',
    icon: 'UserCog',
    objective: 'Define the EA role, identify who an EA supports, and explain why the role matters.',
    learnCards: [
      {
        title: 'The Definition',
        body: 'An Executive Assistant (EA) is a trusted professional who manages the administrative, strategic, and personal tasks of a senior leader. The EA is the executive\u2019s right hand \u2014 keeping their time, information, and priorities organized.',
        icon: 'UserCog',
      },
      {
        title: 'Who You Support',
        body: 'EAs support C-level executives (CEO, COO, CFO) and founders at fast-growing startups. These leaders are busy, context-switch constantly, and rely heavily on one reliable person to keep everything moving.',
        icon: 'Crown',
      },
      {
        title: 'It Is Not Just Admin',
        body: 'Modern EAs go beyond calendar and email. They act as project managers, gatekeepers, sounding boards, and proxies. They help the executive focus on the highest-impact work.',
        icon: 'Layers',
      },
      {
        title: 'Why the Role Matters',
        body: 'An executive\u2019s time is the most expensive resource in a startup. A great EA multiplies that time \u2014 saving hours every week, preventing mistakes, and creating space for strategic thinking. The EA is a force multiplier.',
        icon: 'Rocket',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'Who does an Executive Assistant typically support?',
        options: [
          { id: 'a', label: 'An entire department of junior staff', correct: false, explanation: 'EAs support specific senior leaders, not whole departments.' },
          { id: 'b', label: 'C-level executives and founders at fast-growing startups', correct: true, explanation: 'Correct. EAs are the right hand of busy senior leaders.' },
          { id: 'c', label: 'Only the HR team', correct: false, explanation: 'EAs support executives directly, not just HR.' },
          { id: 'd', label: 'External clients and vendors exclusively', correct: false, explanation: 'EAs may coordinate with external parties, but they support an internal executive.' },
        ],
      },
      {
        id: 'q2',
        question: 'Why does the EA role matter at a startup?',
        options: [
          { id: 'a', label: 'It doesn\u2019t matter much \u2014 it\u2019s a minor admin role', correct: false, explanation: 'The EA role is high-impact at startups.' },
          { id: 'b', label: 'An EA multiplies the executive\u2019s time and prevents mistakes, creating space for strategic work', correct: true, explanation: 'Correct. The EA is a force multiplier for the most expensive resource: executive time.' },
          { id: 'c', label: 'It replaces the need for a COO', correct: false, explanation: 'An EA complements leadership, not replaces it.' },
          { id: 'd', label: 'It mainly saves money on office supplies', correct: false, explanation: 'The value is in time and focus, not supplies.' },
        ],
      },
    ],
  },
  {
    id: 'a-day-in-life',
    title: 'A Day in the Life of an EA',
    shortTitle: 'A Day in the Life',
    subtitle: 'What an EA actually does on a typical day',
    duration: '2 min',
    icon: 'CalendarClock',
    objective: 'Describe the key tasks an EA performs on a typical day.',
    learnCards: [
      {
        title: 'Morning: Inbox & Calendar Triage',
        body: 'Start by reviewing the executive\u2019s inbox and calendar. Flag urgent emails, decline or reschedule low-value meetings, and confirm the day\u2019s priorities. The goal is a clean, focused start for the executive.',
        icon: 'Sunrise',
      },
      {
        title: 'Midday: Meeting Prep & Coordination',
        body: 'Prepare briefing docs for meetings, ensure attendees have what they need, and take notes during calls. Follow up on action items so nothing slips \u2014 the EA owns the follow-through.',
        icon: 'ClipboardList',
      },
      {
        title: 'Afternoon: Project & Personal Tasks',
        body: 'Manage travel, expenses, and personal errands for the executive. Coordinate with other teams, track deadlines, and handle ad-hoc requests. The EA context-switches gracefully all day.',
        icon: 'Plane',
      },
      {
        title: 'End of Day: Wrap & Plan Ahead',
        body: 'Summarize what got done, update task lists, and pre-plan the next day. A great EA leaves the executive set up for success before logging off.',
        icon: 'Moon',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What is a typical first task for an EA in the morning?',
        options: [
          { id: 'a', label: 'Drafting a company strategy document', correct: false, explanation: 'Strategy is the executive\u2019s job; the EA enables it.' },
          { id: 'b', label: 'Reviewing the inbox and calendar to flag urgent items and set priorities', correct: true, explanation: 'Correct. Triage sets up a focused day for the executive.' },
          { id: 'c', label: 'Calling every client to check in', correct: false, explanation: 'That is not a standard EA morning task.' },
          { id: 'd', label: 'Ordering lunch for the whole office', correct: false, explanation: 'Occasional, but not the typical first task.' },
        ],
      },
      {
        id: 'q2',
        question: 'What does an EA do during and after meetings?',
        options: [
          { id: 'a', label: 'Only attend if the executive is absent', correct: false, explanation: 'EAs often attend to take notes and track actions.' },
          { id: 'b', label: 'Take notes and follow up on action items so nothing slips', correct: true, explanation: 'Correct. The EA owns the follow-through after meetings.' },
          { id: 'c', label: 'Lead the meeting in the executive\u2019s place', correct: false, explanation: 'EAs support, they don\u2019t typically lead executive meetings.' },
          { id: 'd', label: 'Nothing \u2014 meetings are off-limits', correct: false, explanation: 'Meeting support is a core EA responsibility.' },
        ],
      },
    ],
  },
  {
    id: 'scenarios',
    title: 'Real-World Scenarios',
    shortTitle: 'Scenarios',
    subtitle: 'Practice how an effective EA handles common challenges',
    duration: '3 min',
    icon: 'MessagesSquare',
    objective: 'Apply EA judgment to realistic workplace challenges.',
    learnCards: [
      {
        title: 'How These Work',
        body: 'You\u2019ll read a realistic situation an EA might face, then choose how to respond. There is a best answer and an okay answer. After each choice, you\u2019ll see feedback explaining the reasoning \u2014 this is where real learning happens.',
        icon: 'Info',
      },
    ],
    quiz: [],
    scenario: {
      id: 's1',
      title: 'The Double-Booked Calendar',
      situation: 'You discover your executive is double-booked for two important meetings at the same time tomorrow. One is with a key investor, the other is an internal team strategy session.',
      context: 'You can\u2019t attend both. You need to resolve this now, not at the last minute.',
      choices: [
        {
          id: 'a',
          label: 'Cancel the internal strategy session without asking \u2014 investors are always more important.',
          best: false,
          ok: false,
          feedback: 'Not ideal. Unilaterally canceling an internal meeting can damage team trust and derail work. Always consult the executive on conflicting priorities.',
        },
        {
          id: 'b',
          label: 'Immediately email the executive a clear summary of the conflict with a proposed solution (reschedule one, or have you attend one), and ask for a quick decision.',
          best: true,
          ok: false,
          feedback: 'Excellent. You surfaced the problem early, proposed a solution, and let the executive decide on priorities. This is proactive ownership.',
        },
        {
          id: 'c',
          label: 'Wait until tomorrow morning to see if one meeting gets canceled on its own.',
          best: false,
          ok: false,
          feedback: 'Avoid. Waiting creates last-minute chaos and looks reactive. Proactivity means resolving conflicts as soon as you spot them.',
        },
        {
          id: 'd',
          label: 'Join one meeting yourself to take notes and represent the executive.',
          best: false,
          ok: true,
          feedback: 'Okay in some cases, but only if the executive agrees you can represent them. Don\u2019t assume \u2014 confirm first. This is a good backup, not the first move.',
        },
      ],
      takeaway: 'Great EAs spot conflicts early, propose solutions, and let the executive own the priority call. Driving fast with clear communication beats either acting alone or waiting.',
    },
  },
  {
    id: 'interview-prep',
    title: 'Interview Communication Prep',
    shortTitle: 'Interview Prep',
    subtitle: 'How to communicate confidently during Viva interviews',
    duration: '3 min',
    icon: 'MessageCircle',
    objective: 'Learn how to communicate clearly and confidently in a Viva interview.',
    learnCards: [
      {
        title: 'Use the STAR Method',
        body: 'When asked for an example, answer with Situation, Task, Action, Result. This keeps responses structured, concise, and evidence-based. Avoid rambling \u2014 aim for 60\u201390 seconds per answer.',
        icon: 'ListOrdered',
      },
      {
        title: 'Speak in Outcomes, Not Tasks',
        body: 'Instead of "I managed a calendar," say "I restructured my executive\u2019s week to free 8 hours for strategic work, which helped us ship a key project on time." Outcomes show impact.',
        icon: 'Target',
      },
      {
        title: 'Show the Values, Don\u2019t List Them',
        body: 'Don\u2019t just recite Viva\u2019s values. Weave them into your answers: describe a time you drove fast, empowered a teammate, embraced feedback, delighted a customer, or used your voice. Stories prove you live the values.',
        icon: 'Sparkles',
      },
      {
        title: 'Ask Good Questions',
        body: 'At the end, ask thoughtful questions: "What does success look like in the first 90 days?" or "How does the executive prefer to communicate?" This shows you think like an EA already.',
        icon: 'HelpCircle',
      },
      {
        title: 'Be Clear and Confident',
        body: 'Speak at a measured pace, make eye contact on camera, and don\u2019t over-apologize. If you don\u2019t know something, say how you\u2019d find out. Confidence + honesty wins.',
        icon: 'Mic',
      },
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What does the STAR method stand for?',
        options: [
          { id: 'a', label: 'Strategy, Tactics, Analysis, Results', correct: false, explanation: 'Not the standard interview framework.' },
          { id: 'b', label: 'Situation, Task, Action, Result', correct: true, explanation: 'Correct. STAR keeps answers structured and evidence-based.' },
          { id: 'c', label: 'Start, Think, Act, Review', correct: false, explanation: 'Close in spirit, but not the STAR method.' },
          { id: 'd', label: 'Subject, Theme, Angle, Resolution', correct: false, explanation: 'That is a writing framework, not an interview one.' },
        ],
      },
      {
        id: 'q2',
        question: 'Which is the stronger way to describe your experience?',
        options: [
          { id: 'a', label: '"I managed a calendar."', correct: false, explanation: 'This describes a task, not an impact.' },
          { id: 'b', label: '"I restructured my executive\u2019s week to free 8 hours for strategic work, which helped ship a key project on time."', correct: true, explanation: 'Correct. Outcomes show impact, not just activity.' },
          { id: 'c', label: '"I did a lot of admin work."', correct: false, explanation: 'Vague and task-focused.' },
          { id: 'd', label: '"I was responsible for things."', correct: false, explanation: 'Too vague to assess.' },
        ],
      },
      {
        id: 'q3',
        question: 'What should you do if you don\u2019t know an answer in the interview?',
        options: [
          { id: 'a', label: 'Guess confidently even if you\u2019re unsure', correct: false, explanation: 'Guessing can backfire and erode trust.' },
          { id: 'b', label: 'Explain how you would find out, honestly and calmly', correct: true, explanation: 'Correct. Confidence + honesty wins. EAs are resourceful.' },
          { id: 'c', label: 'Apologize repeatedly and move on quickly', correct: false, explanation: 'Over-apologizing reads as insecure.' },
          { id: 'd', label: 'Refuse to answer', correct: false, explanation: 'That shuts down the conversation.' },
        ],
      },
    ],
  },
];
