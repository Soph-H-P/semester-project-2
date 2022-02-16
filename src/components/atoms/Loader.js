import styled, { keyframes } from 'styled-components';

import loadingSvg from '../../assets/icons/loadingSvg.svg';

const loadingAnimationLarge = keyframes`
0% {left: 0%;}
10% {left: 10%;}
20% {left: 20%;}
30% {left: 30%;}
40% {left: 40%;}
50% {left: 50%;}
60% {left: 60%;}
70% {left: 70%;}
80% {left: 80%;}
90% {left: 90%;}
100% {left: 100%;}
`;

const loadingAnimationMedium = keyframes`
0% {left: 0%;}
12.5% {left: 12.5%;}
25% {left: 25%;}
37.5% {left: 37.5%;}
50% {left: 50%;}
62.5% {left: 62.5%;}
75% {left: 75%;}
87.5% {left: 87.5%;}
100% {left: 100%;}
`;

const loadingAnimationSmall = keyframes`
0% {left: 0%;}
25% {left: 25%;}
50% {left: 50%;}
75% {left: 75%;}
100% {left: 100%;}
`;

const Loader = styled.div`
  height: 150px;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  background: left / 20% repeat-x url(${loadingSvg});
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    left: 0px;
    background: ${(props) => props.theme.white};
    position: absolute;
    animation: ${loadingAnimationLarge} 7s infinite;
  }

  @media (max-width: 800px) {
    background: left / 25% repeat-x url(${loadingSvg});

    &::after {
      animation: ${loadingAnimationMedium} 5s infinite;
    }
  }

  @media (max-width: 400px) {
    background: left / 50% repeat-x url(${loadingSvg});

    &::after {
      animation: ${loadingAnimationSmall} 3s infinite;
    }
  }
`;

export default Loader;
