import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Layout } from '../../components/Layout';

export default function WorkPrinciples(): React.ReactElement {
  return (
    <Layout>
      <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
    </Layout>
  );
}

const content = `
# Work

## General

### Have a Simple Goal

- Always have a goal in mind. You need to be working towards something.
- Goal needs to be simple. It needs to be achievable in at most a few days.
- If the goal is too complicated, split it up into smaller goals.

### Get Help

- Ask for help when help will speed you up.
- Try to do so as soon as possible.
- Make sure you are prepared to receive help. Know which questions to ask, and which path you want to explore.

### Reevaluate your Direction

- You are allowed to change the direction (approach) you are taking in solving the problem,
- Do so only (and always) if a new approach will get you to your goal faster, taking into account the overhead of the switch.

### Document what you Learn

- Write things down as you learn them.
- This will allow you reference what you have written later on. Do that when necessary.
- Documenting will also

### Have a Plan for Next Day

- Have a clear, written down list, of what you want to work on the following day. 
`;
