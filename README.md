# React-Note

## Table of Contents

- [React-Note](#react-note)
  - [Table of Contents](#table-of-contents)
  - [Why need Framework](#why-need-framework)
  - [Talk about React](#talk-about-react)
  - [Start for beginner](#start-for-beginner)
  - [Virtual DOM](#virtual-dom)
  - [JSX](#jsx)
  - [Structure](#structure)
  - [Props](#props)
  - [Function vs Class](#function-vs-class)
  - [useState](#usestate)
  - [useEffect](#useeffect)
  - [useRef](#useref)
  - [useContext](#usecontext)
  - [memo](#memo)
  - [useCallback](#usecallback)
  - [useMemo](#usememo)
  - [Redux](#redux)
  - [Packages](#packages)

---

## Why need Framework
首先,我們必須思考為什麼需要前端框架或是函式庫？

以前的網站互動性沒有很高,所以頁面內容可以操作DOM元素

但隨著前端越來越複雜,使用者的體驗會隨著頁面的重複操作DOM元素導致頁面刷新或是消耗巨大的操作成本,也造成開發者的難以維護與開發

而框架與函式庫幫助我們達到UI和資料分離,使得開發與維護更容易

而框架跟函式庫幫助我們專注在資料和介面,像是一些user event都會幫我們包裝好！！！

---

[⬆️ Back To Contents](#Table-of-Contents)

## Talk about React
這個小節我們來講講React是什麼

不同於Vue、Angular, React的定位並不是框架而是Library

我們了解到React本身專注在UI和資料,而react-router-dom、redux...都是社群開發者提供並且維護

所以其實學習React你不需要消耗多少時間去學習它,反倒是學習周遭的套件、工具會比較困難,這也是React為什麼沒有`最佳實踐`的原因之一

最後Vue vs React根本是偽命題

Vue提供很多的API和完整的官方文檔,但相對的沒有這麼彈性,要學的也比較多,但對於入門前端,Vue反而比較推

React其實就是JavaScript的原生寫法,只是把JavaScript和HTML綁在一起,對於JavaScript底子紮實的人,非常容易上手

---

[⬆️ Back To Contents](#Table-of-Contents)

## Start for beginner
* Environment
  * [Node.js version (LTS)](https://nodejs.org/en/)
  * [Basic HTML、CSS](https://www.w3schools.com/css/)
  * [Strong JavaScript (ES6)](https://javascript.info/)
* Rendering way  
  * [Next.js(Server Side Rendering, SSR)](https://nextjs.org/)
  * [React (Single Page Application, SPA)](https://reactjs.org/)

```javascript
npx create-react-app <fileName>
```

---

[⬆️ Back to Contents](#table-of-contents)

## Virtual DOM
接著讓我們真正進入React的入門磚就是Virtual DOM

Virtual DOM使用Diff演算法比對當前和前一個元素狀態是否一致

只有狀態改變才會更新畫面,進而達到效能優化不過度更新畫面造成效能浪費

![](images/vdom.png)
> resourse by https://reactjs.org/docs/reconciliation.html

---

[⬆️ Back to Contents](#table-of-contents)

## JSX
由於React擁抱資料決定畫面的方式,JavaScript in HTML是非常好的實踐方法

而React官方有說使用JSX不是必要的,但我想會使用React應該也會使用JSX吧哈哈哈
![](images/jsx-intro.png)

---
[⬆️ Back to Contents](#table-of-contents)

## Structure

---
[⬆️ Back to Contents](#table-of-contents)

## Props

---
[⬆️ Back to Contents](#table-of-contents)

## Function vs Class

---
[⬆️ Back to Contents](#table-of-contents)

## useState

---
[⬆️ Back to Contents](#table-of-contents)

## useEffect

---
[⬆️ Back to Contents](#table-of-contents)

## useRef

---
[⬆️ Back to Contents](#table-of-contents)

## useContext

---
[⬆️ Back to Contents](#table-of-contents)

## memo

---
[⬆️ Back to Contents](#table-of-contents)

## useCallback

---
[⬆️ Back to Contents](#table-of-contents)

## useMemo

---
[⬆️ Back to Contents](#table-of-contents)

## Redux

---
[⬆️ Back to Contents](#table-of-contents)

## Packages

---
[⬆️ Back to Contents](#table-of-contents)