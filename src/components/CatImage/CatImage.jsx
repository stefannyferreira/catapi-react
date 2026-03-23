import { useState } from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 320px;
  border-radius: 16px;
  overflow: hidden;
  background: #eceeef;
`;

const ImageSkeleton = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #eceeef 25%, #f5f7f8 50%, #eceeef 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s infinite linear;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 4px solid rgba(0, 219, 255, 0.25);
  border-top-color: #00dbff;
  animation: ${spin} 0.8s linear infinite;
`;

const StyledImage = styled.img`
  width: 100%;
  max-height: 480px;
  object-fit: cover;
  display: block;
  border-radius: 16px;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.25s ease;
`;

function CatImage({ src, alt }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <ImageWrapper>
      {!imageLoaded && (
        <>
          <ImageSkeleton />
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        </>
      )}

      <StyledImage
        src={src}
        alt={alt}
        $loaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
      />
    </ImageWrapper>
  );
}

export default CatImage;
