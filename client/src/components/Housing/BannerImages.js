import React from "react";
import { Button, Image, Icon, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { media } from "../../theme/media";
import styled from "styled-components";
import teamimage from "../../assets/images/teamphoto.png";
import dayinlife from "../../assets/images/coderscropped.jpg";
import blackbeak from "../../assets/icons/blackbeaker.png";
import housingpic from "../../assets/images/sitguy.jpg";

const Topimages = () => {
  return (
    <>
      <OvrP>
        <TeamImage src={teamimage} />
        <TagText style={{ fontFamily: `'Exo 2', sans-serif` }}>
          DEVPOINT LABS | STUDENT HOUSING
        </TagText>
        <TeamText style={{ fontFamily: `'Exo 2', sans-serif` }}>
          Free Student Housing
        </TeamText>
        <TeamMeta style={{ fontFamily: `'Exo 2', sans-serif` }}>
          Fully Furnished free student housing steps away from campus!
        </TeamMeta>
        <ButtonStyle>
          <ButtLink
            href="/ApplicationsForm"
            style={{ fontFamily: `'Exo 2', sans-serif` }}
          >
            Apply Now
          </ButtLink>
        </ButtonStyle>
      </OvrP>
      <Container>
        <BannerTwo>
          <BTHead style={{ fontFamily: `'Exo 2', sans-serif` }}>
            Student Housing at No Cost
          </BTHead>
          <BTFont style={{ fontFamily: `'Exo 2', sans-serif` }}>
            At DevPoint Labs our goal has been to be the most accessible school
            in
            <br />
            the country. With free housing included, you can focus on achieving
            your
            <br />
            goals and getting ready for the industry.
          </BTFont>
        </BannerTwo>
      </Container>
      <OvrP>
        <TeamImage src={housingpic} />
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
  font-size: 60px;
  font-weight: 600;
  ${media.phone`
    font-size: 35px
  `}
`;

const BannerTwo = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 70px;
  text-align: left;
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
    padding-bottom: 200px
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
  background-image: linear-gradient(black, black);
  opacity: 0.9;
  ${media.tablet`
  position: relative;
  width: auto;
  opacity: 0.9
  `}
  ${media.phone`
    position: relative;
    width: auto;
    opacity: 0.8
    height: 500px
  `}
`;

const TeamImage = styled(Image)`
  position: absolute
  width: 100%;
  height: auto;
  opacity: .2;
  z-index: -1;
  ${media.phone`
  position: relative;
  width: auto;
  opacity: 0.8
  height: 500px 
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

export default Topimages;
