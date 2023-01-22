import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Testlib1Props {}

const StyledTestlib1 = styled.div`
  color: pink;
`;

export const Testlib1 = (props: Testlib1Props) => {
  return <h1>Welcome to Testlib1!</h1>;
};
