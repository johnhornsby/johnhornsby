import React from 'react';
import styled from 'styled-components';

const TagsStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const TagStyled = styled.li`
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 1px ${({ theme }) => theme.colors.greyLight};
  border-radius: 3px;
`;

const LabelStyled = styled.li`
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  border: solid 1px ${({ theme }) => theme.colors.black};
  border-radius: 3px;
`;

const Tags = ({ tags, label }) => {
  return (
    <TagsStyled>
      <LabelStyled>{label}</LabelStyled>
      {tags.map((tag) => (
        <TagStyled key={tag.name}>{tag.name}</TagStyled>
      ))}
    </TagsStyled>
  );
};

export default Tags;
