var knexfile = require('./knexfile');
var knex     = require('knex')(knexfile.production);
var fs       = require('fs');

var file     = process.argv[2];
var fd       = fs.openSync(file,'rs');
var buffer   = new Buffer(478);
var read     = 0;

function lineinsert(line){
  var n = 0;
  return knex("dadosbrutos").insert({
    MASC_INSCRITO          : line.substring(n,n+=8),
    NU_ANO                 : line.substring(n,n+=8),
    DT_NASCIMENTO          : line.substring(n,n+=20),
    TP_SEXO                : line.substring(n,n+=8),
    CODMUNIC_INSC          : line.substring(n,n+=12),
    DS_CIDADE              : line.substring(n,n+=50),
    IN_PRESENCA            : line.substring(n,n+=8),
    VL_PERC_COMP1          : line.substring(n,n+=8),
    VL_PERC_COMP2          : line.substring(n,n+=8),
    VL_PERC_COMP3          : line.substring(n,n+=8),
    VL_PERC_COMP4          : line.substring(n,n+=8),
    VL_PERC_COMP5          : line.substring(n,n+=8),
    NU_NOTA_OBJETIVA       : line.substring(n,n+=8),
    IN_SITUACAO            : line.substring(n,n+=1),
    NU_NOTA_REDACAO_COMP1  : line.substring(n,n+=8),
    NU_NOTA_REDACAO_COMP2  : line.substring(n,n+=8),
    NU_NOTA_REDACAO_COMP3  : line.substring(n,n+=8),
    NU_NOTA_REDACAO_COMP4  : line.substring(n,n+=8),
    NU_NOTA_REDACAO_COMP5  : line.substring(n,n+=8),
    NU_NOTA_GLOBAL_REDACAO : line.substring(n,n+=8),
    IN_QSE                 : line.substring(n,n+=1),
    Q1                     : line.substring(n,n+=1),
    Q2                     : line.substring(n,n+=1),
    Q3                     : line.substring(n,n+=1),
    Q4                     : line.substring(n,n+=1),
    Q5                     : line.substring(n,n+=1),
    Q6                     : line.substring(n,n+=1),
    Q7                     : line.substring(n,n+=1),
    Q8                     : line.substring(n,n+=1),
    Q9                     : line.substring(n,n+=1),
    Q10                    : line.substring(n,n+=1),
    Q11                    : line.substring(n,n+=1),
    Q12                    : line.substring(n,n+=1),
    Q13                    : line.substring(n,n+=1),
    Q14                    : line.substring(n,n+=1),
    Q15                    : line.substring(n,n+=1),
    Q16                    : line.substring(n,n+=1),
    Q17                    : line.substring(n,n+=1),
    Q18                    : line.substring(n,n+=1),
    Q19                    : line.substring(n,n+=1),
    Q20                    : line.substring(n,n+=1),
    Q21                    : line.substring(n,n+=1),
    Q22                    : line.substring(n,n+=1),
    Q23                    : line.substring(n,n+=1),
    Q24                    : line.substring(n,n+=1),
    Q25                    : line.substring(n,n+=1),
    Q26                    : line.substring(n,n+=1),
    Q27                    : line.substring(n,n+=1),
    Q28                    : line.substring(n,n+=1),
    Q29                    : line.substring(n,n+=1),
    Q30                    : line.substring(n,n+=1),
    Q31                    : line.substring(n,n+=1),
    Q32                    : line.substring(n,n+=1),
    Q33                    : line.substring(n,n+=1),
    Q34                    : line.substring(n,n+=1),
    Q35                    : line.substring(n,n+=1),
    Q36                    : line.substring(n,n+=1),
    Q37                    : line.substring(n,n+=1),
    Q38                    : line.substring(n,n+=1),
    Q39                    : line.substring(n,n+=1),
    Q40                    : line.substring(n,n+=1),
    Q41                    : line.substring(n,n+=1),
    Q42                    : line.substring(n,n+=1),
    Q43                    : line.substring(n,n+=1),
    Q44                    : line.substring(n,n+=1),
    Q45                    : line.substring(n,n+=1),
    Q46                    : line.substring(n,n+=1),
    Q47                    : line.substring(n,n+=1),
    Q48                    : line.substring(n,n+=1),
    Q49                    : line.substring(n,n+=1),
    Q50                    : line.substring(n,n+=1),
    Q51                    : line.substring(n,n+=1),
    Q52                    : line.substring(n,n+=1),
    Q53                    : line.substring(n,n+=1),
    Q54                    : line.substring(n,n+=1),
    Q55                    : line.substring(n,n+=1),
    Q56                    : line.substring(n,n+=1),
    Q57                    : line.substring(n,n+=1),
    Q58                    : line.substring(n,n+=1),
    Q59                    : line.substring(n,n+=1),
    Q60                    : line.substring(n,n+=1),
    Q61                    : line.substring(n,n+=1),
    Q62                    : line.substring(n,n+=1),
    Q63                    : line.substring(n,n+=1),
    Q64                    : line.substring(n,n+=1),
    Q65                    : line.substring(n,n+=1),
    Q66                    : line.substring(n,n+=1),
    Q67                    : line.substring(n,n+=1),
    Q68                    : line.substring(n,n+=1),
    Q69                    : line.substring(n,n+=1),
    Q70                    : line.substring(n,n+=1),
    Q71                    : line.substring(n,n+=1),
    Q72                    : line.substring(n,n+=1),
    Q73                    : line.substring(n,n+=1),
    Q74                    : line.substring(n,n+=1),
    Q75                    : line.substring(n,n+=1),
    Q76                    : line.substring(n,n+=1),
    Q77                    : line.substring(n,n+=1),
    Q78                    : line.substring(n,n+=1),
    Q79                    : line.substring(n,n+=1),
    Q80                    : line.substring(n,n+=1),
    Q81                    : line.substring(n,n+=1),
    Q82                    : line.substring(n,n+=1),
    Q83                    : line.substring(n,n+=1),
    Q84                    : line.substring(n,n+=1),
    Q85                    : line.substring(n,n+=1),
    Q86                    : line.substring(n,n+=1),
    Q87                    : line.substring(n,n+=1),
    Q88                    : line.substring(n,n+=1),
    Q89                    : line.substring(n,n+=1),
    Q90                    : line.substring(n,n+=1),
    Q91                    : line.substring(n,n+=1),
    Q92                    : line.substring(n,n+=1),
    Q93                    : line.substring(n,n+=1),
    Q94                    : line.substring(n,n+=1),
    Q95                    : line.substring(n,n+=1),
    Q96                    : line.substring(n,n+=1),
    Q97                    : line.substring(n,n+=1),
    Q98                    : line.substring(n,n+=1),
    Q99                    : line.substring(n,n+=1),
    Q100                   : line.substring(n,n+=1),
    Q101                   : line.substring(n,n+=1),
    Q102                   : line.substring(n,n+=1),
    Q103                   : line.substring(n,n+=1),
    Q104                   : line.substring(n,n+=1),
    Q105                   : line.substring(n,n+=1),
    Q106                   : line.substring(n,n+=1),
    Q107                   : line.substring(n,n+=1),
    Q108                   : line.substring(n,n+=1),
    Q109                   : line.substring(n,n+=1),
    Q110                   : line.substring(n,n+=1),
    Q111                   : line.substring(n,n+=1),
    Q112                   : line.substring(n,n+=1),
    Q113                   : line.substring(n,n+=1),
    Q114                   : line.substring(n,n+=1),
    Q115                   : line.substring(n,n+=1),
    Q116                   : line.substring(n,n+=1),
    Q117                   : line.substring(n,n+=1),
    Q118                   : line.substring(n,n+=1),
    Q119                   : line.substring(n,n+=1),
    Q120                   : line.substring(n,n+=1),
    Q121                   : line.substring(n,n+=1),
    Q122                   : line.substring(n,n+=1),
    Q123                   : line.substring(n,n+=1),
    Q124                   : line.substring(n,n+=1),
    Q125                   : line.substring(n,n+=1),
    Q126                   : line.substring(n,n+=1),
    Q127                   : line.substring(n,n+=1),
    Q128                   : line.substring(n,n+=1),
    Q129                   : line.substring(n,n+=1),
    Q130                   : line.substring(n,n+=1),
    Q131                   : line.substring(n,n+=1),
    Q132                   : line.substring(n,n+=1),
    Q133                   : line.substring(n,n+=1),
    Q134                   : line.substring(n,n+=1),
    Q135                   : line.substring(n,n+=1),
    Q136                   : line.substring(n,n+=1),
    Q137                   : line.substring(n,n+=1),
    VT_RESP_OBJETIVA       : line.substring(n,n+=63),
    TP_PROVA               : line.substring(n,n+=1),
    VT_GABARITO_PROVA      : line.substring(n,n+=63),
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
