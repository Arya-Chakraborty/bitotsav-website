if (!self.define) {
  let e,
    s = {}
  const t = (t, i) => (
    (t = new URL(t + ".js", i).href),
    s[t] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script")
          ;(e.src = t), (e.onload = s), document.head.appendChild(e)
        } else (e = t), importScripts(t), s()
      }).then(() => {
        let e = s[t]
        if (!e) throw new Error(`Module ${t} didn’t register its module`)
        return e
      })
  )
  self.define = (i, a) => {
    const n = e || ("document" in self ? document.currentScript.src : "") || location.href
    if (s[n]) return
    let c = {}
    const p = (e) => t(e, n),
      r = { module: { uri: n }, exports: c, require: p }
    s[n] = Promise.all(i.map((e) => r[e] || p(e))).then((e) => (a(...e), c))
  }
}
define(["./workbox-4754cb34"], function (e) {
  "use strict"
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/BIT-v1.glb", revision: "d99b233191a5c98706b07df61979ea2e" },
        { url: "/Lsvg.glb", revision: "e5f95f7e39941f2b29077bb000e6cc10" },
        { url: "/Stall.glb", revision: "96b9f15ae5952f6f36e9c42ac862489f" },
        { url: "/_next/app-build-manifest.json", revision: "8601c6d21edb1aeb3d090f0e3e7c7fac" },
        { url: "/_next/static/CStlGB4ss-pYiXxp8ktqQ/_buildManifest.js", revision: "1fce3225287d8108c4b53b4b675d1d33" },
        { url: "/_next/static/CStlGB4ss-pYiXxp8ktqQ/_ssgManifest.js", revision: "b6652df95db52feb4daf4eca35380933" },
        { url: "/_next/static/chunks/1008-eca39e6577009c0f.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/1181-f6ec003211356e7e.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/119-a692803a8a77ab80.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/1517-3873e706cd5feba3.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/1635-c5a2b6c315a22f16.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/1833-dce7043dbacf26b3.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/2031.58000990861b4884.js", revision: "58000990861b4884" },
        { url: "/_next/static/chunks/2170a4aa-e8119a156080ca52.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/2651-e6340cf3eaf4e52f.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/3333-ecac4bb85d252ca5.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/3634.e277ed515c9b4041.js", revision: "e277ed515c9b4041" },
        { url: "/_next/static/chunks/3745-c112fbf7fc6ed9b5.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/3944-7f7f43f724750479.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/4611-0dd402dceddba2be.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/463-35d606f8a38fa5e1.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/4822-913999ea06e2dd74.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/4bd1b696-2a6d32138ec956f5.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/5037-aeb50e006ec0970b.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/5117-6956b3fe7474aa20.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/5203.7c54c202406d4620.js", revision: "7c54c202406d4620" },
        { url: "/_next/static/chunks/53c13509-b852f9e293d5ca9f.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/5565-529924089456f7ee.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/5676-a198c3d865effad6.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/5714-0c00e3e3e73102b1.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/5820-73473b283ef99318.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/6124-84ef2a7983df46ea.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/6217-4a290ed0939d671b.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/6218.ec4f3176909768d6.js", revision: "ec4f3176909768d6" },
        { url: "/_next/static/chunks/6242-70543fcf6a6bf869.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/6394-f98d25c775075c3d.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/7264-e02c36d9244b00d5.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/8164-df1bf2507981cac7.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/8173-a88a6e12802bdd82.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/8390-76219b5ca65ba28a.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/8904-3df56417608fbe9d.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/8e1d74a4-67f8f918984f225e.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/9672-1684cc639f7b5250.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/9d7b1695-0cc691151afe78de.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/ad2866b8-e61efaab7b01bf9f.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/_not-found/page-557851c3ec162961.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/about/page-a9b24a24bee0c995.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/adminpanel/page-ec9a1a592b062b2f.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/alumni/page-44af9c72bf34d38e.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/admin/search/route-16a76b14717044b0.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/admin/update-user/route-a40f51ac491d1163.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/adminpanel/route-7f8a4cfb18ce1b7e.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/auth/%5B...nextauth%5D/route-de55010ee6a5c183.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/chat/route-3deb94e3b5af967a.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/events/register/route-3b6b79ea2bbeee9f.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/events/teams/route-dcc1dc9821917f73.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/logs/route-89b127b972d68d50.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/stats/route-1ae650c8e1dac9e6.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/teams/create/route-fbf58ab2cd14f666.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/teams/get/paginated/route-cb8fde81dcee2330.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/teams/get/route-a528d3fa451687d8.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/teams/join/route-715a612dcd9d3a00.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/user/delete/route-f402fe840a45b4d1.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/user/get/route-d4effc3792c3dea8.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/api/verification/route-1b4063a32ba2a8d4.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/chat/page-445b41f4029c9145.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/coming-soon/page-0807b7a8488dd09f.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/concerts/page-5cd462afe82c56c7.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/dashboard/day-scholar/page-a7386ea1729876c7.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/dashboard/non-bit/page-badc32562eb50797.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/dashboard/page-e6b3432dd44d0433.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/developers/page-54a13d86a8875535.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/events/%5Bid%5D/page-2d61b0eb08b2de9b.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/events/page-11342e0cb95fb22f.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/gallery/page-bb2d891f0ee747d5.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/jfbeiuf2bireflyui3rcuyyb3yuk/page-c08e741eb68da722.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/landingv2/page-4bc88968df70fdbd.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/layout-fcad09727bd52452.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/leaderboard/page-c3206e595924fb09.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/login/page-dd7cef47f856a436.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/logout/page-38102125778609a3.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/merch/page-99ef36a26c75f0cf.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/merch4/page-53b6a521f0291064.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/notice/page-13e701d44e1f630e.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/page-0c6b17dc6b81fba3.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/privacy/page-6b7ce7671bcdd159.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/scanner/page-e3c899b7614e0e52.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/scanner/stats/page-54abe02ceaf1758f.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/signature/page-33f2154a3f4caaab.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/sponsors/page-0cdbd8660d16f1ea.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/team/page-df7725f8fe88c444.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/terms/page-6d0cfa105e995cbc.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/test/page-ac247b73da8b2862.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/tickets/page-205d56196603a5ba.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/app/virtual-helpdesk/page-f8d9ad5e509bcc4b.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/b536a0f1-2a6e12602bee689a.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/bd904a5c-46aef54fbf41e7d0.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/e3e7ddb2.65d1812f598d9e0f.js", revision: "65d1812f598d9e0f" },
        { url: "/_next/static/chunks/framework-1ec85e83ffeb8a74.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/main-app-1bafde0b2be8f3b3.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/main-b9996e20fcf1ee4f.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/pages/_app-c9ef09d97714d9a0.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/pages/_error-34df4b788d70a0b4.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/chunks/polyfills-42372ed130431b0a.js", revision: "846118c33b2c0e922d7b3a7676f81f6f" },
        { url: "/_next/static/chunks/webpack-8b5ef8f3a5114213.js", revision: "CStlGB4ss-pYiXxp8ktqQ" },
        { url: "/_next/static/css/281c70881a96eac1.css", revision: "281c70881a96eac1" },
        { url: "/_next/static/css/564e8f85833f8a8a.css", revision: "564e8f85833f8a8a" },
        { url: "/_next/static/css/65aa3619a1925c9d.css", revision: "65aa3619a1925c9d" },
        { url: "/_next/static/media/day0.34de673b.jpg", revision: "5a8859992522ed3bd902d53f18b8d3cd" },
        { url: "/_next/static/media/day1.f679c35f.jpg", revision: "8a218eedadc629f2f07826c952e20980" },
        { url: "/_next/static/media/day2.c5936800.jpg", revision: "a9a53f9d1a0a5d12abedd42def2d1263" },
        { url: "/_next/static/media/day3.19492979.jpg", revision: "514353819568f3cc6ed62ddc807a7510" },
        { url: "/bitotsav-logo.svg", revision: "be1d509a8b3920ec6ce66c4d201bad2e" },
        { url: "/chat-bot.png", revision: "f111585af8c7ab1c961939a4b8c2a17b" },
        { url: "/comingsoon.png", revision: "8c07a812d23719ca65bf4a499656494d" },
        { url: "/contributions.png", revision: "16a3d31b7c500f2502c08a02b0ffa480" },
        { url: "/day0/p1.webp", revision: "f3db9aecd4ef897e7ec9d091715aa943" },
        { url: "/day0/p2.webp", revision: "544b9d0d9fbeb4bd785db4b2414a2fad" },
        { url: "/day0/p3.webp", revision: "c67dcc3ef2b4541e931ca468f731f4ef" },
        { url: "/day0/p4.webp", revision: "2c13c62db73833186d8712b0e710bb0e" },
        { url: "/day0/p5.webp", revision: "9d568bd5cc3fa6f3cd64ad62fae96bfb" },
        { url: "/day0/p6.webp", revision: "dd820848b44b4002bc8a710db39ac02f" },
        { url: "/day0/p7.webp", revision: "124608304c93a209d72540e789461005" },
        { url: "/day1.svg", revision: "219bccae84df0fb169d39a2c12472082" },
        { url: "/day1/p1.webp", revision: "a55f60253a5aa27b9bcba00f27d17c8b" },
        { url: "/day1/p2.webp", revision: "17b465171d05c8a44e4128eb94418c11" },
        { url: "/day1/p3.webp", revision: "f0f3e97aa9839e175e18af9bf0cba513" },
        { url: "/day1/p4.webp", revision: "6375a6151c45530294ce774d909c46f2" },
        { url: "/day1/p5.webp", revision: "ddf2168b87a3a19d7b888cb17e41e621" },
        { url: "/day1/p6.webp", revision: "1284d52db52df5d531e6ee0570abc78d" },
        { url: "/day1/p7.webp", revision: "7f8f9489580593676620428a6d476961" },
        { url: "/day2.png", revision: "6ab6858bf845c12791655889e54a3a51" },
        { url: "/day2/p1.webp", revision: "61b814fdb59b132179a69d48ab89e757" },
        { url: "/day2/p2.webp", revision: "11e7fc074cadf31809cd122bdcb373f6" },
        { url: "/day2/p3.webp", revision: "573bb3ae269ba590344174ed7f0278a2" },
        { url: "/day2/p4.webp", revision: "3c7820b9fc30245cefb215b16b902c56" },
        { url: "/day2/p5.webp", revision: "d8d650175c2a6a2326f4843ca591e7e2" },
        { url: "/day2/p6.webp", revision: "bd4cf4ed65dac27d269f155548b0de32" },
        { url: "/day2/p7.webp", revision: "6f2c36c9b2730d6db3f74ee6bb88de7e" },
        { url: "/day3.png", revision: "84de24c77e68558911d8529fca7ede12" },
        { url: "/day4.png", revision: "81dded9824802d3704e74431ad4d9b92" },
        { url: "/day5.png", revision: "f4681b543d68b3a836a29d075b10963b" },
        { url: "/developers/abhinav.jpeg", revision: "ce04147340b8ae6742caec82291fdf69" },
        { url: "/developers/aniket.jpeg", revision: "4b0cdd2da46dd6af984c8d70e98ca52b" },
        { url: "/developers/arya.jpeg", revision: "d0a922ee1be4f64d1a81f447610aeaf9" },
        { url: "/developers/deepak.jpeg", revision: "1b9fc08e45a7cab928b00480ec6625a2" },
        { url: "/developers/kunal.jpeg", revision: "a453d26976cd2f3928a1f78aa18482fa" },
        { url: "/developers/manoj.jpeg", revision: "792992eac47074f8a422f0ff448216af" },
        { url: "/developers/mrityunjay.jpeg", revision: "259b49126e433d429aca43bc65f7ec5c" },
        { url: "/developers/priyanshu.jpeg", revision: "38849fdc647295fe7d92f413156f6618" },
        { url: "/developers/raghav.jpeg", revision: "c4c48a418e5b8352d34f6dfdb4d005a1" },
        { url: "/developers/rishabh.jpeg", revision: "a31aef5cdab50e387cc2072459779cf2" },
        { url: "/developers/saahit.jpeg", revision: "daa5cd435ec6ff3d3fc38b14f03dbb11" },
        { url: "/developers/sarthak.jpeg", revision: "cd2b246388f374ab3950bfc3c00b3ad1" },
        { url: "/developers/shaswat.jpeg", revision: "e86b5ab7b308947af302f4a171de879e" },
        { url: "/developers/vaibhav.jpeg", revision: "9b1aff6c0d6895adc6e56c765b38ec27" },
        { url: "/events/5262515422702461913.jpg", revision: "c91c1d477d76aa02b7d09bf2addffb01" },
        { url: "/events/5323368748440215051.jpg", revision: "e0eca78acf40b31fe67caa77126c8489" },
        { url: "/images/bg.jpg", revision: "749ba5bd9c8106b93d80375d8a6ba193" },
        { url: "/images/bg2.jpg", revision: "38c739f7637b9903c52bde514eceac99" },
        { url: "/logo.png", revision: "1da0a4ec30bf7e9dc08669966ccc3505" },
        { url: "/manifest.json", revision: "fdf7c54d7ba81b2e1a85a3220dce2b47" },
        { url: "/merch.jpeg", revision: "b889f5a37d8a4ae46f25f0ab7c92a762" },
        { url: "/plan.md", revision: "adb33b97373869056c59dc6bb9a8ddd3" },
        { url: "/pretoria_gardens_1k.hdr", revision: "dc3f50c0e9e1d0157bc30988f226fadd" },
        { url: "/revealing-soon.jpg", revision: "5ad4d37b269bc63e8010d0ac9ca8f4f0" },
        { url: "/sitemap.xml", revision: "ea177c6b6e3dbc3f8e2b4a007820a699" },
        { url: "/sponsors/Cmpdi.png", revision: "b32f8ca7d17fd02c41560263901079f5" },
        { url: "/sponsors/Frostive.png", revision: "b3e942e1e6b6d0d01e8272f105a90a0c" },
        { url: "/sponsors/JharkhandTourism.png", revision: "b4affe67f5a575fd6547f08e2d15b7d6" },
        { url: "/sponsors/Nestle.png", revision: "47040baf79ba8f5a3a731964706e9fcf" },
        { url: "/sponsors/Red-Bull.png", revision: "56e8513fbef4f1dc116c7cb1f062ae6e" },
        { url: "/sponsors/SBI.png", revision: "eb87930446633c636ac3bacae1b1431e" },
        { url: "/x1aq2nbfzpn2etvujctc.webp", revision: "084467a56bfffc3107502cded7563316" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: t, state: i }) =>
              s && "opaqueredirect" === s.type ? new Response(s.body, { status: 200, statusText: "OK", headers: s.headers }) : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({ cacheName: "google-fonts-webfonts", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })] }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({ cacheName: "google-fonts-stylesheets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({ cacheName: "static-font-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({ cacheName: "static-image-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({ cacheName: "next-image", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }), "GET"),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({ cacheName: "static-audio-assets", plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({ cacheName: "static-video-assets", plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({ cacheName: "static-js-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"),
    e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({ cacheName: "static-style-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"),
    e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({ cacheName: "next-data", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"),
    e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({ cacheName: "static-data-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
      },
      new e.NetworkFirst({ cacheName: "apis", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith("/api/")
      },
      new e.NetworkFirst({ cacheName: "others", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({ cacheName: "cross-origin", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })] }),
      "GET"
    )
})
