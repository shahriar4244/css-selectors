describe('cssselectors', () =>{
   
    it("csssselectors", ()=>{

        cy.visit('https://citizen-dev.ph.orangebd.com')
        cy.get('.flex.flex-row.items-center.input_block.gap-3.px-5').type("Bus")
        cy.wait(4000)
        cy.get("i[class='fa fa-arrow-right ml-auto text-green-700 dark:text-gray-200']").click()
        cy.get("li[class='flex flex-row items-center gap-3'] a").contains("Business Permit Registration and Renewal") //assertion


 })
})