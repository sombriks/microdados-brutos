# microdados-brutos
scripts para criar arquivos de carga de dados brutos dos enem's de 1998 até 2014

a partir de arquivos *JSON*, criamos tabelas usando os arquivos de migrate do [knexjs](http://knexjs.org/)

Para criar o esquema de banco de dados, execute as migrações de banco:

```$ knex migrate:latest```

Para criar, a partir dos arquivos do exame, scripts sql de inserção:

```$ node scriptortxt2sql.js DADOS_ENEM_2011.TXT```

Caso o formato do arquivo já seja *.csv*:

```$ node scriptorcsv2sql.js MICRODADOS_ENEM_2014.csv```

Por fim, o arquivo sql gerado pode ser importado normalmente:

```$ psql -h localhost -U postgres microdadosenem -W < MICRODADOS_ENEM_2014.sql```

Todos os dados de todas as edições do exame podem ser encontrados [aqui](http://portal.inep.gov.br/basica-levantamentos-acessar)
