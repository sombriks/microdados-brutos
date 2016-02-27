var knexfile = require('./knexfile');
var knex     = require('knex')(knexfile.development);
var fs       = require('fs');

var file     = "DADOS_ENEM_2009.TXT";// process.argv[2];
var fd       = fs.openSync(file,'rs');
var buffer   = new Buffer(930);
var read     = 0;

function lineinsert(line){
  var n = 0;
  return knex("DADOS_ENEM_2009").insert({
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
  IN_OUTRO                  : line.substring(n,n+=1),
  IN_LIBRAS                 : line.substring(n,n+=1),
  IN_UNIDADE_PRISIONAL      : line.substring(n,n+=1),
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
  DS_GABARITO_CN            : line.substring(n,n+=45),
  DS_GABARITO_CH            : line.substring(n,n+=45),
  DS_GABARITO_LC            : line.substring(n,n+=45),
  DS_GABARITO_MT            : line.substring(n,n+=45),
  IN_STATUS_REDACAO         : line.substring(n,n+=1),
  NU_NOTA_COMP1             : line.substring(n,n+=9),
  NU_NOTA_COMP2             : line.substring(n,n+=9),
  NU_NOTA_COMP3             : line.substring(n,n+=9),
  NU_NOTA_COMP4             : line.substring(n,n+=9),
  NU_NOTA_COMP5             : line.substring(n,n+=9),
  NU_NOTA_REDACAO           : line.substring(n,n+=9),

//QUESTIONARIO_SOCIO_ECONOMICO_ENEM_2009
  NU_INSCRICAO              : line.substring(n,n+=12),
  IN_QSE                    : line.substring(n,n+=1),
  Q1                        : line.substring(n,n+=1),
  Q2                        : line.substring(n,n+=1),
  Q3                        : line.substring(n,n+=1),
  Q4                        : line.substring(n,n+=1),
  Q5                        : line.substring(n,n+=1),
  Q6                        : line.substring(n,n+=1),
  Q7                        : line.substring(n,n+=1),
  Q8                        : line.substring(n,n+=1),
  Q9                        : line.substring(n,n+=1),
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
  Q58                       : line.substring(n,n+=1),
  Q59                       : line.substring(n,n+=1),
  Q60                       : line.substring(n,n+=1),
  Q61                       : line.substring(n,n+=1),
  Q62                       : line.substring(n,n+=1),
  Q63                       : line.substring(n,n+=1),
  Q64                       : line.substring(n,n+=1),
  Q65                       : line.substring(n,n+=1),
  Q66                       : line.substring(n,n+=1),
  Q67                       : line.substring(n,n+=1),
  Q68                       : line.substring(n,n+=1),
  Q69                       : line.substring(n,n+=1),
  Q70                       : line.substring(n,n+=1),
  Q71                       : line.substring(n,n+=1),
  Q72                       : line.substring(n,n+=1),
  Q73                       : line.substring(n,n+=1),
  Q74                       : line.substring(n,n+=1),
  Q75                       : line.substring(n,n+=1),
  Q76                       : line.substring(n,n+=1),
  Q77                       : line.substring(n,n+=1),
  Q78                       : line.substring(n,n+=1),
  Q79                       : line.substring(n,n+=1),
  Q80                       : line.substring(n,n+=1),
  Q81                       : line.substring(n,n+=1),
  Q82                       : line.substring(n,n+=1),
  Q83                       : line.substring(n,n+=1),
  Q84                       : line.substring(n,n+=1),
  Q85                       : line.substring(n,n+=1),
  Q86                       : line.substring(n,n+=1),
  Q87                       : line.substring(n,n+=1),
  Q88                       : line.substring(n,n+=1),
  Q89                       : line.substring(n,n+=1),
  Q90                       : line.substring(n,n+=1),
  Q91                       : line.substring(n,n+=1),
  Q92                       : line.substring(n,n+=1),
  Q93                       : line.substring(n,n+=1),
  Q94                       : line.substring(n,n+=1),
  Q95                       : line.substring(n,n+=1),
  Q96                       : line.substring(n,n+=1),
  Q97                       : line.substring(n,n+=1),
  Q98                       : line.substring(n,n+=1),
  Q99                       : line.substring(n,n+=1),
  Q100                      : line.substring(n,n+=1),
  Q101                      : line.substring(n,n+=1),
  Q102                      : line.substring(n,n+=1),
  Q103                      : line.substring(n,n+=1),
  Q104                      : line.substring(n,n+=1),
  Q105                      : line.substring(n,n+=1),
  Q106                      : line.substring(n,n+=1),
  Q107                      : line.substring(n,n+=1),
  Q108                      : line.substring(n,n+=1),
  Q109                      : line.substring(n,n+=1),
  Q110                      : line.substring(n,n+=1),
  Q111                      : line.substring(n,n+=1),
  Q112                      : line.substring(n,n+=1),
  Q113                      : line.substring(n,n+=1),
  Q114                      : line.substring(n,n+=1),
  Q115                      : line.substring(n,n+=1),
  Q116                      : line.substring(n,n+=1),
  Q117                      : line.substring(n,n+=1),
  Q118                      : line.substring(n,n+=1),
  Q119                      : line.substring(n,n+=1),
  Q120                      : line.substring(n,n+=1),
  Q121                      : line.substring(n,n+=1),
  Q122                      : line.substring(n,n+=1),
  Q123                      : line.substring(n,n+=1),
  Q124                      : line.substring(n,n+=1),
  Q125                      : line.substring(n,n+=1),
  Q126                      : line.substring(n,n+=1),
  Q127                      : line.substring(n,n+=1),
  Q128                      : line.substring(n,n+=1),
  Q129                      : line.substring(n,n+=1),
  Q130                      : line.substring(n,n+=1),
  Q131                      : line.substring(n,n+=1),
  Q132                      : line.substring(n,n+=1),
  Q133                      : line.substring(n,n+=1),
  Q134                      : line.substring(n,n+=1),
  Q135                      : line.substring(n,n+=1),
  Q136                      : line.substring(n,n+=1),
  Q137                      : line.substring(n,n+=1),
  Q138                      : line.substring(n,n+=1),
  Q139                      : line.substring(n,n+=1),
  Q140                      : line.substring(n,n+=1),
  Q141                      : line.substring(n,n+=1),
  Q142                      : line.substring(n,n+=1),
  Q143                      : line.substring(n,n+=1),
  Q144                      : line.substring(n,n+=1),
  Q145                      : line.substring(n,n+=1),
  Q146                      : line.substring(n,n+=1),
  Q147                      : line.substring(n,n+=1),
  Q148                      : line.substring(n,n+=1),
  Q149                      : line.substring(n,n+=1),
  Q150                      : line.substring(n,n+=1),
  Q151                      : line.substring(n,n+=1),
  Q152                      : line.substring(n,n+=1),
  Q153                      : line.substring(n,n+=1),
  Q154                      : line.substring(n,n+=1),
  Q155                      : line.substring(n,n+=1),
  Q156                      : line.substring(n,n+=1),
  Q157                      : line.substring(n,n+=1),
  Q158                      : line.substring(n,n+=1),
  Q159                      : line.substring(n,n+=1),
  Q160                      : line.substring(n,n+=1),
  Q161                      : line.substring(n,n+=1),
  Q162                      : line.substring(n,n+=1),
  Q163                      : line.substring(n,n+=1),
  Q164                      : line.substring(n,n+=1),
  Q165                      : line.substring(n,n+=1),
  Q166                      : line.substring(n,n+=1),
  Q167                      : line.substring(n,n+=1),
  Q168                      : line.substring(n,n+=1),
  Q169                      : line.substring(n,n+=1),
  Q170                      : line.substring(n,n+=1),
  Q171                      : line.substring(n,n+=1),
  Q172                      : line.substring(n,n+=1),
  Q173                      : line.substring(n,n+=1),
  Q174                      : line.substring(n,n+=1),
  Q175                      : line.substring(n,n+=1),
  Q176                      : line.substring(n,n+=1),
  Q177                      : line.substring(n,n+=1),
  Q178                      : line.substring(n,n+=1),
  Q179                      : line.substring(n,n+=1),
  Q180                      : line.substring(n,n+=1),
  Q181                      : line.substring(n,n+=1),
  Q182                      : line.substring(n,n+=1),
  Q183                      : line.substring(n,n+=1),
  Q184                      : line.substring(n,n+=1),
  Q185                      : line.substring(n,n+=1),
  Q186                      : line.substring(n,n+=1),
  Q187                      : line.substring(n,n+=1),
  Q188                      : line.substring(n,n+=1),
  Q189                      : line.substring(n,n+=1),
  Q190                      : line.substring(n,n+=1),
  Q191                      : line.substring(n,n+=1),
  Q192                      : line.substring(n,n+=1),
  Q193                      : line.substring(n,n+=1),
  Q194                      : line.substring(n,n+=1),
  Q195                      : line.substring(n,n+=1),
  Q196                      : line.substring(n,n+=1),
  Q197                      : line.substring(n,n+=1),
  Q198                      : line.substring(n,n+=1),
  Q199                      : line.substring(n,n+=1),
  Q200                      : line.substring(n,n+=1),
  Q201                      : line.substring(n,n+=1),
  Q202                      : line.substring(n,n+=1),
  Q203                      : line.substring(n,n+=1),
  Q204                      : line.substring(n,n+=1),
  Q205                      : line.substring(n,n+=1),
  Q206                      : line.substring(n,n+=1),
  Q207                      : line.substring(n,n+=1),
  Q208                      : line.substring(n,n+=1),
  Q209                      : line.substring(n,n+=1),
  Q210                      : line.substring(n,n+=1),
  Q211                      : line.substring(n,n+=1),
  Q212                      : line.substring(n,n+=1),
  Q213                      : line.substring(n,n+=1),
  Q214                      : line.substring(n,n+=1),
  Q215                      : line.substring(n,n+=1),
  Q216                      : line.substring(n,n+=1),
  Q217                      : line.substring(n,n+=1),
  Q218                      : line.substring(n,n+=1),
  Q219                      : line.substring(n,n+=1),
  Q220                      : line.substring(n,n+=1),
  Q221                      : line.substring(n,n+=1),
  Q222                      : line.substring(n,n+=1),
  Q223                      : line.substring(n,n+=1),
  Q224                      : line.substring(n,n+=1),
  Q225                      : line.substring(n,n+=1),
  Q226                      : line.substring(n,n+=1),
  Q227                      : line.substring(n,n+=1),
  Q228                      : line.substring(n,n+=1),
  Q229                      : line.substring(n,n+=1),
  Q230                      : line.substring(n,n+=1),
  Q231                      : line.substring(n,n+=1),
  Q232                      : line.substring(n,n+=1),
  Q233                      : line.substring(n,n+=1),
  Q234                      : line.substring(n,n+=1),
  Q235                      : line.substring(n,n+=1),
  Q236                      : line.substring(n,n+=1),
  Q237                      : line.substring(n,n+=1),
  Q238                      : line.substring(n,n+=1),
  Q239                      : line.substring(n,n+=1),
  Q240                      : line.substring(n,n+=1),
  Q241                      : line.substring(n,n+=1),
  Q242                      : line.substring(n,n+=1),
  Q243                      : line.substring(n,n+=1),
  Q244                      : line.substring(n,n+=1),
  Q245                      : line.substring(n,n+=1),
  Q246                      : line.substring(n,n+=1),
  Q247                      : line.substring(n,n+=1),
  Q248                      : line.substring(n,n+=1),
  Q249                      : line.substring(n,n+=1),
  Q250                      : line.substring(n,n+=1),
  Q251                      : line.substring(n,n+=1),
  Q252                      : line.substring(n,n+=1),
  Q253                      : line.substring(n,n+=1),
  Q254                      : line.substring(n,n+=1),
  Q255                      : line.substring(n,n+=1),
  Q256                      : line.substring(n,n+=1),
  Q257                      : line.substring(n,n+=1),
  Q258                      : line.substring(n,n+=1),
  Q259                      : line.substring(n,n+=1),
  Q260                      : line.substring(n,n+=1),
  Q261                      : line.substring(n,n+=1),
  Q262                      : line.substring(n,n+=1),
  Q263                      : line.substring(n,n+=1),
  Q264                      : line.substring(n,n+=1),
  Q265                      : line.substring(n,n+=1),
  Q266                      : line.substring(n,n+=1),
  Q267                      : line.substring(n,n+=1),
  Q268                      : line.substring(n,n+=1),
  Q269                      : line.substring(n,n+=1),
  Q270                      : line.substring(n,n+=1),
  Q271                      : line.substring(n,n+=1),
  Q272                      : line.substring(n,n+=1),
  Q273                      : line.substring(n,n+=1),
  Q274                      : line.substring(n,n+=1),
  Q275                      : line.substring(n,n+=1),
  Q276                      : line.substring(n,n+=1),
  Q277                      : line.substring(n,n+=1),
  Q278                      : line.substring(n,n+=1),
  Q279                      : line.substring(n,n+=1),
  Q280                      : line.substring(n,n+=1),
  Q281                      : line.substring(n,n+=1),
  Q282                      : line.substring(n,n+=1),
  Q283                      : line.substring(n,n+=1),
  Q284                      : line.substring(n,n+=1),
  Q285                      : line.substring(n,n+=1),
  Q286                      : line.substring(n,n+=1),
  Q287                      : line.substring(n,n+=1),
  Q288                      : line.substring(n,n+=1),
  Q289                      : line.substring(n,n+=1),
  Q290                      : line.substring(n,n+=1),
  Q291                      : line.substring(n,n+=1),
  Q292                      : line.substring(n,n+=1),
  Q293                      : line.substring(n,n+=1),

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
