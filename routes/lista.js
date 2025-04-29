var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
      { id: 1, nome: 'Item Alfa', descricao: 'Descrição detalhada do Item Alfa.' },
      { id: 2, nome: 'Item Beta', descricao: 'O segundo item da nossa lista dinâmica.' },
      { id: 3, nome: 'Item Gama', descricao: 'Terceiro e último item exemplo.' },
      { id: 4, nome: 'Item Delta', descricao: 'Mais um item para testar.' },
      {id: 5, nome: 'Item Epsilon', descricao: 'mais um item do alfabeto grego.'},
      {id: 6, nome: 'Item Zeta', descricao: 'mais um item do alfabeto grego.'},
      {id: 7, nome: 'Item Eta', descricao: 'mais um item do alfabeto grego.'},
      {id: 8, nome: 'Item Theta', descricao: 'mais um item do alfabeto grego.'},
      {id: 9, nome: 'Item Iota', descricao: 'mais um item do alfabeto grego.'},
      {id: 10, nome: 'Item Kapa', descricao: 'mais um item do alfabeto grego.'},
      {id: 11, nome: 'Item Lambda', descricao: 'mais um item do alfabeto grego.'},
      {id: 12, nome: 'Item Mi', descricao: 'mais um item do alfabeto grego.'},
      {id: 13, nome: 'Item Ni', descricao: 'mais um item do alfabeto grego.'},
      {id: 14, nome: 'Item Csi', descricao: 'mais um item do alfabeto grego.'},
      {id: 15, nome: 'Item Ômicron', descricao: 'mais um item do alfabeto grego.'},
      {id: 16, nome: 'Item Pi', descricao: 'mais um item do alfabeto grego.'},
      {id: 17, nome: 'Item San', descricao: 'mais um item do alfabeto grego.'},
      {id: 18, nome: 'Item Qoppa', descricao: 'mais um item do alfabeto grego.'},
      {id: 19, nome: 'Item Rô', descricao: 'mais um item do alfabeto grego.'},
      {id: 20, nome: 'Item Sigma', descricao: 'mais um item do alfabeto grego.'},
      {id: 21, nome: 'Item Tau', descricao: 'mais um item do alfabeto grego.'},
      {id: 22, nome: 'Item Upsilon', descricao: 'mais um item do alfabeto grego.'},
      {id: 23, nome: 'Item Fi', descricao: 'mais um item do alfabeto grego.'},
      {id: 24, nome: 'Item Chi', descricao: 'mais um item do alfabeto grego.'},
      {id: 25, nome: 'Item Psi', descricao: 'mais um item do alfabeto grego.'},
      {id: 26, nome: 'Item Omega', descricao: 'mais um item do alfabeto grego.'},
      {id: 27, nome: 'Item Sampi', descricao: 'mais um item do alfabeto grego.'},

      
    
    
    ];



  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('lista', {
      titulo: 'Minha Lista Dinâmica',
      itensParaView: meusItens // Passando o array para a view
    });
  });

  module.exports = router;
