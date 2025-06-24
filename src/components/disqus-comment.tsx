"use client";

import {DiscussionEmbed} from "disqus-react"
import { CommentCount } from "disqus-react"
// pages/blogs/[slug].tsx or a component it uses
import dynamic from 'next/dynamic';

const DisqusComments = ({ post }) => {
  const disqusShortname = "http-nipunbandara-vercel-app"
  const disqusConfig = {
    url: `https://nipunbandara.vercel.app/blogs/${post.slug}`,
    identifier: post.slug,
    title: post.title,
    language: 'en_US'
  }
  return (
    <div>
        <DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
        />
    </div>
  )
}
export default DisqusComments;