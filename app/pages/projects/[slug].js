import React from 'react';
import styled, { css } from 'styled-components';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

import withApollo from '../../lib/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import Link from 'next/link';

import { below } from '../../styles/media';

import ImageGrid from '../../components/organism/ImageGrid';
// import Container from '../../styles/Container';
import Container from '../../components/atoms/Container';
import { fontSize, GAMMA } from '../../styles/config/modular-scale';
import Title from '../../components/atoms/Title';
import BodyCopy from '../../components/atoms/BodyCopy';
import Module from '../../components/atoms/Module';
import Tags from '../../components/atoms/Tags';

const QUERY = gql`
  query($slug: String) {
    allProjects(where: { slug: $slug }, first: 1) {
      id
      title
      strap
      brief
      extended
      url
      completedAt
      video
      technologies {
        id
        name
      }
      mediums {
        id
        name
      }
      participants
      images {
        title
        image {
          id
        }
      }
    }
  }
`;

const ProjectTitle = styled(Title)`
  margin-top: 12rem;
  ${below.tablet(css`
    margin-top: 4rem;
  `)}

  ${({ scale }) => fontSize(scale, (_breakpoint, size) => 'font-size: min(10vw,' + size + 'px)')}
`;

const BackLink = styled.a`
  display: block;
  margin-top: var(--spacing);
  text-decoration: underline;
`;

const Project = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { loading, data } = useQuery(QUERY, {
    variables: { slug },
  });

  if (loading || !data) {
    return <h1>loading...</h1>;
  }

  const project = data.allProjects[0];
  const hasCompletedAt = project.strap && project.completedAt;
  const hasMediums = !!project.mediums && !!project.mediums.length;
  const hasTechnologies = !!project.technologies && !!project.technologies.length;

  return (
    <Container>
      <Link href={`/`} as={`/`} passHref>
        <BackLink>Back to all Projects</BackLink>
      </Link>
      {project && (
        <>
          <Module>
            {project.title && (
              <ProjectTitle scale={'alpha'} below="0" lineHeight="1em">
                {project.title}
              </ProjectTitle>
            )}

            {hasCompletedAt && (
              <Title tag={5} weight={400} color={'#333'} above="0">
                {String(new Date(project.completedAt).getFullYear()).substr(2, 2)}
                &nbsp;&nbsp;
                {project.strap}
              </Title>
            )}
            {hasMediums && <Tags label="Medium" tags={project.mediums} />}
            {hasTechnologies && <Tags label="Technology" tags={project.technologies} />}
          </Module>

          {project.brief && (
            <Module>
              <Title tag={6}>The Brief</Title>
              <BodyCopy content={project.brief} />
            </Module>
          )}

          {project.images && project.images.length && (
            <Module>
              <Title tag={6}>Gallery</Title>
              {project.images && project.images.length && <ImageGrid images={project.images} />}
            </Module>
          )}

          {project.extended && (
            <Module>
              <Title tag={6}>Details</Title>
              <BodyCopy content={project.extended} />
            </Module>
          )}
        </>
      )}
    </Container>
  );
};

export default withApollo(Project, { getDataFromTree });
