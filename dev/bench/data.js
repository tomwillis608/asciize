window.BENCHMARK_DATA = {
  "lastUpdate": 1651089959151,
  "repoUrl": "https://github.com/tomwillis608/asciize",
  "entries": {
    "Pytest-Benchmark Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "distinct": true,
          "id": "259f63c38c5549ad8e1adb74993927e7c831e28e",
          "message": "poetry dependecies for GH action",
          "timestamp": "2022-03-13T18:27:31-05:00",
          "tree_id": "e76e8166041d1c3b822838e92fb0c6caaebea63d",
          "url": "https://github.com/tomwillis608/asciize/commit/259f63c38c5549ad8e1adb74993927e7c831e28e"
        },
        "date": 1647214368795,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1034196.9564986433,
            "unit": "iter/sec",
            "range": "stddev: 1.8422995888283545e-7",
            "extra": "mean: 966.9338066760323 nsec\nrounds: 68028"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 599445.6874031854,
            "unit": "iter/sec",
            "range": "stddev: 1.8523649355107894e-7",
            "extra": "mean: 1.6682078477068147 usec\nrounds: 69931"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 526220.0194099735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013635868913156699",
            "extra": "mean: 1.9003457928515424 usec\nrounds: 92593"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2288997.0659718206,
            "unit": "iter/sec",
            "range": "stddev: 3.650815738691714e-8",
            "extra": "mean: 436.8725564859157 nsec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1333500.494665155,
            "unit": "iter/sec",
            "range": "stddev: 1.2111904186659584e-7",
            "extra": "mean: 749.9059835377881 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 613119.4436824353,
            "unit": "iter/sec",
            "range": "stddev: 2.12008286160467e-7",
            "extra": "mean: 1.6310035675820926 usec\nrounds: 96145"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 688761.5493035826,
            "unit": "iter/sec",
            "range": "stddev: 1.6711077789951342e-7",
            "extra": "mean: 1.4518812802647234 usec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2329497.5475781006,
            "unit": "iter/sec",
            "range": "stddev: 2.183561499064206e-8",
            "extra": "mean: 429.27712074198604 nsec\nrounds: 116280"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "distinct": true,
          "id": "829ba7d4ef7d379abf624f67ce6473b2b5ae364b",
          "message": "add an annotation",
          "timestamp": "2022-03-13T18:32:49-05:00",
          "tree_id": "e47f89136c35cd1bdf55918f603c86ec7bd0eafe",
          "url": "https://github.com/tomwillis608/asciize/commit/829ba7d4ef7d379abf624f67ce6473b2b5ae364b"
        },
        "date": 1647214424424,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 978289.0316401987,
            "unit": "iter/sec",
            "range": "stddev: 1.4574035234277175e-7",
            "extra": "mean: 1.0221927954394017 usec\nrounds: 61350"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 565263.468971929,
            "unit": "iter/sec",
            "range": "stddev: 1.8950766640560936e-7",
            "extra": "mean: 1.7690865497088402 usec\nrounds: 73530"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 536824.9416172482,
            "unit": "iter/sec",
            "range": "stddev: 2.5800658872625974e-7",
            "extra": "mean: 1.8628046546931714 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2342353.0713282204,
            "unit": "iter/sec",
            "range": "stddev: 2.7112522537234884e-8",
            "extra": "mean: 426.9211214314945 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1656461.6890136958,
            "unit": "iter/sec",
            "range": "stddev: 2.4362525954589636e-8",
            "extra": "mean: 603.6964251164017 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 629880.2868076721,
            "unit": "iter/sec",
            "range": "stddev: 3.0345688999902145e-7",
            "extra": "mean: 1.5876032651667034 usec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 702410.4702791304,
            "unit": "iter/sec",
            "range": "stddev: 1.5900873144468414e-7",
            "extra": "mean: 1.4236689831838794 usec\nrounds: 147059"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2391487.2421071446,
            "unit": "iter/sec",
            "range": "stddev: 2.252496889048703e-8",
            "extra": "mean: 418.14983680153654 nsec\nrounds: 117648"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33f2a0342b362513d2c5adedb39a693dbf862a7c",
          "message": "Merge pull request #66 from tomwillis608/tom-perf-tests\n\nAdding the baseline for pytest-benchmark based performance tests on the conversion functions.",
          "timestamp": "2022-03-13T18:49:01-05:00",
          "tree_id": "f75502bed270773189fee623be15da590250a22d",
          "url": "https://github.com/tomwillis608/asciize/commit/33f2a0342b362513d2c5adedb39a693dbf862a7c"
        },
        "date": 1647215388337,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1047152.4835846528,
            "unit": "iter/sec",
            "range": "stddev: 9.548584911062547e-8",
            "extra": "mean: 954.9707570541794 nsec\nrounds: 74069"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 623999.7210090358,
            "unit": "iter/sec",
            "range": "stddev: 1.5828728101703066e-7",
            "extra": "mean: 1.602564819072282 usec\nrounds: 84034"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 546010.9308208842,
            "unit": "iter/sec",
            "range": "stddev: 2.113118490898338e-7",
            "extra": "mean: 1.8314651659016772 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2379787.835656713,
            "unit": "iter/sec",
            "range": "stddev: 2.0964352692451553e-8",
            "extra": "mean: 420.2055263149722 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1789177.4114717764,
            "unit": "iter/sec",
            "range": "stddev: 2.716755860490986e-8",
            "extra": "mean: 558.9160658905977 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 653766.875699688,
            "unit": "iter/sec",
            "range": "stddev: 3.6762730489474894e-7",
            "extra": "mean: 1.5295972267327849 usec\nrounds: 107527"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 735237.4658811651,
            "unit": "iter/sec",
            "range": "stddev: 1.6158416764512668e-7",
            "extra": "mean: 1.3601047911799804 usec\nrounds: 125001"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2395404.787969225,
            "unit": "iter/sec",
            "range": "stddev: 1.6512025874892738e-8",
            "extra": "mean: 417.4659769500431 nsec\nrounds: 116280"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "affc785d8689377471320b43ff702976204ea88d",
          "message": "Fix Benchmark badge",
          "timestamp": "2022-03-13T18:53:02-05:00",
          "tree_id": "25fe943293967c38bb073697c5b27867a3bfcebf",
          "url": "https://github.com/tomwillis608/asciize/commit/affc785d8689377471320b43ff702976204ea88d"
        },
        "date": 1647215632721,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 914316.3046651189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012973903983156347",
            "extra": "mean: 1.0937134062880611 usec\nrounds: 65790"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 568837.2050079443,
            "unit": "iter/sec",
            "range": "stddev: 0.000004187600727603533",
            "extra": "mean: 1.757972212781044 usec\nrounds: 85471"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 502596.9244855939,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016232987225196261",
            "extra": "mean: 1.9896659754205546 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2114732.5392090967,
            "unit": "iter/sec",
            "range": "stddev: 2.571496802260834e-7",
            "extra": "mean: 472.873037823012 nsec\nrounds: 105253"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1206338.4196956253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016880321813992654",
            "extra": "mean: 828.954780576675 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 572096.3222680698,
            "unit": "iter/sec",
            "range": "stddev: 0.000007603162763132834",
            "extra": "mean: 1.7479573999628428 usec\nrounds: 100000"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 643536.1848618012,
            "unit": "iter/sec",
            "range": "stddev: 0.000010015233392644785",
            "extra": "mean: 1.553914175338484 usec\nrounds: 135136"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2091264.8277726087,
            "unit": "iter/sec",
            "range": "stddev: 3.1878634491536446e-7",
            "extra": "mean: 478.1795144831692 nsec\nrounds: 36765"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8105707149a17f14d212d2e0fec979f6dd36de71",
          "message": "Fix benchmark badge",
          "timestamp": "2022-03-13T18:54:32-05:00",
          "tree_id": "6e18b1daeb157df2451cac3d9c6f9662be09f23f",
          "url": "https://github.com/tomwillis608/asciize/commit/8105707149a17f14d212d2e0fec979f6dd36de71"
        },
        "date": 1647215729139,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 792866.5800279243,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022477027621156354",
            "extra": "mean: 1.261246248977704 usec\nrounds: 67115"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 467413.8254258442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035189345431930434",
            "extra": "mean: 2.139431795987069 usec\nrounds: 75758"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 405836.1077020667,
            "unit": "iter/sec",
            "range": "stddev: 0.000018227213572468172",
            "extra": "mean: 2.464048863621869 usec\nrounds: 83334"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1734849.420351801,
            "unit": "iter/sec",
            "range": "stddev: 8.490231172349499e-7",
            "extra": "mean: 576.4189031443468 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1028382.2550568157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019480662058798476",
            "extra": "mean: 972.4010649568747 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 494797.65665278747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027919006759029358",
            "extra": "mean: 2.021028164855935 usec\nrounds: 23753"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 543184.5871733767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062570454576010914",
            "extra": "mean: 1.8409947992151228 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1739077.428986663,
            "unit": "iter/sec",
            "range": "stddev: 4.374346488939404e-7",
            "extra": "mean: 575.0175255752779 nsec\nrounds: 90910"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "eb846a9410c82408b5bbbe6eaf8c7dc4812e9ada",
          "message": "Lock file maintenance",
          "timestamp": "2022-03-14T04:50:18Z",
          "tree_id": "1e56ec0256f108a56ee224a32456fe4b7fb9b8b9",
          "url": "https://github.com/tomwillis608/asciize/commit/eb846a9410c82408b5bbbe6eaf8c7dc4812e9ada"
        },
        "date": 1647233471581,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 996039.6553447007,
            "unit": "iter/sec",
            "range": "stddev: 9.430793074976135e-8",
            "extra": "mean: 1.003976091347416 usec\nrounds: 98040"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 590408.231871659,
            "unit": "iter/sec",
            "range": "stddev: 2.754624353734677e-7",
            "extra": "mean: 1.69374332202295 usec\nrounds: 83334"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 538267.7525789872,
            "unit": "iter/sec",
            "range": "stddev: 1.599790301569e-7",
            "extra": "mean: 1.8578114613196277 usec\nrounds: 107527"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2395236.2893658965,
            "unit": "iter/sec",
            "range": "stddev: 1.527336752544012e-8",
            "extra": "mean: 417.4953445887555 nsec\nrounds: 117648"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1717500.211232499,
            "unit": "iter/sec",
            "range": "stddev: 3.9567012466139115e-8",
            "extra": "mean: 582.2415586675343 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 620884.9399343788,
            "unit": "iter/sec",
            "range": "stddev: 1.2701528883448388e-7",
            "extra": "mean: 1.6106043739854436 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 697408.6650478394,
            "unit": "iter/sec",
            "range": "stddev: 1.3929246130181394e-7",
            "extra": "mean: 1.4338795173005257 usec\nrounds: 120482"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2325243.2077020807,
            "unit": "iter/sec",
            "range": "stddev: 1.5462143724360195e-8",
            "extra": "mean: 430.0625399906526 nsec\nrounds: 116280"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "3b9fce699ac01149ce335b43fa405f808dddb5a5",
          "message": "Update dependency mypy to ^0.941",
          "timestamp": "2022-03-14T22:22:33Z",
          "tree_id": "07d7de4976e26ea8e20d410c9c26b3764daf7508",
          "url": "https://github.com/tomwillis608/asciize/commit/3b9fce699ac01149ce335b43fa405f808dddb5a5"
        },
        "date": 1647296600915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1169783.3904851421,
            "unit": "iter/sec",
            "range": "stddev: 3.6818853804160944e-7",
            "extra": "mean: 854.8591201874322 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 686781.4259051975,
            "unit": "iter/sec",
            "range": "stddev: 4.5242270169196914e-7",
            "extra": "mean: 1.4560673342060342 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 613091.5415727413,
            "unit": "iter/sec",
            "range": "stddev: 3.5568957021062666e-7",
            "extra": "mean: 1.63107779538882 usec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2630700.7996058143,
            "unit": "iter/sec",
            "range": "stddev: 5.677484293347232e-8",
            "extra": "mean: 380.1268468651161 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1508346.9914254353,
            "unit": "iter/sec",
            "range": "stddev: 3.105273587975814e-7",
            "extra": "mean: 662.9774220950105 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 739252.6647903529,
            "unit": "iter/sec",
            "range": "stddev: 4.765951010249887e-7",
            "extra": "mean: 1.35271747756715 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 825055.1896935909,
            "unit": "iter/sec",
            "range": "stddev: 4.37349096215089e-7",
            "extra": "mean: 1.212040130759471 usec\nrounds: 142858"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2766529.2959263995,
            "unit": "iter/sec",
            "range": "stddev: 5.745337002318405e-8",
            "extra": "mean: 361.463730556774 nsec\nrounds: 133334"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "ca98c20329827ed8f3e0be14fbe3b9cfedb49163",
          "message": "Lock file maintenance",
          "timestamp": "2022-03-21T03:43:41Z",
          "tree_id": "9312f8b591694f259b7d487eadaa4888be78f091",
          "url": "https://github.com/tomwillis608/asciize/commit/ca98c20329827ed8f3e0be14fbe3b9cfedb49163"
        },
        "date": 1647834277232,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 867564.1548787667,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020934487818917215",
            "extra": "mean: 1.1526525091850295 usec\nrounds: 32680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 516114.8737332314,
            "unit": "iter/sec",
            "range": "stddev: 0.000004595704263865425",
            "extra": "mean: 1.937553151232914 usec\nrounds: 90901"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 441332.404767687,
            "unit": "iter/sec",
            "range": "stddev: 0.000006381438389392466",
            "extra": "mean: 2.2658657945735707 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1974708.4500010104,
            "unit": "iter/sec",
            "range": "stddev: 6.777964076099465e-7",
            "extra": "mean: 506.4038693912269 nsec\nrounds: 39063"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1472863.0199186902,
            "unit": "iter/sec",
            "range": "stddev: 0.000001894816915150632",
            "extra": "mean: 678.9497641505451 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 525085.1296448531,
            "unit": "iter/sec",
            "range": "stddev: 0.000016755170831800587",
            "extra": "mean: 1.904453094446534 usec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 595361.1895071109,
            "unit": "iter/sec",
            "range": "stddev: 0.000026482458616064445",
            "extra": "mean: 1.6796526505664278 usec\nrounds: 151516"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1966804.0186678257,
            "unit": "iter/sec",
            "range": "stddev: 6.814835178628166e-7",
            "extra": "mean: 508.43906688634536 nsec\nrounds: 111112"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "bc8081ee80274d02aa8e71c8fef41c3c7c778f8c",
          "message": "Update dependency xdoctest to v1",
          "timestamp": "2022-03-25T22:37:23Z",
          "tree_id": "b159800797688dd6e5f89af986378ef781a16b73",
          "url": "https://github.com/tomwillis608/asciize/commit/bc8081ee80274d02aa8e71c8fef41c3c7c778f8c"
        },
        "date": 1648247895749,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1203899.597170371,
            "unit": "iter/sec",
            "range": "stddev: 1.7023442480177096e-7",
            "extra": "mean: 830.634051502622 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 687846.1238988853,
            "unit": "iter/sec",
            "range": "stddev: 2.0620228514125729e-7",
            "extra": "mean: 1.4538135278450763 usec\nrounds: 84034"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 599567.949837947,
            "unit": "iter/sec",
            "range": "stddev: 2.4569145429274465e-7",
            "extra": "mean: 1.6678676708291076 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2687891.803681323,
            "unit": "iter/sec",
            "range": "stddev: 6.555900978163988e-8",
            "extra": "mean: 372.03878468299723 nsec\nrounds: 131579"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 2005379.8908265813,
            "unit": "iter/sec",
            "range": "stddev: 4.9957525332906104e-8",
            "extra": "mean: 498.6586354906703 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 717677.9519389822,
            "unit": "iter/sec",
            "range": "stddev: 4.4099590525848525e-7",
            "extra": "mean: 1.3933826409161043 usec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 813835.8925184805,
            "unit": "iter/sec",
            "range": "stddev: 2.7105860782408065e-7",
            "extra": "mean: 1.228748951960597 usec\nrounds: 125000"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2703501.8689742535,
            "unit": "iter/sec",
            "range": "stddev: 3.878873831574672e-8",
            "extra": "mean: 369.8906264786163 nsec\nrounds: 135136"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "d0ed1693c200983a84cd07264bcb7357e1571cf7",
          "message": "Update dependency mypy to ^0.942",
          "timestamp": "2022-03-26T01:37:10Z",
          "tree_id": "fed03d4a50b83ce4aad2738364dd7059d6496ad0",
          "url": "https://github.com/tomwillis608/asciize/commit/d0ed1693c200983a84cd07264bcb7357e1571cf7"
        },
        "date": 1648258677980,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1151281.9067053844,
            "unit": "iter/sec",
            "range": "stddev: 1.1824520561065733e-7",
            "extra": "mean: 868.5969910373153 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 671856.0917653006,
            "unit": "iter/sec",
            "range": "stddev: 1.446023839679934e-7",
            "extra": "mean: 1.488413980697119 usec\nrounds: 73530"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 608525.591117374,
            "unit": "iter/sec",
            "range": "stddev: 1.9899129253217165e-7",
            "extra": "mean: 1.6433162624497044 usec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2683801.990939237,
            "unit": "iter/sec",
            "range": "stddev: 1.6024161032615818e-8",
            "extra": "mean: 372.6057299968044 nsec\nrounds: 133316"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 2022125.8349719308,
            "unit": "iter/sec",
            "range": "stddev: 2.06724270212956e-8",
            "extra": "mean: 494.52906575109455 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 720591.7575292032,
            "unit": "iter/sec",
            "range": "stddev: 1.3611438152116273e-7",
            "extra": "mean: 1.387748318727436 usec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 805006.2937447507,
            "unit": "iter/sec",
            "range": "stddev: 1.740229861117431e-7",
            "extra": "mean: 1.242226312726292 usec\nrounds: 135136"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2588938.946892895,
            "unit": "iter/sec",
            "range": "stddev: 2.9270655673942172e-8",
            "extra": "mean: 386.25862583587804 nsec\nrounds: 124985"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fa9a89b1e1f7cbbbc30d22849a35b3354a87201",
          "message": "Merge pull request #69 from tomwillis608/pre-commit-ci-update-config\n\n[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2022-03-26T11:34:45-05:00",
          "tree_id": "bfffb9e249624374640124973a3f00c8923c5910",
          "url": "https://github.com/tomwillis608/asciize/commit/2fa9a89b1e1f7cbbbc30d22849a35b3354a87201"
        },
        "date": 1648312587106,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 830140.4380860518,
            "unit": "iter/sec",
            "range": "stddev: 0.000002651024888478438",
            "extra": "mean: 1.2046154531461828 usec\nrounds: 21368"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 522094.60552348354,
            "unit": "iter/sec",
            "range": "stddev: 0.000005228022970203298",
            "extra": "mean: 1.9153616785550573 usec\nrounds: 72993"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 444409.85364230286,
            "unit": "iter/sec",
            "range": "stddev: 0.000021886542585812868",
            "extra": "mean: 2.2501751295660544 usec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1912222.5763026662,
            "unit": "iter/sec",
            "range": "stddev: 4.878627869141871e-7",
            "extra": "mean: 522.9516753920137 nsec\nrounds: 107527"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1383173.6281134703,
            "unit": "iter/sec",
            "range": "stddev: 9.673440230458067e-7",
            "extra": "mean: 722.9750334119906 nsec\nrounds: 33671"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 549949.0448694673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030448264509045673",
            "extra": "mean: 1.8183502805016312 usec\nrounds: 90910"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 591972.8580578042,
            "unit": "iter/sec",
            "range": "stddev: 0.000008356632428868099",
            "extra": "mean: 1.6892666384754305 usec\nrounds: 151516"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1917318.3059764109,
            "unit": "iter/sec",
            "range": "stddev: 7.590743647669404e-7",
            "extra": "mean: 521.5618068648789 nsec\nrounds: 106383"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71a728ea32ee57b2c32f7006a2bf60b637f715e6",
          "message": "Merge pull request #76 from tomwillis608/issue-75-secret-scan\n\nissue-75 Add action for detect-secrets",
          "timestamp": "2022-03-27T23:29:52-05:00",
          "tree_id": "6d555a735d12a7ddbbd26152fe5247171352fd67",
          "url": "https://github.com/tomwillis608/asciize/commit/71a728ea32ee57b2c32f7006a2bf60b637f715e6"
        },
        "date": 1648441844596,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 897382.4387482654,
            "unit": "iter/sec",
            "range": "stddev: 3.77635450383958e-7",
            "extra": "mean: 1.1143520942920089 usec\nrounds: 81961"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 519423.6390522897,
            "unit": "iter/sec",
            "range": "stddev: 5.340860284152403e-7",
            "extra": "mean: 1.9252108006184356 usec\nrounds: 77514"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 465085.0426718109,
            "unit": "iter/sec",
            "range": "stddev: 6.614876864578047e-7",
            "extra": "mean: 2.150144399947203 usec\nrounds: 81295"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2013635.0836150006,
            "unit": "iter/sec",
            "range": "stddev: 1.1352262896570245e-7",
            "extra": "mean: 496.6143111712927 nsec\nrounds: 97078"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1510182.7265775062,
            "unit": "iter/sec",
            "range": "stddev: 6.038161737229968e-8",
            "extra": "mean: 662.1715256050088 nsec\nrounds: 79359"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 558492.5474416325,
            "unit": "iter/sec",
            "range": "stddev: 4.889979972114287e-7",
            "extra": "mean: 1.790534188111989 usec\nrounds: 101000"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 617367.3341850381,
            "unit": "iter/sec",
            "range": "stddev: 4.5170702279315854e-7",
            "extra": "mean: 1.6197811977208998 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2065792.1011942858,
            "unit": "iter/sec",
            "range": "stddev: 5.82136529174064e-8",
            "extra": "mean: 484.0758174173597 nsec\nrounds: 99001"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82977d5a5ebeb85aefdb7f22497119cf7fda0c2c",
          "message": "Merge pull request #74 from tomwillis608/renovate/lock-file-maintenance\n\nLock file maintenance",
          "timestamp": "2022-03-27T23:35:47-05:00",
          "tree_id": "adea80cef36e86bf85c168051ab3107fb3dc1fda",
          "url": "https://github.com/tomwillis608/asciize/commit/82977d5a5ebeb85aefdb7f22497119cf7fda0c2c"
        },
        "date": 1648442233001,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 811978.3142174075,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011718338030570731",
            "extra": "mean: 1.2315599844114182 usec\nrounds: 56498"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 490602.0385460817,
            "unit": "iter/sec",
            "range": "stddev: 0.000002093004256410596",
            "extra": "mean: 2.0383119543562005 usec\nrounds: 73530"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 429802.7027638605,
            "unit": "iter/sec",
            "range": "stddev: 0.000002104359970955609",
            "extra": "mean: 2.3266489334977813 usec\nrounds: 85471"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1780373.2886596788,
            "unit": "iter/sec",
            "range": "stddev: 5.494064688081899e-7",
            "extra": "mean: 561.679961371049 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1029057.7333340357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019777273575420627",
            "extra": "mean: 971.7627763800076 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 489228.04489740287,
            "unit": "iter/sec",
            "range": "stddev: 0.000003772355237806955",
            "extra": "mean: 2.0440365396667155 usec\nrounds: 95239"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 551502.6079953887,
            "unit": "iter/sec",
            "range": "stddev: 0.000002532887197466303",
            "extra": "mean: 1.8132280527825924 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1747133.407891404,
            "unit": "iter/sec",
            "range": "stddev: 4.206345766817858e-7",
            "extra": "mean: 572.3661372872208 nsec\nrounds: 98040"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52d59199c70da007b27a6a493d51d2b198a5b6cb",
          "message": "Merge pull request #73 from tomwillis608/renovate/sphinx-4.x\n\nUpdate dependency sphinx to v4.5.0",
          "timestamp": "2022-03-27T23:40:27-05:00",
          "tree_id": "a07e8e4bac9384f7695f99d33bc5e237b016699a",
          "url": "https://github.com/tomwillis608/asciize/commit/52d59199c70da007b27a6a493d51d2b198a5b6cb"
        },
        "date": 1648442477964,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 918159.4901578459,
            "unit": "iter/sec",
            "range": "stddev: 0.000010850703051646088",
            "extra": "mean: 1.0891353961043135 usec\nrounds: 70423"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 615296.4895768428,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017319101595229217",
            "extra": "mean: 1.6252327405406277 usec\nrounds: 87720"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 533952.4165133554,
            "unit": "iter/sec",
            "range": "stddev: 0.00000822676294853918",
            "extra": "mean: 1.8728260591643706 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2376266.370442559,
            "unit": "iter/sec",
            "range": "stddev: 5.040876630449084e-7",
            "extra": "mean: 420.8282423377444 nsec\nrounds: 126583"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1572670.084808414,
            "unit": "iter/sec",
            "range": "stddev: 6.440640872269929e-7",
            "extra": "mean: 635.8612716420881 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 658618.6803720058,
            "unit": "iter/sec",
            "range": "stddev: 0.000002261783877456926",
            "extra": "mean: 1.5183292393637737 usec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 673886.4521348123,
            "unit": "iter/sec",
            "range": "stddev: 0.000003121805466268823",
            "extra": "mean: 1.4839295208148036 usec\nrounds: 153847"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2329681.233510776,
            "unit": "iter/sec",
            "range": "stddev: 6.511233810775211e-7",
            "extra": "mean: 429.24327397928585 nsec\nrounds: 126583"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edd08bbe8484517610004ad3c9d791ca7962eb85",
          "message": "Merge pull request #77 from tomwillis608/pre-commit-ci-update-config\n\n[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2022-03-28T20:16:49-05:00",
          "tree_id": "97205f57cef28c12c5547dab56432b3108824ecf",
          "url": "https://github.com/tomwillis608/asciize/commit/edd08bbe8484517610004ad3c9d791ca7962eb85"
        },
        "date": 1648516656231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1190585.3195944387,
            "unit": "iter/sec",
            "range": "stddev: 3.3615721998931896e-7",
            "extra": "mean: 839.9230055521266 nsec\nrounds: 68966"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 628095.5694257726,
            "unit": "iter/sec",
            "range": "stddev: 5.688278656603569e-7",
            "extra": "mean: 1.5921143989508408 usec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 587822.9821308703,
            "unit": "iter/sec",
            "range": "stddev: 5.63704932505805e-7",
            "extra": "mean: 1.7011924174433934 usec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2594961.859748361,
            "unit": "iter/sec",
            "range": "stddev: 7.743944823796098e-8",
            "extra": "mean: 385.36211861600583 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1527895.5851842295,
            "unit": "iter/sec",
            "range": "stddev: 3.049023015596243e-7",
            "extra": "mean: 654.4949862391431 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 740658.1177823747,
            "unit": "iter/sec",
            "range": "stddev: 4.2146450159484804e-7",
            "extra": "mean: 1.3501505971393768 usec\nrounds: 103083"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 791484.3108152305,
            "unit": "iter/sec",
            "range": "stddev: 4.5594569800229553e-7",
            "extra": "mean: 1.263448922910421 usec\nrounds: 140846"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2557402.4904881436,
            "unit": "iter/sec",
            "range": "stddev: 9.900266011203959e-8",
            "extra": "mean: 391.02175106161394 nsec\nrounds: 140846"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba199e8769113f233fefbfacb7c4883a735334a4",
          "message": "Merge pull request #78 from tomwillis608/renovate/codecov-codecov-action-3.x\n\nUpdate codecov/codecov-action action to v3",
          "timestamp": "2022-04-21T15:56:06-05:00",
          "tree_id": "bc29bf710a1b8ba2c2b70f70bc7c4f34317e5392",
          "url": "https://github.com/tomwillis608/asciize/commit/ba199e8769113f233fefbfacb7c4883a735334a4"
        },
        "date": 1650574620277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1007019.4247319907,
            "unit": "iter/sec",
            "range": "stddev: 1.1685014702552723e-7",
            "extra": "mean: 993.0295041390499 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 586403.3087869487,
            "unit": "iter/sec",
            "range": "stddev: 1.8403043112237777e-7",
            "extra": "mean: 1.7053109779831048 usec\nrounds: 70423"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 541508.1195889389,
            "unit": "iter/sec",
            "range": "stddev: 2.945032034285218e-7",
            "extra": "mean: 1.8466943778407314 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2366081.373772027,
            "unit": "iter/sec",
            "range": "stddev: 2.0561909934082374e-8",
            "extra": "mean: 422.63973297142246 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1759731.0618694786,
            "unit": "iter/sec",
            "range": "stddev: 2.1425242953460654e-8",
            "extra": "mean: 568.2686529028724 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 616245.9223899714,
            "unit": "iter/sec",
            "range": "stddev: 2.056289199783575e-7",
            "extra": "mean: 1.6227287900287024 usec\nrounds: 100000"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 689236.7472438342,
            "unit": "iter/sec",
            "range": "stddev: 1.449061606435927e-7",
            "extra": "mean: 1.4508802729959869 usec\nrounds: 125001"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2385316.4457729035,
            "unit": "iter/sec",
            "range": "stddev: 1.7947344548888324e-8",
            "extra": "mean: 419.23158739467937 nsec\nrounds: 114943"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e6ff22e8634369d747a2d6eab4965222ff01f3e",
          "message": "Merge pull request #79 from tomwillis608/renovate/sphinx-click-4.x\n\nUpdate dependency sphinx-click to v4",
          "timestamp": "2022-04-21T16:05:29-05:00",
          "tree_id": "fa4ec1456072ef1e0c3203d402e9973f664493d1",
          "url": "https://github.com/tomwillis608/asciize/commit/2e6ff22e8634369d747a2d6eab4965222ff01f3e"
        },
        "date": 1650575180807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 953282.2117313584,
            "unit": "iter/sec",
            "range": "stddev: 1.2488159416713247e-7",
            "extra": "mean: 1.0490073009794156 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 555703.3150917591,
            "unit": "iter/sec",
            "range": "stddev: 2.041637233206856e-7",
            "extra": "mean: 1.7995213863982034 usec\nrounds: 81968"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 513334.6346687632,
            "unit": "iter/sec",
            "range": "stddev: 4.837178847897702e-7",
            "extra": "mean: 1.948047009618326 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2231842.7079430115,
            "unit": "iter/sec",
            "range": "stddev: 1.7504281716453285e-7",
            "extra": "mean: 448.0602492467436 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1613399.8945041562,
            "unit": "iter/sec",
            "range": "stddev: 2.1776390575152703e-8",
            "extra": "mean: 619.8091393252632 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 583625.7980604651,
            "unit": "iter/sec",
            "range": "stddev: 1.9137696090571454e-7",
            "extra": "mean: 1.7134266568120375 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 652036.9783501697,
            "unit": "iter/sec",
            "range": "stddev: 2.2499054758323674e-7",
            "extra": "mean: 1.5336553496249108 usec\nrounds: 161291"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2223546.405232357,
            "unit": "iter/sec",
            "range": "stddev: 2.0263575940189487e-8",
            "extra": "mean: 449.7320126295638 nsec\nrounds: 109891"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7120d72b8a660dcccf409d9d55e868537dec0cbd",
          "message": "Merge pull request #80 from tomwillis608/pre-commit-ci-update-config\n\n[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2022-04-21T16:13:17-05:00",
          "tree_id": "5c0beaa3f36156dfdd243e52fa1dbd9d1e74099e",
          "url": "https://github.com/tomwillis608/asciize/commit/7120d72b8a660dcccf409d9d55e868537dec0cbd"
        },
        "date": 1650575652267,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1015073.0105618198,
            "unit": "iter/sec",
            "range": "stddev: 1.1870246143901522e-7",
            "extra": "mean: 985.150811414563 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 595649.4926623811,
            "unit": "iter/sec",
            "range": "stddev: 1.6431033012162202e-7",
            "extra": "mean: 1.6788396738664024 usec\nrounds: 84746"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 545859.3801540036,
            "unit": "iter/sec",
            "range": "stddev: 2.2717710879434032e-7",
            "extra": "mean: 1.8319736480810669 usec\nrounds: 104167"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2346407.922205003,
            "unit": "iter/sec",
            "range": "stddev: 2.0105298595895744e-8",
            "extra": "mean: 426.18335479398814 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1279374.8220179614,
            "unit": "iter/sec",
            "range": "stddev: 1.0533326983143342e-7",
            "extra": "mean: 781.6317648198651 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 598439.3626163471,
            "unit": "iter/sec",
            "range": "stddev: 1.700429649076539e-7",
            "extra": "mean: 1.6710130757910873 usec\nrounds: 107527"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 680157.2648418086,
            "unit": "iter/sec",
            "range": "stddev: 1.9635456836663637e-7",
            "extra": "mean: 1.4702482083060313 usec\nrounds: 131579"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2379492.260828028,
            "unit": "iter/sec",
            "range": "stddev: 1.6297671111238484e-8",
            "extra": "mean: 420.25772323912565 nsec\nrounds: 116266"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "2a9be90df51ee2a03ed7966188d539dbb2242ef6",
          "message": "Update dependency mypy to ^0.950",
          "timestamp": "2022-04-27T20:04:59Z",
          "tree_id": "7d020c4123a8cb8674e6c05c78452d21523e18a7",
          "url": "https://github.com/tomwillis608/asciize/commit/2a9be90df51ee2a03ed7966188d539dbb2242ef6"
        },
        "date": 1651089958254,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 977557.6153320593,
            "unit": "iter/sec",
            "range": "stddev: 1.2815257686021018e-7",
            "extra": "mean: 1.0229576081408944 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 562176.7475798819,
            "unit": "iter/sec",
            "range": "stddev: 2.0184787219146217e-7",
            "extra": "mean: 1.778800002499047 usec\nrounds: 80001"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 493924.3258662549,
            "unit": "iter/sec",
            "range": "stddev: 1.861634817360149e-7",
            "extra": "mean: 2.0246016396260273 usec\nrounds: 109903"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2243793.3100011586,
            "unit": "iter/sec",
            "range": "stddev: 1.8081184419188927e-8",
            "extra": "mean: 445.6738486309083 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1644260.3617112255,
            "unit": "iter/sec",
            "range": "stddev: 2.0754370015535726e-8",
            "extra": "mean: 608.1761886900007 nsec\nrounds: 81308"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 587861.41569273,
            "unit": "iter/sec",
            "range": "stddev: 1.560937591549976e-7",
            "extra": "mean: 1.701081195848872 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 663537.9847350412,
            "unit": "iter/sec",
            "range": "stddev: 1.6408621221672032e-7",
            "extra": "mean: 1.507072726815048 usec\nrounds: 158731"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2226849.4204883976,
            "unit": "iter/sec",
            "range": "stddev: 2.953470675605904e-8",
            "extra": "mean: 449.0649393711979 nsec\nrounds: 108696"
          }
        ]
      }
    ]
  }
}