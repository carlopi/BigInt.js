"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var __imul=Math.imul;
var __fround=Math.fround;
var _ZN6BigIntC2EPN6client6StringE=__ZN6BigIntC2EPN6client6StringE;
var _ZN6BigIntC1EPN6client6StringE=__ZN6BigIntC1EPN6client6StringE;
var _ZN6BigInt8toStringEi=__ZN6BigInt8toStringEi;
function BigInt(a0){
	this.i0=0;
	this.i1=0;
	this.i2=0;
	this.a3=nullArray;
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN6BigIntC1EPN6client6StringE(this,a0);
}
BigInt.prototype.toString=function (a0){
	return __ZN6BigInt8toStringEi(this,a0);
};
BigInt.add=function (a0,a1){
	return __ZN6BigInt3addERKS_S1_(a0,a1);
};
BigInt.subtract=function (a0,a1){
	return __ZN6BigInt8subtractERKS_S1_(a0,a1);
};
BigInt.multiply=function (a0,a1){
	return __ZN6BigInt8multiplyEPKS_S1_(a0,a1);
};
BigInt.exponentiate=function (a0,a1){
	return __ZN6BigInt12exponentiateERKS_S1_(a0,a1);
};
BigInt.divide=function (a0,a1){
	return __ZN6BigInt6divideERKS_S1_(a0,a1);
};
BigInt.remainder=function (a0,a1){
	return __ZN6BigInt9remainderERKS_S1_(a0,a1);
};
var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};
function _mp_add(La,Lb,Lc){
	var tmp0=0,Lcall=0;
	Lcall=La.i2|0;
	tmp0=Lb.i2|0;
	if((Lcall|0)===(tmp0|0)){
		Lc.i2=Lcall;
		Lcall=_s_mp_add(La,Lb,Lc)|0;
		return Lcall|0;
	}
	if((_mp_cmp_mag(La,Lb)|0|0)===-1){
		Lc.i2=tmp0;
		Lcall=_s_mp_sub(Lb,La,Lc)|0;
		return Lcall|0;
	}
	Lc.i2=Lcall;
	Lcall=_s_mp_sub(La,Lb,Lc)|0;
	return Lcall|0;
}
function _mp_add_d(La,Lb,Lc){
	var Lgeptoindexphi=0,Lcall=0,Lmu$p056=0,L$ppre=null,La_=null,Lsub$pi5=0,Lgeptoindexphi2=0,Lgeptoindex3=0;
	Lcall=La.i0|0;
	if((Lc.i1|0)<=(Lcall|0)){
		Lcall=_mp_grow(Lc,Lcall+1|0)|0;
		if((Lcall|0)!==0)return Lcall|0;
	}
	Lmu$p056=La.i2|0;
	a:if((Lmu$p056|0)===1){
		Lcall=La.i0|0;
		L$ppre=La.a3;
		if((Lcall|0)<=1)if(L$ppre[0]>>>0<Lb>>>0)break a;
		La_={i0:0,i1:0,i2:0,a3:nullArray};
		La_.i0=Lcall;
		La_.i1=La.i1|0;
		La_.a3=L$ppre;
		La_.i2=0;
		Lcall=_mp_sub_d(La_,Lb,Lc)|0;
		Lc.i2=1;
		Lmu$p056=Lc.i0|0;
		if((Lmu$p056|0)>0){
			L$ppre=Lc.a3;
			while(1){
				Lsub$pi5=Lmu$p056-1|0;
				if((L$ppre[Lsub$pi5]|0)===0){
					Lc.i0=Lsub$pi5;
					if((Lmu$p056|0)>1){
						Lmu$p056=Lsub$pi5;
						continue;
					}
					Lmu$p056=Lsub$pi5;
				}
				break;
			}
		}
		if((Lmu$p056|0)===0)Lc.i2=0;
		return Lcall|0;
	}
	Lcall=Lc.i0|0;
	L$ppre=Lc.a3;
	if((Lmu$p056|0)===0){
		if((La.i0|0)>0){
			La_=La.a3;
			Lgeptoindexphi2=0;
			Lgeptoindexphi=0;
			Lsub$pi5=0;
			Lmu$p056=Lb;
			while(1){
				Lmu$p056=(La_[Lgeptoindexphi]|0)+Lmu$p056|0;
				Lgeptoindex3=Lgeptoindexphi2+1|0;
				L$ppre[Lgeptoindexphi2]=Lmu$p056&268435455;
				Lgeptoindexphi2=Lsub$pi5+1|0;
				Lmu$p056>>>=28;
				if((Lgeptoindexphi2|0)<(La.i0|0)){
					Lsub$pi5=Lgeptoindexphi2;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					Lgeptoindexphi2=Lgeptoindex3;
					continue;
				}
				break;
			}
			Lgeptoindexphi2=Lsub$pi5+2|0;
		}else{
			Lgeptoindex3=0;
			Lgeptoindexphi2=1;
			Lmu$p056=Lb;
		}
		L$ppre[Lgeptoindex3]=Lmu$p056;
		Lc.i0=(La.i0|0)+1|0;
		Lmu$p056=Lgeptoindex3+1|0;
	}else{
		Lc.i0=1;
		if((La.i0|0)===1){
			La_=La.a3;
			L$ppre[0]=Lb-(La_[0]|0)|0;
			Lgeptoindexphi2=1;
			Lmu$p056=1;
		}else{
			L$ppre[0]=Lb;
			Lgeptoindexphi2=1;
			Lmu$p056=1;
		}
	}
	Lc.i2=0;
	Lgeptoindexphi2=Lcall-Lgeptoindexphi2|0;
	if((Lgeptoindexphi2|0)>0)while(1){
		L$ppre[Lmu$p056]=0;
		if((Lgeptoindexphi2|0)>1){
			Lmu$p056=Lmu$p056+1|0;
			Lgeptoindexphi2=Lgeptoindexphi2-1|0;
			continue;
		}
		break;
	}
	Lcall=Lc.i0|0;
	if((Lcall|0)>0)while(1){
		Lmu$p056=Lcall-1|0;
		if((L$ppre[Lmu$p056]|0)===0){
			Lc.i0=Lmu$p056;
			if((Lcall|0)>1){
				Lcall=Lmu$p056;
				continue;
			}
			Lcall=Lmu$p056;
		}
		break;
	}
	if((Lcall|0)===0){
		Lc.i2=0;
		return 0|0;
	}
	return 0|0;
}
function _mp_clear(La){
	var tmp0=null,Lgeptoindexphi=0,Lmul=0;
	tmp0=La.a3;
	if(tmp0.length!==1||tmp0!==nullArray||0!==0){
		if(tmp0.length!==1||tmp0!==nullArray||0!==0){
			Lmul=La.i1<<2;
			if((Lmul|0)!==0){
				Lgeptoindexphi=0;
				while(1){
					tmp0[Lgeptoindexphi]=0;
					Lmul=Lmul-1|0;
					if((Lmul|0)!==0){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						continue;
					}
					break;
				}
			}
		}
		La.a3=nullArray;
		La.i0=0;
		La.i1=0;
		La.i2=0;
	}
}
function _mp_clear_multi(Lmp){
	var Largs=null,Lnext_mp$p04=null;
	Largs=[nullObj];
	Largs[0]={d:arguments,o:_mp_clear_multi.length};
	if(Lmp!==null){
		Lnext_mp$p04=Lmp;
		while(1){
			_mp_clear(Lnext_mp$p04);
			Lnext_mp$p04=handleVAArg(Largs[0]);
			if(Lnext_mp$p04!==null)continue;
			break;
		}
	}
	Largs[0]=null;
}
function _mp_cmp(La,Lb){
	var Lcall=0;
	Lcall=La.i2|0;
	if((Lcall|0)===(Lb.i2|0)){
		if((Lcall|0)===1){
			Lcall=_mp_cmp_mag(Lb,La)|0;
			return Lcall|0;
		}
		Lcall=_mp_cmp_mag(La,Lb)|0;
		return Lcall|0;
	}
	return ((Lcall|0)===1? -1|0:1|0)|0;
}
function _mp_cmp_mag(La,Lb){
	var tmp0=0,tmp1=null,tmp2=null,Lgeptoindexphi2=0,tmp4=0,tmp5=0,Lsub=0,Ln$p025=0;
	tmp0=La.i0|0;
	Lsub=Lb.i0|0;
	if((tmp0|0)>(Lsub|0))return 1|0;
	if((tmp0|0)<(Lsub|0))return  -1|0;
	if((tmp0|0)<=0)return 0|0;
	tmp1=Lb.a3;
	Lsub=tmp0-1|0;
	tmp2=La.a3;
	Lgeptoindexphi2=Lsub;
	Ln$p025=0;
	while(1){
		tmp4=tmp2[Lgeptoindexphi2]|0;
		tmp5=tmp1[Lsub]|0;
		if(tmp4>>>0>tmp5>>>0)return 1|0;
		if(tmp4>>>0<tmp5>>>0)return  -1|0;
		Ln$p025=Ln$p025+1|0;
		if((Ln$p025|0)<(tmp0|0)){
			Lgeptoindexphi2=Lgeptoindexphi2-1|0;
			Lsub=Lsub-1|0;
			continue;
		}
		break;
	}
	return 0|0;
}
function _mp_copy(La,Lb){
	var tmp0=null,tmp1=null,Lgeptoindexphi=0,Lcall=0,Ln$p027=0,Lgeptoindex3=0;
	if(La===Lb)return 0|0;
	Lcall=La.i0|0;
	if((Lb.i1|0)<(Lcall|0)){
		Lcall=_mp_grow(Lb,Lcall)|0;
		if((Lcall|0)!==0)return Lcall|0;
		Lcall=La.i0|0;
	}
	tmp0=Lb.a3;
	if((Lcall|0)>0){
		tmp1=La.a3;
		Lcall=0;
		Lgeptoindexphi=0;
		Ln$p027=0;
		while(1){
			Lgeptoindex3=Lcall+1|0;
			tmp0[Lcall]=tmp1[Lgeptoindexphi]|0;
			Lcall=La.i0|0;
			Ln$p027=Ln$p027+1|0;
			if((Ln$p027|0)<(Lcall|0)){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				Lcall=Lgeptoindex3;
				continue;
			}
			break;
		}
	}else{
		Lgeptoindex3=0;
		Ln$p027=0;
	}
	Ln$p027=(Lb.i0|0)-Ln$p027|0;
	if((Ln$p027|0)>0){
		while(1){
			tmp0[Lgeptoindex3]=0;
			if((Ln$p027|0)>1){
				Ln$p027=Ln$p027-1|0;
				Lgeptoindex3=Lgeptoindex3+1|0;
				continue;
			}
			break;
		}
		Lcall=La.i0|0;
	}
	Lb.i0=Lcall;
	Lb.i2=La.i2|0;
	return 0|0;
}
function _mp_div_2(La,Lb){
	var tmp0=null,tmp1=null,Lr$p038=0,tmp3=0,Lcall=0,Lsub18=0,Lgeptoindexphi=0,Lgeptoindexphi3=0;
	Lcall=La.i0|0;
	if((Lb.i1|0)<(Lcall|0)){
		Lcall=_mp_grow(Lb,Lcall)|0;
		if((Lcall|0)!==0)return Lcall|0;
		Lcall=La.i0|0;
	}
	Lsub18=Lb.i0|0;
	Lb.i0=Lcall;
	tmp0=Lb.a3;
	if((Lcall|0)>0){
		tmp1=La.a3;
		Lgeptoindexphi3=Lcall;
		Lgeptoindexphi=Lcall;
		Lr$p038=0;
		while(1){
			Lgeptoindexphi3=Lgeptoindexphi3-1|0;
			Lgeptoindexphi=Lgeptoindexphi-1|0;
			tmp3=tmp1[Lgeptoindexphi]|0;
			tmp0[Lgeptoindexphi3]=tmp3>>>1|Lr$p038<<27;
			if((Lcall|0)>1){
				Lr$p038=tmp3&1;
				Lcall=Lcall-1|0;
				continue;
			}
			break;
		}
		Lcall=Lb.i0|0;
	}
	Lsub18=Lsub18-Lcall|0;
	if((Lsub18|0)>0){
		while(1){
			tmp0[Lcall]=0;
			if((Lsub18|0)>1){
				Lcall=Lcall+1|0;
				Lsub18=Lsub18-1|0;
				continue;
			}
			break;
		}
		Lcall=Lb.i0|0;
	}
	Lb.i2=La.i2|0;
	if((Lcall|0)>0)while(1){
		Lsub18=Lcall-1|0;
		if((tmp0[Lsub18]|0)===0){
			Lb.i0=Lsub18;
			if((Lcall|0)>1){
				Lcall=Lsub18;
				continue;
			}
			Lcall=Lsub18;
		}
		break;
	}
	if((Lcall|0)===0){
		Lb.i2=0;
		return 0|0;
	}
	return 0|0;
}
function _mp_div_2d(La,Lb,Lc){
	var Lsub=0,Lsub20=0,Lx$p033=0,Lr$p032=0,tmp4=0,Lcall=0,tmp6=null,Lsub21=0;
	Lcall=_mp_copy(La,Lc)|0;
	if((Lb|0)>0&&(Lcall|0)===0){
		if((Lb|0)>27)_mp_rshd(Lc,(Lb|0)/28|0);
		Lcall=(Lb|0)%28|0;
		if((Lcall|0)!==0){
			Lsub21=Lc.i0|0;
			if((Lsub21|0)>0){
				tmp6=Lc.a3;
				Lsub21=Lsub21-1|0;
				Lsub=(1<<Lcall)-1|0;
				Lsub20=28-Lcall|0;
				Lx$p033=Lsub21;
				Lr$p032=0;
				while(1){
					tmp4=tmp6[Lsub21]|0;
					tmp6[Lsub21]=tmp4>>>Lcall|Lr$p032<<Lsub20;
					if((Lx$p033|0)>0){
						Lx$p033=Lx$p033-1|0;
						Lr$p032=tmp4&Lsub;
						Lsub21=Lsub21-1|0;
						continue;
					}
					break;
				}
			}
		}
		Lcall=Lc.i0|0;
		if((Lcall|0)>0){
			tmp6=Lc.a3;
			while(1){
				Lsub21=Lcall-1|0;
				if((tmp6[Lsub21]|0)===0){
					Lc.i0=Lsub21;
					if((Lcall|0)>1){
						Lcall=Lsub21;
						continue;
					}
					Lcall=Lsub21;
				}
				break;
			}
		}
		if((Lcall|0)===0){
			Lc.i2=0;
			return 0|0;
		}
		return 0|0;
	}
	return Lcall|0;
}
function _mp_div_3(La,Lc,Ld,Md){
	var tmp0=0,tmp1=0,tmp2=0,Lix$p0104$pin=0,Lix$p0104=0,LorLow=0,tmp6=0,Ldiv$presult=null,L$p$pi=0,Lq$psroa$p0$p0=0,tmp10=null,Lsub$pi=0,Lw$psroa$p0$p0102=0,Lt$psroa$p0$p095=0,Lw$psroa$p13$p197=0,tmp15=0,tmp16=0,Ladd10=0;
	Ldiv$presult=new Int32Array(2);
	___udivti3(Ldiv$presult,0,268435456,0,3,0);
	tmp0=Ldiv$presult[0]|0;
	L$p$pi=La.i0|0;
	L$p$pi=(L$p$pi|0)<3?3|0:L$p$pi|0;
	Ldiv$presult=new Int32Array((L$p$pi<<2)/4|0);
	if((L$p$pi&1073741823|0)===0&&(Ldiv$presult.length===1&&Ldiv$presult===nullArray&&0===0))return  -2|0;
	Lq$psroa$p0$p0=La.i0|0;
	tmp1=La.i2|0;
	if((Lq$psroa$p0$p0|0)>0){
		tmp10=La.a3;
		Lsub$pi=tmp0&65535;
		tmp2=tmp0>>>16;
		Lix$p0104$pin=Lq$psroa$p0$p0;
		Lw$psroa$p0$p0102=0;
		while(1){
			Lix$p0104=Lix$p0104$pin-1|0;
			Lt$psroa$p0$p095=tmp10[Lix$p0104]|0;
			LorLow=Lt$psroa$p0$p095|Lw$psroa$p0$p0102<<28;
			Lw$psroa$p13$p197=Lw$psroa$p0$p0102>>>4;
			if((Lw$psroa$p13$p197|0)!==0||(Lw$psroa$p13$p197|0)===0&&LorLow>>>0>2){
				tmp15=LorLow>>>16;
				Lw$psroa$p0$p0102=(__imul(tmp15,tmp2)|0)+(__imul(Lw$psroa$p13$p197,tmp0)|0)|0;
				tmp15=__imul(tmp15,Lsub$pi)|0;
				Lt$psroa$p0$p095&=65535;
				tmp16=__imul(Lt$psroa$p0$p095,tmp2)|0;
				Ladd10=tmp15+tmp16|0;
				Lt$psroa$p0$p095=__imul(Lt$psroa$p0$p095,Lsub$pi)|0;
				tmp6=Ladd10<<16;
				tmp15=((tmp15>>>0>(tmp16^ -1)>>>0?Lw$psroa$p0$p0102+65536|0:Lw$psroa$p0$p0102|0)+(Ladd10>>>16)|0)+((tmp6>>>0>(Lt$psroa$p0$p095^ -1)>>>0?1:0)?1:0)|0;
				Lt$psroa$p0$p095=tmp15<<4|tmp6+Lt$psroa$p0$p095>>>28;
				tmp16=Lt$psroa$p0$p095^ -1;
				Ladd10=__imul(Lt$psroa$p0$p095,3)|0;
				Lw$psroa$p0$p0102=LorLow-Ladd10|0;
				tmp15>>>=28;
				Lw$psroa$p13$p197=((((Lw$psroa$p13$p197-tmp15|0)+(__imul(tmp15,-2)|0)|0)+((Lt$psroa$p0$p095>>>0>tmp16>>>0?1:0)<<31>>31)|0)+((Lt$psroa$p0$p095<<1>>>0>tmp16>>>0?1:0)<<31>>31)|0)+((LorLow>>>0<Ladd10>>>0?1:0)<<31>>31)|0;
				if((Lw$psroa$p13$p197|0)!==0||Lw$psroa$p0$p0102>>>0>2&&(Lw$psroa$p13$p197|0)===0)while(1){
					Lw$psroa$p13$p197=((Lw$psroa$p0$p0102>>>0<3?1:0)<<31>>31)+Lw$psroa$p13$p197|0;
					Lw$psroa$p0$p0102=Lw$psroa$p0$p0102-3|0;
					Lt$psroa$p0$p095=Lt$psroa$p0$p095+1|0;
					if((Lw$psroa$p13$p197|0)!==0||Lw$psroa$p0$p0102>>>0>2&&(Lw$psroa$p13$p197|0)===0)continue;
					break;
				}
			}else{
				Lw$psroa$p0$p0102=LorLow;
				Lt$psroa$p0$p095=0;
			}
			Ldiv$presult[Lix$p0104]=Lt$psroa$p0$p095;
			if((Lix$p0104$pin|0)>1){
				Lix$p0104$pin=Lix$p0104;
				continue;
			}
			break;
		}
	}else{
		Lw$psroa$p0$p0102=0;
	}
	if(Ld.length!==1||Ld!==nullArray||Md!==0)Ld[Md]=Lw$psroa$p0$p0102;
	if(Lc!==null){
		if((Lq$psroa$p0$p0|0)>0)while(1){
			Lsub$pi=Lq$psroa$p0$p0-1|0;
			if((Ldiv$presult[Lsub$pi]|0)===0){
				if((Lq$psroa$p0$p0|0)>1){
					Lq$psroa$p0$p0=Lsub$pi;
					continue;
				}
				Lq$psroa$p0$p0=Lsub$pi;
			}
			break;
		}
		Lsub$pi=Lc.i1|0;
		tmp10=Lc.a3;
		Lc.i0=Lq$psroa$p0$p0;
		Lc.i1=L$p$pi;
		Lc.i2=(Lq$psroa$p0$p0|0)===0?0|0:tmp1|0;
		Lc.a3=Ldiv$presult;
		Ldiv$presult=tmp10;
		L$p$pi=Lsub$pi;
	}
	if(Ldiv$presult.length===1&&Ldiv$presult===nullArray&&0===0)return 0|0;
	if(Ldiv$presult.length===1&&Ldiv$presult===nullArray&&0===0)return 0|0;
	L$p$pi<<=2;
	if((L$p$pi|0)===0)return 0|0;
	Lq$psroa$p0$p0=0;
	while(1){
		Ldiv$presult[Lq$psroa$p0$p0]=0;
		L$p$pi=L$p$pi-1|0;
		if((L$p$pi|0)===0)return 0|0;
		Lq$psroa$p0$p0=Lq$psroa$p0$p0+1|0;
		continue;
	}
}
function _mp_div(La,Lb,Lc,Ld){
	var Lx=null,Ly=null,Lt1=null,Lt2=null,tmp4=0,tmp5=0,Lsub55=0,Lsub140=0,Lzd_$p02$pi=0,Lq$psroa$p19$p2=null,Lgeptoindexphi=0,tmp11=null,L$ppre=0,Lq$p07$pi=0,Lsub=0,Lsub119=0,Lsub$pi106=0,Lcmp120=0,Lsub81=0,Ldiv$presult=null,Lsub88=0,L$ppre274=null,tmp22=null,Land=0,Lgeptoindexphi2=0;
	Lx={i0:0,i1:0,i2:0,a3:nullArray};
	Ly={i0:0,i1:0,i2:0,a3:nullArray};
	Lt1={i0:0,i1:0,i2:0,a3:nullArray};
	Lt2={i0:0,i1:0,i2:0,a3:nullArray};
	if((Lb.i0|0)!==0)if((_mp_cmp_mag(La,Lb)|0|0)===-1){
		if(Ld!==null)_mp_copy(La,Ld)|0;
		if(Lc!==null){
			Lc.i2=0;
			Lc.i0=0;
			Lzd_$p02$pi=Lc.i1|0;
			if((Lzd_$p02$pi|0)>0){
				Lq$psroa$p19$p2=Lc.a3;
				Lgeptoindexphi=0;
				while(1){
					Lq$psroa$p19$p2[Lgeptoindexphi]=0;
					if((Lzd_$p02$pi|0)>1){
						Lzd_$p02$pi=Lzd_$p02$pi-1|0;
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						continue;
					}
					break;
				}
			}
		}
	}else{
		Lzd_$p02$pi=(La.i0|0)+2|0;
		Lzd_$p02$pi=(Lzd_$p02$pi|0)<3?3|0:Lzd_$p02$pi|0;
		Lq$psroa$p19$p2=new Int32Array((Lzd_$p02$pi<<2)/4|0);
		if(!((Lzd_$p02$pi&1073741823|0)===0&&(Lq$psroa$p19$p2.length===1&&Lq$psroa$p19$p2===nullArray&&0===0))){
			Lgeptoindexphi=La.i0|0;
			tmp11=new Int32Array(32);
			Lt1.a3=tmp11;
			Lt1.i0=0;
			Lt1.i1=32;
			Lt1.i2=0;
			tmp11=new Int32Array(32);
			Lt2.a3=tmp11;
			Lt2.i0=0;
			Lt2.i1=32;
			Lt2.i2=0;
			if((_mp_init_copy(Lx,La)|0|0)===0){
				if((_mp_init_copy(Ly,Lb)|0|0)===0){
					tmp4=La.i2|0;
					tmp5=Lb.i2|0;
					Ly.i2=0;
					Lx.i2=0;
					L$ppre=Ly.i0|0;
					a:{
						b:{
							if((L$ppre|0)===0){
								Lq$p07$pi=0;
							}else{
								Ldiv$presult=Ly.a3;
								Lsub$pi106=L$ppre-1|0;
								Lq$p07$pi=Ldiv$presult[Lsub$pi106]|0;
								Lsub$pi106=__imul(Lsub$pi106,28)|0;
								if((Lq$p07$pi|0)!==0)while(1){
									Lq$p07$pi>>>=1;
									Lsub$pi106=Lsub$pi106+1|0;
									if((Lq$p07$pi|0)!==0)continue;
									break;
								}
								Lq$p07$pi=(Lsub$pi106|0)%28|0;
								if((Lq$p07$pi|0)>=27){
									Lsub=0;
									break b;
								}
							}
							Lsub=27-Lq$p07$pi|0;
							if((_mp_mul_2d(Lx,Lsub,Lx)|0|0)!==0)break a;
							if((_mp_mul_2d(Ly,Lsub,Ly)|0|0)!==0)break a;
							L$ppre=Ly.i0|0;
						}
						Lsub119=Lx.i0|0;
						Lsub55=L$ppre-1|0;
						Lq$p07$pi=Lsub119-1|0;
						Lsub$pi106=Lq$p07$pi-Lsub55|0;
						if((_mp_lshd(Ly,Lsub$pi106)|0|0)===0)while(1){
							if((_mp_cmp(Lx,Ly)|0|0)===-1){
								_mp_rshd(Ly,Lsub$pi106);
								Lsub$pi106=Lx.i0|0;
								if((Lsub119|0)>(L$ppre|0)){
									Lsub119=L$ppre-2|0;
									Lcmp120=(L$ppre|0)<2?1:0;
									Lsub81=(1-L$ppre|0)-1|0;
									Ldiv$presult=new Int32Array(2);
									while(1){
										if((Lq$p07$pi|0)>(Lsub$pi106|0)){
											Lsub88=Lq$p07$pi-1|0;
										}else{
											L$ppre274=Lx.a3;
											Lsub$pi106=L$ppre274[Lq$p07$pi]|0;
											tmp22=Ly.a3;
											Land=tmp22[Lsub55]|0;
											if((Lsub$pi106|0)===(Land|0)){
												Lq$psroa$p19$p2[Lq$p07$pi+Lsub81|0]=268435455;
												Lsub88=Lq$p07$pi-1|0;
											}else{
												Lsub88=Lq$p07$pi-1|0;
												___udivti3(Ldiv$presult,0,L$ppre274[Lsub88]|Lsub$pi106<<28,Lsub$pi106>>>4,Land,0);
												Lsub$pi106=Ldiv$presult[1]|0;
												Land=Ldiv$presult[0]|0;
												Lq$psroa$p19$p2[Lq$p07$pi+Lsub81|0]=(Lsub$pi106|0)!==0||(Lsub$pi106|0)===0&&Land>>>0>268435455?268435455|0:Land&268435455|0;
											}
											Lsub$pi106=(Lq$p07$pi-Lsub55|0)-1|0;
											Land=(Lq$psroa$p19$p2[Lsub$pi106]|0)+1&268435455;
											Lq$psroa$p19$p2[Lsub$pi106]=Land;
											Lsub140=Lq$p07$pi-2|0;
											if(Lcmp120)while(1){
												Lq$psroa$p19$p2[Lsub$pi106]=Land+268435455&268435455;
												Lt1.i2=0;
												Lt1.i0=0;
												Land=Lt1.i1|0;
												L$ppre274=Lt1.a3;
												if((Land|0)>0){
													Lgeptoindexphi2=0;
													while(1){
														L$ppre274[Lgeptoindexphi2]=0;
														if((Land|0)>1){
															Land=Land-1|0;
															Lgeptoindexphi2=Lgeptoindexphi2+1|0;
															continue;
														}
														break;
													}
												}
												L$ppre274[0]=0;
												tmp22=Ly.a3;
												L$ppre274[1]=tmp22[Lsub55]|0;
												Lt1.i0=2;
												if((_mp_mul_d(Lt1,Lq$psroa$p19$p2[Lsub$pi106]|0,Lt1)|0|0)!==0)break a;
												L$ppre274=Lx.a3;
												if((Lq$p07$pi|0)<2){
													Land=0;
												}else Land=L$ppre274[Lsub140]|0;
												tmp11[0]=Land;
												tmp11[1]=L$ppre274[Lsub88]|0;
												tmp11[2]=L$ppre274[Lq$p07$pi]|0;
												Lt2.i0=3;
												if((_mp_cmp_mag(Lt1,Lt2)|0|0)===1){
													Land=Lq$psroa$p19$p2[Lsub$pi106]|0;
													continue;
												}
												break;
											}
											else while(1){
												Lq$psroa$p19$p2[Lsub$pi106]=Land+268435455&268435455;
												Lt1.i2=0;
												Lt1.i0=0;
												Land=Lt1.i1|0;
												L$ppre274=Lt1.a3;
												if((Land|0)>0){
													Lgeptoindexphi2=0;
													while(1){
														L$ppre274[Lgeptoindexphi2]=0;
														if((Land|0)>1){
															Land=Land-1|0;
															Lgeptoindexphi2=Lgeptoindexphi2+1|0;
															continue;
														}
														break;
													}
												}
												tmp22=Ly.a3;
												L$ppre274[0]=tmp22[Lsub119]|0;
												L$ppre274[1]=tmp22[Lsub55]|0;
												Lt1.i0=2;
												if((_mp_mul_d(Lt1,Lq$psroa$p19$p2[Lsub$pi106]|0,Lt1)|0|0)!==0)break a;
												L$ppre274=Lx.a3;
												if((Lq$p07$pi|0)<2){
													Land=0;
												}else Land=L$ppre274[Lsub140]|0;
												tmp11[0]=Land;
												tmp11[1]=L$ppre274[Lsub88]|0;
												tmp11[2]=L$ppre274[Lq$p07$pi]|0;
												Lt2.i0=3;
												if((_mp_cmp_mag(Lt1,Lt2)|0|0)===1){
													Land=Lq$psroa$p19$p2[Lsub$pi106]|0;
													continue;
												}
												break;
											}
											if((_mp_mul_d(Ly,Lq$psroa$p19$p2[Lsub$pi106]|0,Lt1)|0|0)!==0)break a;
											if((_mp_lshd(Lt1,Lsub$pi106)|0|0)!==0)break a;
											if((_mp_sub(Lx,Lt1,Lx)|0|0)!==0)break a;
											if((Lx.i2|0)===1){
												if((_mp_copy(Ly,Lt1)|0|0)!==0)break a;
												if((_mp_lshd(Lt1,Lsub$pi106)|0|0)!==0)break a;
												if((_mp_add(Lx,Lt1,Lx)|0|0)!==0)break a;
												Lq$psroa$p19$p2[Lsub$pi106]=(Lq$psroa$p19$p2[Lsub$pi106]|0)+268435455&268435455;
											}
										}
										Lsub$pi106=Lx.i0|0;
										if((Lq$p07$pi|0)>(L$ppre|0)){
											Lq$p07$pi=Lsub88;
											continue;
										}
										break;
									}
								}
								if((Lsub$pi106|0)===0){
									L$ppre=0;
								}else L$ppre=La.i2|0;
								Lx.i2=L$ppre;
								if(Lc!==null){
									Lsub81=Lgeptoindexphi+2|0;
									if((Lgeptoindexphi|0)>-2)while(1){
										Lcmp120=Lsub81-1|0;
										if((Lq$psroa$p19$p2[Lcmp120]|0)===0){
											if((Lsub81|0)>1){
												Lsub81=Lcmp120;
												continue;
											}
											Lsub81=Lcmp120;
										}
										break;
									}
									Lgeptoindexphi=Lc.i1|0;
									tmp11=Lc.a3;
									Lc.i0=Lsub81;
									Lc.i1=Lzd_$p02$pi;
									Lc.a3=Lq$psroa$p19$p2;
									Lc.i2=((tmp4|0)!==(tmp5|0)?1:0)?1:0;
									Lzd_$p02$pi=Lgeptoindexphi;
									Lq$psroa$p19$p2=tmp11;
								}
								if(Ld!==null)if((_mp_div_2d(Lx,Lsub,Lx)|0|0)===0){
									Lgeptoindexphi=Lx.i0|0;
									L$ppre=Lx.i1|0;
									Lsub=Lx.i2|0;
									tmp11=Lx.a3;
									Lx.i0=Ld.i0|0;
									Lx.i1=Ld.i1|0;
									Lx.i2=Ld.i2|0;
									Ldiv$presult=Ld.a3;
									Lx.a3=Ldiv$presult;
									Ld.i0=Lgeptoindexphi;
									Ld.i1=L$ppre;
									Ld.i2=Lsub;
									Ld.a3=tmp11;
								}
							}else{
								Lq$psroa$p19$p2[Lsub$pi106]=(Lq$psroa$p19$p2[Lsub$pi106]|0)+1|0;
								if((_mp_sub(Lx,Ly,Lx)|0|0)===0)continue;
							}
							break;
						}
					}
					tmp11=Ly.a3;
					if(tmp11.length!==1||tmp11!==nullArray||0!==0){
						if(tmp11.length!==1||tmp11!==nullArray||0!==0){
							L$ppre=Ly.i1<<2;
							if((L$ppre|0)!==0){
								Lgeptoindexphi=0;
								while(1){
									tmp11[Lgeptoindexphi]=0;
									L$ppre=L$ppre-1|0;
									if((L$ppre|0)!==0){
										Lgeptoindexphi=Lgeptoindexphi+1|0;
										continue;
									}
									break;
								}
							}
						}
						Ly.a3=nullArray;
						Ly.i0=0;
						Ly.i1=0;
						Ly.i2=0;
					}
				}
				tmp11=Lx.a3;
				if(tmp11.length!==1||tmp11!==nullArray||0!==0){
					if(tmp11.length!==1||tmp11!==nullArray||0!==0){
						L$ppre=Lx.i1<<2;
						if((L$ppre|0)!==0){
							Lgeptoindexphi=0;
							while(1){
								tmp11[Lgeptoindexphi]=0;
								L$ppre=L$ppre-1|0;
								if((L$ppre|0)!==0){
									Lgeptoindexphi=Lgeptoindexphi+1|0;
									continue;
								}
								break;
							}
						}
					}
					Lx.a3=nullArray;
					Lx.i0=0;
					Lx.i1=0;
					Lx.i2=0;
				}
			}
			tmp11=Lt2.a3;
			if(tmp11.length!==1||tmp11!==nullArray||0!==0){
				if(tmp11.length!==1||tmp11!==nullArray||0!==0){
					L$ppre=Lt2.i1<<2;
					if((L$ppre|0)!==0){
						Lgeptoindexphi=0;
						while(1){
							tmp11[Lgeptoindexphi]=0;
							L$ppre=L$ppre-1|0;
							if((L$ppre|0)!==0){
								Lgeptoindexphi=Lgeptoindexphi+1|0;
								continue;
							}
							break;
						}
					}
				}
				Lt2.a3=nullArray;
				Lt2.i0=0;
				Lt2.i1=0;
				Lt2.i2=0;
			}
			tmp11=Lt1.a3;
			if(tmp11.length!==1||tmp11!==nullArray||0!==0){
				if(tmp11.length!==1||tmp11!==nullArray||0!==0){
					L$ppre=Lt1.i1<<2;
					if((L$ppre|0)!==0){
						Lgeptoindexphi=0;
						while(1){
							tmp11[Lgeptoindexphi]=0;
							L$ppre=L$ppre-1|0;
							if((L$ppre|0)!==0){
								Lgeptoindexphi=Lgeptoindexphi+1|0;
								continue;
							}
							break;
						}
					}
				}
				Lt1.a3=nullArray;
				Lt1.i0=0;
				Lt1.i1=0;
				Lt1.i2=0;
			}
			if(Lq$psroa$p19$p2.length!==1||Lq$psroa$p19$p2!==nullArray||0!==0)if(Lq$psroa$p19$p2.length!==1||Lq$psroa$p19$p2!==nullArray||0!==0){
				Lzd_$p02$pi<<=2;
				if((Lzd_$p02$pi|0)!==0){
					Lgeptoindexphi=0;
					while(1){
						Lq$psroa$p19$p2[Lgeptoindexphi]=0;
						Lzd_$p02$pi=Lzd_$p02$pi-1|0;
						if((Lzd_$p02$pi|0)!==0){
							Lgeptoindexphi=Lgeptoindexphi+1|0;
							continue;
						}
						break;
					}
				}
			}
		}
	}
}
function _mp_div_d(La,Lb,Lc,Ld,Md){
	var tmp0=0,tmp1=0,Lix$p184$pin=0,tmp3=null,Lix$p184=0,tmp5=0,tmp6=0,tmp7=0,tmp8=0,tmp9=0,Lcall=0,Lshl=0,Lq$psroa$p20$p2=null,Lsub$pi=0,Ldiv$presult=null,LorLow=0,Lw$psroa$p9$p0=0,Lt$p0=0,tmp18=0,tmp19=0;
	switch(Lb|0){
		case 0:
		return  -3|0;
		case 1:
		break;
		default:
		Lcall=La.i0|0;
		if((Lcall|0)!==0)if((Lb-1&Lb|0)===0){
			Lcall=1;
			while(1){
				Lshl=1<<Lcall;
				if(Lcall>>>0<28&&(Lshl|0)!==(Lb|0)){
					Lcall=Lcall+1|0;
					continue;
				}
				break;
			}
			if(Ld.length!==1||Ld!==nullArray||Md!==0){
				Lq$psroa$p20$p2=La.a3;
				Ld[Md]=Lq$psroa$p20$p2[0]&Lshl-1;
			}
			if(Lc===null)return 0|0;
			Lcall=_mp_div_2d(La,Lcall,Lc)|0;
			return Lcall|0;
		}else{
			if((Lb|0)===3){
				Lcall=_mp_div_3(La,Lc,Ld,Md)|0;
				return Lcall|0;
			}
			Lcall=(Lcall|0)<3?3|0:Lcall|0;
			Lq$psroa$p20$p2=new Int32Array((Lcall<<2)/4|0);
			if((Lcall&1073741823|0)===0&&(Lq$psroa$p20$p2.length===1&&Lq$psroa$p20$p2===nullArray&&0===0))return  -2|0;
			Lshl=La.i0|0;
			tmp0=La.i2|0;
			if((Lshl|0)>0){
				Lsub$pi=Lb&65535;
				tmp1=Lb>>>16;
				Ldiv$presult=new Int32Array(2);
				Lix$p184$pin=Lshl;
				Lw$psroa$p9$p0=0;
				LorLow=0;
				while(1){
					Lw$psroa$p9$p0=Lw$psroa$p9$p0<<28|LorLow>>>4;
					tmp3=La.a3;
					Lix$p184=Lix$p184$pin-1|0;
					LorLow=tmp3[Lix$p184]|LorLow<<28;
					if((Lw$psroa$p9$p0|0)!==0||(Lw$psroa$p9$p0|0)===0&&LorLow>>>0>=Lb>>>0){
						___udivti3(Ldiv$presult,0,LorLow,Lw$psroa$p9$p0,Lb,0);
						Lt$p0=Ldiv$presult[0]|0;
						tmp18=Lt$p0>>>16;
						tmp5=__imul(tmp18,tmp1)|0;
						tmp18=__imul(tmp18,Lsub$pi)|0;
						tmp19=Lt$p0&65535;
						tmp6=__imul(tmp19,tmp1)|0;
						tmp7=tmp18+tmp6|0;
						tmp19=__imul(tmp19,Lsub$pi)|0;
						tmp8=tmp7<<16;
						tmp9=tmp8+tmp19|0;
						Lw$psroa$p9$p0=(((Lw$psroa$p9$p0-(tmp18>>>0>(tmp6^ -1)>>>0?tmp5+65536|0:tmp5|0)|0)-(tmp7>>>16)|0)+((tmp8>>>0>(tmp19^ -1)>>>0?1:0)<<31>>31)|0)+((LorLow>>>0<tmp9>>>0?1:0)<<31>>31)|0;
						LorLow=LorLow-tmp9|0;
					}else{
						Lt$p0=0;
						Lw$psroa$p9$p0=0;
					}
					Lq$psroa$p20$p2[Lix$p184]=Lt$p0;
					if((Lix$p184$pin|0)>1){
						Lix$p184$pin=Lix$p184;
						continue;
					}
					break;
				}
			}else{
				LorLow=0;
			}
			if(Ld.length!==1||Ld!==nullArray||Md!==0)Ld[Md]=LorLow;
			if(Lc!==null){
				if((Lshl|0)>0)while(1){
					Lsub$pi=Lshl-1|0;
					if((Lq$psroa$p20$p2[Lsub$pi]|0)===0){
						if((Lshl|0)>1){
							Lshl=Lsub$pi;
							continue;
						}
						Lshl=Lsub$pi;
					}
					break;
				}
				Lsub$pi=Lc.i1|0;
				Ldiv$presult=Lc.a3;
				Lc.i0=Lshl;
				Lc.i1=Lcall;
				Lc.i2=(Lshl|0)===0?0|0:tmp0|0;
				Lc.a3=Lq$psroa$p20$p2;
				Lcall=Lsub$pi;
				Lq$psroa$p20$p2=Ldiv$presult;
			}
			if(Lq$psroa$p20$p2.length===1&&Lq$psroa$p20$p2===nullArray&&0===0)return 0|0;
			if(Lq$psroa$p20$p2.length===1&&Lq$psroa$p20$p2===nullArray&&0===0)return 0|0;
			Lcall<<=2;
			if((Lcall|0)===0)return 0|0;
			Lshl=0;
			while(1){
				Lq$psroa$p20$p2[Lshl]=0;
				Lcall=Lcall-1|0;
				if((Lcall|0)===0)return 0|0;
				Lshl=Lshl+1|0;
				continue;
			}
		}
	}
	if(Ld.length!==1||Ld!==nullArray||Md!==0)Ld[Md]=0;
	if(Lc===null)return 0|0;
	Lcall=_mp_copy(La,Lc)|0;
	return Lcall|0;
}
function _mp_expt_u32(La,Lb,Lc){
	var Lg=null,Lgeptoindexphi2=0,Lcall=0,tmp3=null,Lsub$pi=0;
	Lg={i0:0,i1:0,i2:0,a3:nullArray};
	Lcall=_mp_init_copy(Lg,La)|0;
	if((Lcall|0)===0){
		tmp3=Lc.a3;
		tmp3[0]=1;
		Lc.i2=0;
		Lcall=((tmp3[0]|0)!==0?1:0)?1:0;
		Lc.i0=Lcall;
		Lsub$pi=(Lc.i1|0)-Lcall|0;
		if((Lsub$pi|0)>0)while(1){
			tmp3[Lcall]=0;
			if((Lsub$pi|0)>1){
				Lcall=Lcall+1|0;
				Lsub$pi=Lsub$pi-1|0;
				continue;
			}
			break;
		}
		a:if((Lb|0)===0){
			Lcall=0;
		}else{
			Lsub$pi=Lb;
			while(1){
				if((Lsub$pi&1|0)!==0){
					Lcall=_mp_mul(Lc,Lg,Lc)|0;
					if((Lcall|0)!==0)break a;
				}
				if(Lsub$pi>>>0>1){
					Lcall=_mp_sqr(Lg,Lg)|0;
					if((Lcall|0)!==0)break a;
				}
				Lsub$pi>>>=1;
				if((Lsub$pi|0)!==0)continue;
				break;
			}
			Lcall=0;
		}
		tmp3=Lg.a3;
		if(tmp3.length===1&&tmp3===nullArray&&0===0)return Lcall|0;
		if(tmp3.length!==1||tmp3!==nullArray||0!==0){
			Lsub$pi=Lg.i1<<2;
			if((Lsub$pi|0)!==0){
				Lgeptoindexphi2=0;
				while(1){
					tmp3[Lgeptoindexphi2]=0;
					Lsub$pi=Lsub$pi-1|0;
					if((Lsub$pi|0)!==0){
						Lgeptoindexphi2=Lgeptoindexphi2+1|0;
						continue;
					}
					break;
				}
			}
		}
		Lg.a3=nullArray;
		Lg.i0=0;
		Lg.i1=0;
		Lg.i2=0;
		return Lcall|0;
	}
	return Lcall|0;
}
function _mp_grow(La,Lsize){
	var Lgeptoindexphi=0,tmp1=null,Lmul=0,Lsub=0;
	if((La.i1|0)>=(Lsize|0))return 0|0;
	tmp1=La.a3;
	Lmul=Lsize<<2;
	if(tmp1.length===1&&tmp1===nullArray&&0===0){
		tmp1=new Int32Array(Lmul/4|0);
	}else{
		tmp1=(function(){var __old__=tmp1;
			var __ret__=new Int32Array(Lmul/4|0);
			__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
			return __ret__;})();
	}
	if(tmp1.length===1&&tmp1===nullArray&&0===0)return  -2|0;
	La.a3=tmp1;
	Lmul=La.i1|0;
	La.i1=Lsize;
	Lsub=Lsize-Lmul|0;
	if((Lsub|0)<=0)return 0|0;
	Lgeptoindexphi=0;
	while(1){
		tmp1[(0+Lmul|0)+Lgeptoindexphi|0]=0;
		if((Lsub|0)>1){
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			Lsub=Lsub-1|0;
			continue;
		}
		break;
	}
	return 0|0;
}
function _mp_init_copy(La,Lb){
	var tmp0=null,L$p$pi=0;
	L$p$pi=Lb.i0|0;
	L$p$pi=(L$p$pi|0)<3?3|0:L$p$pi|0;
	tmp0=new Int32Array((L$p$pi<<2)/4|0);
	La.a3=tmp0;
	if((L$p$pi&1073741823|0)===0&&(tmp0.length===1&&tmp0===nullArray&&0===0))return  -2|0;
	La.i0=0;
	La.i1=L$p$pi;
	La.i2=0;
	L$p$pi=_mp_copy(Lb,La)|0;
	if((L$p$pi|0)===0)return 0|0;
	_mp_clear(La);
	return L$p$pi|0;
}
function _mp_init_multi(Lmp){
	var Largs=null,tmp1=null,Lcur_arg$p016=null;
	Largs=[nullObj];
	Largs[0]={d:arguments,o:_mp_init_multi.length};
	if(Lmp!==null){
		Lcur_arg$p016=Lmp;
		while(1){
			tmp1=new Int32Array(32);
			Lcur_arg$p016.a3=tmp1;
			Lcur_arg$p016.i0=0;
			Lcur_arg$p016.i1=32;
			Lcur_arg$p016.i2=0;
			Lcur_arg$p016=handleVAArg(Largs[0]);
			if(Lcur_arg$p016!==null)continue;
			break;
		}
	}
	Largs[0]=null;
	return 0|0;
}
function _mp_lshd(La,Lb){
	var tmp0=null,Lcall=0,Ladd=0,Lgeptoindex1=0;
	if((Lb|0)<1)return 0|0;
	Lcall=La.i0|0;
	if((Lcall|0)===0)return 0|0;
	Ladd=Lcall+Lb|0;
	if((La.i1|0)<(Ladd|0)){
		Lcall=_mp_grow(La,Ladd)|0;
		if((Lcall|0)!==0)return Lcall|0;
		Lcall=La.i0|0;
	}
	Ladd=Lcall+Lb|0;
	La.i0=Ladd;
	tmp0=La.a3;
	Lgeptoindex1=Ladd-1|0;
	if((Lcall|0)>0){
		Lcall=Lgeptoindex1+(-Lb|0)|0;
		while(1){
			tmp0[Lgeptoindex1]=tmp0[Lcall]|0;
			Ladd=Ladd-1|0;
			if((Ladd|0)>(Lb|0)){
				Lcall=Lcall-1|0;
				Lgeptoindex1=Lgeptoindex1-1|0;
				continue;
			}
			break;
		}
		if((Lb|0)<=0)return 0|0;
		Ladd=Lb;
		Lcall=0;
	}else{
		Ladd=Lb;
		Lcall=0;
	}
	while(1){
		tmp0[Lcall]=0;
		if((Ladd|0)>1){
			Lcall=Lcall+1|0;
			Ladd=Ladd-1|0;
			continue;
		}
		break;
	}
	return 0|0;
}
function _mp_mul_2(La,Lb){
	var tmp0=null,tmp1=null,Lgeptoindexphi=0,Lgeptoindexphi3=0,tmp4=0,Lgeptoindex=0,Lcall=0,Lsub=0,Lr$p030=0;
	Lcall=La.i0|0;
	if((Lb.i1|0)<=(Lcall|0)){
		Lcall=_mp_grow(Lb,Lcall+1|0)|0;
		if((Lcall|0)!==0)return Lcall|0;
		Lcall=La.i0|0;
	}
	Lsub=Lb.i0|0;
	Lb.i0=Lcall;
	tmp0=Lb.a3;
	if((La.i0|0)>0){
		tmp1=La.a3;
		Lr$p030=0;
		Lgeptoindexphi3=0;
		Lgeptoindexphi=0;
		Lcall=0;
		while(1){
			tmp4=tmp1[Lgeptoindexphi3]|0;
			Lgeptoindex=Lgeptoindexphi+1|0;
			tmp0[Lgeptoindexphi]=tmp4<<1&268435454|Lr$p030;
			Lcall=Lcall+1|0;
			Lr$p030=tmp4>>>27;
			if((Lcall|0)<(La.i0|0)){
				Lgeptoindexphi=Lgeptoindex;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				continue;
			}
			break;
		}
		if((Lr$p030|0)===0)Lcall=Lb.i0|0;
		else{
			tmp0[Lgeptoindex]=1;
			Lcall=(Lb.i0|0)+1|0;
			Lb.i0=Lcall;
		}
	}
	Lsub=Lsub-Lcall|0;
	if((Lsub|0)>0)while(1){
		tmp0[Lcall]=0;
		if((Lsub|0)>1){
			Lcall=Lcall+1|0;
			Lsub=Lsub-1|0;
			continue;
		}
		break;
	}
	Lb.i2=La.i2|0;
	return 0|0;
}
function _mp_mul_2d(La,Lb,Lc){
	var Lsub26=0,Lgeptoindexphi=0,tmp2=0,Land=0,Lcall=0,Ladd=0,tmp6=null,Lx$p042=0,Lr$p041=0;
	if(La!==Lc){
		Lcall=_mp_copy(La,Lc)|0;
		if((Lcall|0)!==0)return Lcall|0;
	}
	Lcall=(Lb|0)/28|0;
	Ladd=(Lc.i0|0)+Lcall|0;
	if((Lc.i1|0)<=(Ladd|0)){
		Ladd=_mp_grow(Lc,Ladd+1|0)|0;
		if((Ladd|0)!==0)return Ladd|0;
	}
	if((Lb|0)>27){
		Lcall=_mp_lshd(Lc,Lcall)|0;
		if((Lcall|0)!==0)return Lcall|0;
	}
	Lcall=(Lb|0)%28|0;
	if((Lcall|0)!==0){
		tmp6=Lc.a3;
		if((Lc.i0|0)>0){
			Ladd=(1<<Lcall)-1|0;
			Lsub26=28-Lcall|0;
			Lgeptoindexphi=0;
			Lr$p041=0;
			Lx$p042=0;
			while(1){
				tmp2=tmp6[Lgeptoindexphi]|0;
				Land=tmp2>>>Lsub26&Ladd;
				tmp6[Lgeptoindexphi]=(tmp2<<Lcall|Lr$p041)&268435455;
				Lr$p041=Lc.i0|0;
				Lx$p042=Lx$p042+1|0;
				if((Lx$p042|0)<(Lr$p041|0)){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					Lr$p041=Land;
					continue;
				}
				break;
			}
			if((Land|0)!==0){
				Lc.i0=Lr$p041+1|0;
				tmp6[Lr$p041]=Land;
			}
		}
	}
	Lcall=Lc.i0|0;
	if((Lcall|0)>0){
		tmp6=Lc.a3;
		while(1){
			Ladd=Lcall-1|0;
			if((tmp6[Ladd]|0)===0){
				Lc.i0=Ladd;
				if((Lcall|0)>1){
					Lcall=Ladd;
					continue;
				}
				Lcall=Ladd;
			}
			break;
		}
	}
	if((Lcall|0)===0){
		Lc.i2=0;
		return 0|0;
	}
	return 0|0;
}
function _mp_mul(La,Lb,Lc){
	var L$p51=0,L$p52=0,tmp2=0,Ladd15=0,tmp4=0;
	Ladd15=La.i0|0;
	tmp4=Lb.i0|0;
	L$p51=(Ladd15|0)<(tmp4|0)?Ladd15|0:tmp4|0;
	L$p52=(Ladd15|0)>(tmp4|0)?Ladd15|0:tmp4|0;
	Ladd15=(Ladd15+1|0)+tmp4|0;
	tmp4=La.i2|0;
	tmp2=Lb.i2|0;
	if((L$p51|0)<80){
		if((Ladd15|0)<512)Ladd15=_s_mp_mul_digs_fast(La,Lb,Lc,Ladd15)|0;
		else Ladd15=_s_mp_mul_digs(La,Lb,Lc,Ladd15)|0;
	}else if((L$p52|0)>159&&(L$p52|0)>=(L$p51<<1|0))Ladd15=_s_mp_balance_mul(La,Lb,Lc)|0;
	else if((L$p51|0)<350)Ladd15=_s_mp_karatsuba_mul(La,Lb,Lc)|0;
	else Ladd15=_s_mp_toom_mul(La,Lb,Lc)|0;
	Lc.i2=(Lc.i0|0)>0?(((tmp4|0)!==(tmp2|0)?1:0)?1:0)|0:0|0;
	return Ladd15|0;
}
function _mp_mul_d(La,Lb,Lc){
	var tmp0=null,tmp1=null,tmp2=0,tmp3=0,Lgeptoindexphi=0,Lgeptoindexphi2=0,tmp6=0,tmp7=0,tmp8=0,tmp9=0,tmp10=0,tmp11=0,Ladd12=0,Lcall=0,Lsub$pi=0,Lu$p054=0,Lix$p051=0,tmp17=0;
	Lcall=La.i0|0;
	if((Lc.i1|0)<=(Lcall|0)){
		Lcall=_mp_grow(Lc,Lcall+1|0)|0;
		if((Lcall|0)!==0)return Lcall|0;
		Lcall=La.i0|0;
	}
	Lsub$pi=Lc.i0|0;
	Lc.i2=La.i2|0;
	tmp0=Lc.a3;
	if((Lcall|0)>0){
		tmp1=La.a3;
		tmp2=Lb&65535;
		tmp3=Lb>>>16;
		Lix$p051=0;
		Lgeptoindexphi2=0;
		Lgeptoindexphi=0;
		Lu$p054=0;
		while(1){
			Lcall=tmp1[Lgeptoindexphi]|0;
			tmp17=Lcall>>>16;
			tmp6=__imul(tmp17,tmp3)|0;
			tmp17=__imul(tmp17,tmp2)|0;
			Lcall&=65535;
			tmp7=__imul(Lcall,tmp3)|0;
			tmp8=tmp17+tmp7|0;
			tmp9=__imul(Lcall,tmp2)|0;
			tmp10=tmp8<<16;
			tmp11=tmp10+tmp9|0;
			Ladd12=tmp11+Lu$p054|0;
			Lcall=Lgeptoindexphi2+1|0;
			tmp0[Lgeptoindexphi2]=Ladd12&268435455;
			Lu$p054=(((tmp8>>>16)+(tmp17>>>0>(tmp7^ -1)>>>0?tmp6+65536|0:tmp6|0)|0)+((tmp10>>>0>(tmp9^ -1)>>>0?1:0)?1:0)|0)+((Lu$p054>>>0>(tmp11^ -1)>>>0?1:0)?1:0)<<4|Ladd12>>>28;
			Lix$p051=Lix$p051+1|0;
			if((Lix$p051|0)<(La.i0|0)){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				Lgeptoindexphi2=Lcall;
				continue;
			}
			break;
		}
	}else{
		Lix$p051=0;
		Lcall=0;
		Lu$p054=0;
	}
	tmp0[Lcall]=Lu$p054;
	Lu$p054=(Lsub$pi-1|0)-Lix$p051|0;
	if((Lu$p054|0)>0)while(1){
		Lcall=Lcall+1|0;
		tmp0[Lcall]=0;
		if((Lu$p054|0)>1){
			Lu$p054=Lu$p054-1|0;
			continue;
		}
		break;
	}
	Lsub$pi=La.i0|0;
	Lcall=Lsub$pi+1|0;
	Lc.i0=Lcall;
	if((Lsub$pi|0)>-1)while(1){
		Lsub$pi=Lcall-1|0;
		if((tmp0[Lsub$pi]|0)===0){
			Lc.i0=Lsub$pi;
			if((Lcall|0)>1){
				Lcall=Lsub$pi;
				continue;
			}
			Lcall=Lsub$pi;
		}
		break;
	}
	if((Lcall|0)===0){
		Lc.i2=0;
		return 0|0;
	}
	return 0|0;
}
function _mp_radix_size(La,Lradix,Lsize,Msize){
	var Lt=null,Ld=null,Lq$p07$pi=0,tmp3=null,Lsub$pi=0;
	Lt={i0:0,i1:0,i2:0,a3:nullArray};
	Ld=[0];
	Lsize[Msize]=0;
	if(Lradix-2>>>0<=62){
		Lq$p07$pi=La.i0|0;
		if((Lq$p07$pi|0)===0)Lsize[Msize]=2;
		else if((Lradix|0)===2){
			tmp3=La.a3;
			Lsub$pi=Lq$p07$pi-1|0;
			Lq$p07$pi=tmp3[Lsub$pi]|0;
			Lsub$pi=__imul(Lsub$pi,28)|0;
			if((Lq$p07$pi|0)!==0)while(1){
				Lq$p07$pi>>>=1;
				Lsub$pi=Lsub$pi+1|0;
				if((Lq$p07$pi|0)!==0)continue;
				break;
			}
			Lsize[Msize]=(Lsub$pi+1|0)+(((La.i2|0)===1?1:0)?1:0)|0;
		}else{
			Lq$p07$pi=La.i2|0;
			if((_mp_init_copy(Lt,La)|0|0)===0){
				Lt.i2=0;
				Lq$p07$pi=((Lq$p07$pi|0)===1?1:0)?1:0;
				a:{
					if((Lt.i0|0)!==0)while(1){
						if((_mp_div_d(Lt,Lradix,Lt,Ld,0)|0|0)!==0)break a;
						Lq$p07$pi=Lq$p07$pi+1|0;
						if((Lt.i0|0)!==0)continue;
						break;
					}
					Lsize[Msize]=Lq$p07$pi+1|0;
				}
				tmp3=Lt.a3;
				if(tmp3.length!==1||tmp3!==nullArray||0!==0){
					if(tmp3.length!==1||tmp3!==nullArray||0!==0){
						Lsub$pi=Lt.i1<<2;
						if((Lsub$pi|0)!==0){
							Lq$p07$pi=0;
							while(1){
								tmp3[Lq$p07$pi]=0;
								Lsub$pi=Lsub$pi-1|0;
								if((Lsub$pi|0)!==0){
									Lq$p07$pi=Lq$p07$pi+1|0;
									continue;
								}
								break;
							}
						}
					}
					Lt.a3=nullArray;
					Lt.i0=0;
					Lt.i1=0;
					Lt.i2=0;
				}
			}
		}
	}
}
function _mp_read_radix(La,Lstr,Mstr,Lradix){
	var Lzd_$p02$pi=0,tmp1=null,Lgeptoindexphi=0,Lzd_$p02$pi21=0,Lgeptoindexphi4=0,Lconv33$pus=0;
	La.i2=0;
	La.i0=0;
	Lzd_$p02$pi=La.i1|0;
	if((Lzd_$p02$pi|0)>0){
		tmp1=La.a3;
		Lgeptoindexphi=0;
		while(1){
			tmp1[Lgeptoindexphi]=0;
			if((Lzd_$p02$pi|0)>1){
				Lzd_$p02$pi=Lzd_$p02$pi-1|0;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				continue;
			}
			break;
		}
	}
	a:if(Lradix-2>>>0<=62){
		if((Lstr[Mstr]&255)===45){
			Lgeptoindexphi=1;
			Lzd_$p02$pi=1;
		}else{
			Lgeptoindexphi=0;
			Lzd_$p02$pi=0;
		}
		La.i2=0;
		La.i0=0;
		Lzd_$p02$pi21=La.i1|0;
		if((Lzd_$p02$pi21|0)>0){
			tmp1=La.a3;
			Lgeptoindexphi4=0;
			while(1){
				tmp1[Lgeptoindexphi4]=0;
				if((Lzd_$p02$pi21|0)>1){
					Lzd_$p02$pi21=Lzd_$p02$pi21-1|0;
					Lgeptoindexphi4=Lgeptoindexphi4+1|0;
					continue;
				}
				break;
			}
		}
		Lzd_$p02$pi21=Lstr[Mstr+Lgeptoindexphi|0]|0;
		b:if((Lzd_$p02$pi21&255)!==0){
			if((Lradix|0)<37)while(1){
				Lgeptoindexphi4=(((Lzd_$p02$pi21+159&255)<26?Lzd_$p02$pi21+224|0:Lzd_$p02$pi21|0)<<24>>24)-40|0;
				if(Lgeptoindexphi4>>>0<=88){
					Lgeptoindexphi4=_mp_s_rmap_reverse[Lgeptoindexphi4]|0;
					Lconv33$pus=Lgeptoindexphi4;
					if(!(Lgeptoindexphi4===255||(Lconv33$pus|0)>=(Lradix|0))){
						if((_mp_mul_d(La,Lradix,La)|0|0)!==0)break a;
						if((_mp_add_d(La,Lconv33$pus,La)|0|0)!==0)break a;
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						Lzd_$p02$pi21=Lstr[Mstr+Lgeptoindexphi|0]|0;
						if((Lzd_$p02$pi21&255)===0)break b;
						continue;
					}
				}
				break;
			}
			else while(1){
				Lgeptoindexphi4=(Lzd_$p02$pi21<<24>>24)-40|0;
				if(Lgeptoindexphi4>>>0<=88){
					Lgeptoindexphi4=_mp_s_rmap_reverse[Lgeptoindexphi4]|0;
					Lconv33$pus=Lgeptoindexphi4;
					if(!(Lgeptoindexphi4===255||(Lconv33$pus|0)>=(Lradix|0))){
						if((_mp_mul_d(La,Lradix,La)|0|0)!==0)break a;
						if((_mp_add_d(La,Lconv33$pus,La)|0|0)!==0)break a;
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						Lzd_$p02$pi21=Lstr[Mstr+Lgeptoindexphi|0]|0;
						if((Lzd_$p02$pi21&255)===0)break b;
						continue;
					}
				}
				break;
			}
			switch(Lzd_$p02$pi21&255){
				case 0:
				case 13:
				case 10:
				break b;
				default:
				La.i2=0;
				La.i0=0;
				Lzd_$p02$pi=La.i1|0;
				if((Lzd_$p02$pi|0)<=0)break a;
				tmp1=La.a3;
				Lgeptoindexphi=0;
				while(1){
					tmp1[Lgeptoindexphi]=0;
					if((Lzd_$p02$pi|0)<=1)break a;
					Lzd_$p02$pi=Lzd_$p02$pi-1|0;
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					continue;
				}
			}
		}
		if((La.i0|0)!==0)La.i2=Lzd_$p02$pi;
	}
}
function _mp_rshd(La,Lb){
	var Lgeptoindexphi6=0,tmp1=null,Lgeptoindexphi=0,Lzd_$p02$pi=0,Lgeptoindex3=0;
	if((Lb|0)>=1)if((La.i0|0)>(Lb|0)){
		tmp1=La.a3;
		Lgeptoindexphi6=Lb;
		Lzd_$p02$pi=0;
		Lgeptoindexphi=0;
		while(1){
			Lgeptoindex3=Lzd_$p02$pi+1|0;
			tmp1[Lzd_$p02$pi]=tmp1[Lgeptoindexphi6]|0;
			Lzd_$p02$pi=La.i0|0;
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			if((Lgeptoindexphi|0)<(Lzd_$p02$pi-Lb|0)){
				Lgeptoindexphi6=Lgeptoindexphi6+1|0;
				Lzd_$p02$pi=Lgeptoindex3;
				continue;
			}
			break;
		}
		Lgeptoindexphi=Lzd_$p02$pi-Lgeptoindexphi|0;
		if((Lgeptoindexphi|0)>0){
			while(1){
				tmp1[Lgeptoindex3]=0;
				if((Lgeptoindexphi|0)>1){
					Lgeptoindexphi=Lgeptoindexphi-1|0;
					Lgeptoindex3=Lgeptoindex3+1|0;
					continue;
				}
				break;
			}
			Lzd_$p02$pi=La.i0|0;
		}
		La.i0=Lzd_$p02$pi-Lb|0;
	}else{
		La.i2=0;
		La.i0=0;
		Lzd_$p02$pi=La.i1|0;
		if((Lzd_$p02$pi|0)>0){
			tmp1=La.a3;
			Lgeptoindexphi=0;
			while(1){
				tmp1[Lgeptoindexphi]=0;
				if((Lzd_$p02$pi|0)>1){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					Lzd_$p02$pi=Lzd_$p02$pi-1|0;
					continue;
				}
				break;
			}
		}
	}
}
function _mp_sqr(La,Lb){
	var Lcall=0;
	Lcall=La.i0|0;
	if((Lcall|0)<400){
		if((Lcall|0)<120){
			if(((Lcall<<1)+1|0)<512){
				Lcall=_s_mp_sqr_fast(La,Lb)|0;
				Lb.i2=0;
				return Lcall|0;
			}
			Lcall=_s_mp_sqr(La,Lb)|0;
			Lb.i2=0;
			return Lcall|0;
		}
		Lcall=_s_mp_karatsuba_sqr(La,Lb)|0;
		Lb.i2=0;
		return Lcall|0;
	}
	Lcall=_s_mp_toom_sqr(La,Lb)|0;
	Lb.i2=0;
	return Lcall|0;
}
function _mp_sub(La,Lb,Lc){
	var Lcall=0;
	Lcall=La.i2|0;
	if((Lcall|0)===(Lb.i2|0)){
		if((_mp_cmp_mag(La,Lb)|0|0)===-1){
			Lc.i2=((Lcall|0)===0?1:0)?1:0;
			Lcall=_s_mp_sub(Lb,La,Lc)|0;
			return Lcall|0;
		}
		Lc.i2=Lcall;
		Lcall=_s_mp_sub(La,Lb,Lc)|0;
		return Lcall|0;
	}
	Lc.i2=Lcall;
	Lcall=_s_mp_add(La,Lb,Lc)|0;
	return Lcall|0;
}
function _mp_sub_d(La,Lb,Lc){
	var Lgeptoindexphi=0,Lgeptoindexphi2=0,Lcall=0,La_=null,tmp4=null,Lstoremerge=0,Lsub$pi=0,Lix$p049=0;
	Lcall=La.i0|0;
	if((Lc.i1|0)<=(Lcall|0)){
		Lcall=_mp_grow(Lc,Lcall+1|0)|0;
		if((Lcall|0)!==0)return Lcall|0;
	}
	if((La.i2|0)===1){
		La_={i0:0,i1:0,i2:0,a3:nullArray};
		La_.i0=La.i0|0;
		La_.i1=La.i1|0;
		tmp4=La.a3;
		La_.a3=tmp4;
		La_.i2=0;
		Lcall=_mp_add_d(La_,Lb,Lc)|0;
		Lc.i2=1;
		Lstoremerge=Lc.i0|0;
		if((Lstoremerge|0)>0){
			tmp4=Lc.a3;
			while(1){
				Lsub$pi=Lstoremerge-1|0;
				if((tmp4[Lsub$pi]|0)===0){
					Lc.i0=Lsub$pi;
					if((Lstoremerge|0)>1){
						Lstoremerge=Lsub$pi;
						continue;
					}
					Lstoremerge=Lsub$pi;
				}
				break;
			}
		}
		if((Lstoremerge|0)===0)Lc.i2=0;
		return Lcall|0;
	}
	Lcall=Lc.i0|0;
	La_=La.a3;
	tmp4=Lc.a3;
	Lstoremerge=La.i0|0;
	a:{
		b:{
			switch(Lstoremerge|0){
				case 1:
				Lsub$pi=La_[0]|0;
				if(Lsub$pi>>>0>Lb>>>0)break b;
				Lstoremerge=Lb-Lsub$pi|0;
				break;
				case 0:
				Lstoremerge=Lb;
				break;
				default:
				break b;
			}
			tmp4[0]=Lstoremerge;
			Lc.i2=1;
			Lc.i0=1;
			Lsub$pi=1;
			Lix$p049=1;
			break a;
		}
		Lc.i2=0;
		Lc.i0=Lstoremerge;
		if((La.i0|0)>0){
			Lix$p049=0;
			Lgeptoindexphi2=0;
			Lgeptoindexphi=0;
			Lstoremerge=Lb;
			while(1){
				Lstoremerge=(La_[Lgeptoindexphi]|0)-Lstoremerge|0;
				Lsub$pi=Lgeptoindexphi2+1|0;
				tmp4[Lgeptoindexphi2]=Lstoremerge&268435455;
				Lix$p049=Lix$p049+1|0;
				if((Lix$p049|0)<(La.i0|0)){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					Lgeptoindexphi2=Lsub$pi;
					Lstoremerge>>>=31;
					continue;
				}
				break;
			}
		}else{
			Lsub$pi=0;
			Lix$p049=0;
		}
	}
	Lix$p049=Lcall-Lix$p049|0;
	if((Lix$p049|0)>0)while(1){
		tmp4[Lsub$pi]=0;
		if((Lix$p049|0)>1){
			Lsub$pi=Lsub$pi+1|0;
			Lix$p049=Lix$p049-1|0;
			continue;
		}
		break;
	}
	Lcall=Lc.i0|0;
	if((Lcall|0)>0)while(1){
		Lstoremerge=Lcall-1|0;
		if((tmp4[Lstoremerge]|0)===0){
			Lc.i0=Lstoremerge;
			if((Lcall|0)>1){
				Lcall=Lstoremerge;
				continue;
			}
			Lcall=Lstoremerge;
		}
		break;
	}
	if((Lcall|0)===0){
		Lc.i2=0;
		return 0|0;
	}
	return 0|0;
}
function _mp_to_radix(La,Lstr,Mstr,Lradix){
	var Lt=null,Ld=null,tmp2=null,Lgeptoindexphi=0,Lmaxlen$paddr$p0=0,Lgeptoindexphi1=0,Ldigs$p035=0,Lgeptoindex2=0;
	Lt={i0:0,i1:0,i2:0,a3:nullArray};
	Ld=[0];
	if(Lradix-2>>>0<=62)if((La.i0|0)===0){
		Lstr[Mstr]=48;
		Lstr[Mstr+1|0]=0;
	}else if((_mp_init_copy(Lt,La)|0|0)===0){
		if((Lt.i2|0)===1){
			Lstr[Mstr]=45;
			Lt.i2=0;
			Lmaxlen$paddr$p0=-2;
			Lgeptoindexphi=1;
		}else{
			Lmaxlen$paddr$p0=-1;
			Lgeptoindexphi=0;
		}
		a:{
			if((Lt.i0|0)===0){
				Lgeptoindexphi1=Lgeptoindexphi;
			}else{
				Lgeptoindexphi1=Lgeptoindexphi;
				Ldigs$p035=0;
				while(1){
					Lmaxlen$paddr$p0=Lmaxlen$paddr$p0-1|0;
					if((Lmaxlen$paddr$p0|0)!==0){
						if((_mp_div_d(Lt,Lradix,Lt,Ld,0)|0|0)!==0)break a;
						Lgeptoindex2=Lgeptoindexphi1+1|0;
						Lstr[Mstr+Lgeptoindexphi1|0]=_$pstr$p73[Ld[0]|0]|0;
						Ldigs$p035=Ldigs$p035+1|0;
						if((Lt.i0|0)!==0){
							Lgeptoindexphi1=Lgeptoindex2;
							continue;
						}
						Lgeptoindexphi1=Lgeptoindex2;
					}
					break;
				}
				if((Ldigs$p035|0)>1){
					Ldigs$p035=Ldigs$p035-1|0;
					Lgeptoindex2=0;
					while(1){
						Lmaxlen$paddr$p0=Lstr[(Mstr+Lgeptoindexphi|0)+Lgeptoindex2|0]|0;
						Lstr[(Mstr+Lgeptoindexphi|0)+Lgeptoindex2|0]=Lstr[(Mstr+Lgeptoindexphi|0)+Ldigs$p035|0]|0;
						Lstr[(Mstr+Lgeptoindexphi|0)+Ldigs$p035|0]=Lmaxlen$paddr$p0;
						Ldigs$p035=Ldigs$p035-1|0;
						Lgeptoindex2=Lgeptoindex2+1|0;
						if((Lgeptoindex2|0)<(Ldigs$p035|0))continue;
						break;
					}
				}
			}
			Lstr[Mstr+Lgeptoindexphi1|0]=0;
		}
		tmp2=Lt.a3;
		if(tmp2.length!==1||tmp2!==nullArray||0!==0){
			if(tmp2.length!==1||tmp2!==nullArray||0!==0){
				Lgeptoindexphi1=Lt.i1<<2;
				if((Lgeptoindexphi1|0)!==0){
					Lgeptoindexphi=0;
					while(1){
						tmp2[Lgeptoindexphi]=0;
						Lgeptoindexphi1=Lgeptoindexphi1-1|0;
						if((Lgeptoindexphi1|0)!==0){
							Lgeptoindexphi=Lgeptoindexphi+1|0;
							continue;
						}
						break;
					}
				}
			}
			Lt.a3=nullArray;
			Lt.i0=0;
			Lt.i1=0;
			Lt.i2=0;
		}
	}
}
function _s_mp_add(La,Lb,Lc){
	var tmp0=null,tmp1=null,tmp2=null,Lgeptoindexphi=0,Lgeptoindexphi3=0,Lgeptoindexphi6=0,Lsmax=0,Li$p153=0,L$p=0,L$p45=0,La$pb=null,Ladd=0,Lcall=0,Li$p060=0,Lgeptoindex=0;
	Lsmax=La.i0|0;
	Li$p153=Lb.i0|0;
	L$p=(Lsmax|0)>(Li$p153|0)?Lsmax|0:Li$p153|0;
	L$p45=(Lsmax|0)>(Li$p153|0)?Li$p153|0:Lsmax|0;
	La$pb=(Lsmax|0)>(Li$p153|0)?La:Lb;
	Ladd=L$p+1|0;
	if((Lc.i1|0)<=(L$p|0)){
		Lcall=_mp_grow(Lc,Ladd)|0;
		if((Lcall|0)!==0)return Lcall|0;
	}
	Lcall=Lc.i0|0;
	Lc.i0=Ladd;
	tmp0=Lc.a3;
	if((L$p45|0)>0){
		tmp1=Lb.a3;
		tmp2=La.a3;
		Lgeptoindexphi6=0;
		Ladd=0;
		Lgeptoindexphi3=0;
		Lgeptoindexphi=0;
		Li$p060=0;
		while(1){
			Ladd=((tmp2[Lgeptoindexphi6]|0)+Ladd|0)+(tmp1[Lgeptoindexphi3]|0)|0;
			Lgeptoindex=Lgeptoindexphi+1|0;
			tmp0[Lgeptoindexphi]=Ladd&268435455;
			Li$p060=Li$p060+1|0;
			Ladd>>>=28;
			if((Li$p060|0)<(L$p45|0)){
				Lgeptoindexphi=Lgeptoindex;
				Lgeptoindexphi3=Lgeptoindexphi3+1|0;
				Lgeptoindexphi6=Lgeptoindexphi6+1|0;
				continue;
			}
			break;
		}
		Li$p060=L$p45;
	}else{
		Ladd=0;
		Lgeptoindex=0;
		Li$p060=0;
	}
	if((L$p45|0)!==(L$p|0)&&(Li$p060|0)<(L$p|0)){
		La$pb=La$pb.a3;
		Lsmax=(Li$p153|0)>(Lsmax|0)?Li$p153|0:Lsmax|0;
		Li$p153=Li$p060;
		L$p45=Lgeptoindex;
		while(1){
			Ladd=(La$pb[Li$p153]|0)+Ladd|0;
			tmp0[L$p45]=Ladd&268435455;
			Li$p153=Li$p153+1|0;
			Ladd>>>=28;
			if((Li$p153|0)<(L$p|0)){
				L$p45=L$p45+1|0;
				continue;
			}
			break;
		}
		Lgeptoindex=Lgeptoindex+(Lsmax-Li$p060|0)|0;
	}
	tmp0[Lgeptoindex]=Ladd;
	L$p=Lc.i0|0;
	Ladd=Lcall-L$p|0;
	if((Ladd|0)>0){
		while(1){
			Lgeptoindex=Lgeptoindex+1|0;
			tmp0[Lgeptoindex]=0;
			if((Ladd|0)>1){
				Ladd=Ladd-1|0;
				continue;
			}
			break;
		}
		L$p=Lc.i0|0;
	}
	if((L$p|0)>0)while(1){
		Ladd=L$p-1|0;
		if((tmp0[Ladd]|0)===0){
			Lc.i0=Ladd;
			if((L$p|0)>1){
				L$p=Ladd;
				continue;
			}
			L$p=Ladd;
		}
		break;
	}
	if((L$p|0)===0){
		Lc.i2=0;
		return 0|0;
	}
	return 0|0;
}
function _s_mp_balance_mul(La,Lb,Lc){
	var La0=null,Ltmp=null,LB=null,Lr=null,Lgeptoindexphi=0,L$psink22=0,L$p106=0,Ldiv=0,Ladd=0,L$p$pi=0,L$ppre=null,L$psink=null,LA$psroa$p9$p0=null,tmp13=0;
	La0={i0:0,i1:0,i2:0,a3:nullArray};
	Ltmp={i0:0,i1:0,i2:0,a3:nullArray};
	LB={i0:0,i1:0,i2:0,a3:nullArray};
	Lr={i0:0,i1:0,i2:0,a3:nullArray};
	Lgeptoindexphi=La.i0|0;
	L$psink22=Lb.i0|0;
	L$p106=(Lgeptoindexphi|0)<(L$psink22|0)?Lgeptoindexphi|0:L$psink22|0;
	Ldiv=(((Lgeptoindexphi|0)>(L$psink22|0)?Lgeptoindexphi|0:L$psink22|0)|0)/(L$p106|0)|0;
	Ladd=L$p106+2|0;
	L$p$pi=(Ladd|0)<3?3|0:Ladd|0;
	Ladd=L$p$pi<<2;
	L$ppre=new Int32Array(Ladd/4|0);
	La0.a3=L$ppre;
	if((L$p$pi&1073741823|0)===0&&(L$ppre.length===1&&L$ppre===nullArray&&0===0)){
		L$p$pi=-2;
	}else{
		La0.i0=0;
		La0.i1=L$p$pi;
		La0.i2=0;
		L$p$pi=_mp_init_multi(Ltmp,Lr,null)|0;
		if((L$p$pi|0)===0){
			Ladd=La.i0|0;
			if((Lgeptoindexphi|0)<(L$psink22|0)){
				L$p$pi=La.i1|0;
				Lgeptoindexphi=La.i2|0;
				L$psink=La.a3;
				L$psink22=Lb.i0|0;
				LA$psroa$p9$p0=Lb.a3;
				tmp13=Ladd;
				Ladd=L$psink22;
				L$psink22=tmp13;
			}else{
				LA$psroa$p9$p0=La.a3;
				L$psink22=Lb.i0|0;
				L$p$pi=Lb.i1|0;
				Lgeptoindexphi=Lb.i2|0;
				L$psink=Lb.a3;
			}
			LB.i0=L$psink22;
			LB.i1=L$p$pi;
			LB.i2=Lgeptoindexphi;
			LB.a3=L$psink;
			a:{
				if((Ldiv|0)>0){
					if((L$p106|0)>0){
						L$psink22=0;
						Lgeptoindexphi=0;
						while(1){
							La0.i0=0;
							L$p$pi=0;
							while(1){
								L$ppre[L$p$pi]=LA$psroa$p9$p0[Lgeptoindexphi]|0;
								La0.i0=(La0.i0|0)+1|0;
								L$p$pi=L$p$pi+1|0;
								Lgeptoindexphi=Lgeptoindexphi+1|0;
								if((L$p$pi|0)<(L$p106|0))continue;
								break;
							}
							L$p$pi=_mp_mul(La0,LB,Ltmp)|0;
							if((L$p$pi|0)!==0)break a;
							L$p$pi=_mp_lshd(Ltmp,__imul(L$psink22,L$p106)|0)|0;
							if((L$p$pi|0)!==0)break a;
							L$p$pi=_mp_add(Lr,Ltmp,Lr)|0;
							if((L$p$pi|0)!==0)break a;
							L$psink22=L$psink22+1|0;
							if((L$psink22|0)<(Ldiv|0)){
								L$ppre=La0.a3;
								continue;
							}
							break;
						}
					}else{
						L$psink22=0;
						while(1){
							La0.i0=0;
							L$p$pi=_mp_mul(La0,LB,Ltmp)|0;
							if((L$p$pi|0)!==0)break a;
							L$p$pi=_mp_lshd(Ltmp,__imul(L$psink22,L$p106)|0)|0;
							if((L$p$pi|0)!==0)break a;
							L$p$pi=_mp_add(Lr,Ltmp,Lr)|0;
							if((L$p$pi|0)!==0)break a;
							L$psink22=L$psink22+1|0;
							if((L$psink22|0)<(Ldiv|0))continue;
							break;
						}
						Lgeptoindexphi=0;
					}
				}else{
					L$psink22=0;
					Lgeptoindexphi=0;
				}
				if((Lgeptoindexphi|0)<(Ladd|0)){
					La0.i0=0;
					L$psink=La0.a3;
					Ldiv=0;
					while(1){
						L$psink[Ldiv]=LA$psroa$p9$p0[Lgeptoindexphi]|0;
						La0.i0=(La0.i0|0)+1|0;
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						if((Lgeptoindexphi|0)<(Ladd|0)){
							Ldiv=Ldiv+1|0;
							continue;
						}
						break;
					}
					L$p$pi=_mp_mul(La0,LB,Ltmp)|0;
					if((L$p$pi|0)!==0)break a;
					L$p$pi=_mp_lshd(Ltmp,__imul(L$psink22,L$p106)|0)|0;
					if((L$p$pi|0)!==0)break a;
					L$p$pi=_mp_add(Lr,Ltmp,Lr)|0;
					if((L$p$pi|0)!==0)break a;
				}
				L$p$pi=Lr.i0|0;
				L$psink22=Lr.i1|0;
				L$p106=Lr.i2|0;
				L$psink=Lr.a3;
				Lr.i0=Lc.i0|0;
				Lr.i1=Lc.i1|0;
				Lr.i2=Lc.i2|0;
				LA$psroa$p9$p0=Lc.a3;
				Lr.a3=LA$psroa$p9$p0;
				Lc.i0=L$p$pi;
				Lc.i1=L$psink22;
				Lc.i2=L$p106;
				Lc.a3=L$psink;
				L$p$pi=0;
			}
			_mp_clear_multi(La0,Ltmp,Lr,null);
		}else if(L$ppre.length!==1||L$ppre!==nullArray||0!==0){
			if(!(L$ppre.length===1&&L$ppre===nullArray&&0===0||(Ladd|0)===0)){
				Lgeptoindexphi=0;
				while(1){
					L$ppre[Lgeptoindexphi]=0;
					Ladd=Ladd-1|0;
					if((Ladd|0)!==0){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						continue;
					}
					break;
				}
			}
			La0.a3=nullArray;
			La0.i0=0;
			La0.i1=0;
			La0.i2=0;
		}
	}
	return L$p$pi|0;
}
function _s_mp_karatsuba_mul(La,Lb,Lc){
	var Lx0=null,Lx1=null,Ly0=null,Ly1=null,Lt1=null,Lx0y0=null,Lx1y1=null,tmp7=null,tmp8=null,tmp9=null,tmp10=null,Lgeptoindexphi8=0,Lshr=0,L$p$pi=0,L$p$pi41=0,tmp15=null,Lsub=0,tmp17=null,Lgeptoindexphi5=0,Lx$p0125=0;
	Lx0={i0:0,i1:0,i2:0,a3:nullArray};
	Lx1={i0:0,i1:0,i2:0,a3:nullArray};
	Ly0={i0:0,i1:0,i2:0,a3:nullArray};
	Ly1={i0:0,i1:0,i2:0,a3:nullArray};
	Lt1={i0:0,i1:0,i2:0,a3:nullArray};
	Lx0y0={i0:0,i1:0,i2:0,a3:nullArray};
	Lx1y1={i0:0,i1:0,i2:0,a3:nullArray};
	Lshr=La.i0|0;
	L$p$pi=Lb.i0|0;
	Lshr=((Lshr|0)<(L$p$pi|0)?Lshr|0:L$p$pi|0)>>1;
	L$p$pi=(Lshr|0)<3?3|0:Lshr|0;
	L$p$pi41=L$p$pi<<2;
	tmp15=new Int32Array(L$p$pi41/4|0);
	Lx0.a3=tmp15;
	if((L$p$pi&1073741823|0)===0&&(tmp15.length===1&&tmp15===nullArray&&0===0)){
		Lshr=-2;
	}else{
		Lx0.i0=0;
		Lx0.i1=L$p$pi;
		Lx0.i2=0;
		Lsub=(La.i0|0)-Lshr|0;
		Lsub=(Lsub|0)<3?3|0:Lsub|0;
		tmp7=new Int32Array((Lsub<<2)/4|0);
		Lx1.a3=tmp7;
		if((Lsub&1073741823|0)===0&&(tmp7.length===1&&tmp7===nullArray&&0===0)){
			Lshr=-2;
		}else{
			Lx1.i0=0;
			Lx1.i1=Lsub;
			Lx1.i2=0;
			tmp8=new Int32Array(L$p$pi41/4|0);
			Ly0.a3=tmp8;
			if((L$p$pi&1073741823|0)===0&&(tmp8.length===1&&tmp8===nullArray&&0===0)){
				Lshr=-2;
			}else{
				Ly0.i0=0;
				Ly0.i1=L$p$pi;
				Ly0.i2=0;
				L$p$pi=(Lb.i0|0)-Lshr|0;
				L$p$pi=(L$p$pi|0)<3?3|0:L$p$pi|0;
				tmp9=new Int32Array((L$p$pi<<2)/4|0);
				Ly1.a3=tmp9;
				if((L$p$pi&1073741823|0)===0&&(tmp9.length===1&&tmp9===nullArray&&0===0)){
					Lshr=-2;
				}else{
					Ly1.i0=0;
					Ly1.i1=L$p$pi;
					Ly1.i2=0;
					L$p$pi=Lshr<<1;
					L$p$pi41=(L$p$pi|0)<3?3|0:L$p$pi|0;
					Lsub=L$p$pi41<<2;
					tmp17=new Int32Array(Lsub/4|0);
					Lt1.a3=tmp17;
					if((L$p$pi41&1073741823|0)===0&&(tmp17.length===1&&tmp17===nullArray&&0===0)){
						Lshr=-2;
					}else{
						Lt1.i0=0;
						Lt1.i1=L$p$pi41;
						Lt1.i2=0;
						tmp17=new Int32Array(Lsub/4|0);
						Lx0y0.a3=tmp17;
						if((L$p$pi41&1073741823|0)===0&&(tmp17.length===1&&tmp17===nullArray&&0===0)){
							Lshr=-2;
						}else{
							Lx0y0.i0=0;
							Lx0y0.i1=L$p$pi41;
							Lx0y0.i2=0;
							tmp17=new Int32Array(Lsub/4|0);
							Lx1y1.a3=tmp17;
							if((L$p$pi41&1073741823|0)===0&&(tmp17.length===1&&tmp17===nullArray&&0===0)){
								Lshr=-2;
							}else{
								Lx1y1.i0=0;
								Lx1y1.i1=L$p$pi41;
								Lx1y1.i2=0;
								Ly0.i0=Lshr;
								Lx0.i0=Lshr;
								L$p$pi41=La.i0|0;
								Lx1.i0=L$p$pi41-Lshr|0;
								Ly1.i0=(Lb.i0|0)-Lshr|0;
								tmp17=La.a3;
								tmp10=Lb.a3;
								if((Lshr|0)>0){
									Lgeptoindexphi8=0;
									Lx$p0125=0;
									Lgeptoindexphi5=0;
									Lsub=0;
									L$p$pi41=0;
									while(1){
										tmp15[Lsub]=tmp17[Lgeptoindexphi8]|0;
										tmp8[L$p$pi41]=tmp10[Lgeptoindexphi5]|0;
										Lx$p0125=Lx$p0125+1|0;
										if((Lx$p0125|0)<(Lshr|0)){
											Lgeptoindexphi8=Lgeptoindexphi8+1|0;
											L$p$pi41=L$p$pi41+1|0;
											Lsub=Lsub+1|0;
											Lgeptoindexphi5=Lgeptoindexphi5+1|0;
											continue;
										}
										break;
									}
									L$p$pi41=La.i0|0;
									Lsub=Lshr;
									Lgeptoindexphi5=Lshr;
								}else{
									Lgeptoindexphi5=0;
									Lsub=0;
								}
								if((Lshr|0)<(L$p$pi41|0)){
									Lx$p0125=Lshr;
									L$p$pi41=0;
									while(1){
										tmp7[L$p$pi41]=tmp17[Lgeptoindexphi5]|0;
										Lx$p0125=Lx$p0125+1|0;
										if((Lx$p0125|0)<(La.i0|0)){
											L$p$pi41=L$p$pi41+1|0;
											Lgeptoindexphi5=Lgeptoindexphi5+1|0;
											continue;
										}
										break;
									}
								}
								if((Lshr|0)<(Lb.i0|0)){
									Lgeptoindexphi5=Lshr;
									L$p$pi41=0;
									while(1){
										tmp9[L$p$pi41]=tmp10[Lsub]|0;
										Lgeptoindexphi5=Lgeptoindexphi5+1|0;
										if((Lgeptoindexphi5|0)<(Lb.i0|0)){
											L$p$pi41=L$p$pi41+1|0;
											Lsub=Lsub+1|0;
											continue;
										}
										break;
									}
								}
								if((Lshr|0)>0){
									L$p$pi41=Lshr;
									while(1){
										Lsub=L$p$pi41-1|0;
										if((tmp15[Lsub]|0)===0){
											Lx0.i0=Lsub;
											if((L$p$pi41|0)>1){
												L$p$pi41=Lsub;
												continue;
											}
											L$p$pi41=Lsub;
										}
										break;
									}
								}else{
									L$p$pi41=Lshr;
								}
								if((L$p$pi41|0)===0)Lx0.i2=0;
								if((Lshr|0)>0){
									L$p$pi41=Lshr;
									while(1){
										Lsub=L$p$pi41-1|0;
										if((tmp8[Lsub]|0)===0){
											Ly0.i0=Lsub;
											if((L$p$pi41|0)>1){
												L$p$pi41=Lsub;
												continue;
											}
											L$p$pi41=Lsub;
										}
										break;
									}
								}else{
									L$p$pi41=Lshr;
								}
								if((L$p$pi41|0)===0)Ly0.i2=0;
								if((_mp_mul(Lx0,Ly0,Lx0y0)|0|0)===0){
									if((_mp_mul(Lx1,Ly1,Lx1y1)|0|0)===0){
										if((_s_mp_add(Lx1,Lx0,Lt1)|0|0)===0){
											if((_s_mp_add(Ly1,Ly0,Lx0)|0|0)===0){
												if((_mp_mul(Lt1,Lx0,Lt1)|0|0)===0){
													if((_mp_add(Lx0y0,Lx1y1,Lx0)|0|0)===0){
														if((_s_mp_sub(Lt1,Lx0,Lt1)|0|0)===0){
															if((_mp_lshd(Lt1,Lshr)|0|0)===0){
																if((_mp_lshd(Lx1y1,L$p$pi)|0|0)===0){
																	if((_mp_add(Lx0y0,Lt1,Lt1)|0|0)===0){
																		Lshr=_mp_add(Lt1,Lx1y1,Lc)|0;
																		Lshr=(Lshr|0)!==0? -2|0:0|0;
																	}else{
																		Lshr=-2;
																	}
																}else{
																	Lshr=-2;
																}
															}else{
																Lshr=-2;
															}
														}else{
															Lshr=-2;
														}
													}else{
														Lshr=-2;
													}
												}else{
													Lshr=-2;
												}
											}else{
												Lshr=-2;
											}
										}else{
											Lshr=-2;
										}
									}else{
										Lshr=-2;
									}
								}else{
									Lshr=-2;
								}
								tmp15=Lx1y1.a3;
								if(tmp15.length!==1||tmp15!==nullArray||0!==0){
									if(tmp15.length!==1||tmp15!==nullArray||0!==0){
										L$p$pi=Lx1y1.i1<<2;
										if((L$p$pi|0)!==0){
											L$p$pi41=0;
											while(1){
												tmp15[L$p$pi41]=0;
												L$p$pi=L$p$pi-1|0;
												if((L$p$pi|0)!==0){
													L$p$pi41=L$p$pi41+1|0;
													continue;
												}
												break;
											}
										}
									}
									Lx1y1.a3=nullArray;
									Lx1y1.i0=0;
									Lx1y1.i1=0;
									Lx1y1.i2=0;
								}
							}
							tmp15=Lx0y0.a3;
							if(tmp15.length!==1||tmp15!==nullArray||0!==0){
								if(tmp15.length!==1||tmp15!==nullArray||0!==0){
									L$p$pi=Lx0y0.i1<<2;
									if((L$p$pi|0)!==0){
										L$p$pi41=0;
										while(1){
											tmp15[L$p$pi41]=0;
											L$p$pi=L$p$pi-1|0;
											if((L$p$pi|0)!==0){
												L$p$pi41=L$p$pi41+1|0;
												continue;
											}
											break;
										}
									}
								}
								Lx0y0.a3=nullArray;
								Lx0y0.i0=0;
								Lx0y0.i1=0;
								Lx0y0.i2=0;
							}
						}
						tmp15=Lt1.a3;
						if(tmp15.length!==1||tmp15!==nullArray||0!==0){
							if(tmp15.length!==1||tmp15!==nullArray||0!==0){
								L$p$pi=Lt1.i1<<2;
								if((L$p$pi|0)!==0){
									L$p$pi41=0;
									while(1){
										tmp15[L$p$pi41]=0;
										L$p$pi=L$p$pi-1|0;
										if((L$p$pi|0)!==0){
											L$p$pi41=L$p$pi41+1|0;
											continue;
										}
										break;
									}
								}
							}
							Lt1.a3=nullArray;
							Lt1.i0=0;
							Lt1.i1=0;
							Lt1.i2=0;
						}
					}
					tmp15=Ly1.a3;
					if(tmp15.length!==1||tmp15!==nullArray||0!==0){
						if(tmp15.length!==1||tmp15!==nullArray||0!==0){
							L$p$pi=Ly1.i1<<2;
							if((L$p$pi|0)!==0){
								L$p$pi41=0;
								while(1){
									tmp15[L$p$pi41]=0;
									L$p$pi=L$p$pi-1|0;
									if((L$p$pi|0)!==0){
										L$p$pi41=L$p$pi41+1|0;
										continue;
									}
									break;
								}
							}
						}
						Ly1.a3=nullArray;
						Ly1.i0=0;
						Ly1.i1=0;
						Ly1.i2=0;
					}
				}
				tmp15=Ly0.a3;
				if(tmp15.length!==1||tmp15!==nullArray||0!==0){
					if(tmp15.length!==1||tmp15!==nullArray||0!==0){
						L$p$pi=Ly0.i1<<2;
						if((L$p$pi|0)!==0){
							L$p$pi41=0;
							while(1){
								tmp15[L$p$pi41]=0;
								L$p$pi=L$p$pi-1|0;
								if((L$p$pi|0)!==0){
									L$p$pi41=L$p$pi41+1|0;
									continue;
								}
								break;
							}
						}
					}
					Ly0.a3=nullArray;
					Ly0.i0=0;
					Ly0.i1=0;
					Ly0.i2=0;
				}
			}
			tmp15=Lx1.a3;
			if(tmp15.length!==1||tmp15!==nullArray||0!==0){
				if(tmp15.length!==1||tmp15!==nullArray||0!==0){
					L$p$pi=Lx1.i1<<2;
					if((L$p$pi|0)!==0){
						L$p$pi41=0;
						while(1){
							tmp15[L$p$pi41]=0;
							L$p$pi=L$p$pi-1|0;
							if((L$p$pi|0)!==0){
								L$p$pi41=L$p$pi41+1|0;
								continue;
							}
							break;
						}
					}
				}
				Lx1.a3=nullArray;
				Lx1.i0=0;
				Lx1.i1=0;
				Lx1.i2=0;
			}
		}
		tmp15=Lx0.a3;
		if(tmp15.length!==1||tmp15!==nullArray||0!==0){
			if(tmp15.length!==1||tmp15!==nullArray||0!==0){
				L$p$pi=Lx0.i1<<2;
				if((L$p$pi|0)!==0){
					L$p$pi41=0;
					while(1){
						tmp15[L$p$pi41]=0;
						L$p$pi=L$p$pi-1|0;
						if((L$p$pi|0)!==0){
							L$p$pi41=L$p$pi41+1|0;
							continue;
						}
						break;
					}
				}
			}
			Lx0.a3=nullArray;
			Lx0.i0=0;
			Lx0.i1=0;
			Lx0.i2=0;
		}
	}
	return Lshr|0;
}
function _s_mp_karatsuba_sqr(La,Lb){
	var Lx0=null,Lx1=null,Lt1=null,Lt2=null,Lx0x0=null,Lx1x1=null,tmp6=null,Lshr=0,L$p$pi=0,tmp9=null,L$p$pi41=0,tmp11=null,Lgeptoindexphi2=0,Lx$p092=0,tmp14=0;
	Lx0={i0:0,i1:0,i2:0,a3:nullArray};
	Lx1={i0:0,i1:0,i2:0,a3:nullArray};
	Lt1={i0:0,i1:0,i2:0,a3:nullArray};
	Lt2={i0:0,i1:0,i2:0,a3:nullArray};
	Lx0x0={i0:0,i1:0,i2:0,a3:nullArray};
	Lx1x1={i0:0,i1:0,i2:0,a3:nullArray};
	Lshr=La.i0>>1;
	L$p$pi=(Lshr|0)<3?3|0:Lshr|0;
	tmp9=new Int32Array((L$p$pi<<2)/4|0);
	Lx0.a3=tmp9;
	if((L$p$pi&1073741823|0)===0&&(tmp9.length===1&&tmp9===nullArray&&0===0)){
		Lshr=-2;
	}else{
		Lx0.i0=0;
		Lx0.i1=L$p$pi;
		Lx0.i2=0;
		L$p$pi=(La.i0|0)-Lshr|0;
		L$p$pi=(L$p$pi|0)<3?3|0:L$p$pi|0;
		tmp6=new Int32Array((L$p$pi<<2)/4|0);
		Lx1.a3=tmp6;
		if((L$p$pi&1073741823|0)===0&&(tmp6.length===1&&tmp6===nullArray&&0===0)){
			Lshr=-2;
		}else{
			Lx1.i0=0;
			Lx1.i1=L$p$pi;
			Lx1.i2=0;
			L$p$pi=La.i0<<1;
			L$p$pi=(L$p$pi|0)<3?3|0:L$p$pi|0;
			tmp11=new Int32Array((L$p$pi<<2)/4|0);
			Lt1.a3=tmp11;
			if((L$p$pi&1073741823|0)===0&&(tmp11.length===1&&tmp11===nullArray&&0===0)){
				Lshr=-2;
			}else{
				Lt1.i0=0;
				Lt1.i1=L$p$pi;
				Lt1.i2=0;
				L$p$pi=La.i0<<1;
				L$p$pi=(L$p$pi|0)<3?3|0:L$p$pi|0;
				tmp11=new Int32Array((L$p$pi<<2)/4|0);
				Lt2.a3=tmp11;
				if((L$p$pi&1073741823|0)===0&&(tmp11.length===1&&tmp11===nullArray&&0===0)){
					Lshr=-2;
				}else{
					Lt2.i0=0;
					Lt2.i1=L$p$pi;
					Lt2.i2=0;
					L$p$pi=Lshr<<1;
					L$p$pi41=(L$p$pi|0)<3?3|0:L$p$pi|0;
					tmp11=new Int32Array((L$p$pi41<<2)/4|0);
					Lx0x0.a3=tmp11;
					if((L$p$pi41&1073741823|0)===0&&(tmp11.length===1&&tmp11===nullArray&&0===0)){
						Lshr=-2;
					}else{
						Lx0x0.i0=0;
						Lx0x0.i1=L$p$pi41;
						Lx0x0.i2=0;
						L$p$pi41=(La.i0|0)-Lshr<<1;
						L$p$pi41=(L$p$pi41|0)<3?3|0:L$p$pi41|0;
						tmp11=new Int32Array((L$p$pi41<<2)/4|0);
						Lx1x1.a3=tmp11;
						if((L$p$pi41&1073741823|0)===0&&(tmp11.length===1&&tmp11===nullArray&&0===0)){
							Lshr=-2;
						}else{
							Lx1x1.i0=0;
							Lx1x1.i1=L$p$pi41;
							Lx1x1.i2=0;
							tmp11=La.a3;
							if((Lshr|0)>0){
								Lx$p092=0;
								Lgeptoindexphi2=0;
								L$p$pi41=0;
								while(1){
									tmp9[Lgeptoindexphi2]=tmp11[L$p$pi41]|0;
									Lx$p092=Lx$p092+1|0;
									if((Lx$p092|0)<(Lshr|0)){
										L$p$pi41=L$p$pi41+1|0;
										Lgeptoindexphi2=Lgeptoindexphi2+1|0;
										continue;
									}
									break;
								}
								L$p$pi41=Lshr;
							}else{
								L$p$pi41=0;
							}
							tmp14=La.i0|0;
							if((Lshr|0)<(tmp14|0)){
								Lx$p092=Lshr;
								Lgeptoindexphi2=0;
								while(1){
									tmp6[Lgeptoindexphi2]=tmp11[L$p$pi41]|0;
									tmp14=La.i0|0;
									Lx$p092=Lx$p092+1|0;
									if((Lx$p092|0)<(tmp14|0)){
										L$p$pi41=L$p$pi41+1|0;
										Lgeptoindexphi2=Lgeptoindexphi2+1|0;
										continue;
									}
									break;
								}
							}
							Lx0.i0=Lshr;
							Lx1.i0=tmp14-Lshr|0;
							if((Lshr|0)>0){
								L$p$pi41=Lshr;
								while(1){
									Lgeptoindexphi2=L$p$pi41-1|0;
									if((tmp9[Lgeptoindexphi2]|0)===0){
										Lx0.i0=Lgeptoindexphi2;
										if((L$p$pi41|0)>1){
											L$p$pi41=Lgeptoindexphi2;
											continue;
										}
										L$p$pi41=Lgeptoindexphi2;
									}
									break;
								}
							}else{
								L$p$pi41=Lshr;
							}
							if((L$p$pi41|0)===0)Lx0.i2=0;
							if((_mp_sqr(Lx0,Lx0x0)|0|0)===0){
								if((_mp_sqr(Lx1,Lx1x1)|0|0)===0){
									if((_s_mp_add(Lx1,Lx0,Lt1)|0|0)===0){
										if((_mp_sqr(Lt1,Lt1)|0|0)===0){
											if((_s_mp_add(Lx0x0,Lx1x1,Lt2)|0|0)===0){
												if((_s_mp_sub(Lt1,Lt2,Lt1)|0|0)===0){
													if((_mp_lshd(Lt1,Lshr)|0|0)===0){
														if((_mp_lshd(Lx1x1,L$p$pi)|0|0)===0){
															if((_mp_add(Lx0x0,Lt1,Lt1)|0|0)===0){
																Lshr=_mp_add(Lt1,Lx1x1,Lb)|0;
																Lshr=(Lshr|0)!==0? -2|0:0|0;
															}else{
																Lshr=-2;
															}
														}else{
															Lshr=-2;
														}
													}else{
														Lshr=-2;
													}
												}else{
													Lshr=-2;
												}
											}else{
												Lshr=-2;
											}
										}else{
											Lshr=-2;
										}
									}else{
										Lshr=-2;
									}
								}else{
									Lshr=-2;
								}
							}else{
								Lshr=-2;
							}
							tmp9=Lx1x1.a3;
							if(tmp9.length!==1||tmp9!==nullArray||0!==0){
								if(tmp9.length!==1||tmp9!==nullArray||0!==0){
									L$p$pi=Lx1x1.i1<<2;
									if((L$p$pi|0)!==0){
										L$p$pi41=0;
										while(1){
											tmp9[L$p$pi41]=0;
											L$p$pi=L$p$pi-1|0;
											if((L$p$pi|0)!==0){
												L$p$pi41=L$p$pi41+1|0;
												continue;
											}
											break;
										}
									}
								}
								Lx1x1.a3=nullArray;
								Lx1x1.i0=0;
								Lx1x1.i1=0;
								Lx1x1.i2=0;
							}
						}
						tmp9=Lx0x0.a3;
						if(tmp9.length!==1||tmp9!==nullArray||0!==0){
							if(tmp9.length!==1||tmp9!==nullArray||0!==0){
								L$p$pi=Lx0x0.i1<<2;
								if((L$p$pi|0)!==0){
									L$p$pi41=0;
									while(1){
										tmp9[L$p$pi41]=0;
										L$p$pi=L$p$pi-1|0;
										if((L$p$pi|0)!==0){
											L$p$pi41=L$p$pi41+1|0;
											continue;
										}
										break;
									}
								}
							}
							Lx0x0.a3=nullArray;
							Lx0x0.i0=0;
							Lx0x0.i1=0;
							Lx0x0.i2=0;
						}
					}
					tmp9=Lt2.a3;
					if(tmp9.length!==1||tmp9!==nullArray||0!==0){
						if(tmp9.length!==1||tmp9!==nullArray||0!==0){
							L$p$pi=Lt2.i1<<2;
							if((L$p$pi|0)!==0){
								L$p$pi41=0;
								while(1){
									tmp9[L$p$pi41]=0;
									L$p$pi=L$p$pi-1|0;
									if((L$p$pi|0)!==0){
										L$p$pi41=L$p$pi41+1|0;
										continue;
									}
									break;
								}
							}
						}
						Lt2.a3=nullArray;
						Lt2.i0=0;
						Lt2.i1=0;
						Lt2.i2=0;
					}
				}
				tmp9=Lt1.a3;
				if(tmp9.length!==1||tmp9!==nullArray||0!==0){
					if(tmp9.length!==1||tmp9!==nullArray||0!==0){
						L$p$pi=Lt1.i1<<2;
						if((L$p$pi|0)!==0){
							L$p$pi41=0;
							while(1){
								tmp9[L$p$pi41]=0;
								L$p$pi=L$p$pi-1|0;
								if((L$p$pi|0)!==0){
									L$p$pi41=L$p$pi41+1|0;
									continue;
								}
								break;
							}
						}
					}
					Lt1.a3=nullArray;
					Lt1.i0=0;
					Lt1.i1=0;
					Lt1.i2=0;
				}
			}
			tmp9=Lx1.a3;
			if(tmp9.length!==1||tmp9!==nullArray||0!==0){
				if(tmp9.length!==1||tmp9!==nullArray||0!==0){
					L$p$pi=Lx1.i1<<2;
					if((L$p$pi|0)!==0){
						L$p$pi41=0;
						while(1){
							tmp9[L$p$pi41]=0;
							L$p$pi=L$p$pi-1|0;
							if((L$p$pi|0)!==0){
								L$p$pi41=L$p$pi41+1|0;
								continue;
							}
							break;
						}
					}
				}
				Lx1.a3=nullArray;
				Lx1.i0=0;
				Lx1.i1=0;
				Lx1.i2=0;
			}
		}
		tmp9=Lx0.a3;
		if(tmp9.length!==1||tmp9!==nullArray||0!==0){
			if(tmp9.length!==1||tmp9!==nullArray||0!==0){
				L$p$pi=Lx0.i1<<2;
				if((L$p$pi|0)!==0){
					L$p$pi41=0;
					while(1){
						tmp9[L$p$pi41]=0;
						L$p$pi=L$p$pi-1|0;
						if((L$p$pi|0)!==0){
							L$p$pi41=L$p$pi41+1|0;
							continue;
						}
						break;
					}
				}
			}
			Lx0.a3=nullArray;
			Lx0.i0=0;
			Lx0.i1=0;
			Lx0.i2=0;
		}
	}
	return Lshr|0;
}
function _s_mp_mul_digs(La,Lb,Lc,Ldigs){
	var tmp0=null,tmp1=null,tmp2=0,Lgeptoindexphi=0,Lgeptoindexphi2=0,tmp5=0,tmp6=0,tmp7=0,tmp8=0,tmp9=0,tmp10=0,tmp11=0,Ladd26=0,Ladd29=0,Lcall=0,Lt$psroa$p0$p0=0,tmp16=null,Lix$p083=0,L$psub=0,Lsub=0,tmp20=0,Liy$p076=0,Lgeptoindex3=0,tmp23=0;
	if((Ldigs|0)<512){
		Lcall=La.i0|0;
		Lt$psroa$p0$p0=Lb.i0|0;
		if((((Lcall|0)<(Lt$psroa$p0$p0|0)?Lcall|0:Lt$psroa$p0$p0|0)|0)<256){
			Lcall=_s_mp_mul_digs_fast(La,Lb,Lc,Ldigs)|0;
			return Lcall|0;
		}
	}
	Lcall=(Ldigs|0)<3?3|0:Ldigs|0;
	tmp0=new Int32Array((Lcall<<2)/4|0);
	if((Lcall&1073741823|0)===0&&(tmp0.length===1&&tmp0===nullArray&&0===0))return  -2|0;
	Lt$psroa$p0$p0=La.i0|0;
	if((Lt$psroa$p0$p0|0)>0){
		tmp16=La.a3;
		tmp1=Lb.a3;
		Lix$p083=0;
		while(1){
			L$psub=Lb.i0|0;
			Lsub=Ldigs-Lix$p083|0;
			L$psub=(L$psub|0)<(Lsub|0)?L$psub|0:Lsub|0;
			tmp20=tmp16[Lix$p083]|0;
			if((L$psub|0)>0){
				tmp2=tmp20&65535;
				tmp20>>>=16;
				Lgeptoindexphi2=Lix$p083;
				Liy$p076=0;
				Lsub=0;
				Lgeptoindexphi=0;
				while(1){
					tmp5=tmp0[Lgeptoindexphi2]|0;
					Lgeptoindex3=tmp1[Lgeptoindexphi]|0;
					tmp23=Lgeptoindex3>>>16;
					tmp6=__imul(tmp23,tmp20)|0;
					Lgeptoindex3&=65535;
					tmp7=__imul(Lgeptoindex3,tmp20)|0;
					tmp23=__imul(tmp23,tmp2)|0;
					tmp8=tmp7+tmp23|0;
					tmp9=__imul(Lgeptoindex3,tmp2)|0;
					tmp10=tmp8<<16;
					tmp11=tmp10+tmp9|0;
					Ladd26=tmp11+tmp5|0;
					Ladd29=Ladd26+Lsub|0;
					Lgeptoindex3=Lgeptoindexphi2+1|0;
					tmp0[Lgeptoindexphi2]=Ladd29&268435455;
					Lsub=((((tmp8>>>16)+(tmp7>>>0>(tmp23^ -1)>>>0?tmp6+65536|0:tmp6|0)|0)+((tmp10>>>0>(tmp9^ -1)>>>0?1:0)?1:0)|0)+((tmp5>>>0>(tmp11^ -1)>>>0?1:0)?1:0)|0)+((Ladd26>>>0>(Lsub^ -1)>>>0?1:0)?1:0)<<4|Ladd29>>>28;
					Liy$p076=Liy$p076+1|0;
					if((Liy$p076|0)<(L$psub|0)){
						Lgeptoindexphi=Lgeptoindexphi+1|0;
						Lgeptoindexphi2=Lgeptoindex3;
						continue;
					}
					break;
				}
			}else{
				Lgeptoindex3=Lix$p083;
				L$psub=0;
				Lsub=0;
			}
			if((L$psub+Lix$p083|0)<(Ldigs|0))tmp0[Lgeptoindex3]=Lsub;
			Lix$p083=Lix$p083+1|0;
			if((Lix$p083|0)<(Lt$psroa$p0$p0|0))continue;
			break;
		}
	}
	if((Ldigs|0)>0){
		Lt$psroa$p0$p0=Ldigs;
		while(1){
			Lix$p083=Lt$psroa$p0$p0-1|0;
			if((tmp0[Lix$p083]|0)===0){
				if((Lt$psroa$p0$p0|0)>1){
					Lt$psroa$p0$p0=Lix$p083;
					continue;
				}
				Lt$psroa$p0$p0=Lix$p083;
			}
			break;
		}
	}else{
		Lt$psroa$p0$p0=Ldigs;
	}
	Lix$p083=Lc.i1|0;
	tmp16=Lc.a3;
	Lc.i0=Lt$psroa$p0$p0;
	Lc.i1=Lcall;
	Lc.i2=0;
	Lc.a3=tmp0;
	if(tmp16.length===1&&tmp16===nullArray&&0===0)return 0|0;
	if(tmp16.length===1&&tmp16===nullArray&&0===0)return 0|0;
	Lix$p083<<=2;
	if((Lix$p083|0)===0)return 0|0;
	Lt$psroa$p0$p0=0;
	while(1){
		tmp16[Lt$psroa$p0$p0]=0;
		Lix$p083=Lix$p083-1|0;
		if((Lix$p083|0)===0)return 0|0;
		Lt$psroa$p0$p0=Lt$psroa$p0$p0+1|0;
		continue;
	}
}
function _s_mp_mul_digs_fast(La,Lb,Lc,Ldigs){
	var LW=null,tmp1=0,tmp2=0,tmp3=null,Ladd23$psub22=0,tmp5=0,tmp6=0,tmp7=0,tmp8=0,Lcall=0,tmp10=null,Lsub=0,Lix$p095=0,L_W$psroa$p8$p094=0,L_W$psroa$p0$p093=0,Lix$p0$psub=0,Lsub18=0,Lsub22=0,Liz$p087=0,tmp19=0,tmp20=0,tmp21=0;
	LW=new Int32Array(512);
	if((Lc.i1|0)<(Ldigs|0)){
		Lcall=_mp_grow(Lc,Ldigs)|0;
		if((Lcall|0)!==0)return Lcall|0;
	}
	tmp1=La.i0|0;
	tmp2=Lb.i0|0;
	Lcall=tmp2+tmp1|0;
	Lcall=(Lcall|0)>(Ldigs|0)?Ldigs|0:Lcall|0;
	if((Lcall|0)>0){
		tmp10=La.a3;
		tmp3=Lb.a3;
		Lsub=tmp2-1|0;
		L_W$psroa$p0$p093=0;
		L_W$psroa$p8$p094=0;
		Lix$p095=0;
		while(1){
			Lix$p0$psub=(tmp2|0)>(Lix$p095|0)?Lix$p095|0:Lsub|0;
			Lsub18=Lix$p095-Lix$p0$psub|0;
			Lsub22=tmp1-Lsub18|0;
			Ladd23$psub22=(Lsub22|0)>(Lix$p0$psub|0)?Lix$p0$psub+1|0:Lsub22|0;
			if((Ladd23$psub22|0)>0){
				Liz$p087=0;
				while(1){
					Lsub22=tmp10[Lsub18]|0;
					tmp19=tmp3[Lix$p0$psub]|0;
					tmp20=tmp19>>>16;
					tmp21=Lsub22>>>16;
					tmp5=__imul(tmp20,tmp21)|0;
					tmp19&=65535;
					tmp21=__imul(tmp19,tmp21)|0;
					Lsub22&=65535;
					tmp20=__imul(tmp20,Lsub22)|0;
					tmp6=tmp21+tmp20|0;
					tmp19=__imul(tmp19,Lsub22)|0;
					tmp7=tmp6<<16;
					tmp8=tmp7+tmp19|0;
					Lsub22=tmp8+L_W$psroa$p0$p093|0;
					L_W$psroa$p8$p094=((((tmp21>>>0>(tmp20^ -1)>>>0?tmp5+65536|0:tmp5|0)+L_W$psroa$p8$p094|0)+(tmp6>>>16)|0)+((tmp7>>>0>(tmp19^ -1)>>>0?1:0)?1:0)|0)+((L_W$psroa$p0$p093>>>0>(tmp8^ -1)>>>0?1:0)?1:0)|0;
					Liz$p087=Liz$p087+1|0;
					if((Liz$p087|0)<(Ladd23$psub22|0)){
						L_W$psroa$p0$p093=Lsub22;
						Lix$p0$psub=Lix$p0$psub-1|0;
						Lsub18=Lsub18+1|0;
						continue;
					}
					break;
				}
				L_W$psroa$p0$p093=Lsub22;
			}
			LW[Lix$p095]=L_W$psroa$p0$p093&268435455;
			L_W$psroa$p0$p093=L_W$psroa$p0$p093>>>28|L_W$psroa$p8$p094<<4;
			Lix$p095=Lix$p095+1|0;
			if((Lix$p095|0)<(Lcall|0)){
				L_W$psroa$p8$p094>>>=28;
				continue;
			}
			break;
		}
	}
	L_W$psroa$p0$p093=Lc.i0|0;
	Lc.i0=Lcall;
	tmp10=Lc.a3;
	if((Lcall|0)>0){
		Lix$p095=0;
		L_W$psroa$p8$p094=0;
		while(1){
			Lsub=L_W$psroa$p8$p094+1|0;
			tmp10[L_W$psroa$p8$p094]=LW[Lix$p095]|0;
			Lix$p095=Lix$p095+1|0;
			if((Lix$p095|0)<(Lcall|0)){
				L_W$psroa$p8$p094=Lsub;
				continue;
			}
			break;
		}
	}else{
		Lcall=0;
		Lsub=0;
	}
	Lcall=L_W$psroa$p0$p093-Lcall|0;
	if((Lcall|0)>0)while(1){
		tmp10[Lsub]=0;
		if((Lcall|0)>1){
			Lcall=Lcall-1|0;
			Lsub=Lsub+1|0;
			continue;
		}
		break;
	}
	Lcall=Lc.i0|0;
	if((Lcall|0)>0)while(1){
		Lsub=Lcall-1|0;
		if((tmp10[Lsub]|0)===0){
			Lc.i0=Lsub;
			if((Lcall|0)>1){
				Lcall=Lsub;
				continue;
			}
			Lcall=Lsub;
		}
		break;
	}
	if((Lcall|0)===0){
		Lc.i2=0;
		return 0|0;
	}
	return 0|0;
}
function _s_mp_sqr(La,Lb){
	var L$p$pi=0,tmp1=null,Lgeptoindexphi=0,tmp3=0,tmp4=0,tmp5=0,Ladd28=0,tmp7=0,Ladd34=0,Lsub$pi=0,Ladd=0,tmp11=null,Lix$p0134=0,Lmul5=0,Lu$p0$plcssa=0,tmp15=0,Ladd40=0,tmp17=0,tmp18=0,tmp19=0,Ladd11=0,Ladd21128=0,Ladd31=0;
	Lsub$pi=La.i0|0;
	Ladd=(Lsub$pi<<1)+1|0;
	L$p$pi=(Ladd|0)<3?3|0:Ladd|0;
	tmp1=new Int32Array((L$p$pi<<2)/4|0);
	if((Lsub$pi|0)>0){
		tmp11=La.a3;
		Lgeptoindexphi=Lsub$pi;
		Lix$p0134=0;
		while(1){
			Lmul5=Lix$p0134<<1;
			Lu$p0$plcssa=tmp1[Lmul5]|0;
			tmp15=tmp11[Lix$p0134]|0;
			Ladd40=tmp15>>>16;
			tmp17=__imul(Ladd40,Ladd40)|0;
			tmp15&=65535;
			Ladd40=__imul(Ladd40,tmp15)|0;
			tmp15=__imul(tmp15,tmp15)|0;
			tmp18=Ladd40<<17;
			tmp19=tmp18+tmp15|0;
			Ladd11=tmp19+Lu$p0$plcssa|0;
			tmp1[Lmul5]=Ladd11&268435455;
			Lu$p0$plcssa=(((Ladd40>>>15&65535)+(Ladd40>>>0>(Ladd40^ -1)>>>0?tmp17+65536|0:tmp17|0)|0)+((tmp18>>>0>(tmp15^ -1)>>>0?1:0)?1:0)|0)+((Lu$p0$plcssa>>>0>(tmp19^ -1)>>>0?1:0)?1:0)<<4|Ladd11>>>28;
			tmp15=tmp11[Lix$p0134]|0;
			Lmul5=Lmul5+1|0;
			Lix$p0134=Lix$p0134+1|0;
			if((Lix$p0134|0)<(Lsub$pi|0)){
				Ladd40=tmp15&65535;
				tmp15>>>=16;
				Ladd21128=Lix$p0134;
				while(1){
					tmp17=tmp11[Ladd21128]|0;
					tmp19=tmp17>>>16;
					Ladd11=__imul(tmp19,tmp15)|0;
					tmp17&=65535;
					tmp18=__imul(tmp17,tmp15)|0;
					tmp19=__imul(tmp19,Ladd40)|0;
					tmp3=tmp18+tmp19|0;
					tmp17=__imul(tmp17,Ladd40)|0;
					tmp4=tmp3<<16;
					Ladd31=tmp4+tmp17|0;
					tmp5=tmp1[Lmul5]|0;
					Ladd28=Ladd31+tmp5|0;
					tmp7=Ladd31^ -1;
					Ladd31=Ladd28+Ladd31|0;
					Ladd34=Ladd31+Lu$p0$plcssa|0;
					tmp1[Lmul5]=Ladd34&268435455;
					Lu$p0$plcssa=((((Ladd28>>>0>tmp7>>>0?1:0)?1:0)+((tmp5>>>0>tmp7>>>0?1:0)?1:0)|0)+(((tmp3>>>16)+(tmp18>>>0>(tmp19^ -1)>>>0?Ladd11+65536|0:Ladd11|0)|0)+((tmp4>>>0>(tmp17^ -1)>>>0?1:0)?1:0)<<1)|0)+((Ladd31>>>0>(Lu$p0$plcssa^ -1)>>>0?1:0)?1:0)<<4|Ladd34>>>28;
					Ladd21128=Ladd21128+1|0;
					if((Ladd21128|0)<(Lsub$pi|0)){
						Lmul5=Lmul5+1|0;
						continue;
					}
					break;
				}
				Lmul5=Lgeptoindexphi;
			}
			if((Lu$p0$plcssa|0)!==0)while(1){
				tmp15=tmp1[Lmul5]|0;
				Ladd40=tmp15+Lu$p0$plcssa|0;
				tmp1[Lmul5]=Ladd40&268435455;
				Lu$p0$plcssa=((tmp15>>>0>(Lu$p0$plcssa^ -1)>>>0?1:0)?1:0)<<4|Ladd40>>>28;
				if((Lu$p0$plcssa|0)!==0){
					Lmul5=Lmul5+1|0;
					continue;
				}
				break;
			}
			if((Lix$p0134|0)<(Lsub$pi|0)){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				continue;
			}
			break;
		}
	}
	if((Lsub$pi|0)>-1)while(1){
		Lsub$pi=Ladd-1|0;
		if((tmp1[Lsub$pi]|0)===0){
			if((Ladd|0)>1){
				Ladd=Lsub$pi;
				continue;
			}
			Ladd=Lsub$pi;
		}
		break;
	}
	Lsub$pi=Lb.i1|0;
	tmp11=Lb.a3;
	Lb.i0=Ladd;
	Lb.i1=L$p$pi;
	Lb.i2=0;
	Lb.a3=tmp1;
	if(tmp11.length!==1||tmp11!==nullArray||0!==0)if(tmp11.length!==1||tmp11!==nullArray||0!==0){
		Lsub$pi<<=2;
		if((Lsub$pi|0)!==0){
			Ladd=0;
			while(1){
				tmp11[Ladd]=0;
				Lsub$pi=Lsub$pi-1|0;
				if((Lsub$pi|0)!==0){
					Ladd=Ladd+1|0;
					continue;
				}
				break;
			}
		}
	}
	return 0|0;
}
function _s_mp_sqr_fast(La,Lb){
	var LW=null,Ladd=0,L_W$psroa$p0$p0132=0,tmp3=0,tmp4=0,tmp5=0,tmp6=0,Lix$p1128=0,Lcall=0,tmp9=null,Lsub=0,Lix$p0142=0,LW1$psroa$p5$p0141=0,LW1$psroa$p0$p0140=0,Lix$p0$psub=0,Lsub10=0,Lsub14=0,Ladd15=0,Liz$p0135=0,L_W$psroa$p12$p0133=0,tmp20=0,tmp21=0,tmp22=0;
	LW=new Int32Array(512);
	Lix$p1128=La.i0|0;
	Ladd=Lix$p1128<<1;
	if((Lb.i1|0)<(Ladd|0)){
		Lcall=_mp_grow(Lb,Ladd)|0;
		if((Lcall|0)!==0)return Lcall|0;
	}
	if((Lix$p1128|0)>0){
		tmp9=La.a3;
		Lcall=La.i0|0;
		Lsub=Lcall-1|0;
		LW1$psroa$p0$p0140=0;
		LW1$psroa$p5$p0141=0;
		Lix$p0142=0;
		while(1){
			Lix$p0$psub=(Lcall|0)>(Lix$p0142|0)?Lix$p0142|0:Lsub|0;
			Lsub10=Lix$p0142-Lix$p0$psub|0;
			Lsub14=Lcall-Lsub10|0;
			Ladd15=Lix$p0$psub+1|0;
			Lsub14=(Lsub14|0)>(Lix$p0$psub|0)?Ladd15|0:Lsub14|0;
			Ladd15=Ladd15-Lsub10>>1;
			Lsub14=(Lsub14|0)<(Ladd15|0)?Lsub14|0:Ladd15|0;
			if((Lsub14|0)>0){
				L_W$psroa$p0$p0132=0;
				L_W$psroa$p12$p0133=0;
				Liz$p0135=0;
				while(1){
					Ladd15=tmp9[Lsub10]|0;
					tmp20=tmp9[Lix$p0$psub]|0;
					tmp21=tmp20>>>16;
					tmp22=Ladd15>>>16;
					tmp3=__imul(tmp21,tmp22)|0;
					tmp20&=65535;
					tmp22=__imul(tmp20,tmp22)|0;
					Ladd15&=65535;
					tmp21=__imul(tmp21,Ladd15)|0;
					tmp4=tmp22+tmp21|0;
					tmp20=__imul(tmp20,Ladd15)|0;
					tmp5=tmp4<<16;
					tmp6=tmp5+tmp20|0;
					Ladd15=tmp6+L_W$psroa$p0$p0132|0;
					L_W$psroa$p12$p0133=((((tmp22>>>0>(tmp21^ -1)>>>0?tmp3+65536|0:tmp3|0)+L_W$psroa$p12$p0133|0)+(tmp4>>>16)|0)+((tmp5>>>0>(tmp20^ -1)>>>0?1:0)?1:0)|0)+((L_W$psroa$p0$p0132>>>0>(tmp6^ -1)>>>0?1:0)?1:0)|0;
					Liz$p0135=Liz$p0135+1|0;
					if((Liz$p0135|0)<(Lsub14|0)){
						L_W$psroa$p0$p0132=Ladd15;
						Lix$p0$psub=Lix$p0$psub-1|0;
						Lsub10=Lsub10+1|0;
						continue;
					}
					break;
				}
			}else{
				Ladd15=0;
				L_W$psroa$p12$p0133=0;
			}
			Lsub10=Ladd15<<1;
			Lix$p0$psub=Lsub10+LW1$psroa$p0$p0140|0;
			Ladd15=(((L_W$psroa$p12$p0133<<1)+LW1$psroa$p5$p0141|0)+((Ladd15>>>0>(Ladd15^ -1)>>>0?1:0)?1:0)|0)+((Lsub10>>>0>(LW1$psroa$p0$p0140^ -1)>>>0?1:0)?1:0)|0;
			if((Lix$p0142&1|0)===0){
				LW1$psroa$p5$p0141=tmp9[Lix$p0142>>>1]|0;
				LW1$psroa$p0$p0140=LW1$psroa$p5$p0141>>>16;
				Lsub10=__imul(LW1$psroa$p0$p0140,LW1$psroa$p0$p0140)|0;
				LW1$psroa$p5$p0141&=65535;
				LW1$psroa$p0$p0140=__imul(LW1$psroa$p0$p0140,LW1$psroa$p5$p0141)|0;
				LW1$psroa$p5$p0141=__imul(LW1$psroa$p5$p0141,LW1$psroa$p5$p0141)|0;
				Lsub14=LW1$psroa$p0$p0140<<17;
				L_W$psroa$p12$p0133=Lsub14+LW1$psroa$p5$p0141|0;
				Ladd15=((((LW1$psroa$p0$p0140>>>0>(LW1$psroa$p0$p0140^ -1)>>>0?Lsub10+65536|0:Lsub10|0)+Ladd15|0)+(LW1$psroa$p0$p0140>>>15&65535)|0)+((Lsub14>>>0>(LW1$psroa$p5$p0141^ -1)>>>0?1:0)?1:0)|0)+((Lix$p0$psub>>>0>(L_W$psroa$p12$p0133^ -1)>>>0?1:0)?1:0)|0;
				Lix$p0$psub=L_W$psroa$p12$p0133+Lix$p0$psub|0;
			}
			LW[Lix$p0142]=Lix$p0$psub&268435455;
			LW1$psroa$p0$p0140=Ladd15<<4|Lix$p0$psub>>>28;
			Lix$p0142=Lix$p0142+1|0;
			if((Lix$p0142|0)<(Ladd|0)){
				LW1$psroa$p5$p0141=Ladd15>>>28;
				continue;
			}
			break;
		}
	}else Lcall=La.i0|0;
	Lsub=Lb.i0|0;
	Lb.i0=Lcall<<1;
	tmp9=Lb.a3;
	if((Lix$p1128|0)>0){
		Lix$p1128=0;
		Lix$p0142=0;
		while(1){
			Lcall=Lix$p0142+1|0;
			tmp9[Lix$p0142]=LW[Lix$p1128]&268435455;
			Lix$p1128=Lix$p1128+1|0;
			if((Lix$p1128|0)<(Ladd|0)){
				Lix$p0142=Lcall;
				continue;
			}
			break;
		}
	}else{
		Lix$p1128=0;
		Lcall=0;
	}
	Lix$p1128=Lsub-Lix$p1128|0;
	if((Lix$p1128|0)>0)while(1){
		tmp9[Lcall]=0;
		if((Lix$p1128|0)>1){
			Lix$p1128=Lix$p1128-1|0;
			Lcall=Lcall+1|0;
			continue;
		}
		break;
	}
	Lcall=Lb.i0|0;
	if((Lcall|0)>0)while(1){
		Lix$p1128=Lcall-1|0;
		if((tmp9[Lix$p1128]|0)===0){
			Lb.i0=Lix$p1128;
			if((Lcall|0)>1){
				Lcall=Lix$p1128;
				continue;
			}
			Lcall=Lix$p1128;
		}
		break;
	}
	if((Lcall|0)===0){
		Lb.i2=0;
		return 0|0;
	}
	return 0|0;
}
function _s_mp_sub(La,Lb,Lc){
	var tmp0=0,tmp1=0,tmp2=null,tmp3=null,tmp4=null,Lgeptoindexphi1=0,Lcall=0,Lgeptoindexphi=0,Lgeptoindexphi6=0,Lgeptoindexphi9=0,Lu$p0$plcssa=0;
	Lgeptoindexphi1=Lb.i0|0;
	tmp0=La.i0|0;
	if((Lc.i1|0)<(tmp0|0)){
		Lcall=_mp_grow(Lc,tmp0)|0;
		if((Lcall|0)!==0)return Lcall|0;
	}
	tmp1=Lc.i0|0;
	Lc.i0=tmp0;
	tmp2=La.a3;
	tmp3=Lc.a3;
	if((Lgeptoindexphi1|0)>0){
		tmp4=Lb.a3;
		Lu$p0$plcssa=0;
		Lgeptoindexphi9=0;
		Lgeptoindexphi6=0;
		Lgeptoindexphi=0;
		Lcall=0;
		while(1){
			Lu$p0$plcssa=((tmp2[Lgeptoindexphi9]|0)-(tmp4[Lgeptoindexphi6]|0)|0)-Lu$p0$plcssa|0;
			tmp3[Lgeptoindexphi]=Lu$p0$plcssa&268435455;
			Lcall=Lcall+1|0;
			Lu$p0$plcssa>>>=31;
			if((Lcall|0)<(Lgeptoindexphi1|0)){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				Lgeptoindexphi6=Lgeptoindexphi6+1|0;
				Lgeptoindexphi9=Lgeptoindexphi9+1|0;
				continue;
			}
			break;
		}
		Lgeptoindexphi=Lgeptoindexphi1;
		Lcall=Lgeptoindexphi1;
	}else{
		Lu$p0$plcssa=0;
		Lgeptoindexphi1=0;
		Lgeptoindexphi=0;
		Lcall=0;
	}
	if((tmp0|0)>(Lcall|0)){
		Lgeptoindexphi6=Lgeptoindexphi;
		Lgeptoindexphi9=Lcall;
		while(1){
			Lu$p0$plcssa=(tmp2[Lgeptoindexphi1]|0)-Lu$p0$plcssa|0;
			tmp3[Lgeptoindexphi6]=Lu$p0$plcssa&268435455;
			Lgeptoindexphi9=Lgeptoindexphi9+1|0;
			if((Lgeptoindexphi9|0)<(tmp0|0)){
				Lgeptoindexphi1=Lgeptoindexphi1+1|0;
				Lgeptoindexphi6=Lgeptoindexphi6+1|0;
				Lu$p0$plcssa>>>=31;
				continue;
			}
			break;
		}
		Lgeptoindexphi=Lgeptoindexphi+(tmp0-Lcall|0)|0;
	}
	Lcall=Lc.i0|0;
	Lgeptoindexphi1=tmp1-Lcall|0;
	if((Lgeptoindexphi1|0)>0){
		while(1){
			tmp3[Lgeptoindexphi]=0;
			if((Lgeptoindexphi1|0)>1){
				Lgeptoindexphi1=Lgeptoindexphi1-1|0;
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				continue;
			}
			break;
		}
		Lcall=Lc.i0|0;
	}
	if((Lcall|0)>0)while(1){
		Lgeptoindexphi=Lcall-1|0;
		if((tmp3[Lgeptoindexphi]|0)===0){
			Lc.i0=Lgeptoindexphi;
			if((Lcall|0)>1){
				Lcall=Lgeptoindexphi;
				continue;
			}
			Lcall=Lgeptoindexphi;
		}
		break;
	}
	if((Lcall|0)===0){
		Lc.i2=0;
		return 0|0;
	}
	return 0|0;
}
function _s_mp_toom_mul(La,Lb,Lc){
	var LS1=null,LS2=null,LT1=null,La0=null,La1=null,La2=null,Lb0=null,Lb1=null,Lb2=null,Ldiv=0,L$p$pi=0,Lcall=0,L$p=0,Linc82=0,tmp14=null,tmp15=null,Lsub$pi=0,Linc=0,Ladd=0;
	LS1={i0:0,i1:0,i2:0,a3:nullArray};
	LS2={i0:0,i1:0,i2:0,a3:nullArray};
	LT1={i0:0,i1:0,i2:0,a3:nullArray};
	La0={i0:0,i1:0,i2:0,a3:nullArray};
	La1={i0:0,i1:0,i2:0,a3:nullArray};
	La2={i0:0,i1:0,i2:0,a3:nullArray};
	Lb0={i0:0,i1:0,i2:0,a3:nullArray};
	Lb1={i0:0,i1:0,i2:0,a3:nullArray};
	Lb2={i0:0,i1:0,i2:0,a3:nullArray};
	Lcall=_mp_init_multi(LS1,LS2,LT1,null)|0;
	if((Lcall|0)===0){
		Lcall=La.i0|0;
		L$p=Lb.i0|0;
		L$p=(Lcall|0)<(L$p|0)?Lcall|0:L$p|0;
		Ldiv=(L$p|0)/3|0;
		L$p$pi=(Ldiv|0)<3?3|0:Ldiv|0;
		Linc82=L$p$pi<<2;
		tmp14=new Int32Array(Linc82/4|0);
		La0.a3=tmp14;
		if((L$p$pi&1073741823|0)===0&&(tmp14.length===1&&tmp14===nullArray&&0===0)){
			Lcall=-2;
		}else{
			La0.i0=0;
			La0.i1=L$p$pi;
			La0.i2=0;
			a:{
				if((L$p|0)>2){
					tmp15=La.a3;
					Lcall=0;
					while(1){
						tmp14[Lcall]=tmp15[Lcall]|0;
						Lsub$pi=La0.i0|0;
						Linc=Lsub$pi+1|0;
						La0.i0=Linc;
						Lcall=Lcall+1|0;
						if((Lcall|0)<(Ldiv|0))continue;
						break;
					}
					if((Lsub$pi|0)>-1)while(1){
						Lsub$pi=Linc-1|0;
						if((tmp14[Lsub$pi]|0)===0){
							La0.i0=Lsub$pi;
							if((Linc|0)>1){
								Linc=Lsub$pi;
								continue;
							}
							Linc=Lsub$pi;
						}
						break;
					}
					if((Linc|0)!==0)break a;
				}else{
					Lcall=0;
				}
				La0.i2=0;
			}
			tmp14=new Int32Array(Linc82/4|0);
			La1.a3=tmp14;
			if((L$p$pi&1073741823|0)===0&&(tmp14.length===1&&tmp14===nullArray&&0===0)){
				Lcall=-2;
			}else{
				La1.i0=0;
				La1.i1=L$p$pi;
				La1.i2=0;
				Linc=Ldiv<<1;
				a:{
					if((Lcall|0)<(Linc|0)){
						tmp15=La.a3;
						while(1){
							tmp14[Lcall-Ldiv|0]=tmp15[Lcall]|0;
							Ladd=La1.i0|0;
							Lsub$pi=Ladd+1|0;
							La1.i0=Lsub$pi;
							Lcall=Lcall+1|0;
							if((Lcall|0)<(Linc|0))continue;
							break;
						}
						if((Ladd|0)>-1)while(1){
							Lcall=Lsub$pi-1|0;
							if((tmp14[Lcall]|0)===0){
								La1.i0=Lcall;
								if((Lsub$pi|0)>1){
									Lsub$pi=Lcall;
									continue;
								}
							}else{
								Lcall=Lsub$pi;
							}
							break;
						}
						else{
							Lcall=Lsub$pi;
						}
						if((Lcall|0)!==0){
							Lcall=Linc;
							break a;
						}
						Lcall=Linc;
					}
					La1.i2=0;
				}
				Lsub$pi=__imul(Ldiv,-2)|0;
				Ladd=(La.i0|0)+Lsub$pi|0;
				Ladd=(Ladd|0)<3?3|0:Ladd|0;
				tmp14=new Int32Array((Ladd<<2)/4|0);
				La2.a3=tmp14;
				if((Ladd&1073741823|0)===0&&(tmp14.length===1&&tmp14===nullArray&&0===0)){
					Lcall=-2;
				}else{
					La2.i0=0;
					La2.i1=Ladd;
					La2.i2=0;
					if((Lcall|0)<(La.i0|0)){
						tmp15=La.a3;
						Ladd=0;
						while(1){
							tmp14[Lcall-Linc|0]=tmp15[Lcall]|0;
							Lcall=Lcall+1|0;
							Ladd=Ladd+1|0;
							if((Lcall|0)<(La.i0|0))continue;
							break;
						}
						La2.i0=Ladd;
					}
					tmp14=new Int32Array(Linc82/4|0);
					Lb0.a3=tmp14;
					if((L$p$pi&1073741823|0)===0&&(tmp14.length===1&&tmp14===nullArray&&0===0)){
						Lcall=-2;
					}else{
						Lb0.i0=0;
						Lb0.i1=L$p$pi;
						Lb0.i2=0;
						a:{
							if((L$p|0)>2){
								tmp15=Lb.a3;
								Lcall=0;
								L$p=0;
								while(1){
									tmp14[Lcall]=tmp15[Lcall]|0;
									Lcall=Lcall+1|0;
									L$p=L$p+1|0;
									if((Lcall|0)<(Ldiv|0))continue;
									break;
								}
								Lb0.i0=L$p;
								while(1){
									Ladd=L$p-1|0;
									if((tmp14[Ladd]|0)===0){
										Lb0.i0=Ladd;
										if((L$p|0)>1){
											L$p=Ladd;
											continue;
										}
										L$p=Ladd;
									}
									break;
								}
								if((L$p|0)!==0)break a;
							}else{
								Lcall=0;
							}
							Lb0.i2=0;
						}
						tmp14=new Int32Array(Linc82/4|0);
						Lb1.a3=tmp14;
						if((L$p$pi&1073741823|0)===0&&(tmp14.length===1&&tmp14===nullArray&&0===0)){
							Lcall=-2;
						}else{
							Lb1.i0=0;
							Lb1.i1=L$p$pi;
							Lb1.i2=0;
							a:{
								if((Lcall|0)<(Linc|0)){
									tmp15=Lb.a3;
									while(1){
										tmp14[Lcall-Ldiv|0]=tmp15[Lcall]|0;
										L$p=Lb1.i0|0;
										Linc82=L$p+1|0;
										Lb1.i0=Linc82;
										Lcall=Lcall+1|0;
										if((Lcall|0)<(Linc|0))continue;
										break;
									}
									if((L$p|0)>-1)while(1){
										Lcall=Linc82-1|0;
										if((tmp14[Lcall]|0)===0){
											Lb1.i0=Lcall;
											if((Linc82|0)>1){
												Linc82=Lcall;
												continue;
											}
											Linc82=Lcall;
										}
										break;
									}
									if((Linc82|0)!==0){
										Lcall=Linc;
										break a;
									}
									Lcall=Linc;
								}
								Lb1.i2=0;
							}
							L$p=(Lb.i0|0)+Lsub$pi|0;
							L$p=(L$p|0)<3?3|0:L$p|0;
							Lsub$pi=L$p<<2;
							tmp14=new Int32Array(Lsub$pi/4|0);
							Lb2.a3=tmp14;
							if((L$p&1073741823|0)===0&&(tmp14.length===1&&tmp14===nullArray&&0===0)){
								Lcall=-2;
							}else{
								Lb2.i0=0;
								Lb2.i1=L$p;
								Lb2.i2=0;
								if((Lcall|0)<(Lb.i0|0)){
									tmp15=Lb.a3;
									L$p=0;
									while(1){
										tmp14[Lcall-Linc|0]=tmp15[Lcall]|0;
										Lcall=Lcall+1|0;
										L$p=L$p+1|0;
										if((Lcall|0)<(Lb.i0|0))continue;
										break;
									}
									Lb2.i0=L$p;
								}
								Lcall=_mp_add(La2,La1,LT1)|0;
								if((Lcall|0)===0){
									Lcall=_mp_add(LT1,La0,LS2)|0;
									if((Lcall|0)===0){
										Lcall=_mp_add(Lb2,Lb1,Lc)|0;
										if((Lcall|0)===0){
											Lcall=_mp_add(Lc,Lb0,LS1)|0;
											if((Lcall|0)===0){
												Lcall=_mp_mul(LS1,LS2,LS1)|0;
												if((Lcall|0)===0){
													Lcall=_mp_add(LT1,La2,LT1)|0;
													if((Lcall|0)===0){
														Lcall=_mp_mul_2(LT1,LT1)|0;
														if((Lcall|0)===0){
															Lcall=_mp_add(LT1,La0,LT1)|0;
															if((Lcall|0)===0){
																Lcall=_mp_add(Lc,Lb2,Lc)|0;
																if((Lcall|0)===0){
																	Lcall=_mp_mul_2(Lc,Lc)|0;
																	if((Lcall|0)===0){
																		Lcall=_mp_add(Lc,Lb0,Lc)|0;
																		if((Lcall|0)===0){
																			Lcall=_mp_mul(LT1,Lc,LS2)|0;
																			if((Lcall|0)===0){
																				Lcall=_mp_sub(La2,La1,La1)|0;
																				if((Lcall|0)===0){
																					Lcall=_mp_add(La1,La0,La1)|0;
																					if((Lcall|0)===0){
																						Lcall=_mp_sub(Lb2,Lb1,Lb1)|0;
																						if((Lcall|0)===0){
																							Lcall=_mp_add(Lb1,Lb0,Lb1)|0;
																							if((Lcall|0)===0){
																								Lcall=_mp_mul(La1,Lb1,La1)|0;
																								if((Lcall|0)===0){
																									Lcall=_mp_mul(La2,Lb2,Lb1)|0;
																									if((Lcall|0)===0){
																										Lcall=_mp_sub(LS2,La1,LS2)|0;
																										if((Lcall|0)===0){
																											Lcall=_mp_div_3(LS2,LS2,nullArray,0)|0;
																											if((Lcall|0)===0){
																												Lcall=_mp_sub(LS1,La1,La1)|0;
																												if((Lcall|0)===0){
																													Lcall=_mp_div_2(La1,La1)|0;
																													if((Lcall|0)===0){
																														Lcall=_mp_mul(La0,Lb0,La0)|0;
																														if((Lcall|0)===0){
																															Lcall=_mp_sub(LS1,La0,LS1)|0;
																															if((Lcall|0)===0){
																																Lcall=_mp_sub(LS2,LS1,LS2)|0;
																																if((Lcall|0)===0){
																																	Lcall=_mp_div_2(LS2,LS2)|0;
																																	if((Lcall|0)===0){
																																		Lcall=_mp_sub(LS1,La1,LS1)|0;
																																		if((Lcall|0)===0){
																																			Lcall=_mp_sub(LS1,Lb1,LS1)|0;
																																			if((Lcall|0)===0){
																																				Lcall=_mp_mul_2(Lb1,LT1)|0;
																																				if((Lcall|0)===0){
																																					Lcall=_mp_sub(LS2,LT1,LS2)|0;
																																					if((Lcall|0)===0){
																																						Lcall=_mp_sub(La1,LS2,La1)|0;
																																						if((Lcall|0)===0){
																																							Lcall=_mp_lshd(Lb1,Ldiv<<2)|0;
																																							if((Lcall|0)===0){
																																								Lcall=_mp_lshd(LS2,__imul(Ldiv,3)|0)|0;
																																								if((Lcall|0)===0){
																																									Lcall=_mp_add(Lb1,LS2,Lb1)|0;
																																									if((Lcall|0)===0){
																																										Lcall=_mp_lshd(LS1,Linc)|0;
																																										if((Lcall|0)===0){
																																											Lcall=_mp_add(Lb1,LS1,Lb1)|0;
																																											if((Lcall|0)===0){
																																												Lcall=_mp_lshd(La1,Ldiv)|0;
																																												if((Lcall|0)===0){
																																													Lcall=_mp_add(Lb1,La1,Lb1)|0;
																																													if((Lcall|0)===0)Lcall=_mp_add(Lb1,La0,Lc)|0;
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
								if(tmp14.length!==1||tmp14!==nullArray||0!==0){
									if(!(tmp14.length===1&&tmp14===nullArray&&0===0||(Lsub$pi|0)===0)){
										L$p=0;
										while(1){
											tmp14[L$p]=0;
											Lsub$pi=Lsub$pi-1|0;
											if((Lsub$pi|0)!==0){
												L$p=L$p+1|0;
												continue;
											}
											break;
										}
									}
									Lb2.a3=nullArray;
									Lb2.i0=0;
									Lb2.i1=0;
									Lb2.i2=0;
								}
							}
							tmp14=Lb1.a3;
							if(tmp14.length!==1||tmp14!==nullArray||0!==0){
								if(tmp14.length!==1||tmp14!==nullArray||0!==0){
									L$p=Lb1.i1<<2;
									if((L$p|0)!==0){
										Lsub$pi=0;
										while(1){
											tmp14[Lsub$pi]=0;
											L$p=L$p-1|0;
											if((L$p|0)!==0){
												Lsub$pi=Lsub$pi+1|0;
												continue;
											}
											break;
										}
									}
								}
								Lb1.a3=nullArray;
								Lb1.i0=0;
								Lb1.i1=0;
								Lb1.i2=0;
							}
						}
						tmp14=Lb0.a3;
						if(tmp14.length!==1||tmp14!==nullArray||0!==0){
							if(tmp14.length!==1||tmp14!==nullArray||0!==0){
								L$p=Lb0.i1<<2;
								if((L$p|0)!==0){
									Lsub$pi=0;
									while(1){
										tmp14[Lsub$pi]=0;
										L$p=L$p-1|0;
										if((L$p|0)!==0){
											Lsub$pi=Lsub$pi+1|0;
											continue;
										}
										break;
									}
								}
							}
							Lb0.a3=nullArray;
							Lb0.i0=0;
							Lb0.i1=0;
							Lb0.i2=0;
						}
					}
					tmp14=La2.a3;
					if(tmp14.length!==1||tmp14!==nullArray||0!==0){
						if(tmp14.length!==1||tmp14!==nullArray||0!==0){
							L$p=La2.i1<<2;
							if((L$p|0)!==0){
								Lsub$pi=0;
								while(1){
									tmp14[Lsub$pi]=0;
									L$p=L$p-1|0;
									if((L$p|0)!==0){
										Lsub$pi=Lsub$pi+1|0;
										continue;
									}
									break;
								}
							}
						}
						La2.a3=nullArray;
						La2.i0=0;
						La2.i1=0;
						La2.i2=0;
					}
				}
				tmp14=La1.a3;
				if(tmp14.length!==1||tmp14!==nullArray||0!==0){
					if(tmp14.length!==1||tmp14!==nullArray||0!==0){
						L$p=La1.i1<<2;
						if((L$p|0)!==0){
							Lsub$pi=0;
							while(1){
								tmp14[Lsub$pi]=0;
								L$p=L$p-1|0;
								if((L$p|0)!==0){
									Lsub$pi=Lsub$pi+1|0;
									continue;
								}
								break;
							}
						}
					}
					La1.a3=nullArray;
					La1.i0=0;
					La1.i1=0;
					La1.i2=0;
				}
			}
			tmp14=La0.a3;
			if(tmp14.length!==1||tmp14!==nullArray||0!==0){
				if(tmp14.length!==1||tmp14!==nullArray||0!==0){
					L$p=La0.i1<<2;
					if((L$p|0)!==0){
						Lsub$pi=0;
						while(1){
							tmp14[Lsub$pi]=0;
							L$p=L$p-1|0;
							if((L$p|0)!==0){
								Lsub$pi=Lsub$pi+1|0;
								continue;
							}
							break;
						}
					}
				}
				La0.a3=nullArray;
				La0.i0=0;
				La0.i1=0;
				La0.i2=0;
			}
		}
		_mp_clear_multi(LS1,LS2,LT1,null);
	}
	return Lcall|0;
}
function _s_mp_toom_sqr(La,Lb){
	var LS0=null,La0=null,La1=null,La2=null,Ldiv=0,tmp5=null,tmp6=null,tmp7=null,Lgeptoindexphi8=0,Lgeptoindexphi11=0,tmp10=null,Lgeptoindexphi=0,L$p$pi=0,Lgeptoindex=0,Lgeptoindexphi3=0;
	LS0={i0:0,i1:0,i2:0,a3:nullArray};
	La0={i0:0,i1:0,i2:0,a3:nullArray};
	La1={i0:0,i1:0,i2:0,a3:nullArray};
	La2={i0:0,i1:0,i2:0,a3:nullArray};
	tmp10=new Int32Array(32);
	LS0.a3=tmp10;
	LS0.i0=0;
	LS0.i1=32;
	LS0.i2=0;
	Lgeptoindexphi=La.i0|0;
	Ldiv=(Lgeptoindexphi|0)/3|0;
	L$p$pi=(Ldiv|0)<3?3|0:Ldiv|0;
	Lgeptoindex=L$p$pi<<2;
	tmp10=new Int32Array(Lgeptoindex/4|0);
	La0.a3=tmp10;
	if((L$p$pi&1073741823|0)===0&&(tmp10.length===1&&tmp10===nullArray&&0===0)){
		Lgeptoindex=-2;
	}else{
		La0.i1=L$p$pi;
		La0.i2=0;
		La0.i0=Ldiv;
		tmp5=new Int32Array(Lgeptoindex/4|0);
		La1.a3=tmp5;
		if((L$p$pi&1073741823|0)===0&&(tmp5.length===1&&tmp5===nullArray&&0===0)){
			Lgeptoindex=-2;
		}else{
			La1.i1=L$p$pi;
			La1.i2=0;
			La1.i0=Ldiv;
			L$p$pi=(La.i0|0)+(__imul(Ldiv,-2)|0)|0;
			L$p$pi=(L$p$pi|0)<3?3|0:L$p$pi|0;
			tmp6=new Int32Array((L$p$pi<<2)/4|0);
			La2.a3=tmp6;
			if((L$p$pi&1073741823|0)===0&&(tmp6.length===1&&tmp6===nullArray&&0===0)){
				Lgeptoindex=-2;
			}else{
				La2.i0=0;
				La2.i1=L$p$pi;
				La2.i2=0;
				tmp7=La.a3;
				if((Lgeptoindexphi|0)>2){
					Lgeptoindexphi3=0;
					Lgeptoindexphi=0;
					L$p$pi=0;
					while(1){
						Lgeptoindex=Lgeptoindexphi+1|0;
						tmp10[Lgeptoindexphi3]=tmp7[Lgeptoindexphi]|0;
						L$p$pi=L$p$pi+1|0;
						if((L$p$pi|0)<(Ldiv|0)){
							Lgeptoindexphi=Lgeptoindex;
							Lgeptoindexphi3=Lgeptoindexphi3+1|0;
							continue;
						}
						break;
					}
				}else{
					Lgeptoindex=0;
					L$p$pi=0;
				}
				Lgeptoindexphi=Ldiv<<1;
				if((Lgeptoindexphi|0)>(L$p$pi|0)){
					Lgeptoindexphi8=Lgeptoindex;
					Lgeptoindexphi3=L$p$pi;
					Lgeptoindexphi11=0;
					while(1){
						tmp5[Lgeptoindexphi11]=tmp7[Lgeptoindexphi8]|0;
						Lgeptoindexphi3=Lgeptoindexphi3+1|0;
						if((Lgeptoindexphi3|0)<(Lgeptoindexphi|0)){
							Lgeptoindexphi8=Lgeptoindexphi8+1|0;
							Lgeptoindexphi11=Lgeptoindexphi11+1|0;
							continue;
						}
						break;
					}
					Lgeptoindex=Lgeptoindex+(Lgeptoindexphi-L$p$pi|0)|0;
					L$p$pi=Lgeptoindexphi;
				}
				if((L$p$pi|0)<(La.i0|0)){
					Lgeptoindexphi3=0;
					while(1){
						tmp6[Lgeptoindexphi3]=tmp7[Lgeptoindex]|0;
						La2.i0=(La2.i0|0)+1|0;
						L$p$pi=L$p$pi+1|0;
						if((L$p$pi|0)<(La.i0|0)){
							Lgeptoindex=Lgeptoindex+1|0;
							Lgeptoindexphi3=Lgeptoindexphi3+1|0;
							continue;
						}
						break;
					}
				}
				L$p$pi=La0.i0|0;
				if((L$p$pi|0)>0)while(1){
					Lgeptoindex=L$p$pi-1|0;
					if((tmp10[Lgeptoindex]|0)===0){
						La0.i0=Lgeptoindex;
						if((L$p$pi|0)>1){
							L$p$pi=Lgeptoindex;
							continue;
						}
						L$p$pi=Lgeptoindex;
					}
					break;
				}
				if((L$p$pi|0)===0)La0.i2=0;
				L$p$pi=La1.i0|0;
				if((L$p$pi|0)>0)while(1){
					Lgeptoindex=L$p$pi-1|0;
					if((tmp5[Lgeptoindex]|0)===0){
						La1.i0=Lgeptoindex;
						if((L$p$pi|0)>1){
							L$p$pi=Lgeptoindex;
							continue;
						}
						L$p$pi=Lgeptoindex;
					}
					break;
				}
				if((L$p$pi|0)===0)La1.i2=0;
				Lgeptoindex=_mp_sqr(La0,LS0)|0;
				if((Lgeptoindex|0)===0){
					Lgeptoindex=_mp_add(La0,La2,La0)|0;
					if((Lgeptoindex|0)===0){
						Lgeptoindex=_mp_sub(La0,La1,Lb)|0;
						if((Lgeptoindex|0)===0){
							Lgeptoindex=_mp_add(La0,La1,La0)|0;
							if((Lgeptoindex|0)===0){
								Lgeptoindex=_mp_sqr(La0,La0)|0;
								if((Lgeptoindex|0)===0){
									Lgeptoindex=_mp_sqr(Lb,Lb)|0;
									if((Lgeptoindex|0)===0){
										Lgeptoindex=_mp_mul(La1,La2,La1)|0;
										if((Lgeptoindex|0)===0){
											Lgeptoindex=_mp_mul_2(La1,La1)|0;
											if((Lgeptoindex|0)===0){
												Lgeptoindex=_mp_sqr(La2,La2)|0;
												if((Lgeptoindex|0)===0){
													Lgeptoindex=_mp_add(La0,Lb,Lb)|0;
													if((Lgeptoindex|0)===0){
														Lgeptoindex=_mp_div_2(Lb,Lb)|0;
														if((Lgeptoindex|0)===0){
															Lgeptoindex=_mp_sub(La0,Lb,La0)|0;
															if((Lgeptoindex|0)===0){
																Lgeptoindex=_mp_sub(La0,La1,La0)|0;
																if((Lgeptoindex|0)===0){
																	Lgeptoindex=_mp_sub(Lb,La2,Lb)|0;
																	if((Lgeptoindex|0)===0){
																		Lgeptoindex=_mp_sub(Lb,LS0,Lb)|0;
																		if((Lgeptoindex|0)===0){
																			Lgeptoindex=_mp_lshd(La2,Ldiv<<2)|0;
																			if((Lgeptoindex|0)===0){
																				Lgeptoindex=_mp_lshd(La1,__imul(Ldiv,3)|0)|0;
																				if((Lgeptoindex|0)===0){
																					Lgeptoindex=_mp_lshd(Lb,Lgeptoindexphi)|0;
																					if((Lgeptoindex|0)===0){
																						Lgeptoindex=_mp_lshd(La0,Ldiv)|0;
																						if((Lgeptoindex|0)===0){
																							Lgeptoindex=_mp_add(La2,La1,La2)|0;
																							if((Lgeptoindex|0)===0){
																								Lgeptoindex=_mp_add(La2,Lb,Lb)|0;
																								if((Lgeptoindex|0)===0){
																									Lgeptoindex=_mp_add(Lb,La0,Lb)|0;
																									if((Lgeptoindex|0)===0)Lgeptoindex=_mp_add(Lb,LS0,Lb)|0;
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
				tmp10=La2.a3;
				if(tmp10.length!==1||tmp10!==nullArray||0!==0){
					if(tmp10.length!==1||tmp10!==nullArray||0!==0){
						Lgeptoindexphi=La2.i1<<2;
						if((Lgeptoindexphi|0)!==0){
							L$p$pi=0;
							while(1){
								tmp10[L$p$pi]=0;
								Lgeptoindexphi=Lgeptoindexphi-1|0;
								if((Lgeptoindexphi|0)!==0){
									L$p$pi=L$p$pi+1|0;
									continue;
								}
								break;
							}
						}
					}
					La2.a3=nullArray;
					La2.i0=0;
					La2.i1=0;
					La2.i2=0;
				}
			}
			tmp10=La1.a3;
			if(tmp10.length!==1||tmp10!==nullArray||0!==0){
				if(tmp10.length!==1||tmp10!==nullArray||0!==0){
					Lgeptoindexphi=La1.i1<<2;
					if((Lgeptoindexphi|0)!==0){
						L$p$pi=0;
						while(1){
							tmp10[L$p$pi]=0;
							Lgeptoindexphi=Lgeptoindexphi-1|0;
							if((Lgeptoindexphi|0)!==0){
								L$p$pi=L$p$pi+1|0;
								continue;
							}
							break;
						}
					}
				}
				La1.a3=nullArray;
				La1.i0=0;
				La1.i1=0;
				La1.i2=0;
			}
		}
		tmp10=La0.a3;
		if(tmp10.length!==1||tmp10!==nullArray||0!==0){
			if(tmp10.length!==1||tmp10!==nullArray||0!==0){
				Lgeptoindexphi=La0.i1<<2;
				if((Lgeptoindexphi|0)!==0){
					L$p$pi=0;
					while(1){
						tmp10[L$p$pi]=0;
						Lgeptoindexphi=Lgeptoindexphi-1|0;
						if((Lgeptoindexphi|0)!==0){
							L$p$pi=L$p$pi+1|0;
							continue;
						}
						break;
					}
				}
			}
			La0.a3=nullArray;
			La0.i0=0;
			La0.i1=0;
			La0.i2=0;
		}
	}
	tmp10=LS0.a3;
	if(tmp10.length!==1||tmp10!==nullArray||0!==0){
		if(tmp10.length!==1||tmp10!==nullArray||0!==0){
			Lgeptoindexphi=LS0.i1<<2;
			if((Lgeptoindexphi|0)!==0){
				L$p$pi=0;
				while(1){
					tmp10[L$p$pi]=0;
					Lgeptoindexphi=Lgeptoindexphi-1|0;
					if((Lgeptoindexphi|0)!==0){
						L$p$pi=L$p$pi+1|0;
						continue;
					}
					break;
				}
			}
		}
		LS0.a3=nullArray;
		LS0.i0=0;
		LS0.i1=0;
		LS0.i2=0;
	}
	return Lgeptoindex|0;
}
function __ZN6BigInt12exponentiateERKS_S1_(La,Lb){
	var tmp0=null,tmp1=null,tmp2=null,L$p$pi$pi=0,Lres$p05$pi$pi=0;
	tmp0=new BigInt(undefined);
	console.log(String(null));
	tmp2=new Int32Array(32);
	tmp1=tmp0;
	tmp1.a3=tmp2;
	tmp1.i0=0;
	tmp1.i1=32;
	tmp1.i2=0;
	tmp2=Lb;
	L$p$pi$pi=tmp2.i0|0;
	L$p$pi$pi=L$p$pi$pi>>>0<2?L$p$pi$pi|0:2|0;
	a:{
		if((L$p$pi$pi|0)===0){
			Lres$p05$pi$pi=0;
		}else{
			tmp2=tmp2.a3;
			Lres$p05$pi$pi=0;
			while(1){
				L$p$pi$pi=L$p$pi$pi-1|0;
				Lres$p05$pi$pi=tmp2[L$p$pi$pi]|Lres$p05$pi$pi<<28;
				if((L$p$pi$pi|0)!==0)continue;
				break;
			}
			if(Lres$p05$pi$pi>>>0>268435455)break a;
		}
		_mp_expt_u32(La,Lres$p05$pi$pi,tmp1)|0;
	}
	return tmp0;
}
function __ZN6BigInt3addERKS_S1_(La,Lb){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0=new BigInt(undefined);
	console.log(String(null));
	tmp1=new Int32Array(32);
	tmp2=tmp0;
	tmp2.a3=tmp1;
	tmp2.i0=0;
	tmp2.i1=32;
	tmp2.i2=0;
	_mp_add(La,Lb,tmp2)|0;
	return tmp0;
}
function __ZN6BigInt6divideERKS_S1_(La,Lb){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0=new BigInt(undefined);
	console.log(String(null));
	tmp1=new Int32Array(32);
	tmp2=tmp0;
	tmp2.a3=tmp1;
	tmp2.i0=0;
	tmp2.i1=32;
	tmp2.i2=0;
	_mp_div(La,Lb,tmp2,null);
	return tmp0;
}
function __ZN6BigInt8multiplyEPKS_S1_(La,Lb){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0=new BigInt(undefined);
	console.log(String(null));
	tmp2=new Int32Array(32);
	tmp1=tmp0;
	tmp1.a3=tmp2;
	tmp1.i0=0;
	tmp1.i1=32;
	tmp1.i2=0;
	tmp2=La;
	if(La===Lb)_mp_sqr(tmp2,tmp1)|0;
	else _mp_mul(tmp2,Lb,tmp1)|0;
	return tmp0;
}
function __ZN6BigInt8subtractERKS_S1_(La,Lb){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0=new BigInt(undefined);
	console.log(String(null));
	tmp1=new Int32Array(32);
	tmp2=tmp0;
	tmp2.a3=tmp1;
	tmp2.i0=0;
	tmp2.i1=32;
	tmp2.i2=0;
	_mp_sub(La,Lb,tmp2)|0;
	return tmp0;
}
function __ZN6BigInt8toStringEi(Lthis,Lradix){
	var Ldim=null,LS=null,LretConstructor=null,tmp3=null;
	Ldim=[0];
	Ldim[0]=0;
	LretConstructor=Lthis;
	_mp_radix_size(LretConstructor,Lradix,Ldim,0);
	LS={i0:0,i1:0,a2:nullArray};
	tmp3=LS;
	tmp3.i0=0;
	tmp3.i1=0;
	tmp3.a2=nullArray;
	__ZNSs6resizeEjc(LS,(Ldim[0]|0)-1|0);
	tmp3=tmp3.a2;
	_mp_to_radix(LretConstructor,tmp3,0,Lradix);
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(tmp3,0);
	return LretConstructor;
}
function _cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0){
	var LretConstructor$pi=null,tmp1=0,Lgeptoindexphi=0;
	LretConstructor$pi=String();
	tmp1=Larg0[Marg0]|0;
	if((tmp1&255)===0)return String(LretConstructor$pi);
	Lgeptoindexphi=0;
	while(1){
		LretConstructor$pi=LretConstructor$pi.concat(String.fromCharCode(tmp1<<24>>24));
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		tmp1=Larg0[Marg0+Lgeptoindexphi|0]|0;
		if((tmp1&255)!==0)continue;
		break;
	}
	return String(LretConstructor$pi);
}
function __ZN6BigInt9remainderERKS_S1_(La,Lb){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp0=new BigInt(undefined);
	console.log(String(null));
	tmp1=new Int32Array(32);
	tmp2=tmp0;
	tmp2.a3=tmp1;
	tmp2.i0=0;
	tmp2.i1=32;
	tmp2.i2=0;
	_mp_div(La,Lb,null,tmp2);
	return tmp0;
}
function __ZN6BigIntC1EPN6client6StringE(Lthis,Ls){
	var tmp0=null,Lbegin$p0=0,tmp2=null,LS=null,Lcall4=0;
	console.log(String(Ls));
	LS=new Int32Array(32);
	tmp0=Lthis;
	tmp0.a3=LS;
	tmp0.i0=0;
	tmp0.i1=32;
	tmp0.i2=0;
	if(Ls!==null){
		if((Ls.charCodeAt(0)|0)===48){
			Lcall4=Ls.charCodeAt(1);
			Lbegin$p0=(Lcall4|0)===120?2|0:0|0;
			Lcall4=(Lcall4|0)===120?16|0:10|0;
		}else{
			Lbegin$p0=0;
			Lcall4=10;
		}
		LS={i0:0,i1:0,a2:nullArray};
		__ZNK6client6StringcvSsEv(LS,Ls);
		tmp2=LS.a2;
		_mp_read_radix(tmp0,tmp2,0+Lbegin$p0|0,Lcall4);
	}
}
function __ZNK6client6StringcvSsEv(Lagg$presult,Lthis){
	var Lcall4=0,tmp1=null,Li$p07=0;
	tmp1=Lagg$presult;
	tmp1.i0=0;
	tmp1.i1=0;
	tmp1.a2=nullArray;
	__ZNSs6resizeEjc(Lagg$presult,Lthis.length);
	tmp1=tmp1.a2;
	if((Lthis.length|0)>0){
		Li$p07=0;
		while(1){
			Lcall4=Lthis.charCodeAt(Li$p07);
			tmp1[Li$p07]=Lcall4;
			Li$p07=Li$p07+1|0;
			if((Li$p07|0)<(Lthis.length|0))continue;
			break;
		}
	}
}
function __ZN6BigIntC2EPN6client6StringE(Lthis,Ls){
	var tmp0=null,Lbegin$p0=0,tmp2=null,LS=null,Lcall4=0;
	console.log(String(Ls));
	LS=new Int32Array(32);
	tmp0=Lthis;
	tmp0.a3=LS;
	tmp0.i0=0;
	tmp0.i1=32;
	tmp0.i2=0;
	if(Ls!==null){
		if((Ls.charCodeAt(0)|0)===48){
			Lcall4=Ls.charCodeAt(1);
			Lbegin$p0=(Lcall4|0)===120?2|0:0|0;
			Lcall4=(Lcall4|0)===120?16|0:10|0;
		}else{
			Lbegin$p0=0;
			Lcall4=10;
		}
		LS={i0:0,i1:0,a2:nullArray};
		__ZNK6client6StringcvSsEv(LS,Ls);
		tmp2=LS.a2;
		_mp_read_radix(tmp0,tmp2,0+Lbegin$p0|0,Lcall4);
	}
}
function __ZNKSt21__basic_string_commonILb1EE20__throw_length_errorEv(){
	___assert_func();
}
function ___assert_func(){
	_fprintf(_impure_data.a3,_$pstr$p8,0,{d:_$pstr$p1$p230,o:0},{d:_$pstr$p229$p320,o:0},1188,{d:_$pstr$p1$p186,o:0},{d:___PRETTY_FUNCTION__$p_ZNKSt21__basic_string_commonILb1EE20__throw_length_errorEv,o:0})|0;
	_abort();
}
function _fprintf(Lfp,Lfmt,Mfmt){
	var Lap=null,tmp1=null,Lcall=0;
	Lap=[nullObj];
	Lap[0]={d:arguments,o:_fprintf.length};
	tmp1=Lap[0];
	Lcall=__vfprintf_r(Lfp,Lfmt,Mfmt,tmp1.d,tmp1.o)|0;
	Lap[0]=null;
	return Lcall|0;
}
function __vfprintf_r(Lfp,Lfmt0,Mfmt0,Lap,Map){
	var Lap$paddr=null,Lfp$paddr$p0=null,Lprt_data=null,Lprt_datao=0,Ladd=0,Lgeptoindexphi19=0,Lgeptoindexphi18=0,L$ppre=0,Lsub$pptr$plhs$pcast=0,Lsub$pptr$prhs$pcast=0,Lsub$pptr$psub=0,Lcall629=null,Lcall629o=0,Lgeptoindexphi=0;
	Lap$paddr=[nullObj];
	Lap$paddr[0]={d:Lap,o:Map};
	if((_impure_data.i6|0)===0)___sinit(_impure_data);
	if(Lfp===___sf_fake_stdin)Lfp$paddr$p0=_impure_data.a1;
	else if(Lfp===___sf_fake_stdout)Lfp$paddr$p0=_impure_data.a2;
	else{
		Lfp$paddr$p0=_impure_data.a3;
		Lfp$paddr$p0=(Lfp===___sf_fake_stderr?Lfp$paddr$p0:Lfp);
	}
	a:{
		if((Lfp$paddr$p0.i3&8)!==0){
			Lprt_datao=Lfp$paddr$p0.a5.a0o;
			Lprt_data=Lfp$paddr$p0.a5.a0;
			if(Lprt_data.length!==1||Lprt_data!==nullArray||Lprt_datao!==0)break a;
		}
		if((___swsetup_r(_impure_data,Lfp$paddr$p0)|0|0)!==0)return  -1|0;
	}
	Lprt_data=new constructor_struct$p_Z11_prt_data_t();
	Lprt_data.i5=0;
	Lprt_data.a7[0]=32;
	Lprt_data.a8[0]=48;
	Lgeptoindexphi19=0;
	Ladd=0;
	a:while(1){
		Lgeptoindexphi18=Lgeptoindexphi19;
		b:while(1){
			L$ppre=Lfmt0[Mfmt0+Lgeptoindexphi18|0]|0;
			switch(L$ppre&255){
				case 0:
				case 37:
				Lsub$pptr$plhs$pcast=(Mfmt0+Lgeptoindexphi18|0);
				Lsub$pptr$prhs$pcast=(Mfmt0+Lgeptoindexphi19|0);
				Lsub$pptr$psub=Lsub$pptr$plhs$pcast-Lsub$pptr$prhs$pcast|0;
				c:{
					if((Lsub$pptr$plhs$pcast|0)!==(Lsub$pptr$prhs$pcast|0)){
						if((___sfputs_r(_impure_data,Lfp$paddr$p0,Lfmt0,Mfmt0+Lgeptoindexphi19|0,Lsub$pptr$psub)|0|0)===-1)break c;
						Ladd=(Lprt_data.i5|0)+Lsub$pptr$psub|0;
						Lprt_data.i5=Ladd;
						L$ppre=Lfmt0[Mfmt0+Lgeptoindexphi18|0]|0;
					}
					if((L$ppre&255)!==0){
						Lprt_data.i0=0;
						Lprt_data.i3=0;
						Lprt_data.i1=-1;
						Lprt_data.i2=0;
						Lprt_data.a9[40]=0;
						Lprt_data.i11=0;
						Lsub$pptr$prhs$pcast=Lgeptoindexphi18+1|0;
						Lsub$pptr$psub=Lfmt0[Mfmt0+Lsub$pptr$prhs$pcast|0]|0;
						d:{
							if((Lsub$pptr$psub&255)===35){
								Lgeptoindexphi=0;
								Lcall629o=0;
								Lcall629=_$pstr$p326;
								Lgeptoindexphi19=0;
							}else if((Lsub$pptr$psub&255)===45){
								Lgeptoindexphi=0;
								Lcall629o=1;
								Lcall629=_$pstr$p326;
								Lgeptoindexphi19=0;
							}else if((Lsub$pptr$psub&255)===48){
								Lgeptoindexphi=0;
								Lcall629o=2;
								Lcall629=_$pstr$p326;
								Lgeptoindexphi19=0;
							}else if((Lsub$pptr$psub&255)===43){
								Lgeptoindexphi=0;
								Lcall629o=3;
								Lcall629=_$pstr$p326;
								Lgeptoindexphi19=0;
							}else{
								if((Lsub$pptr$psub&255)!==32){
									Lgeptoindexphi=0;
									Lgeptoindexphi19=0;
									break d;
								}
								Lgeptoindexphi=0;
								Lcall629o=4;
								Lcall629=_$pstr$p326;
								Lgeptoindexphi19=0;
							}
							while(1){
								Lgeptoindexphi18=Lsub$pptr$prhs$pcast+Lgeptoindexphi|0;
								Lgeptoindexphi19|=(1<<((Lcall629o)-(0)|0));
								Lprt_data.i0=Lgeptoindexphi19;
								Lgeptoindexphi=Lgeptoindexphi+1|0;
								Lsub$pptr$psub=Lfmt0[(Mfmt0+Lsub$pptr$prhs$pcast|0)+Lgeptoindexphi|0]|0;
								if((Lsub$pptr$psub&255)===35){
									Lcall629o=0;
									Lcall629=_$pstr$p326;
									continue;
								}
								if((Lsub$pptr$psub&255)===45){
									Lcall629o=1;
									Lcall629=_$pstr$p326;
									continue;
								}
								if((Lsub$pptr$psub&255)===48){
									Lcall629o=2;
									Lcall629=_$pstr$p326;
									continue;
								}
								if((Lsub$pptr$psub&255)===43){
									Lcall629o=3;
									Lcall629=_$pstr$p326;
									continue;
								}
								if((Lsub$pptr$psub&255)===32){
									Lcall629o=4;
									Lcall629=_$pstr$p326;
									continue;
								}
								break;
							}
						}
						Lsub$pptr$plhs$pcast=Lsub$pptr$prhs$pcast+Lgeptoindexphi|0;
						if((Lgeptoindexphi19&16|0)!==0||((Lgeptoindexphi19&8|0)===0?1:0)^1){
							Lprt_data.a9[40]=(Lgeptoindexphi19&8|0)===0?32|0:43|0;
							Lsub$pptr$psub=Lfmt0[Mfmt0+Lsub$pptr$plhs$pcast|0]|0;
						}
						if((Lsub$pptr$psub&255)===42){
							Lsub$pptr$plhs$pcast=handleVAArg(Lap$paddr[0]);
							Lprt_data.i3=Lsub$pptr$plhs$pcast;
							if((Lsub$pptr$plhs$pcast|0)<0){
								Lprt_data.i3=-Lsub$pptr$plhs$pcast|0;
								Lgeptoindexphi19|=2;
								Lprt_data.i0=Lgeptoindexphi19;
							}
							Lsub$pptr$plhs$pcast=Lgeptoindexphi18+2|0;
							Lsub$pptr$psub=Lfmt0[Mfmt0+Lsub$pptr$plhs$pcast|0]|0;
						}else{
							L$ppre=(Lsub$pptr$psub<<24>>24)-48|0;
							if(L$ppre>>>0<10){
								Lgeptoindexphi18=0;
								while(1){
									Lgeptoindexphi18=(__imul(Lgeptoindexphi18,10)|0)+L$ppre|0;
									Lprt_data.i3=Lgeptoindexphi18;
									Lgeptoindexphi=Lgeptoindexphi+1|0;
									Lsub$pptr$plhs$pcast=Lsub$pptr$prhs$pcast+Lgeptoindexphi|0;
									Lsub$pptr$psub=Lfmt0[Mfmt0+Lsub$pptr$plhs$pcast|0]|0;
									L$ppre=(Lsub$pptr$psub<<24>>24)-48|0;
									if(L$ppre>>>0<10)continue;
									break;
								}
							}
						}
						if((Lsub$pptr$psub&255)===46){
							Lsub$pptr$prhs$pcast=Lsub$pptr$plhs$pcast+1|0;
							if((Lfmt0[Mfmt0+Lsub$pptr$prhs$pcast|0]&255)===42){
								Lsub$pptr$prhs$pcast=handleVAArg(Lap$paddr[0]);
								Lprt_data.i1=(Lsub$pptr$prhs$pcast|0)>-1?Lsub$pptr$prhs$pcast|0: -1|0;
								Lsub$pptr$plhs$pcast=Lsub$pptr$plhs$pcast+2|0;
								Lsub$pptr$psub=Lfmt0[Mfmt0+Lsub$pptr$plhs$pcast|0]|0;
							}else{
								Lprt_data.i1=0;
								Lsub$pptr$psub=Lfmt0[Mfmt0+Lsub$pptr$prhs$pcast|0]|0;
								Lgeptoindexphi=(Lsub$pptr$psub<<24>>24)-48|0;
								if(Lgeptoindexphi>>>0<10){
									Lgeptoindexphi18=0;
									L$ppre=0;
									while(1){
										L$ppre=(__imul(L$ppre,10)|0)+Lgeptoindexphi|0;
										Lprt_data.i1=L$ppre;
										Lgeptoindexphi18=Lgeptoindexphi18+1|0;
										Lsub$pptr$plhs$pcast=Lsub$pptr$prhs$pcast+Lgeptoindexphi18|0;
										Lsub$pptr$psub=Lfmt0[Mfmt0+Lsub$pptr$plhs$pcast|0]|0;
										Lgeptoindexphi=(Lsub$pptr$psub<<24>>24)-48|0;
										if(Lgeptoindexphi>>>0<10)continue;
										break;
									}
								}else{
									Lsub$pptr$plhs$pcast=Lsub$pptr$prhs$pcast;
								}
							}
						}
						d:{
							if((Lsub$pptr$psub&255)===104){
								Lcall629o=0;
								Lcall629=_$pstr$p323;
							}else if((Lsub$pptr$psub&255)===108){
								Lcall629o=1;
								Lcall629=_$pstr$p323;
							}else{
								if((Lsub$pptr$psub&255)!==76)break d;
								Lcall629o=2;
								Lcall629=_$pstr$p323;
							}
							Lgeptoindexphi18=Lsub$pptr$plhs$pcast+1|0;
							Lsub$pptr$prhs$pcast=(Lcall629o)-(0)|0;
							L$ppre=64<<Lsub$pptr$prhs$pcast;
							if((Lsub$pptr$prhs$pcast|0)===1)if((Lfmt0[Mfmt0+Lgeptoindexphi18|0]&255)===108){
								Lgeptoindexphi18=Lsub$pptr$plhs$pcast+2|0;
								L$ppre=512;
							}
							Lprt_data.i0=Lgeptoindexphi19|L$ppre;
							Lsub$pptr$psub=Lfmt0[Mfmt0+Lgeptoindexphi18|0]|0;
							Lsub$pptr$plhs$pcast=Lgeptoindexphi18;
						}
						Lprt_data.i6=Lsub$pptr$psub;
						switch(Lsub$pptr$psub&255){
							case 101:
							case 102:
							case 103:
							case 69:
							case 70:
							case 71:
							break;
							default:
							Lgeptoindexphi18=__printf_i(Lprt_data,Lfp$paddr$p0,Lap$paddr[0])|0;
							if((Lgeptoindexphi18|0)===-1)break c;
							Ladd=Lprt_data.i5|0;
						}
						Ladd=Ladd+Lgeptoindexphi18|0;
						Lprt_data.i5=Ladd;
						Lgeptoindexphi19=Lsub$pptr$plhs$pcast+1|0;
						continue a;
					}
				}
				return ((Lfp$paddr$p0.i3&64)===0?Lprt_data.i5|0: -1|0)|0;
				default:
				Lgeptoindexphi18=Lgeptoindexphi18+1|0;
				continue b;
			}
			break;
		}
		break;
	}
}
function ___sinit(Ls){
	var Ls$poptgep$poptgep2$poptgepsqueezed=null;
	if((Ls.i6|0)===0){
		Ls.a10=__cleanup_r;
		Ls$poptgep$poptgep2$poptgepsqueezed=Ls.a20;
		Ls$poptgep$poptgep2$poptgepsqueezed.a0=null;
		Ls$poptgep$poptgep2$poptgepsqueezed.i1=0;
		Ls$poptgep$poptgep2$poptgepsqueezed.a2=nullArray;
		if(Ls===_impure_data)Ls.i6=1;
		Ls.a1=___sfp(Ls);
		Ls.a2=___sfp(Ls);
		Ls.a3=___sfp(Ls);
		_std(Ls.a1,4,0);
		_std(Ls.a2,9,1);
		_std(Ls.a3,17,2);
		Ls.i6=1;
	}
}
function __cleanup_r(Lptr){
	__fwalk_reent(Lptr);
}
function __fclose_r(Lrptr,Lfp){
	var Lcall32=0,Lfp$paddr$p0=null,Lcall=0,tmp3=null,tmp3o=0;
	if(Lfp===null)return 0|0;
	if(Lrptr!==null)if((Lrptr.i6|0)===0)___sinit(Lrptr);
	if(Lfp===___sf_fake_stdin)Lfp$paddr$p0=Lrptr.a1;
	else if(Lfp===___sf_fake_stdout)Lfp$paddr$p0=Lrptr.a2;
	else if(Lfp===___sf_fake_stderr)Lfp$paddr$p0=Lrptr.a3;
	else{
		Lfp$paddr$p0=Lfp;
	}
	if((Lfp$paddr$p0.i3&65535)===0)return 0|0;
	Lcall=___sflush_r(Lrptr,Lfp$paddr$p0)|0;
	tmp3=Lfp$paddr$p0.a12;
	if(tmp3!==null){
		Lcall32=tmp3(Lrptr,Lfp$paddr$p0.a8)|0;
		Lcall=(Lcall32|0)<0? -1|0:Lcall|0;
	}
	tmp3o=Lfp$paddr$p0.a13.a0o;
	tmp3=Lfp$paddr$p0.a13.a0;
	if(tmp3.length!==1||tmp3!==nullArray||tmp3o!==0){
		Lfp$paddr$p0.a13.a0=nullArray;
		Lfp$paddr$p0.a13.a0o=0;
	}
	tmp3o=Lfp$paddr$p0.a17.a0o;
	tmp3=Lfp$paddr$p0.a17.a0;
	if(tmp3.length!==1||tmp3!==nullArray||tmp3o!==0){
		Lfp$paddr$p0.a17.a0=nullArray;
		Lfp$paddr$p0.a17.a0o=0;
	}
	Lfp$paddr$p0.i3=0;
	return Lcall|0;
}
function ___sflush_r(Lptr,Lfp){
	var tmp0=null,tmp0o=0,tmp1=null,tmp1o=0,Lcond=0,Lcall=0,Lcall134=0,Lfp$poptgep$poptgep25$poptgepsqueezed=null,Lfp$poptgep$poptgep25$poptgepsqueezedo=0;
	Lcond=Lfp.i3|0;
	if((Lcond&8)===0){
		Lfp.i3=Lcond|2048;
		if((Lfp.i1|0)<=0)if((Lfp.i15|0)<=0)return 0|0;
		if(Lfp.a11===null)return 0|0;
		Lcond=Lptr.i0|0;
		Lptr.i0=0;
		a:if((Lfp.i3&4096)===0){
			Lcall=Lfp.a11(Lptr,Lfp.a8,0,1)|0;
			if((Lcall|0)===-1){
				switch(Lptr.i0|0){
					case 0:
					Lcall=-1;
					break a;
					case 29:
					case 22:
					Lptr.i0=Lcond;
					return 0|0;
					default:
					Lfp.i3=Lfp.i3|64;
					return  -1|0;
				}
			}
		}else Lcall=Lfp.i19|0;
		if((Lfp.i3&4)!==0){
			Lfp$poptgep$poptgep25$poptgepsqueezedo=Lfp.a13.a0o;
			Lfp$poptgep$poptgep25$poptgepsqueezed=Lfp.a13.a0;
			Lcall=Lcall-(Lfp.i1|0)|0;
			if(Lfp$poptgep$poptgep25$poptgepsqueezed.length!==1||Lfp$poptgep$poptgep25$poptgepsqueezed!==nullArray||Lfp$poptgep$poptgep25$poptgepsqueezedo!==0){
				Lcall134=Lfp.i15|0;
				Lcall=Lcall-Lcall134|0;
			}
		}
		Lcall=Lfp.a11(Lptr,Lfp.a8,Lcall,0)|0;
		a:if((Lcall|0)===-1){
			switch(Lptr.i0|0){
				case 0:
				case 29:
				case 22:
				break a;
				default:
				Lfp.i3=Lfp.i3|64;
				return  -1|0;
			}
		}
		Lcall134=Lfp.i3|0;
		Lfp.i3=Lcall134&63487;
		Lfp.i1=0;
		Lfp$poptgep$poptgep25$poptgepsqueezedo=Lfp.a5.a0o;
		Lfp$poptgep$poptgep25$poptgepsqueezed=Lfp.a5.a0;
		Lfp.a0=Lfp$poptgep$poptgep25$poptgepsqueezed;
		Lfp.a0o=Lfp$poptgep$poptgep25$poptgepsqueezedo;
		a:if((Lcall134&4096)!==0){
			if((Lcall|0)===-1)if((Lptr.i0|0)!==0)break a;
			Lfp.i19=Lcall;
		}
		Lptr.i0=Lcond;
		Lfp$poptgep$poptgep25$poptgepsqueezedo=Lfp.a13.a0o;
		Lfp$poptgep$poptgep25$poptgepsqueezed=Lfp.a13.a0;
		if(Lfp$poptgep$poptgep25$poptgepsqueezed.length===1&&Lfp$poptgep$poptgep25$poptgepsqueezed===nullArray&&Lfp$poptgep$poptgep25$poptgepsqueezedo===0)return 0|0;
		Lfp.a13.a0=nullArray;
		Lfp.a13.a0o=0;
		return 0|0;
	}
	Lfp$poptgep$poptgep25$poptgepsqueezed=Lfp.a5;
	tmp0o=Lfp$poptgep$poptgep25$poptgepsqueezed.a0o;
	tmp0=Lfp$poptgep$poptgep25$poptgepsqueezed.a0;
	if(tmp0.length===1&&tmp0===nullArray&&tmp0o===0)return 0|0;
	tmp1o=Lfp.a0o;
	tmp1=Lfp.a0;
	Lcall=(tmp1o)-(tmp0o)|0;
	Lfp.a0=tmp0;
	Lfp.a0o=tmp0o;
	if((Lcond&3)===0)Lcond=Lfp$poptgep$poptgep25$poptgepsqueezed.i1|0;
	else{
		Lcond=0;
	}
	Lfp.i2=Lcond;
	if((Lcall|0)<=0)return 0|0;
	Lcond=0;
	while(1){
		Lcall134=Lfp.a10(Lptr,Lfp.a8,tmp0,tmp0o+Lcond|0,Lcall)|0;
		if((Lcall134|0)<1){
			Lfp.i3=Lfp.i3|64;
			return  -1|0;
		}
		Lcall=Lcall-Lcall134|0;
		if((Lcall|0)>0){
			Lcond=Lcond+Lcall134|0;
			continue;
		}
		break;
	}
	return 0|0;
}
function __fwalk_reent(Lptr){
	var tmp0=null,Lgeptoindexphi=0,Lg$p07=null,Ldec5$pin=0;
	Lg$p07=Lptr.a20;
	while(1){
		Ldec5$pin=Lg$p07.i1|0;
		if((Ldec5$pin|0)>0){
			tmp0=Lg$p07.a2;
			Lgeptoindexphi=0;
			while(1){
				if((tmp0[Lgeptoindexphi].i3&65535)>=2)if((tmp0[Lgeptoindexphi].i4&65535)!==65535)__fclose_r(Lptr,tmp0[Lgeptoindexphi])|0;
				if((Ldec5$pin|0)>1){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					Ldec5$pin=Ldec5$pin-1|0;
					continue;
				}
				break;
			}
		}
		Lg$p07=Lg$p07.a0;
		if(Lg$p07!==null)continue;
		break;
	}
}
function ___sfp(Ld){
	var Lgeptoindexphi=0,Lg$p0=null,Ldec5$pin=0,Lcall=null;
	if((_impure_data.i6|0)===0){
		___sinit(_impure_data);
		Lg$p0=_impure_data.a20;
	}else{
		Lg$p0=_impure_data.a20;
	}
	while(1){
		Ldec5$pin=Lg$p0.i1|0;
		if((Ldec5$pin|0)>0){
			Lcall=Lg$p0.a2;
			Lgeptoindexphi=0;
			while(1){
				if((Lcall[Lgeptoindexphi].i3&65535)===0){
					Lcall[Lgeptoindexphi].i4=65535;
					Lcall[Lgeptoindexphi].i3=1;
					Lcall[Lgeptoindexphi].i22=0;
					Lcall[Lgeptoindexphi].a0=nullArray;
					Lcall[Lgeptoindexphi].a0o=0;
					Lcall[Lgeptoindexphi].i2=0;
					Lcall[Lgeptoindexphi].i1=0;
					Lg$p0=Lcall[Lgeptoindexphi].a5;
					Lg$p0.a0=nullArray;
					Lg$p0.a0o=0;
					Lg$p0.i1=0;
					Lcall[Lgeptoindexphi].i6=0;
					Lg$p0=Lcall[Lgeptoindexphi].a21;
					Lg$p0.i0=0;
					Lg$p0.i1=0;
					Lg$p0=Lcall[Lgeptoindexphi].a13;
					Lg$p0.a0=nullArray;
					Lg$p0.a0o=0;
					Lg$p0.i1=0;
					Lg$p0=Lcall[Lgeptoindexphi].a17;
					Lg$p0.a0=nullArray;
					Lg$p0.a0o=0;
					Lg$p0.i1=0;
					return Lcall[Lgeptoindexphi];
				}
				if((Ldec5$pin|0)>1){
					Lgeptoindexphi=Lgeptoindexphi+1|0;
					Ldec5$pin=Ldec5$pin-1|0;
					continue;
				}
				break;
			}
		}
		Lcall=Lg$p0.a0;
		if(Lcall===null){
			Lcall=___sfmoreglue();
			Lg$p0.a0=Lcall;
			if(Lcall===null){
				Ld.i0=12;
				return null;
			}
			Lg$p0=Lcall;
			continue;
		}
		Lg$p0=Lcall;
		continue;
	}
}
function ___sfmoreglue(){
	var tmp0=null,tmp1=null,tmp2=0,L$poptgep4$poptgep9=null;
	tmp1={a0:null,i1:0,a2:nullArray,a3:null};
	tmp0=[new constructor_struct$p_Z7__sFILE(),new constructor_struct$p_Z7__sFILE(),new constructor_struct$p_Z7__sFILE(),new constructor_struct$p_Z7__sFILE()];
	tmp1.a3=tmp0[0];
	if(tmp1===null)return null;
	tmp1=tmp1;
	tmp1.a0=null;
	tmp1.i1=4;
	tmp1.a2=tmp0;
	tmp2=0;
	while(1){
		tmp0[tmp2].a0=nullArray;
		tmp0[tmp2].a0o=0;
		tmp0[tmp2].i1=0;
		tmp0[tmp2].i2=0;
		tmp0[tmp2].i3=0;
		tmp0[tmp2].i4=0;
		L$poptgep4$poptgep9=tmp0[tmp2].a5;
		L$poptgep4$poptgep9.a0=nullArray;
		L$poptgep4$poptgep9.a0o=0;
		L$poptgep4$poptgep9.i1=0;
		tmp0[tmp2].i6=0;
		tmp0[tmp2].a7=null;
		tmp0[tmp2].a8=null;
		tmp0[tmp2].a9=null;
		tmp0[tmp2].a10=null;
		tmp0[tmp2].a11=null;
		tmp0[tmp2].a12=null;
		L$poptgep4$poptgep9=tmp0[tmp2].a13;
		L$poptgep4$poptgep9.a0=nullArray;
		L$poptgep4$poptgep9.a0o=0;
		L$poptgep4$poptgep9.i1=0;
		tmp0[tmp2].a14=null;
		tmp0[tmp2].i15=0;
		L$poptgep4$poptgep9=tmp0[tmp2].a16;
		L$poptgep4$poptgep9[0]=0;
		L$poptgep4$poptgep9[1]=0;
		L$poptgep4$poptgep9[2]=0;
		L$poptgep4$poptgep9[3]=0;
		L$poptgep4$poptgep9=tmp0[tmp2].a17;
		L$poptgep4$poptgep9.a0=nullArray;
		L$poptgep4$poptgep9.a0o=0;
		L$poptgep4$poptgep9.i1=0;
		tmp0[tmp2].i18=0;
		tmp0[tmp2].i19=0;
		tmp0[tmp2].i20=0;
		L$poptgep4$poptgep9=tmp0[tmp2].a21;
		L$poptgep4$poptgep9.i0=0;
		L$poptgep4$poptgep9.i1=0;
		tmp0[tmp2].i22=0;
		tmp2=tmp2+1|0;
		if((tmp2|0)!==4)continue;
		break;
	}
	return tmp1;
}
function _std(Lptr,Lflags,Lfile){
	var Lptr$poptgep$poptgep6$poptgepsqueezed=null;
	Lptr.a0=nullArray;
	Lptr.a0o=0;
	Lptr.i1=0;
	Lptr.i2=0;
	Lptr.i3=Lflags;
	Lptr.i22=0;
	Lptr.i4=Lfile;
	Lptr$poptgep$poptgep6$poptgepsqueezed=Lptr.a5;
	Lptr$poptgep$poptgep6$poptgepsqueezed.a0=nullArray;
	Lptr$poptgep$poptgep6$poptgepsqueezed.a0o=0;
	Lptr$poptgep$poptgep6$poptgepsqueezed.i1=0;
	Lptr.i6=0;
	Lptr$poptgep$poptgep6$poptgepsqueezed=Lptr.a21;
	Lptr$poptgep$poptgep6$poptgepsqueezed.i0=0;
	Lptr$poptgep$poptgep6$poptgepsqueezed.i1=0;
	Lptr.a8=Lptr;
	Lptr.a9=___sread;
	Lptr.a10=___swrite;
	Lptr.a11=___sseek;
	Lptr.a12=___sclose;
}
function ___sread(Lptr,Lcookie,Lbuf,Mbuf,Ln){
	Lcookie.i3=Lcookie.i3&61439;
	return  -1|0;
}
function ___swrite(Lptr,Lcookie,Lbuf,Mbuf,Ln){
	var tmp0=null;
	tmp0=Lcookie;
	tmp0.i3=tmp0.i3&61439;
	if((tmp0.i4<<16>>16)-1>>>0>1)_abort();
	return ___cheerpwrite(Lbuf,Mbuf,Ln)|0|0;
}
function _abort(){
	throw new Error("Abort called");
}
function ___cheerpwrite(Lbuf,Mbuf,Ln){
	var Lsub$pi=0,Lcall$pi=null;
	Lcall$pi=__ZN6client6String8fromUtf8EPKcj(Lbuf,Mbuf,Ln);
	Lsub$pi=Ln-1|0;
	if((Lbuf[Mbuf+Lsub$pi|0]&255)===10){
		Lcall$pi=Lcall$pi.substr(0,Lsub$pi);
		console.log(String(Lcall$pi));
		return Ln|0;
	}
	console.log(String(Lcall$pi));
	return Ln|0;
}
function __ZN6client6String8fromUtf8EPKcj(Lin,Min,Llen){
	var tmp0=0,Lconv2=0,LretConstructor=null,Lcodepoint$p0$pph=0,Llen$paddr$p0$pph=0,Lin$paddr$p0$pph=null,Lin$paddr$p0$ppho=0;
	LretConstructor=String();
	Lin$paddr$p0$ppho=Min;
	Lin$paddr$p0$pph=Lin;
	Llen$paddr$p0$pph=Llen;
	while(1){
		if((Llen$paddr$p0$pph|0)!==0){
			tmp0=Lin$paddr$p0$pph[Lin$paddr$p0$ppho]|0;
			if((tmp0&255)!==0){
				Lconv2=tmp0&255;
				if(tmp0<<24>-16777216){
					Lcodepoint$p0$pph=Lconv2;
				}else if((tmp0&255)<192){
					Lcodepoint$p0$pph=Lconv2&63|Lcodepoint$p0$pph<<6;
				}else if((tmp0&255)<224){
					Lcodepoint$p0$pph=Lconv2&31;
				}else if((tmp0&255)<240){
					Lcodepoint$p0$pph=Lconv2&15;
				}else{
					Lcodepoint$p0$pph=Lconv2&7;
				}
				Llen$paddr$p0$pph=Llen$paddr$p0$pph-1|0;
				if((Llen$paddr$p0$pph|0)===0){
					Llen$paddr$p0$pph=0;
				}else if((Lin$paddr$p0$pph[Lin$paddr$p0$ppho+1|0]&192)===128){
					Lin$paddr$p0$ppho=Lin$paddr$p0$ppho+1|0;
					Lin$paddr$p0$pph=Lin$paddr$p0$pph;
					continue;
				}
				if(Lcodepoint$p0$pph>>>0<65536){
					LretConstructor=LretConstructor.concat(String(String.fromCharCode(Lcodepoint$p0$pph)));
					Lin$paddr$p0$ppho=Lin$paddr$p0$ppho+1|0;
					Lin$paddr$p0$pph=Lin$paddr$p0$pph;
					continue;
				}
				Lcodepoint$p0$pph=Lcodepoint$p0$pph-65536|0;
				LretConstructor=LretConstructor.concat(String(String.fromCharCode((Lcodepoint$p0$pph>>>10)+55296|0)));
				LretConstructor=LretConstructor.concat(String(String.fromCharCode((Lcodepoint$p0$pph&1023)+56320|0)));
				Lin$paddr$p0$ppho=Lin$paddr$p0$ppho+1|0;
				Lin$paddr$p0$pph=Lin$paddr$p0$pph;
				continue;
			}
		}
		break;
	}
	return LretConstructor;
}
function ___sseek(Lptr,Lcookie,Loffset,Lwhence){
	Lcookie.i3=Lcookie.i3&61439;
	return  -1|0;
}
function ___sclose(Lptr,Lcookie){
	return  -1|0;
}
function ___swsetup_r(Lptr,Lfp){
	var tmp0=null,tmp0o=0,Lfp$paddr$p0=null,Land47=0,Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed=null,Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezedo=0,Lcond=0;
	if((_impure_data.i6|0)===0)___sinit(_impure_data);
	if(Lfp===___sf_fake_stdin)Lfp$paddr$p0=_impure_data.a1;
	else if(Lfp===___sf_fake_stdout)Lfp$paddr$p0=_impure_data.a2;
	else{
		Lfp$paddr$p0=_impure_data.a3;
		Lfp$paddr$p0=(Lfp===___sf_fake_stderr?Lfp$paddr$p0:Lfp);
	}
	Land47=Lfp$paddr$p0.i3|0;
	if((Land47&8)===0){
		if((Land47&16)===0){
			Lptr.i0=9;
			Lfp$paddr$p0.i3=Lfp$paddr$p0.i3|64;
			return  -1|0;
		}
		if((Land47&4)!==0){
			Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezedo=Lfp$paddr$p0.a13.a0o;
			Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed=Lfp$paddr$p0.a13.a0;
			if(Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed.length!==1||Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed!==nullArray||Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezedo!==0){
				Lfp$paddr$p0.a13.a0=nullArray;
				Lfp$paddr$p0.a13.a0o=0;
			}
			Land47&=65499;
			Lfp$paddr$p0.i3=Land47;
			Lfp$paddr$p0.i1=0;
			Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezedo=Lfp$paddr$p0.a5.a0o;
			Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed=Lfp$paddr$p0.a5.a0;
			Lfp$paddr$p0.a0=Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed;
			Lfp$paddr$p0.a0o=Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezedo;
		}
		Land47|=8;
		Lfp$paddr$p0.i3=Land47;
	}
	Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed=Lfp$paddr$p0.a5;
	tmp0o=Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed.a0o;
	tmp0=Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed.a0;
	if(tmp0.length===1&&tmp0===nullArray&&tmp0o===0)if((Land47&512)===0||Land47<<24<0){
		___smakebuf_r(Lptr,Lfp$paddr$p0);
		Land47=Lfp$paddr$p0.i3|0;
	}
	if((Land47&1)===0){
		if((Land47&2)===0)Lcond=Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed.i1|0;
		else{
			Lcond=0;
		}
		Lfp$paddr$p0.i2=Lcond;
	}else{
		Lfp$paddr$p0.i2=0;
		Lfp$paddr$p0.i6=-(Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed.i1|0)|0;
	}
	Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezedo=Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed.a0o;
	Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed=Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed.a0;
	if(Land47<<24<0&&(Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed.length===1&&Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezed===nullArray&&Lfp$paddr$p0$poptgep$poptgep7$poptgepsqueezedo===0)){
		Lfp$paddr$p0.i3=Land47|64;
		return  -1|0;
	}
	return 0|0;
}
function ___smakebuf_r(Lptr,Lfp){
	var Lcouldbetty$p0=0,Lfp$poptgep$poptgep10$poptgepsqueezed=null,tmp2=0,Lsize$p1=0,Lfp$poptgep$poptgep6$poptgepsqueezed=null;
	tmp2=Lfp.i3|0;
	if((tmp2&2)===0){
		Lsize$p1=Lfp.i4|0;
		if(Lsize$p1<<16>-65536&&(Lsize$p1&65535)<3){
			Lcouldbetty$p0=1;
			Lsize$p1=1024;
		}else{
			Lsize$p1=tmp2<<24<0?64|0:1024|0;
			Lcouldbetty$p0=0;
		}
		Lfp.i3=tmp2|2048;
		Lfp$poptgep$poptgep6$poptgepsqueezed=new Uint8Array(Lsize$p1/1|0);
		if(Lfp$poptgep$poptgep6$poptgepsqueezed.length===1&&Lfp$poptgep$poptgep6$poptgepsqueezed===nullArray&&0===0){
			tmp2=Lfp.i3|0;
			if((tmp2&512)===0){
				Lfp.i3=tmp2|2;
				Lfp.a0=Lfp.a16;
				Lfp.a0o=3;
				Lfp$poptgep$poptgep6$poptgepsqueezed=Lfp.a5;
				Lfp$poptgep$poptgep6$poptgepsqueezed.a0=Lfp.a16;
				Lfp$poptgep$poptgep6$poptgepsqueezed.a0o=3;
				Lfp$poptgep$poptgep6$poptgepsqueezed.i1=1;
			}
		}else{
			Lptr.a10=__cleanup_r;
			tmp2=Lfp.i3|0;
			Lfp.i3=tmp2|128;
			Lfp.a0=Lfp$poptgep$poptgep6$poptgepsqueezed;
			Lfp.a0o=0;
			Lfp$poptgep$poptgep10$poptgepsqueezed=Lfp.a5;
			Lfp$poptgep$poptgep10$poptgepsqueezed.a0=Lfp$poptgep$poptgep6$poptgepsqueezed;
			Lfp$poptgep$poptgep10$poptgepsqueezed.a0o=0;
			Lfp$poptgep$poptgep10$poptgepsqueezed.i1=Lsize$p1;
			if((Lcouldbetty$p0|0)!==0)if((Lfp.i4&65535)<4)Lfp.i3=tmp2|129;
		}
	}else{
		Lfp.a0=Lfp.a16;
		Lfp.a0o=3;
		Lfp$poptgep$poptgep6$poptgepsqueezed=Lfp.a5;
		Lfp$poptgep$poptgep6$poptgepsqueezed.a0=Lfp.a16;
		Lfp$poptgep$poptgep6$poptgepsqueezed.a0o=3;
		Lfp$poptgep$poptgep6$poptgepsqueezed.i1=1;
	}
}
function ___sfputs_r(Lptr,Lfp,Lbuf,Mbuf,Llen){
	var tmp0=0,tmp1=0,Ldiv=0,Linc=0;
	if((Lfp.i22&8192|0)===0){
		if((Llen|0)===0)return 0|0;
		Ldiv=0;
		while(1){
			if((___sfputc_r(Lptr,Lbuf[Mbuf+Ldiv|0]<<24>>24,Lfp)|0|0)===-1)return  -1|0;
			Ldiv=Ldiv+1|0;
			if(Ldiv>>>0<Llen>>>0)continue;
			break;
		}
		return 0|0;
	}else{
		Ldiv=Llen>>>2;
		if((Ldiv|0)===0)return 0|0;
		Linc=0;
		while(1){
			tmp0=Lbuf[Mbuf+Linc|0]|0;
			tmp1=Lfp.i3|0;
			if((tmp1&8192)===0){
				Lfp.i3=tmp1|8192;
				Lfp.i22=Lfp.i22|8192;
			}
			if((___fputwc(Lptr,tmp0,Lfp)|0|0)===-1)return  -1|0;
			Linc=Linc+1|0;
			if(Linc>>>0<Ldiv>>>0)continue;
			break;
		}
		return 0|0;
	}
}
function ___fputwc(Lptr,Lwc,Lfp){
	var Lbuf=null,tmp1=0,Lcall5=0,Li$p04=0,Lcall27=0,tmp5=null,tmp5o=0;
	Lbuf=new Uint8Array(8);
	if(Lwc-1>>>0<255){
		Lbuf[0]=Lwc;
		Lcall5=1;
	}else{
		Lcall5=__wcrtomb_r(Lptr,Lbuf,0,Lwc,Lfp.a21)|0;
		switch(Lcall5|0){
			case -1:
			Lfp.i3=Lfp.i3|64;
			return  -1|0;
			case 0:
			return Lwc|0;
			default:
		}
	}
	Li$p04=0;
	while(1){
		Lcall27=Lfp.i2|0;
		Lfp.i2=Lcall27-1|0;
		a:if((Lcall27|0)<1){
			tmp1=Lbuf[Li$p04]|0;
			if((Lcall27|0)>(Lfp.i6|0)){
				tmp5o=Lfp.a0o;
				tmp5=Lfp.a0;
				tmp5[tmp5o]=tmp1;
				tmp5o=Lfp.a0o;
				tmp5=Lfp.a0;
				if((tmp5[tmp5o]&255)!==10){
					Lfp.a0=tmp5;
					Lfp.a0o=tmp5o+1|0;
					break a;
				}
				Lcall27=___swbuf_r(Lptr,10,Lfp)|0;
			}else Lcall27=___swbuf_r(Lptr,tmp1,Lfp)|0;
			if((Lcall27|0)===-1)return  -1|0;
		}else{
			tmp5o=Lfp.a0o;
			tmp5=Lfp.a0;
			tmp5[tmp5o]=Lbuf[Li$p04]|0;
			tmp5o=Lfp.a0o;
			tmp5=Lfp.a0;
			Lfp.a0=tmp5;
			Lfp.a0o=tmp5o+1|0;
		}
		Li$p04=Li$p04+1|0;
		if(Li$p04>>>0<Lcall5>>>0)continue;
		break;
	}
	return Lwc|0;
}
function __wcrtomb_r(Lptr,Ls,Ms,Lwc,Lps){
	var L$ppre=null;
	if(Lps===null){
		L$ppre=Lptr.a22;
		if(L$ppre===null){
			L$ppre=new constructor_struct$p_Z11_misc_reent();
			Lptr.a22=L$ppre;
			L$ppre.a0=null;
			Lptr.a22.a1.i0=0;
			Lptr.a22.a1.i1=0;
			Lptr.a22.a2.i0=0;
			Lptr.a22.a2.i1=0;
			Lptr.a22.a3.i0=0;
			Lptr.a22.a3.i1=0;
			Lptr.a22.a6.i0=0;
			Lptr.a22.a6.i1=0;
			Lptr.a22.a7.i0=0;
			Lptr.a22.a7.i1=0;
			Lptr.a22.a8.i0=0;
			Lptr.a22.a8.i1=0;
			Lptr.a22.a9.i0=0;
			Lptr.a22.a9.i1=0;
			Lptr.a22.a10.i0=0;
			Lptr.a22.a10.i1=0;
			Lptr.a22.a4[0]=0;
			Lptr.a22.i5=0;
			L$ppre=Lptr.a22;
		}
		L$ppre=L$ppre.a9;
	}else{
		L$ppre=Lps;
	}
	if(Ls.length===1&&Ls===nullArray&&Ms===0)return 1|0;
	if(Lwc>>>0>255){
		L$ppre.i0=0;
		Lptr.i0=138;
		return  -1|0;
	}
	Ls[Ms]=Lwc;
	return 1|0;
}
function ___swbuf_r(Lptr,Lc,Lfp){
	var Lfp$paddr$p0$poptgep$poptgep11$poptgepsqueezed=null,tmp1=null,tmp1o=0,Lconv20=0,Lfp$paddr$p0=null,L$ppre=0,L$ppre5=null,L$ppre5o=0;
	if(Lptr!==null)if((Lptr.i6|0)===0)___sinit(Lptr);
	if(Lfp===___sf_fake_stdin)Lfp$paddr$p0=Lptr.a1;
	else if(Lfp===___sf_fake_stdout)Lfp$paddr$p0=Lptr.a2;
	else if(Lfp===___sf_fake_stderr)Lfp$paddr$p0=Lptr.a3;
	else{
		Lfp$paddr$p0=Lfp;
	}
	Lfp$paddr$p0.i2=Lfp$paddr$p0.i6|0;
	L$ppre=Lfp$paddr$p0.i3|0;
	a:{
		if((L$ppre&8)!==0){
			L$ppre5o=Lfp$paddr$p0.a5.a0o;
			L$ppre5=Lfp$paddr$p0.a5.a0;
			if(L$ppre5.length!==1||L$ppre5!==nullArray||L$ppre5o!==0)break a;
		}
		if((___swsetup_r(Lptr,Lfp$paddr$p0)|0|0)!==0)return  -1|0;
		L$ppre=Lfp$paddr$p0.i3|0;
	}
	if((L$ppre&8192)===0){
		Lfp$paddr$p0.i3=L$ppre|8192;
		Lfp$paddr$p0.i22=Lfp$paddr$p0.i22& -8193;
	}
	L$ppre5o=Lfp$paddr$p0.a0o;
	L$ppre5=Lfp$paddr$p0.a0;
	Lfp$paddr$p0$poptgep$poptgep11$poptgepsqueezed=Lfp$paddr$p0.a5;
	tmp1o=Lfp$paddr$p0$poptgep$poptgep11$poptgepsqueezed.a0o;
	tmp1=Lfp$paddr$p0$poptgep$poptgep11$poptgepsqueezed.a0;
	L$ppre=(L$ppre5o)-(tmp1o)|0;
	if((L$ppre|0)>=(Lfp$paddr$p0$poptgep$poptgep11$poptgepsqueezed.i1|0)){
		if((__fflush_r(Lptr,Lfp$paddr$p0)|0|0)!==0)return  -1|0;
		L$ppre5o=Lfp$paddr$p0.a0o;
		L$ppre5=Lfp$paddr$p0.a0;
		L$ppre=0;
	}
	Lfp$paddr$p0.i2=(Lfp$paddr$p0.i2|0)-1|0;
	Lfp$paddr$p0.a0=L$ppre5;
	Lfp$paddr$p0.a0o=L$ppre5o+1|0;
	L$ppre5[L$ppre5o]=Lc;
	Lconv20=Lc&255;
	a:{
		if((L$ppre+1|0)!==(Lfp$paddr$p0$poptgep$poptgep11$poptgepsqueezed.i1|0))if(!((Lconv20|0)===10&&(Lfp$paddr$p0.i3&1)!==0))break a;
		if((__fflush_r(Lptr,Lfp$paddr$p0)|0|0)!==0)return  -1|0;
	}
	return Lconv20|0;
}
function __fflush_r(Lptr,Lfp){
	var Lcall=0,Lfp$paddr$p0=null,Lfp$paddr$p0o=0;
	Lfp$paddr$p0o=Lfp.a5.a0o;
	Lfp$paddr$p0=Lfp.a5.a0;
	if(Lfp$paddr$p0.length===1&&Lfp$paddr$p0===nullArray&&Lfp$paddr$p0o===0)return 0|0;
	if(Lptr!==null)if((Lptr.i6|0)===0)___sinit(Lptr);
	if(Lfp===___sf_fake_stdin)Lfp$paddr$p0=Lptr.a1;
	else if(Lfp===___sf_fake_stdout)Lfp$paddr$p0=Lptr.a2;
	else if(Lfp===___sf_fake_stderr)Lfp$paddr$p0=Lptr.a3;
	else{
		Lfp$paddr$p0=Lfp;
	}
	if((Lfp$paddr$p0.i3&65535)===0)return 0|0;
	Lcall=___sflush_r(Lptr,Lfp$paddr$p0)|0;
	return Lcall|0;
}
function ___sfputc_r(Lptr,Lc,Lfp){
	var tmp0=0,tmp1=null,tmp1o=0,Lsext$pmask=0;
	tmp0=Lfp.i2|0;
	Lfp.i2=tmp0-1|0;
	if((tmp0|0)>0){
		Lsext$pmask=Lc&255;
	}else{
		Lsext$pmask=Lc&255;
		if((Lsext$pmask|0)===10||(tmp0|0)<=(Lfp.i6|0)){
			Lsext$pmask=___swbuf_r(Lptr,Lc,Lfp)|0;
			return Lsext$pmask|0;
		}
	}
	tmp1o=Lfp.a0o;
	tmp1=Lfp.a0;
	Lfp.a0=tmp1;
	Lfp.a0o=tmp1o+1|0;
	tmp1[tmp1o]=Lc;
	return Lsext$pmask|0;
}
function __printf_common(Lpdata,Lrealsz,Mrealsz,Lfp){
	var Lpdata$poptgep$poptgep7$poptgepsqueezed=null,tmp1=0,L$p1=0,L$ppre=0;
	L$p1=Lpdata.i2|0;
	L$ppre=Lpdata.i4|0;
	L$p1=(L$p1|0)>(L$ppre|0)?L$p1|0:L$ppre|0;
	Lrealsz[Mrealsz]=L$p1;
	Lpdata$poptgep$poptgep7$poptgepsqueezed=Lpdata.a9;
	if((Lpdata$poptgep$poptgep7$poptgepsqueezed[40]|0)!==0){
		L$p1=L$p1+1|0;
		Lrealsz[Mrealsz]=L$p1;
	}
	L$ppre=Lpdata.i0|0;
	if((L$ppre&32|0)!==0){
		L$p1=L$p1+2|0;
		Lrealsz[Mrealsz]=L$p1;
		L$ppre=Lpdata.i0|0;
	}
	if((L$ppre&6|0)===0)if((Lpdata.i3|0)>(L$p1|0)){
		L$p1=0;
		while(1){
			if((___sfputs_r(_impure_data,Lfp,Lpdata.a7,0,1)|0|0)===-1)return  -1|0;
			L$p1=L$p1+1|0;
			if((L$p1|0)<((Lpdata.i3|0)-(Lrealsz[Mrealsz]|0)|0))continue;
			break;
		}
		L$ppre=Lpdata.i0|0;
	}
	L$p1=Lpdata$poptgep$poptgep7$poptgepsqueezed[40]|0;
	if((L$ppre&32|0)===0){
		L$p1=(L$p1!==0?1:0)?1:0;
	}else{
		Lpdata$poptgep$poptgep7$poptgepsqueezed[L$p1!==0?41|0:40|0]=48;
		Lpdata$poptgep$poptgep7$poptgepsqueezed[L$p1!==0?42|0:41|0]=Lpdata$poptgep$poptgep7$poptgepsqueezed[42]|0;
		L$p1=L$p1!==0?3|0:2|0;
	}
	if((___sfputs_r(_impure_data,Lfp,Lpdata$poptgep$poptgep7$poptgepsqueezed,40,L$p1)|0|0)===-1)return  -1|0;
	L$p1=(Lpdata.i3|0)-(Lrealsz[Mrealsz]|0)|0;
	L$p1=(L$p1|0)<0||(Lpdata.i0&6|0)!==4?0|0:L$p1|0;
	L$ppre=Lpdata.i2|0;
	tmp1=Lpdata.i4|0;
	if((L$ppre|0)>(tmp1|0)){
		L$p1=(L$ppre-tmp1|0)+L$p1|0;
	}
	if((L$p1|0)<=0)return 0|0;
	L$ppre=0;
	while(1){
		if((___sfputs_r(_impure_data,Lfp,Lpdata.a8,0,1)|0|0)===-1)return  -1|0;
		L$ppre=L$ppre+1|0;
		if((L$ppre|0)<(L$p1|0))continue;
		break;
	}
	return 0|0;
}
function __printf_i(Lpdata,Lfp,Lap){
	var tmp0=0,tmp1=null,L$ppre83=0,Lpdata$poptgep$poptgep22$poptgepsqueezed=null,Lxdigs$p0=null,Lxdigs$p0o=0,Lor107=0,L$ppre81=0,Lgeptoindexphi=0,Lbit$psroa$p0$p0$plcssa$pi$pi=0,Lbit$psroa$p8$p0$plcssa$pi$pi=0,Lden$paddr$psroa$p0$p0$plcssa$pi$pi=0,Lden$paddr$psroa$p9$p0$plcssa$pi$pi=0,Lnum$paddr$psroa$p0$p037$pi$pi=0,Lnum$paddr$psroa$p6$p038$pi$pi=0;
	L$ppre83=Lpdata.i6|0;
	Lpdata$poptgep$poptgep22$poptgepsqueezed=Lpdata.a9;
	a:{
		b:{
			c:{
				d:{
					e:{
						f:{
							switch(L$ppre83<<24>>24|0){
								case 99:
								L$ppre83=handleVAArg(Lap);
								Lpdata$poptgep$poptgep22$poptgepsqueezed[39]=L$ppre83;
								Lpdata.i4=1;
								Lxdigs$p0o=39;
								Lxdigs$p0=Lpdata$poptgep$poptgep22$poptgepsqueezed;
								break;
								case 100:
								case 105:
								L$ppre81=Lpdata.i0|0;
								if((L$ppre81&512|0)===0){
									if(L$ppre81<<24<0){
										L$ppre83=handleVAArg(Lap);
										L$ppre81=L$ppre83>>31;
									}else{
										L$ppre83=handleVAArg(Lap);
										if((L$ppre81&64|0)===0){
											L$ppre81=L$ppre83>>31;
										}else{
											L$ppre83<<=16;
											L$ppre81=L$ppre83>>31;
											L$ppre83>>=16;
										}
									}
								}else{
									Lxdigs$p0=handleVAArg(Lap);
									L$ppre81=Lxdigs$p0.d[Lxdigs$p0.o+1|0]|0;
									L$ppre83=Lxdigs$p0.d[Lxdigs$p0.o]|0;
								}
								if((L$ppre81|0)<0){
									Lpdata$poptgep$poptgep22$poptgepsqueezed[40]=45;
									L$ppre81=(L$ppre83|0)!==0?L$ppre81^ -1|0:-L$ppre81|0;
									L$ppre83=-L$ppre83|0;
									Lxdigs$p0=_$pstr$p341;
									Lor107=10;
									break b;
								}
								Lxdigs$p0=_$pstr$p341;
								Lor107=10;
								break b;
								case 117:
								case 111:
								L$ppre83=Lpdata.i0|0;
								if((L$ppre83&512|0)===0){
									if(L$ppre83<<24<0){
										L$ppre83=handleVAArg(Lap);
										L$ppre81=0;
									}else{
										L$ppre81=handleVAArg(Lap);
										L$ppre83=(L$ppre83&64|0)===0?L$ppre81|0:L$ppre81&65535|0;
										L$ppre81=0;
									}
								}else{
									Lxdigs$p0=handleVAArg(Lap);
									L$ppre81=Lxdigs$p0.d[Lxdigs$p0.o+1|0]|0;
									L$ppre83=Lxdigs$p0.d[Lxdigs$p0.o]|0;
								}
								Lor107=Lpdata.i6|0;
								Lor107=(Lor107&255)===111?8|0:10|0;
								Lxdigs$p0=_$pstr$p341;
								break c;
								case 88:
								Lpdata$poptgep$poptgep22$poptgepsqueezed[42]=88;
								Lxdigs$p0=_$pstr$p341;
								break d;
								case 112:
								Lpdata.i0=Lpdata.i0|32;
								break e;
								case 120:
								break e;
								case 110:
								L$ppre83=Lpdata.i0|0;
								if((L$ppre83&512|0)===0){
									if(L$ppre83<<24<0){
										L$ppre83=Lpdata.i5|0;
										Lxdigs$p0=handleVAArg(Lap);
										Lxdigs$p0.d[Lxdigs$p0.o]=L$ppre83;
										break f;
									}
									L$ppre81=Lpdata.i5|0;
									if((L$ppre83&64|0)===0){
										Lxdigs$p0=handleVAArg(Lap);
										Lxdigs$p0.d[Lxdigs$p0.o]=L$ppre81;
										break f;
									}
									Lxdigs$p0=handleVAArg(Lap);
									Lxdigs$p0.d[Lxdigs$p0.o]=L$ppre81;
									break f;
								}
								L$ppre83=Lpdata.i5|0;
								Lxdigs$p0=handleVAArg(Lap);
								Lxdigs$p0.d[Lxdigs$p0.o+1|0]=L$ppre83>>31;
								Lxdigs$p0.d[Lxdigs$p0.o]=L$ppre83;
								break f;
								case 0:
								break f;
								case 115:
								Lxdigs$p0=handleVAArg(Lap);
								L$ppre83=Lpdata.i1|0;
								if((L$ppre83|0)===0){
									L$ppre83=0;
								}else{
									L$ppre81=L$ppre83;
									Lor107=0;
									while(1){
										if((Lxdigs$p0.d[Lxdigs$p0.o+Lor107|0]&255)===0){
											if(Lxdigs$p0.d.length!==1||Lxdigs$p0.d!==nullArray||(Lxdigs$p0.o+Lor107|0)!==0){
												L$ppre83=(Lxdigs$p0.o+Lor107|0)-(Lxdigs$p0.o)|0;
												Lpdata.i1=L$ppre83;
											}
										}else{
											L$ppre81=L$ppre81-1|0;
											if((L$ppre81|0)!==0){
												Lor107=Lor107+1|0;
												continue;
											}
										}
										break;
									}
								}
								Lpdata.i4=L$ppre83;
								Lxdigs$p0o=Lxdigs$p0.o;
								Lxdigs$p0=Lxdigs$p0.d;
								break;
								default:
								Lpdata$poptgep$poptgep22$poptgepsqueezed[39]=L$ppre83;
								Lpdata.i4=1;
								Lxdigs$p0o=39;
								Lxdigs$p0=Lpdata$poptgep$poptgep22$poptgepsqueezed;
							}
							Lpdata$poptgep$poptgep22$poptgepsqueezed[40]=0;
							break a;
						}
						Lpdata.i4=0;
						Lxdigs$p0o=40;
						Lxdigs$p0=Lpdata$poptgep$poptgep22$poptgepsqueezed;
						break a;
					}
					Lpdata$poptgep$poptgep22$poptgepsqueezed[42]=120;
					Lxdigs$p0=_$pstr$p1$p340;
				}
				L$ppre83=Lpdata.i0|0;
				if((L$ppre83&512|0)===0){
					if(L$ppre83<<24<0){
						L$ppre83=handleVAArg(Lap);
						L$ppre81=0;
					}else{
						L$ppre81=handleVAArg(Lap);
						L$ppre83=(L$ppre83&64|0)===0?L$ppre81|0:L$ppre81&65535|0;
						L$ppre81=0;
					}
				}else{
					tmp1=handleVAArg(Lap);
					L$ppre81=tmp1.d[tmp1.o+1|0]|0;
					L$ppre83=tmp1.d[tmp1.o]|0;
				}
				Lor107=Lpdata.i0|0;
				if((Lor107&1|0)!==0){
					Lor107|=32;
					Lpdata.i0=Lor107;
				}
				if((L$ppre81|L$ppre83|0)===0){
					Lpdata.i0=Lor107& -33;
					Lor107=16;
				}else{
					Lor107=16;
				}
			}
			Lpdata$poptgep$poptgep22$poptgepsqueezed[40]=0;
		}
		Lgeptoindexphi=Lpdata.i1|0;
		Lpdata.i2=Lgeptoindexphi;
		if((Lgeptoindexphi|0)>-1)Lpdata.i0=Lpdata.i0& -5;
		if((L$ppre81|L$ppre83|Lgeptoindexphi|0)===0){
			Lgeptoindexphi=0;
		}else{
			Lgeptoindexphi=0;
			while(1){
				tmp0=(L$ppre81|0)!==0||Lor107>>>0<L$ppre83>>>0&&(L$ppre81|0)===0?1:0;
				if(tmp0){
					Lden$paddr$psroa$p0$p0$plcssa$pi$pi=Lor107;
					Lden$paddr$psroa$p9$p0$plcssa$pi$pi=0;
					Lbit$psroa$p8$p0$plcssa$pi$pi=0;
					Lbit$psroa$p0$p0$plcssa$pi$pi=1;
					while(1){
						Lden$paddr$psroa$p9$p0$plcssa$pi$pi=Lden$paddr$psroa$p9$p0$plcssa$pi$pi<<1|Lden$paddr$psroa$p0$p0$plcssa$pi$pi>>>31;
						Lbit$psroa$p8$p0$plcssa$pi$pi=Lbit$psroa$p8$p0$plcssa$pi$pi<<1|Lbit$psroa$p0$p0$plcssa$pi$pi>>>31;
						Lden$paddr$psroa$p0$p0$plcssa$pi$pi<<=1;
						Lbit$psroa$p0$p0$plcssa$pi$pi<<=1;
						if((Lden$paddr$psroa$p9$p0$plcssa$pi$pi|0)>-1&&(Lbit$psroa$p8$p0$plcssa$pi$pi|Lbit$psroa$p0$p0$plcssa$pi$pi|0)!==0&&(Lden$paddr$psroa$p9$p0$plcssa$pi$pi>>>0<L$ppre81>>>0||Lden$paddr$psroa$p0$p0$plcssa$pi$pi>>>0<L$ppre83>>>0&&(Lden$paddr$psroa$p9$p0$plcssa$pi$pi|0)===(L$ppre81|0)))continue;
						break;
					}
				}else{
					Lden$paddr$psroa$p0$p0$plcssa$pi$pi=Lor107;
					Lden$paddr$psroa$p9$p0$plcssa$pi$pi=0;
					Lbit$psroa$p8$p0$plcssa$pi$pi=0;
					Lbit$psroa$p0$p0$plcssa$pi$pi=1;
				}
				if((Lbit$psroa$p8$p0$plcssa$pi$pi|Lbit$psroa$p0$p0$plcssa$pi$pi|0)===0){
					Lnum$paddr$psroa$p0$p037$pi$pi=L$ppre83;
				}else{
					Lnum$paddr$psroa$p0$p037$pi$pi=L$ppre83;
					Lnum$paddr$psroa$p6$p038$pi$pi=L$ppre81;
					while(1){
						if(Lnum$paddr$psroa$p6$p038$pi$pi>>>0>Lden$paddr$psroa$p9$p0$plcssa$pi$pi>>>0||Lnum$paddr$psroa$p0$p037$pi$pi>>>0>=Lden$paddr$psroa$p0$p0$plcssa$pi$pi>>>0&&(Lnum$paddr$psroa$p6$p038$pi$pi|0)===(Lden$paddr$psroa$p9$p0$plcssa$pi$pi|0)){
							Lnum$paddr$psroa$p6$p038$pi$pi=(Lnum$paddr$psroa$p6$p038$pi$pi-Lden$paddr$psroa$p9$p0$plcssa$pi$pi|0)+((Lnum$paddr$psroa$p0$p037$pi$pi>>>0<Lden$paddr$psroa$p0$p0$plcssa$pi$pi>>>0?1:0)<<31>>31)|0;
							Lnum$paddr$psroa$p0$p037$pi$pi=Lnum$paddr$psroa$p0$p037$pi$pi-Lden$paddr$psroa$p0$p0$plcssa$pi$pi|0;
						}
						Lbit$psroa$p0$p0$plcssa$pi$pi=Lbit$psroa$p8$p0$plcssa$pi$pi<<31|Lbit$psroa$p0$p0$plcssa$pi$pi>>>1;
						Lden$paddr$psroa$p0$p0$plcssa$pi$pi=Lden$paddr$psroa$p9$p0$plcssa$pi$pi<<31|Lden$paddr$psroa$p0$p0$plcssa$pi$pi>>>1;
						Lbit$psroa$p8$p0$plcssa$pi$pi>>>=1;
						if((Lbit$psroa$p0$p0$plcssa$pi$pi|Lbit$psroa$p8$p0$plcssa$pi$pi|0)!==0){
							Lden$paddr$psroa$p9$p0$plcssa$pi$pi>>>=1;
							continue;
						}
						break;
					}
				}
				Lgeptoindexphi=Lgeptoindexphi-1|0;
				Lpdata$poptgep$poptgep22$poptgepsqueezed[40+Lgeptoindexphi|0]=Lxdigs$p0[Lnum$paddr$psroa$p0$p037$pi$pi]|0;
				if(tmp0){
					Lnum$paddr$psroa$p6$p038$pi$pi=Lor107;
					Lbit$psroa$p0$p0$plcssa$pi$pi=0;
					Lden$paddr$psroa$p9$p0$plcssa$pi$pi=0;
					Lnum$paddr$psroa$p0$p037$pi$pi=1;
					while(1){
						Lbit$psroa$p0$p0$plcssa$pi$pi=Lbit$psroa$p0$p0$plcssa$pi$pi<<1|Lnum$paddr$psroa$p6$p038$pi$pi>>>31;
						Lden$paddr$psroa$p9$p0$plcssa$pi$pi=Lden$paddr$psroa$p9$p0$plcssa$pi$pi<<1|Lnum$paddr$psroa$p0$p037$pi$pi>>>31;
						Lnum$paddr$psroa$p6$p038$pi$pi<<=1;
						Lnum$paddr$psroa$p0$p037$pi$pi<<=1;
						if((Lbit$psroa$p0$p0$plcssa$pi$pi|0)>-1&&(Lden$paddr$psroa$p9$p0$plcssa$pi$pi|Lnum$paddr$psroa$p0$p037$pi$pi|0)!==0&&(Lbit$psroa$p0$p0$plcssa$pi$pi>>>0<L$ppre81>>>0||Lnum$paddr$psroa$p6$p038$pi$pi>>>0<L$ppre83>>>0&&(Lbit$psroa$p0$p0$plcssa$pi$pi|0)===(L$ppre81|0)))continue;
						break;
					}
				}else{
					Lnum$paddr$psroa$p6$p038$pi$pi=Lor107;
					Lbit$psroa$p0$p0$plcssa$pi$pi=0;
					Lden$paddr$psroa$p9$p0$plcssa$pi$pi=0;
					Lnum$paddr$psroa$p0$p037$pi$pi=1;
				}
				if((Lden$paddr$psroa$p9$p0$plcssa$pi$pi|Lnum$paddr$psroa$p0$p037$pi$pi|0)===0){
					L$ppre81=0;
					L$ppre83=0;
				}else{
					Lbit$psroa$p8$p0$plcssa$pi$pi=L$ppre83;
					Lden$paddr$psroa$p0$p0$plcssa$pi$pi=0;
					L$ppre83=0;
					while(1){
						if(L$ppre81>>>0>Lbit$psroa$p0$p0$plcssa$pi$pi>>>0||Lbit$psroa$p8$p0$plcssa$pi$pi>>>0>=Lnum$paddr$psroa$p6$p038$pi$pi>>>0&&(L$ppre81|0)===(Lbit$psroa$p0$p0$plcssa$pi$pi|0)){
							L$ppre81=(L$ppre81-Lbit$psroa$p0$p0$plcssa$pi$pi|0)+((Lbit$psroa$p8$p0$plcssa$pi$pi>>>0<Lnum$paddr$psroa$p6$p038$pi$pi>>>0?1:0)<<31>>31)|0;
							L$ppre83|=Lnum$paddr$psroa$p0$p037$pi$pi;
							Lbit$psroa$p8$p0$plcssa$pi$pi=Lbit$psroa$p8$p0$plcssa$pi$pi-Lnum$paddr$psroa$p6$p038$pi$pi|0;
							Lden$paddr$psroa$p0$p0$plcssa$pi$pi|=Lden$paddr$psroa$p9$p0$plcssa$pi$pi;
						}
						Lnum$paddr$psroa$p0$p037$pi$pi=Lden$paddr$psroa$p9$p0$plcssa$pi$pi<<31|Lnum$paddr$psroa$p0$p037$pi$pi>>>1;
						Lnum$paddr$psroa$p6$p038$pi$pi=Lbit$psroa$p0$p0$plcssa$pi$pi<<31|Lnum$paddr$psroa$p6$p038$pi$pi>>>1;
						Lden$paddr$psroa$p9$p0$plcssa$pi$pi>>>=1;
						if((Lnum$paddr$psroa$p0$p037$pi$pi|Lden$paddr$psroa$p9$p0$plcssa$pi$pi|0)!==0){
							Lbit$psroa$p0$p0$plcssa$pi$pi>>>=1;
							continue;
						}
						break;
					}
					L$ppre81=Lden$paddr$psroa$p0$p0$plcssa$pi$pi;
				}
				if((L$ppre81|L$ppre83|0)!==0)continue;
				break;
			}
		}
		if((Lor107|0)===8)if((Lpdata.i0&1|0)!==0)if((Lpdata.i1|0)<=(Lpdata.i4|0)){
			Lgeptoindexphi=Lgeptoindexphi-1|0;
			Lpdata$poptgep$poptgep22$poptgepsqueezed[40+Lgeptoindexphi|0]=48;
		}
		Lpdata.i4=(40)-(40+Lgeptoindexphi|0)|0;
		Lxdigs$p0o=40+Lgeptoindexphi|0;
		Lxdigs$p0=Lpdata$poptgep$poptgep22$poptgepsqueezed;
	}
	Lpdata$poptgep$poptgep22$poptgepsqueezed=[0];
	if((__printf_common(Lpdata,Lpdata$poptgep$poptgep22$poptgepsqueezed,0,Lfp)|0|0)!==-1)if((___sfputs_r(_impure_data,Lfp,Lxdigs$p0,Lxdigs$p0o,Lpdata.i4|0)|0|0)!==-1){
		L$ppre83=Lpdata.i3|0;
		Lor107=Lpdata$poptgep$poptgep22$poptgepsqueezed[0]|0;
		if(!((Lpdata.i0&2|0)!==0&&(L$ppre83|0)>(Lor107|0)))return ((L$ppre83|0)>(Lor107|0)?L$ppre83|0:Lor107|0)|0;
		L$ppre83=0;
		while(1){
			if((___sfputs_r(_impure_data,Lfp,Lpdata.a7,0,1)|0|0)!==-1){
				L$ppre81=Lpdata.i3|0;
				L$ppre83=L$ppre83+1|0;
				if((L$ppre83|0)<(L$ppre81-Lor107|0))continue;
				return ((L$ppre81|0)>(Lor107|0)?L$ppre81|0:Lor107|0)|0;
			}
			break;
		}
	}
	return  -1|0;
}
function __ZNSs6resizeEjc(Lthis,L__n){
	var tmp0=null,tmp1=0,Lsub=0,tmp3=null,Lcond$pi$pi=0;
	tmp0=Lthis;
	tmp1=tmp0.i1|0;
	if(tmp1>>>0>L__n>>>0){
		tmp3=tmp0.a2;
		tmp3[L__n]=0;
		tmp0.i1=L__n;
	}else if((tmp1|0)!==(L__n|0)){
		Lcond$pi$pi=tmp0.i0|0;
		if(Lcond$pi$pi>>>0>1){
			Lcond$pi$pi=(Lcond$pi$pi& -2)-1|0;
		}else{
			Lcond$pi$pi=0;
		}
		Lsub=L__n-tmp1|0;
		if(Lcond$pi$pi-tmp1>>>0<Lsub>>>0)__ZNSs9__grow_byEjjjjjj(Lthis,Lcond$pi$pi,(Lsub-Lcond$pi$pi|0)+tmp1|0,tmp1,tmp1);
		tmp3=tmp0.a2;
		Lcond$pi$pi=0;
		while(1){
			tmp3[(0+tmp1|0)+Lcond$pi$pi|0]=0;
			Lcond$pi$pi=Lcond$pi$pi+1|0;
			if((Lsub|0)!==(Lcond$pi$pi|0))continue;
			break;
		}
		tmp0.i1=L__n;
		tmp3[L__n]=0;
	}
}
function __ZNSs9__grow_byEjjjjjj(Lthis,L__old_cap,L__delta_cap,L__old_sz,L__n_copy){
	var tmp0=null,tmp1=null,tmp2=null,Lmul=0,Ladd=0,tmp5=0;
	if( -17-L__old_cap>>>0<L__delta_cap>>>0)__ZNKSt21__basic_string_commonILb1EE20__throw_length_errorEv();
	tmp0=Lthis;
	tmp1=tmp0.a2;
	if(L__old_cap>>>0<2147483623){
		Lmul=L__old_cap<<1;
		Ladd=L__delta_cap+L__old_cap|0;
		Lmul=(Ladd>>>0<Lmul>>>0?Lmul|0:Ladd|0)+16& -16;
	}else{
		Lmul=-17;
	}
	tmp2=new Uint8Array(Lmul/1|0);
	if((L__n_copy|0)!==0){
		Ladd=0;
		while(1){
			tmp2[Ladd]=tmp1[Ladd]|0;
			Ladd=Ladd+1|0;
			if((Ladd|0)!==(L__n_copy|0))continue;
			break;
		}
	}
	if((L__old_sz|0)!==(L__n_copy|0)){
		Ladd=L__old_sz-L__n_copy|0;
		tmp5=0;
		while(1){
			tmp2[(0+L__n_copy|0)+tmp5|0]=tmp1[(0+L__n_copy|0)+tmp5|0]|0;
			tmp5=tmp5+1|0;
			if((Ladd|0)!==(tmp5|0))continue;
			break;
		}
	}
	tmp0.a2=tmp2;
	tmp0.i0=Lmul|1;
}
function ___udivti3(Lagg$presult,Magg$presult,Lnumerator$pval,Lnumerator$p1$pval,Ldenominator$pval,Ldenominator$p1$pval){
	var Lbit$psroa$p0$p0$plcssa$pi=0,Lbit$psroa$p8$p0$plcssa$pi=0,Lden$paddr$psroa$p0$p0$plcssa$pi=0,Lden$paddr$psroa$p9$p0$plcssa$pi=0,Lres$psroa$p0$p036$pi=0,Lres$psroa$p4$p035$pi=0,Lnum$paddr$psroa$p6$p038$pi=0,Lnum$paddr$psroa$p0$p037$pi=0;
	if((Ldenominator$p1$pval|0)>-1&&(Ldenominator$p1$pval>>>0<Lnumerator$p1$pval>>>0||Ldenominator$pval>>>0<Lnumerator$pval>>>0&&(Ldenominator$p1$pval|0)===(Lnumerator$p1$pval|0))){
		Lden$paddr$psroa$p9$p0$plcssa$pi=Ldenominator$p1$pval;
		Lden$paddr$psroa$p0$p0$plcssa$pi=Ldenominator$pval;
		Lbit$psroa$p8$p0$plcssa$pi=0;
		Lbit$psroa$p0$p0$plcssa$pi=1;
		while(1){
			Lden$paddr$psroa$p9$p0$plcssa$pi=Lden$paddr$psroa$p9$p0$plcssa$pi<<1|Lden$paddr$psroa$p0$p0$plcssa$pi>>>31;
			Lbit$psroa$p8$p0$plcssa$pi=Lbit$psroa$p8$p0$plcssa$pi<<1|Lbit$psroa$p0$p0$plcssa$pi>>>31;
			Lden$paddr$psroa$p0$p0$plcssa$pi<<=1;
			Lbit$psroa$p0$p0$plcssa$pi<<=1;
			if((Lden$paddr$psroa$p9$p0$plcssa$pi|0)>-1&&(Lbit$psroa$p8$p0$plcssa$pi|Lbit$psroa$p0$p0$plcssa$pi|0)!==0&&(Lden$paddr$psroa$p9$p0$plcssa$pi>>>0<Lnumerator$p1$pval>>>0||Lden$paddr$psroa$p0$p0$plcssa$pi>>>0<Lnumerator$pval>>>0&&(Lden$paddr$psroa$p9$p0$plcssa$pi|0)===(Lnumerator$p1$pval|0)))continue;
			break;
		}
	}else{
		Lden$paddr$psroa$p9$p0$plcssa$pi=Ldenominator$p1$pval;
		Lden$paddr$psroa$p0$p0$plcssa$pi=Ldenominator$pval;
		Lbit$psroa$p8$p0$plcssa$pi=0;
		Lbit$psroa$p0$p0$plcssa$pi=1;
	}
	if((Lbit$psroa$p8$p0$plcssa$pi|Lbit$psroa$p0$p0$plcssa$pi|0)===0){
		Lres$psroa$p4$p035$pi=0;
		Lres$psroa$p0$p036$pi=0;
	}else{
		Lres$psroa$p4$p035$pi=0;
		Lres$psroa$p0$p036$pi=0;
		Lnum$paddr$psroa$p0$p037$pi=Lnumerator$pval;
		Lnum$paddr$psroa$p6$p038$pi=Lnumerator$p1$pval;
		while(1){
			if(Lnum$paddr$psroa$p6$p038$pi>>>0>Lden$paddr$psroa$p9$p0$plcssa$pi>>>0||Lnum$paddr$psroa$p0$p037$pi>>>0>=Lden$paddr$psroa$p0$p0$plcssa$pi>>>0&&(Lnum$paddr$psroa$p6$p038$pi|0)===(Lden$paddr$psroa$p9$p0$plcssa$pi|0)){
				Lnum$paddr$psroa$p6$p038$pi=(Lnum$paddr$psroa$p6$p038$pi-Lden$paddr$psroa$p9$p0$plcssa$pi|0)+((Lnum$paddr$psroa$p0$p037$pi>>>0<Lden$paddr$psroa$p0$p0$plcssa$pi>>>0?1:0)<<31>>31)|0;
				Lres$psroa$p0$p036$pi|=Lbit$psroa$p0$p0$plcssa$pi;
				Lres$psroa$p4$p035$pi|=Lbit$psroa$p8$p0$plcssa$pi;
				Lnum$paddr$psroa$p0$p037$pi=Lnum$paddr$psroa$p0$p037$pi-Lden$paddr$psroa$p0$p0$plcssa$pi|0;
			}
			Lbit$psroa$p0$p0$plcssa$pi=Lbit$psroa$p8$p0$plcssa$pi<<31|Lbit$psroa$p0$p0$plcssa$pi>>>1;
			Lden$paddr$psroa$p0$p0$plcssa$pi=Lden$paddr$psroa$p9$p0$plcssa$pi<<31|Lden$paddr$psroa$p0$p0$plcssa$pi>>>1;
			Lbit$psroa$p8$p0$plcssa$pi>>>=1;
			if((Lbit$psroa$p0$p0$plcssa$pi|Lbit$psroa$p8$p0$plcssa$pi|0)!==0){
				Lden$paddr$psroa$p9$p0$plcssa$pi>>>=1;
				continue;
			}
			break;
		}
	}
	Lagg$presult[Magg$presult+1|0]=Lres$psroa$p4$p035$pi;
	Lagg$presult[Magg$presult]=Lres$psroa$p0$p036$pi;
}
var _$pstr$p73=new Uint8Array([48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,43,47,0]);
var ___sf_fake_stdin=new constructor_struct$p_Z7__sFILE();
var ___sf_fake_stdout=new constructor_struct$p_Z7__sFILE();
var ___sf_fake_stderr=new constructor_struct$p_Z7__sFILE();
var _$pstr$p18$p129=new Uint8Array([67,0]);
var _promotedMalloc$p16=new constructor_struct$p_Z11_misc_reent();
var _impure_data={i0:0,a1:___sf_fake_stdin,a2:___sf_fake_stdout,a3:___sf_fake_stderr,i4:0,a5:null,i6:0,i7:0,a8:_$pstr$p18$p129[0],a9:null,a10:null,i11:0,i12:0,a13:null,a14:null,a15:null,a16:null,a17:null,a18:null,a19:{a0:null,i1:0,a2:createPointerArray([],0,32,null),a3:null},a20:{a0:null,i1:0,a2:nullArray},a21:null,a22:_promotedMalloc$p16,a23:null};
var _$pstr$p8=new Uint8Array([97,115,115,101,114,116,105,111,110,32,34,37,115,34,32,102,97,105,108,101,100,58,32,102,105,108,101,32,34,37,115,34,44,32,108,105,110,101,32,37,100,37,115,37,115,10,0]);
var _$pstr$p1$p230=new Uint8Array([33,34,98,97,115,105,99,95,115,116,114,105,110,103,32,108,101,110,103,116,104,95,101,114,114,111,114,34,0]);
var _$pstr$p229$p320=new Uint8Array([47,104,111,109,101,47,99,97,114,108,111,47,99,104,101,101,114,112,47,99,104,101,101,114,112,45,108,105,98,99,120,120,47,105,110,99,108,117,100,101,47,115,116,114,105,110,103,0]);
var _$pstr$p1$p186=new Uint8Array([44,32,102,117,110,99,116,105,111,110,58,32,0]);
var ___PRETTY_FUNCTION__$p_ZNKSt21__basic_string_commonILb1EE20__throw_length_errorEv=new Uint8Array([118,111,105,100,32,115,116,100,58,58,95,95,98,97,115,105,99,95,115,116,114,105,110,103,95,99,111,109,109,111,110,60,116,114,117,101,62,58,58,95,95,116,104,114,111,119,95,108,101,110,103,116,104,95,101,114,114,111,114,40,41,32,99,111,110,115,116,0]);
var _mp_s_rmap_reverse=new Uint8Array([255,255,255,62,255,255,255,63,0,1,2,3,4,5,6,7,8,9,255,255,255,255,255,255,255,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,255,255,255,255,255,255,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,255,255,255,255,255]);
var _$pstr$p326=new Uint8Array([35,45,48,43,32,0]);
var _$pstr$p323=new Uint8Array([104,108,76,0]);
var _$pstr$p1$p340=new Uint8Array([48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,0]);
var _$pstr$p341=new Uint8Array([48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,0]);
function constructor_struct$p_Z11_prt_data_t(){
	this.i0=0;
	this.i1=0;
	this.i2=0;
	this.i3=0;
	this.i4=0;
	this.i5=0;
	this.i6=0;
	this.a7=[0];
	this.a8=[0];
	this.a9=new Uint8Array(50);
	this.d10=-0.;
	this.i11=0;
}
function constructor_struct$p_Z6_reent(){
	this.i0=0;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.i4=0;
	this.a5=null;
	this.i6=0;
	this.i7=0;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.i11=0;
	this.i12=0;
	this.a13=null;
	this.a14=null;
	this.a15=null;
	this.a16=null;
	this.a17=null;
	this.a18=null;
	this.a19={a0:null,i1:0,a2:createPointerArray([],0,32,null),a3:null};
	this.a20={a0:null,i1:0,a2:nullArray};
	this.a21=null;
	this.a22=null;
	this.a23=null;
}
function constructor_struct$p_Z11_misc_reent(){
	this.a0=null;
	this.a1={i0:0,i1:0};
	this.a2={i0:0,i1:0};
	this.a3={i0:0,i1:0};
	this.a4=new Uint8Array(8);
	this.i5=0;
	this.a6={i0:0,i1:0};
	this.a7={i0:0,i1:0};
	this.a8={i0:0,i1:0};
	this.a9={i0:0,i1:0};
	this.a10={i0:0,i1:0};
}
function constructor_struct$p_Z7__sFILE(){
	this.a0=nullArray;
	this.a0o=0;
	this.i1=0;
	this.i2=0;
	this.i3=0;
	this.i4=0;
	this.a5={a0:nullArray,a0o:0,i1:0};
	this.i6=0;
	this.a7=null;
	this.a8=null;
	this.a9=null;
	this.a10=null;
	this.a11=null;
	this.a12=null;
	this.a13={a0:nullArray,a0o:0,i1:0};
	this.a14=null;
	this.i15=0;
	this.a16=new Uint8Array(4);
	this.a17={a0:nullArray,a0o:0,i1:0};
	this.i18=0;
	this.i19=0;
	this.i20=0;
	this.a21={i0:0,i1:0};
	this.i22=0;
}
function createPointerArray(r,s,e,v){for(var i=s;i<e;i++)r[i]=v;return r;}
function handleVAArg(ptr){var ret=ptr.d[ptr.o];ptr.o++;return ret;}
