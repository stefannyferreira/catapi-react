import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

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
  animation: ${shimmer} 1.2s infinite linear;
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

const MotionImage = styled(motion.img)`
  width: 100%;
  height: auto;
  max-height: 480px;
  object-fit: cover;
  display: block;
  border-radius: 16px;
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

      <AnimatePresence mode="wait">
        {src && (
          <MotionImage
            key={src}
            src={src}
            alt={alt}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{
              opacity: imageLoaded ? 1 : 0,
              scale: imageLoaded ? 1 : 1.03,
            }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.10, ease: "easeOut" }}
            onLoad={() => setImageLoaded(true)}
          />
        )}
      </AnimatePresence>
    </ImageWrapper>
  );
}

export default CatImage;
