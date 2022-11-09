import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Layout } from '../../../../components/Layout';

export default function BookRangeNotes1(): React.ReactElement {
  return (
    <Layout>
      <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
    </Layout>
  );
}

const content = `
# Range

[https://www.amazon.com/Range-Generalists-Triumph-Specialized-World/dp/0735214484](https://www.amazon.com/Range-Generalists-Triumph-Specialized-World/dp/0735214484)

## Introduction

Tiger Woods is an example of a specialist.  
He was a child prodigy, started at an extremely young age and focused solely on golf.

Roger Federer is an example of a generalist.  
He tried many sports at a young age.

At their peak years, elite athletes spend more time on exercise than non-elite.  
However, in the years before, it is the opposite. This is a sampling period.

Early career specialization offers an earning advantage right out of college, but this is inverted in favor of generalists later on.

Highly specialized professionals can become narrow-minded and overconfident.

Learning is best done to accumulate lasting knowledge.  
This can seem like falling behind in the short-term, but is beneficial long-term.

### Overspecialization in Systems

Drive to specialize infects systems as well, not just individuals.

Overspecialization contributed to the 2008 crisis.  
Specialized groups were responsible for risk-optimizations in their respective narrow domains, producing a poor whole-system situation.    
Overspecialization also caused issues with responses to the crisis.

Health care specialization causes has their own 'if you have a hammer, everything looks like a nail' problems.  
As above, scientific research suffers due to a lack of high-level perspective.

## Chapter 1 - The Cult of the Head Start

Laszlo Polgar is the father of very successful chess prodigies, including the best female chess player of all time - Susan Polgar.  
He implemented a specialist approach, with an early start.  
He postulated that if more people used his approach to education, humanity would be better able to tackle great problems.  
This books suggests that opposite of what Laszlo Polgar assumed might be the case for many domains.

### Kind Learning Environments

Some domains seem to be good for specialization.  

This may include chess, firefighting, surgery, piloting. 
 
The have the following characteristics.  
They are narrow domains.  
They have clearly defined rules, boundaries and goals.  
Feedback is immediate, or close to that.  
They are exhibiting repeating patterns.
  
Thus, they benefit greatly from experience.  
However, these domains are the exception, not the rule.  
The above are called 'kind' environments, as opposed to 'wicked'.

### Wicked Learning Environments

Rules are unclear or incomplete.  
There may or may not be repetitive patterns, and they may not be obvious.  
Feedback is often delayed, inaccurate, or both.  

Sometimes, in wicked environments, experience will be a detriment, it might reinforce the exact wrong lessons.

### AI

AI is making specialized skills more obsolete.

Human-computer combination performs better than either humans or computers alone.  
It does so by making use of what each respective side does better.  
Humans are (still) better at high level strategy, big picture, generalized thinking.  
Computer are better at processing large amounts of data, memory, doing repetitive tasks, and lower level tactics.

### Memorizing Patterns

Memory capability is dependent on our ability to abstract away what we want to remember.
  
We remember familiar patterns.  
It is much easier to remember a coherent sentence, than a jumble of random words, even if the total count of works is the same.  
High level chess players have a much harder time remembering an impossible chess board positions than realistic ones.  
This is especially pronounced with savants.

### Lessons

Trying to learn rules and patterns in wicked systems can easily backfire.  
People may try to apply rules to a situation where it does not apply. They may also get defensive if it does not work.

It is a bad idea to teach people to discover rules by providing rewards for repetitive short term success.  
It will make them inflexible, as opposed to have them try to find a general solution.  
Book contains a description of an experiment around page 28.

In short, the stories of Polgars and Tiger Woods are wrong stories for what you will need to do in real life, which will require more flexibility.  
In practice, it is much better to have more general, cross-domain competences.

## Chapter 2 - How the Wicked World Was Made
`;
