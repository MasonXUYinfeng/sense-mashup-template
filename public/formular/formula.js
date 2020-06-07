/* eslint-disable */
/**
 *
 * @param {*} name String | Array, 如果为Array, Length不能大于3
 * @param {*} params
 */
function getFormula(name) {
    var formula = {
        overview: {
            row_1_2: {
                qMeasures: [
                    [`sum({<DCS工序={'成品X-Ray检测'}>}total QTY)`, '成品X-Ray检测'],
                    [`sum({<DCS工序={'电压内阻测试OC'}>}total QTY)`, '电压内阻测试OC'],
                    [`sum({<DCS工序={'FQI'}>}total QTY)`, 'FQI'],
                    [`sum({<DCS工序={'高温静置'}>}total QTY)`, '高温静置'],
                    [`sum({<DCS工序={'自动包装'}>}total QTY)`, '自动包装'],
                    [`sum({<flag={'计划达成_日'},工序 = {'目检'}>}最终良品)/sum({<flag={'计划达成_日'},工序 = {'目检'}>}微计划)*100`, 'Output达成'],
                    [`sum({<flag={'计划达成_日'},工序 = {'卷绕'}>}最终良品)/sum({<flag={'计划达成_日'},工序 = {'卷绕'}>}微计划)*100`, 'Input达成'],
                ]
            },
        }
    }

    var formulaStr = {};
    if (typeof name == 'string') {
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
    return formulaStr;
}
