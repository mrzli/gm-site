import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Layout } from '../../../../components/Layout';

export default function Notes5(): React.ReactElement {
  return (
    <Layout>
      <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
    </Layout>
  );
}

const content = `
# Atomic Habits

[https://jamesclear.com/atomic-habits](https://jamesclear.com/atomic-habits)

Decide who you want to be and take small steps towards achieving it.

**Make it obvious**.  
Use habit scorecard, make use of implementation intention, and habit stacking.

**Make it attractive**.  
Use temptation bundling, optionally in combination with habit stacking.  
Use better habits for satisfying underlying motives.  
Associate habits with positive feelings and highlight benefits.  
Perform motivational rituals.

**Make it easy**.  
Use least amount of effort. Change/prime your environment.  
Make use of two-minute rule for starting a habit.  
Make use of commitment devices.  
Automate.  
Perform one-time actions that will be continuously helping you.

**Make is satisfying**.  
Make reward immediate.  
Make sure short term awards match your identity.  
Use tools that will allow you to stick with your habits: habit tracking, habit contract, accountability partner.

**Achieve mastery**.  
Find what fits you specifically, create your own game, combine skills, and specialize.    
Try staying in the goldilocks zone, vary your reward, and accept boredom.  
Make use of deliberate practice, reviews and reflections, to reduce the downside of habit automation, and so achieve mastery.  
Avoid connecting your identity to the wrong thing, and getting stuck.
`;
