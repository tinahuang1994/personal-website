export type ArticleSection = {
  zhTitle: string;
  enTitle: string;
  zh: string[];
  en: string[];
  callout?: boolean;
  highlights?: number[];
};

export type Article = {
  slug: string;
  category: string;
  date: string;
  zhTitle: string;
  enTitle: string;
  zhDek: string;
  enDek: string;
  sections: ArticleSection[];
};

export const ARTICLES: Record<string, Article> = {
  "august-2026": {
    slug: "august-2026",
    category: "Monthly notes",
    date: "August 2026",
    zhTitle: "这个 8 月，我更清楚自己想怎么工作",
    enTitle: "This August, I Got Clearer on the Work I Want",
    zhDek: "两次播客录制、持续回来的学员，以及一个来自家庭真实需求的项目，让我看清了自己最想继续做的工作。",
    enDek: "Two podcast recordings, returning clients, and one family project showed me what kind of work I want to do more of.",
    sections: [
      {
        zhTitle: "从教育者，慢慢走向共创型教练",
        enTitle: "From Teaching to Building Alongside People",
        zh: [
          "这个 8 月，我做了不少事，也更清楚自己想怎么工作。",
          "我还是喜欢教人。但比起讲完一整套知识，我更喜欢陪一个人解决一个真实的问题。我们一起把问题拆开，做出第一版，再看真实使用里还需要改什么。",
          "有些方法可以继续整理成课程和系统。有些项目则需要一段时间的共同推进。这个月，我越来越确定：我想把更多时间放在后一种工作上。",
        ],
        en: [
          "August gave me a clearer picture of how I want to work.",
          "I still enjoy teaching. What I enjoy most is working with one person on a real problem: breaking it down together, building a first version, then improving it after they use it.",
          "Some lessons can become courses or reusable systems. Other problems need more time and continued work. I want to make more room for those longer projects.",
        ],
      },
      {
        zhTitle: "创业三个月后，我录了两档播客",
        enTitle: "Three Months After Starting My Business, Two Podcasts Invited Me On",
        zh: [
          "我没有小红书，也没有抖音。平时对外表达，基本只有朋友圈。创业三个月后，两档播客主动找到了我。",
          "一档是 BCG 前同事新创办的播客。我们聊了四小时工作制、离开 BCG 以后的职业实验，也聊了 AI 教育和气候变化。另一档是腾讯碳中和创新中心的《不正经聊天》，我们聊普通人怎么开始用 AI，以及我在真实教学里看到的变化。",
          "两次录制让我第一次很具体地意识到：只靠朋友圈，我在做的事也会慢慢被人看见。",
          "两档节目都已完成录制。链接发布后，我会补在这里。",
        ],
        en: [
          "I am not on Xiaohongshu or Douyin. Almost everything I share goes to WeChat Moments. Three months after I started the business, two podcasts invited me on.",
          "One was a new show started by a former BCG colleague. We talked about my four-hour workday, the career experiments I tried after leaving BCG, AI education, and climate change. The other was a conversation with Tencent’s Carbon Neutrality Innovation Center about how ordinary people can begin using AI and what I have seen change in class.",
          "The invitations made something concrete for me: people had started finding my work even though I was only sharing it on WeChat Moments.",
          "Both conversations were recorded in August. Podcast links coming soon.",
        ],
        callout: true,
      },
      {
        zhTitle: "有些问题一两节就能解决，也有人一直回来",
        enTitle: "Some Clients Need Two Hours. Others Keep Coming Back",
        zh: [
          "经过几个月，我开始看到两种都很好的节奏。有人带着一个具体问题来，一两节课做出第一版，跑通以后自己就能继续。",
          "也有人做完一个项目，又带着新问题回来。我们一起走过五节、六节，甚至八节课。",
          "长期合作让我看见，学员带走的不只是眼前的作品。他们开始把同一种思考方法放进之后遇到的新问题里。高效起步和长期深入，并不冲突。",
        ],
        en: [
          "After a few months, I began seeing two patterns. A client might arrive with one clear problem, build a first version in a session or two, then continue alone.",
          "Other clients finish one project and come back with another. We may work together for five, six, or even eight sessions.",
          "When someone returns with a second project, I can see what has changed. They spot the problem sooner, choose a direction, and use AI with better judgment.",
        ],
      },
      {
        zhTitle: "深度陪伴以后，能力会走得比项目更远",
        enTitle: "What Clients Take Into Their Next Project",
        zh: [
          "Justin 没有代码背景。五节课里，他从把 AI 当成高级聊天工具，到做出库存扫描和查询原型。这个原型解决了困扰公司很久的问题，后来交给开发团队继续评估。他还做了互动年报看板和 AI 日报，第六节课也约好了。",
          "Roy 上了八节课。从没有做过一个完整项目，到做出游戏、小程序和数据看板。他还开始参与课程共创，负责给别人讲美术入门。",
          "我最在意的不是他们做出了多少个东西，而是他们遇到下一个问题时，已经知道怎么开始。真实项目会留下可迁移的能力。",
        ],
        en: [
          "Justin had no coding background. Over five sessions, he went from using AI mostly as a better chatbot to building an inventory scanner for a problem his company had dealt with for years. The prototype is now with the company’s development team for evaluation. He also built an interactive reporting dashboard and a daily AI brief, and we already have a sixth session planned.",
          "Roy worked with me for eight sessions. He went from never having finished a project to building games, small apps, and a data dashboard. He later began helping shape a course and teaching an introduction to art.",
          "By the time the next problem appears, they already know how to begin.",
        ],
        highlights: [2],
      },
      {
        zhTitle: "我开始实践一套很有效的学习方法",
        enTitle: "How I Now Learn With AI",
        zh: [
          "很多第二大脑教程会用 Codex 加 Obsidian 存资料、搜资料。我自己用下来，开始把它和“如何用 AI 学习”接在一起。",
          "AI 先读懂我的目标、起点和偏好，再设计学习路径。学习过程中，我会用费曼法和苏格拉底式追问，直到自己能讲清楚，再把新知识放进真实任务里，验证哪些判断成立。",
          "来源会被保存，新知识会和旧知识连接。经过验证的观点再写回知识库，让这一次学习接得上下一次。",
          "工具不是重点。重点是让阅读、研究、动手和教学形成一个越来越快的循环。这套方法，我已经拿自己完整验证过了。",
        ],
        en: [
          "Many second-brain setups use Codex and Obsidian to store and retrieve information. I started with the same tools and used them for a different purpose: learning.",
          "The system begins with my goal, what I already know, and how I like to learn. I explain new ideas in my own words and let AI question me until the gaps show. Then I use what I learned in a real task and see which ideas hold up.",
          "I keep the sources with the notes. New ideas connect to what I already know, and anything that survives testing goes back into the knowledge base for next time.",
          "The useful part is the loop between reading, research, building, and teaching. I have now tested the whole process on myself.",
        ],
      },
      {
        zhTitle: "8 月，我更清楚什么样的工作会给我能量",
        enTitle: "The Work That Leaves Me Wanting More",
        zh: [
          "我读了《人生设计课》，也用自己的学习系统把它完整学了一遍。读完以后，我更清楚哪些工作让我投入，哪些事情会给我能量。",
          "第一，陪一个人深度学习，看见对方把方法用进下一件事。第二，把反复有效的方法整理成系统。第三，被好奇心带着去学，学懂以后再分享出去。",
          "我以前常把“影响”想得很大。现在我觉得，影响世界也可以从一个具体的人开始。",
        ],
        en: [
          "I read Designing Your Life and used my own learning system to work through the book. It helped me see which kinds of work hold my attention and leave me wanting to do more.",
          "Three stood out: learning deeply with one person and watching them use the method again; turning an approach that keeps working into a system; and following my curiosity until I understand something well enough to teach it.",
          "I used to think impact had to happen at a large scale. Now I think it can begin with one person and one change that lasts.",
        ],
      },
      {
        zhTitle: "今年，我第一次以助教身份参与一门北大课程",
        enTitle: "Joining a Peking University Course as a Teaching Assistant",
        zh: [
          "今年，我会参与北大的“零碳社区的气候友好设计”。这门课程进入第四年，面向全日制和非全日制硕士、博士，共 3 学分。",
          "我会参与课程资料优化和教学支持。对我来说，这也是把过去的气候变化工作经验重新带回课堂。",
          "课程会在 9 月开始。我很期待重新站在气候、教育和实践交叉的地方。",
        ],
        en: [
          "This year I am joining Peking University’s Climate-Friendly Design for Zero-Carbon Communities as a teaching assistant. The three-credit course is in its fourth year and is open to full-time and part-time master’s and doctoral students.",
          "I will help improve the course material and support the teaching. It is also a chance to bring my earlier climate work back into the classroom in a different form.",
          "The course starts in September. I am looking forward to being back in a climate classroom.",
        ],
      },
      {
        zhTitle: "我还在共创一个家庭信息统筹项目",
        enTitle: "Building Around One Family’s Real Needs",
        zh: [
          "这个项目来自一个家庭的真实需求。我们一起梳理：家里的信息从哪里来，哪些需要被记住，哪些需要有人跟进。",
          "我们想解决的问题很具体：一个家庭的重要信息怎样才能被看见、分清轻重，再落到下一步行动。",
          "我负责把需求一步步做成系统，对方在真实生活里使用和反馈。我们一边用，一边改。这种项目共创，也是我接下来想继续做的事。",
        ],
        en: [
          "This project began with one family’s need to keep track of information and follow-ups. We mapped where information enters the household, what needs to be remembered, and what needs follow-up.",
          "The problem is specific: how can a family see important information, decide what needs attention first, and turn it into clear next steps?",
          "I am building the system around their needs. The family uses it in daily life and tells me what breaks or feels awkward. We improve it as we go. I want to do more projects this way.",
        ],
      },
      {
        zhTitle: "下一步，我想多做一点一对一项目共创",
        enTitle: "I Want to Build More Projects With People, One-on-One",
        zh: [
          "如果你有一个真实痛点，已经想把它做成一个产品，也希望有人陪你一起推进，可以来找我。",
          "项目由你主导。我陪你梳理问题、做出第一版，再把它推到真实使用里。可以先从一节课开始，合适的话，我们再继续。",
          "如果你有一个想了很久、还没有做出来的项目，可以给我写邮件。",
        ],
        en: [
          "If you have a real problem you want to turn into a product, email me.",
          "You lead the project. I help you frame the problem, build the first version, and improve it after you use it. We can start with one session and continue if it is useful.",
          "I would especially like to hear about the project you have been thinking about for a long time but have not built yet.",
        ],
        callout: true,
      },
    ],
  },

  "career-experiments": {
    slug: "career-experiments",
    category: "Career change",
    date: "August 2026",
    zhTitle: "我没有想清楚新职业，先做了一个个小实验",
    enTitle: "I Stopped Trying to Figure Out My Next Career",
    zhDek: "我离开 BCG 时，没有一张新职业路线图。几个月的小实验，给了我比 soul-searching 更具体的证据。",
    enDek: "I left BCG without a clear next step. A few months of small experiments gave me better evidence than soul-searching did.",
    sections: [
      {
        zhTitle: "职业转变很难只靠想明白",
        enTitle: "Thinking Wasn’t Getting Me Anywhere",
        zh: ["离开 BCG 以后，我花了很长时间做 soul searching。我反复问自己：下一份事业应该是什么？新的自己到底在哪里？", "我没有想出答案。后来读 Herminia Ibarra 的《Working Identity》时，我看到一个很直接的建议：当你还不知道下一份职业是什么，就用 test and learn。先做小实验，再根据真实反馈调整方向。", "行动会给你新的证据。这句话后来变成了我职业转型里最有用的提醒。"],
        en: ["After leaving BCG, I spent months trying to think my way into a new career. I kept asking: What should I do next? Who was I supposed to become?", "I got nowhere. Then I read Working Identity by Herminia Ibarra. Her advice was practical: when you do not know what comes next, test and learn. Try small experiments and let the results change your direction.", "Doing something gave me new evidence. That became the most useful rule in my career change."],
      },
      {
        zhTitle: "三个月，我做了八款产品",
        enTitle: "I Built Eight Products in Three Months",
        zh: ["今年二月，我开始学 AI 智能体。那时我没想过开课，只想把东西做出来。", "前三个月，我做了八款产品，里面有气候工具、职场工具、个人应用和网页艺术。每做完一个，我都会发朋友圈，还把学习路径、笔记、课程和案例整理到 GitHub。", "后来我才知道，这叫 Learning in Public 和 Building in Public。当时的我只是很自然地边学、边做、边记录，再把它讲给别人听。"],
        en: ["I started learning how to build with AI agents in February. I was not planning to teach. I simply wanted to make things.", "Over the next three months, I built eight products, including climate tools, workplace tools, personal apps, and web art. I shared each one with friends and put my learning path, notes, courses, and examples on GitHub.", "Only later did I learn the terms learning in public and building in public. At the time, I was following a natural rhythm: learn, make, document, explain."],
      },
      {
        zhTitle: "AI 起飞是别人先来找我的",
        enTitle: "A Friend Asked Me to Teach Him AI",
        zh: ["有一天，一个朋友问我能不能带他“AI 起飞”。那天下午，我叫上两个人去咖啡馆，带他们从零开始动手。", "之后，又有人主动来找我，也有人带着新项目回来。我才发现，我喜欢教 AI，而且这可以成为一份工作。", "快速学一个东西、把它做出来、再讲给别人听，原本就是我在 BCG 做专家时很重要的工作方式。身份变了，我做的事没有完全变。"],
        en: ["One day, a friend asked if I could teach him how to use AI. I invited him and another friend to a café that afternoon. We started from zero and built something together.", "More people began asking. Some returned with new projects. I realized that I liked teaching AI and that it could become real work.", "I had done a version of this work at BCG: learn a new climate topic quickly, find the central question, simplify the complexity, and explain it to people with very different backgrounds. The subject and setting changed. The way I worked did not."],
      },
      {
        zhTitle: "每个实验都回答一个小问题",
        enTitle: "Each Experiment Answered One Small Question",
        zh: ["做产品让我知道，我喜欢创造。公开记录让别人知道我在研究什么。咖啡馆里的第一次教学，又让我发现我喜欢带人把想法做出来。", "这些实验没有回答五年以后我要做什么，但它们已经告诉我下一步可以做什么。"],
        en: ["Making products showed me that I like creating. Sharing them told other people what I was exploring. That first class in a café showed me how much I enjoy helping someone make an idea real.", "The experiments did not tell me what I should be doing five years from now. They told me what to try next."],
      },
      {
        zhTitle: "我不急着把答案写死",
        enTitle: "I’m Leaving the Answer Open",
        zh: ["如果重新经历一次职业转变，我会少花一点时间在脑子里寻找新的自己，更早做几个小实验：做一个产品，教一个人，接一个真实问题。", "然后看事实。别人反复来找我做什么？哪些旧能力重新出现？我愿不愿意继续做？", "我没有先想清楚这份工作。我是做着做着，才走到了这里。"],
        en: ["If I went through another career change, I would spend less time looking for a new identity in my head. I would start sooner with a few small experiments: build a product, teach one person, take on one real problem.", "Then I would look at the evidence. What do people keep asking me to help with? Which old strengths keep resurfacing? Do I want to keep doing this?", "I did not think my way into this work. I found it by doing it."],
        callout: true,
      },
    ],
  },

  "roy-eight-sessions": {
    slug: "roy-eight-sessions",
    category: "Client story",
    date: "August 2026",
    zhTitle: "从 AI 小白，到用 AI 做出自己的游戏",
    enTitle: "How Roy Built His First Games With AI",
    zhDek: "八节课以后，Roy 做了几款轻度小游戏。更重要的是，他开始知道怎样把一个模糊想法说清楚、拆开，再和 AI 一起慢慢做出来。",
    enDek: "In eight sessions, Roy went from never finishing an AI project to building several small games. He also learned how to turn a rough idea into clear tasks, then test and revise the result.",
    sections: [
      {
        zhTitle: "开始之前",
        enTitle: "Before the First Session",
        zh: [
          "开始上课以前，我对 AI 的态度比较保守。虽然会关注一些消息，但没有系统学过，也没有做完过一个完整项目。",
          "当时我快要开始研究生阶段的学习，希望提高学习和做事的效率，却不知道从哪里开始。",
          "我当时比较需要有人带一下，告诉我第一步怎么走。",
        ],
        en: [
          "Before the class, I was cautious about AI. I kept up with the news, but I had never studied it in a structured way or completed a project with it.",
          "I was about to begin graduate school. I wanted to study and work more efficiently, but I did not know where to start.",
          "I needed someone to show me the first step.",
        ],
        highlights: [2],
      },
      {
        zhTitle: "从想法到作品",
        enTitle: "From a Rough Idea to a Working Game",
        zh: [
          "八节课里，我做了几款轻度小游戏，其中包括养花游戏《六朵花》。AI 帮我处理故事和脚本、测试地图、轻量建模和报告，我也做了小程序、数据看板和 AI 应用。",
          "这些项目让我练习把一个模糊想法说清楚、拆成任务，再判断和修改 AI 给出的结果。",
          "做出几个小游戏当然很有成就感，但更重要的是，我开始知道怎么把一个想法慢慢做出来了。",
        ],
        en: [
          "Over eight sessions, I built several small games, including a flower-growing game called Six Flowers. I used AI for story development and scripting, map testing, simple 3D modeling, and reports. I also made small apps, data dashboards, and other AI tools.",
          "Each project taught me to turn a rough idea into clear tasks, then review and revise AI’s output instead of accepting it as-is.",
          "Finishing those games felt great. I also learned how to turn an idea into something I could test, one step at a time.",
        ],
        highlights: [2],
      },
      {
        zhTitle: "当作品被别人看见",
        enTitle: "When Other People Played the Games",
        zh: [
          "朋友和测试者开始试玩我的游戏，也会告诉我哪里有趣、哪里还需要改。作品被别人真正用起来以后，我会更具体地看见下一步。",
          "后来我还参与了课程共创，并负责给别人讲美术入门。",
          "我学到的东西不一定只能自己使用。只要整理清楚，也可以分享给别人，让别人少走一点弯路。",
        ],
        en: [
          "Friends and testers started playing the games and telling me what was fun and what still needed work. Once other people were using what I had built, I knew much more clearly what to change next.",
          "I later helped shape a course and taught an introduction to art.",
          "I realized I could share what I had learned if I organized it clearly. That could save someone else a few wrong turns.",
        ],
        highlights: [2],
      },
      {
        zhTitle: "六朵花：让几个 AI 助手接力",
        enTitle: "Six Flowers: Letting AI Agents Hand Off the Work",
        zh: [
          "做《六朵花》时，我让几个 AI 助手分别处理不同任务，再把上一步的结果交给下一位继续。",
          "这个过程让我理解了 agent compounding：先想清楚任务和协作方式，AI 就不只是回答一个问题，而是可以接力参与整个制作流程。",
          "AI 不只是用来问问题的。如果提前想好任务和协作方式，它其实可以参与整个游戏制作过程。",
        ],
        en: [
          "For Six Flowers, I assigned different tasks to different AI agents, then passed each agent’s output to the next one.",
          "That was when agent compounding clicked for me: one agent’s work became the starting point for the next. Once I had mapped the tasks and handoffs, the agents could take part in the whole production process.",
        ],
        highlights: [2],
      },
      {
        zhTitle: "AI 做什么，人做什么",
        enTitle: "What AI Can Do. What I Still Decide",
        zh: [
          "做的项目越来越多以后，我开始分清楚哪些事情可以交给 AI，哪些判断还是要自己来做。",
          "AI 可以帮我解决技术问题和准备素材，但审美、风格和游戏手感仍然需要人来判断。",
          "我是美术专业出身。AI 解决了一部分技术门槛，我就可以把更多精力放在选择和调整上。",
        ],
        en: [
          "After a few projects, I started seeing more clearly which tasks AI could handle and which decisions were still mine.",
          "AI can help with technical problems and prepare assets. I still decide the art direction, style, and feel of the game.",
          "I trained as an artist. AI lowers some of the technical barriers, so I can spend more time choosing and refining.",
        ],
        highlights: [2],
      },
      {
        zhTitle: "哪些帮助真正用上了",
        enTitle: "What I Kept Using After Class",
        zh: [
          "Tina 的课程对我帮助比较大的地方是：她不只是告诉我工具怎么操作，还会带着我想清楚这件事应该怎么做。",
          "我们会用讨论模式把需求说得更具体，也会把模糊的感觉量化，直到我能清楚表达自己要什么。她很有耐心，也会跟进我有没有真的把方法用起来。",
          "我觉得自己学到的不仅是几个工具，更多的是一种思考和做事的方法。",
        ],
        en: [
          "Tina showed me how to use the tools, then helped me think through what I was actually trying to make.",
          "We talked through the brief and turned vague preferences into concrete criteria until I could explain exactly what I wanted. She was patient and followed up to see whether I was using the method on my own.",
          "I came away with a way to think through a problem and move the work forward. The tools were only one part of it.",
        ],
        highlights: [0, 2],
      },
      {
        zhTitle: "给刚开始的自己",
        enTitle: "What I Would Tell My Earlier Self",
        zh: [
          "如果回到刚开始的时候，我会告诉自己大胆一点。先把想法说清楚，再动手试，不用因为没有技术基础就害怕犯错。",
          "接下来，我还想继续做数据看板、本地部署和轻量设计。AI 已经不只是我偶尔打开的工具，而是进入了真实的工作流程。",
          "我会比较推荐那些愿意对 AI 保持开放态度，也愿意自己动手试一试的人来学。没有技术基础，其实也没那么可怕。最重要的是先开始。",
        ],
        en: [
          "If I could start over, I would be bolder. Get the idea clear, then try it. You do not need a technical background to start, and mistakes are part of the work.",
          "I want to keep building dashboards, trying local deployment, and working on smaller design projects. AI is no longer an occasional tool. It is part of my actual workflow.",
          "I would recommend the class to anyone who is curious about AI and willing to try building something. You do not need a technical background. You do need to start.",
        ],
        highlights: [2],
      },
    ],
  },

  "four-focused-hours": {
    slug: "four-focused-hours",
    category: "Solo business",
    date: "August 2026",
    zhTitle: "每天只工作 4 小时，我是怎么做到的？",
    enTitle: "How I Work Four Hours a Day",
    zhDek: "四小时够用，靠的是一个了解我的 AI、自动化系统和高效工作的能力。学习时间不算在里面。",
    enDek: "I give AI enough context to be useful, turn repeated work into systems, and decide what done means before I start. I count learning separately.",
    sections: [
      {
        zhTitle: "我说的是高效工作时间",
        enTitle: "What Counts as Work",
        zh: ["前段时间接受采访时，对方第一题就问：“听说你每天真正工作的时间不超过四小时，是真的吗？”", "是真的。我每天大约只安排四个小时的高效工作。上课、备课、处理业务，以及需要我集中判断的事情，都算在里面。我的一节课是两个小时，所以一天最多上两节。", "学习时间不算。这个我先讲清楚。"],
        en: ["In a recent interview, the first question was: \"Is it true that you work no more than four hours a day?\"", "Yes. I plan about four hours of focused work each day. Teaching, class prep, running the business, and work that needs my full attention all count. One class lasts two hours, so two classes fill the day.", "I count learning separately."],
      },
      {
        zhTitle: "我先决定自己想怎么生活",
        enTitle: "I Chose the Four-Hour Limit",
        zh: ["四小时这条线，是我主动定下来的。对我来说，一天集中工作四小时，基本已经到极限。", "我以前在 BCG 习惯过很长的工作时间。那段经历教会了我很多，但我不想长期维持那样的生活。刚开始用 AI 时，我也有过“额度焦虑”，总觉得使用额度没用完，停下来就像亏了。", "现在我给自己工作，有机会按想要的方式安排一天。这家公司还很年轻，我没有因为每天工作四小时就实现财富自由。我只是在认真测试，一家公司能不能允许我继续过想过的日子。"],
        en: ["The limit is deliberate. Four hours of concentrated work is about all I can do well in a day.", "At BCG, long days became normal. I learned a great deal there, but I did not want that rhythm to become permanent. When I first started using AI, I even felt anxious about wasting my usage allowance. If I still had time left in a usage window, stopping felt wasteful.", "Running my own business gives me the chance to arrange the day differently. The company is still young, and four-hour days have not made me financially independent. I am finding out whether I can build a viable business without giving up the way I want to live."],
      },
      {
        zhTitle: "第一步，让 AI 足够了解我",
        enTitle: "AI Starts With Context",
        zh: ["我一个人做研究、教学、课程、内容和业务管理。要在四小时里推进这些事情，AI 必须足够了解我，也要知道我正在做什么。", "它知道我现在做什么业务，课程里已经有哪些内容，也知道我喜欢用 PPT 学东西。我不用每次重新解释自己，也不用每项工作都从一张白纸开始。", "上下文足够以后，第一次给出的结果就更接近我要用的东西。"],
        en: ["I handle research, teaching, course design, content, and business operations on my own. If I want to move all of that forward in four hours, AI cannot start from a blank chat every time.", "My tools already know how the business works, what is in the curriculum, and that I often learn best through visual teaching material. I do not have to explain myself again for every task or start each project from scratch.", "That context gets the first draft much closer to something I can use."],
        highlights: [2],
      },
      {
        zhTitle: "再把重复工作接成系统",
        enTitle: "I Turn Repeated Work Into Systems",
        zh: ["一部分流程会自动完成，一部分会在我触发以后继续执行。公开发布、联系别人和最后的决定，仍然由我完成。", "我想学一个新主题时，知识工厂先把资料整理成我容易吸收的形式。我要备课时，AI 可以读取学员问卷和已有课件，帮我准备更贴近这个人的材料。经营看板和每周雷达则重新整理散落的信息，让我看见接下来最需要推进什么。", "这些工作每次都会发生。接进系统以后，我不用从头搜索、整理和解释。"],
        en: ["Some workflows run automatically. Others begin when I trigger them. I still publish, contact people, and make the final decisions myself.", "When I want to learn a subject, my knowledge system organizes the material into a form I can absorb. Before a class, AI can read the client’s questionnaire and the existing course material, then help me prepare for that person. My business dashboard and weekly review pull scattered information together and show me what needs my attention next.", "I do these jobs again and again. The systems keep me from searching, sorting, and explaining the same context from scratch each time."],
      },
      {
        zhTitle: "系统之外，我也练过怎么把工作做快",
        enTitle: "I Decide What Done Looks Like",
        zh: ["系统跑起来以后，我还是要决定今天最重要的结果是什么。", "BCG 训练了我快速进入一个新领域、抓住重点，再把复杂内容讲简单。开始一件事之前，我会先想清楚要交付什么，做到什么程度就够了。", "来回切换、反复解释和没有必要的修改会吃掉很多时间。AI 提高了执行速度，过去练出来的工作方法也让我少走很多弯路。"],
        en: ["Systems save time. I still decide what matters most that day.", "BCG trained me to enter a new field quickly, find the central question, and explain complex material simply. Before I start a task, I define what I am producing and how finished it needs to be.", "AI speeds up execution. Clear scope cuts context switching, repeated explanations, and revisions that do not improve the result."],
      },
      {
        zhTitle: "学习时间，我没有算进去",
        enTitle: "I Count Learning Separately",
        zh: ["工作和学习，对我来说是两种状态。我会读书、跟进 AI 的变化，也会研究怎么教得更好。这些学习最后会进入课程和业务，但我不需要在当天交付一个结果。", "我也很享受这个过程，所以没有把它算进四小时。如果把学习也算进去，我有时在电脑前的时间当然会超过四小时。", "四小时计算的是高效工作。学习有自己的时间。"],
        en: ["Work and learning feel different to me. I read books, keep up with AI, and study how to teach better. What I learn eventually appears in the business, but I do not need to turn it into a deliverable that day.", "I enjoy learning, so I keep it outside the four-hour count. If I included it, I would sometimes spend much longer at the computer.", "The four hours are for focused work. Learning has its own time."],
        callout: true,
      },
    ],
  },

  "justin-five-sessions": {
    slug: "justin-five-sessions",
    category: "Client story",
    date: "August 2026",
    zhTitle: "没有 Coding 背景。五节课后，他替老板解决了“多年来的痛点”",
    enTitle: "How Justin Built an Inventory Prototype in Five Sessions",
    zhDek: "Justin 第一次来时，AI 对他来说还是一个高级聊天机器人。五节课后，他做出的库存 Scanner 已经交给公司的开发团队继续评估。",
    enDek: "When Justin started, he mostly used AI for chat. Five sessions later, his inventory scanner was with his company’s development team for evaluation.",
    sections: [
      {
        zhTitle: "没有 Coding 背景，怎么做出一个交给公司开发团队的原型？",
        enTitle: "How Did You Build an Inventory Prototype Without a Coding Background?",
        zh: ["我发现公司不同场地一直在用不同的方法查询库存，不仅方式不统一，而且很不直观。以前面对这个问题，我的解决方式很简单：让大家用 Excel 查。", "这一次，我开始先研究真正的痛点是什么，然后跟 AI 一起不断打磨。最后，我做出了一个结合 Scanner 的库存查询 Demo。", "老板看完以后告诉我，这个东西解决了她多年来的痛点。公司后来把这个想法交给正式开发团队，评估是否放进新系统。", "几节课以前，我还是一个看着别人 vibe coding、担心自己在 AI 时代落伍的人。现在，我做出来的东西已经被公司认真考虑。那一刻很爽。"],
        en: ["Different locations in the company were using different ways to check inventory. The process was inconsistent and hard to use. My old answer would have been simple: tell everyone to look it up in Excel.", "This time, I started with the real problem and kept refining it with AI. I ended up with a demo that combined inventory search with a scanner.", "When I showed it to my boss, she said it solved a problem she had dealt with for years. The company sent the idea to its development team to evaluate for the new system.", "A few sessions earlier, I had been watching other people build with AI and worrying that I was falling behind. Now something I had made was being seriously considered at work. That felt amazing."],
        highlights: [2],
      },
      {
        zhTitle: "第一次来上课时，你觉得自己会用 AI 吗？",
        enTitle: "Did You Think You Already Knew How to Use AI?",
        zh: ["来上课之前，我其实觉得自己 AI 用得还可以。我会把 AI 当成浏览器，有问题就跟它聊天；工作中也会用一些 AI 插件配合 Excel。", "但网上越来越多人开始 vibe coding，而且很多人都说自己没有 coding 背景。我发现别人已经用 AI 做产品、做软件，而我还主要停留在跟 GPT 聊天。", "当时我没有明确想做某个 App，更多是一种危机感：AI 时代来了，我不应该落伍。现在回头看，那时候的我其实还没有真正开始用 AI。"],
        en: ["Before the class, I thought I was pretty good at using AI. I used it the way I used a browser: whenever I had a question, I opened a chat. I also used a few AI plug-ins with Excel at work.", "Then I kept seeing people build products and software with AI, often without coding backgrounds. I realized that I was still mostly talking to GPT while they were making things.", "I did not have a particular app in mind. I mostly felt that AI was moving fast and I did not want to fall behind. Looking back, I had not started building with AI yet."],
      },
      {
        zhTitle: "网上有那么多免费教程，你为什么还决定来上课？",
        enTitle: "Why Pay for a Class When Tutorials Are Free?",
        zh: ["我看过很多教程，也会去 YouTube 找 AI 和 vibe coding 的视频。但我后来发现，知道别人怎么做，和知道我应该怎么做，是两件不同的事。", "Tina 会直接针对我的需求做教学指导。我可以拿工作里真实遇到的问题、脑子里想做的东西来讨论，不用学完教程以后再猜它跟我有什么关系。", "我们讨论的不只是 AI，也会从我的工作、优势和职业发展去看方向。我开始意识到，就算一个人学会了 AI，接下来拿 AI 做什么，仍然是一个重要问题。"],
        en: ["I had watched plenty of tutorials and searched YouTube for videos about AI and vibe coding. Watching how other people built things did not tell me what I should build.", "Tina started with what I needed. I could bring a real problem from work or an idea in my head instead of finishing a tutorial and then trying to work out how it applied to my life.", "We also talked about my work, strengths, and career. Even after you learn the tools, you still need to decide what to use them for."],
      },
      {
        zhTitle: "除了库存 Scanner，你还做了什么？",
        enTitle: "What Else Did You Build?",
        zh: ["我开始做一个属于自己的个人 AI App，目标有点像《钢铁侠》里的 Jarvis。它还是半成品，但我想逐渐把自己的 AI 工具和系统整合进去。", "以前公司的年中报告主要用 PPT 或 Excel。我做了一个交互式 Dashboard，信息更直观。一位股东看完以后直接说，这次的东西比之前都清楚。", "我还把课上接触到的 Loop Engineering 用到学习里，做了一个持续运行的 AI 日报，跟进新概念、新技能和重要更新。", "我最开始来上课，是因为担心在 AI 时代落伍。后来，我给自己做了一个每天帮助自己不要落伍的系统。"],
        en: ["I started building a personal AI app inspired by Jarvis from Iron Man. It is still unfinished. Eventually I want it to bring all the AI tools and systems I use into one place.", "The company’s midyear reporting used to live mainly in PowerPoint and Excel. I built an interactive dashboard that made the information easier to understand. A shareholder said it was much clearer than the previous versions.", "I also used the loop-engineering approach from class to build a daily AI brief that tracks new concepts, skills, and important product updates.", "I came to class because I was afraid of falling behind. Then I built my own system for keeping up."],
        highlights: [3],
      },
      {
        zhTitle: "这些项目改变了你解决问题的方式吗？",
        enTitle: "Did the Projects Change How You Solve Problems?",
        zh: ["如果只看结果，好像是我多做了几个 Dashboard、一个 Scanner、一个 AI 日报和一个还没完成的 Jarvis。但更大的变化不是这些东西本身，是我解决问题的方式变了。", "以前我更像一个现有工具的使用者。遇到问题，我会想 Excel 能不能解决，现有系统能不能解决，应该找谁来做。", "现在我会先问，真正的痛点到底是什么？然后跟 AI 一起打磨：我们能不能直接创造一个解决方案？AI 改变了我的效率，也改变了我对自己能做什么的认知。"],
        en: ["I now have an inventory scanner, several dashboards, a daily brief, and a half-built Jarvis. More importantly, I approach problems differently.", "I used to think like a user of existing tools. Could Excel solve this? Could the current system handle it? Who should I ask to build it?", "Now I start by asking: What is the real problem? Then I work with AI to see if I can build the solution myself. AI has made me faster. It has also changed what I think I can make."],
        highlights: [2],
      },
      {
        zhTitle: "你现在怎样定义自己？",
        enTitle: "How Do You Describe Yourself Now?",
        zh: ["我越来越不想把自己定义成一个只做运营的人。我更愿意说：我是一个懂业务，而且可以把 AI 做出来的人。", "我没有 coding 基础，也不能独立完成所有正式软件开发。但我已经可以把很多业务需求快速做成 Demo 或 Prototype。公司可以先验证价值，再决定是不是交给开发团队。", "我很喜欢一句话：我没有 coding 基础，但现在的我，就是一个开发团队。"],
        en: ["I do not want to be seen as someone who only works in operations anymore. I understand how the business works, and I can turn an AI idea into something people can see and test.", "I still do not have a coding background, and I cannot build every production system on my own. But I can quickly turn business needs into demos and prototypes. The company can test the value before committing development resources.", "I like to put it this way: I have no coding background, but now I can work like a one-person development team."],
        highlights: [2],
      },
      {
        zhTitle: "如果有人问你，这个课值得上吗？",
        enTitle: "Was the Class Worth It?",
        zh: ["作为私心，我其实不希望他上。因为说不定未来某一天，他就会成为我的竞争者。但敞开心扉说：非常值得。", "网上有很多免费教程，我也看过很多。Tina 最特别的地方是，她不仅教你 AI，还会结合你这个人，帮你寻找真正感兴趣、真正适合的方向。", "我得到的不只是几个 AI 技能。我开始知道自己可以成为什么样的人，以及接下来应该往哪里走。这个东西，我觉得是无价之宝。"],
        en: ["My selfish answer is no. If someone takes the class, they may become my competitor one day. But yes, absolutely.", "There are countless free tutorials, and I watched many of them. What makes Tina different is that she starts with who you are, what you care about, and what you are good at, then teaches the tools around that.", "I learned more than AI skills. I began to see who I could become and where I wanted to go next. To me, that is priceless."],
        callout: true,
      },
    ],
  },

  "ai-month-one": {
    slug: "ai-month-one",
    category: "Building with AI",
    date: "April 2026",
    zhTitle: "一个月做了四个 AI 产品，我学到了什么",
    enTitle: "I Built Four AI Products in a Month. Here’s What I Learned",
    zhDek: "我不是工程师。一个想把 ChatGPT 用顺一点的小念头，把我带到了四个产品和一种新的学习方式面前。",
    enDek: "I am not an engineer. A small attempt to work better with ChatGPT led to four products and a very different way of learning.",
    sections: [
      {
        zhTitle: "下载，然后直接开始做",
        enTitle: "Download It and Make Something Small",
        zh: ["很多朋友问我 Claude Code 怎么入门。他们看到命令行，第一反应是这需要会写代码。其实不需要。", "我的建议很简单：下载以后，先做一件小事。等你卡住，再弄清楚为什么卡住，然后去读需要的内容。没有碰过东西以前，很多解释进不了脑子；有了具体问题以后，知识才粘得住。", "AI 的入门路径有很多。YouTube、系统课程、训练营和文档都可以，关键是找到符合自己学习方式的那一条。我自己最有效的方法，是先动手，再围绕问题学习。"],
        en: ["Friends often ask how to begin with Claude Code. The command line makes many of them assume they need to know how to code. They do not.", "My advice is simple: download it and try one small task. When you get stuck, work out why, then learn the piece you need. Explanations are hard to retain before you have touched the thing. Once there is a concrete question in your head, the material has somewhere to land.", "There are many good ways into AI: YouTube, courses, bootcamps, and documentation. The useful path is the one that fits how you learn. Mine begins with making, then follows the questions that appear."],
      },
      {
        zhTitle: "从你最熟的东西开始",
        enTitle: "Begin With What You Already Know",
        zh: ["第一个项目最好来自你最深的积累，而不是听起来最厉害的方向。", "我在 WRI 和 BCG 做了好几年国家气候规划。决定做第一个工具时，我直接进入这个领域。这个背景给我的不只是内容，还有质量判断标准。AI 写出一段气候承诺分析时，我能看出哪里对、哪里不够。", "你在自己的领域里也天然知道什么是好的。这个优势常常被低估。范围要小一点，尽快跑通，尽快完成。"],
        en: ["Your first project should come from the area you know best, even if another direction sounds more impressive.", "I had spent years working on national climate plans at WRI and BCG. When I chose my first tool, I went straight into that subject. The experience gave me more than content knowledge; it gave me a standard for quality. I could tell when an AI-generated analysis of a climate commitment was right and where it fell short.", "You have the same advantage in your own field. You already know what good work looks like. Keep the first scope small enough to finish and learn from."],
      },
      {
        zhTitle: "让 AI 来设计你的学习路径",
        enTitle: "Let the Work Shape the Learning Path",
        zh: ["我没有先做一张完整的学习路线图，因为我根本不知道自己应该按什么顺序学。", "实际发生的是：做一个小项目，遇到问题，就问 Claude 下一步应该补什么。它推荐一个课程或概念，我学完继续做，再遇到下一个问题。路线图就这样围绕真实工作长出来。", "每个概念出现的时机都刚刚好。我已经有上下文，也已经知道自己想解决什么，所以更容易记住。AI 很适合从你现在的位置出发，陪你学习怎么使用 AI。"],
        en: ["I did not begin with a complete curriculum because I had no idea what the right order should be.", "Instead, I built a small project and asked Claude what I needed to learn when a problem appeared. It suggested a course or concept. I studied that piece, returned to the project, and repeated the process. The learning path grew out of the work itself.", "Each concept arrived with context and a reason to care. That made it easier to remember. AI is especially good at meeting you where you are and helping you learn the next necessary thing."],
      },
      {
        zhTitle: "好想法很少在书桌前出现",
        enTitle: "Good Ideas Rarely Arrive at My Desk",
        zh: ["以前的工作大多是分析性的：发现问题、做分析、给建议。做产品以后，我越来越相信底层需要的是判断。", "判断来自自己的经历、选择和观察。它让你看出一个问题是不是真的值得解决，也让你知道一个结果虽然完整，却还是不对。AI 可以执行，但不能替你决定一件事感觉对不对。", "我最好的想法常常来自走路、休息和彻底离开工作的时候。我开始主动接触跟 AI 无关的东西：艺术、自然，以及只属于自己的生活经验。那里往往才是想法的源头。"],
        en: ["Much of my earlier work was analytical: identify the problem, run the analysis, make a recommendation. Building products made me pay closer attention to judgment.", "Judgment grows out of experience, choices, and observation. It helps you notice whether a problem is worth solving and whether a polished answer still feels wrong. AI can execute, but it cannot make that call for you.", "My best ideas often arrive while I am walking, resting, or fully away from work. I now make a point of spending time with things that have nothing to do with AI: art, nature, and experiences that belong only to my own life. That is where many of the ideas begin."],
      },
      {
        zhTitle: "先把那个让你不好意思的版本发出去",
        enTitle: "Share Before the Work Feels Finished",
        zh: ["刚开始时，我一直在等，觉得要到一个不丢人的版本才能发出去。", "后来我把作品分享出来，收到了很多消息。以前的同事、朋友和很久没联系的人，会告诉我这些东西给了他们什么触动。那些对话又变成新的连接、反馈和问题。", "你不知道分享会带来什么。早点让作品碰到真实的人，通常比一个人继续猜更有用。"],
        en: ["At first, I kept waiting for a version that would not embarrass me.", "When I finally shared the work, messages arrived from former colleagues, friends, and people I had not spoken with in years. They told me what the projects stirred in them. Those conversations became new connections, feedback, and questions.", "You cannot predict what sharing will bring. Letting real people encounter the work is usually more useful than continuing to guess alone."],
      },
      {
        zhTitle: "找到几位你信任的人",
        enTitle: "Find a Few People You Trust",
        zh: ["现在很多产品只靠一个人和 AI 就能做出第一版。我会让 AI 审产品决策、挑界面的问题，也真的会采纳它的建议。", "但我还是保留了一个很小的真人圈子：艺术家、产品经理、AI 工程师、数据科学家和视觉设计师。他们不只是给反馈，也是思维碰撞和灵感的来源。", "一个人做东西时，这几个人就是你的团队。入门的门槛比看起来低。更难的问题一直是：你想做什么，为谁做。"],
        en: ["One person working with AI can now build a convincing first version. I ask AI to review product choices and find problems in the interface, and I often use the feedback.", "I still keep a small circle of people around the work: an artist, a product manager, an AI engineer, a data scientist, and a visual designer. They do more than review the result. They bring different ways of seeing and give me people to think with.", "When you build alone, a few trusted people become your team. The technical entry point is lower than it looks. The harder questions remain: what do you want to make, and who is it for?"],
        callout: true,
      },
    ],
  },

  "ai-month-two": {
    slug: "ai-month-two",
    category: "Building with AI",
    date: "May 2026",
    zhTitle: "两个月了，我又学到了什么",
    enTitle: "Two Months In, the Tools Were No Longer the Hard Part",
    zhDek: "第二个月值得写的，不再是工具和技巧，而是灵感从哪里来、为什么要做，以及怎样在没有答案的时候继续。",
    enDek: "By the second month, the important lessons were less about tools and more about where ideas come from, why I make things, and how to continue without a clear answer.",
    sections: [
      {
        zhTitle: "保护让灵感出现的条件",
        enTitle: "Protect the Conditions That Let Ideas Appear",
        zh: ["最好的想法很少是在电脑前想出来的。Understory 的起点，是我在美发店染头发的一个下午。刷到日语里“木漏れ日”这个词时，我突然想：能不能做成一个东西，让人真正感受到这些词，而不只是读到定义？", "Smoke Story 则来自一次普通聊天。一位耶鲁同学是遥感专家，我们聊完以后，我重新想起自己在 WRI 时对遥感数据的兴趣，也想起加州大火带给我的冲击。那个画面很快变成了产品方向。", "一旦长期处在 problem-solving mode，那种突然被击中的感觉就很难出现。灵感和整个生活状态有关：有没有留白，有没有接触 AI 之外的东西，有没有真正休息。"],
        en: ["My best ideas rarely begin at the computer. Understory started during an afternoon at the hair salon. I came across the Japanese word komorebi, the light that filters through leaves, and wondered whether I could make something that helped people feel such words instead of merely reading their definitions.", "Smoke Story began with an ordinary conversation. A Yale classmate who works in remote sensing reminded me how much I had enjoyed that data at WRI. When I asked myself which image from recent years had stayed with me, the California wildfires came back immediately. The product direction followed.", "When I stay in problem-solving mode for too long, those flashes become rare. Ideas come more easily when I leave some time unclaimed, pay attention to things outside AI, and get enough rest."],
      },
      {
        zhTitle: "为什么做，会慢慢进入作品里",
        enTitle: "Why I Make Something Becomes Part of the Work",
        zh: ["我做的产品一开始都没有计划，回头看却自然落进了三个类别：气候智能、职场与个人工具、网页艺术与学习。", "True Zero 和 Smoke Story 来自多年气候工作的判断；NoThanks 来自对职场沟通的观察；Echo 和 Understory 则是我保存一种感受的新方式。", "《挽救计划》让我想留住那种冷、空旷、安静但不孤独的感觉。以前我可能写一段话，现在我做了 Echo，让一片星空跟着音乐呼吸。AI 给了我新的自我表达方式。", "这些项目最像我的地方，不在于功能，而在于驱动我动手的好奇心、经历和判断。"],
        en: ["None of the projects began as part of a plan, yet they gradually fell into three families: climate intelligence, workplace and personal tools, and web art and learning.", "True Zero and Smoke Story grew from years of climate work. NoThanks came from observing workplace communication. Echo and Understory gave me new ways to preserve a feeling.", "After reading Project Hail Mary, I wanted to hold on to its cold, spacious quiet, a solitude that did not feel lonely. In the past I might have written a paragraph. This time I made Echo, a night sky that breathes with music.", "The most personal part of these projects is not the feature list. It is the curiosity, experience, and judgment that made me begin."],
      },
      {
        zhTitle: "没有人有答案，也没关系",
        enTitle: "Nobody Had a Clear Answer, and That Helped",
        zh: ["有一次我去耶鲁校友会，本来是想找答案。后来发现，那些看起来走得很稳的人也在摸索。不是大家不够厉害，而是这个问题现在就没有确定答案。", "那段时间，我同时被很多方向拉扯：做硬件还是软件？要不要开始变现？怎么变现？每次接收太多外部信息，我自己的声音就会变小，灵感也跟着消失。", "减少输入以后，我又听得见自己真正想做什么。"],
        en: ["I once went to a Yale alumni gathering hoping to find an answer. Instead, I discovered that people who seemed steady were also working things out. The uncertainty was not a failure of expertise. The question simply did not have a settled answer yet.", "At the time, I felt pulled in several directions. Hardware or software? Start making money now or keep experimenting? How should the business work? The more outside advice I consumed, the harder it became to hear my own thinking.", "When I reduced the input, my ideas began to return."],
      },
      {
        zhTitle: "认识自己以后，还要主动出发",
        enTitle: "Self-Knowledge Still Needs Action",
        zh: ["现在会 vibe coding 的人很多。别人愿意来找你，往往不是因为你的工具更快，而是因为你的品位、判断和看事情的方式。", "但知道自己擅长什么，不会自动变成一份工作。AI 起飞并不是我做市场分析想出来的。朋友来问能不能帮他起飞，我就带他做了一遍。后来更多人来找我，我才意识到这件事对我很自然。", "我做的大多数东西，刚开始都没有明确的市场信号。我只是先顺着冲动做了出来，再看它带来什么。", "两个月了，我每天还是有不知道的东西。但那些不知道越来越具体：不再是“我完全不懂 AI 能做什么”，而是“这个问题，我还没想清楚”。"],
        en: ["Many people can now build quickly with AI. What makes someone seek you out is often your taste, judgment, and way of seeing the problem.", "Knowing your strengths does not turn them into work on its own. I did not discover AI coaching through a market analysis. A friend asked for help, so I taught one session. More people came, and I realized the work felt natural because it drew on abilities I already had.", "Most of my projects began without a clear market signal. I followed the impulse, made the thing, and watched what happened next.", "Two months in, there was still something I did not know every day. The questions were becoming more specific, though. I had moved from wondering what AI could do at all to wrestling with one concrete problem at a time."],
        callout: true,
      },
    ],
  },
};

export const ARTICLE_SLUGS = Object.keys(ARTICLES);
