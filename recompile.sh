cd libtommath &&
/opt/cheerp/bin/clang -target cheerp *.c -O3 -c &&
cd .. &&
/opt/cheerp/bin/clang++ -target cheerp -O3 BigInt.cpp -c -Ilibtommath &&
/opt/cheerp/bin/clang++ -target cheerp -O3 libtommath/*.bc BigInt.bc -o BigInt.js -cheerp-pretty-code
/opt/cheerp/bin/clang++ -target cheerp -O3 libtommath/*.bc BigInt.bc -o BigInt.min.js 
 rm -f libtommath/*.bc BigInt.bc 
