import React from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import withApollo from '../../lib/withApollo';
import Link from 'next/link';
import styled from 'styled-components';
import Image from '../atoms/Image';
import { fontSize, ZETA, THETA } from '../../styles/config/modular-scale';

const ProjectsStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const ProjectStyled = styled.li`
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1440px) {
    width: 33.333%;
  }
`;

const AnchorStyled = styled.a`
  position: relative;
  display: block;
  cursor: pointer;

  &:hover::after,
  &:focus::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: inset 0 0 0 4px white;
  }

  &:focus {
    outline: none;
  }
`;

const ImageWrapperStyled = styled.div`
  z-index: -1;
`;

const ImageAspectRatioStyled = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: ${(9 / 16) * 100}%;
`;

const ImageStyled = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const AsideStyled = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  top: 0;
  left: 0;

  z-index: 2;
`;

const TitleStyled = styled.h3`
  display: inline-block;

  padding: 0.75rem;
  width: auto;

  background: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  ${fontSize(ZETA)}
`;

const StrapStyled = styled.h4`
  display: inline-block;

  margin-top: -0.75rem;
  padding: 0.75rem 0.75rem 0.65rem 0.75rem;
  width: auto;

  background: #ffffff;
  font-weight: 400;
  /* font-size: 0.8em; */
  ${fontSize(THETA)}
  text-transform: uppercase;
`;

const QUERY = gql`
  query {
    allProjects(orderBy: "completedAt_DESC") {
      completedAt
      slug
      title
      strap
      posterImage {
        title
        image {
          id
          publicUrl
        }
      }
    }
  }
`;

const ProjectGrid = () => {
  const { loading, data } = useQuery(QUERY);

  return (
    <div>
      {loading || !data ? (
        <h1>loading...</h1>
      ) : (
        <ProjectsStyled>
          {data.allProjects.map((project, index) => (
            <ProjectStyled key={project.slug}>
              <Link href={`/projects/[slug]`} as={`/projects/${project.slug}`} passHref>
                <AnchorStyled>
                  <AsideStyled>
                    <TitleStyled>{project.title}</TitleStyled>
                    <StrapStyled>
                      {String(new Date(project.completedAt).getFullYear()).substr(2, 2)}
                      &nbsp;&nbsp;
                      {project.strap}
                    </StrapStyled>
                  </AsideStyled>
                  {project.posterImage && (
                    <ImageWrapperStyled key={project.posterImage.image.id}>
                      <ImageAspectRatioStyled>
                        <ImageStyled
                          id={project.posterImage.image.id}
                          alt={project.posterImage.title}
                        />
                      </ImageAspectRatioStyled>
                    </ImageWrapperStyled>
                  )}
                </AnchorStyled>
              </Link>
            </ProjectStyled>
          ))}
        </ProjectsStyled>
      )}
    </div>
  );
};

export default ProjectGrid;
