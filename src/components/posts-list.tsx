import React, { FunctionComponent } from 'react';
import Image, { FluidObject } from 'gatsby-image';

interface PostsListsProps {
  posts: Array<{
    node: {
      excerpt: string;
      frontmatter: {
        slug: string;
        image: { childImageSharp: { fluid: FluidObject } };
      };
    };
  }>;
}

export const PostList: FunctionComponent<PostsListsProps> = ({ posts }) => {
  return (
    <div>
      {posts.map(({ node }, index) => {
        return (
          <div key={index}>
            {node.excerpt}, {node.frontmatter.slug}
            <Image fluid={node.frontmatter.image.childImageSharp.fluid} />
          </div>
        );
      })}
    </div>
  );
};
export default PostList;
