import React from 'react'
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {mobile} from "../responsive";



const Container = styled.div` 
      height: 70px;
      ${mobile({ height: "85px" })};
     
     

`;

const Wrapper = styled.div` 
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      ${mobile({ padding: "10px 0px" })};
    
`;

const Left = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      

`;
const Language = styled.span`
      font-size: 14px;
      cursor: pointer;
      ${mobile({ display: "none" })};

`;

const SearchContainer = styled.div`
      border: 0.5px solid lightgray;
      display: flex;
      align-items: center;
      margin-left: 25px;
      padding: 5px;
`;

const Input = styled.input`
      border: none;
      ${mobile({ width : "50px" })};

`

const Center= styled.div`
      text-align: center;

`;

const Logo = styled.h1` 
     font-weight: bold;
     ${mobile({ fontSize: "24px" })};

`;


const Right= styled.div`
       flex: 1;
       display: flex;
       align-items: center;
       justify-content: flex-end;
       ${mobile({ flex:2,justifyContent: "center" })};
`;

const MenuItem = styled.div` 
      font-size: 14px;
      cursor: pointer;
      margin-left: 10px;
      ${mobile({ fontSize: "12px", marginLeft:"10px" })};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper> 
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input placeholder='Search' />
               <SearchIcon style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
        </Left>

        <Center><Logo>A to Z FASHION</Logo></Center>
        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>  SIGN IN</MenuItem>
             <Badge badgeContent={4} color="primary">
               <ShoppingCartOutlinedIcon />
             </Badge>
        </Right>
      </Wrapper> 
    </Container>

    
  )
}

export default Navbar