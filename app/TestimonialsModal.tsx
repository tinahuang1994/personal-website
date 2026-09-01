"use client";

import { useState, useEffect } from "react";

export type Testimonial = {
  role: string;
  zh: string[];
  en: string[];
};

// The complete 24-entry testimonial collection currently used by the website.
// The current 推荐语长图 is a shorter visual edit. Attributions are anonymized
// to role labels. English is adapted for natural reading, not word-for-word.
export const TESTIMONIALS: Testimonial[] = [
  {
    role: "Operations Lead at a U.S. Recycling Company",
    zh: [
      "昨晚经历了可能是我今年最颠覆认知的两个小时。",
      "其实我一直都想学 AI 和 Vibe Coding，在 YouTube 看了很多视频，在抖音也收藏了一堆教程。但每次收藏完就结束了，真正想开始的时候又不知道从哪下手。最后 AI 对我来说，基本还是个高级聊天机器人。",
      "这两个小时真的有种时间消失的感觉。明明上了整整两个小时，却感觉像过了两分钟。从 Share Screen 开始的那一刻起，我全程都在重复几句话：“这个也太好用了吧！”“这也能做到？”“我靠，原来还能这样？”",
      "最让我佩服的是，她不是照本宣科地教学，而是根据我的工作和实际需求，帮我定制了一堆马上就能落地的应用场景。很多之前觉得需要程序员才能完成的事情，原来在 0 Coding 基础的情况下也能自己做出来。",
      "课程结束的时候已经晚上 11 点了，虽然第二天还要早起上班，但我根本停不下来。下课后自己又折腾到凌晨两点多，越玩越兴奋。很多时候不是我们学不会，而是缺少一个真正能轻松带你入门的人。Tina 出品，必是精品。",
    ],
    en: [
      "Last night may have been the most eye-opening two hours I’ve had all year.",
      "I had wanted to learn AI and vibe coding for a long time. I watched plenty of YouTube videos and saved piles of tutorials, but that was usually where it ended. When I tried to begin, I had no idea what to do first. At that point, I was still using AI as little more than a better chatbot.",
      "Those two hours disappeared. We were in class for a full two hours, but it felt like two minutes. From the moment Tina began sharing her screen, I kept saying the same things: “This is so useful.” “Wait, it can do that?” “I had no idea you could work this way.”",
      "What impressed me most was how closely she shaped the class around my job and immediate needs. Nothing felt canned. She showed me several things I could use at work right away. I had assumed they would require a programmer. It turned out I could build them myself without a coding background.",
      "Class ended at 11 p.m. I had work early the next morning, but I could not stop. I kept tinkering until after 2 a.m. Sometimes the problem is not that we cannot learn. We just need someone who can make the first step feel manageable. If Tina is behind it, I know it will be good.",
    ],
  },
  {
    role: "Psychotherapist",
    zh: [
      "头脑风暴的几个小时，Tina 教 AI 全程干货，无一句废话，前半程教学讲原理，后半程让学员直接上手做。真正的起飞速度，感觉都不是飞机起飞，是火箭起飞，哈哈哈。之前觉得 AI 智能体是高级助理，这次的课让我感觉，它远不止助理，而是个人的最强智囊团，最强军团更贴切。想使用智能体，却又不知道如何下手的，找 Tina 学，绝对是快、准、狠。",
    ],
    en: [
      "We spent a few hours brainstorming, and Tina wasted no time. She explained the principles first, then had me building in the second half. Forget taking off. This felt like a rocket launch, haha.",
      "I used to think of an AI agent as a high-powered assistant. After this class, it felt more like having a whole strategy team behind me. If you want to try AI agents but do not know where to start, Tina gets you moving fast and cuts straight to what matters.",
    ],
  },
  {
    role: "Artist",
    zh: [
      "Tina 的课信息量非常大，在极短的时间内，帮我补齐了与 AI 之间长久以来的信息不对称。她对不同行业的适应性极高，能迅速判断哪些工具和方向跟我最适配。不仅 demo 的速度非常快，带我上手实践也极具效率，这次上课体验真的让我印象深刻（impressed）。",
      "我还看到了她带低龄段小朋友做的案例——甚至让我觉得有些震撼（blow mind）。非常感谢 Tina 如此慷慨（generous）地用这段时间，将自己长久以来的所学迅速打包分享给我们。",
    ],
    en: [
      "Tina packed a great deal into a short class. She caught me up on what AI can do now, adapted quickly to my field, and identified the tools and directions most relevant to me. Her demos moved fast, but I never felt left behind. She brought me into the hands-on work just as quickly. I left impressed.",
      "I also saw examples of the work she had done with young children, which honestly blew my mind. I am grateful that she was willing to pack years of learning into the short time we had.",
    ],
  },
  {
    role: "Business Professional",
    zh: [
      "我是通过 Tina 的朋友圈分享，慢慢了解到身边的人是如何开始接触 AI、学习 AI，并且真正把 AI 用起来的～Tina 在朋友圈给人的感觉是一个学习能力很强、也很愿意记录和分享的人，她的很多思考都让我觉得很有启发。所以这次出完长差之后，我终于在一个周末约上了 Tina 老师的 AI 起飞课。",
      "整个课程体验下来，我觉得非常有收获。Tina 不只是简单介绍工具怎么用，而是会很系统地带你理解应该从哪里开始，如何建立一个清晰的使用框架，以及在使用 AI 的过程中有哪些容易踩坑的地方需要提前避开。对我来说，这种“先帮你搭框架，再带你动手做”的方式特别重要，因为它会让人从一开始的迷茫和不确定，慢慢变得有方向感。",
      "我也很喜欢 Tina 在课堂中的陪伴感。她的状态非常 encouraging，会一步一步地带着你开始尝试。在介绍完方法和步骤之后，她还会真的陪你动手做出属于自己的东西，搭建出第一个 AI 产品。整个过程的体验很好，让人很快把 AI 使用和自己的工作、想法、生活连接起来，并且真正开始产生一些具体的成果。",
      "总的来说，这是一堂很适合 AI 入门和想真正开始行动的人参加的课。它不只是让你了解 AI，更重要的是帮你迈出第一步！",
    ],
    en: [
      "Tina’s WeChat posts were where I first saw people around me begin learning AI and putting it to work. She learns quickly, but she also takes the time to document and share what she is learning. Her reflections often gave me new ideas. After returning from a long business trip, I finally booked a weekend session with her.",
      "Tina did more than introduce tools. She showed me where to begin, how to create a clear framework for using AI, and which early mistakes to avoid. Building the framework first and then making something together turned my uncertainty into a sense of direction.",
      "She was encouraging throughout the class and guided me one step at a time. Once she had explained the method, she stayed with me while I built my first AI product. The process made it easy to connect AI with my work, ideas, and daily life.",
      "I would recommend the class to anyone who is new to AI and ready to begin. You leave with more than an understanding of the tools. You have taken the first step yourself.",
    ],
  },
  {
    role: "Weekend Builder",
    zh: [
      "雨天午后，龙井茶田旁，33coffee，开心果绿茶拿铁，Tina 把电脑推到我面前。从零开始安装，到一个模糊的想法，再到一个能跑出来的 demo，只用两小时。她坐在边上，每一步都带着你做，卡住了随时问。必要的入门技巧配合上各种现学即用的 skills，那种感觉像是有人在烟雨里给你撑了把伞——不慌，不惧，想往前探索的冲动反而更大了。",
      "到家的当晚，我就开始了自己的 AI 产品之旅。从焦虑的小白到步入跑道，只需要一场雨。想开始的人不需要犹豫太久，去找 Tina 起飞一次就好。",
    ],
    en: [
      "A rainy afternoon beside the Longjing tea fields. 33coffee. A pistachio matcha latte. Tina slid her laptop across the table. We went from installing everything from scratch to turning a vague idea into a working demo, all in two hours. She sat beside me and guided me through each step, ready whenever I got stuck. The basics, plus skills we could learn and use on the spot, felt like someone opening an umbrella over me in the drizzle. I stopped worrying and wanted to keep exploring.",
      "That same night, I began building my own AI product. One rainy afternoon took me from anxious beginner to the runway. If you have been waiting to start, do not overthink it. Spend one session with Tina and take off.",
    ],
  },
  {
    role: "Emerging Artist",
    zh: [
      "在当信息大爆炸的今天，互联网、身边时常提起 AI 大融合的，所以也自己想尝试并运用到生活或学习。但一直纠结 AI 落地，想自学各类教程越学越迷茫，看各类视频内容缺乏引导，总觉得没有编程基础就做不出产品。偶然参加了 Tina 老师的课程并沟通，给了我很大鼓励并改观，带我的零散想法慢慢整合切入，如何与 AI 沟通并建立工作文档，原本模糊的构思，再到通过 Codex 跑通网页制作。并且对于 AI 的参与生产和工作的概念也更加具像。教会我该如何正确的和 AI 沟通合理取得成果。真正重要的是学会怎么让 AI 为你的想法服务。上完课回家我就开始尝试做第二个项目了，所有有想法但苦于技术或行动拦住的人，真的一定要找 Tina 聊一次，进一步了解 AI。",
    ],
    en: [
      "AI was everywhere around me, and I wanted to use it in my life and studies. I tried teaching myself through tutorials, but the more I watched, the more lost I felt. Without a programming background, I assumed I could not build a product.",
      "In Tina’s class, she helped me gather my scattered ideas, showed me how to communicate with AI and create working documents, and used Codex with me to turn a vague concept into a running webpage. I could finally see how AI might fit into creative projects and everyday work. She taught me how to communicate clearly enough to get useful results and make AI work for my ideas.",
      "The moment I got home, I began my second project. Anyone with an idea who feels held back by technical skills or hesitation should talk with Tina.",
    ],
  },
  {
    role: "Academic Researcher in Economics",
    zh: [
      "学术界的同行和年轻学生们都非常积极地使用AI。我一方面也高度认同AI对于解放生产力的作用，另一方面在具体如何使用上又不是那么清楚。之前总是通过聊天框的方式跟AI一问一答，虽然也很有帮助，但是真到了跑数据的场景总也力有不逮。朋友圈里看到Tina的介绍非常心动，感谢她耐心的讲解，帮我在本地打开了claude code并且跑了起来。虽然真正完整运行一个研究项目肯定需要时间和磨合，但Tina关于项目管理等经验让我也逐渐有信心啦！",
    ],
    en: [
      "My academic peers and younger students were already using AI enthusiastically. I could see how much more productive it might make research, but I was not sure how to use it myself. I mostly talked with AI in a chat box. That helped, but I struggled whenever I wanted to analyze data.",
      "After reading Tina’s introduction on WeChat, I decided to try the class. With her patient guidance, I got Claude Code running locally. A complete research project will still take time and practice, but Tina’s experience with project management made the path feel possible and gave me confidence.",
    ],
  },
  {
    role: "Sustainability Professional",
    zh: [
      "身边真的有很多人做 AI，但 Tina 的朋友圈分享（包括 Prompt Engineering、RAG、Claude Code、Vibe Coding 等），是第一个让我觉得我也能上手开始的。她会系统地记录自己学习 AI 的过程，以及每一步的思考和实践，这对我来说非常有启发。",
      "我们有相似的 Sustainability 背景，所以她在用 Claude Code 做的一些小案例，对我来说特别有参考价值。我经常震惊于 Tina 对 AI 学习的热情和速度，她非常愿意动手尝试，just get your hands dirty，从不预设困难，在实践中不断发现问题，再逐步找到解决方法。",
      "在现在这样一个信息碎片化、AI 相关内容爆炸的时代，很多人会因为信息过载或者 FOMO，反而不知道从哪里开始，觉得 AI 门槛很高、不适合自己。如果你不知道怎么开始，我觉得她很适合陪你一起，从 0 到 1，帮你梳理你所在领域的实际需求和痛点，也能一起帮你规划学习路径，甚至一步步带你搭建出属于你的第一个 AI 小产品。",
    ],
    en: [
      "A lot of people around me talk about AI, but Tina’s WeChat posts about prompt engineering, RAG, Claude Code, and vibe coding were the first thing that made me feel I could try it myself. She documents how she learns, including the questions and experiments behind each step. I found that very helpful.",
      "We both have backgrounds in sustainability, so the small projects she builds with Claude Code feel especially relevant to me. I am struck by how quickly and enthusiastically she learns. She tries things, finds the problems through practice, and works out solutions as she goes.",
      "With so much fragmented AI information, it is easy to feel overwhelmed or unsure where to start. Tina can help you identify a real need in your own field, plan a learning path, and build your first small AI product one step at a time.",
    ],
  },
  {
    role: "First-Time AI Builder",
    zh: [
      "作为一个编程小白，以前基本只是拿 AI 当搜索引擎和百科。在 Tina 的朋友圈里追随了她从最开始入坑到起飞，仅仅一两个月就手搓出各种产品，有专业相关也有闲情逸致的，超级高效，还一路分享心得体会和干货。虽然信誓旦旦要向 tina 学习，但每次打开 claude 试了几下下又不了之，心底里可能还是一直感觉这门槛太高我搞不来。后来终于见面的时候当然是抓住机会让 tina 面授机宜！我跟 tina 说了几个我想过的很不成熟的、或许会有意思的想法，tina 说就直接跟 claude 聊天一样交流你的想法，然后一步一步就能做出来。我还是半信半疑，第二天早上 tina 直接搬了个电脑来，让我开口随意大小说，结果不出十几分钟，就搓出一个能用的 demo 了，我直接一个大为震惊。",
      "假如你已经暗戳戳想尝试 claude 已久，但又感觉觉难搞不来，我推荐你跟 tina 聊一下，她让一切步骤简单起来，把入门门槛直接抹平，让你丝滑起飞，并助你上翱翔之路！",
    ],
    en: [
      "As a complete beginner, I had mostly used AI as a search engine and encyclopedia. On WeChat, I watched Tina go from her first experiments to building all kinds of products in a month or two. Some were related to work, others were simply for fun, and she shared what she learned along the way.",
      "I kept promising myself that I would learn from her, but every time I opened Claude and tried a few things, I gave up. Deep down, I still thought the barrier was too high. When we finally met, I grabbed the chance to ask for her help.",
      "I told Tina about a few half-formed ideas. She said, “Talk to Claude the way you would talk to a person. Explain the idea, then build it one step at a time.” I was still skeptical. The next morning, she brought over a laptop, asked me to say whatever was in my head, and within fifteen minutes we had a working demo. I was stunned.",
      "If you have been meaning to try Claude but keep deciding it is too difficult, talk with Tina. She makes the setup simple, gets you through the first few steps, and makes the whole thing feel possible.",
    ],
  },
  {
    role: "Aspiring Product Manager",
    zh: [
      "跟着 Tina 的 GitHub 学 AI 工程是找不到方向的我的主心骨。她不讲玄学，直接给你框架，给你可以跑的项目提供想法，这些都是在她 build in public 的项目中可见，并且可以跟着她了解更多她做这些项目之间的心得。朋友圈里她随手分享的一些工作流截图，我截了又截，每次都觉得这个我也能做。但是真的跟她交流的时候，我觉得说原来做这个事情的时候，有这么多可以考虑的东西，有这么多我没有想象过的侧面。",
      "作为一个产品从业者，我之前也没有想过很多可以入手的方式，Tina 作为一个环境 / 咨询行业从业者的角度，确实给了我很多新的想法，通过和她的交流理解她的思路，一定能够丰富自己对于产品、对于做出事情的想法。我觉得造物能力就是把一个成品快速做出来，结果完整、逻辑清晰、美观实用，能够心安理得地发出去的状态。Tina 有这样的状态，也能传导给我们。",
    ],
    en: [
      "Tina’s GitHub gave me a path into AI engineering when I did not know where to begin. She shares practical frameworks and working project ideas, along with the thinking behind what she builds in public. I saved many of the workflow screenshots she posted on WeChat because each one made me think, “I could do that too.” Talking with her showed me how many decisions go into a finished product.",
      "I work in product, but Tina’s environmental and consulting background gave me several new ways to approach the work. To me, being able to create means making something complete, clearly reasoned, useful, and polished enough to share with confidence. Tina showed me what that standard looks like and how to work toward it.",
    ],
  },
  {
    role: "Cross-disciplinary Creator",
    zh: [
      "如果你还在为不懂怎么入门 vibe code 焦虑，那说明你还没见过真正的“物理外挂”。",
      "我的第一次陪跑体验：别提什么环境配置、代码基础，那是上个世纪的包袱。跟着她学，你只需要带着一个“模糊到你自己都心虚”的小想法坐下。全程“动口不动手”：按下录音键，像跟闺蜜吐槽一样倾诉你的灵感，她会带你用 AI 反向提问。且那些混乱的潜意识会被瞬间脱水、校准，直到 AI 比你亲妈还懂你的需求。",
      "在我眼里她的陪跑硬核黑科技：给 AI 装上“同声传译”。最爽的不是 AI 有多强，而是她教你如何“驯服”表达偏差。这种陪跑是把 AI 的“暴力计算”和你的“直觉灵感”强行接驳。是 Multi-Agents（多智能体）的指挥权。",
      "回家后我独立应用的暴力输出：把我痴迷已久的线性几何底层与技术分析股票交易体系缝合在了一起。纯手撸，直接产出一个我一直想做但完全技术不支持的专属交易助手。",
      "一句话总结：她是那个递刀的人，离开她的线下陪跑，我带走的不只是一个软件，而是一套“只要我有想法，世界就得为我变现”的底层逻辑。她不是在教你用 AI，她是直接把“屠龙宝刀”狠狠塞进你手里，还拍着你肩膀说：“刀快，随便砍。”",
    ],
    en: [
      "If you are anxious about getting into vibe coding, you have not met the right cheat code yet.",
      "In my first guided session, Tina told me to forget about environment setup and coding fundamentals. That was last-century baggage. All I needed was one little idea, vague enough that I was almost embarrassed to say it aloud. I barely touched the keyboard. I hit record and talked the way I would vent to a close friend. Tina showed me how to let AI question me in return. It pulled my messy, half-formed thoughts into focus until the AI seemed to understand what I wanted better than my own mother did.",
      "Tina’s secret weapon is that she acts like an interpreter between you and AI. She helps you say what you mean, then shows you how to direct several AI agents without losing your own instincts.",
      "When I got home, I used the method on my own. I combined the linear-geometry framework I had been obsessed with and a technical-analysis stock-trading system. I built the custom trading assistant I had always wanted but never had the technical skills to make.",
      "Tina is the person who puts the tool in your hand. I left with more than a piece of software. I left believing that if I could explain an idea, I could build it. She hands you the dragon-slaying sword, pats you on the shoulder, and says, “It’s sharp. Take a swing.”",
    ],
  },
  {
    role: "3D Printing Instructor",
    zh: [
      "天下AI一大抄，Tina老师所授的AI却能实现不仅起飞还包落地的全栈工程。",
      "为何？答曰：我们学的不是Vibe Coding而是Agentic Engineering。有了明确的目标，Claude Code或Codex就是我外接的双手。轻松实现自语音输入-图片生成-3D建模-渲染的流程。作为3D打印培训班老师，这极大节省了我对软件界面的学习成本。然后一键生成gcode，万物皆可打印而出！",
    ],
    en: [
      "Tina’s approach goes beyond making a quick AI demo. She teaches you how to build the full workflow and make it usable.",
      "We learned agentic engineering: a full workflow from voice input to image generation, 3D modeling, rendering, and G-code. With a clear goal, Claude Code or Codex became an extra pair of hands. As a 3D-printing instructor, I spent far less time learning each software interface.",
    ],
  },
  {
    role: "Artist & Designer",
    zh: [
      "之前接触 AI 的时候，使用过 nano banana 作为设计工作流中的提效工具，感知到潜力很大，正好有需求想做一款有定制功能的咖啡商店小程序，第一时间联系了 Tina 老师约了起飞 workshop。因为作为艺术生的我工作经历做过本地的 New media 的艺术项目，基本都是基于本地环境的展示即可，对于线上小程序的落地稳定性以及使用体验，有所顾虑，而且对于 AI 模型的上限没有一个准确的心理预期，感觉没底，在 Tina 老师的笃定的心理鼓励后，感觉有了完成的信心。",
      "在课上操作后，我最大的感受是 Tina 老师会让我建立起一套系统的思维去想如何去跟 AI 模型一起去筹划自己要做的产品，这样 AI 出品的要求就会跟我脑海里预期的想法贴近，这就像一个球场大脑，在建立起一套完整的战术体系和分配好核心明星球员的角色后，遇到什么问题再让 AI 调用球队经理去借用资源，比如交易来一个即插即用的全明星球员，最终回到人本身，参考完有价值的反馈后再进行下一步的决策。需要 AI 起飞方向感的小伙伴可以找 Tina 安全启航！",
    ],
    en: [
      "I had already used Nano Banana to speed up parts of my design workflow and could see the potential. When I wanted to build a coffee-shop mini app with custom features, I contacted Tina and booked a workshop.",
      "My previous new-media projects had mostly been local, physical installations. I was unsure whether I could make an online mini app stable and pleasant to use, and I did not know what current AI models could realistically handle. Tina’s confidence and encouragement made me believe I could finish it.",
      "Tina taught me to plan the product before asking AI to build it. That kept the result much closer to what I had in mind. It felt like developing court vision: set up the system, decide the roles of the star players, then bring in extra resources when a problem appears, like a manager trading for a plug-and-play All-Star. You still make the final decisions.",
      "If you want to build with AI but need a clearer sense of direction, Tina can help you get safely off the ground.",
    ],
  },
  {
    role: "Parent & Aspiring Content Creator",
    zh: [
      "之前心心念念想用 AI，却一直迟迟不敢上手，总觉得大多 AI 还是噱头大于实力，宣传吹得天花乱坠，实操拉胯。直到跟着 Tina 学习才恍然大悟，什么叫一人身后有一整个智囊军团。她不单实打实教干货，还把自己踩过的坑、走过的弯路全盘托出，帮我们避开雷区，零基础轻轻松松无痛入门 AI。日常大大小小的生活痛点、天马行空的脑洞创意，短短几分钟就能靠 AI 落地成真。更难得的是 AI 从不会评判吐槽，耐心引导、全程辅助。试问谁能拒绝一个聪慧全能、专属自己的 AI 助手呢？",
    ],
    en: [
      "I had wanted to try AI for ages but kept hesitating. Most of it looked like hype: dazzling claims and clumsy results. Learning with Tina showed me what it feels like to have an entire brain trust at my side.",
      "She teaches practical skills and openly shares the mistakes and detours she has already been through, which helps complete beginners avoid the same traps. Everyday frustrations and even the wildest ideas can become something tangible through AI in minutes.",
      "AI does not judge or complain. It keeps asking patient questions and helping you work. Who would not want a smart, capable AI assistant of their own?",
    ],
  },
  {
    role: "Beauty Industry Professional",
    zh: [
      "身边有很多人在聊 AI，也有很多人在分享各种工具和技巧，但真正让我觉得“原来我也可以开始”的，是和你交流的过程。你不会一味讲概念，而是会结合自己的实践经验，把复杂的内容拆解成普通人也能理解和上手的步骤。AI 应用、工作提效，还是具体项目落地，你分享的内容总能让我获得新的启发。",
      "我特别欣赏你对 AI 的探索方式。你不会停留在理论层面，而是愿意不断尝试、不断验证，把每一次踩坑和收获都记录下来。看你分享解决问题的过程，比直接看到结果更有价值。因为这些真实的思考和实践，让我明白 AI 并不是遥不可及的技术，而是一种每个人都可以逐步掌握的能力。",
      "在这个 AI 信息爆炸的时代，很多人都会因为信息太多而感到迷茫，不知道该学什么、怎么学，也不知道如何结合自己的工作和行业去应用。如果你也正处于这样的阶段，我觉得 Tina 会是一个很好的同行者。她不仅能够帮助你找到适合自己的学习方向，更能够从实际需求出发，一步步陪伴你完成从认知到实践、从 0 到 1 的过程，让 AI 真正成为解决问题和创造价值的工具。",
    ],
    en: [
      "Many people around me talk about AI and share tools or tips. Talking with Tina was what first made me think, “I can begin too.” She draws on her own experience to break complex ideas into steps that an ordinary person can understand and try. Whether the subject is an AI application, a faster way to work, or a specific project, I always leave with a new idea.",
      "I admire the way she explores AI. She keeps testing her assumptions and records both the mistakes and what she learns from them. Watching her solve a problem is more valuable than seeing only the finished result. AI stopped feeling like something beyond my reach. It felt like a skill I could learn over time.",
      "When the volume of AI information becomes overwhelming, Tina can help you choose a direction that fits your work and begin from a real need. She stays with you as you turn that need into something useful.",
    ],
  },
  {
    role: "Marketer & Video Creator",
    zh: [
      "今天的课对我来说，是一次“认知刷新”的体验。虽然一直知道AI能辅助创作，但在Tina老师指导下用Claude Code一步步把想法变成广告视频时，我真切感到：以前觉得需要整个团队费时几天才能做的事，现在一个人加上AI短时间就能完成。Tina老师没有停留在讲概念，而是边讲边带我用Claude Code跑通了一个制作视频的流程——从和AI传递初步想法，到调整优化，再到后续该如何进一步操作。",
      "作为一个对视频创作有兴趣但技术基础薄弱的人，这堂课给了我很大的信心。我意识到，懂AI协作并不需要成为程序员，而是要学会如何把需求清晰地说给AI听，让它帮我实现想法，AI能围绕我的实际场景，帮我找到最直接有效的路径，并且它的用途远比我想的还要多。",
      "经过今天，我已经开始思考怎么把今天学到的方法用到将来的工作中，这是这堂课给我最好的礼物。",
    ],
    en: [
      "Today’s class changed what I thought AI could do. I had always known AI could help with creative work, but under Tina’s guidance I used Claude Code to turn an idea into an advertising video. Something I thought would take a whole team several days could now be done by one person working with AI, in a fraction of the time.",
      "Tina taught while we built. We moved from giving AI a rough idea to revising the result and working out the next steps.",
      "I am interested in video creation but do not have a strong technical background. The class gave me confidence. Working with AI does not require becoming a programmer. You need to explain what you want clearly enough for AI to help you make it.",
      "I left already thinking about how to use the method in my future work. That was the best thing the class gave me.",
    ],
  },
  {
    role: "Incoming College Student",
    zh: [
      "从前一直觉得AI就是生成一些图片、整合一些资料的工具。但是今天的Tina姐姐课程让我认识到，真正先进的技术并不是狭隘地代替一些繁杂的体力活，反而能够引领着我去思考，拓宽思维边界。",
      "和AI进行一些问答的过程，不仅可以解答我的疑惑，而且能点出我自己平时难以注意到的细节。以我自己为例，在高考完能够获得这样一个机会去学习如何运用AI，眼下可以帮我更高效的选择专业和大学，从长远看则可以提高大学学习或工作的效率，减少了很多不必要的负担。",
      "总而言之，今天能够听到这样一堂课，和顶尖的人才交流，学会运用世界上最先进的技术，我觉得特别幸运啦。",
    ],
    en: [
      "I used to think AI was mainly a tool for generating images and collecting information. Today’s class changed what I thought AI could do. It can push me to think and help me notice possibilities I would otherwise miss.",
      "When I talk a problem through with AI, it answers my questions and points out details I might have missed on my own. Learning this just after the college entrance exam can help me make a better-informed choice about my major and university now. Later, it can also help me study and work more efficiently.",
      "I feel lucky to have learned with Tina and to have started using AI as a way to think, not only as a tool that produces things for me.",
    ],
  },
  {
    role: "English Teacher & Parent",
    zh: [
      "久闻 Claude（小龙虾🦞）、Open AI、Anthropic、Gemini、Grok 等国际超一流的 AI，借着送孩子去学习的名义，也算是第一次亲眼看到了这些应用可以给你带来的断代优势与无限可能。Tina 波士顿咨询公司的工作经历，让孩子能够瞬间把握到学习 AI 的本质与要解决问题的关键点所在。耶鲁和伯克利的精英教育，让 Tina 有着很纯真的、要帮你解决问题的执着劲——课后假如她没听到你的问题反馈，她会一个劲地问你遇到什么困难，不断跟进你与 Claude 的协同进展，提供思路。学会 Claude，人类所有的在线知识都将成为你的优质数据库！你会慢慢明白，Claude 是一个无情的、24 小时为你服务的应用，本质是与它协同作战。",
      "我很幸运，得到了再次可以与 Tina 面对面交流学习的机会。7080 后的家长接触后，终于可以不用焦虑被时代淘汰了——行动起来吧，带着孩子，与孩子，或者冲在孩子面前，特别是有管理科研任务的精英们！文科生的第二春，这话一点儿没错！",
    ],
    en: [
      "I had heard a great deal about Claude, our little “lobster” 🦞, as well as OpenAI, Anthropic, Gemini, and Grok. I brought my children to learn and, for the first time, saw up close how much of an advantage these tools could create.",
      "Tina’s experience at Boston Consulting Group helped the children get to the heart of the problems they were trying to solve. Her training at Yale and Berkeley shows in the rigor, but what stood out to me was her sincere, almost stubborn determination to help you solve the problem in front of you. If she does not hear from you after class, she keeps checking what went wrong, follows your progress with Claude, and offers new ideas.",
      "Once you learn Claude, the world’s online knowledge becomes a database you can draw from. Claude is tireless and available around the clock. The skill is learning how to work alongside it.",
      "I feel fortunate to have had another chance to learn with Tina face-to-face. Parents born in the 1970s and 1980s can stop worrying about being left behind. Get moving. Learn with your children, beside them, or a step ahead of them, especially if you are responsible for research projects. This may be a real second act for people from the humanities.",
    ],
  },
  {
    role: "AI Game Creator · Kaikai",
    zh: [
      "如果真的有自己的想法却不知道怎么行动，非常建议从学会真正的 AI 使用开始。这跨一步，Tina 老师可以用最轻松的方式教会你。",
    ],
    en: [
      "If you have an idea but are not sure how to move it forward, learning how to work with AI is a good place to start. Tina makes that first step feel easy.",
    ],
  },
  {
    role: "Climate Professional",
    zh: [
      "从确定跟 Tina 学习 AI Agent 开始，她就在课前了解我的背景、目标和工具配置，让正式上课的效率大大提高。",
      "课程把使用逻辑、操作方法和真实场景结合起来，结束时我们已经做出一个初步产出，我对 AI Agent 的理解更具体，也更有信心继续探索。",
    ],
    en: [
      "Before the session, Tina took time to understand my background, goals, and setup. That meant we could use our time together well from the start.",
      "She explained how AI agents work, then showed me how to use them on a problem from my own work. By the end, we had built a first working version. I finally understood what AI agents could do in practice, and I felt confident enough to keep exploring on my own.",
    ],
  },
  {
    role: "Fashion Designer & Solo Founder",
    zh: [
      "我是做服装设计的，也在经营自己的一人公司。以前只会用最简单的网页版 AI，生成的图很难真正应用，无论怎么描述需求都做不出能用的作品，还花了不少会员费。",
      "两个小时里，Tina 老师改变了我和 AI 交流的方式。我从 0 到能用 AI 生成自己满意的作品，也开始知道怎样让 AI 真正帮助我的一人公司。",
      "一个人用几句话就能控制高效的 AI 工具，完成过去需要更多人做的事，这是一种以前想象不到的工作方式。",
    ],
    en: [
      "I am a fashion designer running a one-person business. Before this, I had only used basic browser-based AI tools. No matter how carefully I described what I wanted, the images were rarely usable. I had also spent a fair amount on subscriptions without getting much from them.",
      "In two hours, Tina changed the way I work with AI. I went from starting at zero to making images I was happy to use, and I began to see how AI could help me run the business.",
      "One person can now give a few clear instructions to powerful AI tools and handle work that used to take several people. I had never imagined working this way before.",
    ],
  },
  {
    role: "Product Builder · Zoey_竹",
    zh: [
      "以前我遇到问题才临时问 Claude、Codex 或 ChatGPT，单次结果看起来不错，放回整个项目却经常方向不统一、前后接不上，很多时间花在重复补背景和返工上。",
      "Tina 老师帮我把零散想法整理成一套可以推进、迭代和复盘的项目框架。现在我会先搭框架，再跑流程，围绕关键节点持续迭代，对项目更有掌控感。",
    ],
    en: [
      "I used to open Claude, Codex, or ChatGPT only when a problem came up. The individual answers often looked good, but they did not hold together across a whole project. I spent a lot of time repeating context and redoing work.",
      "Tina helped me organize my scattered ideas into a project workflow I could keep using. Now I define the structure first, work through each stage, and improve the parts that matter as I go. The project feels connected, and I know what to do next.",
    ],
  },
  {
    role: "Anthony",
    zh: [
      "Tina 老师让我重新定义了人与 AI 的关系。她会根据每位学员的背景和需求定制内容和 slide，每一节课都能解决自己当下最需要的问题。",
      "这门课让我建立了一套能够长期受益的 AI 使用思维和习惯。现在从学习、工作到个人成长，我都会自然地借助 AI 提升效率，这是一种持续产生价值的能力。",
    ],
    en: [
      "Tina changed the way I think about working with AI. She tailored the material to my background and needs, so every session focused on the problem I most needed to solve at the time.",
      "The course gave me a way of thinking and a set of habits I can keep using. I now reach for AI naturally when I am learning, working, or setting personal goals. Those habits have stayed with me well beyond the class.",
    ],
  },
  {
    role: "今天也要跟AI好好说话",
    zh: [
      "现在网上关于 AI 的内容和信息更新很快，如果靠自己一点一点摸索，很容易花很多时间试各种工具、各种平台，或者不知道哪些是真正值得用的。有人帮你开一扇门，其实能少走很多弯路。",
      "如果你有一些代码经验，那我觉得这门课最大的价值是帮你建立一套理解 AI 的框架和语言。之后再遇到新的模型、新的平台，你会知道它们是用在哪个环节的，也更容易判断怎么把它们真正用起来。",
      "除了工具本身，我们还聊了很多更有意思的话题，比如 AI 擅长什么、哪些地方仍然离不开人的判断，以及 AI 对今后教育、工作方式的影响。",
      "很长时间我对 AI 抱着观望的态度，甚至觉得它被夸大了。但是与其一直凭自己的想象去判断 AI，不如真的上手去用，让它帮你做几个你熟悉的问题。很多原来的先入为主和偏见，都是在实践之后才慢慢被打破的。",
    ],
    en: [
      "AI changes so quickly that learning alone can mean spending hours trying tools and platforms without knowing which ones deserve your attention. A good guide can save you a great deal of trial and error.",
      "If you already have some coding experience, the greatest value of the course is the framework and language it gives you. When a new model or platform appears, you can place it in the larger picture and make a better call about where it is useful.",
      "We also went beyond the tools: what AI does well, where human judgment still matters, and how it may change education and work.",
      "For a long time, I stayed on the sidelines and sometimes thought AI was overhyped. Trying it on a few problems I already knew well changed my mind. Many of my assumptions only shifted after I used it myself.",
    ],
  },
];

