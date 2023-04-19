// Importing icons and modules
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

// Setting up the theme object with various colors and font sizes
const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#f27121',
    secondary: '#e94057',
    background: {
      dark: '#494949',
      light: '#313131'
    }
  },
  fontSizes: {
    small: '0.8rem',
    medium: '1.5rem'
  }
};

// Creating a functional component called Category
function Category() {
  // Using the map method to loop through the cuisines array and return a NavLink with a cuisine name and its corresponding icon
  return (
    <List>
      {cuisines.map((cuisine) => (
        <Slink key={cuisine.name} to={`/cuisine/${cuisine.name}`}>
          {cuisine.icon}
          <h4>{cuisine.name}</h4>
        </Slink>
      ))}
    </List>
  );
}

// Creating an array of objects, each representing a cuisine with its name and icon
const cuisines = [  
  { name: 'Italian', icon: <FaPizzaSlice />  },  
  { name: 'American', icon: <FaHamburger />  },  
  { name: 'Thai', icon: <GiNoodles />  },  
  { name: 'Japanese', icon: <GiChopsticks />  }
];

// Creating a styled div called List with some CSS properties
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

// Creating a styled NavLink called Slink with some CSS properties
const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(
    35deg,
    ${theme.colors.background.dark},
    ${theme.colors.background.light}
  );
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.small};
  }
  svg {
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.medium};
  }
  /* Adding some styles for when the NavLink is active */
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);
    svg{
        color: white;
    }
    h4{
        color: white;
    }
  }
`;

// Exporting the Category component
export default Category;



/*  ORIGINAL CODE ::
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
// This is just a navbar that takes to the specified location
// At the specified location, we take the name of current cuisine from the url
// with the help of params and then call the api with the help of that name
// and retrieve the corresponding data as the response.
function Category() {
    return (
        <List>
            <Slink to={'/cuisine/Italian'} >
                <FaPizzaSlice />
                <h4>Italian</h4>
            </Slink>
            <Slink to={'/cuisine/American'} >
                <FaHamburger />
                <h4>American</h4>
            </Slink>
            <Slink to={'/cuisine/Thai'} >
                <GiNoodles />
                <h4>Thai</h4>
            </Slink>
            <Slink to={'/cuisine/Japanese'} >
                <GiChopsticks />
                <h4>Japanese</h4>
            </Slink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`;

export default Category
*/