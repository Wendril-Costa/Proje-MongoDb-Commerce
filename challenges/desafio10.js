db.produtos.find({
    valoresNutricionais: { $elemMatch: {          
        $and: [{ tipo: "proteínas" }, {
            percentual: { $lte: 40 },              
          }, {
              percentual: { $gte: 30 },
          }],
      },
    },
  }, {
    _id: 0,
    nome: 1,
  });