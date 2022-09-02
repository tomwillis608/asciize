window.BENCHMARK_DATA = {
  "lastUpdate": 1662084409223,
  "repoUrl": "https://github.com/sett-and-hive/asciize",
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
          "id": "02e6bf233db8fa4327f729f0053377038187a4ed",
          "message": "Merge pull request #81 from tomwillis608/renovate/github-codeql-action-2.x\n\nUpdate github/codeql-action action to v2",
          "timestamp": "2022-04-28T23:13:25-05:00",
          "tree_id": "4ab2bc320ad6d43a85dcadb116e9d2a7c41ab742",
          "url": "https://github.com/tomwillis608/asciize/commit/02e6bf233db8fa4327f729f0053377038187a4ed"
        },
        "date": 1651205659142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1040719.3231539768,
            "unit": "iter/sec",
            "range": "stddev: 1.1684350566008272e-7",
            "extra": "mean: 960.8738665190017 nsec\nrounds: 59881"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 600777.6222115856,
            "unit": "iter/sec",
            "range": "stddev: 1.8098636708609466e-7",
            "extra": "mean: 1.6645094008641583 usec\nrounds: 71429"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 545449.8611790355,
            "unit": "iter/sec",
            "range": "stddev: 1.6863766952197198e-7",
            "extra": "mean: 1.8333490778390087 usec\nrounds: 94340"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2375391.764089874,
            "unit": "iter/sec",
            "range": "stddev: 1.634160109752486e-8",
            "extra": "mean: 420.98318901209024 nsec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1353048.8314145901,
            "unit": "iter/sec",
            "range": "stddev: 1.1398213533742201e-7",
            "extra": "mean: 739.0716260805729 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 610918.9221502856,
            "unit": "iter/sec",
            "range": "stddev: 1.5525868325963192e-7",
            "extra": "mean: 1.6368784199386786 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 691654.7629770559,
            "unit": "iter/sec",
            "range": "stddev: 1.879147305204992e-7",
            "extra": "mean: 1.4458080151082149 usec\nrounds: 123442"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2378617.4158294066,
            "unit": "iter/sec",
            "range": "stddev: 1.8955327539243718e-8",
            "extra": "mean: 420.41229217664574 nsec\nrounds: 114943"
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
          "id": "838f792bca3b09ddb8769a9fa5c612191a3d4095",
          "message": "Merge pull request #83 from tomwillis608/pre-commit-ci-update-config\n\n[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2022-05-17T11:38:44-05:00",
          "tree_id": "a74d5426ffbcd8c8cc2ee60ea22df4ee96184d7c",
          "url": "https://github.com/tomwillis608/asciize/commit/838f792bca3b09ddb8769a9fa5c612191a3d4095"
        },
        "date": 1652805578858,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 981422.4380313734,
            "unit": "iter/sec",
            "range": "stddev: 1.220804748749957e-7",
            "extra": "mean: 1.0189292207399407 usec\nrounds: 81295"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 631453.5539864048,
            "unit": "iter/sec",
            "range": "stddev: 2.5262851815303755e-7",
            "extra": "mean: 1.5836477499998836 usec\nrounds: 80000"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 556862.9725610613,
            "unit": "iter/sec",
            "range": "stddev: 2.431833593493519e-7",
            "extra": "mean: 1.795773914363372 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2385103.0633871974,
            "unit": "iter/sec",
            "range": "stddev: 1.750159722137929e-8",
            "extra": "mean: 419.26909379753465 nsec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1800624.687929678,
            "unit": "iter/sec",
            "range": "stddev: 2.0983570082705164e-8",
            "extra": "mean: 555.3628175288461 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 627229.4387315974,
            "unit": "iter/sec",
            "range": "stddev: 6.132838083190324e-7",
            "extra": "mean: 1.5943129232298643 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 703647.2296682702,
            "unit": "iter/sec",
            "range": "stddev: 2.186383674711396e-7",
            "extra": "mean: 1.4211666838672032 usec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2406461.662474733,
            "unit": "iter/sec",
            "range": "stddev: 1.774838288459752e-8",
            "extra": "mean: 415.54786248731546 nsec\nrounds: 116280"
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
          "id": "adfd3782d6bd1c7927afb35daf6df73ceaf80ffd",
          "message": "Merge pull request #86 from sett-and-hive/tom-codecov-action-fix\n\nMatch ssacc codecov action settings",
          "timestamp": "2022-05-24T20:58:07-05:00",
          "tree_id": "083ef1e868a851e788c7ac2c3a876b265d2c6069",
          "url": "https://github.com/sett-and-hive/asciize/commit/adfd3782d6bd1c7927afb35daf6df73ceaf80ffd"
        },
        "date": 1653443940638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1038584.9280497379,
            "unit": "iter/sec",
            "range": "stddev: 5.532951891391012e-7",
            "extra": "mean: 962.8485576791559 nsec\nrounds: 42016"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 634830.6965112464,
            "unit": "iter/sec",
            "range": "stddev: 7.140910321554053e-7",
            "extra": "mean: 1.575223135074541 usec\nrounds: 82645"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 559925.8810304228,
            "unit": "iter/sec",
            "range": "stddev: 6.422732731215164e-7",
            "extra": "mean: 1.785950665755467 usec\nrounds: 104167"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2338284.704428354,
            "unit": "iter/sec",
            "range": "stddev: 8.69648263794997e-8",
            "extra": "mean: 427.66391881447527 nsec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1679133.4720411906,
            "unit": "iter/sec",
            "range": "stddev: 1.0815186765999528e-7",
            "extra": "mean: 595.5452718028836 nsec\nrounds: 106383"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 603702.0488985301,
            "unit": "iter/sec",
            "range": "stddev: 6.543780021253107e-7",
            "extra": "mean: 1.6564462582569097 usec\nrounds: 94340"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 719708.450030772,
            "unit": "iter/sec",
            "range": "stddev: 6.308912316157108e-7",
            "extra": "mean: 1.3894515202054993 usec\nrounds: 133334"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2506604.8719693245,
            "unit": "iter/sec",
            "range": "stddev: 8.807533697988107e-8",
            "extra": "mean: 398.94600508570034 nsec\nrounds: 123457"
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
          "id": "31e6b781b12055c268ad5ab5fa36ccb92de5808e",
          "message": "Merge pull request #84 from sett-and-hive/renovate/nox-poetry-1.x\n\nUpdate dependency nox-poetry to v1",
          "timestamp": "2022-05-25T12:00:03-05:00",
          "tree_id": "8dcca70164484fbe2133be2028ca65935e263c21",
          "url": "https://github.com/sett-and-hive/asciize/commit/31e6b781b12055c268ad5ab5fa36ccb92de5808e"
        },
        "date": 1653498055535,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 997562.0098215833,
            "unit": "iter/sec",
            "range": "stddev: 9.733688456337336e-8",
            "extra": "mean: 1.0024439485008583 usec\nrounds: 69445"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 585236.0749978813,
            "unit": "iter/sec",
            "range": "stddev: 1.633911469876619e-7",
            "extra": "mean: 1.7087121637257583 usec\nrounds: 87720"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 539531.2771377993,
            "unit": "iter/sec",
            "range": "stddev: 2.1470499151518678e-7",
            "extra": "mean: 1.8534606655335655 usec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2348273.097487392,
            "unit": "iter/sec",
            "range": "stddev: 1.5980131201862632e-8",
            "extra": "mean: 425.84484788819145 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1301657.2143116551,
            "unit": "iter/sec",
            "range": "stddev: 1.2851809397955965e-7",
            "extra": "mean: 768.2514175045861 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 631550.5494055963,
            "unit": "iter/sec",
            "range": "stddev: 1.4399129788988694e-7",
            "extra": "mean: 1.5834045286496568 usec\nrounds: 83334"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 688506.9628171029,
            "unit": "iter/sec",
            "range": "stddev: 1.447747076292496e-7",
            "extra": "mean: 1.4524181366422042 usec\nrounds: 126583"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2301182.599769054,
            "unit": "iter/sec",
            "range": "stddev: 2.0732926000858115e-8",
            "extra": "mean: 434.55916975060006 nsec\nrounds: 111099"
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
          "id": "e4de29ef85621f5c3458abd4983520061da9e0e1",
          "message": "Update dependency mypy to ^0.960",
          "timestamp": "2022-05-25T19:46:31Z",
          "tree_id": "34df3b35435235ae72425036606df9f1538ce55c",
          "url": "https://github.com/sett-and-hive/asciize/commit/e4de29ef85621f5c3458abd4983520061da9e0e1"
        },
        "date": 1653508050288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 861021.850662595,
            "unit": "iter/sec",
            "range": "stddev: 4.344223965295411e-7",
            "extra": "mean: 1.161410711273419 usec\nrounds: 65781"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 521948.1636356422,
            "unit": "iter/sec",
            "range": "stddev: 5.887670705029073e-7",
            "extra": "mean: 1.9158990675136711 usec\nrounds: 71424"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 469276.37820755754,
            "unit": "iter/sec",
            "range": "stddev: 6.940014521635128e-7",
            "extra": "mean: 2.1309404147287108 usec\nrounds: 99001"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2027686.1688673329,
            "unit": "iter/sec",
            "range": "stddev: 7.444771639273026e-8",
            "extra": "mean: 493.1729650050681 nsec\nrounds: 35086"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1142476.5109479986,
            "unit": "iter/sec",
            "range": "stddev: 3.7919576556930693e-7",
            "extra": "mean: 875.2915183964919 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 543279.1818408158,
            "unit": "iter/sec",
            "range": "stddev: 6.153692016810098e-7",
            "extra": "mean: 1.8406742489407706 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 609326.15060529,
            "unit": "iter/sec",
            "range": "stddev: 5.567277769159763e-7",
            "extra": "mean: 1.6411572012896933 usec\nrounds: 126583"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2058772.2550693713,
            "unit": "iter/sec",
            "range": "stddev: 7.641226483728566e-8",
            "extra": "mean: 485.72638257463205 nsec\nrounds: 37593"
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
          "id": "bb92263555acc2758ecb3a83be14a3e74feecb0c",
          "message": "Merge pull request #85 from sett-and-hive/renovate/actions-checkout-3.x\n\nUpdate actions/checkout action to v3",
          "timestamp": "2022-05-26T16:24:16-05:00",
          "tree_id": "169410bc261a85faeace3c41e7000a997584b3bb",
          "url": "https://github.com/sett-and-hive/asciize/commit/bb92263555acc2758ecb3a83be14a3e74feecb0c"
        },
        "date": 1653600313426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 895181.125885625,
            "unit": "iter/sec",
            "range": "stddev: 0.000002271589799805421",
            "extra": "mean: 1.1170923638617547 usec\nrounds: 56494"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 605776.5650478641,
            "unit": "iter/sec",
            "range": "stddev: 0.000002260253395800584",
            "extra": "mean: 1.6507736642486117 usec\nrounds: 88488"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 539658.5804746642,
            "unit": "iter/sec",
            "range": "stddev: 0.000002623143834258082",
            "extra": "mean: 1.8530234414515119 usec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2098357.2547779293,
            "unit": "iter/sec",
            "range": "stddev: 6.685966691523822e-7",
            "extra": "mean: 476.5632723993008 nsec\nrounds: 125000"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1126186.0702542257,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039289093609428636",
            "extra": "mean: 887.9527339334428 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 631787.7853036175,
            "unit": "iter/sec",
            "range": "stddev: 0.000006292417699318302",
            "extra": "mean: 1.582809961290137 usec\nrounds: 101011"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 744531.6034460599,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024527066569159038",
            "extra": "mean: 1.343126329858271 usec\nrounds: 151516"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2172798.171375337,
            "unit": "iter/sec",
            "range": "stddev: 8.38601054248312e-7",
            "extra": "mean: 460.2360279817222 nsec\nrounds: 92585"
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
          "id": "4c70b5d947b80b4ee713be0675569f0113ca52b7",
          "message": "Update dependency pep8-naming to ^0.13.0",
          "timestamp": "2022-06-02T18:56:37Z",
          "tree_id": "8a02ad6dae06f01ff05cc6f5705ec3335d895662",
          "url": "https://github.com/sett-and-hive/asciize/commit/4c70b5d947b80b4ee713be0675569f0113ca52b7"
        },
        "date": 1654196248146,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1103689.622986798,
            "unit": "iter/sec",
            "range": "stddev: 2.8649989964818533e-7",
            "extra": "mean: 906.0518275906284 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 664129.7211636074,
            "unit": "iter/sec",
            "range": "stddev: 4.849685380371414e-7",
            "extra": "mean: 1.5057299321703619 usec\nrounds: 93458"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 599556.3212168053,
            "unit": "iter/sec",
            "range": "stddev: 5.177575569705036e-7",
            "extra": "mean: 1.6679000197520901 usec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2680227.19136592,
            "unit": "iter/sec",
            "range": "stddev: 4.5557937615171555e-8",
            "extra": "mean: 373.10269936135035 nsec\nrounds: 126567"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1995292.7738361075,
            "unit": "iter/sec",
            "range": "stddev: 5.000899904333002e-8",
            "extra": "mean: 501.1795828223253 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 695890.5793182547,
            "unit": "iter/sec",
            "range": "stddev: 4.349359327191528e-7",
            "extra": "mean: 1.4370075263551825 usec\nrounds: 104167"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 769621.9716390796,
            "unit": "iter/sec",
            "range": "stddev: 4.988597287863305e-7",
            "extra": "mean: 1.299339203986445 usec\nrounds: 142858"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2703311.391306864,
            "unit": "iter/sec",
            "range": "stddev: 4.7064517268902745e-8",
            "extra": "mean: 369.91668929320724 nsec\nrounds: 133334"
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
          "id": "ff42fe92a2557195257bae4f6b8764a83a1f618e",
          "message": "Update dependency mypy to ^0.961",
          "timestamp": "2022-06-06T23:10:27Z",
          "tree_id": "ea77ad717ff59fb6bfde2f1e0dcd23a21cdecf5b",
          "url": "https://github.com/sett-and-hive/asciize/commit/ff42fe92a2557195257bae4f6b8764a83a1f618e"
        },
        "date": 1654557080561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 970355.9680641787,
            "unit": "iter/sec",
            "range": "stddev: 3.5453313618120383e-7",
            "extra": "mean: 1.0305496466363369 usec\nrounds: 87720"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 571787.7680616564,
            "unit": "iter/sec",
            "range": "stddev: 0.000004751396851448748",
            "extra": "mean: 1.748900651355258 usec\nrounds: 70922"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 521184.0716740073,
            "unit": "iter/sec",
            "range": "stddev: 4.263150794185219e-7",
            "extra": "mean: 1.9187079082982508 usec\nrounds: 117648"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2254056.551579293,
            "unit": "iter/sec",
            "range": "stddev: 1.6887666308346818e-8",
            "extra": "mean: 443.6445923679599 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1260119.4422894795,
            "unit": "iter/sec",
            "range": "stddev: 9.656451829569963e-8",
            "extra": "mean: 793.5755662837208 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 594193.4506320425,
            "unit": "iter/sec",
            "range": "stddev: 1.4759821616953667e-7",
            "extra": "mean: 1.682953588492606 usec\nrounds: 97088"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 684799.7185761237,
            "unit": "iter/sec",
            "range": "stddev: 1.4638091838344947e-7",
            "extra": "mean: 1.4602809739455787 usec\nrounds: 153847"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2253729.6309915283,
            "unit": "iter/sec",
            "range": "stddev: 1.7357569815190653e-8",
            "extra": "mean: 443.7089463831498 nsec\nrounds: 111112"
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
          "id": "4a05782e03ace8e608f3986da0ae2ab57952355e",
          "message": "Merge pull request #92 from sett-and-hive/renovate/actions-setup-python-4.x\n\nUpdate actions/setup-python action to v4",
          "timestamp": "2022-06-08T21:26:16-05:00",
          "tree_id": "e249d63483a3b109634fdc062f2589937c0bd655",
          "url": "https://github.com/sett-and-hive/asciize/commit/4a05782e03ace8e608f3986da0ae2ab57952355e"
        },
        "date": 1654741629076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 979155.3146747488,
            "unit": "iter/sec",
            "range": "stddev: 1.48824526493432e-7",
            "extra": "mean: 1.021288436076329 usec\nrounds: 69440"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 579128.3101501322,
            "unit": "iter/sec",
            "range": "stddev: 1.698853890592789e-7",
            "extra": "mean: 1.7267330615226903 usec\nrounds: 78741"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 541173.6607053139,
            "unit": "iter/sec",
            "range": "stddev: 1.709390970608892e-7",
            "extra": "mean: 1.8478356812426826 usec\nrounds: 101011"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2387565.254903299,
            "unit": "iter/sec",
            "range": "stddev: 1.8451522049075344e-8",
            "extra": "mean: 418.8367199373968 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1764167.395137142,
            "unit": "iter/sec",
            "range": "stddev: 2.666103766776373e-8",
            "extra": "mean: 566.8396336745978 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 632483.889766034,
            "unit": "iter/sec",
            "range": "stddev: 1.6080037910767206e-7",
            "extra": "mean: 1.5810679389318774 usec\nrounds: 104167"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 699209.7997745181,
            "unit": "iter/sec",
            "range": "stddev: 1.6336908957543648e-7",
            "extra": "mean: 1.430185904606144 usec\nrounds: 149254"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2392418.960074239,
            "unit": "iter/sec",
            "range": "stddev: 1.6164202469574135e-8",
            "extra": "mean: 417.9869900251267 nsec\nrounds: 116280"
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
          "id": "57aa1c0370009eaf9b65eee5d92e6dafe6dbe621",
          "message": "Merge pull request #93 from sett-and-hive/tom-ossf-scorecards\n\nCreate scorecards.yaml",
          "timestamp": "2022-06-08T22:05:31-05:00",
          "tree_id": "69492304268d9c536eb7cdae71e9c96da7a5b251",
          "url": "https://github.com/sett-and-hive/asciize/commit/57aa1c0370009eaf9b65eee5d92e6dafe6dbe621"
        },
        "date": 1654743986649,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 818844.686316627,
            "unit": "iter/sec",
            "range": "stddev: 3.826427628343816e-7",
            "extra": "mean: 1.2212328133901142 usec\nrounds: 74622"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 499023.2732222497,
            "unit": "iter/sec",
            "range": "stddev: 5.919002315629357e-7",
            "extra": "mean: 2.0039145540104513 usec\nrounds: 70922"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 459446.78845617344,
            "unit": "iter/sec",
            "range": "stddev: 5.59441232675043e-7",
            "extra": "mean: 2.17653061274013 usec\nrounds: 94340"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2005529.32407543,
            "unit": "iter/sec",
            "range": "stddev: 6.210054427361295e-8",
            "extra": "mean: 498.621480122668 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1068711.1001800986,
            "unit": "iter/sec",
            "range": "stddev: 3.981580112642753e-7",
            "extra": "mean: 935.7065719926374 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 522896.47530386,
            "unit": "iter/sec",
            "range": "stddev: 4.6191794693219757e-7",
            "extra": "mean: 1.9124244419870886 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 578275.4461034226,
            "unit": "iter/sec",
            "range": "stddev: 4.3467567573812813e-7",
            "extra": "mean: 1.7292797173704542 usec\nrounds: 120468"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2003348.3151453785,
            "unit": "iter/sec",
            "range": "stddev: 5.737249924772729e-8",
            "extra": "mean: 499.164320273161 nsec\nrounds: 99010"
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
          "id": "2a0defa6e3e908edd555396789c1f2fc73cf88dc",
          "message": "Merge pull request #97 from sett-and-hive/issue/96-token-permissions-and-pinning\n\nrestrict permissions, harden actions",
          "timestamp": "2022-06-09T00:11:23-05:00",
          "tree_id": "83da520a9a859d01d612118a00b95290032ccd03",
          "url": "https://github.com/sett-and-hive/asciize/commit/2a0defa6e3e908edd555396789c1f2fc73cf88dc"
        },
        "date": 1654751553260,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 833291.9554293042,
            "unit": "iter/sec",
            "range": "stddev: 2.3088561851155577e-7",
            "extra": "mean: 1.200059587140511 usec\nrounds: 65786"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 482234.0597546644,
            "unit": "iter/sec",
            "range": "stddev: 2.028585994329141e-7",
            "extra": "mean: 2.073681814405121 usec\nrounds: 72464"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 448680.5796193155,
            "unit": "iter/sec",
            "range": "stddev: 4.4553431906236306e-7",
            "extra": "mean: 2.2287570388013074 usec\nrounds: 84034"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2005133.3404104996,
            "unit": "iter/sec",
            "range": "stddev: 4.872792680866766e-8",
            "extra": "mean: 498.71995036233585 nsec\nrounds: 104156"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1462142.9434487738,
            "unit": "iter/sec",
            "range": "stddev: 2.4810489281272638e-8",
            "extra": "mean: 683.9276587015021 nsec\nrounds: 71943"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 506879.2206030496,
            "unit": "iter/sec",
            "range": "stddev: 2.6689925298707717e-7",
            "extra": "mean: 1.9728565688888757 usec\nrounds: 94331"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 564653.6465925731,
            "unit": "iter/sec",
            "range": "stddev: 2.1778843726440143e-7",
            "extra": "mean: 1.7709971520321233 usec\nrounds: 125000"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1985982.4699661934,
            "unit": "iter/sec",
            "range": "stddev: 2.778140176871856e-8",
            "extra": "mean: 503.5291172620808 nsec\nrounds: 99010"
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
          "id": "cded8316670aa02f73b34007bbec662ac40bacf3",
          "message": "Merge pull request #89 from sett-and-hive/renovate/sphinx-click-4.x\n\nUpdate dependency sphinx-click to v4.1.0",
          "timestamp": "2022-06-09T08:15:02-05:00",
          "tree_id": "3feb032fec9427c0c4a81a01f4346cbd8b4b9569",
          "url": "https://github.com/sett-and-hive/asciize/commit/cded8316670aa02f73b34007bbec662ac40bacf3"
        },
        "date": 1654780579954,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 736669.0489943764,
            "unit": "iter/sec",
            "range": "stddev: 0.00003066653310822477",
            "extra": "mean: 1.35746167341372 usec\nrounds: 60976"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 460784.24834549334,
            "unit": "iter/sec",
            "range": "stddev: 0.000011298148157512215",
            "extra": "mean: 2.170213073885733 usec\nrounds: 66667"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 409847.46789734275,
            "unit": "iter/sec",
            "range": "stddev: 0.000022172154719780818",
            "extra": "mean: 2.439932117014998 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1787254.8606807406,
            "unit": "iter/sec",
            "range": "stddev: 7.935102340229151e-7",
            "extra": "mean: 559.5172921329967 nsec\nrounds: 93450"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 986358.4194533342,
            "unit": "iter/sec",
            "range": "stddev: 0.00002137827514567151",
            "extra": "mean: 1.0138302469747522 usec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 478892.0130787611,
            "unit": "iter/sec",
            "range": "stddev: 0.000009386732938490019",
            "extra": "mean: 2.088153430605523 usec\nrounds: 88496"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 560021.4325334734,
            "unit": "iter/sec",
            "range": "stddev: 0.000006081797436577922",
            "extra": "mean: 1.7856459447919941 usec\nrounds: 128206"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1757313.2212235513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017851485723511844",
            "extra": "mean: 569.0505186682838 nsec\nrounds: 88496"
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
          "id": "2ccd387fc418f8c930ca03b596f15ca6f6c8d1d4",
          "message": "Merge pull request #102 from sett-and-hive/tom-renovate-tweak\n\nenhance renovate rules",
          "timestamp": "2022-06-09T08:28:44-05:00",
          "tree_id": "703a8bd9723d349383ecb7e1764e058cadf817e5",
          "url": "https://github.com/sett-and-hive/asciize/commit/2ccd387fc418f8c930ca03b596f15ca6f6c8d1d4"
        },
        "date": 1654781395098,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 937546.3767993354,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015737791592446957",
            "extra": "mean: 1.066613902785133 usec\nrounds: 79366"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 562141.2430860641,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013663012716674848",
            "extra": "mean: 1.7789123504088804 usec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 493032.05644983705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057792447441774426",
            "extra": "mean: 2.0282656815475115 usec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2101071.6299574217,
            "unit": "iter/sec",
            "range": "stddev: 2.1104460505705346e-7",
            "extra": "mean: 475.9476001393522 nsec\nrounds: 107527"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1542226.255125944,
            "unit": "iter/sec",
            "range": "stddev: 3.80838530821367e-7",
            "extra": "mean: 648.4132899932505 nsec\nrounds: 80000"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 533044.2573564394,
            "unit": "iter/sec",
            "range": "stddev: 0.000003985540906839927",
            "extra": "mean: 1.8760168338729777 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 609467.041392896,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021477175717852496",
            "extra": "mean: 1.6407778141941314 usec\nrounds: 121952"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2084666.4537882095,
            "unit": "iter/sec",
            "range": "stddev: 3.106254898922111e-7",
            "extra": "mean: 479.69304546633487 nsec\nrounds: 107527"
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
          "id": "728a20be3ee29f28e9f823d55b4a65de471095e3",
          "message": "Update actions/checkout digest to 2541b12",
          "timestamp": "2022-06-09T17:14:19Z",
          "tree_id": "759e383bd1a009e7c5755b00a6e98b677c04df4a",
          "url": "https://github.com/sett-and-hive/asciize/commit/728a20be3ee29f28e9f823d55b4a65de471095e3"
        },
        "date": 1654795038287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 755331.8894481864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043112116201841565",
            "extra": "mean: 1.3239213304373496 usec\nrounds: 68489"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 441973.06012370635,
            "unit": "iter/sec",
            "range": "stddev: 0.000006876514939541628",
            "extra": "mean: 2.2625813431255386 usec\nrounds: 69926"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 412924.18399042747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061719281801173576",
            "extra": "mean: 2.4217520764615283 usec\nrounds: 92585"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1792197.8178371387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014452070447951794",
            "extra": "mean: 557.9741198475241 nsec\nrounds: 93450"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1350399.294843007,
            "unit": "iter/sec",
            "range": "stddev: 0.000001443584500486925",
            "extra": "mean: 740.5217137027221 nsec\nrounds: 68489"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 488108.4483178788,
            "unit": "iter/sec",
            "range": "stddev: 0.000002485268111381793",
            "extra": "mean: 2.0487250393764005 usec\nrounds: 90082"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 532802.5513978626,
            "unit": "iter/sec",
            "range": "stddev: 0.000005487479408328152",
            "extra": "mean: 1.8768678891953434 usec\nrounds: 116266"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1755285.7996412814,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015661449284883031",
            "extra": "mean: 569.7077935709897 nsec\nrounds: 88496"
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
          "id": "1272d96805d5b388863fddf8f30f81509a7aad41",
          "message": "Update actions/upload-artifact digest to 6673cd0",
          "timestamp": "2022-06-09T22:08:38Z",
          "tree_id": "00e6d12696a7c86ff5cfa298eb9a7f8d54ebc96c",
          "url": "https://github.com/sett-and-hive/asciize/commit/1272d96805d5b388863fddf8f30f81509a7aad41"
        },
        "date": 1654812602009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 959046.1090074293,
            "unit": "iter/sec",
            "range": "stddev: 2.0452353515914007e-7",
            "extra": "mean: 1.0427027341104131 usec\nrounds: 67115"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 568884.7366969594,
            "unit": "iter/sec",
            "range": "stddev: 2.989067531566069e-7",
            "extra": "mean: 1.757825329971355 usec\nrounds: 60245"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 506915.92098972725,
            "unit": "iter/sec",
            "range": "stddev: 2.4359843899567715e-7",
            "extra": "mean: 1.9727137353420494 usec\nrounds: 86965"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2205091.5803457,
            "unit": "iter/sec",
            "range": "stddev: 2.320641734525196e-8",
            "extra": "mean: 453.49590416680866 nsec\nrounds: 108708"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1251365.1740813456,
            "unit": "iter/sec",
            "range": "stddev: 1.1085472996520734e-7",
            "extra": "mean: 799.12724176148 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 583114.0021878697,
            "unit": "iter/sec",
            "range": "stddev: 3.872688662651505e-7",
            "extra": "mean: 1.7149305217298083 usec\nrounds: 84746"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 652548.2266953815,
            "unit": "iter/sec",
            "range": "stddev: 2.1189912492500274e-7",
            "extra": "mean: 1.532453785161865 usec\nrounds: 133334"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2224035.0390622416,
            "unit": "iter/sec",
            "range": "stddev: 2.2248077226012454e-8",
            "extra": "mean: 449.6332038103459 nsec\nrounds: 109891"
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
          "id": "3bcefb0c6c4994e5290dbafeb6a7376d242ceebc",
          "message": "Update github/codeql-action digest to 27ea8f8",
          "timestamp": "2022-06-10T02:41:56Z",
          "tree_id": "ed4dce19e69ab583b720d4c232380341d33e9112",
          "url": "https://github.com/sett-and-hive/asciize/commit/3bcefb0c6c4994e5290dbafeb6a7376d242ceebc"
        },
        "date": 1654828977061,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 971048.9184344992,
            "unit": "iter/sec",
            "range": "stddev: 9.220281796926961e-8",
            "extra": "mean: 1.0298142359420728 usec\nrounds: 75752"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 595189.5580911236,
            "unit": "iter/sec",
            "range": "stddev: 1.5243200144972034e-7",
            "extra": "mean: 1.6801370024151194 usec\nrounds: 68028"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 530770.811548534,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011484087081599161",
            "extra": "mean: 1.8840523597793197 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2366623.0871917713,
            "unit": "iter/sec",
            "range": "stddev: 1.3233156195199585e-8",
            "extra": "mean: 422.5429919165475 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1269812.597620225,
            "unit": "iter/sec",
            "range": "stddev: 4.569616836146263e-7",
            "extra": "mean: 787.517781658581 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 606364.6482041607,
            "unit": "iter/sec",
            "range": "stddev: 1.5983144722498064e-7",
            "extra": "mean: 1.649172660315289 usec\nrounds: 95239"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 696366.8123445098,
            "unit": "iter/sec",
            "range": "stddev: 1.3885858858476322e-7",
            "extra": "mean: 1.436024782159313 usec\nrounds: 126583"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2404833.7325586197,
            "unit": "iter/sec",
            "range": "stddev: 1.2899289176875504e-8",
            "extra": "mean: 415.82916376328296 nsec\nrounds: 117634"
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
          "id": "b0fd1607287e13718805c2ffdb8d80b45b9006d3",
          "message": "Update ossf/scorecard-action digest to c1aec4a",
          "timestamp": "2022-06-10T06:12:53Z",
          "tree_id": "d22d6f49978f7b12376317b437a409936a6b4434",
          "url": "https://github.com/sett-and-hive/asciize/commit/b0fd1607287e13718805c2ffdb8d80b45b9006d3"
        },
        "date": 1654841630335,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1115715.6690560507,
            "unit": "iter/sec",
            "range": "stddev: 1.2236230102605751e-7",
            "extra": "mean: 896.2857005011396 nsec\nrounds: 72464"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 660363.0391885664,
            "unit": "iter/sec",
            "range": "stddev: 1.4961643386947283e-7",
            "extra": "mean: 1.5143185500338858 usec\nrounds: 77520"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 613195.0242107372,
            "unit": "iter/sec",
            "range": "stddev: 1.3058682845514742e-7",
            "extra": "mean: 1.630802535110476 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2712709.3735941052,
            "unit": "iter/sec",
            "range": "stddev: 3.488221072343974e-8",
            "extra": "mean: 368.63514010538285 nsec\nrounds: 131579"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1989068.1949090916,
            "unit": "iter/sec",
            "range": "stddev: 2.0119663076630316e-8",
            "extra": "mean: 502.74797141658047 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 702412.2785005119,
            "unit": "iter/sec",
            "range": "stddev: 2.1510279912215502e-7",
            "extra": "mean: 1.4236653182298709 usec\nrounds: 103083"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 770799.4193164645,
            "unit": "iter/sec",
            "range": "stddev: 2.454169323655757e-7",
            "extra": "mean: 1.2973543764301065 usec\nrounds: 135136"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2719319.0804250403,
            "unit": "iter/sec",
            "range": "stddev: 1.7932289916638972e-8",
            "extra": "mean: 367.7391179276367 nsec\nrounds: 133334"
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
          "id": "811b16bbdf813589a42d3d2fa6f82725b75ca640",
          "message": "Update actions/checkout action to v3.0.2",
          "timestamp": "2022-06-10T14:06:07Z",
          "tree_id": "c38fd04138edff4e7abbfc0905029a10e49f58e6",
          "url": "https://github.com/sett-and-hive/asciize/commit/811b16bbdf813589a42d3d2fa6f82725b75ca640"
        },
        "date": 1654870026331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 917706.7436162807,
            "unit": "iter/sec",
            "range": "stddev: 1.0849748011160693e-7",
            "extra": "mean: 1.0896727162093607 usec\nrounds: 65790"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 584938.9618900298,
            "unit": "iter/sec",
            "range": "stddev: 1.7621638305826735e-7",
            "extra": "mean: 1.709580084678994 usec\nrounds: 68028"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 531559.2879954305,
            "unit": "iter/sec",
            "range": "stddev: 1.777372210124961e-7",
            "extra": "mean: 1.8812576933254457 usec\nrounds: 84034"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2385631.5112746097,
            "unit": "iter/sec",
            "range": "stddev: 2.0690582091721326e-8",
            "extra": "mean: 419.17622033166424 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1777436.5266779081,
            "unit": "iter/sec",
            "range": "stddev: 3.4155114946937294e-8",
            "extra": "mean: 562.6079947105869 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 621836.9484002881,
            "unit": "iter/sec",
            "range": "stddev: 1.549321463188148e-7",
            "extra": "mean: 1.6081386005970835 usec\nrounds: 96154"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 677358.7804123171,
            "unit": "iter/sec",
            "range": "stddev: 1.6389293750980582e-7",
            "extra": "mean: 1.476322488048781 usec\nrounds: 142858"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2397389.532805092,
            "unit": "iter/sec",
            "range": "stddev: 2.4592743507113283e-8",
            "extra": "mean: 417.12036626329007 nsec\nrounds: 117648"
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
          "id": "10fd7e63dcac97cb04ea441f30d175e09dbe0d58",
          "message": "Update actions/upload-artifact action to v3.1.0",
          "timestamp": "2022-06-10T17:09:40Z",
          "tree_id": "5aff520df130dd0cb2505f64541f333e18dffb90",
          "url": "https://github.com/sett-and-hive/asciize/commit/10fd7e63dcac97cb04ea441f30d175e09dbe0d58"
        },
        "date": 1654881037037,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 919644.3825242531,
            "unit": "iter/sec",
            "range": "stddev: 2.1572660993638317e-7",
            "extra": "mean: 1.0873768371804604 usec\nrounds: 70423"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 584770.3977221783,
            "unit": "iter/sec",
            "range": "stddev: 6.114900031769861e-7",
            "extra": "mean: 1.7100728831268497 usec\nrounds: 78125"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 527582.2905808572,
            "unit": "iter/sec",
            "range": "stddev: 2.605823356978292e-7",
            "extra": "mean: 1.8954389065998039 usec\nrounds: 90910"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2372304.3939483343,
            "unit": "iter/sec",
            "range": "stddev: 5.242518723604331e-8",
            "extra": "mean: 421.53106597555654 nsec\nrounds: 117648"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1730176.075645185,
            "unit": "iter/sec",
            "range": "stddev: 2.5172096513086267e-8",
            "extra": "mean: 577.9758569523434 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 605044.9218077391,
            "unit": "iter/sec",
            "range": "stddev: 1.7467209645195068e-7",
            "extra": "mean: 1.6527698422990202 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 681076.4185459598,
            "unit": "iter/sec",
            "range": "stddev: 1.818809081884929e-7",
            "extra": "mean: 1.4682640196747891 usec\nrounds: 149254"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2386565.580755425,
            "unit": "iter/sec",
            "range": "stddev: 4.200624155082951e-8",
            "extra": "mean: 419.0121604298852 nsec\nrounds: 117648"
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
          "id": "8e1199908bf7f248d251eeb20ffc472b13bc1ae6",
          "message": "Update ossf/scorecard-action action to v1.1.1",
          "timestamp": "2022-06-10T20:23:31Z",
          "tree_id": "88568db3ebffdf8d13d9811f21ceda67ee45fb3b",
          "url": "https://github.com/sett-and-hive/asciize/commit/8e1199908bf7f248d251eeb20ffc472b13bc1ae6"
        },
        "date": 1654892673125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 970061.682799724,
            "unit": "iter/sec",
            "range": "stddev: 1.332710399683e-7",
            "extra": "mean: 1.0308622819879558 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 574717.6823163881,
            "unit": "iter/sec",
            "range": "stddev: 1.8933253851359891e-7",
            "extra": "mean: 1.739984745152646 usec\nrounds: 74075"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 523117.8914622172,
            "unit": "iter/sec",
            "range": "stddev: 1.7210303073800334e-7",
            "extra": "mean: 1.9116149845397254 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2250013.277374521,
            "unit": "iter/sec",
            "range": "stddev: 1.7950340981432996e-8",
            "extra": "mean: 444.4418217684818 nsec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1635229.6510025454,
            "unit": "iter/sec",
            "range": "stddev: 3.089030406463782e-8",
            "extra": "mean: 611.5348993254981 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 599288.1045193118,
            "unit": "iter/sec",
            "range": "stddev: 1.4201427497114265e-7",
            "extra": "mean: 1.6686465031741262 usec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 664353.3224742558,
            "unit": "iter/sec",
            "range": "stddev: 1.6847052027134068e-7",
            "extra": "mean: 1.5052231488444927 usec\nrounds: 172414"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2248226.3659787723,
            "unit": "iter/sec",
            "range": "stddev: 1.7248200026370946e-8",
            "extra": "mean: 444.79506829575854 nsec\nrounds: 109891"
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
          "id": "895c9c9162c21d477abc88ff03c478632a68c193",
          "message": "Update pre-commit hook asottile/pyupgrade to v2.34.0",
          "timestamp": "2022-06-10T23:42:42Z",
          "tree_id": "1498faa06220d6b843c72d47acf5d2051fa5b144",
          "url": "https://github.com/sett-and-hive/asciize/commit/895c9c9162c21d477abc88ff03c478632a68c193"
        },
        "date": 1654904626756,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 963989.8554915672,
            "unit": "iter/sec",
            "range": "stddev: 1.7837861865286862e-7",
            "extra": "mean: 1.03735531479226 usec\nrounds: 77520"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 580594.3281364264,
            "unit": "iter/sec",
            "range": "stddev: 2.203379963437122e-7",
            "extra": "mean: 1.722373009067741 usec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 517718.8736431671,
            "unit": "iter/sec",
            "range": "stddev: 2.226757281968388e-7",
            "extra": "mean: 1.931550211725989 usec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2238678.6387072997,
            "unit": "iter/sec",
            "range": "stddev: 2.421353712710619e-8",
            "extra": "mean: 446.6920721488821 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1278675.4884638253,
            "unit": "iter/sec",
            "range": "stddev: 1.5451812124094942e-7",
            "extra": "mean: 782.059255082288 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 595913.4946514842,
            "unit": "iter/sec",
            "range": "stddev: 1.970317493135339e-7",
            "extra": "mean: 1.678095913207743 usec\nrounds: 104167"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 665991.5885949433,
            "unit": "iter/sec",
            "range": "stddev: 2.593612138014343e-7",
            "extra": "mean: 1.5015204653105627 usec\nrounds: 144928"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2234344.3690488874,
            "unit": "iter/sec",
            "range": "stddev: 3.712183067467584e-8",
            "extra": "mean: 447.55858311378734 nsec\nrounds: 108696"
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
          "id": "ddb5c5cc4e001c9c7e96075cb15027026657d40b",
          "message": "Update pre-commit hook pre-commit/pre-commit-hooks to v4.3.0",
          "timestamp": "2022-06-11T03:02:30Z",
          "tree_id": "927cdcfbf78a066db6752c65c7d5147bc454e88e",
          "url": "https://github.com/sett-and-hive/asciize/commit/ddb5c5cc4e001c9c7e96075cb15027026657d40b"
        },
        "date": 1654916614871,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1001445.7734454311,
            "unit": "iter/sec",
            "range": "stddev: 1.0174879099469096e-7",
            "extra": "mean: 998.5563137977435 nsec\nrounds: 67115"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 605052.4980700273,
            "unit": "iter/sec",
            "range": "stddev: 1.7045810612489886e-7",
            "extra": "mean: 1.6527491468752888 usec\nrounds: 70922"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 531786.9228123499,
            "unit": "iter/sec",
            "range": "stddev: 1.621842577736549e-7",
            "extra": "mean: 1.880452408854866 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2385676.474450656,
            "unit": "iter/sec",
            "range": "stddev: 1.2508511638901085e-7",
            "extra": "mean: 419.16832005915745 nsec\nrounds: 116266"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1301973.8369387519,
            "unit": "iter/sec",
            "range": "stddev: 3.5901999149090103e-7",
            "extra": "mean: 768.0645890329381 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 638795.5751357079,
            "unit": "iter/sec",
            "range": "stddev: 2.8611628088652366e-7",
            "extra": "mean: 1.5654460345746082 usec\nrounds: 96154"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 698855.3093691226,
            "unit": "iter/sec",
            "range": "stddev: 1.632201432980968e-7",
            "extra": "mean: 1.4309113583221247 usec\nrounds: 111099"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2405902.0699194977,
            "unit": "iter/sec",
            "range": "stddev: 2.337945506683228e-8",
            "extra": "mean: 415.644515420518 nsec\nrounds: 117648"
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
          "id": "0a614116be54ac06fecd5ecfb94ed7b70611541a",
          "message": "Merge pull request #107 from sett-and-hive/tom-pin-mccabe-for-flake8\n\nTom pin mccabe for flake8",
          "timestamp": "2022-06-12T11:29:06-05:00",
          "tree_id": "431b4a2293f592c59518be7c28a976ec07c4b38f",
          "url": "https://github.com/sett-and-hive/asciize/commit/0a614116be54ac06fecd5ecfb94ed7b70611541a"
        },
        "date": 1655051421407,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 664704.1528296601,
            "unit": "iter/sec",
            "range": "stddev: 0.00000609089997950512",
            "extra": "mean: 1.5044286931907649 usec\nrounds: 75070"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 666201.2199142962,
            "unit": "iter/sec",
            "range": "stddev: 0.000002786354581557508",
            "extra": "mean: 1.5010479868659585 usec\nrounds: 70186"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 511803.99265579483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013060411439565026",
            "extra": "mean: 1.9538729950325595 usec\nrounds: 122444"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2530970.42399655,
            "unit": "iter/sec",
            "range": "stddev: 2.1899560479606055e-7",
            "extra": "mean: 395.10536769565584 nsec\nrounds: 69760"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 2280438.0150280604,
            "unit": "iter/sec",
            "range": "stddev: 3.2203209927694304e-8",
            "extra": "mean: 438.5122478269523 nsec\nrounds: 111583"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 836411.450689986,
            "unit": "iter/sec",
            "range": "stddev: 1.3964948098471477e-7",
            "extra": "mean: 1.1955838232189002 usec\nrounds: 123671"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 956880.385329044,
            "unit": "iter/sec",
            "range": "stddev: 1.276227479093193e-7",
            "extra": "mean: 1.0450627009729418 usec\nrounds: 189072"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 3140959.2012591367,
            "unit": "iter/sec",
            "range": "stddev: 4.0602970433782394e-8",
            "extra": "mean: 318.374081267636 nsec\nrounds: 156520"
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
          "id": "4ee07bf0bac4529238984ed7df7a187979ad7e58",
          "message": "Merge pull request #100 from sett-and-hive/renovate/step-security-harden-runner-digest\n\nUpdate step-security/harden-runner digest to 248ae51",
          "timestamp": "2022-06-12T11:49:20-05:00",
          "tree_id": "8ac8ba279d1e2b5774f7dbd4513ea0d506e7bf6d",
          "url": "https://github.com/sett-and-hive/asciize/commit/4ee07bf0bac4529238984ed7df7a187979ad7e58"
        },
        "date": 1655052626045,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 653333.0226417449,
            "unit": "iter/sec",
            "range": "stddev: 0.000004758949575076164",
            "extra": "mean: 1.5306129727784323 usec\nrounds: 64936"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 540877.4501554215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025984528563922837",
            "extra": "mean: 1.8488476450860527 usec\nrounds: 92593"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 494808.2870227562,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029283395297747303",
            "extra": "mean: 2.020984745459629 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2121431.7916526245,
            "unit": "iter/sec",
            "range": "stddev: 3.546961496830635e-7",
            "extra": "mean: 471.37975584929177 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1543846.413007517,
            "unit": "iter/sec",
            "range": "stddev: 5.440850231835881e-7",
            "extra": "mean: 647.7328259952251 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 577343.7440987949,
            "unit": "iter/sec",
            "range": "stddev: 0.000003570211580708135",
            "extra": "mean: 1.732070383062608 usec\nrounds: 103093"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 646437.3138340923,
            "unit": "iter/sec",
            "range": "stddev: 0.000007440777235876213",
            "extra": "mean: 1.5469404048922974 usec\nrounds: 144928"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1452330.7529176483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018297886759452076",
            "extra": "mean: 688.5483888508578 nsec\nrounds: 109891"
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
          "id": "f3b7bc921bd5ca57113f860df8f85f39d7c702cc",
          "message": "Merge pull request #109 from sett-and-hive/tom-troubleshoot-tests-action\n\ntroubleshoot tests action",
          "timestamp": "2022-06-12T16:07:36-05:00",
          "tree_id": "565986a81ebdd4422208729869d2ef16a62ffc58",
          "url": "https://github.com/sett-and-hive/asciize/commit/f3b7bc921bd5ca57113f860df8f85f39d7c702cc"
        },
        "date": 1655068121459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 985293.6428029417,
            "unit": "iter/sec",
            "range": "stddev: 1.479534539156111e-7",
            "extra": "mean: 1.014925862258912 usec\nrounds: 70423"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 583690.751345165,
            "unit": "iter/sec",
            "range": "stddev: 1.6045796262369335e-7",
            "extra": "mean: 1.71323598617147 usec\nrounds: 76924"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 532419.9803564323,
            "unit": "iter/sec",
            "range": "stddev: 1.6842403730127363e-7",
            "extra": "mean: 1.878216514959756 usec\nrounds: 97088"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2373145.9369254024,
            "unit": "iter/sec",
            "range": "stddev: 1.6749350499741947e-8",
            "extra": "mean: 421.3815865428984 nsec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1704950.014385101,
            "unit": "iter/sec",
            "range": "stddev: 1.9649038976286593e-8",
            "extra": "mean: 586.5274591996184 nsec\nrounds: 86949"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 619598.4273106292,
            "unit": "iter/sec",
            "range": "stddev: 1.4150475408211635e-7",
            "extra": "mean: 1.613948576887947 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 679122.8593496794,
            "unit": "iter/sec",
            "range": "stddev: 1.4838800504946017e-7",
            "extra": "mean: 1.4724876158013425 usec\nrounds: 131579"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2376893.7133378736,
            "unit": "iter/sec",
            "range": "stddev: 1.6152972996474474e-8",
            "extra": "mean: 420.7171714865062 nsec\nrounds: 116280"
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
          "id": "178484ce3c8b0637101c469bbeca65a235178c00",
          "message": "Merge pull request #110 from sett-and-hive/tom-harden-workflows\n\ntighten egress rules for action runner hardening step",
          "timestamp": "2022-06-13T20:59:29-05:00",
          "tree_id": "ab298cdf715f86ffefc993882ec2eebeff1fce1b",
          "url": "https://github.com/sett-and-hive/asciize/commit/178484ce3c8b0637101c469bbeca65a235178c00"
        },
        "date": 1655172054661,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 715995.7950738724,
            "unit": "iter/sec",
            "range": "stddev: 0.000009404953047174965",
            "extra": "mean: 1.3966562469781343 usec\nrounds: 62894"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 506415.5673708104,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012119087301094001",
            "extra": "mean: 1.9746628350936428 usec\nrounds: 80646"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 614339.5263535528,
            "unit": "iter/sec",
            "range": "stddev: 2.1687276486915806e-7",
            "extra": "mean: 1.6277643828902837 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2705028.413862989,
            "unit": "iter/sec",
            "range": "stddev: 5.5683454821237454e-8",
            "extra": "mean: 369.68188388529734 nsec\nrounds: 129854"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1938058.4614399304,
            "unit": "iter/sec",
            "range": "stddev: 9.710223643596718e-8",
            "extra": "mean: 515.9803070422312 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 696153.1817851041,
            "unit": "iter/sec",
            "range": "stddev: 4.425055912610374e-7",
            "extra": "mean: 1.4364654592768786 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 781788.2660155945,
            "unit": "iter/sec",
            "range": "stddev: 3.2634762838979485e-7",
            "extra": "mean: 1.2791187121501935 usec\nrounds: 125000"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2713958.938224925,
            "unit": "iter/sec",
            "range": "stddev: 4.0129614012407165e-8",
            "extra": "mean: 368.46541261712537 nsec\nrounds: 135136"
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
          "id": "0381155757c3c2d6c1ac888f82fdd8126f1e1dd8",
          "message": "Update README.rst",
          "timestamp": "2022-06-14T20:23:38-05:00",
          "tree_id": "8e40b9fb809dd171767a009c00812f9737e6c01a",
          "url": "https://github.com/sett-and-hive/asciize/commit/0381155757c3c2d6c1ac888f82fdd8126f1e1dd8"
        },
        "date": 1655256283629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 830194.0554400927,
            "unit": "iter/sec",
            "range": "stddev: 1.942400168056472e-7",
            "extra": "mean: 1.2045376541149668 usec\nrounds: 69926"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 481120.5703672332,
            "unit": "iter/sec",
            "range": "stddev: 3.343194948952972e-7",
            "extra": "mean: 2.078481074373338 usec\nrounds: 73525"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 453873.0599375545,
            "unit": "iter/sec",
            "range": "stddev: 2.953472634446101e-7",
            "extra": "mean: 2.2032592111494425 usec\nrounds: 87720"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1999990.9917183106,
            "unit": "iter/sec",
            "range": "stddev: 3.707831694013301e-8",
            "extra": "mean: 500.00225208024483 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1450848.9557461843,
            "unit": "iter/sec",
            "range": "stddev: 6.530162802528818e-8",
            "extra": "mean: 689.2516247397887 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 524895.0316317962,
            "unit": "iter/sec",
            "range": "stddev: 7.94993497806365e-7",
            "extra": "mean: 1.905142818538776 usec\nrounds: 92593"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 576827.0697573703,
            "unit": "iter/sec",
            "range": "stddev: 3.576068869943249e-7",
            "extra": "mean: 1.7336218295383192 usec\nrounds: 117648"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1999645.215948864,
            "unit": "iter/sec",
            "range": "stddev: 2.9666627613874705e-8",
            "extra": "mean: 500.08871174936013 nsec\nrounds: 98040"
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
          "id": "2c4cf1cc41e7ed1e3ed470474fad8baa6eaaa693",
          "message": "Update README.rst",
          "timestamp": "2022-06-14T20:26:12-05:00",
          "tree_id": "8198c42fcb663a18aa92c578c09aae9f16d5198a",
          "url": "https://github.com/sett-and-hive/asciize/commit/2c4cf1cc41e7ed1e3ed470474fad8baa6eaaa693"
        },
        "date": 1655256434188,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 941738.0586753795,
            "unit": "iter/sec",
            "range": "stddev: 6.23068092188771e-7",
            "extra": "mean: 1.0618663977609337 usec\nrounds: 81301"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 554580.0806539175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027292363370627152",
            "extra": "mean: 1.8031660978895567 usec\nrounds: 80001"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 517436.32996735955,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011064258377618787",
            "extra": "mean: 1.9326049256399935 usec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2202333.199889637,
            "unit": "iter/sec",
            "range": "stddev: 3.6807897297346794e-7",
            "extra": "mean: 454.0638991637934 nsec\nrounds: 108708"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1610095.1328720395,
            "unit": "iter/sec",
            "range": "stddev: 3.044077760150552e-7",
            "extra": "mean: 621.081313509882 nsec\nrounds: 80007"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 581170.6158278204,
            "unit": "iter/sec",
            "range": "stddev: 0.000005906368219110161",
            "extra": "mean: 1.7206651072260397 usec\nrounds: 107527"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 666400.1523471653,
            "unit": "iter/sec",
            "range": "stddev: 0.000001308493213239452",
            "extra": "mean: 1.5005998970406056 usec\nrounds: 151516"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2204206.5734952525,
            "unit": "iter/sec",
            "range": "stddev: 2.1554762709405265e-7",
            "extra": "mean: 453.67798645756847 nsec\nrounds: 107527"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "afbfd8a786c4d8a5db3fa3fa51955b56d7dd31b8",
          "message": "Update dependency sphinx-click to v4.2.0",
          "timestamp": "2022-06-20T16:26:47Z",
          "tree_id": "27f035e0842f6cd297ac12b0ea5b9160215eecdd",
          "url": "https://github.com/sett-and-hive/asciize/commit/afbfd8a786c4d8a5db3fa3fa51955b56d7dd31b8"
        },
        "date": 1655742465112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 958535.6428964457,
            "unit": "iter/sec",
            "range": "stddev: 0.000009465064089865403",
            "extra": "mean: 1.0432580232261992 usec\nrounds: 57801"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 577816.7799192541,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015187042350353666",
            "extra": "mean: 1.7306524053173795 usec\nrounds: 71943"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 527362.7056405374,
            "unit": "iter/sec",
            "range": "stddev: 4.7256138053303034e-7",
            "extra": "mean: 1.896228135407101 usec\nrounds: 41151"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2381649.5438695694,
            "unit": "iter/sec",
            "range": "stddev: 2.2271525690214485e-8",
            "extra": "mean: 419.8770564601871 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1285472.1267753176,
            "unit": "iter/sec",
            "range": "stddev: 1.286437244298971e-7",
            "extra": "mean: 777.9242965839786 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 631269.8354136044,
            "unit": "iter/sec",
            "range": "stddev: 1.791460185818268e-7",
            "extra": "mean: 1.5841086392870423 usec\nrounds: 98040"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 684869.7644503323,
            "unit": "iter/sec",
            "range": "stddev: 1.9807592553724682e-7",
            "extra": "mean: 1.460131621962589 usec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2387770.4190911814,
            "unit": "iter/sec",
            "range": "stddev: 1.8294297068562943e-8",
            "extra": "mean: 418.8007322667748 nsec\nrounds: 117648"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "5d73c89e52d4d23fce78a6eee8aa2b542661b1b7",
          "message": "Update github/codeql-action digest to d00e8c0",
          "timestamp": "2022-06-21T14:11:27Z",
          "tree_id": "aa10c2c03a75aa6d2b2687d92998d88000a7fb5d",
          "url": "https://github.com/sett-and-hive/asciize/commit/5d73c89e52d4d23fce78a6eee8aa2b542661b1b7"
        },
        "date": 1655820751688,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 949387.4484117515,
            "unit": "iter/sec",
            "range": "stddev: 0.000004868034757416065",
            "extra": "mean: 1.0533107443888363 usec\nrounds: 70418"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 568255.1708170922,
            "unit": "iter/sec",
            "range": "stddev: 8.788529605717682e-7",
            "extra": "mean: 1.7597728122070646 usec\nrounds: 68494"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 533343.6530788871,
            "unit": "iter/sec",
            "range": "stddev: 2.3864589227307745e-7",
            "extra": "mean: 1.8749637203465312 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2368380.1927158083,
            "unit": "iter/sec",
            "range": "stddev: 9.729748213242186e-8",
            "extra": "mean: 422.22950651081493 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1261235.0330879441,
            "unit": "iter/sec",
            "range": "stddev: 1.0469172943930534e-7",
            "extra": "mean: 792.8736308185562 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 607959.8486975717,
            "unit": "iter/sec",
            "range": "stddev: 1.7946419006583249e-7",
            "extra": "mean: 1.644845464946893 usec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 676306.8817863693,
            "unit": "iter/sec",
            "range": "stddev: 1.8422217102709233e-7",
            "extra": "mean: 1.4786186965281811 usec\nrounds: 121937"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2363413.172092139,
            "unit": "iter/sec",
            "range": "stddev: 3.7418144597181175e-8",
            "extra": "mean: 423.1168768156426 nsec\nrounds: 116266"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "3d6c00f197f49cac8d1061235356393fe5379d3a",
          "message": "Update github/codeql-action action to v2.1.13",
          "timestamp": "2022-06-21T17:52:27Z",
          "tree_id": "0ad0209df1fcc3565b4a6b122025d99779288f45",
          "url": "https://github.com/sett-and-hive/asciize/commit/3d6c00f197f49cac8d1061235356393fe5379d3a"
        },
        "date": 1655834018335,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 804753.1339152276,
            "unit": "iter/sec",
            "range": "stddev: 0.000004979793201742985",
            "extra": "mean: 1.2426170931884057 usec\nrounds: 64517"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 461945.37601572677,
            "unit": "iter/sec",
            "range": "stddev: 0.000009127463781145137",
            "extra": "mean: 2.1647581119330335 usec\nrounds: 76924"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 417864.8801749547,
            "unit": "iter/sec",
            "range": "stddev: 0.000006046440432589367",
            "extra": "mean: 2.393118080613314 usec\nrounds: 90091"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1874598.8098927394,
            "unit": "iter/sec",
            "range": "stddev: 8.840591022354958e-7",
            "extra": "mean: 533.4474740529773 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1051131.3718133338,
            "unit": "iter/sec",
            "range": "stddev: 0.000008222433842294003",
            "extra": "mean: 951.3558693190503 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 513599.28846968245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032397986607809124",
            "extra": "mean: 1.947043195833846 usec\nrounds: 93458"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 587168.2989354705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020793407508377943",
            "extra": "mean: 1.7030892195865968 usec\nrounds: 51547"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1304609.1602238866,
            "unit": "iter/sec",
            "range": "stddev: 0.000001572952217343356",
            "extra": "mean: 766.5130910382295 nsec\nrounds: 7868"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "b1448d559df10f2a58a501723d88e27fb3553154",
          "message": "Update github/codeql-action digest to 41a4ada",
          "timestamp": "2022-06-23T04:02:54Z",
          "tree_id": "6753bc5b6ac1d73fb93921f8a97896c8feab2373",
          "url": "https://github.com/sett-and-hive/asciize/commit/b1448d559df10f2a58a501723d88e27fb3553154"
        },
        "date": 1655957035939,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 947474.3462254023,
            "unit": "iter/sec",
            "range": "stddev: 4.907418904409443e-7",
            "extra": "mean: 1.0554375471841029 usec\nrounds: 66226"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 566222.7158681563,
            "unit": "iter/sec",
            "range": "stddev: 5.177977047989167e-7",
            "extra": "mean: 1.7660895120867028 usec\nrounds: 87720"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 526455.3584053019,
            "unit": "iter/sec",
            "range": "stddev: 4.422785416174923e-7",
            "extra": "mean: 1.8994962897312375 usec\nrounds: 103093"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2383619.813062461,
            "unit": "iter/sec",
            "range": "stddev: 4.3193858783830416e-8",
            "extra": "mean: 419.52999153632237 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1222064.8396732868,
            "unit": "iter/sec",
            "range": "stddev: 3.847291109021631e-7",
            "extra": "mean: 818.2871870099342 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 616294.2899082213,
            "unit": "iter/sec",
            "range": "stddev: 1.5776466253320814e-7",
            "extra": "mean: 1.6226014363185486 usec\nrounds: 90091"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 673323.5747284181,
            "unit": "iter/sec",
            "range": "stddev: 4.346897539498812e-7",
            "extra": "mean: 1.4851700393875935 usec\nrounds: 123442"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2178187.205255396,
            "unit": "iter/sec",
            "range": "stddev: 1.62354855516758e-8",
            "extra": "mean: 459.09736205767535 nsec\nrounds: 107527"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "ef53fa1bb7c8f35fcce7fbe4029c7922176e242a",
          "message": "Update github/codeql-action action to v2.1.14",
          "timestamp": "2022-06-23T06:53:16Z",
          "tree_id": "73064b0f3b73dcd4c4d0dd130c257005f74b98d5",
          "url": "https://github.com/sett-and-hive/asciize/commit/ef53fa1bb7c8f35fcce7fbe4029c7922176e242a"
        },
        "date": 1655967253480,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 960943.622630155,
            "unit": "iter/sec",
            "range": "stddev: 1.5783242984333179e-7",
            "extra": "mean: 1.0406437760239728 usec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 562209.8181940458,
            "unit": "iter/sec",
            "range": "stddev: 0.000007186999234493388",
            "extra": "mean: 1.778695368950052 usec\nrounds: 77520"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 528775.4118454102,
            "unit": "iter/sec",
            "range": "stddev: 1.7946209919814714e-7",
            "extra": "mean: 1.8911620654032117 usec\nrounds: 106383"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2269640.5087826424,
            "unit": "iter/sec",
            "range": "stddev: 1.6622121804105652e-8",
            "extra": "mean: 440.59841024628366 nsec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1631511.0011506113,
            "unit": "iter/sec",
            "range": "stddev: 2.0380636153393007e-8",
            "extra": "mean: 612.9287508908074 nsec\nrounds: 80001"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 597006.7844500646,
            "unit": "iter/sec",
            "range": "stddev: 1.4475173324222748e-7",
            "extra": "mean: 1.6750228406887442 usec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 687513.5009265535,
            "unit": "iter/sec",
            "range": "stddev: 1.36115952630912e-7",
            "extra": "mean: 1.4545168911625914 usec\nrounds: 144928"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2258991.139748512,
            "unit": "iter/sec",
            "range": "stddev: 1.584998966986992e-8",
            "extra": "mean: 442.67548570876085 nsec\nrounds: 109891"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "6b447cca234eb6f38164499da2576e9d25c15fb3",
          "message": "Update pre-commit hook rhysd/actionlint to v1.6.14",
          "timestamp": "2022-06-26T18:40:48Z",
          "tree_id": "0fa93ef9f9681b853b41c9dbe7cfbe31bc5f72cc",
          "url": "https://github.com/sett-and-hive/asciize/commit/6b447cca234eb6f38164499da2576e9d25c15fb3"
        },
        "date": 1656268901642,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1001454.5194231306,
            "unit": "iter/sec",
            "range": "stddev: 5.820514577221245e-7",
            "extra": "mean: 998.5475931308708 nsec\nrounds: 80001"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 570777.2776532001,
            "unit": "iter/sec",
            "range": "stddev: 1.4628513152673306e-7",
            "extra": "mean: 1.751996863140008 usec\nrounds: 78741"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 536084.4585232616,
            "unit": "iter/sec",
            "range": "stddev: 1.793701330768684e-7",
            "extra": "mean: 1.8653777107336313 usec\nrounds: 106383"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2388725.626208094,
            "unit": "iter/sec",
            "range": "stddev: 1.757800095371354e-8",
            "extra": "mean: 418.6332616137766 nsec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1759359.999750819,
            "unit": "iter/sec",
            "range": "stddev: 2.816212541941481e-7",
            "extra": "mean: 568.3885049915407 nsec\nrounds: 87712"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 615145.3579798293,
            "unit": "iter/sec",
            "range": "stddev: 1.4119186488585956e-7",
            "extra": "mean: 1.625632034815404 usec\nrounds: 92593"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 688944.3671261049,
            "unit": "iter/sec",
            "range": "stddev: 2.259690960288736e-7",
            "extra": "mean: 1.451496010006508 usec\nrounds: 133334"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2391550.6088168644,
            "unit": "iter/sec",
            "range": "stddev: 1.4431291965888756e-8",
            "extra": "mean: 418.13875747135774 nsec\nrounds: 114943"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "43478d7d71b4555d3e4f45ffd46a56748d02af4c",
          "message": "Update ossf/scorecard-action action to v1.1.2",
          "timestamp": "2022-06-28T05:01:41Z",
          "tree_id": "060fbf2de01920ab9dba73f08f647606bfa5c4d5",
          "url": "https://github.com/sett-and-hive/asciize/commit/43478d7d71b4555d3e4f45ffd46a56748d02af4c"
        },
        "date": 1656392566831,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 799136.9992396263,
            "unit": "iter/sec",
            "range": "stddev: 3.1054672351743126e-7",
            "extra": "mean: 1.2513498948884778 usec\nrounds: 69921"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 472118.37847881636,
            "unit": "iter/sec",
            "range": "stddev: 2.0576663301660847e-7",
            "extra": "mean: 2.1181128411523367 usec\nrounds: 71933"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 429533.90623852634,
            "unit": "iter/sec",
            "range": "stddev: 8.644945003454345e-7",
            "extra": "mean: 2.3281049190204923 usec\nrounds: 84732"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1918207.7301239937,
            "unit": "iter/sec",
            "range": "stddev: 2.5048097851572486e-8",
            "extra": "mean: 521.3199719175674 nsec\nrounds: 92585"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1042946.5318221059,
            "unit": "iter/sec",
            "range": "stddev: 1.8596248471347845e-7",
            "extra": "mean: 958.8219237403522 nsec\nrounds: 185151"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 499982.9561656109,
            "unit": "iter/sec",
            "range": "stddev: 3.086771970100163e-7",
            "extra": "mean: 2.000068177661574 usec\nrounds: 87712"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 558973.400295576,
            "unit": "iter/sec",
            "range": "stddev: 1.9918126903958806e-7",
            "extra": "mean: 1.7889938939334435 usec\nrounds: 112347"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1924287.657150773,
            "unit": "iter/sec",
            "range": "stddev: 2.4490106787195427e-8",
            "extra": "mean: 519.6728234909409 nsec\nrounds: 93441"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "0978c28f4256cf88e5ebaa03ffa10966c810478a",
          "message": "Update pre-commit hook psf/black to v22.6.0",
          "timestamp": "2022-06-28T10:36:38Z",
          "tree_id": "3f487e3761711c7086fbde086529f21682c00f42",
          "url": "https://github.com/sett-and-hive/asciize/commit/0978c28f4256cf88e5ebaa03ffa10966c810478a"
        },
        "date": 1656412661334,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1019352.8222587189,
            "unit": "iter/sec",
            "range": "stddev: 1.6149145291096779e-7",
            "extra": "mean: 981.0145988355277 nsec\nrounds: 76924"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 582981.1504187356,
            "unit": "iter/sec",
            "range": "stddev: 1.5306195281694555e-7",
            "extra": "mean: 1.7153213260527103 usec\nrounds: 71429"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 523983.42433983536,
            "unit": "iter/sec",
            "range": "stddev: 1.918700655234834e-7",
            "extra": "mean: 1.9084573166792362 usec\nrounds: 90082"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2395766.117562308,
            "unit": "iter/sec",
            "range": "stddev: 1.6735337105264367e-8",
            "extra": "mean: 417.4030147055512 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1282445.3386222587,
            "unit": "iter/sec",
            "range": "stddev: 1.1068917401762e-7",
            "extra": "mean: 779.7603296482857 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 634410.5393121734,
            "unit": "iter/sec",
            "range": "stddev: 1.721284947357702e-7",
            "extra": "mean: 1.5762663733238071 usec\nrounds: 90910"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 713254.0839523191,
            "unit": "iter/sec",
            "range": "stddev: 1.221338149655381e-7",
            "extra": "mean: 1.4020249200099215 usec\nrounds: 125000"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2401594.745631404,
            "unit": "iter/sec",
            "range": "stddev: 1.3910625621994873e-8",
            "extra": "mean: 416.3899849542779 nsec\nrounds: 117648"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "914dc10c81c51ee317bec443f6552796c8193eb1",
          "message": "Update pre-commit hook rhysd/actionlint to v1.6.15",
          "timestamp": "2022-06-28T17:17:01Z",
          "tree_id": "89419ddfabbdf243019401f4d8297d8ca85dd346",
          "url": "https://github.com/sett-and-hive/asciize/commit/914dc10c81c51ee317bec443f6552796c8193eb1"
        },
        "date": 1656436682536,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 864854.9100418239,
            "unit": "iter/sec",
            "range": "stddev: 4.1008432446272424e-7",
            "extra": "mean: 1.156263308896102 usec\nrounds: 70423"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 492090.27049979294,
            "unit": "iter/sec",
            "range": "stddev: 4.019987260850803e-7",
            "extra": "mean: 2.032147473642076 usec\nrounds: 73525"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 449280.4646333961,
            "unit": "iter/sec",
            "range": "stddev: 4.5139743280324614e-7",
            "extra": "mean: 2.2257811739399354 usec\nrounds: 96154"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2019768.019161815,
            "unit": "iter/sec",
            "range": "stddev: 6.216416342520908e-8",
            "extra": "mean: 495.10636395498966 nsec\nrounds: 97078"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1106799.1933364554,
            "unit": "iter/sec",
            "range": "stddev: 3.438370874224147e-7",
            "extra": "mean: 903.506260232709 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 529602.6730226218,
            "unit": "iter/sec",
            "range": "stddev: 4.983868648421627e-7",
            "extra": "mean: 1.8882079924043085 usec\nrounds: 94340"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 587962.9980999702,
            "unit": "iter/sec",
            "range": "stddev: 4.381994747675304e-7",
            "extra": "mean: 1.7007872999347688 usec\nrounds: 107527"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2021761.1073144965,
            "unit": "iter/sec",
            "range": "stddev: 5.153291535772603e-8",
            "extra": "mean: 494.61827927228467 nsec\nrounds: 98040"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "cda20aa8a2d788c6d37768e06afa6b4cb254cb1e",
          "message": "Update github/codeql-action digest to 3f62b75",
          "timestamp": "2022-06-28T23:20:03Z",
          "tree_id": "f3f168a57ffa87d07a0e9735437168acdfb46132",
          "url": "https://github.com/sett-and-hive/asciize/commit/cda20aa8a2d788c6d37768e06afa6b4cb254cb1e"
        },
        "date": 1656458460290,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 975780.9541859467,
            "unit": "iter/sec",
            "range": "stddev: 1.5110589338129205e-7",
            "extra": "mean: 1.0248201665652086 usec\nrounds: 87720"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 579269.630804974,
            "unit": "iter/sec",
            "range": "stddev: 1.8173389401265485e-7",
            "extra": "mean: 1.7263118016567929 usec\nrounds: 85471"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 525863.3923580775,
            "unit": "iter/sec",
            "range": "stddev: 1.8083155229755106e-7",
            "extra": "mean: 1.9016345585795549 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2253514.842351738,
            "unit": "iter/sec",
            "range": "stddev: 5.3290425500119754e-8",
            "extra": "mean: 443.7512374920164 nsec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1632907.7481592183,
            "unit": "iter/sec",
            "range": "stddev: 8.02610687950073e-8",
            "extra": "mean: 612.4044675072327 nsec\nrounds: 80000"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 596555.3441697458,
            "unit": "iter/sec",
            "range": "stddev: 1.7282768090844998e-7",
            "extra": "mean: 1.6762904058662773 usec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 682762.5853342179,
            "unit": "iter/sec",
            "range": "stddev: 1.547134857483683e-7",
            "extra": "mean: 1.4646379597828898 usec\nrounds: 158731"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2257893.861726994,
            "unit": "iter/sec",
            "range": "stddev: 1.8444679915748407e-8",
            "extra": "mean: 442.89061454612386 nsec\nrounds: 112360"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "bb62c89186b3a6031ec6e41624077fe3cc3805c4",
          "message": "Update github/codeql-action action to v2.1.15",
          "timestamp": "2022-06-29T02:03:56Z",
          "tree_id": "fb6784cdf378079022900c3a5df355a277815ae0",
          "url": "https://github.com/sett-and-hive/asciize/commit/bb62c89186b3a6031ec6e41624077fe3cc3805c4"
        },
        "date": 1656468301554,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 973973.1041486085,
            "unit": "iter/sec",
            "range": "stddev: 1.0296788647451655e-7",
            "extra": "mean: 1.0267223968922043 usec\nrounds: 85471"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 579655.4242180918,
            "unit": "iter/sec",
            "range": "stddev: 1.5520726707218625e-7",
            "extra": "mean: 1.7251628436823807 usec\nrounds: 68489"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 517048.9138644433,
            "unit": "iter/sec",
            "range": "stddev: 2.274447057432396e-7",
            "extra": "mean: 1.934052994185718 usec\nrounds: 101011"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2263431.6761483126,
            "unit": "iter/sec",
            "range": "stddev: 1.631772850502518e-8",
            "extra": "mean: 441.8070183156566 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1264628.0904142708,
            "unit": "iter/sec",
            "range": "stddev: 1.2205302609343573e-7",
            "extra": "mean: 790.7463131492018 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 599342.6968953544,
            "unit": "iter/sec",
            "range": "stddev: 1.321531128103422e-7",
            "extra": "mean: 1.668494511036981 usec\nrounds: 90910"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 654329.4994213622,
            "unit": "iter/sec",
            "range": "stddev: 1.6314809628803356e-7",
            "extra": "mean: 1.5282820060601299 usec\nrounds: 133334"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2264241.9739006893,
            "unit": "iter/sec",
            "range": "stddev: 2.2445619187874633e-8",
            "extra": "mean: 441.6489101107491 nsec\nrounds: 111112"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "7ca1ee8c7bd8cb70036306ae3071c28ef3f46927",
          "message": "Update step-security/harden-runner digest to b7dfd5c",
          "timestamp": "2022-07-02T02:16:37Z",
          "tree_id": "4014a37d69f0322636cb00c5743fe1e170095ac6",
          "url": "https://github.com/sett-and-hive/asciize/commit/7ca1ee8c7bd8cb70036306ae3071c28ef3f46927"
        },
        "date": 1656728256227,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 963601.2731670155,
            "unit": "iter/sec",
            "range": "stddev: 1.5534323213514777e-7",
            "extra": "mean: 1.0377736392080041 usec\nrounds: 84034"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 578418.5472625932,
            "unit": "iter/sec",
            "range": "stddev: 1.7118941309741345e-7",
            "extra": "mean: 1.7288518923408853 usec\nrounds: 86957"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 521973.36530483543,
            "unit": "iter/sec",
            "range": "stddev: 1.3965594507710314e-7",
            "extra": "mean: 1.9158065649882237 usec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2262139.843518504,
            "unit": "iter/sec",
            "range": "stddev: 1.668881261579742e-8",
            "extra": "mean: 442.059319570865 nsec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1632716.9461215418,
            "unit": "iter/sec",
            "range": "stddev: 2.2299181892583396e-8",
            "extra": "mean: 612.4760341193495 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 596336.4048142795,
            "unit": "iter/sec",
            "range": "stddev: 1.5584924287237941e-7",
            "extra": "mean: 1.676905840272213 usec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 675644.5098599723,
            "unit": "iter/sec",
            "range": "stddev: 1.3971338377158035e-7",
            "extra": "mean: 1.4800682687516407 usec\nrounds: 175439"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2254634.6582400994,
            "unit": "iter/sec",
            "range": "stddev: 1.5495677092847975e-8",
            "extra": "mean: 443.53083828684186 nsec\nrounds: 109891"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "463aba12736f5d053b2734bd94a7ed8d1046e9a5",
          "message": "Update step-security/harden-runner action to v1.4.4",
          "timestamp": "2022-07-02T05:20:59Z",
          "tree_id": "510cf356eb4481e46dc24a13ec9e8c44de8a7ec0",
          "url": "https://github.com/sett-and-hive/asciize/commit/463aba12736f5d053b2734bd94a7ed8d1046e9a5"
        },
        "date": 1656739323185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 873130.5633376329,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016981354649863517",
            "extra": "mean: 1.1453040839360786 usec\nrounds: 72993"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 489845.7687338278,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042790849423317845",
            "extra": "mean: 2.0414588914074696 usec\nrounds: 84739"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 455395.49400029564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033795309784043036",
            "extra": "mean: 2.195893488571388 usec\nrounds: 106383"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1932660.081409563,
            "unit": "iter/sec",
            "range": "stddev: 5.526397351565622e-7",
            "extra": "mean: 517.4215629633043 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1090672.7712012683,
            "unit": "iter/sec",
            "range": "stddev: 0.000005353129241488096",
            "extra": "mean: 916.8652838913351 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 524567.6137477485,
            "unit": "iter/sec",
            "range": "stddev: 0.000003469508784442638",
            "extra": "mean: 1.9063319461442676 usec\nrounds: 98040"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 604533.565434838,
            "unit": "iter/sec",
            "range": "stddev: 0.000005572507141653972",
            "extra": "mean: 1.6541678695387327 usec\nrounds: 144928"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1915860.2663217667,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019869671493783988",
            "extra": "mean: 521.9587344537655 nsec\nrounds: 108696"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "d78a3eec71baea5825777c758b9aef441ff90c09",
          "message": "Update step-security/harden-runner digest to 911b1af",
          "timestamp": "2022-07-02T11:33:32Z",
          "tree_id": "31b5fb5a7176f415e9a7bbf0e20b3b125c45bc9a",
          "url": "https://github.com/sett-and-hive/asciize/commit/d78a3eec71baea5825777c758b9aef441ff90c09"
        },
        "date": 1656761668777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 993376.3116245144,
            "unit": "iter/sec",
            "range": "stddev: 1.5426577584326277e-7",
            "extra": "mean: 1.0066678541635983 usec\nrounds: 80001"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 574831.3781152435,
            "unit": "iter/sec",
            "range": "stddev: 2.7583445498955636e-7",
            "extra": "mean: 1.7396405938708475 usec\nrounds: 78741"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 521846.9628782647,
            "unit": "iter/sec",
            "range": "stddev: 2.1530739363488283e-7",
            "extra": "mean: 1.9162706140598498 usec\nrounds: 98040"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2332274.6883902624,
            "unit": "iter/sec",
            "range": "stddev: 2.2121176833262835e-8",
            "extra": "mean: 428.76596182166145 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1767958.1652907247,
            "unit": "iter/sec",
            "range": "stddev: 2.476259155508515e-8",
            "extra": "mean: 565.6242436233629 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 614369.6134283701,
            "unit": "iter/sec",
            "range": "stddev: 1.9585195241385848e-7",
            "extra": "mean: 1.6276846675728225 usec\nrounds: 106383"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 661482.915567757,
            "unit": "iter/sec",
            "range": "stddev: 2.166748653474138e-7",
            "extra": "mean: 1.5117548412292563 usec\nrounds: 133334"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2401791.547492042,
            "unit": "iter/sec",
            "range": "stddev: 1.7303374656703982e-8",
            "extra": "mean: 416.35586612222914 nsec\nrounds: 119048"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "6c3d54ce22393cf7664265c3c15b9c3f9fc6e894",
          "message": "Update pre-commit hook asottile/reorder_python_imports to v3.2.0",
          "timestamp": "2022-07-02T13:42:50Z",
          "tree_id": "effcf169b20985d7acc8e1adff70925a85f5175e",
          "url": "https://github.com/sett-and-hive/asciize/commit/6c3d54ce22393cf7664265c3c15b9c3f9fc6e894"
        },
        "date": 1656769426819,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1006916.3682071615,
            "unit": "iter/sec",
            "range": "stddev: 1.1198766922942663e-7",
            "extra": "mean: 993.1311393621734 nsec\nrounds: 76331"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 605103.4586959127,
            "unit": "iter/sec",
            "range": "stddev: 1.7320862186294743e-7",
            "extra": "mean: 1.65260995558536 usec\nrounds: 81301"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 552090.541531085,
            "unit": "iter/sec",
            "range": "stddev: 1.9547854204238831e-7",
            "extra": "mean: 1.8112971057731764 usec\nrounds: 106383"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1693358.6769489846,
            "unit": "iter/sec",
            "range": "stddev: 1.424628873190268e-7",
            "extra": "mean: 590.5423426310093 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1768937.315689196,
            "unit": "iter/sec",
            "range": "stddev: 1.7045996165821626e-8",
            "extra": "mean: 565.3111566645979 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 625837.6330364356,
            "unit": "iter/sec",
            "range": "stddev: 1.4959541781425297e-7",
            "extra": "mean: 1.5978585294530874 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 687125.2581131186,
            "unit": "iter/sec",
            "range": "stddev: 1.3644553653284142e-7",
            "extra": "mean: 1.4553387292821274 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2389659.6222143797,
            "unit": "iter/sec",
            "range": "stddev: 1.4391674493728187e-8",
            "extra": "mean: 418.4696392338996 nsec\nrounds: 116280"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "efecdb2ded464b6748eb56ce0e91dd7875183ee9",
          "message": "Update pre-commit hook asottile/reorder_python_imports to v3.2.1",
          "timestamp": "2022-07-02T23:15:05Z",
          "tree_id": "be13852764cef7601691fb855c7e7b6c638f95f5",
          "url": "https://github.com/sett-and-hive/asciize/commit/efecdb2ded464b6748eb56ce0e91dd7875183ee9"
        },
        "date": 1656803765604,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 966690.7760165853,
            "unit": "iter/sec",
            "range": "stddev: 2.6186903989368547e-7",
            "extra": "mean: 1.0344569585329768 usec\nrounds: 88496"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 571368.5580275414,
            "unit": "iter/sec",
            "range": "stddev: 2.0929544984756225e-7",
            "extra": "mean: 1.7501838103450515 usec\nrounds: 82645"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 514611.4778993588,
            "unit": "iter/sec",
            "range": "stddev: 3.0415598996763e-7",
            "extra": "mean: 1.9432135561414108 usec\nrounds: 123457"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2251971.709012215,
            "unit": "iter/sec",
            "range": "stddev: 2.372752723832609e-8",
            "extra": "mean: 444.05531206181854 nsec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1634697.899973725,
            "unit": "iter/sec",
            "range": "stddev: 2.4747466205815298e-8",
            "extra": "mean: 611.7338255686905 nsec\nrounds: 79366"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 602387.3998739639,
            "unit": "iter/sec",
            "range": "stddev: 1.901729074304007e-7",
            "extra": "mean: 1.6600612831696475 usec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 674275.1689846906,
            "unit": "iter/sec",
            "range": "stddev: 1.7092908605184932e-7",
            "extra": "mean: 1.4830740415753099 usec\nrounds: 156250"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2196477.721433214,
            "unit": "iter/sec",
            "range": "stddev: 2.6423973931583422e-8",
            "extra": "mean: 455.27436506278514 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "7c7d36651dd3c812011bf609603e49101a56111c",
          "message": "Update pre-commit hook asottile/reorder_python_imports to v3.3.0",
          "timestamp": "2022-07-03T20:42:03Z",
          "tree_id": "0a5c4406e109d4c42671c30ad38f095fb6d1beb7",
          "url": "https://github.com/sett-and-hive/asciize/commit/7c7d36651dd3c812011bf609603e49101a56111c"
        },
        "date": 1656880979580,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1015056.1167370626,
            "unit": "iter/sec",
            "range": "stddev: 1.3873212046164432e-7",
            "extra": "mean: 985.1672075180818 nsec\nrounds: 75188"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 580825.4564314387,
            "unit": "iter/sec",
            "range": "stddev: 1.835329743742147e-7",
            "extra": "mean: 1.721687623927415 usec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 541606.4686648344,
            "unit": "iter/sec",
            "range": "stddev: 2.729812922719807e-7",
            "extra": "mean: 1.846359040846013 usec\nrounds: 108684"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2389032.203153264,
            "unit": "iter/sec",
            "range": "stddev: 8.299561934366597e-8",
            "extra": "mean: 418.57953973202945 nsec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1738130.1498565122,
            "unit": "iter/sec",
            "range": "stddev: 5.0440638891395284e-8",
            "extra": "mean: 575.3309095311274 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 615545.4637547466,
            "unit": "iter/sec",
            "range": "stddev: 3.132343385768277e-7",
            "extra": "mean: 1.6245753707616188 usec\nrounds: 93458"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 692285.6002258894,
            "unit": "iter/sec",
            "range": "stddev: 1.4831269273572518e-7",
            "extra": "mean: 1.4444905392712268 usec\nrounds: 104167"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2407116.249323667,
            "unit": "iter/sec",
            "range": "stddev: 1.6330220136797888e-8",
            "extra": "mean: 415.43485915231605 nsec\nrounds: 120482"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "fe4d843c0563a67d0058ff7be29c17e7240bef85",
          "message": "Update dependency sphinx-click to v4.3.0",
          "timestamp": "2022-07-04T14:34:37Z",
          "tree_id": "c3dab10e3f3208609254c9c3018b3d40e9069961",
          "url": "https://github.com/sett-and-hive/asciize/commit/fe4d843c0563a67d0058ff7be29c17e7240bef85"
        },
        "date": 1656945346689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 824443.4147407971,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021640728630200125",
            "extra": "mean: 1.2129395203118911 usec\nrounds: 66667"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 488584.7121724235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018455837406180332",
            "extra": "mean: 2.0467279779460146 usec\nrounds: 78126"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 428723.71453504846,
            "unit": "iter/sec",
            "range": "stddev: 0.00000532586984269076",
            "extra": "mean: 2.3325045153718675 usec\nrounds: 93458"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1836186.4501731347,
            "unit": "iter/sec",
            "range": "stddev: 4.005523326661621e-7",
            "extra": "mean: 544.6070032297941 nsec\nrounds: 92593"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1094776.9704549892,
            "unit": "iter/sec",
            "range": "stddev: 9.938168459695752e-7",
            "extra": "mean: 913.4280561130182 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 504921.07695313165,
            "unit": "iter/sec",
            "range": "stddev: 0.000002336321547512313",
            "extra": "mean: 1.9805075399790115 usec\nrounds: 96154"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 570886.7835643417,
            "unit": "iter/sec",
            "range": "stddev: 0.000005081986588092704",
            "extra": "mean: 1.751660799986439 usec\nrounds: 125000"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1824758.7221078912,
            "unit": "iter/sec",
            "range": "stddev: 6.253173370795853e-7",
            "extra": "mean: 548.0176572851271 nsec\nrounds: 91744"
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
          "id": "47d181c8cc20e358439e613d537a98b13e305195",
          "message": "Merge pull request #136 from sett-and-hive/issues/134/review-egress-rules\n\nneed to audit again because for docker-action in pre-commit linting",
          "timestamp": "2022-07-04T16:38:30-05:00",
          "tree_id": "1952f39da97fecfd3423c0f78c975470ea90d815",
          "url": "https://github.com/sett-and-hive/asciize/commit/47d181c8cc20e358439e613d537a98b13e305195"
        },
        "date": 1656970765913,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 990196.0450021169,
            "unit": "iter/sec",
            "range": "stddev: 1.1157169837689132e-7",
            "extra": "mean: 1.0099010241935094 usec\nrounds: 80646"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 575644.9991128185,
            "unit": "iter/sec",
            "range": "stddev: 1.7402044274178202e-7",
            "extra": "mean: 1.7371817726918422 usec\nrounds: 80001"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 522987.47413276084,
            "unit": "iter/sec",
            "range": "stddev: 1.7018185017146246e-7",
            "extra": "mean: 1.9120916837601907 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2319538.4393123384,
            "unit": "iter/sec",
            "range": "stddev: 1.891820353052607e-8",
            "extra": "mean: 431.1202535175601 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1767627.9660926254,
            "unit": "iter/sec",
            "range": "stddev: 6.614578056248288e-8",
            "extra": "mean: 565.7299042458594 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 610924.2620627802,
            "unit": "iter/sec",
            "range": "stddev: 1.864077134820611e-7",
            "extra": "mean: 1.6368641124572612 usec\nrounds: 104167"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 689379.5105521594,
            "unit": "iter/sec",
            "range": "stddev: 1.4765957054651237e-7",
            "extra": "mean: 1.4505798108200936 usec\nrounds: 112347"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2405360.5855171434,
            "unit": "iter/sec",
            "range": "stddev: 1.6491868162477573e-8",
            "extra": "mean: 415.73808352149223 nsec\nrounds: 117648"
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
          "id": "efad603df9fcf8dce611a078d86eb0f9cf3dadeb",
          "message": "Merge pull request #135 from sett-and-hive/issue/133/setup-semgrep-ci\n\ninitial add of Semgrep action.\r\n\r\npre-commit.ci *should* skip `semgrep`, per the config",
          "timestamp": "2022-07-04T18:56:51-05:00",
          "tree_id": "804a95175887283f0023639666b35b7f377e58af",
          "url": "https://github.com/sett-and-hive/asciize/commit/efad603df9fcf8dce611a078d86eb0f9cf3dadeb"
        },
        "date": 1656979065110,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 968753.5772142027,
            "unit": "iter/sec",
            "range": "stddev: 1.1023088808825655e-7",
            "extra": "mean: 1.0322542528056011 usec\nrounds: 92585"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 562447.7169183905,
            "unit": "iter/sec",
            "range": "stddev: 1.9797979021527296e-7",
            "extra": "mean: 1.7779430334946087 usec\nrounds: 82645"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 500663.49163133337,
            "unit": "iter/sec",
            "range": "stddev: 1.8089277892880227e-7",
            "extra": "mean: 1.9973495505766896 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2393172.828671987,
            "unit": "iter/sec",
            "range": "stddev: 6.808923272649973e-8",
            "extra": "mean: 417.8553207773358 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1249531.2323701915,
            "unit": "iter/sec",
            "range": "stddev: 1.1731243454990747e-7",
            "extra": "mean: 800.300123833748 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 611840.6008319499,
            "unit": "iter/sec",
            "range": "stddev: 6.57475944762094e-7",
            "extra": "mean: 1.6344126209346856 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 652863.4916984948,
            "unit": "iter/sec",
            "range": "stddev: 2.0424008330154716e-7",
            "extra": "mean: 1.5317137697474739 usec\nrounds: 135136"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2397154.730344933,
            "unit": "iter/sec",
            "range": "stddev: 1.8360190396212934e-7",
            "extra": "mean: 417.16122340443167 nsec\nrounds: 116266"
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
          "id": "8d669f9b6284e62a51bd2bb0f5b6e91b96dda636",
          "message": "Merge pull request #125 from sett-and-hive/renovate/safety-2.x\n\nUpdate dependency safety to v2",
          "timestamp": "2022-07-04T22:05:43-05:00",
          "tree_id": "d11a05a3f95e2dfc026723d62a287a0649929fb8",
          "url": "https://github.com/sett-and-hive/asciize/commit/8d669f9b6284e62a51bd2bb0f5b6e91b96dda636"
        },
        "date": 1656990403072,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 995467.6732025505,
            "unit": "iter/sec",
            "range": "stddev: 1.1640723142784944e-7",
            "extra": "mean: 1.0045529623105371 usec\nrounds: 75752"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 596952.0767693012,
            "unit": "iter/sec",
            "range": "stddev: 1.603884164835066e-7",
            "extra": "mean: 1.6751763481785509 usec\nrounds: 73525"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 533324.5025118229,
            "unit": "iter/sec",
            "range": "stddev: 1.6374679457119324e-7",
            "extra": "mean: 1.8750310463709319 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2395493.8683775766,
            "unit": "iter/sec",
            "range": "stddev: 1.720428968242112e-8",
            "extra": "mean: 417.4504527858683 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1282638.9332604911,
            "unit": "iter/sec",
            "range": "stddev: 1.3753548959551376e-7",
            "extra": "mean: 779.6426368081484 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 615895.169285805,
            "unit": "iter/sec",
            "range": "stddev: 1.635541971494117e-7",
            "extra": "mean: 1.6236529361962766 usec\nrounds: 94340"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 701797.5842727927,
            "unit": "iter/sec",
            "range": "stddev: 8.876105623867939e-7",
            "extra": "mean: 1.4249122858355328 usec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2384734.949569829,
            "unit": "iter/sec",
            "range": "stddev: 1.5900914719815084e-8",
            "extra": "mean: 419.3338132527613 nsec\nrounds: 119048"
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
          "id": "17db232d2f95a923535c40992da2031869b79fcc",
          "message": "Merge pull request #137 from sett-and-hive/renovate/returntocorp-semgrep-0.x\n\nUpdate pre-commit hook returntocorp/semgrep to v0.104.0",
          "timestamp": "2022-07-13T21:18:23-05:00",
          "tree_id": "a970ef01fc4c1b06b0af9e64b6554ad57ecf40e9",
          "url": "https://github.com/sett-and-hive/asciize/commit/17db232d2f95a923535c40992da2031869b79fcc"
        },
        "date": 1657765168749,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 888756.9425638595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013716077428818473",
            "extra": "mean: 1.1251670193599048 usec\nrounds: 70423"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 459566.23171377525,
            "unit": "iter/sec",
            "range": "stddev: 0.000020476670958487112",
            "extra": "mean: 2.175964922990284 usec\nrounds: 78741"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 459390.153859929,
            "unit": "iter/sec",
            "range": "stddev: 0.000006346884734862856",
            "extra": "mean: 2.1767989400680676 usec\nrounds: 100000"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1963320.925716789,
            "unit": "iter/sec",
            "range": "stddev: 0.000001762352971647541",
            "extra": "mean: 509.34107964794146 nsec\nrounds: 119048"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1520471.3453048505,
            "unit": "iter/sec",
            "range": "stddev: 7.900432495288579e-7",
            "extra": "mean: 657.690789825331 nsec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 528486.1373998837,
            "unit": "iter/sec",
            "range": "stddev: 0.000005612975182445372",
            "extra": "mean: 1.8921972200064374 usec\nrounds: 100000"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 577054.9313624086,
            "unit": "iter/sec",
            "range": "stddev: 0.000007156436417784558",
            "extra": "mean: 1.7329372745139382 usec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2053687.313960113,
            "unit": "iter/sec",
            "range": "stddev: 7.778080095458359e-7",
            "extra": "mean: 486.9290437754476 nsec\nrounds: 140846"
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
          "id": "2b0afd771ae44f2dfb476faa86c842c33a50435d",
          "message": "Merge pull request #144 from sett-and-hive/issue/133/no-semgrep-pre-commit-ci\n\nTake semgrep out of pre-commit",
          "timestamp": "2022-07-13T21:45:19-05:00",
          "tree_id": "0ff3bda4240f7ea401cbc2eb58f775c994d00a52",
          "url": "https://github.com/sett-and-hive/asciize/commit/2b0afd771ae44f2dfb476faa86c842c33a50435d"
        },
        "date": 1657766790478,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 818021.0290185842,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023154513950076492",
            "extra": "mean: 1.2224624606530519 usec\nrounds: 62894"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 479794.5312483673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045517736906831205",
            "extra": "mean: 2.0842255066937114 usec\nrounds: 82645"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 396812.052183369,
            "unit": "iter/sec",
            "range": "stddev: 0.000010864516795897649",
            "extra": "mean: 2.5200847466646366 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1289605.1311257908,
            "unit": "iter/sec",
            "range": "stddev: 0.000003943239442315976",
            "extra": "mean: 775.4311578514166 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1028497.5719644596,
            "unit": "iter/sec",
            "range": "stddev: 0.000005429610762065765",
            "extra": "mean: 972.292037685584 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 496807.78727524343,
            "unit": "iter/sec",
            "range": "stddev: 0.000009446711297379479",
            "extra": "mean: 2.0128508964896237 usec\nrounds: 90910"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 546306.4598970747,
            "unit": "iter/sec",
            "range": "stddev: 0.000014988770954274028",
            "extra": "mean: 1.8304744194099445 usec\nrounds: 120482"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1743130.2815943111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015300027189937406",
            "extra": "mean: 573.6805851855385 nsec\nrounds: 90091"
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
          "id": "66fc116cb941c04a28ecbfabab63e66db16c8596",
          "message": "Merge pull request #140 from sett-and-hive/pre-commit-ci-update-config\n\n[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2022-07-13T21:57:52-05:00",
          "tree_id": "7f6b6a22f1a6c6a922e932ef5b855014c357b790",
          "url": "https://github.com/sett-and-hive/asciize/commit/66fc116cb941c04a28ecbfabab63e66db16c8596"
        },
        "date": 1657767527383,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 918523.6641746849,
            "unit": "iter/sec",
            "range": "stddev: 5.351126211534331e-7",
            "extra": "mean: 1.0887035783650967 usec\nrounds: 69445"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 504216.68599500833,
            "unit": "iter/sec",
            "range": "stddev: 5.855987395215271e-7",
            "extra": "mean: 1.9832743099856474 usec\nrounds: 96154"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 549229.244048368,
            "unit": "iter/sec",
            "range": "stddev: 7.369458346758536e-7",
            "extra": "mean: 1.8207333473887908 usec\nrounds: 90091"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2288318.8547319355,
            "unit": "iter/sec",
            "range": "stddev: 2.410401773133034e-7",
            "extra": "mean: 437.00203664030903 nsec\nrounds: 120468"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1241285.3053470796,
            "unit": "iter/sec",
            "range": "stddev: 8.884735410582069e-7",
            "extra": "mean: 805.6165618752626 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 626968.3313273643,
            "unit": "iter/sec",
            "range": "stddev: 6.972472475658919e-7",
            "extra": "mean: 1.5949768912297126 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 657627.6625010933,
            "unit": "iter/sec",
            "range": "stddev: 5.375852362090626e-7",
            "extra": "mean: 1.5206172991519156 usec\nrounds: 113624"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2342330.4346978576,
            "unit": "iter/sec",
            "range": "stddev: 8.88992736697253e-8",
            "extra": "mean: 426.9252472610205 nsec\nrounds: 105253"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "872469a0c346c682cdde7dc0b5815b2a8af3c7d5",
          "message": "Update actions/setup-python digest to c4e89fa",
          "timestamp": "2022-07-14T05:29:21Z",
          "tree_id": "a6192dcfe86448bb7c3b7edbb9641c18c55f47d3",
          "url": "https://github.com/sett-and-hive/asciize/commit/872469a0c346c682cdde7dc0b5815b2a8af3c7d5"
        },
        "date": 1657776626874,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 869764.3368050253,
            "unit": "iter/sec",
            "range": "stddev: 0.00000308481329291259",
            "extra": "mean: 1.1497367248620238 usec\nrounds: 70922"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 539439.6789336358,
            "unit": "iter/sec",
            "range": "stddev: 0.000005264141771117158",
            "extra": "mean: 1.8537753877816323 usec\nrounds: 79359"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 445022.83282133297,
            "unit": "iter/sec",
            "range": "stddev: 0.000012554729694084158",
            "extra": "mean: 2.247075714430766 usec\nrounds: 38315"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1410259.2336096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012429349209643032",
            "extra": "mean: 709.0894894837672 nsec\nrounds: 48542"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1103183.6283783654,
            "unit": "iter/sec",
            "range": "stddev: 0.000002965023451042026",
            "extra": "mean: 906.4674042253135 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 542956.4550006655,
            "unit": "iter/sec",
            "range": "stddev: 0.000016378949939845638",
            "extra": "mean: 1.8417683237577023 usec\nrounds: 93458"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 619211.2592576118,
            "unit": "iter/sec",
            "range": "stddev: 0.000005914417671272847",
            "extra": "mean: 1.614957714430008 usec\nrounds: 138889"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1559821.0116670525,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011186695879132632",
            "extra": "mean: 641.0991982543267 nsec\nrounds: 52632"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "ad3149fd4ff7c3e509a7cf5e1d463505f7b233eb",
          "message": "Update github/codeql-action digest to 3e7e3b3",
          "timestamp": "2022-07-14T12:58:34Z",
          "tree_id": "d8dba650bff456ca4b876f5e4edf96ab0699d049",
          "url": "https://github.com/sett-and-hive/asciize/commit/ad3149fd4ff7c3e509a7cf5e1d463505f7b233eb"
        },
        "date": 1657803572691,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 957231.8821097477,
            "unit": "iter/sec",
            "range": "stddev: 1.0345830969537671e-7",
            "extra": "mean: 1.044678952602363 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 579617.4768083715,
            "unit": "iter/sec",
            "range": "stddev: 1.9151317415737253e-7",
            "extra": "mean: 1.7252757896577575 usec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 522887.2178955753,
            "unit": "iter/sec",
            "range": "stddev: 1.4491685310924962e-7",
            "extra": "mean: 1.9124583003283662 usec\nrounds: 125001"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2262196.712249119,
            "unit": "iter/sec",
            "range": "stddev: 1.838562633828027e-8",
            "extra": "mean: 442.04820676513265 nsec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1628677.17971933,
            "unit": "iter/sec",
            "range": "stddev: 2.1130084091017576e-8",
            "extra": "mean: 613.9952179916504 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 588998.2004761094,
            "unit": "iter/sec",
            "range": "stddev: 1.4121698504948865e-7",
            "extra": "mean: 1.6977980564145398 usec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 654883.5387142411,
            "unit": "iter/sec",
            "range": "stddev: 1.4239326893669789e-7",
            "extra": "mean: 1.5269890612357424 usec\nrounds: 172414"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2254832.904319055,
            "unit": "iter/sec",
            "range": "stddev: 1.4399678014992283e-8",
            "extra": "mean: 443.4918428255115 nsec\nrounds: 109891"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "0ed0adcd1d7dc9ed1448a7c7260dcc1619663756",
          "message": "Update github/codeql-action action to v2.1.16",
          "timestamp": "2022-07-14T17:04:06Z",
          "tree_id": "54229f4b0a2fe86f9f3015a457e36642953a0780",
          "url": "https://github.com/sett-and-hive/asciize/commit/0ed0adcd1d7dc9ed1448a7c7260dcc1619663756"
        },
        "date": 1657818308911,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 966530.9283556247,
            "unit": "iter/sec",
            "range": "stddev: 1.2197056738910062e-7",
            "extra": "mean: 1.0346280399959022 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 572118.8040340202,
            "unit": "iter/sec",
            "range": "stddev: 4.7504189915793464e-7",
            "extra": "mean: 1.747888712884425 usec\nrounds: 83334"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 520666.4756330402,
            "unit": "iter/sec",
            "range": "stddev: 1.646223313047573e-7",
            "extra": "mean: 1.920615301348475 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2248931.2575199646,
            "unit": "iter/sec",
            "range": "stddev: 3.016235328167747e-8",
            "extra": "mean: 444.6556543943697 nsec\nrounds: 107527"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1269968.4671253467,
            "unit": "iter/sec",
            "range": "stddev: 1.0948893304356579e-7",
            "extra": "mean: 787.4211257099657 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 595246.3573823645,
            "unit": "iter/sec",
            "range": "stddev: 1.9895706292936933e-7",
            "extra": "mean: 1.6799766812476884 usec\nrounds: 103093"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 677468.3924639003,
            "unit": "iter/sec",
            "range": "stddev: 2.2792821981227694e-7",
            "extra": "mean: 1.4760836241571023 usec\nrounds: 161317"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2257605.3193414356,
            "unit": "iter/sec",
            "range": "stddev: 2.7142136487212927e-8",
            "extra": "mean: 442.9472199737025 nsec\nrounds: 109891"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "3d12af66d2055cf850a6a23837be626a8be87685",
          "message": "Update pre-commit hook asottile/pyupgrade to v2.37.2",
          "timestamp": "2022-07-19T19:19:57Z",
          "tree_id": "cb9e207a0b629aad19543ced2543250caaffcd87",
          "url": "https://github.com/sett-and-hive/asciize/commit/3d12af66d2055cf850a6a23837be626a8be87685"
        },
        "date": 1658258455711,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1002948.707793611,
            "unit": "iter/sec",
            "range": "stddev: 1.3986090076036117e-7",
            "extra": "mean: 997.0599615207664 nsec\nrounds: 68494"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 595835.6666967398,
            "unit": "iter/sec",
            "range": "stddev: 1.9864861623141346e-7",
            "extra": "mean: 1.6783151058141776 usec\nrounds: 77520"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 543013.0016131806,
            "unit": "iter/sec",
            "range": "stddev: 4.628372018641516e-7",
            "extra": "mean: 1.8415765313707118 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2374290.884278661,
            "unit": "iter/sec",
            "range": "stddev: 1.2293902209440972e-7",
            "extra": "mean: 421.1783849324999 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1295725.1892982037,
            "unit": "iter/sec",
            "range": "stddev: 1.4809992413382332e-7",
            "extra": "mean: 771.7685881692432 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 620622.2130649299,
            "unit": "iter/sec",
            "range": "stddev: 1.9745835131450494e-7",
            "extra": "mean: 1.6112861881973586 usec\nrounds: 94340"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 685735.6311872728,
            "unit": "iter/sec",
            "range": "stddev: 2.588357248606743e-7",
            "extra": "mean: 1.4582879385582084 usec\nrounds: 133334"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2400071.6687551397,
            "unit": "iter/sec",
            "range": "stddev: 2.4794951531085657e-8",
            "extra": "mean: 416.6542245462847 nsec\nrounds: 117634"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "d329430f48c8ff0ea575225920569325868fe737",
          "message": "Update pre-commit hook asottile/reorder_python_imports to v3.8.2",
          "timestamp": "2022-07-19T22:19:18Z",
          "tree_id": "05bfd36487d7588c79ae6c3a5fadc90e5278e68b",
          "url": "https://github.com/sett-and-hive/asciize/commit/d329430f48c8ff0ea575225920569325868fe737"
        },
        "date": 1658269210832,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 982665.4787206814,
            "unit": "iter/sec",
            "range": "stddev: 1.303232071912475e-7",
            "extra": "mean: 1.0176403075661986 usec\nrounds: 92593"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 560872.4709004196,
            "unit": "iter/sec",
            "range": "stddev: 1.8905635315346848e-7",
            "extra": "mean: 1.782936499619261 usec\nrounds: 81968"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 517220.56648504926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036079380795435533",
            "extra": "mean: 1.9334111301796153 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2269836.4927968346,
            "unit": "iter/sec",
            "range": "stddev: 2.4165566627523447e-7",
            "extra": "mean: 440.56036775053775 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1196756.7947518432,
            "unit": "iter/sec",
            "range": "stddev: 1.7067024067185362e-7",
            "extra": "mean: 835.5916627215455 nsec\nrounds: 181786"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 605115.3956378821,
            "unit": "iter/sec",
            "range": "stddev: 5.401433164731298e-7",
            "extra": "mean: 1.652577355011519 usec\nrounds: 96154"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 681668.7674299678,
            "unit": "iter/sec",
            "range": "stddev: 4.509064152895558e-7",
            "extra": "mean: 1.4669881440662256 usec\nrounds: 128206"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2391880.05825157,
            "unit": "iter/sec",
            "range": "stddev: 7.337749749022217e-8",
            "extra": "mean: 418.08116445943233 nsec\nrounds: 117634"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "27b12a3810bee5dd18cdc52d12b61d22c3010fb7",
          "message": "Update dependency mypy to ^0.971",
          "timestamp": "2022-07-20T00:57:55Z",
          "tree_id": "13f99adaec15e78ed8406f2402eae14d086c97cc",
          "url": "https://github.com/sett-and-hive/asciize/commit/27b12a3810bee5dd18cdc52d12b61d22c3010fb7"
        },
        "date": 1658278735887,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1030771.8593795896,
            "unit": "iter/sec",
            "range": "stddev: 1.3961779405687429e-7",
            "extra": "mean: 970.1467797169871 nsec\nrounds: 55866"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 575712.4387003846,
            "unit": "iter/sec",
            "range": "stddev: 1.5113785585099065e-7",
            "extra": "mean: 1.7369782773104638 usec\nrounds: 76924"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 525576.5600735482,
            "unit": "iter/sec",
            "range": "stddev: 2.1614301368971008e-7",
            "extra": "mean: 1.9026723715762017 usec\nrounds: 95239"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2395250.3668411444,
            "unit": "iter/sec",
            "range": "stddev: 5.525499726762274e-8",
            "extra": "mean: 417.49289086605893 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1325011.0148417982,
            "unit": "iter/sec",
            "range": "stddev: 1.860049902731314e-7",
            "extra": "mean: 754.7107071554394 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 618423.6103940881,
            "unit": "iter/sec",
            "range": "stddev: 2.0818610924592244e-7",
            "extra": "mean: 1.6170145886939113 usec\nrounds: 106383"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 684461.3655196289,
            "unit": "iter/sec",
            "range": "stddev: 1.5796329207406945e-7",
            "extra": "mean: 1.4610028416152032 usec\nrounds: 129854"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2402466.542137809,
            "unit": "iter/sec",
            "range": "stddev: 1.660217498044946e-8",
            "extra": "mean: 416.2388871858631 nsec\nrounds: 117648"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "8992fe2709a10dee3ae6698c0afeed9c13141d8f",
          "message": "Update step-security/harden-runner digest to 1247074",
          "timestamp": "2022-07-26T20:51:20Z",
          "tree_id": "df35da5ae91728ba72d4aebb0a22fdb4a82addfb",
          "url": "https://github.com/sett-and-hive/asciize/commit/8992fe2709a10dee3ae6698c0afeed9c13141d8f"
        },
        "date": 1658868742820,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 899283.2121891385,
            "unit": "iter/sec",
            "range": "stddev: 4.1303360637304495e-7",
            "extra": "mean: 1.111996739676353 usec\nrounds: 64103"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 502816.0983886688,
            "unit": "iter/sec",
            "range": "stddev: 5.384947350962625e-7",
            "extra": "mean: 1.9887986944026126 usec\nrounds: 78125"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 481151.14768570405,
            "unit": "iter/sec",
            "range": "stddev: 6.077327408412611e-7",
            "extra": "mean: 2.07834898619678 usec\nrounds: 86949"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2048837.488046385,
            "unit": "iter/sec",
            "range": "stddev: 9.65731361064704e-8",
            "extra": "mean: 488.08165890879053 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1145987.9456311932,
            "unit": "iter/sec",
            "range": "stddev: 4.0681096145213133e-7",
            "extra": "mean: 872.6095277112316 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 536262.6024281209,
            "unit": "iter/sec",
            "range": "stddev: 7.500547870249643e-7",
            "extra": "mean: 1.8647580410644746 usec\nrounds: 93458"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 604340.0945333637,
            "unit": "iter/sec",
            "range": "stddev: 5.575442418193677e-7",
            "extra": "mean: 1.6546974278980147 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1985283.3136910014,
            "unit": "iter/sec",
            "range": "stddev: 8.640576142591604e-8",
            "extra": "mean: 503.7064448707412 nsec\nrounds: 50001"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "7643a47e4dbf88c921b0a9dcae6f82da6fbde75d",
          "message": "Update pre-commit hook asottile/pyupgrade to v2.37.3",
          "timestamp": "2022-07-26T22:51:44Z",
          "tree_id": "c587b2a7145f19239d3fe12b25d7691fa56d42bc",
          "url": "https://github.com/sett-and-hive/asciize/commit/7643a47e4dbf88c921b0a9dcae6f82da6fbde75d"
        },
        "date": 1658875966978,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 895918.3325335173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018494652359025767",
            "extra": "mean: 1.116173164100969 usec\nrounds: 65360"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 567935.2669750801,
            "unit": "iter/sec",
            "range": "stddev: 0.000003005256210061443",
            "extra": "mean: 1.7607640485616787 usec\nrounds: 44844"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 470208.1111408317,
            "unit": "iter/sec",
            "range": "stddev: 0.000004102199388850637",
            "extra": "mean: 2.126717885775668 usec\nrounds: 103093"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1960381.891366663,
            "unit": "iter/sec",
            "range": "stddev: 6.992574257347958e-7",
            "extra": "mean: 510.1046915418478 nsec\nrounds: 106383"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1401951.602468049,
            "unit": "iter/sec",
            "range": "stddev: 5.919008557799405e-7",
            "extra": "mean: 713.2913848378462 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 541813.4397076882,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028764756216744943",
            "extra": "mean: 1.8456537374552877 usec\nrounds: 93458"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 620555.1938413217,
            "unit": "iter/sec",
            "range": "stddev: 0.000003441521153583422",
            "extra": "mean: 1.611460205191198 usec\nrounds: 133334"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1910096.7275528763,
            "unit": "iter/sec",
            "range": "stddev: 4.801535272724966e-7",
            "extra": "mean: 523.5336962652578 nsec\nrounds: 114943"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "1b166d6acee81ba1d5a69fbe989a041e0e5feeb9",
          "message": "Update github/codeql-action digest to 0c670bb",
          "timestamp": "2022-07-28T23:36:21Z",
          "tree_id": "60044dbc17fcacc4a4e43548b9ad75b2f756e342",
          "url": "https://github.com/sett-and-hive/asciize/commit/1b166d6acee81ba1d5a69fbe989a041e0e5feeb9"
        },
        "date": 1659051433401,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1028930.2842529035,
            "unit": "iter/sec",
            "range": "stddev: 9.957415766534258e-8",
            "extra": "mean: 971.8831443726924 nsec\nrounds: 74622"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 585029.6753191915,
            "unit": "iter/sec",
            "range": "stddev: 2.86950273207946e-7",
            "extra": "mean: 1.709315000908973 usec\nrounds: 81968"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 538660.1170648546,
            "unit": "iter/sec",
            "range": "stddev: 1.726558482721181e-7",
            "extra": "mean: 1.8564582160806238 usec\nrounds: 104167"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2389381.014221056,
            "unit": "iter/sec",
            "range": "stddev: 2.006879135226257e-8",
            "extra": "mean: 418.51843387397975 nsec\nrounds: 117634"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1321243.9372424448,
            "unit": "iter/sec",
            "range": "stddev: 1.0677678916742429e-7",
            "extra": "mean: 756.8625079840216 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 627607.8661925402,
            "unit": "iter/sec",
            "range": "stddev: 1.5010246478200672e-7",
            "extra": "mean: 1.5933516035524258 usec\nrounds: 84746"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 710316.2419878095,
            "unit": "iter/sec",
            "range": "stddev: 1.6662217704199762e-7",
            "extra": "mean: 1.4078236437358025 usec\nrounds: 121952"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2394154.188033035,
            "unit": "iter/sec",
            "range": "stddev: 1.56204234920927e-8",
            "extra": "mean: 417.68404265640476 nsec\nrounds: 117648"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "11d89b0bb9c41dd9908056644c6507fa67e39cea",
          "message": "Update github/codeql-action action to v2.1.17",
          "timestamp": "2022-07-29T01:32:06Z",
          "tree_id": "23ce2869ba51705fd395e2b4a35e7006bed2ac8f",
          "url": "https://github.com/sett-and-hive/asciize/commit/11d89b0bb9c41dd9908056644c6507fa67e39cea"
        },
        "date": 1659058380222,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1014197.5322128069,
            "unit": "iter/sec",
            "range": "stddev: 1.325310039936043e-7",
            "extra": "mean: 986.0012159743376 nsec\nrounds: 65790"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 590987.7358716313,
            "unit": "iter/sec",
            "range": "stddev: 1.750971971596675e-7",
            "extra": "mean: 1.6920824905530871 usec\nrounds: 76336"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 536786.9106430893,
            "unit": "iter/sec",
            "range": "stddev: 1.925131401436377e-7",
            "extra": "mean: 1.8629366330895911 usec\nrounds: 95239"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2369650.921290347,
            "unit": "iter/sec",
            "range": "stddev: 1.7827620422403648e-7",
            "extra": "mean: 422.0030853558821 nsec\nrounds: 114930"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1752402.573467227,
            "unit": "iter/sec",
            "range": "stddev: 2.259392014911949e-8",
            "extra": "mean: 570.6451332248348 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 628369.0135522392,
            "unit": "iter/sec",
            "range": "stddev: 1.5199757400856988e-7",
            "extra": "mean: 1.5914215666792513 usec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 692686.5716401516,
            "unit": "iter/sec",
            "range": "stddev: 1.544119573336475e-7",
            "extra": "mean: 1.4436543755023112 usec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1595907.0011121545,
            "unit": "iter/sec",
            "range": "stddev: 1.4335896754666862e-7",
            "extra": "mean: 626.6029281801011 nsec\nrounds: 82645"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "058616e7922847571b1822131e6fb87e13ce6bb1",
          "message": "Update actions/setup-python digest to b55428b",
          "timestamp": "2022-08-02T20:27:03Z",
          "tree_id": "637d0e1d64f395301fce2ad83f2d20e92b9c6933",
          "url": "https://github.com/sett-and-hive/asciize/commit/058616e7922847571b1822131e6fb87e13ce6bb1"
        },
        "date": 1659472081982,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 986605.4623447588,
            "unit": "iter/sec",
            "range": "stddev: 1.0981228229151098e-7",
            "extra": "mean: 1.01357638708325 usec\nrounds: 76924"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 584838.5909513442,
            "unit": "iter/sec",
            "range": "stddev: 1.715039116712446e-7",
            "extra": "mean: 1.7098734855600444 usec\nrounds: 76924"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 542107.2229701015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010196234110607615",
            "extra": "mean: 1.8446535254062688 usec\nrounds: 90910"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2251395.333611929,
            "unit": "iter/sec",
            "range": "stddev: 5.5205400434291294e-8",
            "extra": "mean: 444.1689938103824 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1752530.9665965093,
            "unit": "iter/sec",
            "range": "stddev: 1.960497579274066e-8",
            "extra": "mean: 570.6033268795625 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 616062.0075956573,
            "unit": "iter/sec",
            "range": "stddev: 2.2062406596147573e-7",
            "extra": "mean: 1.6232132280040459 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 713269.555047021,
            "unit": "iter/sec",
            "range": "stddev: 1.3764787713154053e-7",
            "extra": "mean: 1.401994509542857 usec\nrounds: 126583"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2391572.125386107,
            "unit": "iter/sec",
            "range": "stddev: 1.9621758558906277e-8",
            "extra": "mean: 418.1349955476818 nsec\nrounds: 119048"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "f050d7a7b9501b0d9f8afeb317150e9de116dc3c",
          "message": "Update github/codeql-action digest to 2ca79b6",
          "timestamp": "2022-08-03T22:37:05Z",
          "tree_id": "d10bbf1541f1b73986374ba3a80894ac450eefc8",
          "url": "https://github.com/sett-and-hive/asciize/commit/f050d7a7b9501b0d9f8afeb317150e9de116dc3c"
        },
        "date": 1659566280138,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1001625.3343076487,
            "unit": "iter/sec",
            "range": "stddev: 1.2459836752513578e-7",
            "extra": "mean: 998.3773031172658 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 573755.7404569408,
            "unit": "iter/sec",
            "range": "stddev: 2.3703455010542168e-7",
            "extra": "mean: 1.7429019519762832 usec\nrounds: 87712"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 543967.5283770738,
            "unit": "iter/sec",
            "range": "stddev: 1.8539493904692964e-7",
            "extra": "mean: 1.8383450258207477 usec\nrounds: 105253"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2371458.931092173,
            "unit": "iter/sec",
            "range": "stddev: 6.801897911054595e-8",
            "extra": "mean: 421.6813485100615 nsec\nrounds: 117634"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1763513.5634800189,
            "unit": "iter/sec",
            "range": "stddev: 2.168128591682206e-8",
            "extra": "mean: 567.0497923627242 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 624280.2374988381,
            "unit": "iter/sec",
            "range": "stddev: 2.2105667962801846e-7",
            "extra": "mean: 1.601844716415296 usec\nrounds: 98040"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 700287.5114319564,
            "unit": "iter/sec",
            "range": "stddev: 1.4712333668220279e-7",
            "extra": "mean: 1.427984911447568 usec\nrounds: 135136"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2391997.3714783713,
            "unit": "iter/sec",
            "range": "stddev: 1.6874501495719534e-8",
            "extra": "mean: 418.0606600676447 nsec\nrounds: 114943"
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
          "id": "f1de39e663e9fc29d6d55ec10e5034d87a82ce6a",
          "message": "Merge pull request #159 from sett-and-hive/tom-update-dependencies\n\nUpdate dependencies, finally flake8",
          "timestamp": "2022-08-03T18:06:53-05:00",
          "tree_id": "a977e94278228fd006939b8abd2129fb0438472a",
          "url": "https://github.com/sett-and-hive/asciize/commit/f1de39e663e9fc29d6d55ec10e5034d87a82ce6a"
        },
        "date": 1659568073601,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 932004.1180711959,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029671877931207837",
            "extra": "mean: 1.0729566324980657 usec\nrounds: 58477"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 550497.850596264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041718494641720835",
            "extra": "mean: 1.8165375194778035 usec\nrounds: 54052"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 475736.7024464172,
            "unit": "iter/sec",
            "range": "stddev: 0.000005739136922017452",
            "extra": "mean: 2.102003050968369 usec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2023326.2117717708,
            "unit": "iter/sec",
            "range": "stddev: 6.635897844060888e-7",
            "extra": "mean: 494.23567696673234 nsec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1162205.2179803092,
            "unit": "iter/sec",
            "range": "stddev: 0.000003403432925145147",
            "extra": "mean: 860.4332389229927 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 548428.3968408809,
            "unit": "iter/sec",
            "range": "stddev: 0.000004634384902511244",
            "extra": "mean: 1.8233920886670218 usec\nrounds: 60976"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 629284.3372364083,
            "unit": "iter/sec",
            "range": "stddev: 0.000003643121242664867",
            "extra": "mean: 1.5891067691143284 usec\nrounds: 140846"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1975237.3053125262,
            "unit": "iter/sec",
            "range": "stddev: 5.423532647824548e-7",
            "extra": "mean: 506.2682834666299 nsec\nrounds: 106383"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "4f134d40b0effe54841fdbd9bcae7e3695356f90",
          "message": "Update github/codeql-action action to v2.1.18",
          "timestamp": "2022-08-04T01:39:01Z",
          "tree_id": "43bbc8529ef4262efe86ee5bb1a6ad924acbac01",
          "url": "https://github.com/sett-and-hive/asciize/commit/4f134d40b0effe54841fdbd9bcae7e3695356f90"
        },
        "date": 1659577203027,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 808719.3841902451,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043555148470870236",
            "extra": "mean: 1.236522852733746 usec\nrounds: 72464"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 469823.7977208429,
            "unit": "iter/sec",
            "range": "stddev: 0.00000434623026327855",
            "extra": "mean: 2.1284575299316235 usec\nrounds: 44443"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 434374.8692782766,
            "unit": "iter/sec",
            "range": "stddev: 0.000006006093413223993",
            "extra": "mean: 2.302158966197842 usec\nrounds: 85471"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1919881.3221448448,
            "unit": "iter/sec",
            "range": "stddev: 8.153791226244049e-7",
            "extra": "mean: 520.8655287520018 nsec\nrounds: 97078"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1088848.145346892,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023745174459613074",
            "extra": "mean: 918.4017112702285 nsec\nrounds: 172385"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 495546.760875325,
            "unit": "iter/sec",
            "range": "stddev: 0.000006565509047865787",
            "extra": "mean: 2.0179730329255263 usec\nrounds: 67564"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 599118.6246942184,
            "unit": "iter/sec",
            "range": "stddev: 7.247383659360368e-7",
            "extra": "mean: 1.6691185330958216 usec\nrounds: 114930"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2021912.878858517,
            "unit": "iter/sec",
            "range": "stddev: 5.956359880720333e-8",
            "extra": "mean: 494.5811515699379 nsec\nrounds: 98040"
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
          "id": "9019ada49aaec7355e68ca45007ff0a5da4c429e",
          "message": "Merge pull request #158 from sett-and-hive/renovate/jumanjihouse-pre-commit-hooks-3.x\n\nUpdate pre-commit hook jumanjihouse/pre-commit-hooks to v3",
          "timestamp": "2022-09-01T12:33:00-05:00",
          "tree_id": "e1407f26cf3bb4028df71e164feef4ce27cd29dd",
          "url": "https://github.com/sett-and-hive/asciize/commit/9019ada49aaec7355e68ca45007ff0a5da4c429e"
        },
        "date": 1662053693361,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 968215.5809434209,
            "unit": "iter/sec",
            "range": "stddev: 1.1317252603331995e-7",
            "extra": "mean: 1.0328278326461227 usec\nrounds: 67568"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 579340.2003795792,
            "unit": "iter/sec",
            "range": "stddev: 3.175291648293048e-7",
            "extra": "mean: 1.7261015191847686 usec\nrounds: 41667"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 533091.2621612204,
            "unit": "iter/sec",
            "range": "stddev: 3.1939915223748767e-7",
            "extra": "mean: 1.8758514179089554 usec\nrounds: 66226"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2375486.3293793695,
            "unit": "iter/sec",
            "range": "stddev: 1.6707060092100908e-8",
            "extra": "mean: 420.96643017117833 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1291384.4362122416,
            "unit": "iter/sec",
            "range": "stddev: 1.0777778830462457e-7",
            "extra": "mean: 774.3627474194276 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 618724.446931108,
            "unit": "iter/sec",
            "range": "stddev: 3.1434058295608144e-7",
            "extra": "mean: 1.6162283629813408 usec\nrounds: 70423"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 683864.1217374619,
            "unit": "iter/sec",
            "range": "stddev: 3.061476817912133e-7",
            "extra": "mean: 1.4622787893292988 usec\nrounds: 117648"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2386158.9782106383,
            "unit": "iter/sec",
            "range": "stddev: 2.676771936448018e-8",
            "extra": "mean: 419.08356028722204 nsec\nrounds: 117648"
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
          "id": "9ffa84afd8ae6f68a7e13a8633044718b63b4d35",
          "message": "Merge pull request #168 from sett-and-hive/tom-dependencies\n\nFix the CI test build",
          "timestamp": "2022-09-01T17:19:59-05:00",
          "tree_id": "fec1ce5a0a09bafc4259ab6624d28da8e22a8630",
          "url": "https://github.com/sett-and-hive/asciize/commit/9ffa84afd8ae6f68a7e13a8633044718b63b4d35"
        },
        "date": 1662070861046,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 948571.984081102,
            "unit": "iter/sec",
            "range": "stddev: 1.027428209736527e-7",
            "extra": "mean: 1.0542162500916756 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 575549.3423952478,
            "unit": "iter/sec",
            "range": "stddev: 3.134175372901978e-7",
            "extra": "mean: 1.737470493560687 usec\nrounds: 60241"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 515051.3904804166,
            "unit": "iter/sec",
            "range": "stddev: 2.7601147740779047e-7",
            "extra": "mean: 1.9415538303221458 usec\nrounds: 96154"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2180276.081250109,
            "unit": "iter/sec",
            "range": "stddev: 1.6335713676088496e-8",
            "extra": "mean: 458.6575106699857 nsec\nrounds: 107527"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1584547.1770276595,
            "unit": "iter/sec",
            "range": "stddev: 3.33344231529212e-8",
            "extra": "mean: 631.0951257860764 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 595822.3923519461,
            "unit": "iter/sec",
            "range": "stddev: 2.7250995161512324e-7",
            "extra": "mean: 1.6783524970463186 usec\nrounds: 83334"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 669349.8089083381,
            "unit": "iter/sec",
            "range": "stddev: 2.530287254171344e-7",
            "extra": "mean: 1.4939871300343373 usec\nrounds: 151516"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2195142.7902451423,
            "unit": "iter/sec",
            "range": "stddev: 1.7184576825326205e-8",
            "extra": "mean: 455.5512308552769 nsec\nrounds: 107527"
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
          "id": "78880e11aa7d82c9d236f9b34e44ac22e056f3de",
          "message": "Merge pull request #169 from sett-and-hive/tom-update-pre-comit\n\nUpdate pre-commit to fix flake8-bugbear so Python 3.9 CI works",
          "timestamp": "2022-09-01T17:56:44-05:00",
          "tree_id": "7d2656d94db0f9c254ac48b75720ef378c76c420",
          "url": "https://github.com/sett-and-hive/asciize/commit/78880e11aa7d82c9d236f9b34e44ac22e056f3de"
        },
        "date": 1662073073545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 796575.5627281663,
            "unit": "iter/sec",
            "range": "stddev: 0.000005128032719864868",
            "extra": "mean: 1.2553736855485895 usec\nrounds: 66663"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 496523.1496984445,
            "unit": "iter/sec",
            "range": "stddev: 0.000005835294426639845",
            "extra": "mean: 2.014004786297143 usec\nrounds: 51814"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 398184.71039244044,
            "unit": "iter/sec",
            "range": "stddev: 0.00002314598975287932",
            "extra": "mean: 2.5113972834728537 usec\nrounds: 101011"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1750551.988986617,
            "unit": "iter/sec",
            "range": "stddev: 9.245001909555585e-7",
            "extra": "mean: 571.2483869611116 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1306397.7412993396,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017662454146068232",
            "extra": "mean: 765.4636627014625 nsec\nrounds: 70418"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 498085.04139269807,
            "unit": "iter/sec",
            "range": "stddev: 0.000004184432492779092",
            "extra": "mean: 2.0076892837494076 usec\nrounds: 59881"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 533169.7662573444,
            "unit": "iter/sec",
            "range": "stddev: 0.00001652213734040093",
            "extra": "mean: 1.8755752169138022 usec\nrounds: 129871"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1784161.7951660387,
            "unit": "iter/sec",
            "range": "stddev: 0.000001078488011891184",
            "extra": "mean: 560.4872846786793 nsec\nrounds: 89286"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "0eb8b690a3991d1da798829c0640e11185360706",
          "message": "Update github/codeql-action digest to b398f52",
          "timestamp": "2022-09-01T23:27:46Z",
          "tree_id": "293b5a1675b02c3ff929016aee34172f14171cd0",
          "url": "https://github.com/sett-and-hive/asciize/commit/0eb8b690a3991d1da798829c0640e11185360706"
        },
        "date": 1662074922260,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1000606.6224724455,
            "unit": "iter/sec",
            "range": "stddev: 6.86560193436005e-7",
            "extra": "mean: 999.3937452952824 nsec\nrounds: 69931"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 592636.323831427,
            "unit": "iter/sec",
            "range": "stddev: 3.717772143942278e-7",
            "extra": "mean: 1.6873754776537218 usec\nrounds: 51814"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 534505.6332623414,
            "unit": "iter/sec",
            "range": "stddev: 3.2690454257003735e-7",
            "extra": "mean: 1.8708876722150256 usec\nrounds: 94340"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2376601.203754351,
            "unit": "iter/sec",
            "range": "stddev: 1.8674187547065823e-8",
            "extra": "mean: 420.76895291466144 nsec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1729005.2901300713,
            "unit": "iter/sec",
            "range": "stddev: 3.725980661243321e-8",
            "extra": "mean: 578.3672298221128 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 624383.353074522,
            "unit": "iter/sec",
            "range": "stddev: 3.6999372487206e-7",
            "extra": "mean: 1.6015801751854957 usec\nrounds: 38023"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 686477.8668257063,
            "unit": "iter/sec",
            "range": "stddev: 3.218765556711315e-7",
            "extra": "mean: 1.4567112041412626 usec\nrounds: 104167"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2382748.861364645,
            "unit": "iter/sec",
            "range": "stddev: 2.0170815096314356e-8",
            "extra": "mean: 419.68333978225127 nsec\nrounds: 116280"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "51a3177b8570d2b6d282685729853b0a4a5f9ed5",
          "message": "Update step-security/harden-runner digest to e680f76",
          "timestamp": "2022-09-01T23:37:49Z",
          "tree_id": "937e56c92aa8240d1c464f9f4ecdf00ee8d8a19d",
          "url": "https://github.com/sett-and-hive/asciize/commit/51a3177b8570d2b6d282685729853b0a4a5f9ed5"
        },
        "date": 1662075523978,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1026840.700624945,
            "unit": "iter/sec",
            "range": "stddev: 1.7785897989266855e-7",
            "extra": "mean: 973.8608913645422 nsec\nrounds: 78126"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 581961.0354695987,
            "unit": "iter/sec",
            "range": "stddev: 3.1573615219322776e-7",
            "extra": "mean: 1.7183280993942756 usec\nrounds: 50759"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 523258.06892986386,
            "unit": "iter/sec",
            "range": "stddev: 3.1556862702036496e-7",
            "extra": "mean: 1.9111028751933825 usec\nrounds: 75752"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2376626.268974961,
            "unit": "iter/sec",
            "range": "stddev: 2.7866990286862306e-8",
            "extra": "mean: 420.76451525165135 nsec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1324870.2516352744,
            "unit": "iter/sec",
            "range": "stddev: 9.197962651794401e-8",
            "extra": "mean: 754.7908927426741 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 599177.2923921526,
            "unit": "iter/sec",
            "range": "stddev: 2.9863416382580237e-7",
            "extra": "mean: 1.6689551034345855 usec\nrounds: 64103"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 671258.5436389371,
            "unit": "iter/sec",
            "range": "stddev: 2.970015269400569e-7",
            "extra": "mean: 1.4897389530104657 usec\nrounds: 129854"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2389118.8481901186,
            "unit": "iter/sec",
            "range": "stddev: 1.949952338688904e-8",
            "extra": "mean: 418.56435930671216 nsec\nrounds: 116280"
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
          "id": "d801a625a10b685db7c826098ed4d26ce27da024",
          "message": "Merge pull request #170 from sett-and-hive/renovate/flake8-bandit-4.x\n\nUpdate dependency flake8-bandit to v4",
          "timestamp": "2022-09-01T18:45:35-05:00",
          "tree_id": "1528540808c576a6fe33860e818435664b188e2f",
          "url": "https://github.com/sett-and-hive/asciize/commit/d801a625a10b685db7c826098ed4d26ce27da024"
        },
        "date": 1662075991453,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 971456.831380462,
            "unit": "iter/sec",
            "range": "stddev: 1.6431475735975148e-7",
            "extra": "mean: 1.0293818188287147 usec\nrounds: 56498"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 570611.7064415403,
            "unit": "iter/sec",
            "range": "stddev: 3.054490498863825e-7",
            "extra": "mean: 1.752505230283864 usec\nrounds: 25907"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 509556.30713595153,
            "unit": "iter/sec",
            "range": "stddev: 4.550600142647542e-7",
            "extra": "mean: 1.9624916540051702 usec\nrounds: 93458"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2363804.536427677,
            "unit": "iter/sec",
            "range": "stddev: 1.4037964369978614e-8",
            "extra": "mean: 423.0468232838885 nsec\nrounds: 114930"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1279824.0012879546,
            "unit": "iter/sec",
            "range": "stddev: 1.5842822110414453e-7",
            "extra": "mean: 781.3574358612177 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 609078.2488927919,
            "unit": "iter/sec",
            "range": "stddev: 3.3996508046887364e-7",
            "extra": "mean: 1.6418251707688498 usec\nrounds: 59172"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 684439.5918604345,
            "unit": "iter/sec",
            "range": "stddev: 2.89313075865857e-7",
            "extra": "mean: 1.4610493196073204 usec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2370599.4992611897,
            "unit": "iter/sec",
            "range": "stddev: 1.4488190341057113e-8",
            "extra": "mean: 421.8342239215083 nsec\nrounds: 114943"
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
          "id": "da703d45196795296b40ec06970ed7eb2e38d8fe",
          "message": "Merge pull request #154 from sett-and-hive/pre-commit-ci-update-config\n\n[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2022-09-01T21:05:56-05:00",
          "tree_id": "1528540808c576a6fe33860e818435664b188e2f",
          "url": "https://github.com/sett-and-hive/asciize/commit/da703d45196795296b40ec06970ed7eb2e38d8fe"
        },
        "date": 1662084408590,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1009411.7520799271,
            "unit": "iter/sec",
            "range": "stddev: 1.4816435224787883e-7",
            "extra": "mean: 990.6760030675947 nsec\nrounds: 55553"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 593398.1038892531,
            "unit": "iter/sec",
            "range": "stddev: 3.795514023675706e-7",
            "extra": "mean: 1.685209294478352 usec\nrounds: 47168"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 538296.1351884287,
            "unit": "iter/sec",
            "range": "stddev: 3.318999094722402e-7",
            "extra": "mean: 1.8577135049464057 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2373953.217839218,
            "unit": "iter/sec",
            "range": "stddev: 2.225488124282555e-8",
            "extra": "mean: 421.23829251761873 nsec\nrounds: 113624"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1697529.8819127285,
            "unit": "iter/sec",
            "range": "stddev: 4.4431664325687857e-7",
            "extra": "mean: 589.0912499717324 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 603813.5714319006,
            "unit": "iter/sec",
            "range": "stddev: 3.5374712925914916e-7",
            "extra": "mean: 1.6561403176622407 usec\nrounds: 46295"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 682411.1791975942,
            "unit": "iter/sec",
            "range": "stddev: 4.3062542469980005e-7",
            "extra": "mean: 1.4653921718806528 usec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2386740.295580893,
            "unit": "iter/sec",
            "range": "stddev: 8.247400010083145e-8",
            "extra": "mean: 418.98148778519055 nsec\nrounds: 116280"
          }
        ]
      }
    ]
  }
}