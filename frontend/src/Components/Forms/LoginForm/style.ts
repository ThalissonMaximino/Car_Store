import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  height: auto;
  width: 412px;
  padding: 44px 48px;
  gap:32px;
  border: 1px solid var(--color-grey-scale-grey-10);
  background-color: var(--color-grey-scale-grey-10);

  a{ 
    align-self: flex-end;
    color:var(--color-grey-scale-grey-2);
    font-weight: 500;
  }
  a:hover{
    color:var(--color-grey-scale-grey-1);
  }

  span{
    align-self: center;
    color:var(--color-grey-scale-grey-2);
    font-weight: 400;
  }
`;