// src/components/ui/Container.tsx
import styled from 'styled-components';

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

export default Container;