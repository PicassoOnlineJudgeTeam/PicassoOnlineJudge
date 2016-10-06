#! /usr/bin/env bash
cd /Users/Cheechyo/Documents/_WorkUniverse/PicassoOnlineJudge/compiler
python3 source.py < input00.txt > result00.txt 2> error00.txt; (diff result00.txt output00.txt > 00tmp && echo 00PASS && cat output00.txt && echo ) || echo 00FAIL && rm 00tmp;
python3 source.py < input01.txt > result01.txt 2> error01.txt; (diff result01.txt output01.txt > 01tmp && echo 01PASS && cat output01.txt && echo ) || echo 01FAIL && rm 01tmp;
python3 source.py < input02.txt > result02.txt 2> error02.txt; (diff result02.txt output02.txt > 02tmp && echo 02PASS && cat output02.txt && echo ) || echo 02FAIL && rm 02tmp;