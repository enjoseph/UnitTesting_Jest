const {string} = require("./string");

describe('String Function:', ()=>  {

    test('Checks if the string function has a definition' , () => { 
        expect(string).toBeDefined()
      })


    test("string with one word", ()=> {
        expect(string('Development')).toBe("tnempoleveD")
    })

    test("string with spaces", ()=> {
        expect(string('   BAKU    ')).toBe('UKAB')
        expect(string('Hi everyone')).toBe('enoyreve iH')
        expect(string('  Hi    ,   How are     You    ?')).toBe('? uoY era woH , iH')
    })

    test('empty string ' , ( )=> {
        expect(()=> string(' ')).toThrow()
        expect(()=> string('           ')).toThrow()
        expect(()=> string(1)).toThrow()
        expect(()=> string(1+1)).toThrow()
    })

 
} )