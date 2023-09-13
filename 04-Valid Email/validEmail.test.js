const {validMail} = require ('./validEmail.js');



describe( 'ValidMail function',  () => {


    test("Checks if the filter function has a definition", () => {
        expect(validMail).toBeDefined();
      });


    test('should check if email includes "@" ', () => {
        expect(validMail('email@mail.com')).toBeTruthy();
        expect(() => validMail('email.mail.com')).toThrow();
        expect(() => validMail('email.mailcom')).toThrow();
    })

    test('should check if email includes ".com , .az .ru" ', () => {
        expect(validMail('yusif@mail.ru')).toBeTruthy();
        expect(validMail('yusif@mail.az')).toBeTruthy();
        expect(validMail('yusif@mail.com')).toBeTruthy();
    })


    // test("returned string shouldn't start with '@' ", () => {
    //     expect(validMail('@.email.com')).toBeFalsy();
    //     expect(validMail('@.com')).toBeFalsy();
    //     expect(validMail('@')).toBeFalsy();
    // })

    test('should be called with only strings', () => {
        expect(() => validMail(100)).toThrow();
        expect(() => validMail([email, mail])).toThrow();
        expect(() => validMail({})).toThrow();
        expect(() => validMail(null)).toThrow();
    })
})
