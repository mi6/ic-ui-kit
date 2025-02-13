import { addons, types, useParameter } from '@storybook/manager-api';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import './github-markdown.css';

const PARAM_KEY = 'componentAPI';

const ComponentAPIDesc = () => {
  const value = useParameter(PARAM_KEY, null);
  const item = value ? value.data : 'No story parameter defined';
  return <ReactMarkdown remarkPlugins={[gfm]}>{item}</ReactMarkdown>;
};

addons.register(PARAM_KEY, () => {
  addons.add(PARAM_KEY, {
    type: types.TAB,
    title: 'Component API',
    route: ({storyId}) => {
      const storyIdParts=storyId.split("--");
      return (`/component-api/${storyIdParts[0]}--docs`);
    },
    match: ({ viewMode }) => viewMode === 'component-api',
    render: ({ active }) => (
      <>
        {active && (
          <div className='markdown-body'>
            <div className='wrapper' style={{padding: '0 16px 16px'}}>
              <ComponentAPIDesc />
            </div>
          </div>
        )}
      </>
    ),
  });
});