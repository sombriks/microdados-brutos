# microdados-brutos
script para carga de dados brutos do enem de 1998

posto que leitura de arquivo é mais rápido que inserções em banco, devemos nos abster das capacidades assíncronas do node para impedir eventuais estouros de memória.

para criar migrate:
No terminal knex migrate:make esquema_dados_anodoenem

Para rodar o ultimo migrate depois de preenchido.
 knex migrate:latest

Para rodar o script:
nome importadoranodoenem.js 
