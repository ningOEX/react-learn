/**
 * 获取一个随机数
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @returns 
 */
export function getRandom(min,max){
    // max + 1 才可以获取最大值
    return Math.floor(Math.random() * (max + 1 - min) + min)
}