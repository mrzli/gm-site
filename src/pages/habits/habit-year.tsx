import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

export default function HabitYear(): React.ReactElement {
  const data = useStaticQuery(graphql`
    query {
      file(name: {eq: "habits"}) {
        id
        relativePath
      }
    }
  `);

  return (<div>{'HabitYear'}
    <div>{JSON.stringify(data.relativePath)}</div>
  </div>);
}
