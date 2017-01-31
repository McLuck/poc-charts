angular.module('dashcompsis')
.controller('PassagensController', function($scope) {
  var LABEL_NORMAIS = 'Normais';
  var LABEL_DIF_DET_CLA = 'Dif det/cla';
  var LABEL_VIOLACAO = 'Violação';
  var LABEL_TAG_BLOQUEADO = 'Tag bloqueado';
  var LABEL_ISENTO = 'Isento';
  var LABEL_ISENTADO = 'Isentado';
  var LABEL_ANOMALA = 'Anômalas';

  var colunas =  [
    {id: "gLabel", label: "Label", type: "string"},
    {id: "gMedida", label: "Medida", type: "number"}
  ];
  var dadosOriginais = { cols : colunas,
    rows: [
      {c: [ {v: LABEL_DIF_DET_CLA}, {v: 28029} ]},
      {c: [ {v: LABEL_VIOLACAO}, {v: 130} ]},
      {c: [ {v: LABEL_NORMAIS}, {v: 230200}, ]},
      {c: [ {v: LABEL_TAG_BLOQUEADO}, {v: 193}, ]},
      {c: [ {v: LABEL_ISENTO}, {v: 30}, ]},
      {c: [ {v: LABEL_ISENTADO}, {v: 12}, ]}
    ]
  };


  var normais=0;
  var anomalas=0;
  for(var i = 0; i < dadosOriginais.rows.length;i++) {
    var linha = dadosOriginais.rows[i];
    if(linha.c[0].v==LABEL_NORMAIS) {
      normais+=linha.c[1].v;
    } else {
      anomalas+=linha.c[1].v;
    }
  }

  var sintesePassagens= { cols : colunas,
    rows: [
      {c: [ {v: LABEL_NORMAIS}, {v: normais} ]},
      {c: [ {v: LABEL_ANOMALA}, {v: anomalas} ]}
    ]
  };


  $scope.dashboard = {};
  $scope.dashboard.titulo = 'Inicio';
  $scope.dashboard.mensagem = '';
  $scope.dashboard.passagens = sintesePassagens;
  $scope.dashboard.paradas = {};

  $scope.selectHandler = function(selectedItem){
    var item = JSON.stringify(selectedItem);
    console.log(item);
  }

  $scope.myChartObject = {};
  $scope.myChartObject.type = "PieChart";
  $scope.myChartObject.data = $scope.dashboard.passagens;
  $scope.myChartObject.options = {
    title: 'Passagens nas últimas 24 hs',
    sliceVisibilityThreshold : 0.5
  };
});
