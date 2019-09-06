#include <tommath.h>
#include <string>
#include <cheerp/types.h>
#include <cheerp/client.h>

class [[cheerp::jsexport]] BigInt
{
public:
	BigInt(client::String* s = NULL)
	{
		//initialize to 0
		wrapper(mp_init(&number));
		if (s == NULL)
			return;
		int radix = 10;
		int begin = 0;
		if (s->charCodeAt(0) == '0')
		{
			begin = 2;
			if (s->charCodeAt(1) == 'x')
				radix = 16;
			else if (s->charCodeAt(1) == 'b')
				radix = 2;
		}
		std::string S(*s);
		wrapper(mp_read_radix(&number, &S[0] + begin, radix));
	}
	client::String* toString(int radix = 0)
	{
		int dim = 0;
		wrapper(mp_radix_size(&number, radix, &dim));
		std::string S;
		S.resize(dim-1);
		wrapper(mp_toradix(&number, &S[0], radix));
		return new client::String(S.c_str());
	}
	static BigInt* add(const BigInt& a, const BigInt& b)
	{
		BigInt* res = new BigInt();
		wrapper(mp_add(&a.number, &b.number, &res->number));
		return res;
	}
	static BigInt* subtract(const BigInt& a, const BigInt& b)
	{
		BigInt* res = new BigInt();
		wrapper(mp_sub(&a.number, &b.number, &res->number));
		return res;
	}
	static BigInt* multiply(const BigInt* a, const BigInt* b)
	{
		BigInt* res = new BigInt();
		if (a == b)
			wrapper(mp_sqr(&a->number, &res->number));
		else
			wrapper(mp_mul(&a->number, &b->number, &res->number));
		return res;
	}
	static BigInt* exponentiate(const BigInt& a, const BigInt& b)
	{
		BigInt* res = new BigInt();
		int X = mp_get_int(&b.number);
		wrapper(mp_expt_d(&a.number, X, &res->number));
		return res;
	}
	static BigInt* divide(const BigInt& a, const BigInt& b)
	{
		BigInt* res = new BigInt();
		wrapper(mp_div(&a.number, &b.number, &res->number, NULL));
		return res;
	}
	static BigInt* remainder(const BigInt& a, const BigInt& b)
	{
		BigInt* res = new BigInt();
		wrapper(mp_div(&a.number, &b.number, NULL, &res->number));
		return res;
	}
private:
	static void wrapper(int error_code)
	{
	}
	mp_int number;
};
