let gTitle = document.createElement("title");
gTitle.innerText = `Modules`;
document.head.append(gTitle);

/*NOTE :
Do not forget Adding these Lines To Your HTML Document
<script src="script.js" type="module"></script>
<script src="modules.js" type="module"></script>
*/
// import hello, { myFunction as f } from "./modules.js";
// console.log(f());
// console.log(hello("Mahmoud"));

import * as mainModule from "./modules.js";
console.log(mainModule.default("KK"));
