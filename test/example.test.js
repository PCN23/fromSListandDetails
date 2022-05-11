// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderStadiumLi } from './stadium-detail.js';
import { stadiums } from './utils..js';

const test = QUnit.test;

test('render stadiumsLI should return Li with link', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li><a href=".stadiums-detail/?id=1">Providence Park</a></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderStadiumLi(stadiums[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
