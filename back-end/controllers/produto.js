var produtos = [
   {
      codigo: 1101,
      descricao: 'Notebook Intel Core i7 8GB',
      preco: 2799,
      quantidade: 3,
      imagem: ''
   },
   {
      codigo: 1102,
      descricao: 'Notebook Intel Core i5 6GB',
      preco: 2399,
      quantidade: 2,
      imagem: ''
   },
   {
      codigo: 1201,
      descricao: 'Smartphone LG K10',
      preco: 579,
      quantidade: 4,
      imagem: ''
   },
   {
      codigo: 1202,
      descricao: 'Smartphone Samsung J7',
      preco: 679,
      quantidade: 6,
      imagem: ''
   }
]

module.exports = function() {

   controller = {};

   controller.listar = function(req, res) {
      res.json(produtos).end();
   }

   return controller;

}