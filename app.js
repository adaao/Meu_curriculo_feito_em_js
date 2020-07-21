const express = require('express');
const path = require('path');

const port = 3000;
const app = express();


//setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//rotas
app.get('/', function(req, res, next){
   res.render('index',{
      title: 'meu servido em Express',
      version: "0.0.0"
   });
});

app.get('/curriculo', function(req, res, next){
   res.render('curriculo', {
      title: 'Meu currículo',
      name: 'Adaão R. Mascarelli',
      profession: 'Autônomo',
      description: 'Estudando desenvolvimento com JavaScript, realizo trabalhos avulsos de manutençaõ e suporte de micro computadores, e entregas de bicicleta por aplicativos.',
      experience: [{
          company: 'World Computer',
          office: 'Estagiário',
          description: 'Prestar suporte N1, manutenção de computadores, automação de processos com scripts (Python, Shell, CMD).'
      },
      {
          company: 'Saybolt Inspeções Técnicas',
          office: 'Inspetor 1',
          description: 'Inspecionar navios e moegas, realizar amostragem, documentar observações.'
      }],
      education: [{
          institution: 'FATEC Rubens Lara',
          description: 'Análise e Desenvolvimento de Sistemas.'
      }],
      skills: ['Shell', 'JavaScript', 'Docker']
  });
});


//server
app.listen(port, err => {
   console.log(`Server listening on port ${port}`);
})