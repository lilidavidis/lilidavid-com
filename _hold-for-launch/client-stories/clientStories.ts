export type ServiceTag = 'consulting' | 'facilitation' | 'coaching';

export const SERVICE_TAG_LABELS: Record<ServiceTag, string> = {
  consulting: 'Consulting',
  facilitation: 'Facilitation',
  coaching: 'Coaching',
};

export interface ClientStory {
  id: string;
  title: string;
  tags: ServiceTag[];
  clientSubtitle: string;
  challenge: string[];
  approach: string[];
  outcomes: string[];
}

export const clientStories: ClientStory[] = [
  {
    id: 'growing-organization-decisions',
    title: 'A growing organization where decisions kept falling through the cracks',
    tags: ['consulting', 'facilitation'],
    clientSubtitle: 'Social enterprise · ~40 people · Central Europe',
    challenge: [
      "The organization had grown quickly, but its structure hadn't kept pace. Responsibilities were ambiguous, decisions were revisited repeatedly, and leadership was stretched thin trying to hold everything together. People cared deeply about the mission, but day-to-day coordination had become exhausting.",
    ],
    approach: [
      'I started by listening — to the leadership team, but also to people across the organization who experienced the friction daily. What emerged was a pattern of informal authority filling the gaps left by unclear roles. Together, we redesigned key areas of the structure: clarifying domains, establishing decision-making agreements, and introducing regular coordination practices.',
    ],
    outcomes: [
      'Clearer ownership of decisions reduced the cycle of revisiting and second-guessing',
      'Leadership was able to step back from daily firefighting',
      'Teams reported feeling more confident acting within their roles',
    ],
  },
  {
    id: 'leadership-retreat-trust-direction',
    title: 'A leadership retreat that needed to rebuild trust and direction',
    tags: ['facilitation'],
    clientSubtitle: 'International NGO · distributed team · Western Europe',
    challenge: [
      "After a period of rapid change and some difficult departures, the leadership team needed to come together and realign. There were unspoken tensions, and the team struggled to have honest conversations about what wasn't working. Previous retreats had felt either too abstract or too conflict-averse to make a real difference.",
    ],
    approach: [
      'I designed a two-day session focused on creating the conditions for honest exchange — not by forcing vulnerability, but by structuring conversations that made it safe to surface disagreements. We moved between reflection, structured dialogue, and concrete decision-making, with enough space for people to digest what was emerging.',
    ],
    outcomes: [
      'The team named and addressed tensions that had been simmering for months',
      'Clear agreements were made about communication, roles, and mutual expectations',
      'Follow-up conversations became more direct and productive',
    ],
  },
  {
    id: 'founder-leadership-coaching',
    title: 'A founder whose leadership style was creating the very problems they wanted to solve',
    tags: ['coaching'],
    clientSubtitle: 'Tech company · founder & leadership team · Northern Europe',
    challenge: [
      'The founder was deeply committed to building a collaborative culture, but their habits under pressure — stepping in too quickly, holding too much, sending mixed signals about autonomy — were unintentionally undermining it. The team had learned to wait for direction rather than take initiative, and resentment was quietly building.',
    ],
    approach: [
      "Through one-to-one coaching over four months, we worked on building the founder's awareness of these patterns and their impact. We also explored what was driving the behaviour — often a mix of care, anxiety, and deeply held beliefs about responsibility. Alongside the coaching, I worked briefly with the leadership team to create space for more honest feedback.",
    ],
    outcomes: [
      'The founder began delegating more effectively and intervening less',
      'Team members started stepping into decisions with more confidence',
      'Communication across the leadership group became noticeably more open',
    ],
  },
];
