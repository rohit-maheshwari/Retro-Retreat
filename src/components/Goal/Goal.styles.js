import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 20px 20px;
`;

export const Content = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-gap: 2rem;

  img {
    box-shadow: 10px 10px 12.5px 5px grey;
  }
`;
