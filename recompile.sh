 rm -f libtommath/*.bc &&
cd libtommath &&
/opt/cheerp/bin/clang -target cheerp *.c -O3 -c &&
cd .. &&
/opt/cheerp/bin/clang++ -target cheerp -O3 C.cpp -c -Ilibtommath &&
/opt/cheerp/bin/clang++ -target cheerp -O3 libtommath/*.bc C.bc -o BigInt.js

