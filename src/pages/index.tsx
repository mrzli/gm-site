import React from "react"
import type { HeadFC } from "gatsby"
import { Layout } from '../components/Layout';
import ReactMarkdown from 'react-markdown';

const content = `
# This is a **title**

Some text and \`some code\`.

~~~js
import { ccc } from 'aaa';
~~~


`;

export default function IndexPage() {
  return (
    <Layout>
      <h1 className="text-3xl text-red-500 font-bold underline">
        Hello world!
      </h1>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>Home Page</title>
