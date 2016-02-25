var knexfile = require('./knexfile');
var knex     = require('knex')(knexfile.development);
var fs       = require('fs');

var file     = "DADOS_ENEM_2002.TXT";// process.argv[2];
var fd       = fs.openSync(file,'rs');
var buffer   = new Buffer(677);
var read     = 0;

function lineinsert(line){
  var n = 0;
  return knex("DADOS_ENEM_2002").insert({
  MASC_INSCRITO          : line.substring(n,n+=8),
  NU_ANO                 : line.substring(n,n+=8),
  DT_NASCIMENTO          : line.substring(n,n+=20),
  TP_SEXO                : line.substring(n,n+=8),
  CODMUNIC_INSC          : line.substring(n,n+=12),
  DS_CIDADE              : line.substring(n,n+=50),
  MASC_ESC               : line.substring(n,n+=8),
  CODMUNIC_ESC           : line.substring(n,n+=12),
  UF_ESC                 : line.substring(n,n+=14),
  SIGLA                  : line.substring(n,n+=2),
  MUN_ESC                : line.substring(n,n+=50),
  DEP                    : line.substring(n,n+=10),
  LOC                    : line.substring(n,n+=10),
  CODFUNC                : line.substring(n,n+=11),
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
  Q6_1                   : line.substring(n,n+=1),
  Q6_2                   : line.substring(n,n+=1),
  Q6_3                   : line.substring(n,n+=1),
  Q6_4                   : line.substring(n,n+=1),
  Q6_5                   : line.substring(n,n+=1),
  Q6_6                   : line.substring(n,n+=1),
  Q6_7                   : line.substring(n,n+=1),
  Q6_8                   : line.substring(n,n+=1),
  Q7                     : line.substring(n,n+=1),
  Q8                     : line.substring(n,n+=1),
  Q9                     : line.substring(n,n+=1),
  Q10                    : line.substring(n,n+=1),
  Q11                    : line.substring(n,n+=1),
  Q12                    : line.substring(n,n+=1),
  Q13                    : line.substring(n,n+=1),
  Q14                    : line.substring(n,n+=1),
  Q15                    : line.substring(n,n+=1),
  Q16_1                  : line.substring(n,n+=1),
  Q16_2                  : line.substring(n,n+=1),
  Q16_3                  : line.substring(n,n+=1),
  Q16_4                  : line.substring(n,n+=1),
  Q16_5                  : line.substring(n,n+=1),
  Q16_6                  : line.substring(n,n+=1),
  Q16_7                  : line.substring(n,n+=1),
  Q16_8                  : line.substring(n,n+=1),
  Q16_9                  : line.substring(n,n+=1),
  Q16_10                 : line.substring(n,n+=1),
  Q17_1                  : line.substring(n,n+=1),
  Q17_2                  : line.substring(n,n+=1),
  Q17_3                  : line.substring(n,n+=1),
  Q17_4                  : line.substring(n,n+=1),
  Q17_5                  : line.substring(n,n+=1),
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
  Q30_1                  : line.substring(n,n+=1),
  Q30_2                  : line.substring(n,n+=1),
  Q30_3                  : line.substring(n,n+=1),
  Q30_4                  : line.substring(n,n+=1),
  Q31                    : line.substring(n,n+=1),
  Q32                    : line.substring(n,n+=1),
  Q33_1                  : line.substring(n,n+=1),
  Q33_2                  : line.substring(n,n+=1),
  Q33_3                  : line.substring(n,n+=1),
  Q33_4                  : line.substring(n,n+=1),
  Q33_5                  : line.substring(n,n+=1),
  Q33_6                  : line.substring(n,n+=1),
  Q33_7                  : line.substring(n,n+=1),
  Q34_1                  : line.substring(n,n+=1),
  Q34_2                  : line.substring(n,n+=1),
  Q34_3                  : line.substring(n,n+=1),
  Q34_4                  : line.substring(n,n+=1),
  Q34_5                  : line.substring(n,n+=1),
  Q34_6                  : line.substring(n,n+=1),
  Q34_7                  : line.substring(n,n+=1),
  Q35                    : line.substring(n,n+=1),
  Q36                    : line.substring(n,n+=1),
  Q37                    : line.substring(n,n+=1),
  Q38                    : line.substring(n,n+=1),
  Q39                    : line.substring(n,n+=1),
  Q40                    : line.substring(n,n+=1),
  Q41                    : line.substring(n,n+=1),
  Q42_1                  : line.substring(n,n+=1),
  Q42_2                  : line.substring(n,n+=1),
  Q42_3                  : line.substring(n,n+=1),
  Q42_4                  : line.substring(n,n+=1),
  Q42_5                  : line.substring(n,n+=1),
  Q43_1                  : line.substring(n,n+=1),
  Q43_2                  : line.substring(n,n+=1),
  Q43_3                  : line.substring(n,n+=1),
  Q43_4                  : line.substring(n,n+=1),
  Q43_5                  : line.substring(n,n+=1),
  Q44_1                  : line.substring(n,n+=1),
  Q44_2                  : line.substring(n,n+=1),
  Q44_3                  : line.substring(n,n+=1),
  Q44_4                  : line.substring(n,n+=1),
  Q44_5                  : line.substring(n,n+=1),
  Q44_6                  : line.substring(n,n+=1),
  Q44_7                  : line.substring(n,n+=1),
  Q44_8                  : line.substring(n,n+=1),
  Q44_9                  : line.substring(n,n+=1),
  Q44_10                 : line.substring(n,n+=1),
  Q44_11                 : line.substring(n,n+=1),
  Q44_12                 : line.substring(n,n+=1),
  Q44_13                 : line.substring(n,n+=1),
  Q44_14                 : line.substring(n,n+=1),
  Q44_15                 : line.substring(n,n+=1),
  Q44_16                 : line.substring(n,n+=1),
  Q45_1                  : line.substring(n,n+=1),
  Q45_2                  : line.substring(n,n+=1),
  Q45_3                  : line.substring(n,n+=1),
  Q45_4                  : line.substring(n,n+=1),
  Q45_5                  : line.substring(n,n+=1),
  Q45_6                  : line.substring(n,n+=1),
  Q45_7                  : line.substring(n,n+=1),
  Q45_8                  : line.substring(n,n+=1),
  Q46                    : line.substring(n,n+=1),
  Q47_1                  : line.substring(n,n+=1),
  Q47_2                  : line.substring(n,n+=1),
  Q47_3                  : line.substring(n,n+=1),
  Q47_4                  : line.substring(n,n+=1),
  Q47_5                  : line.substring(n,n+=1),
  Q47_6                  : line.substring(n,n+=1),
  Q47_7                  : line.substring(n,n+=1),
  Q48_1                  : line.substring(n,n+=1),
  Q48_2                  : line.substring(n,n+=1),
  Q48_3                  : line.substring(n,n+=1),
  Q48_4                  : line.substring(n,n+=1),
  Q48_5                  : line.substring(n,n+=1),
  Q48_6                  : line.substring(n,n+=1),
  Q48_7                  : line.substring(n,n+=1),
  Q48_8                  : line.substring(n,n+=1),
  Q48_9                  : line.substring(n,n+=1),
  Q48_10                 : line.substring(n,n+=1),
  Q48_11                 : line.substring(n,n+=1),
  Q48_12                 : line.substring(n,n+=1),
  Q49                    : line.substring(n,n+=1),
  Q50                    : line.substring(n,n+=1),
  Q51                    : line.substring(n,n+=1),
  Q52                    : line.substring(n,n+=1),
  Q53                    : line.substring(n,n+=1),
  Q54_1                  : line.substring(n,n+=1),
  Q54_2                  : line.substring(n,n+=1),
  Q54_3                  : line.substring(n,n+=1),
  Q54_4                  : line.substring(n,n+=1),
  Q54_5                  : line.substring(n,n+=1),
  Q54_6                  : line.substring(n,n+=1),
  Q54_7                  : line.substring(n,n+=1),
  Q54_8                  : line.substring(n,n+=1),
  Q55                    : line.substring(n,n+=1),
  Q56                    : line.substring(n,n+=1),
  Q57_1                  : line.substring(n,n+=1),
  Q57_2                  : line.substring(n,n+=1),
  Q57_3                  : line.substring(n,n+=1),
  Q57_4                  : line.substring(n,n+=1),
  Q57_5                  : line.substring(n,n+=1),
  Q57_6                  : line.substring(n,n+=1),
  Q57_7                  : line.substring(n,n+=1),
  Q58_1                  : line.substring(n,n+=1),
  Q58_2                  : line.substring(n,n+=1),
  Q58_3                  : line.substring(n,n+=1),
  Q58_4                  : line.substring(n,n+=1),
  Q58_5                  : line.substring(n,n+=1),
  Q58_6                  : line.substring(n,n+=1),
  Q58_7                  : line.substring(n,n+=1),
  Q58_8                  : line.substring(n,n+=1),
  Q58_9                  : line.substring(n,n+=1),
  Q58_10                 : line.substring(n,n+=1),
  Q59_1                  : line.substring(n,n+=1),
  Q59_2                  : line.substring(n,n+=1),
  Q60_1                  : line.substring(n,n+=1),
  Q60_2                  : line.substring(n,n+=1),
  Q61_1                  : line.substring(n,n+=1),
  Q61_2                  : line.substring(n,n+=1),
  Q62_1                  : line.substring(n,n+=1),
  Q62_2                  : line.substring(n,n+=1),
  Q63_1                  : line.substring(n,n+=1),
  Q63_2                  : line.substring(n,n+=1),
  Q64_1                  : line.substring(n,n+=1),
  Q64_2                  : line.substring(n,n+=1),
  Q64_3                  : line.substring(n,n+=1),
  Q64_4                  : line.substring(n,n+=1),
  Q64_5                  : line.substring(n,n+=1),
  Q64_6                  : line.substring(n,n+=1),
  Q64_7                  : line.substring(n,n+=1),
  Q64_8                  : line.substring(n,n+=1),
  Q64_9                  : line.substring(n,n+=1),
  Q64_10                 : line.substring(n,n+=1),
  Q64_11                 : line.substring(n,n+=1),
  Q64_12                 : line.substring(n,n+=1),
  Q64_13                 : line.substring(n,n+=1),
  Q65_1                  : line.substring(n,n+=1),
  Q65_2                  : line.substring(n,n+=1),
  Q65_3                  : line.substring(n,n+=1),
  Q66                    : line.substring(n,n+=1),
  Q67                    : line.substring(n,n+=1),
  Q68                    : line.substring(n,n+=1),
  Q69_1                  : line.substring(n,n+=1),
  Q69_2                  : line.substring(n,n+=1),
  Q69_3                  : line.substring(n,n+=1),
  Q69_4                  : line.substring(n,n+=1),
  Q69_5                  : line.substring(n,n+=1),
  Q69_6                  : line.substring(n,n+=1),
  Q69_7                  : line.substring(n,n+=1),
  Q69_8                  : line.substring(n,n+=1),
  Q70                    : line.substring(n,n+=1),
  Q71_1                  : line.substring(n,n+=1),
  Q71_2                  : line.substring(n,n+=1),
  Q71_3                  : line.substring(n,n+=1),
  Q71_4                  : line.substring(n,n+=1),
  Q71_5                  : line.substring(n,n+=1),
  Q71_6                  : line.substring(n,n+=1),
  Q72_1                  : line.substring(n,n+=1),
  Q72_2                  : line.substring(n,n+=1),
  Q72_3                  : line.substring(n,n+=1),
  Q72_4                  : line.substring(n,n+=1),
  Q72_5                  : line.substring(n,n+=1),
  Q72_6                  : line.substring(n,n+=1),
  Q72_7                  : line.substring(n,n+=1),
  Q73_1                  : line.substring(n,n+=1),
  Q73_2                  : line.substring(n,n+=1),
  Q73_3                  : line.substring(n,n+=1),
  Q73_4                  : line.substring(n,n+=1),
  Q73_5                  : line.substring(n,n+=1),
  Q73_6                  : line.substring(n,n+=1),
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
