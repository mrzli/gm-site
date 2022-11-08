import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Layout } from '../../../../components/Layout';

export default function BookRangeNotes1(): React.ReactElement {
  return (
    <Layout>
      <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
    </Layout>
  );
}

const content = `
# Range

[https://www.amazon.com/Range-Generalists-Triumph-Specialized-World/dp/0735214484](https://www.amazon.com/Range-Generalists-Triumph-Specialized-World/dp/0735214484)

## Introduction

Tiger Woods is an example of a specialist.  
He was a child prodigy, started at an extremely young age and focused solely on golf.

Roger Federer is an example of a generalist.  
He tried many sports at a young age.

At their peak years, elite athletes spend more time on exercise than non-elite.  
However, in the years before, it is the opposite. This is a sampling period.

Early career specialization offers an earning advantage right out of college, but this is inverted in favor of generalists later on.

Highly specialized professionals can become narrow-minded and overconfident.

Learning is best done to accumulate lasting knowledge.  
This can seem like falling behind in the short-term, but is beneficial long-term.

### Overspecialization in Systems

Drive to specialize infects systems as well, not just individuals.

Overspecialization contributed to the 2008 crisis.  
Specialized groups were responsible for risk-optimizations in their respective narrow domains, producing a poor whole-system situation.    
Overspecialization also caused issues with responses to the crisis.

Health care specialization causes has their own 'if you have a hammer, everything looks like a nail' problems.  
As above, scientific research suffers due to a lack of high-level perspective.

## Chapter 1 - The Cult of the Head Start

Laszlo Polgar is the father of very successful chess prodigies, including the best female chess player of all time - Susan Polgar.  
He implemented a specialist approach, with an early start.  
He postulated that if more people used his approach to education, humanity would be better able to tackle great problems.  



This books suggests that opposite might be the case.
`;
