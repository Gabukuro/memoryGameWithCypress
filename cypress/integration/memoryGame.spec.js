
context('Jogo da memoria', () => {

    it('acessar a aplicacao', () => {
        // https://on.cypress.io/type
        cy.visit('http://localhost:3000/');
        cy.get('#div2')
            .should('not.have.attr', 'display: none')
    });
    it('verifica transicao div1 ao iniciar o jogo', () => {
            
        cy.get('#btn1').click();
        cy.get('#div1')
            .should('not.have.attr','display: none');

    });
    it('verificar imagens de animais', () => {
        // cy.get('#img').click();
        cy.get('#img0').should('have.attr', 'src','/images/gato.png');
        cy.get('#img1').should('have.attr', 'src','/images/macaco.png');
        cy.get('#img2').should('have.attr', 'src','/images/porco.png');
        cy.get('#img3').should('have.attr', 'src','/images/ovelha.png');
        cy.get('#img4').should('have.attr', 'src','/images/rinoceronte.png');
        cy.get('#img5').should('have.attr', 'src','/images/gato.png');
        cy.get('#img6').should('have.attr', 'src','/images/macaco.png');
        cy.get('#img7').should('have.attr', 'src','/images/porco.png');
        cy.get('#img8').should('have.attr', 'src','/images/ovelha.png');
        cy.get('#img9').should('have.attr', 'src','/images/rinoceronte.png');
        cy.get('#img10').should('have.attr', 'src','/images/rato.png');
        cy.get('#img11').should('have.attr', 'src','/images/rato.png');
    });
    it('verifica funcao comparar quando usuario acerta', () => {
        cy.wait(1000);
        cy.get('#img0').click();
        cy.get('#img5').click();

        cy.get('#img0').should('have.attr', 'src','/images/branco.png');
        cy.get('#img5').should('have.attr', 'src','/images/branco.png');
    });
    it('verifica funcao comparar quando usuario erra', () => {
        cy.get('#img1').click();
        cy.get('#img2').click();

        cy.get('#img1').should('have.attr', 'src','/images/fundo.png');
        cy.get('#img2').should('have.attr', 'src','/images/fundo.png');
    });
    it('verifica se mensagem sera exibida ao finalizar o jogo', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#btn1').click();
        cy.wait(1000);

        cy.get('#img0').click();
        cy.get('#img5').click();
        cy.wait(500);
        cy.get('#img1').click();
        cy.get('#img6').click();
        cy.wait(500);
        cy.get('#img4').click();
        cy.get('#img9').click();
        cy.wait(500);
        cy.get('#img2').click();
        cy.get('#img7').click();
        cy.wait(500);
        cy.get('#img3').click();
        cy.get('#img8').click();
        cy.wait(500);
        cy.get('#img10').click();
        cy.get('#img11').click();
        cy.wait(500);


        cy.get('#div3')
            .invoke('attr', 'style', 'display: block')
            .should('have.attr', 'style', 'display: block')
    });
    it('verifica se ao clicar em jogar novamente o jogo sera recarregado', () => {

        cy.get('#div4').click();
        cy.get('#btn1')
            .should('not.have.attr', 'display: none')
    })
});