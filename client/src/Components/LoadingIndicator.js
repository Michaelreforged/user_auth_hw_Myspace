
import styled, { keyframes } from "styled-components";
import { loadingTextColor, primaryDotColor } from "./Colors";

const LoadingIndicator = () => {
  return(
    <>
    <LoadingDots/>
    <Text>Loading</Text>
    </>
  )
}

export default LoadingIndicator

const Text = styled.p`
color : ${loadingTextColor}
`

const dots = keyframes`
  33% {background-size:calc(100%/3) 0%  ,calc(100%/3) 100%,calc(100%/3) 100%}
  50% {background-size:calc(100%/3) 100%,calc(100%/3) 0%  ,calc(100%/3) 100%}
  66% {background-size:calc(100%/3) 100%,calc(100%/3) 100%,calc(100%/3) 0%  }
`
const LoadingDots = styled.div`
  width:50px;
  height:12px;
  background: 
    radial-gradient(circle closest-side, ${primaryDotColor} 90%, #0000) 0%   50%,
    radial-gradient(circle closest-side, ${primaryDotColor} 90%, #0000) 50%  50%,
    radial-gradient(circle closest-side, ${primaryDotColor} 90%, #0000) 100% 50%;
  background-size:calc(100%/3) 100%;
  background-repeat: no-repeat;
  animation: ${dots} 1s infinite linear;
`
