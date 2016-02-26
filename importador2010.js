var knexfile = require('./knexfile');
var knex     = require('knex')(knexfile.development);
var fs       = require('fs');

var file     = "DADOS_ENEM_2010.TXT";// process.argv[2];
var fd       = fs.openSync(file,'rs');
var buffer   = new Buffer(930);
var read     = 0;

function lineinsert(line){
  var n = 0;
  return knex("DADOS_ENEM_2010").insert({
  NU_INSCRICAO              : line.substring(n,n+=12),
  NU_ANO                    : line.substring(n,n+=4),
  IDADE                     : line.substring(n,n+=3),
  TP_SEXO                   : line.substring(n,n+=1),
  COD_MUNIC_INSC            : line.substring(n,n+=7),
  NO_MUNICIPIO_INSC         : line.substring(n,n+=150),
  UF_INSC                   : line.substring(n,n+=2),
  ST_CONCLUSAO              : line.substring(n,n+=1),
  IN_TP_ENSINO              : line.substring(n,n+=1),
  IN_CERTIFICADO            : line.substring(n,n+=1),
  IN_BRAILLE                : line.substring(n,n+=1),
  IN_AMPLIADA               : line.substring(n,n+=1),
  IN_LEDOR                  : line.substring(n,n+=1),
  IN_ACESSO                 : line.substring(n,n+=1),
  IN_TRANSCRICAO            : line.substring(n,n+=1),
  IN_LIBRAS                 : line.substring(n,n+=1),
  IN_UNIDADE_PRISIONAL      : line.substring(n,n+=1),
  IN_BAIXA_VISAO            : line.substring(n,n+=1),
  IN_CEGUEIRA               : line.substring(n,n+=1),
  IN_DEFICIENCIA_AUDITIVA   : line.substring(n,n+=1),
  IN_DEFICIENCIA_FISICA     : line.substring(n,n+=1),
  IN_DEFICIENCIA_MENTAL     : line.substring(n,n+=1),
  IN_DEFICIT_ATENCAO        : line.substring(n,n+=1),
  IN_DISLEXIA               : line.substring(n,n+=1),
  IN_GESTANTE               : line.substring(n,n+=1),
  IN_LACTANTE               : line.substring(n,n+=1),
  IN_LEITURA_LABIAL         : line.substring(n,n+=1),
  IN_SABATISTA              : line.substring(n,n+=1),
  IN_SURDEZ                 : line.substring(n,n+=1),
  TP_ESTADO_CIVIL           : line.substring(n,n+=1),
  PK_COD_ENTIDADE           : line.substring(n,n+=8),
  COD_MUNICIPIO_ESC         : line.substring(n,n+=7),
  NO_MUNICIPIO_ESC          : line.substring(n,n+=150),
  UF_ESC                    : line.substring(n,n+=2),
  ID_DEPENDENCIA_ADM        : line.substring(n,n+=1),
  ID_LOCALIZACAO            : line.substring(n,n+=1),
  SIT_FUNC                  : line.substring(n,n+=1),
  COD_MUNICIPIO_PROVA       : line.substring(n,n+=7),
  NO_MUNICIPIO_PROVA        : line.substring(n,n+=150),
  UF_CIDADE_PROVA           : line.substring(n,n+=2),
  IN_PRESENCA_CN            : line.substring(n,n+=1),
  IN_PRESENCA_CH            : line.substring(n,n+=1),
  IN_PRESENCA_LC            : line.substring(n,n+=1),
  IN_PRESENCA_MT            : line.substring(n,n+=1),
  NU_NT_CN                  : line.substring(n,n+=9),
  NU_NT_CH                  : line.substring(n,n+=9),
  NU_NT_LC                  : line.substring(n,n+=9),
  NU_NT_MT                  : line.substring(n,n+=9),
  TX_RESPOSTAS_CN           : line.substring(n,n+=45),
  TX_RESPOSTAS_CH           : line.substring(n,n+=45),
  TX_RESPOSTAS_LC           : line.substring(n,n+=45),
  TX_RESPOSTAS_MT           : line.substring(n,n+=45),
  ID_PROVA_CN               : line.substring(n,n+=2),
  ID_PROVA_CH               : line.substring(n,n+=2),
  ID_PROVA_LC               : line.substring(n,n+=2),
  ID_PROVA_MT               : line.substring(n,n+=2),
  TP_LINGUA                 : line.substring(n,n+=1),
  DS_GABARITO_CN            : line.substring(n,n+=45),
  DS_GABARITO_CH            : line.substring(n,n+=45),
  DS_GABARITO_LC            : line.substring(n,n+=50),//É 50 mesmo?
  DS_GABARITO_MT            : line.substring(n,n+=45),
  IN_STATUS_REDACAO         : line.substring(n,n+=1),
  NU_NOTA_COMP1             : line.substring(n,n+=9),
  NU_NOTA_COMP2             : line.substring(n,n+=9),
  NU_NOTA_COMP3             : line.substring(n,n+=9),
  NU_NOTA_COMP4             : line.substring(n,n+=9),
  NU_NOTA_COMP5             : line.substring(n,n+=9),
  NU_NOTA_REDACAO           : line.substring(n,n+=9),

//QUESTIONARIO_SOCIO_ECONOMICO_ENEM_2010
  NU_INSCRICAO              : line.substring(n,n+=12),
  IN_QSE                    : line.substring(n,n+=1),
  Q01                       : line.substring(n,n+=1),
  Q02                       : line.substring(n,n+=1),
  Q03                       : line.substring(n,n+=1),
  Q04                       : line.substring(n,n+=1),
  Q05                       : line.substring(n,n+=1),
  Q06                       : line.substring(n,n+=1),
  Q07                       : line.substring(n,n+=1),
  Q08                       : line.substring(n,n+=1),
  Q09                       : line.substring(n,n+=1),
  Q10                       : line.substring(n,n+=1),
  Q11                       : line.substring(n,n+=1),
  Q12                       : line.substring(n,n+=1),
  Q13                       : line.substring(n,n+=1),
  Q14                       : line.substring(n,n+=1),
  Q15                       : line.substring(n,n+=1),
  Q16                       : line.substring(n,n+=1),
  Q17                       : line.substring(n,n+=1),
  Q18                       : line.substring(n,n+=1),
  Q19                       : line.substring(n,n+=1),
  Q20                       : line.substring(n,n+=1),
  Q21                       : line.substring(n,n+=1),
  Q22                       : line.substring(n,n+=1),
  Q23                       : line.substring(n,n+=2),
  Q24                       : line.substring(n,n+=1),
  Q25                       : line.substring(n,n+=1),
  Q26                       : line.substring(n,n+=1),
  Q27                       : line.substring(n,n+=1),
  Q28                       : line.substring(n,n+=1),
  Q29                       : line.substring(n,n+=1),
  Q30                       : line.substring(n,n+=1),
  Q31                       : line.substring(n,n+=1),
  Q32                       : line.substring(n,n+=1),
  Q33                       : line.substring(n,n+=1),
  Q34                       : line.substring(n,n+=1),
  Q35                       : line.substring(n,n+=1),
  Q36                       : line.substring(n,n+=1),
  Q37                       : line.substring(n,n+=1),
  Q38                       : line.substring(n,n+=1),
  Q39                       : line.substring(n,n+=1),
  Q40                       : line.substring(n,n+=1),
  Q41                       : line.substring(n,n+=1),
  Q42                       : line.substring(n,n+=1),
  Q43                       : line.substring(n,n+=1),
  Q44                       : line.substring(n,n+=1),
  Q45                       : line.substring(n,n+=1),
  Q46                       : line.substring(n,n+=1),
  Q47                       : line.substring(n,n+=1),
  Q48                       : line.substring(n,n+=1),
  Q49                       : line.substring(n,n+=1),
  Q50                       : line.substring(n,n+=1),
  Q51                       : line.substring(n,n+=1),
  Q52                       : line.substring(n,n+=1),
  Q53                       : line.substring(n,n+=1),
  Q54                       : line.substring(n,n+=1),
  Q55                       : line.substring(n,n+=1),
  Q56                       : line.substring(n,n+=1),
  Q57                       : line.substring(n,n+=1),
}).then(function(ret){
    return ret;
  });
}
function lineread(){
  if(read = fs.readSync(fd,buffer,0,buffer.length)){
    lineinsert(buffer.toString()).then(function(ret){
      lineread();
    });
  }else{
    console.log("Import concluído");
    process.exit(0);
  }
}

console.log("Iniciando importação de "+file);
lineread();
