import styled, { css } from 'styled-components';

interface Props {
  variant?: string;
}

const variantBorder = css`
  border: 1px solid ${(props: Props) => props.variant};
`;

const defaultBorder = css`
  border: 1px solid red;
`;

export const AlertBanner = styled.div`
  padding: 0.3rem 1rem;
  margin: 1rem;
  width: max-content;
  background-color: ${(props: Props) => (props.variant ? props.variant : 'red')};
  ${(props: Props) => (props.variant ? variantBorder : defaultBorder)}
  border-radius: 10px;
`;
