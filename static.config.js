import path from 'path'
import axios from 'axios'
import React from 'react';

export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  Document: ({ Html, Head, Body, children, }) => ( // eslint-disable-line
    <Html lang='cs'>
      <Head>
        <meta charSet='UTF-8' />
        <link rel='icon' href='/favicon.ico' />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='application-name' content='Byt k pronajmu' />
        <meta
          name='description'
          content='Byt k pronajmu. Radhostska.'
        />
        <meta name='keywords' content='byt' />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
