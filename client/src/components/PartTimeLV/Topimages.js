import React from "react";
import { Image } from "semantic-ui-react";
import { media } from "../../theme/media";
import styled from "styled-components";
import GirlCodes from "../../assets/images/dudesCode.png";
import dayinlife from "../../assets/images/coderscropped.jpg";
import blackbeak from "../../assets/icons/blackbeaker.png";

const Topimages = () => {
  return (
    <>
      <OvrP>
        <TeamImage src={GirlCodes} />
        <TagText>DEVPOINT LABS | WEB DEVELOPMENT</TagText>
        <TeamText>Part-time Web Development</TeamText>
        <TeamMeta>
          Learn why we're the best at what we do and why we're regarded <br />{" "}
          as one of the best in the edtech industry today.
        </TeamMeta>
        <ButtonStyle>
          <ButtLink href="/ApplicationsForm">Apply Now</ButtLink>
        </ButtonStyle>
      </OvrP>
      <BannerTwo>
        <BlackBeak src={blackbeak} />
        <BTHead>DevPoint lab's 12 week</BTHead>
        <BTFont>
          More than just code. Whether you’re a local or coming from
          out-of-state <br /> we blend students into a vibrant developer
          community <br />
          building life long friendships.
        </BTFont>
      </BannerTwo>
      <OvrP>
        <TeamImage src={dayinlife} />
        <BanHead>
          A Day in the life at <br /> DevPoint Labs
        </BanHead>
        <BanLink>
          <MELink href="/Community">Learn About Us ></MELink>
        </BanLink>
      </OvrP>
    </>
  );
};

const BlackBeak = styled(Image)`
  position: absolute;
  width: 50px;
  align-self: center;
  ${media.phone`
  width: 50px
  `} ${media.tablet`
  position: relative;
  `};
`;

const MELink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  &:hover {
    text-decoration: none;
    color: #53407a;
  }
`;

const BanLink = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: white;
  position: absolute;
  z-index: 0;
  top: 45%;
  left: 8%;
  transform: translate(-50%, -50%);
  ${media.tablet`
    font-size: 2em
    margin-left: 90px
  `}
  ${media.phone`
    font-size: 2em
    margin-left: 90px
    margin-top: 100px
  `}
  ${media.giant`
    font-size: 2em
    padding-top: 0
  `}
`;

const BanHead = styled.text`
  font-size: 42px;
  font-weight: 600;
  color: white;
  position: absolute;
  z-index: 0;
  top: 32%;
  left: 15%;
  transform: translate(-50%, -50%);
  ${media.tablet`
    font-size: 2em
    margin-left: 90px
  `}
  ${media.phone`
    font-size: 2em
    margin-left: 90px
  `}
  ${media.giant`
    font-size: 2em
    padding-top: 0
  `}
`;

const BTFont = styled.p`
  font-size: 18px;
  font-weight: 200;
  line-height: 1.5;
`;

const BTHead = styled.p`
  font-size: 34px;
  font-weight: 600;
`;

const BannerTwo = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 70px;
  text-align: center;
  ${media.phone`
    margin-bottom: 200px
  `}
`;

const ButtLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    text-decoration: none;
    color: #141414;
  }
  ${media.tablet`
    font-size: 1em
  `} ${media.phone`
    font-size: 1em;
  `};
`;

const TagText = styled.text`
  font-size: 20px;
  color: white;
  font-weight: 600;
  position: absolute;
  text-align: center;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.tablet`
    font-size: 1em
  `}
  ${media.phone`
    font-size: 1em
    padding-bottom: 50px
  `}
  ${media.desktop`
    font-size: 1em
    padding-top: 0
  `}
  ${media.giant`
    font-size: 1em
    padding-top: 0
  `}
`;

const TeamMeta = styled.text`
  font-size: 24px;
  color: white;
  font-weight: 400;
  position: absolute;
  text-align: center;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.phone`
    font-size: 2px
    margin-top: 70px
    width: 100%
  `}
  ${media.tablet`
    position: absolute;
    top: 60%
    font-size: 18px !important;
  `}
  ${media.giant`
    font-size: 1.2em
    padding-top: 0
  `}
`;

const TeamText = styled.text`
  z-index: 0;
  font-size: 55px;
  font-weight: 600;
  position: absolute;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  ${media.phone`
    font-size: 28px !important
    margin-top: 30px
  `}
  ${media.tablet`
    font-size: 30px
  `}
  ${media.giant`
    font-size: 30px
  `}
`;

const OvrP = styled.div`
  position: relative;
  background-image: linear-gradient(grey, black);
  opacity: 0.9;
  ${media.tablet`
  position: relative;
  width: auto;
  opacity: 0.9
  `}
  ${media.phone`
    position: relative;
    background: #6E54A3;
    width: auto;
    opacity: 1
    height: 500px
  `}
`;

const TeamImage = styled(Image)`
  position: absolute
  width: 100%;
  height: auto;
  opacity: .3;
  z-index: -1;
  ${media.phone`
  `}
`;

const ButtonStyle = styled.div`
  width: 15%;
  border-radius: 3%
  padding: 10px;
  background-color: #53407a;
  font-weight: 400;
  position: absolute;
  text-align: center;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0.2em 0.2em 0.4em #141414;
  ${media.phone`
    width: 200px;
  `}
  ${media.tablet`
    width: 30%;
  `}
`;

const colors = {
  black: `#141414`,
  darkGrey: `#2d2d2d`,
  grey: `#757575`,
  darkPurp: `#53407A`,
  purp: `#6E54A3`,
  white: `#FFFFFF`,
  lightPurp: "#e4dced"
};

export default Topimages;
