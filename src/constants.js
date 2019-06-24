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
export const nodesTab1=[{
  url:"https://i.postimg.cc/BnNRNpMt/Wechat-IMG293.png",
  asia:'Asia1',
  name:'Gravity Lichang',
  des:'The LiChang is the latest heavyweight product created by the core team of EOS Gravity, the largest EOS community in the past. The community platform had an sophisticate contribution for "mining" reward mechanism and UGC (user-generated contribution) features. The number of fans for Gravity has exceeded 200,000, and the number of registered users of the Lichang has exceeded 50,000.',
  address:'ALBUDPW2Jhp1YdFDPpkaC3duvVaCVQ83Zm',
  ont:'550,000 ONT'
},{
  url:"https://i.postimg.cc/Gp0wWPvn/20190409180943.jpg",
  asia:'Asia1',
  name:'sesameseed',
  des:'Sesameseed is a blockchain community, created to support its members and developers by providing fair and transparent representation in delegated governance. SEED is a multi-chain, community participation token, encouraging participation through its creation and distribution.',
  address:'AKxvT43s2QPUqNv9MGnYr3ThhGP1PEUhgA',
  ont:'450,000 ONT'
}];
export const nodesTab2=[{
  url:"https://i.postimg.cc/wMb3Zgb9/dappbirds.png",
  asia:'Asia',
  name:'DAppbirds',
  des:'DAppBirds is a domestic DApp navigator with high reputation in DApp data analysis service for 7 main public chains over 3000 DApps and serve DApp users from home and abroad through multilingual support including Chinese, English and Korean. According to the MAU between 50,000 to 70,000, DAppBirds keeps sharp record and real-time supervision upon DApp data.',
  address:'ANjcr5MimVyXhKVeVYfkyLmnw5hkQiT62z',
  ont:'400,000 ONT'
},{
  url:"https://i.postimg.cc/0NsJ7wLC/logo3.png",
  asia:'Asia1',
  name:'BlockData ( media co-builder node )',
  des:'BlockData，the leading brand in blockchain research and professional services, is a global blockchain data and analysis service provider. BlockData has three major businesses: BlockData Data Platform, BlockData Think Tank, and BlockData Rating, each providing the most complete blockchain data, authoritative blockchain research reports, and professional digital economic rating respectively',
  address:'AT6FszytBPMwL4AkMmP5Vs3LhszWk196Au',
  ont:'330,000 ONT'
},{
  url:"https://i.postimg.cc/kGQ0scYd/10711554714751-pic-hd.jpg",
  asia:'Asia',
  name:'Bitwires ( media co-builder node )',
  des:'Bitwires is currently the China\'s largest blockchain media platform in terms of user traffic! With over 1000 projects and 700 media partners signed on to our platform, Bitwires has reached 2 Million downloads ，its API cooperates with 50 high-traffic apps, covering over 7 Million users.',
  address:'AeSUU5HDsuRoowV5UUnZWy6WTNH3VZTnxv',
  ont:'210,000 ONT'
}];
export const nodesTab3=[{
  url:"https://i.postimg.cc/0jnCnRvh/Blocks-tech-logo.png",
  asia:'Asia1',
  name:'Blocks.tech ( media co-builder node )',
  des:'Blocks.tech is an emerging provider of FinTech and blockchain information and data services. We have a team of professional information and data processing experts, located in Beijing, Shanghai and San Francisco.',
  address:'AHnyNzudjtZPeh3LLyRCPfnw9q1MCAHEEr',
  ont:'210,000 ONT'
}];
export const aboutTeam=[{
  'chinese':{
    'title':'关于本体',
    'detail':'本体是新一代公有基础链项目 & 分布式信任协作平台。本体提供新一代高性能基础公有链，包括完整的分布式账本、智能合约体系支持。同时本体架构支持公有链网体系，除了提供基础公有链服务，通过本体区块链框架支持不同应用的公有链定制，并通过不同协议群支持链网协作。'
  },
  'english':{
    'title':'About Ontology',
    'detail':'Ontology is a new high-performance public blockchain project & a distributed trust collaboration platform. Ontology blockchain framework supports public blockchain systems and is able to customize public blockchains for applications. Ontology also supports collaboration among chain networks with protocol groups.'
  }
},{
  'chinese':{
    'title':'核心团队',
    'detail':'目前，本体团队已拥有近百名核心成员，包含多位在区块链领域拥有丰富经验的研究专家与开发人员，他们毕业于清华大学、北京大学、约翰霍普金斯大学、利兹大学、谢菲尔德大学、曼切斯特大学等著名高校，曾在IBM、思科、EMC等跨国企业及大型金融机构等中积累了丰富经验。'
  },
  'english':{
    'title':'The Core Team',
    'detail':'Ontology\'s core team is composed of experts in blockchain technology, distributed application development, product management and design, marketing and business development, and experts and architects from global financial institutions.'
  }
}];
export const aboutUsMid={
  'chinese':[
    {'num':'200+','team':'核心团队成员'},
    {'num':'190+','team':'共建者团队'},
    {'num':'2,000,000+','team':'社区伙伴'},
    {'num':'900+','team':'技术贡献者'}
  ],
'english':[
  {'num':'200+','team':'Core Team Members'},
  {'num':'190+','team':'Teams of Partners'},
  {'num':'2,000,000+','team':'Community Contributors'},
  {'num':'900+','team':'Technical Contributors'}
]};
export const aboutMiilstone={
  'chinese':[
    {'date':'27/12/2017','event':'成为全球首个加入DIF的中国公有链项目'},
    {'date':'20/04/2018','event':'共识机制VBFT发布'},
    {'date':'20/05/2018','event':'本体北斗共识集群经济模型公布'},
    {'date':'02/07/2018','event':'本体官方客户端ONTO正式上线'},
    {'date':'22/08/2018','event':'ONT DID被纳入W3C，与比特币和以太坊成为规范组中的三家公链代表'},
    {'date':'09/12/2018','event':'与微软联合举办首场东京黑客马拉松'},
    {'date':'28/12/2018','event':'本体分片设计发布'},
    {'date':'22/02/2019','event':'本体开发平台正式登陆Google云商店'},
    {'date':'16/05/2019','event':'本体跨链设计重磅发布'},
    {'date':'21/05/2019','event':'本体Wasm测试网发布'},
    {'date':'23/05/2019','event':'本体发布全球首个跨链测试网'},
  ],
  'english':[
    {'date':'27/12/2017','event':'Joined the DIF as the first China-based blockchain project'},
    {'date':'20/04/2018','event':'VBFT consensus algorithm released'},
    {'date':'20/05/2018','event':'Consensus economic model announced'},
    {'date':'02/07/2018','event':'ONTO app released'},
    {'date':'22/08/2018','event':'ONT DID added to the W3C-CCG DID Method Registry'},
    {'date':'09/12/2018','event':'Ontology chosen to be part of Microsoft Accelerator'},
    {'date':'28/12/2018','event':'Ontology sharding design announced'},
    {'date':'22/02/2019','event':'Ontology Development Platform is added to Google Cloud Platform Marketplace'},
    {'date':'16/05/2019','event':'Ontology multichain design released'},
    {'date':'21/05/2019','event':'Ontology WASM TestNet released  '},
    {'date':'23/05/2019','event':'Ontology multichain TestNet released'},
  ],
}
export const aboutRoadmap=[{
  'year':'2019 Q1',
  'chinese':'测试网同构多链(WASM, MPT)',
  'english':'Cross-chain on TestNet (WASM, MPT, TEE)'
},{
  'chinese':'WASM-VM优化，支持C/C++ ',
  'english':'WASM-VM optimization (C/C++) WASM-VM'
},{
  'chinese':'经济模型更新（手续费分成）',
  'english':'Node incentive model: dApp gas fee sharing'
},{
  'chinese':'多层分片POC',
  'english':'Multi-layer sharding POC'
},{
  'chinese':'模块持续优化，测试网部署',
  'english':'Module optimization on TestNet'
},{
  'year':'2019 Q2',
  'chinese':'多层分片（测试网）',
  'english':'Multi-layer sharding on TestNet'
},{
  'chinese':'链上链下混合存储解决方案',
  'english':'Hybrid storage solution'
},{
  'year':'2019 Q3',
  'chinese':'多层分片（主网）',
  'english':'Multi-layer sharding'
},{
  'chinese':'多层多链商务生态',
  'english':'Multi-layer, multi-chain business ecosystem'
},{
  'year':'2019 Q4',
  'chinese':'多层多链商务解决方案',
  'english':'Multi-layer, multi-chain business solution'
},{
  'chinese':'跨异构链POC',
  'english':'Heterogeneous cross-chain POC'
},{
  'year':'2020',
  'chinese':'构建下一代可信互联网',
  'english':'Expanding the blockchain ecosystem'
}
];
export const aboutMembers=[{
  'chinese':{'name':'李俊','title':'创始人'},
  'english':{'name':'Li Jun','title':'Founder'},
  'photo':require("./images/AboutUs/member1.png"),
},{
  'chinese':{'name':'季宙栋 ','title':'联合创始人'},
  'english':{'name':'Andy Ji ','title':'Co-founder'},
  'photo':require("./images/AboutUs/member2.png"),
},{
  'chinese':{'name':'胡凝','title':'资深架构专家'},
  'english':{'name':'Hu Ning','title':'Senior Protocol Architect'},
  'photo':require("./images/AboutUs/member3.png"),
},{
  'chinese':{'name':'丛宏雷','title':'资深架构专家'},
  'english':{'name':'Cong Honglei','title':'Senior Blockchain Expert'},
  'photo':require("./images/AboutUs/member4.png"),
},{
  'chinese':{'name':'毛贤平','title':'本体研究院院长'},
  'english':{'name':'Mao Xianping','title':'Dean of the Ontology Research Institute'},
  'photo':require("./images/AboutUs/member5.png"),
},{
  'chinese':{'name':'Mathias Glintborg','title':'高级顾问'},
  'english':{'name':'Mathias Glintborg','title':'Senior Advisor'},
  'photo':require("./images/AboutUs/member6.png"),
},{
  'chinese':{'name':'Daniel Assab','title':'海外运营'},
  'english':{'name':'Daniel Assab','title':'Overseas Marketing'},
  'photo':require("./images/AboutUs/member7.png"),
}]