import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Layout } from '../../../../components/Layout';

export default function BookAtomicHabits(): React.ReactElement {
  return (
    <Layout>
      <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
    </Layout>
  );
}

const content = `
Here are my notes about a book called 'Atomic Habits' by James Clear.

[Here](https://jamesclear.com/atomic-habits) is the link.
`;
