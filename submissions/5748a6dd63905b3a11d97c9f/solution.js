var prefixes=Array(),prefixes_dict=Array(),b2,ED=function(){function i(e){var t=[];return t[e-1]=undefined,t}function s(e,t){return u(e[0]+t[0],e[1]+t[1])}function o(e,t){var n,r;return e[0]==t[0]&&e[1]==t[1]?0:(n=e[1]<0,r=t[1]<0,n&&!r?-1:!n&&r?1:l(e,t)[1]<0?-1:1)}function u(t,n){var r,i;n%=0x10000000000000000,t%=0x10000000000000000,r=n%e,i=Math.floor(t/e)*e,n=n-r+i,t=t-i+r;while(t<0)t+=e,n-=e;while(t>4294967295)t-=e,n+=e;n%=0x10000000000000000;while(n>0x7fffffff00000000)n-=0x10000000000000000;while(n<-0x8000000000000000)n+=0x10000000000000000;return[t,n]}function a(t){return t>=0?[t,0]:[t+e,-e]}function f(t){return t[0]>=2147483648?~~Math.max(Math.min(t[0]-e,2147483647),-2147483648):~~Math.max(Math.min(t[0],2147483647),-2147483648)}function l(e,t){return u(e[0]-t[0],e[1]-t[1])}function c(e,t){return e.buf=t,e.pos=0,e.count=t.length,e}function h(e){return e.pos>=e.count?-1:e.buf[e.pos++]&255}function p(e){return e.buf=i(32),e.count=0,e}function d(e){var t=e.buf;return t.length=e.count,t}function v(e,t,n,r){m(t,n,e.buf,e.count,r),e.count+=r}function m(e,t,n,r,i){for(var s=0;s<i;++s)n[r+s]=e[t+s]}function g(e,n,r){var i,s="",o,u=[],f,l;for(o=0;o<5;++o)f=h(n),f==-1,u[o]=f<<24>>24;i=_({}),!P(i,u);for(o=0;o<64;o+=8)f=h(n),f==-1,f=f.toString(16),f.length==1&&(f="0"+f),s=f+""+s;/^0+$|^f+$/i.test(s)?e.length_0=t:(l=parseInt(s,16),l>4294967295?e.length_0=t:e.length_0=a(l)),e.chunker=O(i,n,r,e.length_0)}function y(e,t){return e.output=p({}),g(e,c({},t),e.output),e}function b(e,t,n){var r=e._pos-t-1;r<0&&(r+=e._windowSize);for(;n!=0;--n)r>=e._windowSize&&(r=0),e._buffer[e._pos++]=e._buffer[r++],e._pos>=e._windowSize&&E(e)}function w(e,t){if(e._buffer==null||e._windowSize!=t)e._buffer=i(t);e._windowSize=t,e._pos=0,e._streamPos=0}function E(e){var t=e._pos-e._streamPos;if(!t)return;v(e._stream,e._buffer,e._streamPos,t),e._pos>=e._windowSize&&(e._pos=0),e._streamPos=e._pos}function S(e,t){var n=e._pos-t-1;return n<0&&(n+=e._windowSize),e._buffer[n]}function x(e,t){e._buffer[e._pos++]=t,e._pos>=e._windowSize&&E(e)}function T(e){E(e),e._stream=null}function N(e){return e-=2,e<4?e:3}function C(e){return e<4?0:e<10?e-3:e-6}function k(e,t){return e.decoder=t,e.encoder=null,e.alive=1,e}function L(e){return!e.alive,e.encoder||A(e),e.alive}function A(e){var r=M(e.decoder);r==-1,e.inBytesProcessed=t,e.outBytesProcessed=e.decoder.nowPos64;if(r||o(e.decoder.outSize,n)>=0&&o(e.decoder.nowPos64,e.decoder.outSize)>=0)E(e.decoder.m_OutWindow),T(e.decoder.m_OutWindow),e.decoder.m_RangeDecoder.Stream=null,e.alive=0}function O(e,t,r,i){return e.m_RangeDecoder.Stream=t,T(e.m_OutWindow),e.m_OutWindow._stream=r,D(e),e.state=0,e.rep0=0,e.rep1=0,e.rep2=0,e.rep3=0,e.outSize=i,e.nowPos64=n,e.prevByte=0,k({},e)}function M(e){var t,n,i,u,l,c;c=f(e.nowPos64)&e.m_PosStateMask;if(!G(e.m_RangeDecoder,e.m_IsMatchDecoders,(e.state<<4)+c))t=U(e.m_LiteralDecoder,f(e.nowPos64),e.prevByte),e.state<7?e.prevByte=W(t,e.m_RangeDecoder):e.prevByte=X(t,e.m_RangeDecoder,S(e.m_OutWindow,e.rep0)),x(e.m_OutWindow,e.prevByte),e.state=C(e.state),e.nowPos64=s(e.nowPos64,r);else{if(G(e.m_RangeDecoder,e.m_IsRepDecoders,e.state))i=0,G(e.m_RangeDecoder,e.m_IsRepG0Decoders,e.state)?(G(e.m_RangeDecoder,e.m_IsRepG1Decoders,e.state)?(G(e.m_RangeDecoder,e.m_IsRepG2Decoders,e.state)?(n=e.rep3,e.rep3=e.rep2):n=e.rep2,e.rep2=e.rep1):n=e.rep1,e.rep1=e.rep0,e.rep0=n):G(e.m_RangeDecoder,e.m_IsRep0LongDecoders,(e.state<<4)+c)||(e.state=e.state<7?9:11,i=1),i||(i=F(e.m_RepLenDecoder,e.m_RangeDecoder,c)+2,e.state=e.state<7?8:11);else{e.rep3=e.rep2,e.rep2=e.rep1,e.rep1=e.rep0,i=2+F(e.m_LenDecoder,e.m_RangeDecoder,c),e.state=e.state<7?7:10,l=J(e.m_PosSlotDecoder[N(i)],e.m_RangeDecoder);if(l>=4){u=(l>>1)-1,e.rep0=(2|l&1)<<u;if(l<14)e.rep0+=Q(e.m_PosDecoders,e.rep0-l-1,e.m_RangeDecoder,u);else{e.rep0+=Y(e.m_RangeDecoder,u-4)<<4,e.rep0+=K(e.m_PosAlignDecoder,e.m_RangeDecoder);if(e.rep0<0)return e.rep0==-1?1:-1}}else e.rep0=l}if(o(a(e.rep0),e.nowPos64)>=0||e.rep0>=e.m_DictionarySizeCheck)return-1;b(e.m_OutWindow,e.rep0,i),e.nowPos64=s(e.nowPos64,a(i)),e.prevByte=S(e.m_OutWindow,0)}return 0}function _(e){e.m_OutWindow={},e.m_RangeDecoder={},e.m_IsMatchDecoders=i(192),e.m_IsRepDecoders=i(12),e.m_IsRepG0Decoders=i(12),e.m_IsRepG1Decoders=i(12),e.m_IsRepG2Decoders=i(12),e.m_IsRep0LongDecoders=i(192),e.m_PosSlotDecoder=i(4),e.m_PosDecoders=i(114),e.m_PosAlignDecoder=$({},4),e.m_LenDecoder=I({}),e.m_RepLenDecoder=I({}),e.m_LiteralDecoder={};for(var t=0;t<4;++t)e.m_PosSlotDecoder[t]=$({},6);return e}function D(e){e.m_OutWindow._streamPos=0,e.m_OutWindow._pos=0,et(e.m_IsMatchDecoders),et(e.m_IsRep0LongDecoders),et(e.m_IsRepDecoders),et(e.m_IsRepG0Decoders),et(e.m_IsRepG1Decoders),et(e.m_IsRepG2Decoders),et(e.m_PosDecoders),z(e.m_LiteralDecoder);for(var t=0;t<4;++t)et(e.m_PosSlotDecoder[t].Models);q(e.m_LenDecoder),q(e.m_RepLenDecoder),et(e.m_PosAlignDecoder.Models),Z(e.m_RangeDecoder)}function P(e,t){var n,r,i,s,o,u,a;if(t.length<5)return 0;a=t[0]&255,i=a%9,u=~~(a/9),s=u%5,o=~~(u/5),n=0;for(r=0;r<4;++r)n+=(t[1+r]&255)<<r*8;return n>99999999||!B(e,i,s,o)?0:H(e,n)}function H(e,t){return t<0?0:(e.m_DictionarySize!=t&&(e.m_DictionarySize=t,e.m_DictionarySizeCheck=Math.max(e.m_DictionarySize,1),w(e.m_OutWindow,Math.max(e.m_DictionarySizeCheck,4096))),1)}function B(e,t,n,r){if(t>8||n>4||r>4)return 0;R(e.m_LiteralDecoder,n,t);var i=1<<r;return j(e.m_LenDecoder,i),j(e.m_RepLenDecoder,i),e.m_PosStateMask=i-1,1}function j(e,t){for(;e.m_NumPosStates<t;++e.m_NumPosStates)e.m_LowCoder[e.m_NumPosStates]=$({},3),e.m_MidCoder[e.m_NumPosStates]=$({},3)}function F(e,t,n){if(!G(t,e.m_Choice,0))return J(e.m_LowCoder[n],t);var r=8;return G(t,e.m_Choice,1)?r+=8+J(e.m_HighCoder,t):r+=J(e.m_MidCoder[n],t),r}function I(e){return e.m_Choice=i(2),e.m_LowCoder=i(16),e.m_MidCoder=i(16),e.m_HighCoder=$({},8),e.m_NumPosStates=0,e}function q(e){et(e.m_Choice);for(var t=0;t<e.m_NumPosStates;++t)et(e.m_LowCoder[t].Models),et(e.m_MidCoder[t].Models);et(e.m_HighCoder.Models)}function R(e,t,n){var r,s;if(e.m_Coders!=null&&e.m_NumPrevBits==n&&e.m_NumPosBits==t)return;e.m_NumPosBits=t,e.m_PosMask=(1<<t)-1,e.m_NumPrevBits=n,s=1<<e.m_NumPrevBits+e.m_NumPosBits,e.m_Coders=i(s);for(r=0;r<s;++r)e.m_Coders[r]=V({})}function U(e,t,n){return e.m_Coders[((t&e.m_PosMask)<<e.m_NumPrevBits)+((n&255)>>>8-e.m_NumPrevBits)]}function z(e){var t,n;n=1<<e.m_NumPrevBits+e.m_NumPosBits;for(t=0;t<n;++t)et(e.m_Coders[t].m_Decoders)}function W(e,t){var n=1;do n=n<<1|G(t,e.m_Decoders,n);while(n<256);return n<<24>>24}function X(e,t,n){var r,i,s=1;do{i=n>>7&1,n<<=1,r=G(t,e.m_Decoders,(1+i<<8)+s),s=s<<1|r;if(i!=r){while(s<256)s=s<<1|G(t,e.m_Decoders,s);break}}while(s<256);return s<<24>>24}function V(e){return e.m_Decoders=i(768),e}function $(e,t){return e.NumBitLevels=t,e.Models=i(1<<t),e}function J(e,t){var n,r=1;for(n=e.NumBitLevels;n!=0;--n)r=(r<<1)+G(t,e.Models,r);return r-(1<<e.NumBitLevels)}function K(e,t){var n,r,i=1,s=0;for(r=0;r<e.NumBitLevels;++r)n=G(t,e.Models,i),i<<=1,i+=n,s|=n<<r;return s}function Q(e,t,n,r){var i,s,o=1,u=0;for(s=0;s<r;++s)i=G(n,e,t+o),o<<=1,o+=i,u|=i<<s;return u}function G(e,t,n){var r,i=t[n];return r=(e.Range>>>11)*i,(e.Code^-2147483648)<(r^-2147483648)?(e.Range=r,t[n]=i+(2048-i>>>5)<<16>>16,e.Range&-16777216||(e.Code=e.Code<<8|h(e.Stream),e.Range<<=8),0):(e.Range-=r,e.Code-=r,t[n]=i-(i>>>5)<<16>>16,e.Range&-16777216||(e.Code=e.Code<<8|h(e.Stream),e.Range<<=8),1)}function Y(e,t){var n,r,i=0;for(n=t;n!=0;--n)e.Range>>>=1,r=e.Code-e.Range>>>31,e.Code-=e.Range&r-1,i=i<<1|1-r,e.Range&-16777216||(e.Code=e.Code<<8|h(e.Stream),e.Range<<=8);return i}function Z(e){e.Code=0,e.Range=-1;for(var t=0;t<5;++t)e.Code=e.Code<<8|h(e.Stream)}function et(e){for(var t=e.length-1;t>=0;--t)e[t]=1024}function tt(e){var t=0,n=0,r,i,s,o=e.length,u=[],a=[];for(;t<o;++t,++n){r=e[t]&255;if(!(r&128)){if(!r)return e;a[n]=r}else if((r&224)==192){if(t+1>=o)return e;i=e[++t]&255;if((i&192)!=128)return e;a[n]=(r&31)<<6|i&63}else{if((r&240)!=224)return e;if(t+2>=o)return e;i=e[++t]&255;if((i&192)!=128)return e;s=e[++t]&255;if((s&192)!=128)return e;a[n]=(r&15)<<12|(i&63)<<6|s&63}n==16383&&(u.push(String.fromCharCode.apply(String,a)),n=-1)}return n>0&&(a.length=n,u.push(String.fromCharCode.apply(String,a))),u.join("")}function nt(e){return e[1]+e[0]}function rt(e,t,n){var r={};r.d=y({},e);while(L(r.d.chunker));return tt(d(r.d.output))}function it(e,t){if(e.length==0)return[!1,0];if(e.length==1)return[t.startsWith(e[0]),0];var n=0,r=e.length;for(;;){if(r<=1)break;var i=n+r/2|0;if(t<e[i])r=i-n;else{if(!(t>e[i]))return[!0,n];var s=n+r;n=i+1,r=s-n}}return n==e.length?[!1,n-1]:n<0?[!1,0]:t<e[n]?n==0?[!1,n]:[t.startsWith(e[n-1]),n-1]:t>e[n]?[t.startsWith(e[n]),n]:[!0,n]}function st(e){if(e.legnth==0)return[0];var t=[],n=e.split(",");for(var r=0;r<n.length;++r)if(n[r].length==0){++r;for(var i=t[t.length-1]+1;i<=+n[r];++i)t[t.length]=i}else t[t.length]=+n[r];return t}function ot(e){var t=rt(e),n=t.split("\n"),r=Array();for(var i=0;i<n.length;++i){var s=n[i].trim();if(s.length==0)continue;if(s.length==200)b2=s;else if(s[0]>="0"&&s[0]<="9")r[r.length]=st(s);else{var o=-1;for(var u=0;u<s.length;++u)if(s[u]>="0"&&s[u]<="9"){o=u;break}var a=s.substring(0,o),f=+s.substring(o);prefixes[prefixes.length]=a;var l=r[f].slice();for(var u=0;u<l.length;++u)l[u]+=a.length;prefixes_dict[a]=l}}prefixes.sort()}function ut(e){if(e.length==0||e[0]=="'")return!1;if(e.length==1)return e[0]!="'";if(e.length==2){if(e[1]=="'"||e=="nn"||e=="kk")return!1;for(s=0;s<b2.length;s+=2)if(b2.substring(s,s+2)==e)return!1;return!0}var t=it(prefixes,e);if(!t[0])return!1;var n=t[1],r=prefixes[n],i=prefixes_dict[r];i.length==0&&(i=[r.length]);for(var s=0;s<i.length;++s)if(i[s]==e.length)return!0;return!1}var e=4294967296,t=[4294967295,-e],n=[0,0],r=[1,0];return{init:ot,test:ut}}();this.ED=ED,exports.init=function(e){ED.init(e)},exports.test=function(e){return ED.test(e)};