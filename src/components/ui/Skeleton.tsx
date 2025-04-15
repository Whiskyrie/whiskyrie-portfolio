import React from 'react';
import styled, { keyframes } from 'styled-components';

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

const pulse = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
`;

const SkeletonContainer = styled.div<SkeletonProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '20px'};
  border-radius: ${({ borderRadius, theme }) => borderRadius || theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.border};
  animation: ${pulse} 1.5s ease-in-out infinite;
  margin-bottom: 0.5rem;
`;

const Skeleton: React.FC<SkeletonProps> = ({ width, height, borderRadius }) => {
  return <SkeletonContainer width={width} height={height} borderRadius={borderRadius} />;
};

export default Skeleton;