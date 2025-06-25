"use strict";
var main;(function($rt_globals){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end
=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData
=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data){var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data){var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data)
{var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data)
{var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data){var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta
={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum
=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache
===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long",
"J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double","D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex)
{throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException
=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,
javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,
arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+
1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),
arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i
=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value)
{if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)
===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr
=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i
=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum
=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName
:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f){return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,
p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i)
{javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new $rt_globals.DataView(new $rt_globals.ArrayBuffer(8));var $rt_doubleToLongBits;var $rt_longBitsToDouble;if
(typeof $rt_globals.BigInt!=='function'){$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else {$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,
true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){var hi=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n>>$rt_globals.BigInt(32)));var lo=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n&$rt_globals.BigInt(0xFFFFFFFF)));$rt_numberConversionView.setInt32(0,lo,true);$rt_numberConversionView.setInt32(4,hi,true);return $rt_numberConversionView.getFloat64(0,
true);};}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,
JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage.toString();}}return this[defaultMessage];}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e)
{return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item)
{++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName
+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if
(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val, -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val
|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};Long_fromInt=function(val){return $rt_globals.BigInt(val);};Long_fromNumber=function(val)
{return $rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv
=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function()
{superclass.call(this);};}function $rt_setCloneMethod(target, f){target.by=f;}
function $rt_cls(cls){return FY(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FJ(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.g.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return F3;}
function $rt_throwableMessage(t){return Fu(t);}
function $rt_throwableCause(t){return Fz(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(F4());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return F5(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var E=$rt_throw;var F6=$rt_compare;var F7=$rt_nullCheck;var Bp=$rt_cls;var D6=$rt_createArray;var FR=$rt_isInstance;var F8=$rt_nativeThread;var F9=$rt_suspending;var F$=$rt_resuming;var F_=$rt_invalidPointer;var D=$rt_s;var S=$rt_eraseClinit;var Fa=$rt_imul;var ES=$rt_wrapException;var Ga=$rt_checkBounds;var Gb=$rt_checkUpperBound;var Gc=$rt_checkLowerBound;var Gd=$rt_wrapFunction0;var Ge=$rt_wrapFunction1;var Gf=$rt_wrapFunction2;var Gg=$rt_wrapFunction3;var Gh=$rt_wrapFunction4;var C=$rt_classWithoutFields;var F1
=$rt_createArrayFromData;var Gi=$rt_createCharArrayFromData;var Gj=$rt_createByteArrayFromData;var Gk=$rt_createShortArrayFromData;var Gl=$rt_createIntArrayFromData;var Gm=$rt_createBooleanArrayFromData;var Gn=$rt_createFloatArrayFromData;var Go=$rt_createDoubleArrayFromData;var Gp=$rt_createLongArrayFromData;var Gq=$rt_createBooleanArray;var B9=$rt_createByteArray;var Gr=$rt_createShortArray;var W=$rt_createCharArray;var Gs=$rt_createIntArray;var Gt=$rt_createLongArray;var Gu=$rt_createFloatArray;var Gv=$rt_createDoubleArray;var F6
=$rt_compare;var Gw=$rt_castToClass;var Gx=$rt_castToInterface;var Gy=Long_toNumber;var Gz=Long_fromInt;var GA=Long_fromNumber;var GB=Long_create;var GC=Long_ZERO;var GD=Long_hi;var GE=Long_lo;
function B(){this.$id$=0;}
function GF(){var a=new B();G(a);return a;}
function G(a){}
function Ez(a){var b,c;b=Dx(CI(a));c=N();F(F(c,D(0)),b);return K(c);}
function CI(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function Fc(a){var b,c,d;if(!FR(a,Cd)){b=a;if(b.constructor.$meta.item===null)E(FT());}c=Ek(a);b=c;d=$rt_nextId();b.$id$=d;return c;}
function Ba(){var a=this;B.call(a);a.bv=null;a.J=null;a.z=0;a.K=0;}
function GG(){var a=new Ba();Ds(a);return a;}
function GH(a){var b=new Ba();B3(b,a);return b;}
function GI(a){var b=new Ba();Dt(b,a);return b;}
function Ds(a){a.z=1;a.K=1;a.G();}
function B3(a,b){a.z=1;a.K=1;a.G();a.bv=b;}
function Dt(a,b){a.z=1;a.K=1;a.G();a.J=b;}
function EC(a){return a;}
function Fu(a){return a.bv;}
function Fz(a){return a.J===a?null:a.J;}
var Q=C(Ba);
function GJ(){var a=new Q();B5(a);return a;}
function GK(a){var b=new Q();CP(b,a);return b;}
function B5(a){Ds(a);}
function CP(a,b){B3(a,b);}
var H=C(Q);
function GL(){var a=new H();V(a);return a;}
function F5(a){var b=new H();BT(b,a);return b;}
function V(a){B5(a);}
function BT(a,b){CP(a,b);}
var L=C(H);
function GM(){var a=new L();C4(a);return a;}
function FI(a){var b=new L();U(b,a);return b;}
function C4(a){V(a);}
function U(a,b){BT(a,b);}
var C8=C(H);
function D2(){var a=new C8();Ee(a);return a;}
function Ee(a){V(a);}
var DR=C();
function Fj(b,c){var d,e,f,g;d=b.data;e=W(c);f=BI(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Bw(){var a=this;B.call(a);a.v=0;a.bt=0;a.bw=null;a.cb=null;}
function Dj(a,b,c,d,e,f,g,h){G(a);a.v=d;a.bt=e;a.bw=h;a.cb=g;}
function Fi(b,c){return (BD()*((c-b|0)+1|0)|0)+b|0;}
function Eo(a){return Fi(1,a.bt);}
function El(a,b){var c,d,e;c=Er();d=a.bw;e=N();F(F(e,D(1)),d);c.b4(K(e));}
function Ex(a,b){a.v=b;}
function E5(a){return a.v;}
var Bt=C();
var GN=null;var GO=null;function Er(){var b;if(GN===null){b=new B_;EH();Dy(b,GP,0);GN=b;}return GN;}
function FS(){if(GO===null)GO=FD();return GO;}
function BO(){var a=this;B.call(a);a.bs=null;a.bO=null;a.C=0;a.br=0;a.A=0;a.V=0;a.ca=null;a.co=null;}
function GQ(a,b,c,d,e,f){var g=new BO();Dn(g,a,b,c,d,e,f);return g;}
function Dn(a,b,c,d,e,f,g){G(a);a.bs=b;a.bO=c;a.C=d;a.br=e;a.A=f;a.V=g;a.ca=null;a.co=null;}
function DU(a){return a.bs;}
function Fr(a){return a.C;}
function DW(a,b){a.C=b;}
function Fx(a,b){a.br=b;}
function Fv(a){return a.A;}
function Fe(a,b){a.A=b;}
function En(a,b){a.V=b;}
var T=C(BO);
function Bs(a,b,c,d,e,f,g){Dn(a,b,c,d,e,f,g);if(e<0)a.N(0);else if(e<=25)a.N(e);else a.N(25);}
var DC=C(T);
function GR(a,b,c,d){var e=new DC();Ea(e,a,b,c,d);return e;}
function Ea(a,b,c,d,e){Bs(a,b,c,d,e,0,0);a.E(B1(a,10,15));a.O(B1(a,5,10));}
function B1(a,b,c){return (BD()*((c-b|0)+1|0)|0)+b|0;}
function DE(){var a=this;B.call(a);a.bk=null;a.W=null;a.bg=0;a.bd=0;}
function FH(a,b){var c=new DE();EQ(c,a,b);return c;}
function EQ(a,b,c){G(a);a.bk=b;a.W=c;}
function D7(a){return X(a.bk);}
function D9(a,b){return R(a.W)<b?0:1;}
function EX(a,b){a.bg=b;}
function Fy(a,b){a.bd=b;}
var Bb=C(0);
var BG=C();
var M=C(0);
var BZ=C(BG);
var GS=null;function FC(){FC=S(BZ);Eg();}
function Dx(b){FC();return Em(b,4);}
function DG(b){var c,d,e;FC();if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;e=d>>>8;if(!e)e=d;else c=c|8;d=e>>>4;if(!d)d=e;else c=c|4;e=d>>>2;if(!e)e=d;else c=c|2;if(e>>>1)c=c|1;return (32-c|0)-1|0;}
function Eg(){GS=Bp($rt_intcls());}
var B8=C(0);
var Cu=C(Q);
function FT(){var a=new Cu();Ep(a);return a;}
function Ep(a){B5(a);}
function Bd(){var a=this;B.call(a);a.Y=0;a.e=0;a.i=0;a.s=0;}
function B4(a,b){G(a);a.s=(-1);a.Y=b;a.i=b;}
function Bm(a){return a.e;}
function Df(a,b){var c,d,e;if(b>=0&&b<=a.i){a.e=b;if(b<a.s)a.s=0;return a;}c=new Bi;d=a.i;e=N();Bv(I(F(I(F(e,D(2)),b),D(3)),d),93);DH(c,K(e));E(c);}
function C0(a){a.e=0;a.i=a.Y;a.s=(-1);return a;}
function R(a){return a.i-a.e|0;}
function X(a){return a.e>=a.i?0:1;}
function BE(){var a=this;Bd.call(a);a.bf=0;a.T=null;a.cv=null;}
function DA(a,b,c,d,e,f){B4(a,c);EB();a.cv=GT;a.bf=b;a.T=d;a.e=e;a.i=f;}
function Es(b,c,d){return FO(0,b.data.length,b,c,c+d|0,0,0);}
function D1(b){return Es(b,0,b.data.length);}
function FA(a,b,c,d){var e,f,g,h,i,j,k,l;if(!d)return a;if(a.bY())E(FF());if(R(a)<d)E(FQ());if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new L;i=N();I(F(I(F(i,D(4)),g),D(5)),f);U(h,K(i));E(h);}if(d<0){h=new L;i=N();F(I(F(i,D(6)),d),D(7));U(h,K(i));E(h);}j=a.e+a.bf|0;k=0;while(k<d){l=a.T.data;g=j+1|0;f=c+1|0;l[j]=e[c];k=k+1|0;j=g;c=f;}a.e=a.e+d|0;return a;}}e=b.data;h=new L;f=e.length;i=N();Bv(I(F(I(F(i,D(8)),c),D(3)),f),41);U(h,K(i));E(h);}
function Dd(a,b){return a.bj(b,0,b.data.length);}
function BV(a){C0(a);return a;}
var Z=C(Ba);
function GU(a){var b=new Z();Ci(b,a);return b;}
function GV(a){var b=new Z();Cw(b,a);return b;}
function Ci(a,b){B3(a,b);}
function Cw(a,b){Dt(a,b);}
var Be=C(Z);
function GW(a){var b=new Be();CX(b,a);return b;}
function CX(a,b){Ci(a,b);}
var Bc=C(Be);
function GX(a){var b=new Bc();Cb(b,a);return b;}
function Cb(a,b){CX(a,b);}
var DM=C(Bc);
function GY(a){var b=new DM();EE(b,a);return b;}
function EE(a,b){Cb(a,b);}
function BJ(){var a=this;B.call(a);a.bL=null;a.bP=0;}
function DQ(a,b,c){G(a);a.bL=b;a.bP=c;}
var Bh=C();
var GZ=null;var G0=null;function Bz(){Bz=S(Bh);E1();}
function Cc(b){Bz();return (b&64512)!=55296?0:1;}
function B$(b){Bz();return (b&64512)!=56320?0:1;}
function CN(b){Bz();return !Cc(b)&&!B$(b)?0:1;}
function DD(b,c){Bz();return ((b&1023)<<10|c&1023)+65536|0;}
function BK(b,c){Bz();if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function E1(){GZ=Bp($rt_charcls());G0=D6(Bh,128);}
var DJ=C();
function Em(b,c){var d,e,f,g,h,i,j,k;if(!b)return D(9);d=1<<c;e=d-1|0;f=(((32-DG(b)|0)+c|0)-1|0)/c|0;g=W(f);h=Fa(f-1|0,c);i=0;while(h>=0){j=g.data;k=i+1|0;j[i]=BK(b>>>h&e,d);h=h-c|0;i=k;}return FJ(g);}
var Cf=C(0);
var Dv=C(T);
function G1(a,b,c,d){var e=new Dv();Fq(e,a,b,c,d);return e;}
function Fq(a,b,c,d,e){Bs(a,b,c,d,e,0,0);a.E(Cg(a,5,10));a.O(Cg(a,10,15));}
function Cg(a,b,c){return (BD()*((c-b|0)+1|0)|0)+b|0;}
var CD=C();
function BD(){return E4();}
function E4(){return Math.random();}
function BI(b,c){if(b<c)c=b;return c;}
function BY(b,c){if(b>c)c=b;return c;}
var Cd=C(0);
var Do=C();
var Bg=C(0);
var BP=C(0);
var BA=C(Bd);
function Cz(a,b,c,d){B4(a,b);a.e=c;a.i=d;}
function EU(b,c,d){return FN(0,b.data.length,b,c,c+d|0,0);}
function E7(a,b,c,d){var e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new L;i=N();I(F(I(F(i,D(10)),g),D(5)),f);U(h,K(i));E(h);}if(R(a)<d)E(FL());if(d<0){i=new L;h=N();F(I(F(h,D(6)),d),D(7));U(i,K(h));E(i);}j=a.e;k=0;while(k<d){g=c+1|0;f=j+1|0;e[c]=a.b5(j);k=k+1|0;c=g;j=f;}a.e=a.e+d|0;return a;}}e=b.data;i=new L;f=e.length;l=N();Bv(I(F(I(F(l,D(8)),c),D(3)),f),41);U(i,K(l));E(i);}
function DV(a,b){Df(a,b);return a;}
var Br=C(BA);
function Dp(a,b,c,d){Cz(a,b,c,d);}
function CH(){var a=this;Br.call(a);a.cj=0;a.bn=0;a.bA=null;}
function FN(a,b,c,d,e,f){var g=new CH();Fk(g,a,b,c,d,e,f);return g;}
function Fk(a,b,c,d,e,f,g){Dp(a,c,e,f);a.bn=b;a.cj=g;a.bA=d;}
function Fs(a,b){return a.bA.data[b+a.bn|0];}
var C2=C();
function D5(b,c,d){var e,f;e=0;while(e<d){f=b.data[e+c|0];$rt_putStdout(f&255);e=e+1|0;}}
var CY=C(L);
function ET(){var a=new CY();EJ(a);return a;}
function EJ(a){C4(a);}
var BF=C(0);
var B6=C(0);
var Y=C();
function BR(a){G(a);}
function BL(){Y.call(this);this.P=null;}
function G2(a){var b=new BL();C1(b,a);return b;}
function C1(a,b){BR(a);a.P=b;}
function Bq(){B.call(this);this.bQ=null;}
var GT=null;var G3=null;function EB(){EB=S(Bq);Fb();}
function D4(a){var b=new Bq();Cp(b,a);return b;}
function Cp(a,b){EB();G(a);a.bQ=b;}
function Fb(){GT=D4(D(11));G3=D4(D(12));}
function Bo(){Y.call(this);this.ch=null;}
function DF(a){BR(a);a.ch=B9(1);}
var BW=C(Bo);
var GP=null;function EH(){EH=S(BW);EM();}
function FP(){var a=new BW();CF(a);return a;}
function CF(a){EH();DF(a);}
function EO(a,b,c,d){D5(b,c,d);}
function EM(){GP=FP();}
var BU=C(0);
function Bn(){var a=this;B.call(a);a.cr=null;a.t=null;a.bG=0.0;a.S=0.0;a.F=null;a.I=null;a.l=0;}
function CL(a,b,c,d,e){G(a);BS();a.F=G4;a.I=G4;Cy(a,e);a.cr=b;a.t=e.by();a.bG=c;a.S=d;}
function Dr(a,b,c,d){var e;e=B9(1);e.data[0]=63;CL(a,b,c,d,e);}
function Cy(a,b){var c;if(b!==null){c=b.data.length;if(c&&c>=a.S)return;}E(Cv(D(13)));}
function Ch(a,b){if(b!==null){a.F=b;a.bH(b);return a;}E(Cv(D(14)));}
function EL(a,b){}
function CB(a,b){if(b!==null){a.I=b;a.bR(b);return a;}E(Cv(D(14)));}
function Eh(a,b){}
function Cj(a,b,c,d){var e,f,g,h,$$je;a:{if(a.l!=3){if(d)break a;if(a.l!=2)break a;}E(D2());}a.l=!d?1:2;while(true){try{e=a.b0(b,c);}catch($$e){$$je=ES($$e);if($$je instanceof H){f=$$je;E(FZ(f));}else{throw $$e;}}if(e.bI()){if(!d)return e;g=R(b);if(g<=0)return e;e=BQ(g);}else if(e.L())break;h=!e.ba()?a.F:a.I;b:{BS();if(h!==G5){if(h===G6)break b;else return e;}if(R(c)<a.t.data.length)return G7;Dd(c,a.t);}b.bh(Bm(b)+e.c()|0);}return e;}
function CV(a,b){var c;if(a.l!=2&&a.l!=4)E(D2());c=a.b8(b);J();if(c===G8)a.l=3;return c;}
function D_(a,b){J();return G8;}
var Cq=C(Bw);
function G9(a,b,c,d,e){var f=new Cq();ED(f,a,b,c,d,e);return f;}
function ED(a,b,c,d,e,f){C6();Dj(a,b,c,d,e,0,G$,D(15));}
function BM(){var a=this;B.call(a);a.b=null;a.d=0;}
function G_(){var a=new BM();CG(a);return a;}
function Ha(a){var b=new BM();Db(b,a);return b;}
function CG(a){Db(a,16);}
function Db(a,b){G(a);a.b=W(b);}
function CR(a,b){return a.Z(a.d,b);}
function Ck(a,b){return a.y(a.d,b);}
function Cm(a,b,c){var d,e,f;if(b>=0&&b<=a.d){if(c===null)c=D(16);else if(c.bB())return a;a.D(a.d+c.c()|0);d=a.d-1|0;while(d>=b){a.b.data[d+c.c()|0]=a.b.data[d];d=d+(-1)|0;}a.d=a.d+c.c()|0;d=0;while(d<c.c()){e=a.b.data;f=b+1|0;e[b]=c.m(d);d=d+1|0;b=f;}return a;}E(ET());}
function CE(a,b){return a.cq(b,10);}
function E6(a,b,c){return a.cg(a.d,b,c);}
function Ej(a,b,c,d){var e,f,g,h,i,j,k,l;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)Bk(a,b,b+1|0);else{Bk(a,b,b+2|0);f=a.b.data;g=b+1|0;f[b]=45;b=g;}a.b.data[b]=BK(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Fa(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;Bk(a,b,b+i|0);if(e)l=b;else{f=a.b.data;l=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.b.data;g=l+1|0;f[l]=BK(c/k|0,d);c=c%k|0;k=k/d|0;l=g;}}}return a;}
function C7(a,b){return a.bu(a.d,b);}
function CW(a,b,c){Bk(a,b,b+1|0);a.b.data[b]=c;return a;}
function CU(a,b,c){return a.y(b,c===null?D(16):c.r());}
function Cr(a,b){var c;if(a.b.data.length>=b)return;c=a.b.data.length>=1073741823?2147483647:BY(b,BY(a.b.data.length*2|0,5));a.b=Fj(a.b,c);}
function C5(a){return FU(a.b,0,a.d);}
function DK(a){return a.d;}
function Dk(a,b,c,d,e){var f,g,h,i;if(b>c)E(FI(D(17)));while(b<c){f=d.data;g=e+1|0;h=a.b.data;i=b+1|0;f[e]=h[b];e=g;b=i;}}
function De(a,b){a.d=b;}
function Bk(a,b,c){var d,e;d=a.d-b|0;a.D((a.d+c|0)-b|0);e=d-1|0;while(e>=0){a.b.data[c+e|0]=a.b.data[b+e|0];e=e+(-1)|0;}a.d=a.d+(c-b|0)|0;}
var CQ=C(BM);
function N(){var a=new CQ();Ey(a);return a;}
function Ey(a){CG(a);}
function F(a,b){CR(a,b);return a;}
function Eq(a,b){Ck(a,b);return a;}
function I(a,b){CE(a,b);return a;}
function Bv(a,b){C7(a,b);return a;}
function EV(a,b,c){CU(a,b,c);return a;}
function Fg(a,b,c){CW(a,b,c);return a;}
function E2(a,b,c){Cm(a,b,c);return a;}
function E$(a,b){De(a,b);}
function Eb(a,b,c,d,e){Dk(a,b,c,d,e);}
function D3(a){return DK(a);}
function K(a){return C5(a);}
function E_(a,b){Cr(a,b);}
function Eu(a,b,c){return a.bV(b,c);}
function DZ(a,b,c){return a.bS(b,c);}
function Fo(a,b,c){return a.bM(b,c);}
var CM=C(T);
function Hb(a,b,c,d){var e=new CM();Ed(e,a,b,c,d);return e;}
function Ed(a,b,c,d,e){Bs(a,b,c,d,e,0,0);a.E(BX(a,7,12));a.O(BX(a,7,12));}
function BX(a,b,c){return (BD()*((c-b|0)+1|0)|0)+b|0;}
var Bx=C();
function CS(a){G(a);}
var CA=C(Bx);
function FD(){var a=new CA();DX(a);return a;}
function DX(a){CS(a);}
var B7=C(0);
function DP(){var a=this;BE.call(a);a.bZ=0;a.bp=0;}
function FO(a,b,c,d,e,f,g){var h=new DP();EG(h,a,b,c,d,e,f,g);return h;}
function EG(a,b,c,d,e,f,g,h){DA(a,b,c,d,e,f);a.bZ=g;a.bp=h;}
function Fl(a){return a.bp;}
var DO=C(H);
function FQ(){var a=new DO();E0(a);return a;}
function E0(a){V(a);}
var Cl=C(Z);
function FZ(a){var b=new Cl();Et(b,a);return b;}
function Et(a,b){Cw(a,b);}
function By(){var a=this;B.call(a);a.n=0;a.be=0;}
var G8=null;var G7=null;function J(){J=S(By);D8();}
function CK(a,b){var c=new By();Dw(c,a,b);return c;}
function Dw(a,b,c){J();G(a);a.n=b;a.be=c;}
function EI(a){return a.n?0:1;}
function Fm(a){return a.n!=1?0:1;}
function E3(a){return !a.b9()&&!a.ba()?0:1;}
function Fp(a){return a.n!=2?0:1;}
function Fw(a){return a.n!=3?0:1;}
function EA(a){if(a.cp())return a.be;E(FX());}
function BQ(b){J();return CK(2,b);}
function D8(){G8=CK(0,0);G7=CK(1,0);}
var CZ=C();
function Ek(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function BC(){var a=this;B.call(a);a.bW=null;a.cn=null;}
function Dc(a,b,c){var d,e,f,g;d=c.data;G(a);Dz(b);e=d.length;f=0;while(f<e){g=d[f];Dz(g);f=f+1|0;}a.bW=b;a.cn=c.by();}
function Dz(b){var c,d;if(b.bB())E(Da(b));if(!DB(b.m(0)))E(Da(b));c=1;while(c<b.c()){a:{d=b.m(c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(DB(d))break a;else E(Da(b));}}c=c+1|0;}}
function DB(b){var c;a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}c=1;break a;}c=0;}return c;}
function Bf(){B.call(this);this.cl=null;}
var G6=null;var G5=null;var G4=null;function BS(){BS=S(Bf);D$();}
function Cx(a){var b=new Bf();Dq(b,a);return b;}
function Dq(a,b){BS();G(a);a.cl=b;}
function D$(){G6=Cx(D(18));G5=Cx(D(19));G4=Cx(D(20));}
var Bi=C(H);
function Hc(){var a=new Bi();CT(a);return a;}
function Cv(a){var b=new Bi();DH(b,a);return b;}
function CT(a){V(a);}
function DH(a,b){BT(a,b);}
function DI(){Bi.call(this);this.bK=null;}
function Da(a){var b=new DI();ER(b,a);return b;}
function ER(a,b){CT(a);a.bK=b;}
function Bj(){var a=this;B.call(a);a.g=null;a.o=0;}
var Hd=null;function Fh(){Fh=S(Bj);Ff();}
function FJ(a){var b=new Bj();C9(b,a);return b;}
function FU(a,b,c){var d=new Bj();DN(d,a,b,c);return d;}
function C9(a,b){var c,d,e;Fh();c=b.data;G(a);d=c.length;a.g=W(d);e=0;while(e<d){a.g.data[e]=c[e];e=e+1|0;}}
function DN(a,b,c,d){var e,f;Fh();G(a);a.g=W(d);e=0;while(e<d){f=b.data;a.g.data[e]=f[e+c|0];e=e+1|0;}}
function Ft(a,b){if(b>=0&&b<a.g.data.length)return a.g.data[b];E(ET());}
function EZ(a){return a.g.data.length;}
function EK(a){return a.g.data.length?0:1;}
function Ev(a){return a;}
function FB(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bj))return 0;c=b;if(c.c()!=a.c())return 0;d=0;while(d<c.c()){if(a.m(d)!=c.m(d))return 0;d=d+1|0;}return 1;}
function Fn(a){var b,c,d,e;a:{if(!a.o){b=a.g.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.o=(31*a.o|0)+e|0;d=d+1|0;}}}return a.o;}
function Ff(){Hd=FG();}
var Cn=C(Be);
function B_(){var a=this;BL.call(a);a.b3=0;a.B=0;a.h=null;a.Q=null;a.bx=null;}
function He(a,b){var c=new B_();Dy(c,a,b);return c;}
function Dy(a,b,c){C1(a,b);a.h=N();a.Q=W(32);a.b3=c;EN();a.bx=Hf;}
function E8(a,b,c,d){var $$je;if(!Ct(a))return;a:{try{a.P.p(b,c,d);break a;}catch($$e){$$je=ES($$e);if($$je instanceof B0){}else{throw $$e;}}a.B=1;}}
function Ct(a){if(a.P===null)a.B=1;return a.B?0:1;}
function CC(a,b,c,d){var e,f,g,h,i,j,k,l;e=b.data;f=EU(b,c,d-c|0);g=B9(BY(16,BI(e.length,1024)));h=D1(g);i=a.bx.b$();BS();j=G5;i=Ch(i,j);j=G5;k=CB(i,j);while(true){l=(Cj(k,f,h,1)).L();a.p(g,0,Bm(h));BV(h);if(!l)break;}while(true){l=(CV(k,h)).L();a.p(g,0,Bm(h));BV(h);if(!l)break;}}
function EP(a,b){(a.h.b7(b)).cf(10);Du(a);}
function Du(a){var b;b=a.h.c()<=a.Q.data.length?a.Q:W(a.h.c());a.h.bF(0,a.h.c(),b,0);CC(a,b,0,a.h.c());a.h.bq(0);}
function BN(){var a=this;Bn.call(a);a.bm=null;a.bb=null;}
function Dg(a,b,c,d){Dr(a,b,c,d);a.bm=W(512);a.bb=B9(512);}
function DT(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.bm;e=0;f=0;g=a.bb;a:{while(true){if((e+32|0)>f&&X(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=BI(R(b)+j|0,i.length);b.bU(d,j,f-j|0);e=0;}if(!X(c)){if(!X(b)&&e>=f){J();k=G8;}else{J();k=G7;}break a;}i=g.data;l=0;m=BI(R(c),i.length);n=FH(b,c);k=a.ci(d,e,f,g,l,m,n);e=n.bg;j=n.bd;if(k===null){if(!X(b)&&e>=f){J();k=G8;}else if(!X(c)&&e>=f){J();k=G7;}}c.bj(g,0,j);if(k!==null)break;}}b.bh(Bm(b)-(f-e|0)|0);return k;}
var DL=C(BN);
function FK(a){var b=new DL();Ec(b,a);return b;}
function Ec(a,b){Dg(a,b,2.0,4.0);}
function E9(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(h.H(2))break a;J();i=G7;break a;}k=e.data;n=f+1|0;k[f]=(192|l>>6)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else if(!CN(l)){if((f+3|0)>g){j=j+(-1)|0;if(h.H(3))break a;J();i=G7;break a;}k=e.data;o=f+1|0;k[f]=(224|l>>12)<<24>>24;n=o+1|0;k[o]=(128|l>>6&63)<<24>>24;m=n+1|0;k[n]=(128|l&63)<<24>>24;}else{if(!Cc(l))
{i=BQ(1);break a;}if(j>=d){if(h.cm())break a;J();i=G8;break a;}n=j+1|0;p=k[j];if(!B$(p)){j=n+(-2)|0;i=BQ(1);break a;}if((f+4|0)>g){j=n+(-2)|0;if(h.H(4))break a;J();i=G7;break a;}k=e.data;q=DD(l,p);j=f+1|0;k[f]=(240|q>>18)<<24>>24;o=j+1|0;k[j]=(128|q>>12&63)<<24>>24;j=o+1|0;k[o]=(128|q>>6&63)<<24>>24;m=j+1|0;k[j]=(128|q&63)<<24>>24;j=n;}c=j;f=m;}j=c;}h.cc(j);h.b2(f);return i;}
var BH=C(H);
function FX(){var a=new BH();CJ(a);return a;}
function CJ(a){V(a);}
var Dl=C(Bc);
function Hg(a){var b=new Dl();EW(b,a);return b;}
function EW(a,b){Cb(a,b);}
var O=C(BJ);
var G$=null;var Hh=null;var Hi=null;var Hj=null;var Hk=null;var Hl=null;function C6(){C6=S(O);EY();}
function Bu(a,b){var c=new O();Cs(c,a,b);return c;}
function Cs(a,b,c){C6();DQ(a,b,c);}
function DS(){C6();return F1(O,[G$,Hh,Hi,Hj,Hk]);}
function EY(){G$=Bu(D(21),0);Hh=Bu(D(22),1);Hi=Bu(D(23),2);Hj=Bu(D(24),3);Hk=Bu(D(25),4);Hl=DS();}
var B0=C(Q);
var C_=C(H);
function FL(){var a=new C_();DY(a);return a;}
function DY(a){V(a);}
var B2=C(0);
var Co=C();
function FG(){var a=new Co();D0(a);return a;}
function D0(a){G(a);}
var Ca=C(BC);
var Hf=null;function EN(){EN=S(Ca);Ef();}
function FE(){var a=new Ca();CO(a);return a;}
function CO(a){EN();Dc(a,D(26),D6(Bj,0));}
function Ei(a){return FK(a);}
function Ef(){Hf=FE();}
var C$=C();
function F2(b){E(FW(D(27)));}
function Di(){B.call(this);this.cd=null;}
function FV(a){var b=new Di();Ew(b,a);return b;}
function Ew(a,b){var c;G(a);a.cd=b;c=a;b.classObject=c;}
function FY(b){var c;if(b===null)return null;c=b.classObject;if(c===null)c=FV(b);return c;}
var Dm=C(BH);
function FF(){var a=new Dm();EF(a);return a;}
function EF(a){CJ(a);}
$rt_packages([]);
$rt_metadata([B,0,0,[],0,3,0,0,["r",Gd(Ez),"cy",Gd(CI),"by",Gd(Fc)],Ba,0,B,[],0,3,0,0,["G",Gd(EC),"cM",Gd(Fu),"c$",Gd(Fz)],Q,0,Ba,[],0,3,0,0,["a",Gd(B5),"f",Ge(CP)],H,0,Q,[],0,3,0,0,["a",Gd(V),"f",Ge(BT)],L,0,H,[],0,3,0,0,["a",Gd(C4),"f",Ge(U)],C8,0,H,[],0,3,0,0,["a",Gd(Ee)],DR,0,B,[],0,3,0,0,0,Bw,0,B,[],1,3,0,0,["dd",function(b,c,d,e,f,g,h){Dj(this,b,c,d,e,f,g,h);},"c1",Gd(Eo),"c3",Ge(El),"bX",Ge(Ex),"b6",Gd(E5)],Bt,0,B,[],4,3,0,0,0,BO,0,B,[],0,3,0,0,["b1",function(b,c,d,e,f,g){Dn(this,b,c,d,e,f,g);},"cY",
Gd(DU),"b6",Gd(Fr),"bX",Ge(DW),"N",Ge(Fx),"cz",Gd(Fv),"E",Ge(Fe),"O",Ge(En)],T,0,BO,[],1,3,0,0,["b1",function(b,c,d,e,f,g){Bs(this,b,c,d,e,f,g);}],DC,0,T,[],0,3,0,0,["bz",Gh(Ea)],DE,0,B,[],0,3,0,0,["cI",Gf(EQ),"cm",Gd(D7),"H",Ge(D9),"cc",Ge(EX),"b2",Ge(Fy)],Bb,0,B,[],3,3,0,0,0,BG,0,B,[Bb],1,3,0,0,0,M,0,B,[],3,3,0,0,0,BZ,0,BG,[M],0,3,0,FC,0,B8,0,B,[],3,3,0,0,0,Cu,0,Q,[],0,3,0,0,["a",Gd(Ep)],Bd,0,B,[],1,3,0,0,["cs",Ge(B4),"c6",Gd(Bm),"cJ",Ge(Df),"cZ",Gd(C0),"cN",Gd(R),"cW",Gd(X)],BE,0,Bd,[M],1,3,0,0,["cx",function(b,
c,d,e,f){DA(this,b,c,d,e,f);},"bj",Gg(FA),"cG",Ge(Dd),"cO",Gd(BV)],Z,0,Ba,[],0,3,0,0,["f",Ge(Ci),"bo",Ge(Cw)],Be,0,Z,[],0,3,0,0,["f",Ge(CX)],Bc,0,Be,[],0,3,0,0,["f",Ge(Cb)],DM,0,Bc,[],0,3,0,0,["f",Ge(EE)],BJ,0,B,[M,Bb],1,3,0,0,["bJ",Gf(DQ)],Bh,0,B,[M],0,3,0,Bz,0,DJ,0,B,[],4,3,0,0,0,Cf,0,B,[],3,3,0,0,0,Dv,0,T,[],0,3,0,0,["bz",Gh(Fq)],CD,0,B,[],4,3,0,0,0,Cd,0,B,[],3,3,0,0,0,Do,0,B,[],4,0,0,0,0,Bg,0,B,[],3,3,0,0,0,BP,0,B,[],3,3,0,0,0,BA,0,Bd,[M,BP,Bg,Cf],1,3,0,0,["b_",Gg(Cz),"bU",Gg(E7),"bh",Ge(DV)],Br,0,BA,[],
1,0,0,0,["b_",Gg(Dp)],CH,0,Br,[],0,0,0,0,["cT",function(b,c,d,e,f,g){Fk(this,b,c,d,e,f,g);},"b5",Ge(Fs)],C2,0,B,[],4,3,0,0,0,CY,0,L,[],0,3,0,0,["a",Gd(EJ)],BF,0,B,[B8],3,3,0,0,0,B6,0,B,[],3,3,0,0,0,Y,0,B,[BF,B6],1,3,0,0,["a",Gd(BR)],BL,0,Y,[],0,3,0,0,["da",Ge(C1)],Bq,0,B,[],4,3,0,EB,0,Bo,0,Y,[],1,3,0,0,["a",Gd(DF)],BW,0,Bo,[],0,3,0,EH,["p",Gg(EO)],BU,0,B,[],3,3,0,0,0,Bn,0,B,[],1,3,0,0,["cR",Gh(CL),"cw",Gg(Dr),"c7",Ge(Ch),"bH",Ge(EL),"c9",Ge(CB),"bR",Ge(Eh),"cF",Gg(Cj),"c4",Ge(CV),"b8",Ge(D_)],Cq,0,Bw,[],0,3,
0,0,["cC",function(b,c,d,e,f){ED(this,b,c,d,e,f);}]]);
$rt_metadata([BM,0,B,[Bb,Bg],0,0,0,0,["a",Gd(CG),"cs",Ge(Db),"cS",Ge(CR),"dc",Ge(Ck),"y",Gf(Cm),"c2",Ge(CE),"cq",Gf(E6),"cg",Gg(Ej),"cK",Ge(C7),"bu",Gf(CW),"Z",Gf(CU),"D",Ge(Cr),"r",Gd(C5),"c",Gd(DK),"bF",Gh(Dk),"bq",Ge(De)],CQ,0,BM,[BP],0,3,0,0,["a",Gd(Ey),"c5",Ge(F),"b7",Ge(Eq),"cX",Ge(I),"cf",Ge(Bv),"bV",Gf(EV),"bS",Gf(Fg),"bM",Gf(E2),"bq",Ge(E$),"bF",Gh(Eb),"c",Gd(D3),"r",Gd(K),"D",Ge(E_),"Z",Gf(Eu),"bu",Gf(DZ),"y",Gf(Fo)],CM,0,T,[],0,3,0,0,["bz",Gh(Ed)],Bx,0,B,[BF],1,3,0,0,["a",Gd(CS)],CA,0,Bx,[],0,0,0,
0,["a",Gd(DX)],B7,0,B,[],3,3,0,0,0,DP,0,BE,[],0,0,0,0,["c0",function(b,c,d,e,f,g,h){EG(this,b,c,d,e,f,g,h);},"bY",Gd(Fl)],DO,0,H,[],0,3,0,0,["a",Gd(E0)],Cl,0,Z,[],0,3,0,0,["bo",Ge(Et)],By,0,B,[],0,3,0,J,["cD",Gf(Dw),"bI",Gd(EI),"L",Gd(Fm),"cp",Gd(E3),"b9",Gd(Fp),"ba",Gd(Fw),"c",Gd(EA)],CZ,0,B,[],4,3,0,0,0,BC,0,B,[M],1,3,0,0,["c8",Gf(Dc)],Bf,0,B,[],0,3,0,BS,["f",Ge(Dq)],Bi,0,H,[],0,3,0,0,["a",Gd(CT),"f",Ge(DH)],DI,0,Bi,[],0,3,0,0,["f",Ge(ER)],Bj,0,B,[Bb,M,Bg],0,3,0,Fh,["cL",Ge(C9),"cV",Gg(DN),"m",Ge(Ft),"c",
Gd(EZ),"bB",Gd(EK),"r",Gd(Ev),"c_",Ge(FB),"cE",Gd(Fn)],Cn,0,Be,[],0,3,0,0,0,B_,0,BL,[],0,3,0,0,["de",Gf(Dy),"p",Gg(E8),"b4",Ge(EP)],BN,0,Bn,[],1,3,0,0,["cw",Gg(Dg),"b0",Gf(DT)],DL,0,BN,[],0,3,0,0,["db",Ge(Ec),"ci",function(b,c,d,e,f,g,h){return E9(this,b,c,d,e,f,g,h);}],BH,0,H,[],0,3,0,0,["a",Gd(CJ)],Dl,0,Bc,[],0,3,0,0,["f",Ge(EW)],O,0,BJ,[],12,3,0,C6,0,B0,0,Q,[],0,3,0,0,0,C_,0,H,[],0,3,0,0,["a",Gd(DY)],B2,0,B,[],3,3,0,0,0,Co,0,B,[B2],0,3,0,0,["a",Gd(D0)],Ca,0,BC,[],0,3,0,EN,["b$",Gd(Ei)],C$,0,B,[],0,3,0,0,
0,Di,0,B,[B7,BU],0,3,0,0,0,Dm,0,BH,[],0,3,0,0,["a",Gd(EF)]]);
function $rt_array(cls,data){this.dE=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["<java_object>@","Le monstre utilise sa capacité spéciale : ","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","0","The last char in dst ","BIG_ENDIAN","LITTLE_ENDIAN","Replacement preconditions do not hold","Action must be non-null","Souffle","null","Index out of bounds","IGNORE","REPLACE","REPORT",
"FEU","BOIS","EAU","METAL","TERRE","UTF-8","Class not found: java.util.Scanner"]);
Bj.prototype.toString=function(){return $rt_ustr(this);};
Bj.prototype.valueOf=Bj.prototype.toString;B.prototype.toString=function(){return $rt_ustr(Ez(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(F2);
main.javaException=$rt_javaException;
})(this);
