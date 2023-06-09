import styled from "styled-components"
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Pinterest from "@mui/icons-material/Pinterest";
import Room from "@mui/icons-material/Room";
import Phone from "@mui/icons-material/Phone";
import MailOutline from "@mui/icons-material/MailOutline";
import {mobile} from "../responsive"

const Container = styled.div`
      display: flex;
      ${mobile({ flexDirection: "column" })};
`;
const Left = styled.div`
      flex:1;
      display: flex;
      flex-direction: column;
      padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
   margin: 20px 0px;

`;
const SocialContainer = styled.div`
      display: flex;

`;
const SocialIcon = styled.div`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: white;
      background-color: #${props=>props.color};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      cursor: pointer;

`;


const Center= styled.div`
      flex:1;
      padding: 20px;
      ${mobile({ display: "none" })};
`;

const Title = styled.h3`
      margin-bottom: 30px;
`;
const List = styled.ul`
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
`;
const ListItem = styled.li`
      width: 50%;
      margin-bottom: 10px;
`;



const Right= styled.div`
      flex:1;
      padding: 20px;
      ${mobile({ backgroundColor: "#fff8f8" })};
`;

const ContactItem = styled.div`
      margin-bottom: 20px;
      display: flex;
      align-items: center;

`;

const Payment = styled.img`
      width: 35%;

`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>A to Z FASHION </Logo>
        <Desc>
          
        A To Z Dresses And Textiles Catalogue listing range of products and services offered by A To Z Dresses And Textiles in Vadapalani, Chennai.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                 <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                 <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlists</ListItem>
            <ListItem>Terms</ListItem>
        
        </List>

      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>
               <Room style={{marginRight:"10px"}} /> New No.352,Opposite Market, Arcot Rd, Vadapalani, Chennai, Tamil Nadu 600026
          </ContactItem>
          <ContactItem>
                <Phone style={{marginRight:"10px"}}/> 91+ 23456854
          </ContactItem>
          <ContactItem>
                 <MailOutline style={{marginRight:"10px"}}/> contact@meeran.ig
          </ContactItem>
          <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWVojYFR5yL0_XnE94D60jFdC46RDeDrSAw&usqp=CAU"/>


      </Right>

    </Container>
  )
}

export default Footer