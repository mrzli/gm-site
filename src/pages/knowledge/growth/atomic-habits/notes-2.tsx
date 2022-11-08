import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Layout } from '../../../../components/Layout';

export default function BookAtomicHabitsNotes2(): React.ReactElement {
  return (
    <Layout>
      <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
    </Layout>
  );
}

const content = `
# Atomic Habits

[https://jamesclear.com/atomic-habits](https://jamesclear.com/atomic-habits)
`;
