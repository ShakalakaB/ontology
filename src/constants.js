let blockDataIni=[];
for (let i=3000000;i<3000100;i++){
  let seconds=(Math.floor((Math.random()*10)+1));
  blockDataIni.unshift({num:i,timeLen:seconds});
}
export {blockDataIni};
export const navBackground='transparent';
export const navTogBackground='#2FA3F1';
export const mdBreakpoint=991.98;
export const smBreakpoint=767.98;
export const navContent={
    chinese:[{id:1,
              dropToggle:'开发者',
              dropItem:['Bounty 项目','区块链浏览器']
            },{id:2,
              dropToggle:'dApps',
              dropItem:['dApps列表','提交应用']
            },{id:3,
              dropToggle:'信任生态',
              dropItem:['信任锚','节点']
            },{id:4,
              dropToggle:'关于',
              dropItem:['关于我们','联系我们']
            }],
    english:[{id:1,
              dropToggle:'Developer',
              dropItem:['Bounty Program','Explorer']
            },{id:2,
              dropToggle:'dApps',
              dropItem:['dApp List','Submit a App']
            },{id:3,
              dropToggle:'Trust Ecosystem',
              dropItem:['Trust Anchor','Node']
            },{id:4,
              dropToggle:'About',
              dropItem:['About us','Contact us']
            }]
    };
