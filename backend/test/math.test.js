const {add, subtract, multiply, divide} = require('../math');
describe('Calculator Tests', ()=>{
    it('should add 2 nos.', ()=>{
        expect(add(5,3)).toBe(8);
    })

    it('should subtract 2 nos.', ()=>{
        expect(subtract(5,3)).toBe(2);
    })

    it('should multiply 2 nos. ', ()=>{
        expect(multiply(5,3)).toBe(15);
    })

    it('should divide 2 nos.', ()=>{
        expect(divide(15,3)).toBe(5);
    })

    it('should throw error when dividing by 0', ()=>{
        expect(()=> divide(5, 0)).toThrow('Cannot divide by 0');
    })

    it('should add negative nos.', ()=>{
        expect(add(-5, -3)).toBe(-8);
    })
})