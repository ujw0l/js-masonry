<h1 align="center">Welcome to js-masonry 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/ujw0l/js-masonry#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ujw0l/js-masonry/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/ujw0l/js-masonry/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/BastakotiUjwol" target="_blank">
    <img alt="Twitter: bktujwol" src="https://img.shields.io/twitter/follow/BastakotiUjwol.svg?style=social" />
  </a>
</p>

> Vanilla Js library to  lay elements in masonry grid in optimal positions and which auto adjusts margin between bricks based on residual space

### 🏠 [Homepage](https://ujw0l.github.io/js-masonry)

## Install

```sh
npm install js-masonry
```

## Script Tag

```sh
Dowload and include following file:

js-masonry.js 
```

## Options

```sh
const mas = new jsMasonry('selector/s',
                                      { 
                                        elSelector: string, 
                                        elWidth:number, 
                                        elMargin:number, 
                                        heightSort:string,
                                        percentWidth:boolean, 
                                        callBack : function
                                        })

First Parameter : one or multple selector to apply masonry. ('Refer to querySelectorAll')

Second Parameter :

elSelector : String, (Optional, Element to be used as base brick default first element)
elWidth : Number, (Optional, Width for bricks, deafult elSelector or first element width )
heightSort:string,('ASC' for ascending height, 'DESC' for descending,do not set for as it is)
elMargin : Number, (Optional, Minimum hotizontal and vertical margin between bricks)
percentWidth : Boolen, (Optional, Use percent width set with CSS, deafult:true, Note: do not use elSelector)
callBack : Function (Optional, Function to call after all bricks are lay which get selected element object as parameter1)



Note 1 : Initialize carousel inside script tag on window onload or footer.
Note 2 : If multiple masnory is layed each will get respective element object as callback parameter.
Note 3 : To apply masonry after adding  bricks apply mas.layBrks(el), where el is object (see querySelector)

```
## Author

👤 **ujw0l**

* Twitter: [@bktujwol](https://twitter.com/BastakotiUjwol)
* Github: [@ujw0l](https://github.com/ujw0l)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ujw0l/js-masonry/issues).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/ujw0l">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

Copyright © 2019 [ujw0l](https://github.com/ujw0l).<br />
This project is [MIT](https://github.com/ujw0l/js-masonry/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
