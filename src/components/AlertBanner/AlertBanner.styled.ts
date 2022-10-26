import styled, { css } from 'styled-components';

interface Props {
  variant?: string;
}

const border = css`
  border: 1px solid ${(props: Props) => props.variant};
`;

export const AlertBanner = styled.div`
  padding: 0.3rem 1rem;
  margin: 1rem;
  width: max-content;
  background-color: ${(props: Props) => props.variant};
  ${(props: Props) => (props.variant ? border : 'border-color: 1px solid red')}
  border-radius: 10px;
`;
