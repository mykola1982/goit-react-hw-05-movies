import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;

  width: calc((100% - 48px) / 4);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 460px;
  transition: scale 250ms linear;

  &:hover,
  :focus {
    scale: 1.05;
  }
`;

export const Raiting = styled.p`
  width: 50px;
  height: 30px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  background: orange;
  border-radius: 5px;
  padding: 1px 6px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  display: block;
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const Img = styled.img`
  height: 85%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export const Title = styled.p`
  margin-top: 8px;
  padding-left: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  color: #000;
  text-transform: uppercase;
`;

export const Release = styled.p`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  color: orange;
  padding-left: 8px;
`;
