
exports.up = function(knex, Promise) {
  return knex.schema.createTable("DADOS_ENEM_2005",function(table){
    table.string("MASC_INSCRITO" ,8);
    table.string("NU_ANO" ,8);
    table.string("DT_NASCIMENTO" ,20);
    table.string("TP_SEXO" ,8);
    table.string("CODMUNIC_INSC" ,12);
    table.string("DS_CIDADE" ,50);
    table.string("IN_CONCLUIU" ,8);
    table.string("MASC_ESC" ,8);
    table.string("CODMUNIC_ESC" ,12);
    table.string("UF_ESC" ,14);
    table.string("SIGLA" ,2);
    table.string("MUN_ESC" ,50);
    table.string("DEP" ,10);
    table.string("LOC" ,10);
    table.string("CODFUNC",11);
    table.string("IN_PRESENCA",8);
    table.string("VL_PERC_COMP1",8);
    table.string("VL_PERC_COMP2",8);
    table.string("VL_PERC_COMP3",8);
    table.string("VL_PERC_COMP4",8);
    table.string("VL_PERC_COMP5",8);
    table.string("NU_NOTA_OBJETIVA",8);
    table.string("IN_SITUACAO",1);
    table.string("NU_NOTA_REDACAO_COMP1",8);
    table.string("NU_NOTA_REDACAO_COMP2",8);
    table.string("NU_NOTA_REDACAO_COMP3",8);
    table.string("NU_NOTA_REDACAO_COMP4",8);
    table.string("NU_NOTA_REDACAO_COMP5",8);
    table.string("NU_NOTA_GLOBAL_REDACAO",8);
    table.string("IN_QSE",1);
    table.string("Q1",1);
    table.string("Q2",1);
    table.string("Q3",1);
    table.string("Q4",1);
    table.string("Q5",1);
    table.string("Q6",1);
    table.string("Q7",1);
    table.string("Q8",1);
    table.string("Q9",1);
    table.string("Q10",1);
    table.string("Q11",1);
    table.string("Q12",1);
    table.string("Q13",1);
    table.string("Q14",1);
    table.string("Q15",1);
    table.string("Q16",1);
    table.string("Q17",1);
    table.string("Q18",1);
    table.string("Q19",1);
    table.string("Q20",1);
    table.string("Q21",1);
    table.string("Q22",1);
    table.string("Q23",1);
    table.string("Q24",1);
    table.string("Q25",1);
    table.string("Q26",1);
    table.string("Q27",1);
    table.string("Q28",1);
    table.string("Q29",1);
    table.string("Q30",1);
    table.string("Q31",1);
    table.string("Q32",1);
    table.string("Q33",1);
    table.string("Q34",1);
    table.string("Q35",1);
    table.string("Q36",1);
    table.string("Q37",1);
    table.string("Q38",1);
    table.string("Q39",1);
    table.string("Q40",1);
    table.string("Q41",1);
    table.string("Q42",1);
    table.string("Q43",1);
    table.string("Q44",1);
    table.string("Q45",1);
    table.string("Q46",1);
    table.string("Q47",1);
    table.string("Q48",1);
    table.string("Q49",1);
    table.string("Q50",1);
    table.string("Q51",1);
    table.string("Q52",1);
    table.string("Q53",1);
    table.string("Q54",1);
    table.string("Q55",1);
    table.string("Q56",1);
    table.string("Q57",1);
    table.string("Q58",1);
    table.string("Q59",1);
    table.string("Q60",1);
    table.string("Q61",1);
    table.string("Q62",1);
    table.string("Q63",1);
    table.string("Q64",1);
    table.string("Q65",1);
    table.string("Q66",1);
    table.string("Q67",1);
    table.string("Q68",1);
    table.string("Q69",1);
    table.string("Q70",1);
    table.string("Q71",1);
    table.string("Q72",1);
    table.string("Q73",1);
    table.string("Q74",1);
    table.string("Q75",1);
    table.string("Q76",1);
    table.string("Q77",1);
    table.string("Q78",1);
    table.string("Q79",1);
    table.string("Q80",1);
    table.string("Q81",1);
    table.string("Q82",1);
    table.string("Q83",1);
    table.string("Q84",1);
    table.string("Q85",1);
    table.string("Q86",1);
    table.string("Q87",1);
    table.string("Q88",1);
    table.string("Q89",1);
    table.string("Q90",1);
    table.string("Q91",1);
    table.string("Q92",1);
    table.string("Q93",1);
    table.string("Q94",1);
    table.string("Q95",1);
    table.string("Q96",1);
    table.string("Q97",1);
    table.string("Q98",1);
    table.string("Q99",1);
    table.string("Q100",1);
    table.string("Q101",1);
    table.string("Q102",1);
    table.string("Q103",1);
    table.string("Q104",1);
    table.string("Q105",1);
    table.string("Q106",1);
    table.string("Q107",1);
    table.string("Q108",1);
    table.string("Q109",1);
    table.string("Q110",1);
    table.string("Q111",1);
    table.string("Q112",1);
    table.string("Q113",1);
    table.string("Q114",1);
    table.string("Q115",1);
    table.string("Q116",1);
    table.string("Q117",1);
    table.string("Q118",1);
    table.string("Q119",1);
    table.string("Q120",1);
    table.string("Q121",1);
    table.string("Q122",1);
    table.string("Q123",1);
    table.string("Q124",1);
    table.string("Q125",1);
    table.string("Q126",1);
    table.string("Q127",1);
    table.string("Q128",1);
    table.string("Q129",1);
    table.string("Q130",1);
    table.string("Q131",1);
    table.string("Q132",1);
    table.string("Q133",1);
    table.string("Q134",1);
    table.string("Q135",1);
    table.string("Q136",1);
    table.string("Q137",1);
    table.string("Q138",1);
    table.string("Q139",1);
    table.string("Q140",1);
    table.string("Q141",1);
    table.string("Q142",1);
    table.string("Q143",1);
    table.string("Q144",1);
    table.string("Q145",1);
    table.string("Q146",1);
    table.string("Q147",1);
    table.string("Q148",1);
    table.string("Q149",1);
    table.string("Q150",1);
    table.string("Q151",1);
    table.string("Q152",1);
    table.string("Q153",1);
    table.string("Q154",1);
    table.string("Q155",1);
    table.string("Q156",1);
    table.string("Q157",1);
    table.string("Q158",1);
    table.string("Q159",1);
    table.string("Q160",1);
    table.string("Q161",1);
    table.string("Q162",1);
    table.string("Q163",1);
    table.string("Q164",1);
    table.string("Q165",1);
    table.string("Q166",1);
    table.string("Q167",1);
    table.string("Q168",1);
    table.string("Q169",1);
    table.string("Q170",1);
    table.string("Q171",1);
    table.string("Q172",1);
    table.string("Q173",1);
    table.string("Q174",1);
    table.string("Q175",1);
    table.string("Q176",1);
    table.string("Q177",1);
    table.string("Q178",1);
    table.string("Q179",1);
    table.string("Q180",1);
    table.string("Q181",1);
    table.string("Q182",1);
    table.string("Q183",1);
    table.string("Q184",1);
    table.string("Q185",1);
    table.string("Q186",1);
    table.string("Q187",1);
    table.string("Q188",1);
    table.string("Q189",1);
    table.string("Q190",1);
    table.string("Q191",1);
    table.string("Q192",1);
    table.string("Q193",1);
    table.string("Q194",1);
    table.string("Q195",1);
    table.string("Q196",1);
    table.string("Q197",1);
    table.string("Q198",1);
    table.string("Q199",1);
    table.string("Q200",1);
    table.string("Q201",1);
    table.string("Q202",1);
    table.string("Q203",1);
    table.string("Q204",1);
    table.string("Q205",1);
    table.string("Q206",1);
    table.string("Q207",1);
    table.string("Q208",1);
    table.string("Q209",1);
    table.string("Q210",1);
    table.string("Q211",1);
    table.string("Q212",1);
    table.string("Q213",1);
    table.string("Q214",1);
    table.string("Q215",1);
    table.string("Q216",1);
    table.string("Q217",1);
    table.string("Q218",1);
    table.string("Q219",1);
    table.string("Q220",1);
    table.string("Q221",1);
    table.string("Q222",1);
    table.string("Q223",1);
    table.string("VT_RESP_OBJETIVA",63);
    table.string("TP_PROVA",1);
    table.string("VT_GABARITO_PROVA",63);
    // a chave da tabela de dados brutos
    table.primary(["MASC_INSCRITO","NU_ANO"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("DADOS_ENEM_2005");
};
