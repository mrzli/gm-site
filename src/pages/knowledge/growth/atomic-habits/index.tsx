import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Layout } from '../../../../components/Layout';

const content = `
Here are my notes about a book called 'Atomic Habits' by James Clear.

[Here](https://jamesclear.com/atomic-habits) is the link.
`;

export default function BookAtomicHabits(): React.ReactElement {
  return (
    <Layout>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Layout>
  );
}
