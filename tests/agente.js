module.exports ={
    'cadastrar ponto de medicao': (browser) => {

        let agente = browser.page.agente()

        browser.resizeWindow(1920, 1080)

        agente.navigate()
        .waitForElementVisible('@telaInicial', 3000)
        .waitForElementVisible('@botaoInicial', 3000)
        .click('@botaoInicial')
        .waitForElementVisible('@botaocadastro', 3000)
        .click('@botaocadastro')
        .useXpath()
        .waitForElementVisible('//a[6]/div/div/span', 2000)
        .click('//a[6]/div/div/span')
        .waitForElementVisible('//div/div/div/a/button/span', 2000)
        .click('//div/div/div/a/button/span')
        .setValue('input[name=code_ccee]', '123')


     

       
     
                                                                                                                                                                   

        .pause(8000)

    }

}