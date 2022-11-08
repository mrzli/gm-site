import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Layout } from '../../../../components/Layout';

export default function BookAtomicHabitsNotes4(): React.ReactElement {
  return (
    <Layout>
      <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
    </Layout>
  );
}

const content = `
# Atomic Habits

[https://jamesclear.com/atomic-habits](https://jamesclear.com/atomic-habits)

Focus on process, not the goal. Decide who you want to be and take small steps towards achieving that.

Habits have four steps - cue, craving, response, reward.  
There are four laws for building habits - one for each of the steps.

## 1st Law - Obvious

Use habit scorecard as a cue for what habits you should be doing.
  
Use implementation intention:

> I will BEHAVIOR at TIME in LOCATION.

Use habit stacking:

> After CURRENT HABIT, I will NEW HABIT.

Try changing the environment and/or context to facilitate habit change.

## 2nd Law - Attractive

Use temptation bundling, and optionally precede it with habit stacking:

> After CURRENT HABIT, I will HABIT I NEED. (optional)  
> After HABIT I NEED, I will HABIT I WANT.

Use habits that better satisfy your underlying motives.  
Associate habits with positive feelings, and highlight benefits.  
Perform motivational rituals.

## 3rd Law - Easy

You will need to take action, not just think about doing. When trying, you can **try slowly**.  
Use (choose) **least amount of effort**. Choose the easiest way. Change and prime your environment to make doing something even easier.  
**Scale down habits** when first trying them - use the two-minute rule. Incrementally increase the scope later.  
Make good habits inevitable, and bad ones impossible. Use commitment devices, automation (technology), or one-time actions that will have long term benefits.

## 4th Law - Satisfying

Make habits satisfying - **make reward immediate**.  
When trying to avoid bad habits, make such **non-action into something active** and satisfying.  
Short term awards should **match your identity**, and not work against it (be in conflict with the goals of habits you want to assume).

Use tools for sticking with good habits.  
Use **habit tracking**. **Automate** if possible, otherwise **record immediately** after a habit.  
Use accountability. Make **habit contracts**. Have an **accountability partner**.  

## Mastery

Find what fits you. Explore, then exploit.  
Create your own game. Combine skills. Specialize.  
Use the goldilocks rule. Use variable reward. Accept boredom.

Downside of habits is that you stop improving after an action becomes automatic.  
To achieve mastery, you need to employ habits, but also **deliberate practice**.  
**Review** your performance, **reflect**, and remain conscious.  
Have and annual review and an integrity report.

Avoid getting stuck in an identity.  
Avoid connecting your ego to an aspect of an identity.
`;
