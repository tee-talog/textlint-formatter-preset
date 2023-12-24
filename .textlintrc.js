module.exports = {
  rules: {
    "preset-ja-technical-writing": {
      // 読点
      "max-ten": {
        max: 5,
      },
      // 連続漢字
      "max-kanji-continuous-len": {
        max: 7,
        allow: [],
      },
      // 疑問符・感嘆符
      "no-exclamation-question-mark": false,
      // 弱い表現
      "ja-no-weak-phrase": false,
    },
  },
}
