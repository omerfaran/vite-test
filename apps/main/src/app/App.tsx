import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import { Testlib1 } from '@haveri/testlib1';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  console.log('haveri');
  return (
    <StyledApp>
      <div>haveri</div>
      <Testlib1 />
    </StyledApp>
  );
}

export default App;
