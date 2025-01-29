import React, { useState } from 'react';
import { Brain } from 'lucide-react';

const STOIC_QUOTES = [
  "Focus on what you can control, accept what you cannot.",
  "The obstacle is the way - view challenges as opportunities for growth.",
  "Your perception shapes your reality - choose wisdom over reaction.",
  "Live according to nature and reason, not impulse.",
  "Wealth lies not in having many possessions, but in having few wants.",
  "The best revenge is to be unlike the one who caused the injury.",
  "External events are neutral; it's our judgment that assigns them value.",
  "True happiness comes from virtuous action, not from pleasure.",
  "What stands in the way becomes the way.",
  "Begin each day by telling yourself: today I shall meet with interference.",
  "The key is to keep company only with people who uplift you.",
  "Waste no more time arguing about what a good person should be. Be one.",
  "You have power over your mind - not outside events. Realize this, and you will find strength.",
  "Accept the things to which fate binds you, and love the people with whom fate brings you together.",
  "The happiness of your life depends upon the quality of your thoughts.",
  "When you arise in the morning, think of what a precious privilege it is to be alive.",
  "Do not act as if you were going to live ten thousand years. Death hangs over you.",
  "It's not what happens to you, but how you react to it that matters.",
  "Don't explain your philosophy. Embody it.",
  "The best answer to anger is silence.",
  "If it is not right, do not do it. If it is not true, do not say it.",
  "Be tolerant with others and strict with yourself.",
  "Life is very short and anxious for those who forget the past, neglect the present, and fear the future.",
  "He who fears death will never do anything worthy of a living man.",
  "No person has the power to have everything they want, but it is in their power not to want what they don't have.",
  "The greatest power we have is the power of choice.",
  "First say to yourself what you would be; then do what you have to do.",
  "If you want to improve, be content to be thought foolish and stupid.",
  "Only time can heal what reason cannot.",
  "The more we value things outside our control, the less control we have.",
  "To be calm is the highest achievement of the self.",
  "What you think about yourself is much more important than what others think of you.",
  "The soul becomes dyed with the color of its thoughts.",
  "Luck is what happens when preparation meets opportunity.",
  "We suffer more often in imagination than in reality.",
  "Associate with people who make you better.",
  "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it.",
  "The best way to avenge yourself is to not be like that.",
  "Difficulty shows what people are.",
  "No great thing is created suddenly.",
  "Seek not the good in external things; seek it in yourselves.",
  "While we wait for life, life passes.",
  "Life is long if you know how to use it.",
  "Sometimes even to live is an act of courage.",
  "He who has a why to live can bear almost any how.",
  "The wise person acts but does not take credit.",
  "What is divine escapes the eyes of the flesh.",
  "The whole future lies in uncertainty: live immediately.",
  "We are more often frightened than hurt; and we suffer more from imagination than from reality.",
  "True good fortune is what you make for yourself.",
  "Nothing, to my way of thinking, is a better proof of a well ordered mind than a person's ability to stop just where they are and pass some time in their own company.",
  "If a person gave away your body to some passerby, you'd be furious. Yet you hand over your mind to anyone who comes along.",
  "The greatest wealth is a poverty of desires.",
  "Difficulties strengthen the mind, as labor does the body.",
  "To be everywhere is to be nowhere."
];

export function StoicWisdom() {
  const [wisdom, setWisdom] = useState<string | null>(null);

  const generateWisdom = () => {
    const randomIndex = Math.floor(Math.random() * STOIC_QUOTES.length);
    setWisdom(STOIC_QUOTES[randomIndex]);
  };

  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-5 h-5 text-purple-600" />
        <h2 className="text-lg font-semibold text-gray-700">What would Div do?</h2>
      </div>
      
      <button
        onClick={generateWisdom}
        className="w-full px-4 py-3 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors font-medium text-sm sm:text-base mb-4"
      >
        Seek Wisdom
      </button>

      {wisdom && (
        <div className="text-lg sm:text-xl text-purple-600 bg-purple-50 px-4 py-3 rounded-lg text-center">
          {wisdom}
        </div>
      )}
    </div>
  );
}