export interface BlogSection {
  type: "paragraph" | "heading" | "list";
  content: string | string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  date: string;
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-instagram-reach-dropped",
    title: "Why Your Instagram Reach Dropped (And What to Do About It)",
    category: "Social Media",
    readTime: "4 min read",
    excerpt:
      "Reach drops happen for specific reasons. Here is how to diagnose the problem and fix it.",
    date: "2025-05-12",
    content: [
      {
        type: "paragraph",
        content:
          "If your Instagram reach has been declining lately, you are not imagining it. A lot of brands and creators are seeing the same thing. The platform has shifted significantly over the past year, and the strategies that worked in 2022 or 2023 just do not perform the same way anymore.",
      },
      {
        type: "paragraph",
        content:
          "Here is what is actually happening and what you can do about it.",
      },
      {
        type: "heading",
        content: "The algorithm prioritizes sends and saves over likes",
      },
      {
        type: "paragraph",
        content:
          "Instagram's ranking system has evolved. The signals that matter most now are shares (people sending your post to others) and saves (people bookmarking it for later). Likes and comments still count, but they carry less weight than they used to.",
      },
      {
        type: "paragraph",
        content:
          "If your content is getting decent likes but low saves and shares, that is a sign the algorithm is limiting your reach. The content might be fine but it is not hitting the \"I need to remember this\" or \"my friend needs to see this\" threshold.",
      },
      {
        type: "paragraph",
        content:
          "Fix: Create content that is genuinely useful or genuinely surprising. Tutorials, comparisons, hot takes, and practical tips tend to drive saves. Content people want to share is usually funny, relatable, or gives someone else a relevant reference point.",
      },
      {
        type: "heading",
        content: "Posting inconsistency kills reach faster than anything",
      },
      {
        type: "paragraph",
        content:
          "The algorithm rewards consistency in a very literal way. When you go quiet for a week and then post again, Instagram has to re-learn your content's relevance to your audience. You essentially restart the distribution process each time.",
      },
      {
        type: "paragraph",
        content:
          "This does not mean you need to post every single day. It means you need to pick a cadence and stick to it. Three times a week, every week, beats seven posts one week and nothing the next.",
      },
      {
        type: "heading",
        content:
          "Reels are still being pushed harder than carousels and static posts",
      },
      {
        type: "paragraph",
        content:
          "Instagram is competing with TikTok for short-form video attention, and that means the platform still gives Reels a distribution advantage. If your account is mostly static posts, your reach ceiling is lower than an account using a mix of Reels and carousels.",
      },
      {
        type: "paragraph",
        content:
          "That said, carousels often outperform Reels on saves, which makes them excellent for educational content. The best approach is a mix: use Reels for reach and discovery, use carousels for saves and depth.",
      },
      {
        type: "heading",
        content: "Your posting time matters more than most guides suggest",
      },
      {
        type: "paragraph",
        content:
          "Generic advice says \"post when your audience is most active.\" That is true, but the more specific version is: post during the window when your audience is active and bored enough to explore. Early morning before work, during lunch, and late evening tend to work well for Indian audiences, but test your own data in Instagram Insights.",
      },
      {
        type: "heading",
        content: "One quick fix to try this week",
      },
      {
        type: "paragraph",
        content:
          "Look at your last 20 posts and sort by saves. Find the top three. What do they have in common? Format, topic, style, length? Make your next five pieces of content deliberately similar to those top performers. Then check your reach data two weeks later.",
      },
      {
        type: "paragraph",
        content:
          "Reach recovery is rarely about one magic change. It is about identifying what is already resonating and doing more of it, deliberately.",
      },
    ],
  },
  {
    slug: "seo-for-small-businesses-india",
    title: "SEO for Small Businesses in India: Where to Actually Start",
    category: "SEO",
    readTime: "5 min read",
    excerpt:
      "Most SEO guides are written for US businesses. Here is what actually matters if you are operating in India.",
    date: "2025-04-28",
    content: [
      {
        type: "paragraph",
        content:
          "Search engine optimization has a reputation for being complicated. Most of the guides online make it worse, because they are written for businesses operating in markets like the US or UK with completely different competitive dynamics.",
      },
      {
        type: "paragraph",
        content:
          "If you run a small business in India and you want to show up on Google, here is where to actually start.",
      },
      {
        type: "heading",
        content: "Step one: Get your Google Business Profile in order",
      },
      {
        type: "paragraph",
        content:
          "If your business has a physical location or serves customers in a specific area, your Google Business Profile (formerly Google My Business) is the highest-impact thing you can work on. It determines whether you show up in local search results and on Google Maps.",
      },
      {
        type: "paragraph",
        content:
          "Make sure your profile has: accurate name, address, and phone number; your actual business hours; a description that includes what you do and where you operate; and recent photos. Ask your existing customers to leave reviews. Even five genuine reviews will make a real difference.",
      },
      {
        type: "paragraph",
        content:
          "This takes maybe three hours to do properly and the results show up within weeks. Most businesses skip it or set it up halfway and leave it.",
      },
      {
        type: "heading",
        content:
          "Step two: Write content that matches how your customers actually search",
      },
      {
        type: "paragraph",
        content:
          "People in India often search differently than the keyword tools assume. They mix Hindi and English, they search for hyperlocal terms, and they use specific colloquial phrases that a non-Indian keyword researcher would never think to include.",
      },
      {
        type: "paragraph",
        content:
          "Spend an hour writing down every question your customers have asked you. Every problem they came to you with. Every comparison they were trying to make. Those are your keywords. Write one solid, helpful piece of content for each of them.",
      },
      {
        type: "paragraph",
        content:
          "Do not try to rank for broad terms like \"digital marketing services\" when you are just starting out. Target specific, lower-competition phrases where you can realistically appear in the top five results.",
      },
      {
        type: "heading",
        content: "Step three: Fix the basics on your website",
      },
      {
        type: "paragraph",
        content:
          "Before worrying about link building or advanced tactics, make sure the fundamentals are in place. Your site should load in under three seconds on mobile. Every page should have a clear, unique title tag. Your most important pages should be no more than two clicks from your homepage.",
      },
      {
        type: "paragraph",
        content:
          "Run your site through Google's PageSpeed Insights and fix whatever it flags as high priority. This is free and takes an afternoon.",
      },
      {
        type: "heading",
        content:
          "The thing most small businesses ignore: internal linking",
      },
      {
        type: "paragraph",
        content:
          "Internal links are links between pages on your own website. They help Google understand which pages are most important and they pass what SEO professionals call \"link equity\" between your content.",
      },
      {
        type: "paragraph",
        content:
          "Most small business websites have pages that exist in isolation. Your services page does not link to your blog posts. Your blog posts do not link to your contact page. This is leaving free value on the table.",
      },
      {
        type: "paragraph",
        content:
          "Spend time going through your content and adding relevant links between pages. If you have a blog post about Instagram marketing, link it to your social media management service page. If you have a case study, link it from both your homepage and your services page.",
      },
      {
        type: "heading",
        content: "What not to waste time on early",
      },
      {
        type: "paragraph",
        content:
          "Link building campaigns, technical SEO audits with 200-line reports, and social media signals are real factors, but they matter far less than getting the basics right first. Most small businesses in India are not competing against thousands of highly-optimized pages. They are competing against other businesses that have also ignored their SEO entirely. You can gain real ground quickly just by doing the fundamentals well.",
      },
      {
        type: "paragraph",
        content:
          "Start with Google Business Profile, write useful content for the questions your customers actually ask, fix your site speed, and add internal links. Revisit everything else in six months.",
      },
    ],
  },
  {
    slug: "meta-ads-2025-what-changed",
    title: "Meta Ads in 2025: What Changed and How to Adapt",
    category: "Paid Ads",
    readTime: "6 min read",
    excerpt:
      "Manual targeting is becoming less effective. Here is how to work with the new Meta ads system instead of against it.",
    date: "2025-04-10",
    content: [
      {
        type: "paragraph",
        content:
          "If you have been running Meta ads for a few years, the platform you are operating on in 2025 is meaningfully different from what it was in 2021 or even 2023. The changes are not subtle tweaks. They represent a fundamental shift in how you should be thinking about advertising on Facebook and Instagram.",
      },
      {
        type: "paragraph",
        content: "Here is what has changed and what to do about it.",
      },
      {
        type: "heading",
        content: "Advantage+ is not just an option anymore",
      },
      {
        type: "paragraph",
        content:
          "Meta's Advantage+ suite, which automates large chunks of campaign setup and targeting, has moved from a test feature to the platform's recommended approach. Meta is actively steering advertisers toward it, and the data increasingly suggests it performs well for most businesses once the creative quality is there.",
      },
      {
        type: "paragraph",
        content:
          "The shift: traditional manual targeting, where you specify detailed interest categories and demographic ranges, is becoming less reliable. Signal loss from iOS privacy changes has made precise manual targeting less accurate, and Meta's AI systems have gotten good enough at finding audiences that manual constraints often limit performance.",
      },
      {
        type: "paragraph",
        content:
          "What this means practically: give the algorithm more room to work. Broader target audiences tend to outperform narrow ones in 2025. If you have been targeting \"women, 25-34, interested in yoga and sustainable fashion,\" try opening that up and letting Advantage+ find the right people instead.",
      },
      {
        type: "heading",
        content: "Creative is now the targeting",
      },
      {
        type: "paragraph",
        content:
          "This is the most important strategic shift in Meta advertising right now. When the algorithm has the freedom to find audiences, it uses your creative to determine who to show your ads to. A video ad that features a 28-year-old woman talking about a product will naturally be surfaced to similar users. An ad with bold, high-energy visuals will reach different people than a calm, informational one.",
      },
      {
        type: "paragraph",
        content:
          "The implication is that creative decisions are now audience decisions. Your headline, your opening two seconds of video, your visual style: these determine who sees your ads as much as any targeting selection you make.",
      },
      {
        type: "paragraph",
        content:
          "Practical action: brief your creative around specific audience personas, not just product features. Make ads that feel native to the feed. If your ads look like ads, they perform like ads (which is to say, poorly).",
      },
      {
        type: "heading",
        content: "Build a testing system, not just test campaigns",
      },
      {
        type: "paragraph",
        content:
          "Most advertisers A/B test, but in a disorganized way. They test two headlines at the same time as two audiences and two placements, and then cannot tell what actually drove the difference.",
      },
      {
        type: "paragraph",
        content:
          "A proper testing framework isolates one variable at a time. In the first two weeks of a campaign, test three to four creative concepts against the same audience and budget. Let the winner emerge. Then, once you have a winning creative, test variations of it: different headlines, different hooks, different formats.",
      },
      {
        type: "paragraph",
        content:
          "This compound testing approach means each month your creative is getting incrementally better, and you have data to explain why.",
      },
      {
        type: "heading",
        content: "Budget and bidding in 2025",
      },
      {
        type: "paragraph",
        content:
          "Automated bidding strategies like Advantage Campaign Budget have improved significantly. For most businesses, letting Meta distribute budget across ad sets outperforms manually allocating specific amounts to each.",
      },
      {
        type: "paragraph",
        content:
          "The exception: if you have one ad set that is dramatically outperforming others, it sometimes makes sense to manually increase its budget rather than waiting for the system to redistribute. Watch your cost per result daily in the first two weeks and adjust accordingly.",
      },
      {
        type: "heading",
        content: "A practical starting point",
      },
      {
        type: "paragraph",
        content:
          "If you are setting up a new campaign right now: start with one Advantage+ Shopping or Traffic campaign, three to five creative concepts tested against a broad audience, Advantage Campaign Budget on, and a cost per result target that is realistic based on your margins.",
      },
      {
        type: "paragraph",
        content:
          "Give it two weeks minimum before drawing conclusions. Meta's algorithm needs time to optimize, and shutting down a campaign after three days because the first results look expensive is one of the most common and costly mistakes advertisers make.",
      },
      {
        type: "paragraph",
        content:
          "The brands winning on Meta in 2025 are not the ones with the most sophisticated targeting setups. They are the ones consistently producing high-quality creative and giving the algorithm room to work.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