export const dAppdata = [{
      id:"1",
      name:{
        appName:"HyperSnakes",
        appURL:"https://explorer.ont.io/contract/all/4765d8fa1c3f8f938ddb19ac5e848b422f67bfa9/10/1",
        des:"HyperSnakes is the first game where blockchain meets global real-time multiplayer battle game.",
        category:"Game",
        image:require("./images/DappList/app1.png")
      },
      activeUser:{
        hours:"3,613",
        days:"26,485"
      },
      volume:{
        hours:"3,651",
        days:"26,575"
      },
      transactions:{
        hours:"6,039.27",
        days:"28,176.93"
      },
      weeklyReward:0,
      totalReward:0
    },{
      id:"2",
      name:{
        appName:"HyperDragons Go!",
        appURL:"https://explorer.ont.io/contract/all/cae215265a5e348bfd603b8db22893aa74b42417/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app1.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'4,728',
      totalReward:'54,717.32'
    },{
      id:"3",
      name:{
        appName:"区块战争",
        appURL:"https://explorer.ont.io/contract/all/cae215265a5e348bfd603b8db22893aa74b42417/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app2.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'0',
      totalReward:'0'
    },{
      id:"4",
      name:{
        appName:"Spokkz",
        appURL:"https://explorer.ont.io/contract/all/cae215265a5e348bfd603b8db22893aa74b42417/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app3.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'0',
      totalReward:'0'
    },{
      id:"5",
      name:{
        appName:"贪吃蛇",
        appURL:"https://explorer.ont.io/contract/all/cae215265a5e348bfd603b8db22893aa74b42417/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app4.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'3760',
      totalReward:'3760'
    },{
      id:"6",
      name:{
        appName:"ONS",
        appURL:"https://explorer.ont.io/contract/all/cae215265a5e348bfd603b8db22893aa74b42417/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Others",
        image:require("./images/DappList/app5.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'0',
      totalReward:'0'
    },{
      id:"7",
      name:{
        appName:"加密西游",
        appURL:"https://explorer.ont.io/contract/all/cae215265a5e348bfd603b8db22893aa74b42417/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app6.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'0',
      totalReward:'0'
    },{
      id:"8",
      name:{
        appName:"大鸟撞小鸟",
        appURL:"https://explorer.ont.io/contract/e1e9a4fe5d9bd4adef0a1e58fa05961526466487/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app7.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'0',
      totalReward:'0'
    },{
      id:"9",
      name:{
        appName:"抢手总动员",
        appURL:"https://explorer.ont.io/contract/e1e9a4fe5d9bd4adef0a1e58fa05961526466487/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app8.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'4,051',
      totalReward:'11,369.85'
    },{
      id:"10",
      name:{
        appName:"ONTLAND",
        appURL:"https://explorer.ont.io/contract/e1e9a4fe5d9bd4adef0a1e58fa05961526466487/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app9.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'0',
      totalReward:'0'
    },{
      id:"11",
      name:{
        appName:"熊本冲",
        appURL:"https://explorer.ont.io/contract/all/4765d8fa1c3f8f938ddb19ac5e848b422f67bfa9/10/1",
        des:"HyperSnakes is the first game where blockchain meets global real-time multiplayer battle game.",
        category:"Game",
        image:require("./images/DappList/app11.png")
      },
      activeUser:{
        hours:"3,613",
        days:"26,485"
      },
      volume:{
        hours:"3,651",
        days:"26,575"
      },
      transactions:{
        hours:"6,039.27",
        days:"28,176.93"
      },
      weeklyReward:'2,893',
      totalReward:'4,138.67'
    },{
      id:"12",
      name:{
        appName:"爆爽弹一弹",
        appURL:"https://explorer.ont.io/contract/all/cae215265a5e348bfd603b8db22893aa74b42417/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app12.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'0',
      totalReward:'9,593.35'
    },{
      id:"13",
      name:{
        appName:"区块忍者",
        appURL:"https://explorer.ont.io/contract/all/cae215265a5e348bfd603b8db22893aa74b42417/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app13.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'0',
      totalReward:'0'
    },{
      id:"14",
      name:{
        appName:"出逃吧！鸭梨君",
        appURL:"https://explorer.ont.io/contract/all/cae215265a5e348bfd603b8db22893aa74b42417/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app14.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'0',
      totalReward:'0'
    },{
      id:"15",
      name:{
        appName:"超级星球",
        appURL:"https://explorer.ont.io/contract/all/cae215265a5e348bfd603b8db22893aa74b42417/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app15.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'3760',
      totalReward:'3760'
    },{
      id:"16",
      name:{
        appName:"像素鸟",
        appURL:"https://explorer.ont.io/contract/all/cae215265a5e348bfd603b8db22893aa74b42417/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Others",
        image:require("./images/DappList/app16.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'0',
      totalReward:'13,670.76'
    },{
      id:"17",
      name:{
        appName:"本体传奇",
        appURL:"https://explorer.ont.io/contract/all/cae215265a5e348bfd603b8db22893aa74b42417/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app17.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'0',
      totalReward:'0'
    },{
      id:"18",
      name:{
        appName:"Pet2048",
        appURL:"https://explorer.ont.io/contract/e1e9a4fe5d9bd4adef0a1e58fa05961526466487/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app18.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'0',
      totalReward:'0'
    },{
      id:"19",
      name:{
        appName:"本体传奇",
        appURL:"https://explorer.ont.io/contract/e1e9a4fe5d9bd4adef0a1e58fa05961526466487/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app19.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'0',
      totalReward:'1,647'
    },{
      id:"20",
      name:{
        appName:"极限弯道",
        appURL:"https://explorer.ont.io/contract/e1e9a4fe5d9bd4adef0a1e58fa05961526466487/10/1",
        des:"The renowned Idle RPG game is starting an amazing blockchain game journey with you.",
        category:"Game",
        image:require("./images/DappList/app20.png")
      },
      activeUser:{
        hours:"4,638",
        days:"29,098"
      },
      volume:{
        hours:"5,647",
        days:"35,560"
      },
      transactions:{
        hours:"2,548.9",
        days:"15,805.53"
      },
      weeklyReward:'0',
      totalReward:'0'
    }];

export const bountyActive=[{
  icon:"bug",
  name:"Bug Bounty Program",
  des:"Up to 6400 ONG",
  flipCon:"We have a security vulnerability and threat intelligence bounty program with SlowMist."
},{
  icon:"cubes",
  name:"Ontology SDK for Cocos",
  des:"1,000+ ONG",
  flipCon:"Building the Ontology SDK for Cocos"
},{
  icon:"angle-double-right",
  name:"Vedio Tutorials",
  des:"200+ ONG",
  flipCon:"Make complete series of video tutorials"
},{
  icon:"angle-double-right",
  name:"Documentation Architecture",
  des:"800+ ONG",
  flipCon:"Make complete series of video tutorials"
},{
  icon:['fab','laravel'],
  name:"One-Click Deployment Platform for STO",
  des:"8000+ ONG",
  flipCon:"One-click deployment platform for STO"
},{
  icon:"cubes",
  name:"Streaming API for Ontology",
  des:"1000+ ONG",
  flipCon:"Building API for Ontology with Streaming Capability"
},{
  icon:"cog",
  name:"NeoVM",
  des:"2600+ ONG",
  flipCon:"Please Re-Implementing NeoVM in RUST language based on Ontology's implementation."
},{
  icon:"cubes",
  name:"Cyano(Desktop Version)",
  des:"1300+ ONG",
  flipCon:"Cyano (desktop version)"
},{
  icon:['far','check-square'],
  name:"Punica-box",
  des:"300+ ONG",
  flipCon:"Please develop a Punica-box (dApp demo or template) which can be downloaded from Punica command line."
},{
  icon:['far','plus-square'],
  name:"Trezor Intergration",
  des:"1000+ ONG",
  flipCon:"Integration with Trezor ONE and model T."
},{
  icon:"angle-double-right",
  name:"Hardware Acceleration",
  des:"2600+ ONG",
  flipCon:"Use FPGAs to parallel verify ECDSA signatures with curve NIST P-256."
},{
  icon:['far','edit'],
  name:"Anonymous Credential",
  des:"700+ ONG",
  flipCon:"Implementing anonymous credential scheme in different languages and integrating it in SDKs. "
},{
  icon:['fab','laravel'],
  name:"SDKs",
  des:"1300+ ONG",
  flipCon:"We are using Java/TS SDK, Python, and C++. Swift/Kotlin and other SDKs are welcome."
}]
export const progressBounty=[{
  name:'SDK (C#)',
  author:'L. Hussain Team'
},{
  name:'Vedio Tutorials',
  author:'TowerBuilders'
},{
  name:'Documentation Architecture',
  author:'TowerBuilders'
},{
  name:'NeoVM in Rust',
  author:'M. Mitsuzawa Team'
},{
  name:'One-Click Deployment Platform for STO',
  author:'Tower Builders Team'
},{
  name:'Ontology Index Project',
  author:'D. Hubbard Team'
},{
  name:'Cyano (Desktop Version)',
  author:'M. Zamborsky Team'
},{
  name:'SDK (C++)',
  author:'A. Skumina Team'
},{
  name:'SDK (PHP)',
  author:'R. Tian Team',
  url:true
},{
  name:'Anonymous Credential (Python)',
  author:'B. Anastasiia Team',
  url:true
},{
  name:'SDK (Swift)',
  author:'R. Rao B Team'
},{
  name:'SDK (Swift)',
  author:'B. Sun Team',
  url:true
},{
  name:'Japanese Documentation Translation',
  author:'Aiko Team'
},{
  name:'SDK (Swift)',
  author:'A. Chen Team'
},{
  name:'One-Click Blockchain',
  author:'G.Y.Yin Team',
  url:true
},{
  name:'Trezor Integration',
  author:'M.Zamborsky Team'
},{
  name:'Hardware Acceleration',
  author:'X.Dong Team'
},{
  name:'Anonymous Credential',
  author:'Y.Mari Team'
},
];
export const doneBounty=[{
  name:'Ontology Nodes Distribution',
  author:'Fyz Team'
},{
  name:'SDK (C#)',
  author:'Panther Team',
  url:true
},{
  name:'Ontology SDK for Unity3D',
  author:'Joe Team',
  url:true
},{
  name:'Cyano (Mobile Version)',
  author:'S. Hsiao Team',
  url:true
},{
  name:'SDK (Dart)',
  author:'S. Hsiao Team',
  url:true
},{
  name:'SDK (Swift)',
  author:'W. Mufson Team'
},{
  name:'New Functionalities for Cyano',
  author:'M. Zamborsky Team'
},{
  name:'Toolkits Introduction Video',
  author:'Y. Zhao Team'
},{
  name:'Improvement of (Partial) Toolkit Documents',
  author:'N. Fujita Team'
},{
  name:'Improvement of (Partial) Toolkit Documents',
  author:'Pather Team'
},{
  name:'SDK (Objective-C)',
  author:'A. Zhang Team',
  url:true
},];
export const trustAnchorBanner={
  "chinese":"信任锚指为Ontology生态系统提供认证服务的合作伙伴，诸如政府机构，高校，银行，第三方认证服务机构，或生物测量技术公司等。它们将为Ontology中 ONT ID拥有者提供多元的认证服务，并在第一时间通过Ontology记录认证行为和认证结果HASH码，以此实现标准和可靠的认证服务。",
  "english":"Trust Anchor refers to the partner that provides authentication services on the ontology ecosystem. It may be government agencies, universities, banks, third-party authentication service agencies (such as CA agencies), biometric technology companies, etc. These trust anchor provide multi-dimensional authentication for the owner of the ontology ONT ID, and record the authentication behavior and the authentication result HASH through the Ontology Blockchain at the first time, thus providing standardized and credible for the user authentication requirment."
};
export const trustAnchorImages=[
  require("./images/TrustAnchor/logo1.png"),
  require("./images/TrustAnchor/logo2.png"),
  require("./images/TrustAnchor/logo3.png"),
  require("./images/TrustAnchor/logo4.png"),
  require("./images/TrustAnchor/logo5.png")
];