export default function TestimonialsModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const eyebrow: React.CSSProperties = {
    fontFamily: "var(--font-inter), sans-serif",
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    color: "#B07D3A",
    margin: 0,
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          display: "inline-block",
          backgroundColor: "transparent",
          color: "#B07D3A",
          border: "1px solid #B07D3A",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          padding: "0.75rem 1.75rem",
          borderRadius: "40px",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        See all testimonials →
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(28, 28, 26, 0.55)",
            zIndex: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "3rem 1.5rem",
            overflowY: "auto",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="testimonials-panel"
            style={{
              position: "relative",
              backgroundColor: "#F5F2EC",
              borderRadius: "12px",
              maxWidth: "1000px",
              width: "100%",
              padding: "3rem",
              boxShadow: "0 20px 60px rgba(28,28,26,0.25)",
            }}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.5rem",
                background: "transparent",
                border: "none",
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "30px",
                lineHeight: 1,
                color: "#999891",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            {/* Header */}
            <p style={{ ...eyebrow, marginBottom: "1rem" }}>In their own words</p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 300,
                fontSize: "30px",
                lineHeight: 1.25,
                color: "#1C1C1A",
                margin: 0,
                marginBottom: "0.6rem",
              }}
            >
              They built it themselves. Here&apos;s how it felt.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#666660",
                margin: 0,
                marginBottom: "2.5rem",
              }}
            >
              Names anonymized to role. English on the right is an{" "}
              <em style={{ fontStyle: "italic", color: "#B07D3A" }}>AI-assisted translation</em>.
            </p>

            {/* Column headers */}
            <div
              className="testimonial-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2.5rem",
                paddingBottom: "0.75rem",
                borderBottom: "0.5px solid #DDD9D0",
                marginBottom: "1.75rem",
              }}
            >
              <p style={eyebrow}>原文 · Chinese</p>
              <p style={eyebrow}>English · AI-assisted translation</p>
            </div>

            {/* Testimonials */}
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "1.75rem",
                  paddingBottom: "1.75rem",
                  borderBottom:
                    i < TESTIMONIALS.length - 1 ? "0.5px solid #DDD9D0" : "none",
                }}
              >
                <div
                  className="testimonial-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2.5rem",
                  }}
                >
                  {/* Chinese */}
                  <div>
                    {t.zh.map((p, j) => (
                      <p
                        key={j}
                        style={{
                          fontFamily: '"Songti SC", "Noto Serif SC", serif',
                          fontSize: "15px",
                          lineHeight: 1.9,
                          color: "#666660",
                          margin: 0,
                          marginBottom: j < t.zh.length - 1 ? "0.75rem" : 0,
                        }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  {/* English */}
                  <div>
                    {t.en.map((p, j) => (
                      <p
                        key={j}
                        style={{
                          fontFamily: "var(--font-cormorant), serif",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: 1.85,
                          color: "#666660",
                          margin: 0,
                          marginBottom: j < t.en.length - 1 ? "0.75rem" : 0,
                        }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
                {/* Role */}
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#999891",
                    margin: 0,
                    marginTop: "1rem",
                  }}
                >
                  — {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .testimonials-panel {
            padding: 2rem 1.25rem !important;
          }
          .testimonial-row {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </>
  );
}
