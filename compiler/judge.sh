#! /usr/bin/env bash
cd /Users/Cheechyo/Documents/_WorkUniverse/PicassoOnlineJudge/compiler
python3 source.py < input00.txt > result00.txt 2> error00.txt; (diff result00.txt output00.txt > 00tmp && (echo 00PASS && cat result00.txt && echo && rm 00tmp) ) || (echo 00FAIL && cat result00.txt && echo && rm 00tmp);
python3 source.py < input01.txt > result01.txt 2> error01.txt; (diff result01.txt output01.txt > 01tmp && (echo 01PASS && cat result01.txt && echo && rm 01tmp) ) || (echo 01FAIL && cat result01.txt && echo && rm 01tmp);
python3 source.py < input02.txt > result02.txt 2> error02.txt; (diff result02.txt output02.txt > 02tmp && (echo 02PASS && cat result02.txt && echo && rm 02tmp) ) || (echo 02FAIL && cat result02.txt && echo && rm 02tmp);