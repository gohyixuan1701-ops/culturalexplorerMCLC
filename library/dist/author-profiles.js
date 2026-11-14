// Concise author facts checked against the linked institutional or publisher sources.
// Catalogue-derived years and genres are used separately when no profile is included.
const AUTHOR_PROFILES = {
  '王润华': {
    en:{years:'Born 1941 · Perak',detail:'Cultural Medallion, 1986; S.E.A. Write Award, 1984.'},
    zh:{years:'1941 年生 · 霹雳',detail:'1986 年新加坡文化奖；1984 年东南亚文学奖。'},
    sources:[{url:'https://reference.nlb.gov.sg/singapore/people/wong-yoon-wah/',label:'National Library Board, Singapore'}]
  },
  '张贵兴': {
    en:{years:'Born 1956 · Sarawak',detail:'Winner of the 2023 Newman Prize for Chinese Literature.'},
    zh:{years:'1956 年生 · 砂拉越',detail:'2023 年纽曼华语文学奖得主。'},
    sources:[{url:'https://cup.columbia.edu/book/the-crossing-of-the-boars/9780231217675/',label:'Columbia University Press'},{url:'https://u.osu.edu/mclc/2022/11/03/chang-kuei-hsing-wins-2023-newman-prize/',label:'Newman Prize announcement, via Ohio State University'}]
  },
  '贺淑芳': {
    en:{years:'Born 1970 · short fiction',detail:'Chiu Ko Fiction Prize, 2015; China Times and United Press short story prizes.'},
    zh:{years:'1970 年生 · 小说创作',detail:'2015 年九歌小说奖；曾获时报及联合报短篇小说奖。'},
    sources:[{url:'https://id.ndl.go.jp/auth/ndlna/033102780',label:'National Diet Library, Japan'},{url:'https://www.twolinespress.com/shop/books/lake-like-a-mirror',label:'Two Lines Press'}]
  },
  '黎紫书': {
    en:{years:'Born 1971 · Ipoh',detail:'Multiple Hua Zong Literary Awards; United Daily News and China Times literary prizes.'},
    zh:{years:'1971 年生 · 怡保',detail:'多次荣获花踪文学奖，亦曾获联合报及时报文学奖。'},
    sources:[{url:'https://www.asymptotejournal.com/blog/2025/09/22/the-perennial-moon-an-interview-with-li-zi-shu-and-yz-chin-on-mahua-fiction/',label:'Asymptote author interview'},{url:'https://www.bookcouncil.sg/slp-2022/slp-judges',label:'Singapore Book Council'}]
  },
  '黄锦树': {
    en:{years:'Born 1967 · fiction & criticism',detail:'Recipient of the United Daily Literary Award and China Times Literary Award.'},
    zh:{years:'1967 年生 · 小说与文学评论',detail:'曾获联合报文学奖及时报文学奖。'},
    sources:[{url:'https://id.ndl.go.jp/auth/ndlna/01240232',label:'National Diet Library, Japan'},{url:'https://cup.columbia.edu/book/slow-boat-to-china-and-other-stories/9780231168120/',label:'Columbia University Press'}]
  },
  '商晚筠': {
    en:{years:'1952–1995',detail:'Malaysian Chinese fiction writer; her work explores women and marginality.'},
    zh:{years:'1952–1995',detail:'马华小说家，作品关注女性处境与边缘经验。'},
    sources:[{url:'https://docs.lib.purdue.edu/clcweb/vol24/iss2/9/',label:'CLCWeb: Comparative Literature and Culture, Purdue University'}]
  },
  '淡莹': {
    en:{years:'Poetry',detail:'Recipient of Singapore’s Cultural Medallion, 1996.'},
    zh:{years:'诗歌创作',detail:'1996 年新加坡文化奖得主。'},
    sources:[{url:'https://culturepaedia.singaporeccc.org.sg/literature/singapore-chinese-writers-recipients-of-the-cultural-medallion-and-young-artist-award/',label:'Singapore Chinese Cultural Centre'}]
  }
};
