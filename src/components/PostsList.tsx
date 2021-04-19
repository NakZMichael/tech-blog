import { Container } from '@material-ui/core';
import React from 'react';
import { ListedPost } from './ListedPost';

type PostListProps = {
  nodes: any[]
}

export const PostList = ({nodes}:PostListProps)=>{
  const postItems = nodes.map(node => <ListedPost key={node.id} node={node} />);
  return (
    <Container maxWidth="md">
      {postItems}
    </Container>
  );
};