'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "99bfc87e0570da4fcf7bc893c6fef192",
".git/config": "93d81034c8a33f456f5d4dc9ba25932e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9f745ed075bfbdfa3106b4a22e13fca4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cf725c477d5e57dbb1f68bd6cd11d2b5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7adbd29d346679d166b363ec333cb6e5",
".git/logs/refs/heads/main": "d85fb7496e9acc78b6b7b8fb1547512f",
".git/logs/refs/heads/master": "2d19dd2f7027384f40f2f96a219154c6",
".git/logs/refs/remotes/origin/main": "210e05d04996e0a6ae3d4acf290a1b47",
".git/logs/refs/remotes/origin/master": "0e645d18553f7e9387cdf313991413bc",
".git/objects/00/35de39ccabe6b9fb6d641a3ebab6be8a3cfd27": "1f09e93e54e6551629e9794561d0ed06",
".git/objects/01/80b231516a4e95db945a203845d5de40d8d958": "759cde6e1a9163b14a017c45505fb03f",
".git/objects/02/8c55b0b772d993ab1158be30c9b8ae2e9258f8": "771491a33b1ec337fe12e307ce0eff57",
".git/objects/02/cba1275b51e084ee67153b64c41856f5acb104": "2068aee488f4af76f9ee8eb1271dfb3e",
".git/objects/05/ff6978adb8a69063fa41610e2579231a5cbb42": "3fb811754f7bdb8832ff90c17c43b031",
".git/objects/06/14f0b9bcecb8526f7e126c4482d4f781365947": "60a043e27bb2bddacf1472e4513c900b",
".git/objects/08/16972d48dcd87c4c05062253dec84c10700abf": "4d6ca41c4c5f876489f1e304b9c2d7d0",
".git/objects/0b/9229f1d27c9a57cc8f0e443c4cf69d17a02dff": "4138b3d7ea803f3262e22724ad5e752c",
".git/objects/12/73609c9904a592c0f538a6f692600f63acb216": "01fffbd966fdea7de1a84a32b1e32cd4",
".git/objects/13/04268575081aff3e7bc95ec59ad25ef75757f4": "6bcb2b0d9e68e944282b13465209144c",
".git/objects/13/3cecb0bb9656147e362f31ea88ff4264e2ef7b": "9dd2ce6ee51fd6fd18b4005977b51040",
".git/objects/15/6b52f5d3c5d48797bbb1f4929bc390093b4017": "83c458f25bcb1796d52a11917a2228ce",
".git/objects/18/406333f92390a4a96c7984dcaed9c23f4af4a7": "4db35db0bfef379f32524acbc820cc92",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1f/c88697288034bc944e3f72f072646d39682251": "32292f2e843ac9102170b368c60f41ae",
".git/objects/26/fb1cfec2179aa4697dc3e976570edd54482e30": "ce4e61fef7349312967f580a1aa74d71",
".git/objects/29/6e3ac305e6cbd1cb9eed3faef45eb3c91c7dad": "02947fd81fd70b3ee80e70686f2d0925",
".git/objects/32/22a9491052ca1daacaeabc78377d1899d75a84": "c44ce5d51c51f5b69d51e7f57580a47d",
".git/objects/38/6aae0f843e7920cc81df455570878047a07bec": "c6d5f90a091546e316a0b6b6f5aa0107",
".git/objects/3a/63f9c4cbae0c4c18e980864c75c471ceabe779": "6a06106c8a6e8e5a80270436314ab33f",
".git/objects/3b/d5d8b319de6df458c805f07f9d2017cc785d79": "575b8d97dde8874eaf52ff7a92032fce",
".git/objects/43/7f2f3316d0df950bb9b02f991a4798400c723d": "a480109f182c3624b0c5b9e913514ec3",
".git/objects/44/38a28da197b6e1e0669fba1f4b6b592bae8ff2": "55b27812e4f1ef5701cc75b9fb3f8836",
".git/objects/45/d0206c145e2d1c433fb9c93c290faa2afea952": "337a95f54f8ff4ba9902fa7bde9533a2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/1a59ee65719c418676aea42bb1cb2b7a3b951a": "06579aa3cf2b3c37a0a9f71e299073de",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/729606f47c8fd908505514c45de5ee8d7d3a09": "06dcbf362ddff468c8d335d5e1d868d8",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/f1db3397015f8ad539eb1a598d4469f39c50a4": "0462c57bf0ef5e89f11afa1dde479bbb",
".git/objects/59/1d83857aff28a29f62d9f688ec8c2e39e57260": "984c5cd937e0b70d6737880cb5541451",
".git/objects/63/12313e7e243c692e9268d5b324fa3fe6565cae": "1473dcf203bebd9d088d4252f231f0d7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/1474c9406ec0f50d896f13ded4f29e8c04869b": "1ccada32291ddda7fe663cd2b1f17c40",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/80/e20b389e16a99b7023c40301d15b6f2418fe16": "7296a22bdc6504627669fea481b0def8",
".git/objects/82/6ea10ba96d1576028118c00edcb6d51fea26ce": "5fa060a40747db4abbb158d9a3a34ab0",
".git/objects/86/25d2b42516e049bb8ecf258ee6fa37a58c4ffd": "6dc55131abeda199e5bfbbe635e7acfa",
".git/objects/86/beda1dad5b74481a7070f7c0feafa2d1afb3c2": "9e407bd3d039ee827b1a3d8575f440ec",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1bad641b297ca2eca64143400c1d35d610834f": "03e4e37e3643c2ac857e8186f969ca40",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/30f0ffbd27a04abcecc00da2e7075ec7d05d2c": "066527a903d8cf44c36a8c04d91f0be3",
".git/objects/91/531a066c4c5d2717e1c2968949783d41e33538": "0d9f81f034711f0dd2ff61e4f45cd518",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9f/665ec5536289f8b3dfb351cdb26fd80f05184a": "aa48b4498e58906c54e76dd1da70e544",
".git/objects/9f/b7146a06cc4d522d54d838a811638d597c1928": "84925a37be3587d1633753318b73aa27",
".git/objects/a7/8dea281ccc2477f03fff85d5f92232400df437": "63062e4c8175565d0c37f585ee3cfad5",
".git/objects/a9/2fbd223c5853a178788b96067ff02a34f05e31": "cbfe0ce241a43da66ed1b2d67785d580",
".git/objects/aa/14876eae7bdc4b342ae06ba7b056785df552fb": "bf9b918e60d8851ede4d3b43c3098896",
".git/objects/aa/3c8653b9a3cece7fe9835ef0919c4be830c2d5": "b4657eae703ba4c4a8113c4e8692713b",
".git/objects/af/cc69f5ff2fd63f3f54dee1dde0a1b694c4f9fc": "d86f9e92f9616bb4b2d17abc8a7f5995",
".git/objects/b3/0f6ee5b5162af5bbb239df6ffe2e225e78c29f": "7231b84d79fd94326605f3db61afe3fb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bd/f434f39c23838b2b36ab03eee5d46e72d80aa9": "d5ed1e2c771b08272e9f731941fc1c60",
".git/objects/c5/9a6ceb9594bce43d0b02d8b869346a457867af": "b850691baa2068dedc4e8ad00c816172",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d0/70970748a250d45b858a1541616deed39ab6c4": "87903074f842d305a1e01e0dd026c9db",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/3bb8220dc1ef26a33a3bcb9277e300edd3c0c6": "dcf33a7a6a158fa78c89f79f23f32666",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/0a296440f4d46bf1736d0835773d0071048661": "b39afca3da88eebba844bfaf28e54c94",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/91c6ff94e2c9e35904a7a796b75178f84d387a": "052da012a093b08812247b66cf408b3e",
".git/objects/df/583ff3558ca11156ed9d938f01e9ab4bfb2788": "2796f6fa3dd3e11f11ff4a1209490d47",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/6cab7a9fb9bf9593708d574dba98c573f07b4d": "a0978fa94572589aacf4613f84d3ab06",
".git/objects/e3/24ffe75972b0fc85eae963e4d7fafba3dca77e": "edc4a398ae838e95b7ee62f0d3843f85",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/2e7ed89ee5553beda6899f4e1506a65d1729fd": "96c2ce5a1d59826227fabf57caf111df",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/cf2070b02833aa6a12b33661ea84d488e9baec": "8ca5caf9ae2b21acd30498e7c1ccda1b",
".git/objects/f5/51b94e7e5cb9d84b1e78a23ab435fd9f1ab4f8": "266729c2d7dee9bd43ba4fb4c9eddbf2",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ff/52d92d7416cc1d500da22e465c0fb3f7f60c51": "9404807a11710ed10fa351951c934f56",
".git/ORIG_HEAD": "61fe853428ce6c0d31221582e539a5d3",
".git/refs/heads/main": "61fe853428ce6c0d31221582e539a5d3",
".git/refs/heads/master": "4386dc8c1489fe14dfcb4808c60ec4f9",
".git/refs/remotes/origin/main": "61fe853428ce6c0d31221582e539a5d3",
".git/refs/remotes/origin/master": "4386dc8c1489fe14dfcb4808c60ec4f9",
"assets/AssetManifest.bin": "15ed0a52e6b0e6567826a3cc173e32a6",
"assets/AssetManifest.bin.json": "75fc001615fb46867cea904bf316b195",
"assets/AssetManifest.json": "70f20b3759af3ceebeb4a0561d23478c",
"assets/assets/img/artist/aspyband.jpg": "e251564d888faf9fab1ea43e6e5a696b",
"assets/assets/img/artist/escarlatasband.jpg": "4a3e481e2cd756559535fdc19774ea3e",
"assets/assets/img/artist/guardarraya.jpg": "ed4bc2912f7391f2fedbbd3a9251900a",
"assets/assets/img/artist/las_pajaros.jpg": "e46cbdbe123aaad6bf32baca51b8dac4",
"assets/assets/img/artist/LUA.jpg": "2dda3fb35973211842385506ea8579ec",
"assets/assets/img/artist/otro.jpg": "f528fd948add013d367ade1a879c4eb4",
"assets/assets/img/artist/reasons.jpg": "32e799381c13c6b6c8f057676eb5fb29",
"assets/assets/img/artist/sesos.jpg": "9f367ae07f9f15f2895db2df3cbc15a0",
"assets/assets/img/artist/that_day.jpg": "a66c176bcf0c18f484dea7b91a6ec2b1",
"assets/assets/img/artist/ultima.jpg": "aa092c8f3916bfb0e47fe23b4a989ed9",
"assets/assets/img/concert/guardarraya.jpg": "fbe2d9177eada36b512b62095e3c0b40",
"assets/assets/img/concert/nqv_fest.jpg": "1e48003f577576596cb928a59b8c812c",
"assets/assets/img/concert/that_day.jpg": "725b42492fcd4eb99784a7385c0c7e80",
"assets/assets/img/logo/logo_h.png": "a3982fddca46db3c46d37dc061f0b874",
"assets/assets/img/logo/turistik_logo.png": "5f963df29fd5afc665a503499bf1a20b",
"assets/assets/img/profile/profile.jpg": "7f94168ff75ecc8fb14628ccff77d0f3",
"assets/assets/img/qr/qr.png": "c4e2d909a675d87e27ade238f30a5746",
"assets/assets/img/theater/el_automata.jpg": "e6c9148afcd76b6328253d06c3c99527",
"assets/assets/img/theater/los_pajaros.png": "2a462bfb2d730800ccd4ae58997f8afa",
"assets/assets/img/theater/LUA.jpg": "2dda3fb35973211842385506ea8579ec",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "20fa666dc7c6153e5ee45d73ed510459",
"assets/NOTICES": "ee35d6c51646ddf00c4e26e90e934b2c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "0e095385e5dac124507daef6ad867786",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ee024fb7b766a624b2e5b34dc091623f",
"/": "ee024fb7b766a624b2e5b34dc091623f",
"main.dart.js": "2869c8d1fc550c43a8a186e15da685f7",
"manifest.json": "3a54b7e16d27112f7d7d83467731807f",
"README.md": "f3876089d2629382e2e81f301551cce4",
"version.json": "54de4691dee075a8aeae2f9d57da5115"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
