//  异步编程

/**
 *  
 * 1. 先讲解本节课的
 *  
 *  什么叫异步编程， 为什么要用异步编程
 * 
 *  讲这个事情之前，先了解什么叫异步，什么叫同步
 *  举例子： 打电话
 *    
 *   打电话： 打不通 - 
 *           1. 一直打， 
 *              好处：只要电话通了，可以第一时间得到消息
 *              坏处：如果一直不通，会浪费时间
 *           
 *           2. 稍个口信让别人告诉他。给我回个电话
 *              好处：
 *          
 *       
 *   
 *   
 * 
 * 2. 
 * 
 * 
 * 
 * 3.  
 * 
 */


 const fs = require('fs');

 const path = require('path');

 fs.readFile('./fileData/a.json', function(err, aJson) {
    console.log(JSON.parse(aJson.toString()).name)

 })


