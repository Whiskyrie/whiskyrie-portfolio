import React from 'react';
import styled from 'styled-components';

interface ProfileImageProps {
  src: string;
  alt: string;
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
`;

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => {
  return (
    <ImageWrapper>
      <StyledImage src={src} alt={alt} />
    </ImageWrapper>
  );
};

export default ProfileImage;