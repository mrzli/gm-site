import React from "react"
import type { HeadFC } from "gatsby"
import { Layout } from '../components/Layout';

export default function IndexPage() {
  return (
    <Layout>
      <h1 className="text-3xl text-red-500 font-bold underline">
        Hello world!
      </h1>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>Home Page</title>
