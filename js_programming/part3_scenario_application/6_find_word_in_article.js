// 查找文章中出现频率最高的词
function findMostWord(article) {
    // 合法性判断
    if (!article) {
        return;
    }
    // 参数处理
    article = article.trim().toLowerCase();
    const map = {};
    const articleArr = article.split(' ');
    for (let i = 0; i < articleArr.length; i++) {
        if (!map[articleArr[i]]) {
            map[articleArr[i]] = 1;
        } else {
            map[articleArr[i]]++;
        }
    }

    let maxTimes = 0;
    let res = '';
    for (let k in map) {
        if (map.hasOwnProperty(k)) {
            if (map[k] > maxTimes) {
                maxTimes = map[k];
                res = k;
            }
        }
    }
    return `${res}  ${maxTimes}`;
}

const res = findMostWord2('test 123 test article article article');
console.log(res);


function findMostWord2(article) {
    // 合法性判断
    if (!article) return;
    // 参数处理
    article = article.trim().toLowerCase();
    let wordList = article.match(/[a-z]+/g),
      visited = [],
      maxNum = 0,
      maxWord = "";
    article = " " + wordList.join("  ") + " ";
    // 遍历判断单词出现次数
    wordList.forEach(function(item) {
      if (visited.indexOf(item) < 0) {
        // 加入 visited 
        visited.push(item);
        let word = new RegExp(" " + item + " ", "g"),
          num = article.match(word).length;
        if (num > maxNum) {
          maxNum = num;
          maxWord = item;
        }
      }
    });
    return maxWord + "  " + maxNum;
  }