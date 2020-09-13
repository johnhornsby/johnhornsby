import React from 'react';
import styled from 'styled-components';

import Image from '../atoms/Image';
import { wide } from '../../styles/config/aspect-ratio';

const spacingModifier = 0.5;

const SectionStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: calc(var(--spacing) * ${spacingModifier});
`;

const ImageWrapperStyled = styled.div``;

const ImageAspectRatioStyled = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: ${wide};
  border: solid 1px ${({ theme }) => theme.colors.greyLight};
`;

const ImageStyled = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const ImageGrid = ({ images = [] }) => (
  <SectionStyled>
    {images.map((image) => (
      <ImageWrapperStyled key={image.image.id}>
        <ImageAspectRatioStyled>
          <ImageStyled id={image.image.id} alt={image.title} />
        </ImageAspectRatioStyled>
      </ImageWrapperStyled>
    ))}
  </SectionStyled>
);

export default ImageGrid;
