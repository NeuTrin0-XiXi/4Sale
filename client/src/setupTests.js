// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


function Body(props) {
    const { pathname } = props.location;
    const id = pathname.slice(9);
    const category = pathname.slice(5);
    const query = pathname.slice(8);
    console.log(pathname)
  
    
}





