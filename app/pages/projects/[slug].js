import React from 'react';
import styled from 'styled-components';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

import withApollo from '../../lib/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import Link from 'next/link';

import ImageGrid from '../../components/organism/ImageGrid';
// import Container from '../../styles/Container';
import Container from '../../components/atoms/Container';
import { fontSize, GAMMA } from '../../styles/config/modular-scale';
import Title from '../../components/atoms/Title';
import BodyCopy from '../../components/atoms/BodyCopy';
import Module from '../../components/atoms/Module';

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

const TitleStyled = styled(Title)`
  /* padding: 0.75rem; */
  /* width: auto; */

  /* background: #ffffff; */
  /* font-weight: 700; */

  /* text-transform: uppercase; */
  /* ${fontSize(GAMMA)} */
`;

const StrapStyled = styled.h6`
  /* margin-top: -0.75rem; */
  /* padding: 0.75rem 0.75rem 0.65rem 0.75rem; */
  width: auto;

  background: #ffffff;
  font-weight: 400;
  font-size: 0.8em;
  text-transform: uppercase;
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

  return (
    <Container>
      <Link href={`/`} as={`/`}>
        <a>>Home</a>
      </Link>
      {project && (
        <>
          {project.title && (
            <Title above="4rem" below="0">
              {project.title}
            </Title>
          )}

          {project.strap && <StrapStyled>{project.strap}</StrapStyled>}
          <Module>
            {project.completedAt && (
              <time dateTime={project.completedAt.substr(0, 10)}>
                {new Date(project.completedAt).toString()}
              </time>
            )}

            {project.mediums && project.mediums.length && (
              <ul>
                {project.mediums.map((m) => (
                  <li key={m.name}>{m.name}</li>
                ))}
              </ul>
            )}

            {project.technologies && project.technologies.length && (
              <ul>
                {project.technologies.map((t) => (
                  <li key={t.name}>{t.name}</li>
                ))}
              </ul>
            )}
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
