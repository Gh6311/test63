var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//当你用interface定义好接口以后,你的类就可以使用接口,也就是说你可以调用定义的接口了
//implements [ˈɪmpləments] 应用(贯彻,执行)
//这个叫继承接口
var Box = /** @class */ (function () {
    //任何变量多需要使用 :类型 强制指出该类型
    // private arr:Array=[1,2,3];  // ts中还没有Array类型，（有Object类型。。。）
    function Box() {
        //private 私有属性，继承后不可使用(不会继承到下面)，对象不可以调用(自觉)
        this.num = 10;
        //protected 这个也是私有的,但是它可以被继承，对象不可调用(自觉)
        this.nums = "man";
        //private和protected区别是：protected定义的私有变量可以重新赋值
        //外面靠自觉不调用私有变量
        //public 公用的，继承有效的，对象可以调用。
        this.num1 = true;
    }
    //直接写的方法，实际上是  public play(){}
    // play(){
    //所有方法也需要指出类型
    // :void 不返回任何类型
    Box.prototype.play = function () {
        console.log(this.num);
    };
    //继承的子类中将不具备这个(私有)方法
    //:Number 返回数值类型，方法最后必须返回数值，返回字符串都算你错
    //注意  :Number 写在小括号之后！！！
    Box.prototype.getSum = function () {
        return 12; //这里必须是数值，且必须返回
    };
    Box.prototype.getSums = function () {
        return { a: 1, b: 2 };
    };
    //接口中有什么方法,你在类中就要描述什么方法!!!
    Box.prototype.getAge = function () {
        return 10;
    };
    Box.prototype.getSex = function () {
        return "man";
    };
    return Box;
}());
//这个Ball继承了Box,所以也需要接口!!!
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        return _super.call(this) || this;
    }
    //public play可以覆盖超类的public play方法
    Ball.prototype.play = function () {
        //上面执行了super后，这里直接打印this.num，仍然会报错，因为上面Box里定义num时，用的是private(私有的)
        // console.log(this.num);
        this.nums = "30"; //protected定义的私有变量可以重新赋值  // 外面靠自觉不调用私有变量
    };
    //private getSum不能覆盖超累的private getSum方法
    //这里写private getSum会报错！！！类“Ball”错误地扩展了基类“Box”。类型具有私有属性“getSum”的单独声明。
    /*private getSum(){

    }*/
    //可以被继承，这么写，不会报错
    //继承时,返回类型要和超类一样,且必须写返回类型
    /*protected getSums():Object{
        return {c:3};
    }*/
    //子类不写貌似可以继承过来...
    //这里写,那么接口内容就被定义覆盖了
    //接口中有什么方法,你在类中就要描述什么方法!!!
    Ball.prototype.getAge = function () {
        return 20;
    };
    Ball.prototype.getSex = function () {
        return "women";
    };
    return Ball;
}(Box));
//继承必然含有原来类当中所有方法
//接口只提供方法名,具体方法怎么写由你了
//定义接口的目的:将来可以对这种接口类型直接调用,针对player这种类型调用,
//因此普通接口名的前面必须要加一个字母"I"!!!!
//以后再使用某类型时,不需要管内容,只需要管这个对下个你是不是这中接口的,就可以调用了
//一般接口使用在观察者模式
//所有定义updata接口的,不管是什么类别,都可以直接设置,让你调用updata,因为大家都必然有uodata这个方法.?
