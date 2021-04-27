describe('Create Account', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    const usernameInput = () => cy.get('input[name="username"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const roleSelect = () => cy.get('select[name="role"]')
    const submitBtn = () => cy.get('button')


    it('sanity test to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}) 
        expect({}).to.eql({})
    });

    it("can type text into inputs", () => {
        usernameInput()
          .should("have.value", "")
          .type("billy")
          .should("have.value", "billy")

        passwordInput()
          .should("have.value", "")
          .type("secret")
          .should("have.value", "secret")
        
    });

    it('should submit the form once details are filled out', () => {
        usernameInput().type("Jordan")
        roleSelect().select('Owner')
        passwordInput().type("secret")
        submitBtn().click()
    })
})