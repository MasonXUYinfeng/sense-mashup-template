/* eslint-disable */
/**
 *
 * @param {*} name String | Array, 如果为Array, Length不能大于3
 * @param {*} params
 */
function getFormula(name, params) {
  var formula = {
    overview: {
      row_1_1: {
        // qDimensions: ["省"],
        // qMeasures: [`sum(男)`],
        qDimensions: ["type"],
        qMeasures: [`sum(Num)`],
      },
      row_1_2: {
        qMeasures: [
          // ["sum(男)", "kpi1", "统计人数（男）"],
          // ["sum(女)", "kpi2", "统计人数（女）"],
          ["sum(Num)", "kpi2", "总量"],
        ],
      },
    },
  };

  var formulaStr = {};
  if (typeof name == "string") {
    formulaStr = formula[name];
  } else if (Array.isArray(name)) {
    if (name.length == 1) {
      formulaStr = formula[name][0];
    } else if (name.length == 2) {
      formulaStr = formula[name[0]][name[1]];
    } else if (name.length == 3) {
      formulaStr = formula[name[0]][name[1]][name[2]];
    }
  }
  console.log("formulaStr", formulaStr);
  return formulaStr;
}
