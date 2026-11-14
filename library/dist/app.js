const $ = s => document.querySelector(s);
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const readStorage = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const saveStorage = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; } };
const savedValue = readStorage('mahua-saved', []);
const state = {lang:readStorage('mahua-lang','en') === 'zh' ? 'zh' : 'en',view:'catalogue',category:'all',collection:'all',edition:'all',query:'',author:'',sort:'featured',page:1,pageSize:12,layout:'grid',saved:new Set(Array.isArray(savedValue) ? savedValue : [])};
let data, toastTimer, currentBook;
const text = {
 en:{skip:'Skip to catalogue',topline:'A living collection of Malaysian Chinese literature',navBooks:'The collection',navAuthors:'Authors',navAbout:'Our story',myShelf:'My bookshelf',eyebrow:'THE MALAYSIAN CHINESE LITERATURE COLLECTION',hero:'Many voices.<br>One literary home.',intro:'From familiar hometowns to imagined worlds. Discover the stories, poetry, and ideas that make Mahua literature.',introNote:'38 works to discover · Chinese & English editions',browse:'Browse the library',reset:'Reset',collection:'COLLECTION',edition:'EDITION LANGUAGE',anyLanguage:'All editions',chineseEdition:'Chinese editions',englishEdition:'English translations',beyond:'BEYOND THE BOOKSHELF',galleryTitle:'Step into the stories.',galleryCopy:'Walk through our 3D gallery and explore 20 selected works.',enterGallery:'Enter 3D gallery ↗',library:'Library',allBooks:'All books',curated:'Curated with care. Collected for discovery.',filters:'Filters',sortBy:'Sort by',recommended:'Recommended',newest:'Newest first',oldest:'Oldest first',titleAZ:'Title A–Z',authorAZ:'Author A–Z',emptyTitle:'A new chapter awaits.',emptyCopy:'Try a different search or clear your filters to discover more books.',clearFilters:'Clear search & filters',show:'Show',all:'All',perPage:'per page',footnote:'Explore book summaries and publication details. Full literary texts are not included.',closingTitle:'Our stories deserve a place to live.',closingCopy:'Preserving Malaysian Chinese literature, one book and one reader at a time.',discoverGallery:'Discover the 3D gallery',footer:'A Cultural Explorer catalogue prototype · Collection from the Malaysian Chinese Literature Center and published English editions.',sources:'About the collection ↗',creation:'LITERARY CREATION',study:'LITERARY RESEARCH',fiction:'Fiction',poetry:'Poetry',essays:'Essays & prose',mixed:'Mixed writing',research:'Research & criticism',allCollections:'All collections',centre:'MCLC publications',translated:'English translations',onDisplay:'In the 3D gallery',searchPlaceholder:'Search by title, author, publisher, or ISBN…',searchLabel:'Search the library',galleryBadge:'IN THE 3D GALLERY',chinese:'Chinese',english:'English',details:'View book details',save:'Save to bookshelf',saved:'Saved to bookshelf',remove:'Remove from bookshelf',savedToast:'Added to your bookshelf',removedToast:'Removed from your bookshelf',sessionToast:'Saved for this visit. Browser storage is unavailable.',shelfEmpty:'Your bookshelf is waiting. Save a book using the bookmark icon to find it here.',summary:'About this book',publication:'Publication details',author:'Author',genre:'Genre',publisher:'Publisher',year:'Publication year',translator:'Translator',editionLabel:'Edition',series:'Collection',editionNote:'English edition',originalTitle:'Chinese title',source:'View source ↗',viewGallery:'Explore 3D gallery ↗',summaryNote:'This catalogue provides a short summary and edition information, not the full text.',translationNote:'This title and summary are available in Chinese. The catalogue interface is available in both languages.',related:'More from this author',authorsTitle:'Meet the authors',authorSearch:'Search authors by Chinese or English name…',authorsCopy:'Discover the writers behind the collection.',aboutEyebrow:'A CULTURAL EXPLORER COMPANION',aboutTitle:'A home for Mahua literature.',aboutIntro:'Mahua literature tells the stories of Malaysian Chinese communities, in voices shaped by language, place, memory, and imagination. This library makes the Cultural Explorer collection easier to browse, alongside its immersive 3D exhibition.',aboutCollection:'The collection',aboutCollectionCopy:'Browse all 38 records from the gallery source: 28 MCLC publications and 10 published English translations. Twenty selected works are exhibited in the 3D gallery. Some translated selections draw on multiple original works.',aboutSources:'Sources & acknowledgements',aboutSourcesCopy:'Book records, summaries, and cover images are reused from the Cultural Explorer project. MCLC publications are attributed to the Malaysian Chinese Literature Center, Southern University College. English editions include their individual source links.',aboutPrototype:'About this prototype',aboutPrototypeCopy:'Search, filters, book details, saved books, and the original 3D gallery work in this mock-up. Your bookshelf is stored in this browser. The catalogue does not provide full texts, borrowing, accounts, or a live library database.',aboutLink:'Malaysian Chinese Literature Center publications',aboutReference:'Catalogue browsing inspired by the Malaysian Chinese Literature Digital Library.',aboutRights:'Cover images belong to their respective rights holders. This is a private demonstration of the existing project collection.',loadingError:'The collection could not be loaded. Please reload the page to try again.',works:'works',work:'work',previous:'Previous page',next:'Next page',clearAuthor:'Clear author filter',backAll:'Back to all books',noAuthors:'No authors match this search.',shelfNote:'Books saved in this browser',countLabel:'books',close:'Close'},
 zh:{skip:'跳至图书目录',topline:'珍藏马华文学，让故事生生不息',navBooks:'馆藏目录',navAuthors:'作家',navAbout:'我们的故事',myShelf:'我的书架',eyebrow:'马来西亚华文文学馆藏',hero:'众声汇聚，<br>共筑文学之家。',intro:'从熟悉的故乡到想象的天地。探索马华文学的故事、诗歌与思想，让阅读连起你我。',introNote:'38 部作品 · 中文出版品与英文译本',browse:'浏览馆藏',reset:'重置',collection:'馆藏系列',edition:'版本语言',anyLanguage:'所有版本',chineseEdition:'中文出版品',englishEdition:'英文译本',beyond:'书架之外的文学世界',galleryTitle:'走进书中的世界。',galleryCopy:'漫步 3D 文学展馆，探索 20 部精选作品。',enterGallery:'进入 3D 展馆 ↗',library:'图书馆',allBooks:'全部图书',curated:'用心收藏，让文学被看见。',filters:'筛选',sortBy:'排序',recommended:'精选推荐',newest:'出版年份：新到旧',oldest:'出版年份：旧到新',titleAZ:'书名排序',authorAZ:'作者排序',emptyTitle:'下一页，等你来发现。',emptyCopy:'试试其他关键词，或清除筛选以浏览更多作品。',clearFilters:'清除搜索与筛选',show:'每页显示',all:'全部',perPage:'本',footnote:'本目录提供作品简介与出版资料，不包含文学作品全文。',closingTitle:'让我们的故事，有一个安放的地方。',closingCopy:'珍藏马华文学，从一本书、一位读者开始。',discoverGallery:'探索 3D 文学展馆',footer:'Cultural Explorer 图书目录原型 · 馆藏资料取自马华文学馆出版品及已出版英文译本。',sources:'关于馆藏 ↗',creation:'文学创作',study:'文学研究',fiction:'小说',poetry:'诗歌',essays:'散文',mixed:'综合创作',research:'研究与评论',allCollections:'全部系列',centre:'文学馆出版品',translated:'英文翻译作品',onDisplay:'3D 展馆精选',searchPlaceholder:'搜索书名、作者、出版社或 ISBN…',searchLabel:'搜索馆藏',galleryBadge:'3D 展馆精选',chinese:'中文',english:'英文',details:'查看图书详情',save:'加入我的书架',saved:'已加入书架',remove:'从书架移除',savedToast:'已加入你的书架',removedToast:'已从书架移除',sessionToast:'已于本次浏览保存，浏览器暂时无法储存资料。',shelfEmpty:'你的书架正等着第一本好书。点击图书上的书签，即可加入收藏。',summary:'作品简介',publication:'出版资料',author:'作者',genre:'文类',publisher:'出版社',year:'出版年份',translator:'译者',editionLabel:'版本',series:'系列',editionNote:'英文版',originalTitle:'中文书名',source:'查看资料来源 ↗',viewGallery:'探索 3D 展馆 ↗',summaryNote:'本目录仅提供作品简介与版本资料，不包含作品全文。',translationNote:'本书暂未提供英文书名及简介，界面可切换中英双语。',related:'浏览这位作者的其他作品',authorsTitle:'认识作家',authorSearch:'搜索作者中文姓名或英文姓名…',authorsCopy:'认识文字背后的马华作家。',aboutEyebrow:'CULTURAL EXPLORER · 文学馆藏',aboutTitle:'属于马华文学的家。',aboutIntro:'马华文学记录马来西亚华人社会的故事，其声音由语言、土地、记忆和想象交织而成。本目录让 Cultural Explorer 的文学馆藏更方便浏览，并与沉浸式 3D 展馆相互呼应。',aboutCollection:'关于馆藏',aboutCollectionCopy:'本目录收录原项目中的全部 38 条书目：28 部文学馆出版品及 10 部已出版英文译作。其中 20 部作品在 3D 展馆展出。部分英文选集选自多部中文作品。',aboutSources:'资料来源与鸣谢',aboutSourcesCopy:'书目、简介与封面沿用自 Cultural Explorer 项目。中文出版品资料及封面取自南方大学学院马华文学馆。英文版书目分别提供出版社或版本来源链接。',aboutPrototype:'关于本原型',aboutPrototypeCopy:'本原型支持搜索、分类筛选、书籍详情、本地书架和原有 3D 展馆。书架收藏保存在当前浏览器中。本目录不提供全文阅读、借阅、账户或实时图书馆数据库。',aboutLink:'马华文学馆出版品',aboutReference:'目录浏览方式参考马华文学数码图书馆。',aboutRights:'封面图像版权属于各自权利人。本原型为原有馆藏项目的私人演示。',loadingError:'馆藏暂时无法载入，请刷新页面重试。',works:'部作品',work:'部作品',previous:'上一页',next:'下一页',clearAuthor:'清除作者筛选',backAll:'返回全部图书',noAuthors:'未找到符合搜索条件的作者。',shelfNote:'保存在此浏览器的收藏',countLabel:'本图书',close:'关闭'}
};
Object.assign(text.en, {
 brandName:'MCLC',brandFullName:'Malaysian Chinese Literature Center',
 teamCredit:'Team Cultural Explorer · A mock-up for the FeedMe Hackathon.',termsLink:'T&C · Mock-up notice ↗',
 termsTitle:'Terms & conditions',termsEyebrow:'CULTURAL EXPLORER · FEEDME HACKATHON',
 termsIntro:'MCLC is a mock-up created by team Cultural Explorer for the FeedMe Hackathon. It is intended for demonstration, learning, and judging.',
 termsScopeTitle:'Demonstration use',termsScope:'This prototype demonstrates a literature catalogue and 3D gallery. It is not an official MCLC library service and does not provide lending, payments, accounts, or full-text access. No endorsement by MCLC or the hackathon organisers is implied.',
 termsRightsTitle:'Content & intellectual property',termsRights:'Book covers, titles, literary works, and third-party materials remain the property of their respective rights holders. Their appearance in this demonstration does not transfer ownership or grant permission to reproduce or redistribute them.',
 termsAccuracyTitle:'Information & sources',termsAccuracy:'Book and author details are provided for demonstration and may be incomplete. Consult the linked publishers, libraries, and award organisations for authoritative records. Catalogue edition years describe the books in this collection, not an author’s lifespan or full career.',
 termsDataTitle:'Your browser & external services',termsData:'Saved books and language preferences are stored locally in your browser. Clearing browser storage removes these preferences. Fonts may load from Google Fonts, and external source links are subject to the relevant third-party terms and privacy policies.',
 termsAvailabilityTitle:'Prototype availability',termsAvailability:'Features and content may change or become unavailable during development. This mock-up is provided as-is for hackathon demonstration.',
 authorSource:'Sources ↗',authorSourcesTitle:'Author information & sources',catalogueYears:'Catalogue editions',catalogueGenres:'In this collection',catalogueFactsNote:'Edition years and genres below are derived from the books listed in this catalogue. They are not biographical dates or an exhaustive bibliography.',
 aboutTitle:'Malaysian Chinese Literature Center',aboutEyebrow:'MCLC · BY CULTURAL EXPLORER'
});
Object.assign(text.zh, {
 brandName:'马华文学馆',brandFullName:'Malaysian Chinese Literature Center',
 teamCredit:'Cultural Explorer 团队 · FeedMe Hackathon 展示用 mock-up。',termsLink:'T&C · 原型使用说明 ↗',
 termsTitle:'条款与使用说明',termsEyebrow:'CULTURAL EXPLORER · FEEDME HACKATHON',
 termsIntro:'本 MCLC mock-up 由 Cultural Explorer 团队为 FeedMe Hackathon 制作，仅供展示、学习及评审使用。',
 termsScopeTitle:'展示用途',termsScope:'本原型用于演示文学目录与 3D 展馆，并非马华文学馆的正式图书馆服务，不提供借阅、付款、账户或作品全文。展示内容不表示获得马华文学馆或赛事主办方的官方认可。',
 termsRightsTitle:'内容与知识产权',termsRights:'书籍封面、书名、文学作品及第三方资料的权利归各自权利人所有。在本演示中展示不代表转移其所有权，亦不构成复制或再分发授权。',
 termsAccuracyTitle:'资料与来源',termsAccuracy:'书目及作者资料用于原型演示，可能不完整。请以所链接的出版社、图书馆及奖项机构记录为准。「馆藏版本年份」仅指本目录所收录版本的出版年份，并非作者生卒年份或完整创作生涯。',
 termsDataTitle:'浏览器储存与外部服务',termsData:'书架收藏和语言偏好储存在当前浏览器中，清除浏览器储存会移除这些偏好。字体可能从 Google Fonts 载入，外部资料链接适用相关第三方的条款与隐私政策。',
 termsAvailabilityTitle:'原型可用性',termsAvailability:'开发期间，功能和内容可能调整或暂停。本 mock-up 按现状提供，仅供 Hackathon 演示。',
 authorSource:'资料来源 ↗',authorSourcesTitle:'作者资料与来源',catalogueYears:'馆藏版本年份',catalogueGenres:'馆藏文类',catalogueFactsNote:'以下版本年份与文类根据本目录中的书籍整理，并非作者生卒年份或完整著作目录。',
 aboutTitle:'马华文学馆',aboutEyebrow:'MCLC · CULTURAL EXPLORER 团队'
});
const t = key => text[state.lang][key] ?? key;
const categoryDefs = [{id:'all',key:'allBooks'},{id:'fiction',key:'fiction'},{id:'poetry',key:'poetry'},{id:'essays',key:'essays'},{id:'mixed',key:'mixed'},{id:'research',key:'research'}];
function categoriesOf(b){
 if(b.type==='academic'||b.genre==='论文集') return ['research'];
 if(b.genre==='散文与小说') return ['mixed','fiction','essays'];
 if(b.genre==='诗文集') return ['mixed','poetry','essays'];
 if(b.genre==='散文、诗与论述') return ['mixed','poetry','essays','research'];
 if(b.genre.includes('小说')) return ['fiction'];
 if(b.genre==='诗集') return ['poetry'];
 if(b.genre==='散文集') return ['essays'];
 return ['mixed'];
}
const titleOf = b => state.lang==='en' && b.en ? b.en.title : b.title;
const genreOf = b => state.lang==='en' ? data.genres[b.genre] || b.genre : b.genre;
const authorName = name => state.lang==='en' ? data.authors[name] || name : name;
const authorsOf = b => b.author.split('、').map(authorName).join(state.lang==='en'?', ':'、');
const summaryOf = b => state.lang==='en' && b.en ? b.en.summary : b.summary;
const publisherOf = b => b.en ? b.en.publisher : state.lang==='en' ? data.types[b.type].pubEn : b.pub || data.types[b.type].pub;
const yearOf = b => b.en ? b.en.year : String(b.year);
const normalize = str => String(str).normalize('NFKC').toLowerCase().replace(/[\s\p{P}\p{S}]/gu,'');
function matchingBooks(){
 const q=normalize(state.query);
 let books=data.books.filter(b=>
  (state.view!=='saved'||state.saved.has(b.id)) &&
  (state.category==='all'||categoriesOf(b).includes(state.category)) &&
  (state.collection==='all'||(state.collection==='centre'&&!b.en)||(state.collection==='translated'&&!!b.en)||(state.collection==='gallery'&&b.inGallery)) &&
  (state.edition==='all'||(state.edition==='en'?!!b.en:!b.en)) &&
  (!state.author||b.author.split('、').includes(state.author)) &&
  (!q||b.searchText.includes(q))
 );
 const collator=new Intl.Collator(state.lang==='zh'?'zh-Hans':'en',{numeric:true});
 const numericYear=b=>Number(String(b.year).slice(0,4))||0;
 books.sort((a,b)=> state.sort==='newest'?numericYear(b)-numericYear(a):state.sort==='oldest'?numericYear(a)-numericYear(b):state.sort==='title'?collator.compare(titleOf(a),titleOf(b)):state.sort==='author'?collator.compare(authorsOf(a),authorsOf(b)):Number(b.inGallery)-Number(a.inGallery)||a.order-b.order);
 return books;
}
function renderCategories(){
 $('#categories').innerHTML=categoryDefs.map((c,i)=>{
  const count=c.id==='all'?data.books.length:data.books.filter(b=>categoriesOf(b).includes(c.id)).length;
  const heading=i===1?`<div class="category-label">${t('creation')}<span>−</span></div>`:i===5?`<div class="category-label">${t('study')}<span>−</span></div>`:'';
  return heading+`<button class="category-button ${i?'child':''} ${state.category===c.id?'selected':''}" data-cat="${c.id}" aria-pressed="${state.category===c.id}">${i?'':'<svg><use href="#i-book"/></svg>'}<span>${t(c.key)}</span><span class="count">${count}</span></button>`;
 }).join('');
 const collections=[['all','allCollections',data.books.length],['centre','centre',data.books.filter(b=>!b.en).length],['translated','translated',data.books.filter(b=>b.en).length],['gallery','onDisplay',data.books.filter(b=>b.inGallery).length]];
 $('#collections').innerHTML=collections.map(([id,key,count])=>`<label class="filter-check"><input type="radio" name="collection" value="${id}" ${state.collection===id?'checked':''}>${t(key)}<span class="count">${count}</span></label>`).join('');
 $('#edition').value=state.edition;
}
function card(b){
 const saved=state.saved.has(b.id);
 return `<article class="book-card"><div class="book-visual"><button class="cover-button" data-book="${b.id}" aria-label="${esc(t('details')+': '+titleOf(b))}"><img src="${esc(b.image)}" alt="${esc(titleOf(b))}" loading="lazy" width="105" height="153"></button>${b.inGallery?`<span class="gallery-badge">${t('galleryBadge')}</span>`:''}<button class="save-book ${saved?'saved':''}" data-save="${b.id}" aria-label="${esc((saved?t('remove'):t('save'))+': '+titleOf(b))}" aria-pressed="${saved}"><svg><use href="#i-bookmark"/></svg></button></div><div class="book-info"><div class="book-category">${esc(genreOf(b))}</div><button class="book-title" data-book="${b.id}">${esc(titleOf(b))}</button>${b.en?`<p class="book-subtitle">${esc(state.lang==='en'?b.title:b.en.title)}</p>`:''}<p class="book-author">${esc(authorsOf(b))}</p><div class="book-meta"><span>${esc(yearOf(b))}</span><span>${b.en?t('english'):t('chinese')}</span></div><p class="list-description">${esc(summaryOf(b))}</p></div></article>`;
}
function authorFacts(name, works){
 const profile=typeof AUTHOR_PROFILES!=='undefined'?AUTHOR_PROFILES[name]:null;
 if(profile)return {...profile[state.lang],sources:profile.sources,biographical:true};
 const years=[...new Set(works.map(b=>Number(String(b.year).slice(0,4))).filter(Number.isFinite))].sort((a,b)=>a-b);
 const range=years.length>1?`${years[0]}–${years.at(-1)}`:String(years[0]??'');
 const genres=[...new Set(works.map(genreOf))].slice(0,3).join(state.lang==='en'?' · ':'、');
 const urls=[...new Set(works.map(b=>b.en?.url||'https://www.southern.edu.my/mclc/chuban.php'))];
 return {years:`${t('catalogueYears')} · ${range}`,detail:`${t('catalogueGenres')} · ${genres}`,sources:urls.map(url=>({url,label:url.includes('southern.edu.my')?'Malaysian Chinese Literature Center':t('publication')})),biographical:false};
}
function authorCard(name,count){
 const works=data.books.filter(b=>b.author.split('、').includes(name)),facts=authorFacts(name,works);
 return `<article class="author-card"><button class="author-name" data-author="${esc(name)}"><strong>${esc(authorName(name))}</strong><span class="author-en">${esc(state.lang==='en'?name:data.authors[name]||'')}</span></button><div class="author-facts"><p class="author-years">${esc(facts.years)}</p><p class="author-bio">${esc(facts.detail)}</p></div><div class="author-card-footer"><button class="author-works" data-author="${esc(name)}">${count} ${t(count===1?'work':'works')} <span aria-hidden="true">→</span></button><button class="author-source" data-profile="${esc(name)}">${t('authorSource')}</button></div></article>`;
}
function showAuthorSources(name){
 const works=data.books.filter(b=>b.author.split('、').includes(name));if(!works.length)return;
 const facts=authorFacts(name,works);
 $('#authorSourcesContent').innerHTML=`<div class="about-content"><div class="eyebrow">${t('authorSourcesTitle')}</div><h2 id="authorSourcesTitle">${esc(authorName(name))}</h2><p>${esc(facts.years)}</p><p>${esc(facts.detail)}</p>${facts.biographical?'':`<p>${t('catalogueFactsNote')}</p>`}<ul>${facts.sources.map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)} ↗</a></li>`).join('')}</ul></div>`;
 $('#authorSourcesDialog').showModal();
}
function renderAuthors(){
 const q=normalize(state.query),map=new Map();
 data.books.forEach(b=>b.author.split('、').forEach(a=>{map.set(a,(map.get(a)||0)+1);}));
 const authors=[...map.entries()].filter(([a])=>!q||normalize(a+' '+(data.authors[a]||'')).includes(q)).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],'zh'));
 $('#books').className='book-grid authors';
 $('#books').innerHTML=authors.map(([name,count])=>authorCard(name,count)).join('');
 $('#resultCount').innerHTML=state.lang==='en'?`<strong>${authors.length}</strong> authors in the collection`:`共 <strong>${authors.length}</strong> 位作者`;
 $('#empty').hidden=authors.length>0;$('#emptyMessage').textContent=t('noAuthors');
 $('#paginationRow').hidden=true;$('.toolbar-actions').hidden=true;$('#activeFilters').innerHTML='';
}
function renderFilters(){
 const filters=[];
 if(state.category!=='all')filters.push(['category',t(categoryDefs.find(c=>c.id===state.category).key)]);
 if(state.collection!=='all')filters.push(['collection',t(state.collection==='gallery'?'onDisplay':state.collection)]);
 if(state.edition!=='all')filters.push(['edition',t(state.edition==='en'?'englishEdition':'chineseEdition')]);
 if(state.author)filters.push(['author',authorName(state.author)]);
 $('#activeFilters').innerHTML=filters.map(([key,label])=>`<button class="filter-pill" data-clear="${key}" aria-label="${esc(t('reset')+': '+label)}">${esc(label)}<span aria-hidden="true">×</span></button>`).join('');
}
function render(){
 if(!data)return;
 renderCategories();
 $('#shelfCount').textContent=state.saved.size;
 document.querySelectorAll('[data-view]').forEach(b=>{const active=b.dataset.view===state.view;b.classList.toggle('active',active);if(active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
 const category=categoryDefs.find(c=>c.id===state.category);
 const title=state.view==='authors'?t('authorsTitle'):state.view==='saved'?t('myShelf'):state.author?authorName(state.author):t(category.key);
 $('#sectionTitle').textContent=title;$('#breadcrumbCurrent').textContent=title;
 $('#search').placeholder=t(state.view==='authors'?'authorSearch':'searchPlaceholder');
 $('#search').setAttribute('aria-label',t('searchLabel'));
 if(state.view==='authors'){renderAuthors();return;}
 $('.toolbar-actions').hidden=false;
 const books=matchingBooks(),size=state.pageSize==='all'?Math.max(1,books.length):state.pageSize,totalPages=Math.max(1,Math.ceil(books.length/size));
 state.page=Math.min(state.page,totalPages);
 const start=(state.page-1)*size,end=Math.min(start+size,books.length);
 $('#books').className='book-grid'+(state.layout==='list'?' list':'');
 $('#books').innerHTML=books.slice(start,end).map(card).join('');
 $('#empty').hidden=books.length>0;
 $('#emptyMessage').textContent=state.view==='saved'&&state.saved.size===0?t('shelfEmpty'):t('emptyCopy');
 $('#resultCount').innerHTML=state.lang==='en'?`Showing <strong>${books.length?start+1:0}–${end}</strong> of <strong>${books.length}</strong> books`:`显示 <strong>${books.length?start+1:0}–${end}</strong> 本，共 <strong>${books.length}</strong> 本图书`;
 $('#paginationRow').hidden=books.length===0;
 $('#pagination').innerHTML=`<button class="page-button" data-page="${state.page-1}" ${state.page===1?'disabled':''} aria-label="${t('previous')}">‹</button>`+Array.from({length:totalPages},(_,i)=>`<button class="page-button ${state.page===i+1?'selected':''}" data-page="${i+1}" ${state.page===i+1?'aria-current="page"':''} aria-label="${state.lang==='en'?'Page '+(i+1):'第 '+(i+1)+' 页'}">${i+1}</button>`).join('')+`<button class="page-button" data-page="${state.page+1}" ${state.page===totalPages?'disabled':''} aria-label="${t('next')}">›</button>`;
 $('#sort').value=state.sort;$('#pageSize').value=state.pageSize;
 for(const mode of ['grid','list']){$('#'+mode+'View').classList.toggle('selected',mode===state.layout);$('#'+mode+'View').setAttribute('aria-pressed',mode===state.layout);}
 renderFilters();
}
function reset(){state.category='all';state.collection='all';state.edition='all';state.query='';state.author='';state.page=1;$('#search').value='';render();}
function showToast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').classList.add('show');toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2400);}
function toggleSave(id){
 const had=state.saved.has(id);had?state.saved.delete(id):state.saved.add(id);
 const persisted=saveStorage('mahua-saved',[...state.saved]);
 showToast(persisted?t(had?'removedToast':'savedToast'):t('sessionToast'));
 render();
 const button=$('#bookDetails [data-save]');
 if(button&&button.dataset.save===id){button.classList.toggle('saved',!had);button.setAttribute('aria-pressed',!had);button.innerHTML=`<svg><use href="#i-bookmark"/></svg>${t(had?'save':'saved')}`;}
}
function bookDetails(b){
 const en=b.en,saved=state.saved.has(b.id),type=data.types[b.type];
 const row=(name,value)=>`<dt>${esc(name)}</dt><dd>${esc(value)}</dd>`;
 const sources=en?en.url:'https://www.southern.edu.my/mclc/chuban.php';
 $('#bookDetails').innerHTML=`<div class="detail-layout"><div class="detail-cover"><img src="${esc(b.image)}" alt="${esc(titleOf(b))}"><button class="secondary ${saved?'saved':''}" data-save="${b.id}" aria-pressed="${saved}"><svg><use href="#i-bookmark"/></svg>${t(saved?'saved':'save')}</button><small>${en?t('editionNote'):t('centre')}</small></div><div class="detail-main"><span class="eyebrow">${esc(state.lang==='en'?type.en:type.label)}</span><h2 id="bookDialogTitle">${esc(titleOf(b))}</h2>${en?`<div class="detail-subtitle">${esc(state.lang==='en'?b.title:en.title)}</div>`:''}<div class="detail-author">${esc(authorsOf(b))}</div><h3>${t('summary')}</h3><p>${esc(summaryOf(b))}</p>${state.lang==='en'&&!en?`<p class="detail-note">${t('translationNote')}</p>`:''}${en?.note?`<p>${esc(state.lang==='en'?en.noteEn:en.note)}</p>`:''}<h3>${t('publication')}</h3><dl>${row(t('author'),authorsOf(b))}${row(t('genre'),genreOf(b))}${row(t('publisher'),publisherOf(b))}${row(t('year'),yearOf(b))}${en?row(t('translator'),state.lang==='zh'&&en.translatorZh?en.translatorZh:en.translator)+row('ISBN',en.isbn):''}${row(t('series'),state.lang==='en'?type.en:type.label)}</dl><div class="detail-actions">${b.inGallery?`<a class="primary" href="gallery/">${t('viewGallery')}</a>`:''}<a class="secondary" href="${esc(sources)}" target="_blank" rel="noopener noreferrer">${t('source')}</a></div><p><button class="text-button" data-author="${esc(b.author.split('、')[0])}">${t('related')} →</button></p><p class="detail-note">${t('summaryNote')}</p></div></div>`;
}
function openBook(id){const b=data.books.find(b=>b.id===id);if(!b)return;currentBook=b;bookDetails(b);$('#bookDialog').showModal();}
function showAbout(){
 $('#aboutContent').innerHTML=`<div class="about-content"><div class="eyebrow">${t('aboutEyebrow')}</div><h2 id="aboutTitle">${t('aboutTitle')}</h2><p>${t('aboutIntro')}</p><h3>${t('aboutCollection')}</h3><p>${t('aboutCollectionCopy')}</p><h3>${t('aboutSources')}</h3><p>${t('aboutSourcesCopy')}</p><p><a href="https://www.southern.edu.my/mclc/chuban.php" target="_blank" rel="noopener noreferrer">${t('aboutLink')} ↗</a></p><p><a href="https://mcldl.com/Products/?category=30e11c9e-a3be-49c9-b985-7d67b31763ff&pageSize=12" target="_blank" rel="noopener noreferrer">${t('aboutReference')} ↗</a></p><h3>${t('aboutPrototype')}</h3><p>${t('aboutPrototypeCopy')}</p><p>${t('aboutRights')}</p><a class="primary" href="gallery/">${t('enterGallery')}</a></div>`;
 $('#aboutDialog').showModal();
}
function showTerms(){
 const sections=[['termsScopeTitle','termsScope'],['termsRightsTitle','termsRights'],['termsAccuracyTitle','termsAccuracy'],['termsDataTitle','termsData'],['termsAvailabilityTitle','termsAvailability']];
 $('#termsContent').innerHTML=`<div class="about-content terms-content"><div class="eyebrow">${t('termsEyebrow')}</div><h2 id="termsTitle">${t('termsTitle')}</h2><p class="terms-intro">${t('termsIntro')}</p>${sections.map(([title,body])=>`<h3>${t(title)}</h3><p>${t(body)}</p>`).join('')}</div>`;
 $('#termsDialog').showModal();
}
function applyLanguage(){
 document.documentElement.lang=state.lang==='en'?'en':'zh-Hans';
 document.title='MCLC · 马华文学馆';
 document.querySelectorAll('[data-t]').forEach(el=>{const key=el.dataset.t;if(key==='hero')el.innerHTML=t(key);else el.textContent=t(key);});
 $('#language').innerHTML=state.lang==='en'?'中文 <span>⌄</span>':'EN <span>⌄</span>';
 $('#language').setAttribute('aria-label',state.lang==='en'?'切换到中文':'Switch to English');
 $('#gridView').setAttribute('aria-label',state.lang==='en'?'Grid view':'网格视图');
 $('#listView').setAttribute('aria-label',state.lang==='en'?'List view':'列表视图');
 document.querySelectorAll('[data-close]').forEach(el=>el.setAttribute('aria-label',t('close')));
 render();
}
function changeView(view){state.view=view;reset();$('#catalogue').scrollIntoView({behavior:'smooth',block:'start'});}
document.addEventListener('click',e=>{
 const close=e.target.closest('[data-close]');if(close){$('#'+close.dataset.close).close();return;}
 if(!data)return;
 const save=e.target.closest('[data-save]');if(save){toggleSave(save.dataset.save);return;}
 const profile=e.target.closest('[data-profile]');if(profile){showAuthorSources(profile.dataset.profile);return;}
 const book=e.target.closest('[data-book]');if(book){openBook(book.dataset.book);return;}
 const author=e.target.closest('[data-author]');if(author){if($('#bookDialog').open)$('#bookDialog').close();state.view='catalogue';reset();state.author=author.dataset.author;render();$('#catalogue').scrollIntoView({behavior:'smooth'});return;}
 const category=e.target.closest('[data-cat]');if(category){if(state.view==='authors')state.view='catalogue';state.category=category.dataset.cat;state.page=1;state.author='';render();return;}
 const clear=e.target.closest('[data-clear]');if(clear){state[clear.dataset.clear]=clear.dataset.clear==='author'?'':'all';state.page=1;render();return;}
 const page=e.target.closest('[data-page]');if(page&&!page.disabled){state.page=Number(page.dataset.page);render();$('#catalogue').scrollIntoView({behavior:'smooth'});return;}
 const view=e.target.closest('[data-view]');if(view){changeView(view.dataset.view);return;}
});
$('#search').addEventListener('input',e=>{state.query=e.target.value;state.page=1;render();});
$('#collections').addEventListener('change',e=>{if(state.view==='authors')state.view='catalogue';state.collection=e.target.value;state.page=1;render();});
$('#edition').addEventListener('change',e=>{if(state.view==='authors')state.view='catalogue';state.edition=e.target.value;state.page=1;render();});
$('#sort').addEventListener('change',e=>{state.sort=e.target.value;state.page=1;render();});
$('#pageSize').addEventListener('change',e=>{state.pageSize=e.target.value==='all'?'all':Number(e.target.value);state.page=1;render();});
$('#reset').addEventListener('click',reset);$('#emptyReset').addEventListener('click',reset);
$('#gridView').addEventListener('click',()=>{state.layout='grid';render();});$('#listView').addEventListener('click',()=>{state.layout='list';render();});
$('#language').addEventListener('click',()=>{state.lang=state.lang==='en'?'zh':'en';saveStorage('mahua-lang',state.lang);applyLanguage();});
$('#filterToggle').addEventListener('click',()=>{const open=$('#sidebar').classList.toggle('mobile-open');$('#filterToggle').setAttribute('aria-expanded',open);if(open)$('#sidebar').scrollIntoView({behavior:'smooth'});});
$('#about').addEventListener('click',showAbout);$('#sources').addEventListener('click',showAbout);
$('#terms').addEventListener('click',showTerms);
for(const dialog of document.querySelectorAll('dialog')){
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
}
document.addEventListener('keydown',e=>{if(e.key==='/'&&!document.querySelector('dialog[open]')&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){e.preventDefault();$('#search').focus();}});
async function init(){
 try{
  const response=await fetch('books.json');if(!response.ok)throw new Error('Collection unavailable');data=await response.json();
  data.books.forEach((b,i)=>{b.order=i;b.searchText=normalize([b.title,b.author,...b.author.split('、').map(a=>data.authors[a]||''),b.genre,b.year,b.summary,data.types[b.type].label,data.types[b.type].en,publisherOf(b),b.en?Object.values(b.en).join(' '):''].join(' '));});
  const valid=new Set(data.books.map(b=>b.id));state.saved=new Set([...state.saved].filter(id=>valid.has(id)));
  const heroTitles=['等待一棵无花果树','记忆书册','野猪渡河'];$('#heroBooks').innerHTML=heroTitles.map(title=>data.books.find(b=>b.title===title)).filter(Boolean).map(b=>`<img src="${b.image}" alt="" width="110" height="160">`).join('');
  applyLanguage();
 }catch(error){$('#books').innerHTML=`<div class="error-panel">${t('loadingError')}</div>`;$('#resultCount').textContent='';$('#paginationRow').hidden=true;console.error(error);}
}
init();
