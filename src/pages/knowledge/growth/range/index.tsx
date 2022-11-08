import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Layout } from '../../../../components/Layout';

export default function BookRange(): React.ReactElement {
  return (
    <Layout>
      <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
    </Layout>
  );
}

const content = `
Here are my notes about a book called 'Range: Why Generalists Triumph in a Specialized World' by David Epstein.

()

[https://www.amazon.com/Range-Generalists-Triumph-Specialized-World/dp/0735214484](https://www.amazon.com/Range-Generalists-Triumph-Specialized-World/dp/0735214484)
`;
