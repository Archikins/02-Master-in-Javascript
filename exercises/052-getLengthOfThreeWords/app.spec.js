const { getLengthOfThreeWords} = require('./app.js');

describe('Test for Get length', () => {
    it('should exist', () => {
        
        expect(getLengthOfThreeWords('some', 'other', 'words')).toBeDefined();
    });
    it('The result should be 6', () => {
        
        expect(getLengthOfThreeWords('some', 'other', 'words')).toBe(14);
    });

});