import { css } from "lit";

export const styles = css`
  :host{
    grid-area: content;
  }
  .cta{
    display: flex;
    padding: 50px;
    justify-content: space-between;
    align-items: center;
  }
  .info{
    color: var(--font-color);
    letter-spacing: 2px;
    text-transform: uppercase;
    .subtitle{
      font-weight: 100;
      font-size: 1rem;
      line-height: 1;
    }
    .location{
      font-size: 12px;
      font-weight: 100;
      text-transform: capitalize;
      svg{
        width: 10px;
      }
    }
    .links{
      margin-top: 30px;
      display: flex;
      gap: 15px;
      width: 100%;
      a{
        width: 30px;
        cursor: pointer;
        color: var(--font-color);
        &:hover{
          color: gray;
        }
      }

    }
  }
  .picture{
    width: 400px;
    filter: grayscale(1);
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0));
  }
`;